/* app2: spaced-repetition review, quizzes, listening (TTS) */

/* ---------- SRS ---------- */
function cardQueue(trackId) {
  rollDay(); const t = today(), due = [], fresh = [];
  IDX.cards.forEach(c => {
    if (trackId && c.tr !== trackId) return;
    if (!(S.prog[c.tid] >= 1)) return;
    const s = S.srs[c.cid];
    if (!s) fresh.push(c); else if (s.d <= t) due.push(c);
  });
  due.sort((a, b) => S.srs[a.cid].d - S.srs[b.cid].d);
  const room = Math.max(0, S.goal.newc - S.day.newc);
  return {due, fresh: fresh.slice(0, room), freshAll: fresh.length};
}
function dueTotal() { if (!IDX) return 0; const q = cardQueue(); return q.due.length + q.fresh.length; }
let R = null;
function pReview() {
  if (R && R.queue.length) return reviewCard();
  const fin = R && R.finished; R = null;
  const q = cardQueue();
  const per = IDX.tracks.map(tk => { const x = cardQueue(tk.id); return {tk, n: x.due.length + x.fresh.length}; }).filter(x => x.n);
  const none = !q.due.length && !q.fresh.length;
  return '<h1>' + tr('المراجعة المتباعدة', 'Spaced review') + '</h1><p class="sub">' + tr('البطاقات بتظهر فقط للمواضيع اللي علّمت عليها "قيد الدراسة" أو "متقن". كل تقييم بيحدد موعد ظهورها التالي.', 'Cards appear only for topics marked Studying or Mastered. Your rating sets the next review date.') + '</p>' +
    (fin ? '<div class="card" style="border-color:var(--ok)"><b>✔ ' + tr('خلّصت جلسة المراجعة', 'Session complete') + '</b><div class="small muted">' + fin + ' ' + tr('تقييم', 'ratings') + '</div></div>' : '') +
    '<div class="grid" style="margin:12px 0"><div class="card stat"><b>' + q.due.length + '</b><span>' + tr('مستحقة', 'Due') + '</span></div><div class="card stat"><b>' + q.fresh.length + '</b><span>' + tr('جديدة اليوم', 'New today') + '</span></div><div class="card stat"><b>' + S.day.cards + '/' + S.goal.cards + '</b><span>' + tr('هدف اليوم', 'Daily goal') + '</span></div></div>' +
    (none ? '<div class="card">' + tr('لا يوجد بطاقات الآن. علّم مواضيع كـ "قيد الدراسة" لتظهر بطاقاتها، أو ارجع غدًا.', 'Nothing due. Mark topics as Studying to unlock their cards, or come back tomorrow.') + '</div>' :
      '<button class="btn t" onclick="A.rvStart(\'\')">▶ ' + tr('ابدأ كل البطاقات', 'Start all') + ' (' + (q.due.length + q.fresh.length) + ')</button><h3>' + tr('أو حسب المسار', 'Or by track') + '</h3><div class="row wrap">' + per.map(x => '<button class="btn" onclick="A.rvStart(\'' + x.tk.id + '\')">' + esc(ttl(x.tk)) + ' (' + x.n + ')</button>').join('') + '</div>');
}
A.rvStart = tk => { const q = cardQueue(tk); R = {queue: q.due.concat(q.fresh), show: false, n: 0}; route(); };
A.topicCards = tid => { if (!(S.prog[tid] >= 1)) { S.prog[tid] = 1; save(); } const cs = IDX.cards.filter(c => c.tid === tid); if (!cs.length) return; R = {queue: cs.slice(), show: false, n: 0}; location.hash = '#/review'; if (location.hash === '#/review') route(); };
function reviewCard() {
  const c = R.queue[0];
  return '<div class="row sp"><a href="#/review" onclick="R=null;route();return false">← ' + tr('خروج', 'Exit') + '</a><span class="small muted">' + R.queue.length + ' ' + tr('متبقي', 'left') + '</span></div>' +
    '<div class="card fcard" style="margin-top:10px"><div class="small muted" style="margin-bottom:10px">' + esc(ttl(IDX.t[c.tid].t)) + '</div><div>' + esc(c.q) + '</div>' +
    (R.show ? '<div class="ans">' + esc(c.a) + '</div>' : '') + '</div>' +
    (R.show ? '<div class="rate"><button class="btn bad" onclick="A.rate(0)">' + tr('نسيت', 'Again') + '</button><button class="btn" onclick="A.rate(1)">' + tr('صعب', 'Hard') + '</button><button class="btn t" onclick="A.rate(2)">' + tr('تمام', 'Good') + '</button><button class="btn p" onclick="A.rate(3)">' + tr('سهل', 'Easy') + '</button></div>' :
      '<button class="btn p" style="width:100%;margin-top:12px;padding:14px" onclick="R.show=true;route()">' + tr('أظهر الإجابة', 'Show answer') + '</button>');
}
A.rate = g => {
  const c = R.queue.shift(); let s = S.srs[c.cid]; const isNew = !s; if (isNew) S.day.newc++;
  s = s || {e: 2.5, i: 0, r: 0, d: today()};
  if (g === 0) { s.r = 0; s.i = 0; s.e = Math.max(1.3, s.e - 0.2); s.d = today(); R.queue.splice(Math.min(3, R.queue.length), 0, c); }
  else {
    let i; if (g === 1) { i = Math.max(1, Math.round((s.i || 1) * 1.2)); s.e = Math.max(1.3, s.e - 0.15); }
    else if (g === 2) { i = s.r === 0 ? 1 : s.r === 1 ? 3 : Math.round(s.i * s.e); }
    else { i = s.r === 0 ? 3 : s.r === 1 ? 6 : Math.round(s.i * s.e * 1.3); s.e += 0.1; }
    s.i = i; s.r++; s.d = today() + i;
  }
  S.srs[c.cid] = s; S.day.cards++; R.n++; R.show = false; touch(); save();
  if (!R.queue.length) { R = {queue: [], finished: R.n}; }
  route();
};

/* ---------- Quiz ---------- */
let Q = null;
const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function mkQ(q) { return {qid: q.qid, tid: q.tid, q: q.q, e: q.e, o: shuf(q.o.map((t, i) => ({t, ok: i === q.a})))}; }
function pQuiz() {
  if (Q && Q.done) return quizResult();
  if (Q) return quizRun();
  const n = IDX.quiz.length;
  return '<h1>' + tr('الأسئلة', 'Practice questions') + '</h1><p class="sub">' + tr('الأسئلة بصيغة الامتحان (إنجليزي) والشرح بالعربي. ', 'Exam-style questions with explanations. ') + n + ' ' + tr('سؤال متاح الآن. أضف المزيد عبر Content Packs.', 'available. Add more via Content Packs.') + '</p>' +
    '<div class="card"><div class="field"><label>' + tr('المسار', 'Track') + '</label><select id="qt"><option value="">' + tr('كل المسارات', 'All tracks') + '</option>' + IDX.tracks.map(t => '<option value="' + t.id + '">' + esc(ttl(t)) + ' (' + IDX.quiz.filter(q => q.tr === t.id).length + ')</option>').join('') + '</select></div>' +
    '<div class="field"><label>' + tr('عدد الأسئلة', 'Count') + '</label><select id="qn"><option>10</option><option>20</option><option>30</option></select></div>' +
    '<label class="row small"><input type="checkbox" id="qw"> ' + tr('الأسئلة التي أخطأت فيها فقط', 'Only questions I got wrong') + '</label><br><button class="btn t" onclick="A.qzStart()">▶ ' + tr('ابدأ', 'Start') + '</button></div>';
}
A.qzStart = () => {
  const tk = $('#qt').value, n = +$('#qn').value, weak = $('#qw').checked;
  let pool = IDX.quiz.filter(q => (!tk || q.tr === tk) && (!weak || (S.qs[q.qid] && S.qs[q.qid][1] > 0)));
  if (!pool.length) { toast(tr('لا توجد أسئلة مطابقة', 'No matching questions')); return; }
  Q = {list: shuf(pool).slice(0, n).map(mkQ), i: 0, score: 0, sel: null, wrong: []}; route();
};
A.topicQuiz = tid => { const pool = IDX.quiz.filter(q => q.tid === tid); if (!pool.length) return; Q = {list: shuf(pool).map(mkQ), i: 0, score: 0, sel: null, wrong: []}; location.hash = '#/quiz'; if (location.hash === '#/quiz') route(); };
function quizRun() {
  const q = Q.list[Q.i], ans = Q.sel != null;
  return '<div class="row sp"><a href="#/quiz" onclick="Q=null;route();return false">← ' + tr('خروج', 'Exit') + '</a><span class="small muted">' + (Q.i + 1) + '/' + Q.list.length + '</span></div>' + bar((Q.i) / Q.list.length * 100) +
    '<div class="card" style="margin-top:12px"><div class="small muted" style="margin-bottom:6px">' + esc(ttl(IDX.t[q.tid].t)) + '</div><div class="qtxt">' + esc(q.q) + '</div>' +
    q.o.map((o, i) => '<button class="opt ' + (ans ? (o.ok ? 'ok' : (i === Q.sel ? 'no' : '')) : '') + '" ' + (ans ? 'disabled' : 'onclick="A.qzAns(' + i + ')"') + '>' + String.fromCharCode(65 + i) + '. ' + esc(o.t) + '</button>').join('') +
    (ans ? '<div class="expl">' + (q.o[Q.sel].ok ? '✔ ' + tr('صح', 'Correct') : '✘ ' + tr('غلط', 'Wrong')) + ' — ' + esc(q.e) + '</div><button class="btn p" style="margin-top:12px" onclick="A.qzNext()">' + (Q.i + 1 >= Q.list.length ? tr('النتيجة', 'Results') : tr('التالي', 'Next')) + ' ←</button>' : '') + '</div>';
}
A.qzAns = i => {
  if (Q.sel != null) return; Q.sel = i; const q = Q.list[Q.i], ok = q.o[i].ok; const s = S.qs[q.qid] || [0, 0]; s[ok ? 0 : 1]++; S.qs[q.qid] = s;
  if (ok) Q.score++; else Q.wrong.push(q); S.day.qs++; touch(); save(); route();
};
A.qzNext = () => { Q.sel = null; Q.i++; if (Q.i >= Q.list.length) Q.done = true; route(); };
function quizResult() {
  const pct = Math.round(Q.score / Q.list.length * 100);
  return '<h1>' + tr('النتيجة', 'Results') + '</h1><div class="card stat"><b style="font-size:44px">' + pct + '%</b><span>' + Q.score + ' / ' + Q.list.length + '</span></div>' +
    (Q.wrong.length ? '<h2>' + tr('راجع هذه المواضيع', 'Review these topics') + '</h2><div class="card">' + [...new Set(Q.wrong.map(w => w.tid))].map(link).join('') + '</div>' : '') +
    '<button class="btn t" style="margin-top:12px" onclick="Q=null;route()">' + tr('اختبار جديد', 'New quiz') + '</button>';
}

/* ---------- Listening (Web Speech API) ---------- */
const TTS = {chunks: [], i: 0, on: false, tid: null, auto: true};
function plain(tid) {
  const t = IDX.t[tid].t; const out = [ttl(t) + '.'];
  t.l.split('\n').forEach(L => { L = L.trim(); if (!L || L.startsWith('= ')) return; L = L.replace(/^(## |- |> )/, '').replace(/\*\*/g, ''); out.push(L.match(/[.!؟?:]$/) ? L : L + '.'); });
  return out;
}
function pickVoice(lang) { const vs = speechSynthesis.getVoices(); return vs.find(v => v.lang === lang) || vs.find(v => v.lang.toLowerCase().startsWith(lang.slice(0, 2))); }
function speakFrom() {
  if (!TTS.on) return;
  if (TTS.i >= TTS.chunks.length) { // next topic automatically
    const x = IDX.t[TTS.tid], l = IDX.order[x.track.id], n = l[l.indexOf(TTS.tid) + 1];
    if (TTS.auto && n) { A.listen(n, true); } else { A.stopListen(); } return;
  }
  const txt = TTS.chunks[TTS.i], isAr = /[؀-ۿ]/.test(txt), u = new SpeechSynthesisUtterance(txt);
  u.lang = isAr ? 'ar-EG' : 'en-US'; const v = pickVoice(isAr ? 'ar-EG' : 'en-US') || (isAr ? pickVoice('ar-SA') : null); if (v) { u.voice = v; u.lang = v.lang; }
  u.rate = S.rate; u.onend = () => { if (TTS.on) { TTS.i++; speakFrom(); } }; u.onerror = () => { if (TTS.on) { TTS.i++; speakFrom(); } };
  speechSynthesis.speak(u);
}
A.listen = (tid, keep) => {
  if (!('speechSynthesis' in window)) { toast(tr('المتصفح لا يدعم الاستماع', 'Speech not supported')); return; }
  speechSynthesis.cancel(); TTS.tid = tid; TTS.chunks = plain(tid); TTS.i = 0; TTS.on = true; S.last = tid; save();
  document.body.classList.add('pl'); playerUI(); if (keep && location.hash.startsWith('#/topic')) location.replace('#/topic/' + tid);
  setTimeout(speakFrom, 80);
};
A.pauseListen = () => { if (TTS.on) { TTS.on = false; speechSynthesis.cancel(); } else if (TTS.tid) { TTS.on = true; speakFrom(); } playerUI(); };
A.stopListen = () => { TTS.on = false; speechSynthesis.cancel(); document.body.classList.remove('pl'); };
A.skipListen = d => { const x = IDX.t[TTS.tid], l = IDX.order[x.track.id], n = l[l.indexOf(TTS.tid) + d]; if (n) A.listen(n, true); };
A.speed = v => { S.rate = +v; save(); if (TTS.on) { speechSynthesis.cancel(); setTimeout(speakFrom, 50); } };
function playerUI() {
  const x = IDX.t[TTS.tid]; if (!x) return;
  $('#player').innerHTML = '<div class="row sp wrap"><div class="grow"><b class="small">🔊 ' + esc(ttl(x.t)) + '</b></div><div class="row"><button class="btn sm" onclick="A.skipListen(-1)">⏮</button><button class="btn sm p" onclick="A.pauseListen()">' + (TTS.on ? '⏸' : '▶') + '</button><button class="btn sm" onclick="A.skipListen(1)">⏭</button><button class="btn sm" onclick="A.stopListen()">✕</button></div></div>' +
    '<div class="row small" style="margin-top:6px"><span>' + tr('السرعة', 'Speed') + '</span><input type="range" min="0.7" max="1.5" step="0.05" value="' + S.rate + '" onchange="A.speed(this.value)" style="flex:1"></div>';
}
if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = () => {};
