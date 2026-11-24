/* CFO Knowledge Center V2 — core: state, packs, router, home, learn, topic */
const LSK = 'cfo2';
const DEF = () => ({lang: 'ar', theme: 'auto', fs: 17, prog: {}, srs: {}, qs: {}, notes: [], tn: {}, streak: {n: 0, last: 0}, day: {d: 0, cards: 0, qs: 0, newc: 0}, goal: {cards: 20, newc: 10}, exam: {}, last: '', rate: 0.95, mig: 0});
let S;
try { S = Object.assign(DEF(), JSON.parse(localStorage.getItem(LSK) || '{}')); } catch (e) { S = DEF(); }
const A = {};
const tr = (a, e) => (S.lang === 'ar' ? a : e);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
const $ = s => document.querySelector(s);
const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / 864e5);
const sid = s => String(s).replace(/[^\w\-]/g, '_');
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
const ttl = o => (S.lang === 'ar' ? (o.ar || o.en) : (o.en || o.ar)) || '';
const ttl2 = o => (S.lang === 'ar' ? o.en : o.ar) || '';
const fmt = (n, d = 2) => (isFinite(n) ? Number(n).toLocaleString('en-US', {maximumFractionDigits: d, minimumFractionDigits: 0}) : '—');
function save() { try { localStorage.setItem(LSK, JSON.stringify(S)); } catch (e) { toast(tr('تعذر الحفظ: التخزين ممتلئ', 'Could not save: storage full')); } }
function toast(m) { const t = document.createElement('div'); t.className = 'toast'; t.textContent = m; document.body.appendChild(t); setTimeout(() => t.remove(), 2200); }
function rollDay() { const t = today(); if (S.day.d !== t) S.day = {d: t, cards: 0, qs: 0, newc: 0}; }
function touch() { rollDay(); const t = today(); if (S.streak.last !== t) { S.streak.n = (S.streak.last === t - 1) ? S.streak.n + 1 : 1; S.streak.last = t; } }
const streak = () => (S.streak.last >= today() - 1 ? S.streak.n : 0);

/* migrate V1 notes once */
if (!S.mig) { try { JSON.parse(localStorage.getItem('cfo_notes') || '[]').forEach(n => S.notes.push({id: 'm' + Math.random().toString(36).slice(2), title: n.subject || '', text: n.text || '', ts: Date.now()})); } catch (e) {} S.mig = 1; save(); }

/* ---------- packs ---------- */
let EXTRA = [], IDX = null;
function idb() { return new Promise((res, rej) => { if (!window.indexedDB) return rej(); const r = indexedDB.open('cfo2db', 1); r.onupgradeneeded = () => r.result.createObjectStore('packs', {keyPath: 'id'}); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
async function idbAll() { try { const db = await idb(); return await new Promise(res => { const q = db.transaction('packs').objectStore('packs').getAll(); q.onsuccess = () => res(q.result || []); q.onerror = () => res([]); }); } catch (e) { return []; } }
async function idbPut(p) { const db = await idb(); return new Promise((res, rej) => { const t = db.transaction('packs', 'readwrite'); t.objectStore('packs').put(p); t.oncomplete = res; t.onerror = rej; }); }
async function idbDel(id) { const db = await idb(); return new Promise((res, rej) => { const t = db.transaction('packs', 'readwrite'); t.objectStore('packs').delete(id); t.oncomplete = res; t.onerror = rej; }); }
const cmpVer = (a, b) => { const x = String(a || '0').split('.').map(Number), y = String(b || '0').split('.').map(Number); for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d; } return 0; };

function build() {
  const byId = {}, order = [];
  CFO.packs.concat(EXTRA).forEach(p => { if (!p || !p.id) return; const o = byId[p.id]; if (!o) order.push(p.id); if (!o || cmpVer(p.ver, o.ver) >= 0) byId[p.id] = p; });
  const packs = order.map(i => byId[i]);
  const tracks = [];
  packs.forEach(p => (p.tracks || []).forEach(t => {
    let T = tracks.find(x => x.id === sid(t.id));
    if (!T) { T = {id: sid(t.id), en: t.en, ar: t.ar, icon: t.icon || '◈', desc: t.desc || '', parts: []}; tracks.push(T); }
    (t.parts || []).forEach(pt => {
      let P = T.parts.find(x => x.id === sid(pt.id));
      if (!P) { P = {id: sid(pt.id), en: pt.en, ar: pt.ar, secs: []}; T.parts.push(P); }
      (pt.secs || []).forEach(sc => {
        let C = P.secs.find(x => x.id === sid(sc.id));
        if (!C) { C = {id: sid(sc.id), en: sc.en, ar: sc.ar, w: sc.w || '', topics: []}; P.secs.push(C); }
        (sc.topics || []).forEach(tp => { const n = Object.assign({}, tp, {id: sid(tp.id)}); const i = C.topics.findIndex(x => x.id === n.id); if (i < 0) C.topics.push(n); else C.topics[i] = n; });
      });
    });
  }));
  const I = {tracks, t: {}, order: {}, cards: [], quiz: [], forms: [], gloss: [], lib: {books: [], sources: [], facts: [], advice: []}, news: [], packs};
  tracks.forEach(T => { I.order[T.id] = []; T.parts.forEach(P => P.secs.forEach(C => C.topics.forEach(tp => {
    I.t[tp.id] = {t: tp, track: T, part: P, sec: C}; I.order[T.id].push(tp.id);
    (tp.c || []).forEach(c => I.cards.push({cid: tp.id + '#' + hash(c[0]), tid: tp.id, tr: T.id, q: c[0], a: c[1]}));
    (tp.q || []).forEach(q => I.quiz.push({qid: tp.id + '?' + hash(q[0]), tid: tp.id, tr: T.id, q: q[0], o: q[1], a: q[2], e: q[3] || ''}));
    (tp.f || []).forEach(f => I.forms.push({tid: tp.id, tr: T.id, n: f[0], f: f[1], d: f[2] || ''}));
    (tp.l || '').split('\n').forEach(L => { if (L.startsWith('= ')) I.forms.push({tid: tp.id, tr: T.id, n: '', f: L.slice(2), d: ''}); });
  }))); });
  const seen = {};
  packs.forEach(p => {
    (p.glossary || []).forEach(g => { const k = String(g[0]).toLowerCase(); if (!seen[k]) { seen[k] = 1; I.gloss.push(g); } });
    const L = p.library || {}; ['books', 'sources', 'facts', 'advice'].forEach(k => (L[k] || []).forEach(x => I.lib[k].push(x)));
    (p.news || []).forEach(n => I.news.push(n));
  });
  I.gloss.sort((a, b) => String(a[0]).localeCompare(String(b[0])));
  IDX = I;
}

/* ---------- helpers ---------- */
const inl = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
function md(s) {
  let out = '', ul = false; const cl = () => { if (ul) { out += '</ul>'; ul = false; } };
  String(s).split('\n').forEach(L => {
    L = L.trimEnd(); if (!L.trim()) { cl(); return; }
    if (L.startsWith('## ')) { cl(); out += '<h3>' + inl(L.slice(3)) + '</h3>'; }
    else if (L.startsWith('- ')) { if (!ul) { out += '<ul>'; ul = true; } out += '<li>' + inl(L.slice(2)) + '</li>'; }
    else if (L.startsWith('> ')) { cl(); out += '<div class="tip">' + inl(L.slice(2)) + '</div>'; }
    else if (L.startsWith('= ')) { cl(); out += '<div class="formula">' + esc(L.slice(2)) + '</div>'; }
    else { cl(); out += '<p>' + inl(L) + '</p>'; }
  });
  cl(); return out;
}
function trackStats(tid) {
  const ids = IDX.order[tid] || []; let s1 = 0, s2 = 0;
  ids.forEach(i => { const p = S.prog[i] || 0; if (p === 1) s1++; else if (p === 2) s2++; });
  return {n: ids.length, studying: s1, mastered: s2, pct: ids.length ? Math.round(s2 / ids.length * 100) : 0, touched: ids.length ? Math.round((s1 + s2) / ids.length * 100) : 0};
}
function bar(pct, g) { return '<div class="bar"><i class="' + (g ? 'g' : '') + '" style="width:' + pct + '%"></i></div>'; }
function nextTopic(trackId) {
  const lists = trackId ? [IDX.order[trackId] || []] : IDX.tracks.map(t => IDX.order[t.id]);
  for (const l of lists) for (const id of l) if (!S.prog[id]) return id; return null;
}
function weakTopics() {
  const m = {}; IDX.quiz.forEach(q => { const s = S.qs[q.qid]; if (s && s[1] > s[0]) m[q.tid] = (m[q.tid] || 0) + 1; });
  return Object.keys(m).sort((a, b) => m[b] - m[a]).slice(0, 5);
}
function link(id) { const x = IDX.t[id]; return '<a class="li" href="#/topic/' + id + '"><span class="dot s' + (S.prog[id] || 0) + '"></span><div class="grow"><b>' + esc(ttl(x.t)) + '</b><div class="small muted">' + esc(ttl2(x.t)) + '</div></div><span class="small muted">' + esc(ttl(x.track)) + '</span></a>'; }

/* ---------- shell ---------- */
const NAV = [['home', '⌂', 'الرئيسية', 'Home'], ['learn', '◈', 'المناهج', 'Curriculum'], ['review', '↻', 'المراجعة', 'Review'], ['quiz', '✓', 'الأسئلة', 'Quiz'], ['tools', '▦', 'الحاسبات', 'Calculators'], ['formulas', 'ƒ', 'القوانين', 'Formulas'], ['glossary', 'Aa', 'المصطلحات', 'Glossary'], ['lib', '▤', 'المكتبة والنصائح', 'Library & Advice'], ['notes', '✎', 'ملاحظاتي', 'My Notes'], ['settings', '⚙', 'الإعدادات والبيانات', 'Settings & Data']];
function shell() {
  const due = dueTotal();
  const bd = due ? '<span class="bd">' + due + '</span>' : '';
  $('#side').innerHTML = '<div class="brand"><div class="mark">C</div><div><b>CFO KNOWLEDGE</b><small>LEARN · APPLY · LEAD</small></div></div><div style="height:10px"></div>' +
    NAV.map(n => '<button class="nb" data-p="' + n[0] + '" onclick="location.hash=\'#/' + n[0] + '\'"><span class="i">' + n[1] + '</span>' + tr(n[2], n[3]) + (n[0] === 'review' ? bd : '') + '</button>').join('');
  const B = [['home', '⌂', 'الرئيسية', 'Home'], ['learn', '◈', 'المناهج', 'Learn'], ['review', '↻', 'مراجعة', 'Review'], ['quiz', '✓', 'أسئلة', 'Quiz'], ['more', '☰', 'المزيد', 'More']];
  $('#nav2').innerHTML = B.map(n => '<button data-p="' + n[0] + '" onclick="location.hash=\'#/' + n[0] + '\'"><span class="i">' + n[1] + '</span>' + tr(n[2], n[3]) + (n[0] === 'review' ? bd : '') + '</button>').join('');
  $('#q').placeholder = tr('ابحث في كل المحتوى...', 'Search all content...');
  $('#langb').textContent = S.lang === 'ar' ? 'EN' : 'ع';
  document.documentElement.lang = S.lang; document.documentElement.dir = S.lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dataset.theme = S.theme; document.documentElement.style.setProperty('--fs', S.fs + 'px');
}
function mark(p) { document.querySelectorAll('[data-p]').forEach(b => b.classList.toggle('on', b.dataset.p === p || (p === 'topic' && b.dataset.p === 'learn') || (['tools', 'formulas', 'glossary', 'lib', 'notes', 'settings', 'search'].includes(p) && b.dataset.p === 'more'))); }

/* ---------- router ---------- */
function route() {
  if (!IDX) return;
  rollDay(); shell();
  const h = (location.hash || '#/home').slice(2), qi = h.indexOf('?'), path = qi < 0 ? h : h.slice(0, qi), query = qi < 0 ? '' : decodeURIComponent(h.slice(qi + 1).replace(/^q=/, ''));
  const [p, a] = path.split('/');
  const PG = {home: pHome, learn: () => (a ? pTrack(a) : pLearn()), topic: () => pTopic(a), review: pReview, quiz: pQuiz, tools: () => (a ? pCalc(a) : pTools()), formulas: pForms, glossary: pGloss, lib: pLib, notes: pNotes, settings: pSettings, more: pMore, search: () => pSearch(query)};
  let html; try { html = (PG[p] || pHome)(); } catch (e) { html = '<div class="card">Error: ' + esc(e.message) + '</div>'; console.error(e); }
  $('#view').innerHTML = html; mark(p); window.scrollTo(0, 0);
  if (p === 'tools' && a) calcRun();
}
window.addEventListener('hashchange', route);

/* ---------- pages ---------- */
function pHome() {
  const due = dueTotal(), t = today();
  const nxt = nextTopic(), lastId = S.last && IDX.t[S.last] ? S.last : null, weak = weakTopics();
  const exams = Object.keys(S.exam).filter(k => S.exam[k] && IDX.tracks.some(x => x.id === k)).map(k => {
    const d = Math.ceil((new Date(S.exam[k]) - new Date()) / 864e5); const st = trackStats(k); const left = st.n - st.mastered; const wk = Math.max(1, Math.ceil(d / 7));
    return d > 0 ? '<div class="card"><b>' + esc(ttl(IDX.tracks.find(x => x.id === k))) + '</b><div class="small muted">' + d + ' ' + tr('يوم متبقي', 'days left') + '</div><div style="margin:8px 0">' + bar(st.pct, 1) + '</div><div class="small">' + tr('المطلوب أسبوعيًا: ', 'Needed weekly: ') + '<b>' + Math.ceil(left / wk) + '</b> ' + tr('موضوع', 'topics') + '</div></div>' : '';
  }).join('');
  return '<div class="hero"><div class="small" style="opacity:.8">' + tr('مرحبًا يا كمال', 'Welcome back') + ' · ' + (streak() ? '🔥 ' + streak() + ' ' + tr('يوم متتالي', 'day streak') : tr('ابدأ سلسلتك اليوم', 'Start your streak today')) + '</div>' +
    '<h1 style="margin:8px 0 2px">' + tr('خطة اليوم', "Today's plan") + '</h1><p>' + tr('20 دقيقة دراسة + مراجعة بطاقات + أسئلة. كفاية عشان تمشي كل يوم.', '20 min study + review cards + quiz. Small steps, every day.') + '</p>' +
    '<div class="row wrap" style="margin-top:12px"><button class="btn t" onclick="location.hash=\'#/review\'">↻ ' + tr('مراجعة', 'Review') + ' (' + due + ')</button>' +
    (lastId ? '<button class="btn" onclick="location.hash=\'#/topic/' + lastId + '\'">' + tr('كمّل: ', 'Continue: ') + esc(ttl(IDX.t[lastId].t)) + '</button>' : '') +
    (nxt ? '<button class="btn" onclick="location.hash=\'#/topic/' + nxt + '\'">' + tr('التالي: ', 'Next: ') + esc(ttl(IDX.t[nxt].t)) + '</button>' : '') + '</div></div>' +
    '<div class="grid" style="margin-top:12px"><div class="card stat"><b>' + S.day.cards + '/' + S.goal.cards + '</b><span>' + tr('بطاقات اليوم', 'Cards today') + '</span></div><div class="card stat"><b>' + S.day.qs + '</b><span>' + tr('أسئلة اليوم', 'Questions today') + '</span></div><div class="card stat"><b>' + Object.values(S.prog).filter(v => v === 2).length + '/' + Object.keys(IDX.t).length + '</b><span>' + tr('مواضيع متقنة', 'Topics mastered') + '</span></div></div>' +
    '<h2>' + tr('مساراتك', 'Your tracks') + '</h2><div class="grid">' + IDX.tracks.map(tk => { const s = trackStats(tk.id); return '<div class="card k" onclick="location.hash=\'#/learn/' + tk.id + '\'"><div class="row sp"><b>' + esc(tk.icon + ' ' + ttl(tk)) + '</b><span class="small muted">' + s.mastered + '/' + s.n + '</span></div><div class="small muted" style="margin:6px 0 10px">' + s.studying + ' ' + tr('قيد الدراسة', 'in progress') + '</div>' + bar(s.pct, 1) + '</div>'; }).join('') + '</div>' +
    (exams ? '<h2>' + tr('عدّاد الامتحانات', 'Exam countdown') + '</h2><div class="grid">' + exams + '</div>' : '') +
    (weak.length ? '<h2>' + tr('مواضيع تحتاج مراجعة', 'Weak topics') + '</h2><div class="card">' + weak.map(link).join('') + '</div>' : '') +
    '<h2>' + tr('جديد في المحتوى', "What's new") + '</h2><div class="card small">' + (IDX.news.slice(0, 3).map(n => '<div style="padding:4px 0">• ' + esc(n) + '</div>').join('') || '—') + '</div>';
}
function pLearn() {
  return '<h1>' + tr('المناهج', 'Curriculum') + '</h1><p class="sub">' + tr('اختر مسارًا. كل موضوع فيه درس، قوانين، بطاقات مراجعة، أسئلة، وملاحظاتك.', 'Pick a track: lessons, formulas, flashcards, quizzes, notes.') + '</p><div class="grid">' +
    IDX.tracks.map(tk => { const s = trackStats(tk.id); return '<div class="card k" onclick="location.hash=\'#/learn/' + tk.id + '\'"><div style="font-size:26px">' + esc(tk.icon) + '</div><b>' + esc(ttl(tk)) + '</b><p class="small muted">' + esc(tk.desc) + '</p><div class="small muted" style="margin:8px 0 6px">' + s.n + ' ' + tr('موضوع', 'topics') + ' · ' + s.mastered + ' ' + tr('متقن', 'mastered') + '</div>' + bar(s.pct, 1) + '</div>'; }).join('') + '</div>';
}
function pTrack(id) {
  const tk = IDX.tracks.find(t => t.id === id); if (!tk) return '<div class="card">?</div>';
  const lastSec = S.last && IDX.t[S.last] ? IDX.t[S.last].sec.id : '';
  return '<a href="#/learn">← ' + tr('المناهج', 'Curriculum') + '</a><h1>' + esc(tk.icon + ' ' + ttl(tk)) + '</h1><p class="sub">' + esc(tk.desc) + '</p>' +
    tk.parts.map(P => '<h2>' + esc(ttl(P)) + '</h2>' + P.secs.map(C => { const d = C.topics.filter(x => S.prog[x.id] === 2).length; return '<details' + (C.id === lastSec ? ' open' : '') + '><summary><div class="row sp"><span>' + esc(ttl(C)) + (C.w ? ' <span class="tag">' + esc(C.w) + '</span>' : '') + '</span><span class="small muted">' + d + '/' + C.topics.length + '</span></div></summary><div class="in">' + C.topics.map(x => link(x.id)).join('') + '</div></details>'; }).join('')).join('');
}
function pTopic(id) {
  const x = IDX.t[id]; if (!x) return '<div class="card">?</div>';
  S.last = id; save();
  const t = x.t, st = S.prog[id] || 0, list = IDX.order[x.track.id], i = list.indexOf(id), pv = list[i - 1], nx = list[i + 1];
  const nQ = t.q.length, nC = t.c.length;
  return '<div class="small"><a href="#/learn/' + x.track.id + '">' + esc(ttl(x.track)) + '</a> › ' + esc(ttl(x.part)) + ' › ' + esc(ttl(x.sec)) + (x.sec.w ? ' <span class="tag">' + esc(x.sec.w) + '</span>' : '') + '</div>' +
    '<h1>' + esc(ttl(t)) + '</h1><div class="sub">' + esc(ttl2(t)) + '</div>' +
    '<div class="seg"><button class="' + (st === 0 ? 'on' : '') + '" onclick="A.prog(\'' + id + '\',0)">' + tr('لم يبدأ', 'Not started') + '</button><button class="' + (st === 1 ? 'on' : '') + '" onclick="A.prog(\'' + id + '\',1)">' + tr('قيد الدراسة', 'Studying') + '</button><button class="' + (st === 2 ? 'on' : '') + '" onclick="A.prog(\'' + id + '\',2)">' + tr('متقن', 'Mastered') + '</button></div>' +
    '<div class="row wrap" style="margin:12px 0"><button class="btn t" onclick="A.listen(\'' + id + '\')">🔊 ' + tr('استمع', 'Listen') + '</button><button class="btn" onclick="A.fs(-1)">A−</button><button class="btn" onclick="A.fs(1)">A+</button>' + (nC ? '<button class="btn" onclick="A.topicCards(\'' + id + '\')">↻ ' + tr('بطاقات الموضوع', 'Topic cards') + ' (' + nC + ')</button>' : '') + (nQ ? '<button class="btn" onclick="A.topicQuiz(\'' + id + '\')">✓ ' + tr('اختبر نفسك', 'Quiz me') + ' (' + nQ + ')</button>' : '') + '</div>' +
    '<div class="card lesson">' + md(t.l) + '</div>' +
    (t.f.length ? '<h2>' + tr('القوانين', 'Formulas') + '</h2><div class="card">' + t.f.map(f => '<div style="padding:6px 0"><b>' + esc(f[0]) + '</b><div class="formula">' + esc(f[1]) + '</div>' + (f[2] ? '<div class="small muted">' + esc(f[2]) + '</div>' : '') + '</div>').join('') + '</div>' : '') +
    (nC ? '<h2>' + tr('أسئلة سريعة', 'Quick recall') + '</h2>' + t.c.map(c => '<details><summary>' + esc(c[0]) + '</summary><div class="in"><p>' + esc(c[1]) + '</p></div></details>').join('') : '') +
    '<h2>' + tr('ملاحظاتي على الموضوع', 'My notes on this topic') + '</h2><div class="field"><textarea placeholder="' + tr('طبّقه على شغلك: مثال، رقم، قرار...', 'Apply it to your work: example, number, decision...') + '" oninput="A.tnote(\'' + id + '\',this.value)">' + esc(S.tn[id] || '') + '</textarea></div>' +
    '<div class="row sp" style="margin-top:14px">' + (pv ? '<a class="btn" href="#/topic/' + pv + '">→ ' + tr('السابق', 'Prev') + '</a>' : '<span></span>') + (nx ? '<a class="btn p" href="#/topic/' + nx + '">' + tr('التالي', 'Next') + ' ←</a>' : '') + '</div>';
}
A.prog = (id, v) => { S.prog[id] = v; if (v) touch(); save(); route(); };
A.fs = d => { S.fs = Math.max(13, Math.min(26, S.fs + d * 2)); save(); document.documentElement.style.setProperty('--fs', S.fs + 'px'); };
let tnT; A.tnote = (id, v) => { S.tn[id] = v; clearTimeout(tnT); tnT = setTimeout(save, 400); };
A.lang = () => { S.lang = S.lang === 'ar' ? 'en' : 'ar'; save(); route(); };
A.theme = () => { S.theme = {auto: 'light', light: 'dark', dark: 'auto'}[S.theme] || 'auto'; save(); shell(); toast(tr('المظهر: ', 'Theme: ') + S.theme); };
let sT; A.search = v => { clearTimeout(sT); sT = setTimeout(() => { v = v.trim(); if (!v) return; const h = '#/search?q=' + encodeURIComponent(v); if (location.hash.startsWith('#/search')) location.replace(h); else location.hash = h; }, 300); };
