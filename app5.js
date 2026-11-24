/* app5.js — redesigned home/learn pages, appearance settings, "My Content" editor */
const TCOL = {cma: '#1b9aa6', cpa: '#d9892b', cfa: '#7c5cdb', ifrs: '#2f7de1', fnd: '#1f9d6b'};
const tcol = id => TCOL[id] || ['#c2477a', '#3b8f9d', '#a0722a', '#4a6fa5', '#8a5cc0'][Math.abs([...String(id)].reduce((a, c) => a + c.charCodeAt(0), 0)) % 5];

/* ---------- Home ---------- */
function pHome() {
  const due = dueTotal(), nxt = nextTopic(), lastId = S.last && IDX.t[S.last] ? S.last : null, weak = weakTopics();
  const tot = Object.keys(IDX.t).length, mast = Object.values(S.prog).filter(v => v === 2).length;
  const hr = new Date().getHours(), hi = hr < 12 ? tr('صباح الخير', 'Good morning') : hr < 18 ? tr('مساء النور', 'Good afternoon') : tr('مساء الخير', 'Good evening');
  const exams = Object.keys(S.exam).filter(k => S.exam[k] && IDX.tracks.some(x => x.id === k)).map(k => {
    const d = Math.ceil((new Date(S.exam[k]) - new Date()) / 864e5), st = trackStats(k), left = st.n - st.mastered, wk = Math.max(1, Math.ceil(d / 7));
    return d > 0 ? '<div class="card row" style="gap:14px">' + ring(Math.min(100, st.pct), 60) + '<div><b>' + esc(ttl(IDX.tracks.find(x => x.id === k))) + '</b><div class="small muted">' + d + ' ' + tr('يوم متبقي', 'days left') + '</div><div class="small">' + tr('المطلوب أسبوعيًا: ', 'Weekly need: ') + '<b>' + Math.ceil(left / wk) + '</b> ' + tr('موضوع', 'topics') + '</div></div></div>' : '';
  }).join('');
  const go = h => 'onclick="location.hash=\'' + h + '\'"';
  return '<div class="hero"><div class="row wrap" style="gap:8px"><span class="pill">' + hi + ' ' + tr('يا كمال', 'Kamal') + '</span><span class="pill">' + (streak() ? '🔥 ' + streak() + ' ' + tr('يوم متتالي', 'day streak') : '✨ ' + tr('ابدأ سلسلتك اليوم', 'Start your streak')) + '</span></div>' +
    '<h1>' + tr('خطة اليوم', "Today's plan") + '</h1><p>' + tr('20 دقيقة دراسة، مراجعة بطاقات، وأسئلة. خطوات صغيرة كل يوم تصنع CFO قويًا.', '20 min study, review, practice. Small daily steps build a strong CFO.') + '</p>' +
    '<div class="row wrap" style="gap:8px">' + (lastId ? '<button class="btn t" ' + go('#/topic/' + lastId) + '>▶ ' + tr('كمّل: ', 'Continue: ') + esc(ttl(IDX.t[lastId].t).slice(0, 34)) + '</button>' : nxt ? '<button class="btn t" ' + go('#/topic/' + nxt) + '>▶ ' + tr('ابدأ: ', 'Start: ') + esc(ttl(IDX.t[nxt].t).slice(0, 34)) + '</button>' : '') +
    '<button class="btn" ' + go('#/review') + '>↻ ' + tr('مراجعة', 'Review') + ' (' + due + ')</button><button class="btn" ' + go('#/exam') + '>⏱ ' + tr('امتحان تجريبي', 'Mock exam') + '</button></div></div>' +
    '<div class="tiles"><div class="tile"><div class="ic">🃏</div><div><b>' + S.day.cards + '/' + S.goal.cards + '</b><span>' + tr('بطاقات اليوم', 'Cards today') + '</span></div></div>' +
    '<div class="tile"><div class="ic">✅</div><div><b>' + S.day.qs + '</b><span>' + tr('أسئلة اليوم', 'Questions today') + '</span></div></div>' +
    '<div class="tile"><div class="ic">🏆</div><div><b>' + mast + '/' + tot + '</b><span>' + tr('مواضيع متقنة', 'Mastered') + '</span></div></div>' +
    '<div class="tile"><div class="ic">⭐</div><div><b>' + Object.keys(S.fav || {}).length + '</b><span>' + tr('مفضلة', 'Bookmarks') + '</span></div></div></div>' +
    '<div style="margin-top:14px">' + (typeof actChart === 'function' ? actChart() : '') + '</div>' +
    '<h2>' + tr('مساراتك', 'Your tracks') + '</h2><div class="grid">' + IDX.tracks.map(tk => trackCard(tk)).join('') + '</div>' +
    (exams ? '<h2>' + tr('عدّاد الامتحانات', 'Exam countdown') + '</h2><div class="grid">' + exams + '</div>' : '') +
    (weak.length ? '<h2>' + tr('مواضيع تحتاج مراجعة', 'Needs review') + '</h2><div class="card">' + weak.map(link).join('') + '</div>' : '') +
    '<h2>' + tr('جديد في المحتوى', "What's new") + '</h2><div class="card small">' + (IDX.news.slice(-4).reverse().map(n => '<div style="padding:5px 0">• ' + esc(n) + '</div>').join('') || '—') + '</div>';
}
function trackCard(tk) {
  const s = trackStats(tk.id);
  return '<div class="card k tcard" style="--tc:' + tcol(tk.id) + '" onclick="location.hash=\'#/learn/' + tk.id + '\'"><div class="row" style="gap:12px"><div class="ti">' + esc(tk.icon) + '</div><div class="grow"><b>' + esc(ttl(tk)) + '</b><div class="small muted">' + s.n + ' ' + tr('موضوع', 'topics') + ' · ' + s.studying + ' ' + tr('قيد الدراسة', 'in progress') + '</div></div>' + ring(s.pct, 52) + '</div>' + (tk.desc ? '<p class="small muted" style="margin:10px 0 0">' + esc(tk.desc.slice(0, 120)) + (tk.desc.length > 120 ? '…' : '') + '</p>' : '') + '</div>';
}
function pLearn() {
  return '<h1>' + tr('المناهج', 'Curriculum') + '</h1><p class="sub">' + tr('اختر مسارًا. كل موضوع فيه درس، قوانين، بطاقات، أسئلة وملاحظاتك.', 'Pick a track: lessons, formulas, flashcards, quizzes, notes.') + '</p><div class="grid">' +
    IDX.tracks.map(trackCard).join('') +
    '<div class="card k tcard" style="--tc:#8a97a8" onclick="location.hash=\'#/mine\'"><div class="row" style="gap:12px"><div class="ti">＋</div><div class="grow"><b>' + tr('أضف محتواك', 'Add your content') + '</b><div class="small muted">' + tr('درس أو بطاقات أو أسئلة، في أي مسار', 'Lesson, cards or questions in any track') + '</div></div></div></div></div>';
}

/* ---------- Appearance ---------- */
const ACCENTS = [['teal', '#1b9aa6'], ['indigo', '#5266e8'], ['emerald', '#17986a'], ['rose', '#d9456a'], ['amber', '#cc8a14']];
function appearanceCard() {
  return '<div class="card" style="margin-bottom:12px"><h3>🎨 ' + tr('المظهر', 'Appearance') + '</h3><div class="field"><label>' + tr('لون التطبيق', 'Accent color') + '</label><div class="sw">' + ACCENTS.map(a => '<button class="' + ((S.accent || 'teal') === a[0] ? 'on' : '') + '" style="background:' + a[1] + '" onclick="A.accent(\'' + a[0] + '\')" aria-label="' + a[0] + '"></button>').join('') + '</div></div>' +
    '<div class="row wrap"><button class="btn" onclick="A.theme()">🌓 ' + tr('الوضع: ', 'Mode: ') + esc(S.theme) + '</button><button class="btn" onclick="A.fs(-1)">A−</button><button class="btn" onclick="A.fs(1)">A+</button></div></div>';
}
A.accent = k => { S.accent = k; save(); shell(); route(); };

/* ---------- My Content editor ---------- */
let M = {tk: '', sec: '', tname: '', sname: '', title: '', titleAr: '', lesson: '', cards: '', quiz: '', edit: null};
const mineStore = () => EXTRA.find(p => p.id === 'mine') || {id: 'mine', ver: '1', name: 'My Content / محتواي', tracks: []};
function mRead() { ['tk', 'sec', 'tname', 'sname', 'title', 'titleAr', 'lesson', 'cards', 'quiz'].forEach(k => { const e = document.getElementById('m_' + k); if (e) M[k] = e.value; }); }
A.mTrack = () => { mRead(); M.sec = ''; route(); };
function mSections(tid) { const tk = IDX.tracks.find(t => t.id === tid); if (!tk) return []; const out = []; tk.parts.forEach(P => P.secs.forEach(C => out.push([P.id + '|' + C.id, ttl(C)]))); return out; }
function pMine() {
  const mp = mineStore(), mine = [];
  mp.tracks.forEach(t => t.parts.forEach(P => P.secs.forEach(C => C.topics.forEach(tp => mine.push({t, P, C, tp})))));
  const secs = M.tk && M.tk !== '__new' ? mSections(M.tk) : [];
  return '<h1>＋ ' + tr('محتواي', 'My content') + '</h1><p class="sub">' + tr('أضف دروسك وبطاقاتك وأسئلتك بنفسك في أي مسار، بدون رفع ملفات ولا انتظار تحديث. تُحفظ على جهازك وتبقى بعد تحديث التطبيق.', 'Add your own lessons, cards and questions to any track. Stored on this device and kept across app updates.') + '</p>' +
    '<div class="card"><div class="field"><label>' + tr('المسار', 'Track') + '</label><select id="m_tk" onchange="A.mTrack()"><option value="">' + tr('— اختر —', '— choose —') + '</option>' + IDX.tracks.map(t => '<option value="' + t.id + '"' + (M.tk === t.id ? ' selected' : '') + '>' + esc(ttl(t)) + '</option>').join('') + '<option value="__new"' + (M.tk === '__new' ? ' selected' : '') + '>＋ ' + tr('مسار جديد', 'New track') + '</option></select></div>' +
    (M.tk === '__new' ? '<div class="field"><label>' + tr('اسم المسار الجديد', 'New track name') + '</label><input id="m_tname" value="' + esc(M.tname) + '"></div>' : '') +
    (M.tk ? '<div class="field"><label>' + tr('القسم', 'Section') + '</label><select id="m_sec"><option value="__new">＋ ' + tr('قسم جديد', 'New section') + '</option>' + secs.map(s => '<option value="' + esc(s[0]) + '"' + (M.sec === s[0] ? ' selected' : '') + '>' + esc(s[1]) + '</option>').join('') + '</select></div><div class="field"><label>' + tr('اسم القسم الجديد (لو اخترت قسم جديد)', 'New section name (if new)') + '</label><input id="m_sname" value="' + esc(M.sname) + '"></div>' : '') +
    '<div class="field"><label>' + tr('عنوان الموضوع (إنجليزي)', 'Topic title') + '</label><input id="m_title" value="' + esc(M.title) + '" dir="auto"></div>' +
    '<div class="field"><label>' + tr('العنوان بالعربي (اختياري)', 'Arabic title (optional)') + '</label><input id="m_titleAr" value="' + esc(M.titleAr) + '"></div>' +
    '<div class="field"><label>' + tr('الدرس', 'Lesson') + ' — ' + tr('## عنوان، - نقطة، > نصيحة، = معادلة، **غامق**', '## heading, - bullet, > tip, = formula, **bold**') + '</label><textarea id="m_lesson" style="min-height:180px" dir="auto">' + esc(M.lesson) + '</textarea></div>' +
    '<div class="field"><label>' + tr('بطاقات (سطر لكل بطاقة): سؤال | إجابة', 'Flashcards (one per line): question | answer') + '</label><textarea id="m_cards" dir="auto">' + esc(M.cards) + '</textarea></div>' +
    '<div class="field"><label>' + tr('أسئلة (سطر لكل سؤال): سؤال | أ | ب | ج | د | الصحيح (A-D) | شرح', 'Quiz (one per line): question | A | B | C | D | correct (A-D) | explanation') + '</label><textarea id="m_quiz" dir="auto">' + esc(M.quiz) + '</textarea></div>' +
    '<div class="row wrap"><button class="btn t" onclick="A.mSave()">💾 ' + (M.edit ? tr('حفظ التعديل', 'Save changes') : tr('حفظ الموضوع', 'Save topic')) + '</button>' + (M.edit ? '<button class="btn" onclick="A.mNew()">' + tr('إلغاء التعديل', 'Cancel edit') + '</button>' : '') + '</div></div>' +
    '<h2>' + tr('محتواي المحفوظ', 'My saved topics') + ' (' + mine.length + ')</h2><div class="card">' + (mine.map(x => '<div class="li" style="cursor:default"><div class="grow"><a href="#/topic/' + x.tp.id + '"><b>' + esc(x.tp.en || x.tp.ar) + '</b></a><div class="small muted">' + esc(x.t.en || x.t.id) + '</div></div><button class="btn sm" onclick="A.mEdit(\'' + x.tp.id + '\')">✎</button> <button class="btn sm bad" onclick="A.mDel(\'' + x.tp.id + '\')">🗑</button></div>').join('') || '<p class="muted">' + tr('لا يوجد بعد.', 'Nothing yet.') + '</p>') + '</div>';
}
A.mNew = () => { M = {tk: '', sec: '', tname: '', sname: '', title: '', titleAr: '', lesson: '', cards: '', quiz: '', edit: null}; route(); };
function parseMine() {
  const cards = M.cards.split('\n').map(l => l.split('|').map(x => x.trim())).filter(a => a.length >= 2 && a[0] && a[1]).map(a => [a[0], a.slice(1).join(' | ')]);
  const q = M.quiz.split('\n').map(l => l.split('|').map(x => x.trim())).filter(a => a.length >= 6 && a[0]).map(a => {
    const opts = a.slice(1, 5).filter(Boolean), ci = 'ABCDabcd'.indexOf(a[5]) % 4; return opts.length >= 2 && ci >= 0 && ci < opts.length ? [a[0], opts, ci, a.slice(6).join(' | ')] : null;
  }).filter(Boolean);
  return {cards, q};
}
A.mSave = async () => {
  mRead(); if (!M.tk || !M.title.trim()) { toast(tr('اختر المسار واكتب عنوان الموضوع', 'Choose a track and enter a title')); return; }
  if (M.tk === '__new' && !M.tname.trim()) { toast(tr('اكتب اسم المسار الجديد', 'Enter the new track name')); return; }
  const {cards, q} = parseMine(), mp = mineStore(), id = M.edit || 'u' + Date.now().toString(36);
  if (M.edit) removeMine(mp, M.edit);
  const tid = M.tk === '__new' ? 'u-' + (M.tname.trim().replace(/[^a-z0-9]/gi, '').toLowerCase() || Date.now().toString(36)) : M.tk;
  let pt = '', sc = M.sec;
  const ex = IDX.tracks.find(t => t.id === tid);
  if (M.tk === '__new' || !sc || sc === '__new') { sc = 's' + Date.now().toString(36); pt = ex ? ex.parts[ex.parts.length - 1].id : 'mine-p'; } else { [pt, sc] = sc.split('|'); }
  let tr0 = mp.tracks.find(t => t.id === tid); if (!tr0) { tr0 = {id: tid, parts: []}; if (!ex) { tr0.en = M.tname.trim(); tr0.ar = M.tname.trim(); tr0.icon = '★'; tr0.desc = tr('محتوى شخصي', 'Personal content'); } mp.tracks.push(tr0); }
  let p0 = tr0.parts.find(p => p.id === pt); if (!p0) { p0 = {id: pt, en: 'My Content', ar: 'محتواي', secs: []}; tr0.parts.push(p0); }
  let s0 = p0.secs.find(s => s.id === sc); if (!s0) { const nm = (M.sname || '').trim() || tr('محتواي', 'My content'); s0 = {id: sc, en: nm, ar: nm, w: '', topics: []}; p0.secs.push(s0); }
  s0.topics.push({id, en: M.title.trim(), ar: (M.titleAr || M.title).trim(), l: M.lesson, f: [], c: cards, q: q, o: []});
  mp.ver = '1'; try { await idbPut(mp); EXTRA = await idbAll(); } catch (e) { EXTRA = EXTRA.filter(x => x.id !== 'mine').concat([mp]); toast(tr('تحذير: التخزين الدائم غير متاح', 'Warning: persistent storage unavailable')); }
  build(); toast(tr('تم الحفظ: ', 'Saved: ') + cards.length + ' ' + tr('بطاقة', 'cards') + ' · ' + q.length + ' ' + tr('سؤال', 'questions'));
  M = {tk: '', sec: '', tname: '', sname: '', title: '', titleAr: '', lesson: '', cards: '', quiz: '', edit: null}; route();
};
function removeMine(mp, id) { mp.tracks.forEach(t => t.parts.forEach(P => P.secs.forEach(C => { C.topics = C.topics.filter(x => x.id !== id); }))); mp.tracks.forEach(t => t.parts.forEach(P => { P.secs = P.secs.filter(C => C.topics.length); })); mp.tracks.forEach(t => { t.parts = t.parts.filter(P => P.secs.length); }); mp.tracks = mp.tracks.filter(t => t.parts.length); }
A.mDel = async id => { if (!confirm(tr('حذف هذا الموضوع؟', 'Delete this topic?'))) return; const mp = mineStore(); removeMine(mp, id); try { await idbPut(mp); EXTRA = await idbAll(); } catch (e) { EXTRA = EXTRA.filter(x => x.id !== 'mine').concat([mp]); } build(); route(); };
A.mEdit = id => {
  const mp = mineStore(); let hit = null; mp.tracks.forEach(t => t.parts.forEach(P => P.secs.forEach(C => C.topics.forEach(tp => { if (tp.id === id) hit = {t, P, C, tp}; }))));
  if (!hit) return; const tk = IDX.tracks.find(x => x.id === hit.t.id);
  M = {tk: tk ? tk.id : '', sec: hit.P.id + '|' + hit.C.id, tname: hit.t.en || '', sname: hit.C.en || '', title: hit.tp.en, titleAr: hit.tp.ar === hit.tp.en ? '' : hit.tp.ar, lesson: hit.tp.l, cards: hit.tp.c.map(c => c[0] + ' | ' + c[1]).join('\n'), quiz: hit.tp.q.map(q => [q[0], ...q[1], ...Array(4 - q[1].length).fill(''), 'ABCD'[q[2]], q[3]].join(' | ')).join('\n'), edit: id};
  route(); window.scrollTo(0, 0);
};
