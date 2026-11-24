/* app3: calculators, formulas, glossary, library, notes, settings, search, init */
const nz = v => (isFinite(v) ? v : 0);
const lst = s => String(s || '').split(/[\s,;]+/).filter(Boolean).map(Number).filter(isFinite);
const npvAt = (r, c) => c.reduce((a, x, t) => a + x / Math.pow(1 + r, t), 0);
function irr(c) { let lo = -0.99, hi = 10, flo = npvAt(lo, c); if (flo * npvAt(hi, c) > 0) return NaN; for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2, fm = npvAt(m, c); if (fm * flo > 0) { lo = m; flo = fm; } else hi = m; } return (lo + hi) / 2; }
const pct = (x, d = 2) => (isFinite(x) ? fmt(x * 100, d) + '%' : '—');
const N = (k, l, v) => ({k, l, v, t: 'num'});

const CALCS = {
  tvm: {t: ['القيمة الزمنية للنقود', 'Time value of money'], d: ['قيمة مستقبلية/حالية أو قسط قرض', 'FV / PV / loan payment'], f: [{k: 'mode', l: 'العملية / Mode', t: 'sel', v: 'fv', o: [['fv', 'FV (القيمة المستقبلية)'], ['pv', 'PV (القيمة الحالية)'], ['loan', 'Loan payment (قسط قرض)']]}, N('lump', 'المبلغ الحالي أو أصل القرض / Lump sum or loan', 100000), N('pmt', 'دفعة دورية (نهاية الفترة) / Periodic payment', 0), N('rate', 'المعدل السنوي % / Annual rate %', 12), N('yrs', 'السنوات / Years', 5), N('m', 'عدد الفترات في السنة / Periods per year', 12)],
    run: v => { const r = nz(v.rate) / 100 / nz(v.m), n = nz(v.yrs) * nz(v.m), g = Math.pow(1 + r, n); const ann = r ? (g - 1) / r : n, pva = r ? (1 - 1 / g) / r : n;
      if (v.mode === 'fv') return [['FV', fmt(v.lump * g + v.pmt * ann)]]; if (v.mode === 'pv') return [['PV', fmt(v.lump / g + v.pmt * pva)]];
      const p = r ? v.lump * r / (1 - 1 / g) : v.lump / n; return [['Payment', fmt(p)], ['Total paid', fmt(p * n)], ['Total interest', fmt(p * n - v.lump)]]; }},
  npv: {t: ['تقييم الاستثمار NPV/IRR', 'Investment appraisal'], d: ['NPV وIRR والاسترداد وPI', 'NPV, IRR, payback, PI'], f: [N('inv', 'الاستثمار الأولي / Initial investment', 1000000), N('r', 'معدل الخصم % / Discount rate %', 20), {k: 'cf', l: 'التدفقات السنوية مفصولة بفواصل / Annual cash flows (comma-separated)', t: 'txt', v: '300000, 400000, 450000, 450000'}],
    run: v => { const r = nz(v.r) / 100, f = lst(v.cf), c = [-nz(v.inv)].concat(f); const npv = npvAt(r, c), pvIn = npv + nz(v.inv); let cum = 0, pb = NaN, dc = 0, dpb = NaN;
      f.forEach((x, i) => { const p0 = cum; cum += x; if (isNaN(pb) && cum >= v.inv) pb = i + (v.inv - p0) / x; const d0 = dc; const dx = x / Math.pow(1 + r, i + 1); dc += dx; if (isNaN(dpb) && dc >= v.inv) dpb = i + (v.inv - d0) / dx; });
      return [['NPV', fmt(npv)], ['IRR', pct(irr(c))], ['Payback (yrs)', isNaN(pb) ? tr('لا يسترد', 'Not recovered') : fmt(pb)], ['Discounted payback (yrs)', isNaN(dpb) ? tr('لا يسترد', 'Not recovered') : fmt(dpb)], ['Profitability index', fmt(pvIn / v.inv, 3)], ['Decision', npv > 0 ? tr('اقبل (NPV>0)', 'Accept (NPV>0)') : tr('ارفض (NPV≤0)', 'Reject (NPV≤0)')]]; }},
  cvp: {t: ['نقطة التعادل CVP', 'Break-even / CVP'], d: ['هامش المساهمة والتعادل وهامش الأمان', 'CM, break-even, margin of safety'], f: [N('p', 'سعر الوحدة / Price', 100), N('vc', 'التكلفة المتغيرة للوحدة / Variable cost', 60), N('fc', 'التكاليف الثابتة / Fixed costs', 40000), N('tp', 'ربح مستهدف قبل الضريبة / Target pretax profit', 20000), N('u', 'الوحدات الحالية / Current units', 2000)],
    run: v => { const cm = v.p - v.vc, cr = cm / v.p, be = v.fc / cm, tu = (v.fc + v.tp) / cm, mos = (v.u - be) / v.u; return [['CM / unit', fmt(cm)], ['CM ratio', pct(cr)], ['Break-even units', fmt(be, 1)], ['Break-even sales', fmt(be * v.p)], ['Units for target profit', fmt(tu, 1)], ['Margin of safety', pct(mos)], ['Operating income now', fmt(cm * v.u - v.fc)], ['DOL', fmt(cm * v.u / (cm * v.u - v.fc), 2)]]; }},
  ccc: {t: ['دورة التحويل النقدي', 'Cash conversion cycle'], d: ['DIO وDSO وDPO وCCC', 'DIO, DSO, DPO, CCC'], f: [N('inv', 'متوسط المخزون / Inventory', 500000), N('cogs', 'تكلفة المبيعات / COGS', 6000000), N('ar', 'العملاء / Receivables', 400000), N('rev', 'الإيراد / Revenue', 9000000), N('ap', 'الموردون / Payables', 600000), N('days', 'أيام الفترة / Days in period', 365)],
    run: v => { const dio = v.inv / v.cogs * v.days, dso = v.ar / v.rev * v.days, dpo = v.ap / v.cogs * v.days; return [['DIO', fmt(dio, 1)], ['DSO', fmt(dso, 1)], ['DPO', fmt(dpo, 1)], ['CCC', fmt(dio + dso - dpo, 1)], [tr('تمويل رأس المال العامل التقريبي', 'Approx. WC funded'), fmt((dio + dso - dpo) * v.cogs / v.days)]]; }},
  wacc: {t: ['WACC وCAPM', 'WACC & CAPM'], d: ['تكلفة حقوق الملكية والمتوسط المرجح', 'Cost of equity & WACC'], f: [N('e', 'قيمة حقوق الملكية / Equity value', 6000000), N('dd', 'قيمة الدين / Debt', 4000000), N('kd', 'تكلفة الدين قبل الضريبة % / Pre-tax Kd %', 25), N('t', 'معدل الضريبة % / Tax %', 22.5), N('rf', 'العائد الخالي من المخاطر % / Rf %', 22), N('b', 'بيتا / Beta', 1.2), N('erp', 'علاوة مخاطر السوق % / ERP %', 8)],
    run: v => { const ke = v.rf + v.b * v.erp, V = v.e + v.dd, w = v.e / V * ke + v.dd / V * v.kd * (1 - v.t / 100); return [['Ke (CAPM)', fmt(ke) + '%'], ['Kd after tax', fmt(v.kd * (1 - v.t / 100)) + '%'], ['E/V', pct(v.e / V)], ['WACC', fmt(w) + '%']]; }},
  dcf: {t: ['تقييم DCF', 'DCF valuation'], d: ['قيمة المنشأة وحقوق الملكية', 'EV and equity value'], f: [N('f1', 'FCF السنة 1 / Year-1 FCF', 1000000), N('g', 'نمو الفترة الصريحة % / Growth %', 10), N('n', 'سنوات التوقع / Forecast years', 5), N('w', 'WACC %', 22), N('tg', 'نمو نهائي % / Terminal growth %', 6), N('nd', 'صافي الدين / Net debt', 2000000), N('sh', 'عدد الأسهم (اختياري) / Shares', 0)],
    run: v => { const w = v.w / 100, g = v.g / 100, tg = v.tg / 100; if (w <= tg) return [['Error', 'WACC must exceed terminal g']]; let pv = 0, f = v.f1; for (let t = 1; t <= v.n; t++) { pv += f / Math.pow(1 + w, t); if (t < v.n) f *= 1 + g; } const tv = f * (1 + tg) / (w - tg), pvtv = tv / Math.pow(1 + w, v.n), ev = pv + pvtv, eq = ev - v.nd;
      const r = [['PV of FCF', fmt(pv)], ['PV of terminal value', fmt(pvtv)], ['Enterprise value', fmt(ev)], ['TV share of EV', pct(pvtv / ev)], ['Equity value', fmt(eq)]]; if (v.sh > 0) r.push(['Per share', fmt(eq / v.sh)]); return r; }},
  var: {t: ['انحرافات المواد/العمالة', 'Materials / labor variances'], d: ['سعر وكفاءة', 'Price and efficiency'], f: [N('sp', 'السعر/المعدل المعياري / Standard price', 10), N('sq', 'الكمية المعيارية للوحدة / Standard qty per unit', 2), N('u', 'الوحدات المنتجة فعليًا / Actual output units', 1000), N('ap', 'السعر الفعلي / Actual price', 11), N('aq', 'الكمية الفعلية / Actual qty used', 2100)],
    run: v => { const pv = (v.ap - v.sp) * v.aq, ev = (v.aq - v.sq * v.u) * v.sp, l = x => (x > 0 ? 'U' : x < 0 ? 'F' : '—'); return [['Price/Rate variance', fmt(Math.abs(pv)) + ' ' + l(pv)], ['Efficiency/Usage variance', fmt(Math.abs(ev)) + ' ' + l(ev)], ['Total variance', fmt(Math.abs(pv + ev)) + ' ' + l(pv + ev)], [tr('ملاحظة', 'Note'), 'U = Unfavorable, F = Favorable']]; }},
  eoq: {t: ['الكمية الاقتصادية EOQ', 'EOQ & reorder point'], d: ['أوامر الشراء ونقطة إعادة الطلب', 'Order qty & reorder point'], f: [N('d', 'الطلب السنوي / Annual demand', 12000), N('s', 'تكلفة أمر الشراء / Cost per order', 200), N('h', 'تكلفة الاحتفاظ للوحدة سنويًا / Holding cost per unit', 5), N('lt', 'مدة التوريد (أيام) / Lead time days', 7), N('ss', 'مخزون الأمان / Safety stock', 100), N('days', 'أيام التشغيل / Operating days', 365)],
    run: v => { const q = Math.sqrt(2 * v.d * v.s / v.h); return [['EOQ', fmt(q, 1)], ['Orders / year', fmt(v.d / q, 1)], ['Total ordering + holding', fmt(v.d / q * v.s + q / 2 * v.h)], ['Reorder point', fmt(v.d / v.days * v.lt + v.ss, 1)]]; }},
  ratios: {t: ['محلل النسب المالية', 'Ratio analyzer'], d: ['سيولة ونشاط ورافعة وربحية وDuPont', 'Liquidity, activity, leverage, profitability'], f: [N('sales', 'المبيعات / Sales', 9000000), N('cogs', 'تكلفة المبيعات / COGS', 6000000), N('ebit', 'EBIT', 1200000), N('int', 'الفوائد / Interest', 300000), N('ni', 'صافي الربح / Net income', 700000), N('ca', 'أصول متداولة / Current assets', 2500000), N('inv', 'مخزون / Inventory', 500000), N('ar', 'عملاء / Receivables', 400000), N('ta', 'إجمالي الأصول / Total assets', 8000000), N('cl', 'التزامات متداولة / Current liabilities', 1800000), N('tl', 'إجمالي الالتزامات / Total liabilities', 5000000), N('eq', 'حقوق الملكية / Equity', 3000000)],
    run: v => [['Gross margin', pct((v.sales - v.cogs) / v.sales)], ['Operating margin', pct(v.ebit / v.sales)], ['Net margin', pct(v.ni / v.sales)], ['Current ratio', fmt(v.ca / v.cl)], ['Quick ratio', fmt((v.ca - v.inv) / v.cl)], ['Debt / Equity', fmt(v.tl / v.eq)], ['Interest coverage', fmt(v.ebit / v.int) + 'x'], ['Inventory turnover', fmt(v.cogs / v.inv) + 'x'], ['DSO', fmt(v.ar / v.sales * 365, 1)], ['Asset turnover', fmt(v.sales / v.ta)], ['ROA', pct(v.ni / v.ta)], ['ROE', pct(v.ni / v.eq)], ['Equity multiplier', fmt(v.ta / v.eq)]]},
  bond: {t: ['تسعير السندات', 'Bond pricing'], d: ['السعر والعائد الجاري', 'Price and current yield'], f: [N('face', 'القيمة الاسمية / Face', 1000), N('cp', 'معدل الكوبون % / Coupon %', 10), N('y', 'العائد حتى الاستحقاق % / YTM %', 12), N('yrs', 'السنوات / Years', 5), N('fr', 'الدفعات في السنة / Payments per year', 2)],
    run: v => { const c = v.face * v.cp / 100 / v.fr, r = v.y / 100 / v.fr, n = v.yrs * v.fr; let p = 0; for (let t = 1; t <= n; t++) p += c / Math.pow(1 + r, t); p += v.face / Math.pow(1 + r, n); return [['Price', fmt(p)], ['Current yield', pct(v.face * v.cp / 100 / p)], [tr('الحالة', 'Status'), p > v.face ? 'Premium' : p < v.face ? 'Discount' : 'Par']]; }}
};
function pTools() { return '<h1>' + tr('الحاسبات', 'Calculators') + '</h1><p class="sub">' + tr('تعمل أوفلاين. استخدمها على أرقام شغلك الفعلية.', 'Work offline. Use them on your real numbers.') + '</p><div class="grid">' + Object.keys(CALCS).map(k => '<div class="card k" onclick="location.hash=\'#/tools/' + k + '\'"><b>' + esc(tr(CALCS[k].t[0], CALCS[k].t[1])) + '</b><p class="small muted">' + esc(tr(CALCS[k].d[0], CALCS[k].d[1])) + '</p></div>').join('') + '</div>'; }
function pCalc(id) {
  const c = CALCS[id]; if (!c) return '<div class="card">?</div>';
  return '<a href="#/tools">← ' + tr('الحاسبات', 'Calculators') + '</a><h1>' + esc(tr(c.t[0], c.t[1])) + '</h1><div class="card">' + c.f.map(f => '<div class="field"><label>' + esc(f.l) + '</label>' + (f.t === 'sel' ? '<select id="f_' + f.k + '" onchange="calcRun()">' + f.o.map(o => '<option value="' + o[0] + '"' + (o[0] === f.v ? ' selected' : '') + '>' + esc(o[1]) + '</option>').join('') + '</select>' : '<input dir="ltr" id="f_' + f.k + '" ' + (f.t === 'txt' ? 'type="text"' : 'type="number" step="any" inputmode="decimal"') + ' value="' + esc(f.v) + '" oninput="calcRun()">') + '</div>').join('') + '</div><div class="card" style="margin-top:12px"><div id="cres" class="res"></div></div>';
}
function calcRun() {
  const id = location.hash.split('/')[2].split('?')[0], c = CALCS[id]; if (!c) return; const v = {};
  c.f.forEach(f => { const el = document.getElementById('f_' + f.k); v[f.k] = (f.t === 'sel' || f.t === 'txt') ? el.value : parseFloat(el.value); if (f.t === 'num' && !isFinite(v[f.k])) v[f.k] = 0; });
  let rows; try { rows = c.run(v); } catch (e) { rows = [['Error', e.message]]; }
  $('#cres').innerHTML = rows.map(r => '<div><span>' + esc(r[0]) + '</span><b>' + esc(r[1]) + '</b></div>').join('');
}

/* formulas & glossary */
function filt(id) { return '<input class="ib" style="width:100%;margin-bottom:10px" placeholder="' + tr('فلترة...', 'Filter...') + '" oninput="A.filter(this.value)">'; }
A.filter = v => { v = v.toLowerCase(); document.querySelectorAll('[data-s]').forEach(e => e.classList.toggle('hidden', v && !e.dataset.s.includes(v))); };
function pForms() {
  return '<h1>' + tr('ورقة القوانين', 'Formula sheet') + '</h1><p class="sub">' + tr('كل القوانين المستخرجة من الدروس، مجمعة حسب المسار.', 'Every formula from the lessons, grouped by track.') + '</p>' + filt() +
    IDX.tracks.map(tk => { const fs = IDX.forms.filter(f => f.tr === tk.id); if (!fs.length) return ''; return '<h2>' + esc(ttl(tk)) + '</h2>' + fs.map(f => '<div class="card" style="margin:8px 0" data-s="' + esc((f.n + ' ' + f.f + ' ' + ttl(IDX.t[f.tid].t)).toLowerCase()) + '"><div class="small"><a href="#/topic/' + f.tid + '">' + esc(ttl(IDX.t[f.tid].t)) + '</a>' + (f.n ? ' · <b>' + esc(f.n) + '</b>' : '') + '</div><div class="formula">' + esc(f.f) + '</div>' + (f.d ? '<div class="small muted">' + esc(f.d) + '</div>' : '') + '</div>').join(''); }).join('');
}
function pGloss() {
  return '<h1>' + tr('المصطلحات', 'Glossary') + ' (' + IDX.gloss.length + ')</h1>' + filt() + '<div class="card">' + IDX.gloss.map(g => '<div class="li" data-s="' + esc((g[0] + ' ' + g[1] + ' ' + (g[2] || '')).toLowerCase()) + '"><div class="grow"><b dir="ltr">' + esc(g[0]) + '</b><div>' + esc(g[1]) + '</div>' + (g[2] ? '<div class="small muted">' + esc(g[2]) + '</div>' : '') + '</div></div>').join('') + '</div>';
}

/* library */
function pLib() {
  const L = IDX.lib;
  return '<h1>' + tr('المكتبة والنصائح', 'Library & advice') + '</h1>' +
    '<h2>' + tr('اقتراحاتي لك', 'My recommendations') + '</h2>' + L.advice.map(a => '<div class="card" style="margin:8px 0"><b>' + esc(a.t) + '</b><div class="lesson" style="font-size:15px;line-height:1.9">' + md(a.b) + '</div></div>').join('') +
    '<h2>' + tr('معلومات الشهادات (تحقق من المصدر الرسمي)', 'Certification facts (verify officially)') + '</h2>' + L.facts.map(f => '<details><summary>' + esc(f.t) + '</summary><div class="in">' + f.r.map(r => '<div class="li" style="cursor:default"><b style="min-width:90px">' + esc(r[0]) + '</b><span class="grow">' + esc(r[1]) + '</span></div>').join('') + '</div></details>').join('') +
    '<h2>' + tr('كتب', 'Books') + '</h2><div class="grid">' + L.books.map(b => '<div class="card"><b dir="ltr">' + esc(b[0]) + '</b><div class="small muted" dir="ltr">' + esc(b[1]) + '</div><p class="small">' + esc(b[2]) + '</p><div class="small" style="color:var(--acc)">' + esc(b[3]) + '</div></div>').join('') + '</div>' +
    '<h2>' + tr('مصادر رسمية', 'Official sources') + '</h2><div class="card">' + L.sources.map(s => '<a class="li" target="_blank" rel="noopener" href="' + esc(s[3]) + '"><div class="grow"><b dir="ltr">' + esc(s[0]) + '</b> <span class="tag">' + esc(s[1]) + '</span><div class="small muted">' + esc(s[2]) + '</div></div>↗</a>').join('') + '</div>' +
    '<h2>' + tr('سجل التحديثات', 'Changelog') + '</h2><div class="card small">' + IDX.news.map(n => '<div style="padding:4px 0">• ' + esc(n) + '</div>').join('') + '</div>';
}

/* notes */
function pNotes() {
  const tn = Object.keys(S.tn).filter(k => S.tn[k] && IDX.t[k]);
  return '<h1>' + tr('ملاحظاتي', 'My notes') + '</h1><div class="card"><div class="field"><label>' + tr('العنوان', 'Title') + '</label><input id="nt"></div><div class="field"><label>' + tr('المحتوى', 'Content') + '</label><textarea id="nx"></textarea></div><button class="btn p" onclick="A.addNote()">' + tr('حفظ', 'Save') + '</button></div>' +
    '<h2>' + tr('ملاحظات عامة', 'General notes') + ' (' + S.notes.length + ')</h2>' + (S.notes.map((n, i) => '<div class="card" style="margin:8px 0"><div class="row sp"><b>' + esc(n.title) + '</b><button class="btn sm bad" onclick="A.delNote(' + i + ')">' + tr('حذف', 'Delete') + '</button></div><div class="small muted">' + new Date(n.ts).toLocaleDateString() + '</div><p style="white-space:pre-wrap">' + esc(n.text) + '</p></div>').join('') || '<div class="card muted">—</div>') +
    '<h2>' + tr('ملاحظات المواضيع', 'Topic notes') + ' (' + tn.length + ')</h2>' + tn.map(k => '<div class="card" style="margin:8px 0"><a href="#/topic/' + k + '"><b>' + esc(ttl(IDX.t[k].t)) + '</b></a><p style="white-space:pre-wrap">' + esc(S.tn[k]) + '</p></div>').join('');
}
A.addNote = () => { const t = $('#nt').value.trim(), x = $('#nx').value.trim(); if (!t || !x) { toast(tr('اكتب العنوان والمحتوى', 'Enter title and content')); return; } S.notes.unshift({id: 'n' + Date.now(), title: t, text: x, ts: Date.now()}); save(); route(); };
A.delNote = i => { if (confirm(tr('حذف الملاحظة؟', 'Delete note?'))) { S.notes.splice(i, 1); save(); route(); } };

/* more, search */
function pMore() { return '<h1>' + tr('المزيد', 'More') + '</h1><div class="card">' + NAV.filter(n => ['cma', 'exam', 'fav', 'mine', 'tools', 'formulas', 'glossary', 'lib', 'notes', 'settings'].includes(n[0])).map(n => '<a class="li" href="#/' + n[0] + '"><span style="width:26px;text-align:center">' + n[1] + '</span><b>' + tr(n[2], n[3]) + '</b></a>').join('') + '</div>'; }
function pSearch(q) {
  const w = q.toLowerCase().split(/\s+/).filter(Boolean); if (!w.length) return '<h1>' + tr('بحث', 'Search') + '</h1>';
  const has = s => w.every(x => s.includes(x)); let h = '<h1>' + tr('نتائج: ', 'Results: ') + esc(q) + '</h1>';
  const ts = Object.keys(IDX.t).filter(id => { const t = IDX.t[id].t; return has((t.en + ' ' + t.ar + ' ' + t.l + ' ' + t.c.map(c => c.join(' ')).join(' ')).toLowerCase()); }).slice(0, 40);
  h += '<h2>' + tr('مواضيع', 'Topics') + ' (' + ts.length + ')</h2><div class="card">' + (ts.map(link).join('') || '—') + '</div>';
  const gs = IDX.gloss.filter(g => has((g[0] + ' ' + g[1] + ' ' + (g[2] || '')).toLowerCase())).slice(0, 15);
  if (gs.length) h += '<h2>' + tr('مصطلحات', 'Glossary') + '</h2><div class="card">' + gs.map(g => '<div class="li" style="cursor:default"><b dir="ltr">' + esc(g[0]) + '</b><span>' + esc(g[1]) + '</span></div>').join('') + '</div>';
  const fs = IDX.forms.filter(f => has((f.n + ' ' + f.f).toLowerCase())).slice(0, 10);
  if (fs.length) h += '<h2>' + tr('قوانين', 'Formulas') + '</h2>' + fs.map(f => '<div class="card" style="margin:6px 0"><a href="#/topic/' + f.tid + '" class="small">' + esc(ttl(IDX.t[f.tid].t)) + '</a><div class="formula">' + esc(f.f) + '</div></div>').join('');
  return h;
}

/* settings & data */
const PACK_TPL = '{\n  "id": "cma-update-1",\n  "ver": "2026.12.1",\n  "name": "CMA 1C Deep Dive",\n  "tracks": [{"id":"cma","parts":[{"id":"cma1","secs":[{"id":"cma1C","topics":[\n    {"id":"c1c9","en":"New topic","ar":"موضوع جديد","l":"## عنوان\\n- نقطة","f":[["Name","A = B + C",""]],"c":[["Q?","A"]],"q":[["Question?",["a","b","c","d"],0,"شرح"]]}\n  ]}]}]}]\n}';
function pSettings() {
  const ex = k => S.exam[k] || '';
  return '<h1>' + tr('الإعدادات والبيانات', 'Settings & data') + '</h1>' + (typeof appearanceCard === 'function' ? appearanceCard() : '') +
    '<div class="card"><h3>' + tr('الأهداف اليومية', 'Daily goals') + '</h3><div class="row wrap"><div class="field grow"><label>' + tr('بطاقات/يوم', 'Cards/day') + '</label><input type="number" value="' + S.goal.cards + '" onchange="A.goal(\'cards\',this.value)"></div><div class="field grow"><label>' + tr('بطاقات جديدة/يوم', 'New cards/day') + '</label><input type="number" value="' + S.goal.newc + '" onchange="A.goal(\'newc\',this.value)"></div></div>' +
    '<h3>' + tr('تواريخ الامتحانات', 'Exam dates') + '</h3><div class="row wrap">' + IDX.tracks.filter(t => ['cma', 'cpa', 'cfa'].includes(t.id)).map(t => '<div class="field grow"><label>' + esc(ttl(t)) + '</label><input type="date" value="' + ex(t.id) + '" onchange="A.exam(\'' + t.id + '\',this.value)"></div>').join('') + '</div>' +
    '<h3>' + tr('الصوت', 'Voice') + '</h3><label class="row small"><input type="checkbox" ' + (TTS.auto ? 'checked' : '') + ' onchange="TTS.auto=this.checked"> ' + tr('تابع للموضوع التالي تلقائيًا عند الاستماع', 'Auto-continue to the next topic when listening') + '</label></div>' +
    '<div class="card" style="margin-top:12px"><h3>' + tr('نسخة احتياطية', 'Backup') + '</h3><p class="small muted">' + tr('كل تقدمك وملاحظاتك محفوظة على هذا الجهاز فقط. صدّر نسخة بانتظام، وانقلها لجهاز آخر بالاستيراد.', 'Progress and notes live on this device only. Export regularly; import on another device.') + '</p><div class="row wrap"><button class="btn p" onclick="A.exp()">⬇ ' + tr('تصدير', 'Export') + '</button><button class="btn" onclick="$(\'#imp\').click()">⬆ ' + tr('استيراد', 'Import') + '</button><input id="imp" type="file" accept=".json" class="hidden" onchange="A.imp(event)"></div></div>' +
    '<div class="card" style="margin-top:12px"><h3>' + tr('تحديث المحتوى (Content Pack)', 'Update content (Content Pack)') + '</h3><p class="small muted">' + tr('اطلب مني Pack جديد، ثم استورده هنا. يُدمج بالمعرّف (id) ويُستبدل الأقدم بالأحدث تلقائيًا، بدون إعادة تنصيب.', 'Ask for a new Pack and import it here. Merged by id; newer replaces older.') + '</p><div class="row wrap"><button class="btn t" onclick="$(\'#pk\').click()">⬆ ' + tr('استيراد Pack (ملف)', 'Import pack (file)') + '</button><input id="pk" type="file" accept=".json" class="hidden" onchange="A.pack(event)"></div><div class="field"><label>' + tr('أو الصق JSON', 'Or paste JSON') + '</label><textarea id="pkt" style="min-height:70px"></textarea></div><button class="btn" onclick="A.packText()">' + tr('استيراد من النص', 'Import pasted') + '</button>' +
    '<details style="margin-top:10px"><summary>' + tr('شكل الـ Pack', 'Pack format') + '</summary><div class="in"><pre class="formula" style="font-size:11px">' + esc(PACK_TPL) + '</pre></div></details>' +
    '<h3>' + tr('الباكجات المثبتة', 'Installed packs') + '</h3>' + IDX.packs.map(p => '<div class="li" style="cursor:default"><div class="grow"><b>' + esc(p.name || p.id) + '</b><div class="small muted">' + esc(p.id) + ' · v' + esc(p.ver) + '</div></div>' + (EXTRA.some(e => e.id === p.id) ? '<button class="btn sm bad" onclick="A.delPack(\'' + sid(p.id) + '\')">' + tr('إزالة', 'Remove') + '</button>' : '<span class="tag">built-in</span>') + '</div>').join('') + '</div>' +
    '<div class="card" style="margin-top:12px"><h3>' + tr('التنصيب على الموبايل', 'Install on phone') + '</h3><p class="small">' + tr('افتح رابط التطبيق في Chrome (أندرويد): القائمة ⋮ ثم "تثبيت التطبيق". على آيفون في Safari: زر المشاركة ثم "إضافة إلى الشاشة الرئيسية". بعدها يعمل بدون إنترنت.', 'Android Chrome: ⋮ menu → Install app. iPhone Safari: Share → Add to Home Screen. Works offline afterwards.') + '</p><div class="row wrap"><button class="btn" onclick="A.refreshApp()">⟳ ' + tr('تحديث التطبيق (مسح الكاش)', 'Refresh app (clear cache)') + '</button><button class="btn bad" onclick="A.reset()">' + tr('مسح كل البيانات', 'Erase all data') + '</button></div></div>';
}
A.goal = (k, v) => { S.goal[k] = Math.max(0, +v || 0); save(); };
A.exam = (k, v) => { S.exam[k] = v; save(); };
A.exp = () => { const b = new Blob([JSON.stringify({app: 'cfo2', at: new Date().toISOString(), S, packs: EXTRA}, null, 1)], {type: 'application/json'}); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'CFO-Center-backup-' + new Date().toISOString().slice(0, 10) + '.json'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); };
A.imp = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = async () => { try { const d = JSON.parse(r.result); if (d.app !== 'cfo2' || !d.S) throw 0; if (!confirm(tr('سيتم استبدال تقدمك الحالي بالنسخة المستوردة. متابعة؟', 'This replaces current progress. Continue?'))) return; S = Object.assign(DEF(), d.S); save(); for (const p of (d.packs || [])) { await idbPut(p); } EXTRA = await idbAll(); build(); route(); toast(tr('تم الاستيراد', 'Imported')); } catch (x) { toast(tr('ملف غير صالح', 'Invalid file')); } }; r.readAsText(f); e.target.value = ''; };
async function addPack(txt) {
  try { const p = JSON.parse(txt); if (!p.id || !p.ver || !(p.tracks || p.glossary || p.library)) throw 0; (p.tracks || []).forEach(t => (t.parts || []).forEach(pt => (pt.secs || []).forEach(sc => (sc.topics || []).forEach(tp => { tp.l = tp.l || ''; tp.f = tp.f || []; tp.c = tp.c || []; tp.q = tp.q || []; })))); try { await idbPut(p); EXTRA = await idbAll(); } catch (e2) { EXTRA = EXTRA.filter(x => x.id !== p.id).concat([p]); toast(tr('تحذير: التخزين الدائم غير متاح، الـ Pack مؤقت حتى إغلاق الصفحة', 'Warning: persistent storage unavailable; pack is temporary')); } build(); route(); toast(tr('تم تثبيت: ', 'Installed: ') + (p.name || p.id)); }
  catch (e) { toast(tr('Pack غير صالح (يلزم id وver ومحتوى)', 'Invalid pack (needs id, ver, content)')); }
}
A.pack = e => { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => addPack(r.result); r.readAsText(f); e.target.value = ''; };
A.packText = () => addPack($('#pkt').value);
A.delPack = async id => { if (!confirm(tr('إزالة هذا الـ Pack؟', 'Remove this pack?'))) return; await idbDel(id); EXTRA = await idbAll(); build(); route(); };
A.refreshApp = async () => { try { (await navigator.serviceWorker.getRegistrations()).forEach(r => r.unregister()); (await caches.keys()).forEach(k => caches.delete(k)); } catch (e) {} location.reload(); };
A.reset = () => { if (confirm(tr('سيتم مسح التقدم والملاحظات نهائيًا. متأكد؟', 'Erase all progress and notes?'))) { localStorage.removeItem(LSK); indexedDB.deleteDatabase('cfo2db'); location.reload(); } };

/* init */
(async function init() {
  build();
  if (!location.hash) location.hash = '#/home';
  route();
  idbAll().then(x => { if (x.length) { EXTRA = x; build(); route(); } });
  if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {});
})();
