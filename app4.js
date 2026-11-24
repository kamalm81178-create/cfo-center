/* app4.js — CMA hub, timed mock exam, bookmarks, weekly activity */
const MOCKH = 'mockexam';
let X = null, XT = null;

/* ---------- activity log ---------- */
function actDays(n) { const t = today(), out = []; for (let i = n - 1; i >= 0; i--) out.push([t - i, (S.log || {})[t - i] || 0]); return out; }
function actChart() {
  const d = actDays(7), mx = Math.max(5, ...d.map(x => x[1])), names = S.lang === 'ar' ? ['أحد', 'اثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'] : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return '<div class="card"><b>' + tr('نشاطك هذا الأسبوع', 'Your week') + '</b><div style="display:flex;gap:6px;align-items:flex-end;height:90px;margin-top:10px" dir="ltr">' +
    d.map(x => { const dt = new Date(x[0] * 864e5 + 12 * 36e5); return '<div style="flex:1;text-align:center"><div title="' + x[1] + '" style="height:' + Math.max(3, Math.round(x[1] / mx * 70)) + 'px;background:' + (x[1] ? 'var(--teal,#1aa6a0)' : 'var(--line,#8883)') + ';border-radius:5px"></div><div class="small muted" style="margin-top:4px">' + names[dt.getUTCDay()] + '</div></div>'; }).join('') + '</div>' +
    '<div class="small muted" style="margin-top:6px">' + tr('مجموع الإجراءات (دروس وبطاقات وأسئلة): ', 'Total actions: ') + d.reduce((a, x) => a + x[1], 0) + '</div></div>';
}

/* ---------- bookmarks ---------- */
A.fav = id => { S.fav = S.fav || {}; if (S.fav[id]) delete S.fav[id]; else S.fav[id] = 1; save(); route(); };
function pFav() {
  const ids = Object.keys(S.fav || {}).filter(i => IDX.t[i]);
  return '<h1>⭐ ' + tr('المفضلة', 'Bookmarks') + '</h1><p class="sub">' + tr('المواضيع التي أضفتها بزر ⭐ داخل الموضوع.', 'Topics you starred.') + '</p><div class="card">' + (ids.map(link).join('') || '<p class="muted">' + tr('لا توجد مواضيع بعد.', 'None yet.') + '</p>') + '</div>';
}

/* ---------- section readiness ---------- */
function secReady(C) {
  let a = 0, b = 0; C.topics.forEach(t => (t.q || []).forEach(q => { const s = S.qs[t.id + '?' + hash(q[0])]; if (s) { a += s[0]; b += s[0] + s[1]; } }));
  return b ? Math.round(a / b * 100) : null;
}

/* ---------- CMA hub ---------- */
function pCma() {
  const tk = IDX.tracks.find(t => t.id === 'cma'); if (!tk) return '<div class="card">CMA?</div>';
  const nq = tk.parts.reduce((a, P) => a + P.secs.reduce((b, C) => b + C.topics.reduce((c, t) => c + t.q.length, 0), 0), 0);
  return '<h1>🎓 CMA</h1><p class="sub">' + tr('خريطة الدراسة: كل قسم بوزنه ومستوى تقدمك وجاهزيتك من الأسئلة.', 'Study map: weight, progress and quiz readiness per section.') + '</p>' +
    '<div class="row wrap" style="margin-bottom:12px"><button class="btn t" onclick="location.hash=\'#/exam\'">⏱ ' + tr('امتحان تجريبي', 'Mock exam') + '</button><button class="btn" onclick="location.hash=\'#/learn/cma\'">◈ ' + tr('كل المواضيع', 'All topics') + '</button><span class="small muted">' + nq + ' ' + tr('سؤال', 'questions') + '</span></div>' +
    tk.parts.map(P => {
      const all = P.secs.reduce((a, C) => a.concat(C.topics), []), m = all.filter(t => S.prog[t.id] === 2).length;
      return '<h2>' + esc(ttl(P)) + '</h2><div class="card row" style="gap:14px">' + ring(all.length ? Math.round(m / all.length * 100) : 0, 64) + '<div><b>' + m + '/' + all.length + '</b> ' + tr('مواضيع متقنة', 'mastered') + '</div></div>' +
        P.secs.map(C => { const d = C.topics.filter(t => S.prog[t.id] === 2).length, r = secReady(C), first = C.topics.find(t => !S.prog[t.id]) || C.topics[0];
          return '<div class="card row sp" style="margin:8px 0;gap:12px">' + ring(C.topics.length ? Math.round(d / C.topics.length * 100) : 0, 52) + '<div style="flex:1"><b>' + esc(ttl(C)) + '</b> ' + (C.w ? '<span class="tag">' + esc(C.w) + '</span>' : '') + '<div class="small muted">' + d + '/' + C.topics.length + ' ' + tr('متقن', 'mastered') + ' · ' + tr('الجاهزية: ', 'Readiness: ') + (r == null ? '—' : r + '%') + '</div></div>' + (first ? '<a class="btn" href="#/topic/' + first.id + '">' + tr('ادرس', 'Study') + '</a>' : '') + '</div>'; }).join('');
    }).join('');
}

/* ---------- Mock exam ---------- */
function examPool(part) {
  const tk = IDX.tracks.find(t => t.id === 'cma'); if (!tk) return [];
  const out = []; tk.parts.forEach(P => { if (part && P.id !== part) return; P.secs.forEach(C => C.topics.forEach(t => (t.q || []).forEach(q => out.push({qid: t.id + '?' + hash(q[0]), tid: t.id, sec: C.id, q: q[0], o: q[1], a: q[2], e: q[3] || ''})))); });
  return out;
}
const fmtT = s => { s = Math.max(0, s); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
function pExam() {
  if (X && X.done) return examResult();
  if (X) return examRun();
  const tk = IDX.tracks.find(t => t.id === 'cma');
  const hist = (S.mocks || []).slice(-5).reverse();
  return '<h1>⏱ ' + tr('امتحان تجريبي', 'Mock exam') + '</h1><p class="sub">' + tr('بدون شرح حتى النهاية، بتوقيت 1.5 دقيقة للسؤال، ويمكنك وضع علامة 🚩 والرجوع.', 'No feedback until the end, 1.5 min per question, flag & revisit.') + '</p>' +
    '<div class="card"><div class="field"><label>' + tr('النطاق', 'Scope') + '</label><select id="xp"><option value="">' + tr('CMA كاملة', 'All CMA') + ' (' + examPool('').length + ')</option>' + (tk ? tk.parts.map(P => '<option value="' + P.id + '">' + esc(ttl(P)) + ' (' + examPool(P.id).length + ')</option>').join('') : '') + '</select></div>' +
    '<div class="field"><label>' + tr('عدد الأسئلة', 'Questions') + '</label><select id="xn"><option>10</option><option selected>25</option><option>50</option><option value="999">' + tr('كل المتاح', 'All available') + '</option></select></div>' +
    '<button class="btn t" onclick="A.xStart()">▶ ' + tr('ابدأ الامتحان', 'Start') + '</button></div>' +
    (hist.length ? '<h2>' + tr('آخر المحاولات', 'Recent attempts') + '</h2><div class="card">' + hist.map(h => '<div class="li" style="cursor:default"><b>' + h.pct + '%</b><span class="small muted">' + h.score + '/' + h.n + ' · ' + new Date(h.ts).toLocaleDateString() + '</span></div>').join('') + '</div>' : '');
}
A.xStart = () => {
  const pool = examPool($('#xp').value), n = Math.min(+$('#xn').value, pool.length);
  if (!pool.length) { toast(tr('لا توجد أسئلة', 'No questions')); return; }
  const list = shuf(pool).slice(0, n).map(q => Object.assign(mkQ(q), {sec: q.sec}));
  X = {list, ans: list.map(() => null), flag: {}, i: 0, secs: Math.round(n * 90), t0: Date.now(), done: false};
  clearInterval(XT); XT = setInterval(xTick, 1000); route();
};
function xLeft() { return X.secs - Math.floor((Date.now() - X.t0) / 1000); }
function xTick() { if (!X || X.done) { clearInterval(XT); return; } const l = xLeft(), el = document.getElementById('xtime'); if (el) el.textContent = fmtT(l); if (l <= 0) A.xFinish(true); }
function examRun() {
  const q = X.list[X.i], sel = X.ans[X.i];
  return '<div class="row sp"><b id="xtime" dir="ltr" style="font-size:20px">' + fmtT(xLeft()) + '</b><span class="small muted">' + (X.i + 1) + '/' + X.list.length + '</span><button class="btn" onclick="A.xFlag()">' + (X.flag[X.i] ? '🚩 ' + tr('مُعلَّم', 'Flagged') : '⚑ ' + tr('علّم', 'Flag')) + '</button></div>' + bar(X.ans.filter(a => a != null).length / X.list.length * 100) +
    '<div class="card" style="margin-top:12px"><div class="qtxt">' + esc(q.q) + '</div>' + q.o.map((o, i) => '<button class="opt ' + (sel === i ? 'sel' : '') + '" style="' + (sel === i ? 'outline:2px solid var(--teal,#1aa6a0)' : '') + '" onclick="A.xAns(' + i + ')">' + String.fromCharCode(65 + i) + '. ' + esc(o.t) + '</button>').join('') + '</div>' +
    '<div class="row sp" style="margin-top:12px"><button class="btn" ' + (X.i ? '' : 'disabled') + ' onclick="A.xGo(' + (X.i - 1) + ')">→ ' + tr('السابق', 'Prev') + '</button>' + (X.i + 1 < X.list.length ? '<button class="btn p" onclick="A.xGo(' + (X.i + 1) + ')">' + tr('التالي', 'Next') + ' ←</button>' : '<button class="btn p" onclick="A.xFinish()">' + tr('إنهاء', 'Finish') + '</button>') + '</div>' +
    '<div class="row wrap" style="margin-top:14px;gap:6px" dir="ltr">' + X.list.map((_, k) => '<button class="btn" style="min-width:38px;padding:6px;' + (k === X.i ? 'outline:2px solid var(--teal,#1aa6a0);' : '') + (X.ans[k] != null ? 'background:var(--teal,#1aa6a0);color:#fff;' : '') + '" onclick="A.xGo(' + k + ')">' + (X.flag[k] ? '🚩' : k + 1) + '</button>').join('') + '</div>' +
    '<p style="margin-top:14px"><a href="#/exam" onclick="if(confirm(\'' + tr('إلغاء الامتحان؟', 'Abandon exam?') + '\')){clearInterval(XT);X=null;route()}return false">' + tr('إلغاء الامتحان', 'Abandon') + '</a></p>';
}
A.xAns = i => { X.ans[X.i] = i; route(); };
A.xGo = k => { if (k >= 0 && k < X.list.length) { X.i = k; route(); } };
A.xFlag = () => { X.flag[X.i] = !X.flag[X.i]; route(); };
A.xFinish = auto => {
  if (!X || X.done) return;
  const un = X.ans.filter(a => a == null).length;
  if (!auto && un && !confirm(tr('لسه فيه ' + un + ' سؤال بدون إجابة. تنهي؟', un + ' unanswered. Finish?'))) return;
  clearInterval(XT); X.done = true; X.used = Math.min(X.secs, Math.floor((Date.now() - X.t0) / 1000));
  let sc = 0; X.list.forEach((q, k) => { const a = X.ans[k], ok = a != null && q.o[a].ok; if (ok) sc++; const s = S.qs[q.qid] || [0, 0]; if (a != null) { s[ok ? 0 : 1]++; S.qs[q.qid] = s; } });
  X.score = sc; S.day.qs += X.list.length; touch(); S.mocks = (S.mocks || []).concat([{ts: Date.now(), n: X.list.length, score: sc, pct: Math.round(sc / X.list.length * 100)}]).slice(-20); save(); route();
};
function examResult() {
  const n = X.list.length, pct = Math.round(X.score / n * 100), by = {};
  X.list.forEach((q, k) => { const b = by[q.sec] = by[q.sec] || [0, 0]; b[1]++; if (X.ans[k] != null && q.o[X.ans[k]].ok) b[0]++; });
  const names = {}; IDX.tracks.forEach(t => t.parts.forEach(P => P.secs.forEach(C => names[C.id] = C)));
  return '<h1>' + tr('نتيجة الامتحان', 'Exam result') + '</h1><div class="card stat"><b style="font-size:44px;color:' + (pct >= 72 ? 'var(--teal,#1aa6a0)' : 'inherit') + '">' + pct + '%</b><span>' + X.score + ' / ' + n + ' · ' + fmtT(X.used) + '</span></div><p class="small muted">' + tr('درجة النجاح في CMA الحقيقي 72% من النقاط، وهذا مجرد مؤشر.', 'The real CMA pass mark is 72% scaled; this is only an indicator.') + '</p>' +
    '<h2>' + tr('حسب القسم', 'By section') + '</h2><div class="card">' + Object.keys(by).sort().map(k => '<div class="row sp" style="padding:6px 0"><span>' + esc(names[k] ? ttl(names[k]) : k) + '</span><b>' + Math.round(by[k][0] / by[k][1] * 100) + '% <span class="small muted">(' + by[k][0] + '/' + by[k][1] + ')</span></b></div>').join('') + '</div>' +
    '<h2>' + tr('مراجعة الإجابات', 'Review answers') + '</h2>' + X.list.map((q, k) => { const a = X.ans[k], ok = a != null && q.o[a].ok; return '<details><summary>' + (ok ? '✔' : '✘') + ' ' + (k + 1) + '. ' + esc(q.q.slice(0, 90)) + (q.q.length > 90 ? '…' : '') + '</summary><div class="in"><p>' + esc(q.q) + '</p><p>' + tr('إجابتك: ', 'Your answer: ') + (a == null ? '—' : esc(q.o[a].t)) + '</p><p>' + tr('الصحيحة: ', 'Correct: ') + esc(q.o.find(o => o.ok).t) + '</p><p class="small">' + esc(q.e) + '</p><a href="#/topic/' + q.tid + '">' + esc(ttl(IDX.t[q.tid].t)) + '</a></div></details>'; }).join('') +
    '<button class="btn t" style="margin-top:12px" onclick="X=null;route()">' + tr('امتحان جديد', 'New exam') + '</button>';
}
