CFO.addPack({id:'cfa2', ver:'2026.11.4', date:'2026-11-24', name:'CFA Level I Deep Dive',
news:['2026.11.4 — CFA Level I: 10 مواضيع موسّعة بأمثلة محلولة وأسئلة.'],
tracks:[{id:'cfa', parts:[{id:'cfa1', secs:[

{id:'cfa1-quant', topics:[
T('a1-q1','Time Value of Money & Cash Flow Applications','القيمة الزمنية للنقود والتدفقات',
`## الأساسيات
- **FV = PV (1 + r)^n**. مثال: 10,000 بعائد 5% لـ 3 سنوات = **11,576**.
- **EAR = (1 + r/m)^m − 1**. 8% ربع سنوي → **8.243%**.
- **Annuity PV** = PMT × [1 − (1+r)^−n] ÷ r. مثال: 5,000 سنويًا لـ 10 سنوات عند 6% → **36,800**. **Annuity due** = ordinary × (1 + r).
- **Perpetuity** PV = PMT ÷ r. **Growing perpetuity** = PMT1 ÷ (r − g).
## تقييم المشروعات
- **NPV**: نقبل لو > 0. **IRR**: المعدل الذي يجعل NPV = 0. **HPR** = (P1 − P0 + CF) ÷ P0.
- **متوسط العوائد**: Arithmetic أعلى من **Geometric** دائمًا إذا وُجد تذبذب. مثال: +10% و−5% و+20% → حسابي 8.33%، هندسي **7.84%**.
- **Money-weighted (IRR)** يتأثر بتوقيت التدفقات، و**Time-weighted** لا يتأثر (يصلح لتقييم المدير).
## أسعار الفائدة
- العائد الاسمي ≈ الحقيقي + التضخم (Fisher). **Bank discount yield** و**Money market yield** و**BEY** للأدوات القصيرة.
> فخ: ضبط الآلة المالية على BGN/END وعدد المدفوعات في السنة.
= FV = PV(1+r)^n ; EAR = (1+r/m)^m − 1`,
{o:['تحسب PV وFV والـ annuity','تحسب EAR','تفرّق بين Time-weighted وMoney-weighted'],
f:[['EAR','(1 + r/m)^m − 1',''],['Annuity PV','PMT × [1 − (1+r)^−n] / r','']],
c:[['Geometric مقابل Arithmetic؟','الهندسي ≤ الحسابي، ويعبر عن النمو المركب.'],['TWR؟','لا يتأثر بتوقيت التدفقات: لتقييم المدير.'],['Annuity due؟','دفعات بداية الفترة.'],['Perpetuity؟','PMT ÷ r.'],['Fisher؟','اسمي ≈ حقيقي + تضخم.']],
q:[[`10,000 invested at 5% annually for 3 years grows to approximately:`,[`11,576`,`11,500`,`11,000`,`12,000`],0,`10,000×1.05^3.`],
[`A nominal rate of 8% compounded quarterly has an effective annual rate of about:`,[`8.24%`,`8.00%`,`8.50%`,`9.00%`],0,`(1.02)^4 − 1.`],
[`Annual payments of 5,000 for 10 years at 6% have a present value of approximately:`,[`36,800`,`50,000`,`30,000`,`41,000`],0,`PV annuity.`],
[`Annual returns of +10%, −5% and +20%. The geometric mean return is approximately:`,[`7.84%`,`8.33%`,`8.00%`,`5.00%`],0,`(1.1×0.95×1.2)^(1/3) − 1.`],
[`Which return measure is best for evaluating a portfolio manager who does not control the timing of client cash flows?`,[`Time-weighted rate of return`,`Money-weighted rate of return`,`Arithmetic mean only`,`Holding period yield`],0,`TWR.`]]}),

T('a1-q2','Statistics, Probability & Hypothesis Testing','الإحصاء والاحتمالات واختبار الفرضيات',
`## الوصف
- المتوسط والوسيط والمنوال، **Variance/Std dev**، **Skewness** (الذيل الأيمن موجب)، **Kurtosis** (Excess kurtosis > 0 → Leptokurtic ذيول سميكة).
## الاحتمالات
- **Expected value = Σ p × x**. **Covariance** و**Correlation**. **Bayes**. قواعد العد (Permutation، Combination).
## التوزيعات
- **Normal**: 68% ± 1σ، 95% ± 1.96σ، 99% ± 2.58σ. **Z = (x − μ) ÷ σ**.
- **Safety-first ratio** = (R_p − R_min) ÷ σ.
## فترات الثقة
- مثال: متوسط 8%، انحراف معياري 12%، n = 36 → الخطأ المعياري 2% → فترة 95%: 8 ± 1.96×2 = **[4.08%, 11.92%]**.
## اختبار الفرضيات
- H0 و Ha. **Type I** (رفض H0 الصحيحة)، α. **Type II** (قبول H0 الخاطئة)، β. **Power = 1 − β**.
- **p-value** < α → نرفض H0. **t-test** للعينات الصغيرة والتباين غير المعروف.
> الارتباط لا يعني السببية؛ ولا يقيس علاقة غير خطية.
= CI = x̄ ± z × σ/√n`,
{o:['تحسب فترة الثقة','تفرّق بين Type I وII','تفسر p-value'],
c:[['Type I؟','رفض H0 وهي صحيحة، احتمالها α.'],['Power؟','1 − β.'],['95% CI z؟','1.96.'],['Excess kurtosis > 0؟','ذيول سميكة (leptokurtic).'],['Safety-first؟','(Rp − Rmin)/σ.']],
q:[[`Sample mean 8%, population std dev 12%, n = 36. The 95% confidence interval is approximately:`,[`4.08% to 11.92%`,`−4% to 20%`,`6% to 10%`,`7.8% to 8.2%`],0,`SE = 2%.`],
[`A Type I error is:`,[`Rejecting a true null hypothesis`,`Failing to reject a false null`,`Accepting the alternative when false`,`Using the wrong test`],0,`Type I.`],
[`If the p-value is lower than the significance level, the analyst should:`,[`Reject the null hypothesis`,`Fail to reject the null`,`Increase sample size only`,`Switch to a one-tailed test`],0,`رفض H0.`],
[`A distribution with excess kurtosis greater than zero is:`,[`Leptokurtic with fat tails`,`Platykurtic`,`Perfectly normal`,`Negatively skewed`],0,`ذيول سميكة.`],
[`The z-score of a value 1.5 standard deviations above the mean is:`,[`1.5`,`0.15`,`15`,`−1.5`],0,`(x−μ)/σ.`]]})
]},

{id:'cfa1-econ', topics:[
T('a1-e2','Macroeconomics, Monetary & Fiscal Policy, FX','الاقتصاد الكلي والسياسات والصرف',
`## الناتج والتضخم
- **GDP = C + I + G + (X − M)**. **الدورة**: توسع، ذروة، انكماش، قاع. **التضخم**: CPI، التضخم الأساسي (Core)، Deflator.
## السياسة النقدية
- أدوات: سعر الفائدة، عمليات السوق المفتوحة، نسبة الاحتياطي. **Fisher**: i ≈ r + π. **Taylor rule** للمعدل المثالي.
- **Neutral rate** = الحقيقي + التضخم المستهدف.
## السياسة المالية
- الإنفاق والضرائب. **Multiplier** = 1 ÷ (1 − MPC(1−t)). **Ricardian equivalence**.
## الصرف
- **Spot / Forward**. **Covered interest rate parity**: F = S × (1 + i_d) ÷ (1 + i_f). مثال: S = 50 جنيه/دولار، i_d = 25%، i_f = 5% → F = **59.52**.
- **PPP**: تغير العملة يعادل فرق التضخم. **Carry trade** يقترض بعملة منخفضة الفائدة. **Balance of payments**.
- **Dutch disease، J-curve، Marshall-Lerner**.
## التجارة
- الميزة النسبية، **Tariffs وQuotas**.
> لإفادة المدير المالي: ارتباط الفائدة والتضخم والصرف مباشر على تمويل المخزون المستورد.
= F = S × (1 + i_d)/(1 + i_f)`,
{o:['تطبق Covered IRP','تفهم أدوات السياسة النقدية والمالية','تحسب مضاعف الإنفاق'],
f:[['Covered IRP','F = S(1+i_d)/(1+i_f)',''],['Fisher','i ≈ r + π','']],
c:[['GDP؟','C + I + G + (X−M).'],['Taylor rule؟','تقدير سعر الفائدة المناسب من فجوة التضخم والناتج.'],['Carry trade؟','اقتراض بعملة منخفضة الفائدة واستثمار بعالية.'],['J-curve؟','العجز التجاري يسوء قبل أن يتحسن بعد انخفاض العملة.'],['PPP؟','العملة تتغير بحسب فرق التضخم.']],
q:[[`Spot 50 EGP/USD, domestic interest rate 25%, foreign 5%. The forward rate is approximately:`,[`59.52`,`50.00`,`62.50`,`40.00`],0,`50×1.25/1.05.`],
[`According to the Fisher effect, nominal interest rate ≈:`,[`Real rate + expected inflation`,`Real rate − inflation`,`Inflation only`,`GDP growth`],0,`Fisher.`],
[`Expansionary monetary policy typically involves:`,[`Lowering policy rates`,`Raising reserve requirements`,`Increasing taxes`,`Selling government securities`],0,`خفض الفائدة.`],
[`Which is a component of GDP using the expenditure approach?`,[`Net exports`,`Wages`,`Rent`,`Interest`],0,`X − M.`],
[`Under relative purchasing power parity, a currency of a country with higher inflation tends to:`,[`Depreciate`,`Appreciate`,`Stay fixed`,`Double`],0,`تضعف.`]]})
]},

{id:'cfa1-fsa', topics:[
T('a1-f1','Statements, Inventories, Long-lived Assets, Taxes','القوائم والمخزون والأصول طويلة الأجل والضرائب',
`## المخزون: LIFO reserve
- شركة تستخدم LIFO: **FIFO COGS = LIFO COGS − (الزيادة في LIFO reserve)**. مثال: COGS (LIFO) 800، الاحتياطي من 100 إلى 130 → **FIFO COGS = 770**. المخزون FIFO = LIFO + الاحتياطي.
- مع التضخم: LIFO يعطي ربحًا وضريبة أقل (وصافي تدفق أعلى).
## الأصول طويلة الأجل
- رسملة مقابل مصروف: الرسملة ترفع الأرباح والـ CFO الحالي وتخفض CFI، والمصروف عكس ذلك.
- **الإهلاك**: SL مقابل Accelerated. **الاضمحلال**: IFRS يسمح بالعكس، US GAAP لا.
## الضرائب
- **DTL/DTA**. **Effective tax rate** = Income tax expense ÷ PBT. **Valuation allowance**.
- مثال: Taxable income 100، معدل 30% → current tax 30. فرق مؤقت 20 خاضع للضريبة → DTL = 6.
## جودة الأرباح
- إشارات: نمو الذمم أسرع من المبيعات، انخفاض الـ CFO مقارنة بالدخل، تغيير السياسات، رسملة مفرطة.
> تنبيه: عند مقارنة شركات IFRS وUS GAAP حوّلها لنفس الأساس.
= FIFO COGS = LIFO COGS − ΔLIFO reserve`,
{o:['تحول LIFO إلى FIFO','تفهم أثر الرسملة','تحسب الضريبة المؤجلة'],
c:[['FIFO inventory؟','LIFO inventory + LIFO reserve.'],['الرسملة تؤثر على CFO؟','ترفعه وتنقل التكلفة إلى CFI.'],['ETR؟','مصروف الضريبة ÷ PBT.'],['Valuation allowance؟','يخفض DTA.'],['علامة جودة أرباح منخفضة؟','نمو AR أكبر من المبيعات.']],
q:[[`LIFO COGS is 800. The LIFO reserve rose from 100 to 130. FIFO COGS would be:`,[`770`,`830`,`800`,`700`],0,`800 − 30.`],
[`Capitalizing rather than expensing a cost leads to higher:`,[`Current-period net income and operating cash flow`,`Investing cash flow`,`Operating expenses`,`Tax expense paid`],0,`CFO أعلى.`],
[`Compared with FIFO during rising prices, LIFO results in:`,[`Lower taxable income`,`Higher net income`,`Higher inventory on the balance sheet`,`Lower COGS`],0,`COGS أعلى.`],
[`Effective tax rate is:`,[`Income tax expense divided by pre-tax income`,`Taxes paid divided by revenue`,`Statutory rate`,`Deferred tax divided by assets`],0,`ETR.`],
[`Which is a red flag for earnings quality?`,[`Receivables growing faster than sales`,`Stable margins`,`Rising operating cash flow`,`Declining DSO`],0,`مؤشر على إيراد مبكر.`]]})
]},

{id:'cfa1-cf', topics:[
T('a1-c1','Capital Budgeting, Cost of Capital, Governance','الموازنة الرأسمالية وتكلفة رأس المال والحوكمة',
`## NPV وIRR
- نفس مبادئ CMA: استثمار 100,000 وتدفقات 30,000/40,000/50,000/30,000 عند 10% → **NPV = 18,387**، **IRR ≈ 18.0%**، **PI = 1.18**.
- عند التعارض (مشروعات متنافية) نختار NPV.
## تكلفة رأس المال
- **WACC = w_d × Kd × (1 − t) + w_e × Ke**. مثال: أسهم 60% بتكلفة 12% ودين 40% بتكلفة 8% وضريبة 25% → **9.6%**.
- **Ke** بـ CAPM: Rf + β(Rm − Rf)، أو Bond yield + risk premium، أو Dividend discount.
- **تكلفة الإصدار الجديد** تضاف لتكلفة حقوق الملكية.
## Modigliani–Miller
- **بدون ضرائب**: قيمة المنشأة لا تتأثر بهيكل رأس المال. **مع ضرائب**: V_L = V_U + t × D. مثال: V_U = 1,000، D = 400، t = 25% → V_L = **1,100**.
- **Trade-off theory**: وفر الضريبة مقابل تكلفة الضائقة المالية.
## الحوكمة
- مجلس الإدارة المستقل، الجان، حقوق المساهمين، **Agency problem**، المكافآت المرتبطة بالأداء، الإفصاح.
> فخ شائع: استخدام تكلفة الدين قبل الضريبة في WACC.
= WACC = wd·Kd(1−t) + we·Ke`,
{o:['تحسب WACC','تطبق MM بالضرائب','تحدد مشكلة الوكالة'],
f:[['WACC','wd·Kd(1−t) + we·Ke',''],['MM with taxes','V_L = V_U + tD','']],
c:[['MM بدون ضرائب؟','الهيكل لا يؤثر على القيمة.'],['MM مع ضرائب؟','V_L = V_U + tD.'],['Agency problem؟','تعارض مصالح الإدارة والمساهمين.'],['Trade-off theory؟','وفر الضريبة مقابل الضائقة المالية.'],['Flotation؟','تكلفة إصدار تزيد تكلفة التمويل الجديد.']],
q:[[`Equity weight 60% at 12%, debt weight 40% at 8% pre-tax, tax rate 25%. WACC is:`,[`9.6%`,`10.4%`,`10.0%`,`8.4%`],0,`7.2 + 2.4.`],
[`Under Modigliani–Miller with corporate taxes, V_U = 1,000, debt = 400, t = 25%. The levered firm value is:`,[`1,100`,`1,000`,`1,400`,`900`],0,`1,000 + 0.25×400.`],
[`Under MM without taxes, increasing leverage:`,[`Does not change firm value`,`Increases firm value`,`Decreases firm value`,`Always reduces risk`],0,`MM I.`],
[`The agency problem arises from:`,[`Conflicts between managers and shareholders`,`Currency risk`,`Inflation`,`Taxes`],0,`تعارض المصالح.`],
[`For mutually exclusive projects with conflicting NPV and IRR rankings, choose the project with:`,[`The higher NPV`,`The higher IRR`,`The lower cost`,`The shorter life`],0,`NPV.`]]})
]},

{id:'cfa1-eq', topics:[
T('a1-eq2','Equity Analysis & Valuation Basics','تحليل الأسهم وأساسيات التقييم',
`## نماذج الخصم
- **Gordon**: V0 = D1 ÷ (r − g). **Justified P/E (forward)** = payout ÷ (r − g). مثال: payout 40%، r = 10%، g = 5% → **8.0×** (P0/E1).
- **Multi-stage DDM**: مرحلة نمو عالٍ ثم مستقر.
## المضاعفات
- **P/E، P/B، P/S، EV/EBITDA، P/CF**. المقارنة داخل القطاع. **EV = Market cap + Debt − Cash + Minority + Preferred**.
## أنواع الأسهم
- **Preferred** (توزيعات ثابتة)، **ADR/GDR**.
## العوائد
- **Total return** = Price return + Dividend yield. **Required return** من CAPM. Equity risk premium.
- **PEG** = (P/E) ÷ growth.
## كفاءة السوق
- **Weak / Semi-strong / Strong**. **الشذوذات** (Anomalies) و Behavioral biases.
> الـ CFO يربط التقييم بتكلفة رأس المال: خفض Ke أو زيادة g ترفع القيمة.
= Justified P/E = (1 − b)/(r − g)`,
{o:['تطبق Gordon وJustified P/E','تفرّق بين المضاعفات','تحسب EV'],
f:[['Gordon','D1/(r−g)',''],['EV','Mkt cap + Debt − Cash + NCI + Pref','']],
c:[['Justified forward P/E؟','payout ÷ (r−g).'],['EV؟','القيمة السوقية + الدين − النقد + حقوق الأقلية + الممتاز.'],['PEG؟','P/E ÷ النمو.'],['Semi-strong؟','السعر يعكس كل المعلومات العامة.'],['Total return؟','عائد السعر + توزيعات.']],
q:[[`Payout ratio 40%, required return 10%, growth 5%. The justified forward P/E (P0/E1) is:`,[`8.0`,`10.0`,`4.0`,`20.0`],0,`0.4/0.05.`],
[`Market cap 800, debt 300, cash 100, no other claims. Enterprise value is:`,[`1,000`,`1,200`,`800`,`600`],0,`800+300−100.`],
[`D1 = 2.10, r = 11%, g = 5%. The Gordon growth value is:`,[`35.00`,`19.09`,`42.00`,`21.00`],0,`2.10/0.06.`],
[`If markets are semi-strong form efficient, which analysis cannot consistently earn abnormal returns?`,[`Fundamental analysis using public information`,`Insider trading`,`Technical analysis only`,`None`],0,`المعلومات العامة منعكسة.`],
[`The PEG ratio equals:`,[`P/E divided by earnings growth rate`,`P/B divided by ROE`,`Price divided by cash flow`,`EPS divided by growth`],0,`PEG.`]]})
]},

{id:'cfa1-fi', topics:[
T('a1-fi1','Bond Features, Pricing & Yields','السندات والتسعير والعوائد',
`## التسعير
- **Price = Σ C/(1+y)^t + FV/(1+y)^n**. مثال: سند 3 سنوات، كوبون 6%، قيمة 1,000: عند عائد 5% = **1,027.23**، عند 6% = **1,000**، عند 4% = **1,055.50**. علاقة عكسية بين السعر والعائد.
## المدة والتحدب
- **Macaulay duration** للسند أعلاه ≈ **2.84** سنة. **Modified duration** = Macaulay ÷ (1 + y) = **2.70**.
- تغير السعر ≈ **−ModDur × Δy**: ارتفاع العائد 1% → هبوط السعر ≈ **2.70%**. **Convexity** تحسن التقدير (دائمًا موجب لسند بسيط).
## العوائد
- **YTM**، **Current yield** = كوبون ÷ سعر، **YTC**، **Spot rates** و**Forward rates**.
- **Yield curve**: عادية، مقلوبة، مسطحة. **Spread** على الخزانة.
## المخاطر
- الفائدة، إعادة الاستثمار، التقادم (Call)، الائتمان، السيولة، التضخم.
- سند بخصم يميل لزيادة المخاطر السعرية لانخفاض الكوبون، والأطول أجلًا أكثر حساسية.
> السند ذو الكوبون الأقل والأجل الأطول لديه أعلى مدة.
= ΔP/P ≈ −ModDur × Δy + ½ × Convexity × (Δy)²`,
{o:['تسعّر سند وتحسب مدته','تقدّر تغير السعر بالمدة','تفرق بين الأسعار والعوائد الآجلة'],
f:[['Modified duration','Macaulay / (1 + y)',''],['ΔP/P','−ModDur·Δy + ½·C·Δy²','']],
c:[['علاقة السعر بالعائد؟','عكسية.'],['Modified duration؟','Macaulay ÷ (1+y).'],['Current yield؟','كوبون سنوي ÷ السعر.'],['Convexity؟','انحناء علاقة السعر بالعائد، تحسن تقدير المدة.'],['Yield curve مقلوبة؟','العوائد قصيرة الأجل أعلى من الطويلة.']],
q:[[`A 3-year bond with a 6% annual coupon and face value of 1,000 has a yield of 5%. Its price is approximately:`,[`1,027`,`1,000`,`973`,`1,055`],0,`أعلى من الاسمي.`],
[`A bond's modified duration is 2.7. If yield rises by 1%, the price falls by approximately:`,[`2.7%`,`1.0%`,`27%`,`0.27%`],0,`−ModDur×Δy.`],
[`A bond priced at par has a yield equal to its:`,[`Coupon rate`,`Current yield minus coupon`,`Spot rate`,`Inflation rate`],0,`السعر = القيمة.`],
[`Which bond generally has the highest interest rate risk?`,[`Long maturity, low coupon`,`Short maturity, high coupon`,`Short maturity, low coupon`,`Floating rate`],0,`مدة أكبر.`],
[`An inverted yield curve means:`,[`Short-term yields exceed long-term yields`,`Long-term yields exceed short-term yields`,`All yields are equal`,`Yields are negative`],0,`مقلوبة.`]]})
]},

{id:'cfa1-der', topics:[
T('a1-d1','Forwards, Futures, Swaps & Options','العقود الآجلة والمستقبلية والمبادلات والخيارات',
`## التسعير الآجل
- **Forward price F = S × (1 + r)^T** (بلا تكاليف حيازة). مثال: S = 100، r = 5%، T = 0.5 → **102.47**.
- **Futures** مقابل Forwards: Futures معيارية، تداول بورصة، **Mark-to-market** يومي. **Swap** سلسلة عقود آجلة.
## الخيارات
- **Call**: حق شراء، **Put**: حق بيع. **Payoff**: Call = max(S − K, 0)، Put = max(K − S, 0).
- **Put-call parity**: C − P = S − K ÷ (1 + r)^T. مثال: S = 100، K = 100، r = 5%، T = 1، C = 10 → **P = 5.24**.
- **Moneyness**: ITM / ATM / OTM. **القيمة الزمنية = القسط − القيمة الجوهرية**.
- عوامل السعر: S، K، T، σ، r، التوزيعات. تقلب أعلى = قيمة أعلى للخيار.
## استراتيجيات
- **Covered call**، **Protective put**، **Straddle**، **Spreads**.
## استخدام الشركات
- تحوط العملة والسلع بعقد آجل أو خيار، و**Interest rate swap** لتثبيت الفائدة.
> لا تنس: مشتري الخيار أقصى خسارته القسط، أما البائع المكشوف للـ call فخسارته غير محدودة.
= C − P = S − K/(1+r)^T`,
{o:['تحسب السعر الآجل','تطبق Put-call parity','تحدد payoff الخيار'],
f:[['Forward','S(1+r)^T',''],['Put-call parity','C − P = S − K/(1+r)^T','']],
c:[['Call payoff؟','max(S−K, 0).'],['Put-call parity؟','C − P = S − PV(K).'],['مخاطر بائع Call مكشوف؟','غير محدودة.'],['Mark-to-market؟','تسوية يومية لعقود Futures.'],['تقلب أعلى؟','يرفع قيمة Call وPut.']],
q:[[`Spot price 100, risk-free rate 5%, T = 0.5, no carrying costs. The forward price is approximately:`,[`102.47`,`105.00`,`100.00`,`102.50 exactly`],0,`100×1.05^0.5.`],
[`S = 100, K = 100, r = 5%, T = 1, call = 10. By put-call parity, the put is approximately:`,[`5.24`,`10.00`,`4.76`,`0`],0,`10 − (100 − 95.24).`],
[`Maximum loss for the buyer of a call option is:`,[`The premium paid`,`Unlimited`,`The strike price`,`The underlying price`],0,`القسط.`],
[`A call option has a strike of 90 while the underlying trades at 100. The intrinsic value is:`,[`10`,`0`,`90`,`100`],0,`S − K.`],
[`Which feature distinguishes futures from forwards?`,[`Daily mark-to-market settlement`,`Customized terms`,`No exchange trading`,`No margin`],0,`تسوية يومية.`]]})
]},

{id:'cfa1-pc', topics:[
T('a1-p1','Risk, Return, CAPM & Behavioral Finance','المخاطرة والعائد وCAPM والتمويل السلوكي',
`## العائد والمخاطرة للمحفظة
- عائد المحفظة = Σ w × r. مثال: 60% بعائد 10% و40% بعائد 6% → **8.4%**.
- **تنويع**: المخاطرة تنخفض مع الارتباط المنخفض. **Efficient frontier**، **CAL**، **Capital market line (CML)**.
## مقاييس الأداء
- **Sharpe** = (Rp − Rf) ÷ σp. مثال: (12% − 3%) ÷ 15% = **0.60**.
- **Treynor** = (Rp − Rf) ÷ β. (12 − 3) ÷ 1.2 = **7.5**. **Jensen's alpha** = Rp − [Rf + β(Rm − Rf)].
- Sharpe للمحفظة الكلية، Treynor للمحفظة ضمن محفظة أكبر.
## CAPM وSML
- **E(R) = Rf + β(Rm − Rf)**. فوق SML = undervalued (ألفا موجبة).
## السلوك
- **Overconfidence، Loss aversion، Anchoring، Herding، Mental accounting، Confirmation bias، Disposition effect**.
- **Behavioral vs Traditional**: المستثمر العقلاني مقابل النفسي.
> الأساس: لا تكافئ المخاطرة غير النظامية، وTreynor يقيس العائد لكل وحدة مخاطرة نظامية.
= Sharpe = (Rp − Rf)/σp ; Treynor = (Rp − Rf)/β`,
{o:['تحسب Sharpe وTreynor وJensen','تفسر SML وCML','تحدد التحيزات السلوكية'],
f:[['Sharpe','(Rp − Rf)/σp',''],['Treynor','(Rp − Rf)/β',''],['Jensen alpha','Rp − [Rf + β(Rm−Rf)]','']],
c:[['Sharpe يقيس؟','العائد الزائد لكل وحدة مخاطرة كلية.'],['Treynor يقيس؟','العائد الزائد لكل وحدة بيتا.'],['فوق SML؟','Undervalued وألفا موجبة.'],['Disposition effect؟','بيع الرابحين مبكرًا والاحتفاظ بالخاسرين.'],['Loss aversion؟','الألم من الخسارة أكبر من المتعة من نفس الربح.']],
q:[[`Portfolio return 12%, risk-free 3%, standard deviation 15%. The Sharpe ratio is:`,[`0.60`,`0.80`,`0.20`,`0.75`],0,`9/15.`],
[`Using a beta of 1.2 and the same returns, the Treynor ratio is:`,[`7.5`,`10.0`,`0.6`,`9.0`],0,`9/1.2.`],
[`A security plotting above the security market line is:`,[`Undervalued`,`Overvalued`,`Fairly valued`,`Riskless`],0,`ألفا موجبة.`],
[`Weights of 60% and 40% with returns of 10% and 6%. The expected portfolio return is:`,[`8.4%`,`8.0%`,`16.0%`,`7.5%`],0,`6 + 2.4.`],
[`Selling winners too early and holding losers too long reflects:`,[`The disposition effect`,`Anchoring`,`Herding`,`Overconfidence`],0,`Disposition effect.`]]})
]}

]}]}]
});
