/* Content helpers. A "pack" is plain data; T() builds one topic.
   T(id, english title, arabic title, lesson, {f:[[name,formula,note]], c:[[q,a]], q:[[question,[options],correctIndex,explanation]]})
   Lesson mini-markup: "## " heading, "- " bullet, "> " exam tip, "= " formula line, **bold** inline. */
window.CFO = window.CFO || {packs: []};
window.CFO.addPack = function (p) { window.CFO.packs.push(p); };
window.T = function (id, en, ar, l, o) { o = o || {}; return {id: id, en: en, ar: ar, l: l, f: o.f || [], c: o.c || [], q: o.q || [], o: o.o || []}; };
