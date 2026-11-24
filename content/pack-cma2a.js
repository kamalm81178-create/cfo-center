CFO.addPack({id:'cma2a', ver:'2026.11.3', date:'2026-11-24', name:'CMA Part 2 Deep Dive — 2A, 2B',
news:['2026.11.3 — CMA Part 2 Deep Dive (2A–2B): تحليل القوائم والتمويل بأمثلة محلولة وأسئلة.'],
tracks:[{id:'cma', parts:[{id:'cma2', secs:[

{id:'cma2A', topics:[
T('c2a1','Ratios & Comparative Analysis','النسب المالية والتحليل المقارن',
`## أنواع التحليل
- **Common-size**: كل بند كنسبة من المبيعات (قائمة الدخل) أو من إجمالي الأصول (الميزانية). يسهّل المقارنة بين شركات مختلفة الحجم.
- **Horizontal (Trend)**: التغير عبر الزمن مقارنة بسنة أساس. **Vertical**: داخل السنة الواحدة.
## نسب السيولة
- **Current ratio** = CA ÷ CL. **Quick ratio** = (Cash + Securities + AR) ÷ CL، أو (CA − Inventory) ÷ CL.
- مثال: CA 500، مخزون 150، CL 250 → Current = **2.0**، Quick = **1.4**.
## نسب النشاط
- **AR turnover** = المبيعات الآجلة ÷ متوسط AR. **DSO** = 365 ÷ AR turnover. مثال: AR 140 ومبيعات 1,200 → DSO = 140 ÷ (1,200/365) = **42.6 يوم**.
- **Inventory turnover** = COGS ÷ متوسط المخزون = 720 ÷ 150 = **4.8**. **DIO** = 365 ÷ 4.8 = **76 يوم**.
## نسب المديونية والتغطية
- **Debt-to-equity**، **Debt ratio** = إجمالي الديون ÷ إجمالي الأصول.
- **Times interest earned** = EBIT ÷ Interest. مثال: EBIT 300 وفوائد 60 → **5×**.
## نسب السوق
- **P/E** = السعر ÷ EPS. **Dividend yield** = DPS ÷ السعر. **Payout** = DPS ÷ EPS. **Book value/share** = حقوق الملكية العادية ÷ الأسهم.
> فخ شائع: استخدم **المتوسط** في المقام لنسب الدوران، ولا تخلط مبيعات نقدية مع آجلة في AR turnover.
= Current = CA / CL
= Quick = (CA − Inventory) / CL
= DSO = 365 / (Credit sales / Avg AR)
= TIE = EBIT / Interest`,
{o:['تحسب نسب السيولة والنشاط والمديونية والسوق','تفسر اتجاه النسبة وسببها','تفرّق بين Common-size وTrend analysis'],
f:[['Quick ratio','(CA − Inventory) / CL',''],['DSO','365 / AR turnover',''],['Times interest earned','EBIT / Interest','']],
c:[['Quick ratio يستثني إيه؟','المخزون والمصروفات المدفوعة مقدمًا.'],['DSO = ؟','365 ÷ AR turnover.'],['Common-size؟','كل بند كنسبة من أساس واحد (المبيعات أو الأصول).'],['TIE = ؟','EBIT ÷ مصروف الفوائد.'],['Payout ratio؟','DPS ÷ EPS.']],
q:[[`Current assets 500, inventory 150, current liabilities 250. The quick ratio is:`,[`1.4`,`2.0`,`0.6`,`1.0`],0,`(500−150)/250 = 1.4.`],
[`Credit sales 1,200 and average accounts receivable 140. Days sales outstanding (365-day year) is approximately:`,[`42.6 days`,`8.6 days`,`30 days`,`58 days`],0,`140 ÷ (1,200/365) = 42.6.`],
[`COGS 720 and average inventory 150. Inventory turnover is:`,[`4.8`,`8.0`,`5.2`,`0.2`],0,`720/150 = 4.8.`],
[`EBIT 300 and interest expense 60. Times interest earned is:`,[`5.0`,`0.2`,`4.0`,`6.0`],0,`300/60 = 5.`],
[`A common-size income statement expresses each item as a percentage of:`,[`Net sales`,`Total assets`,`Net income`,`Prior year amount`],0,`Common-size للدخل أساسه المبيعات.`]]}),

T('c2a2','Profitability, DuPont & Special Issues','الربحية وDuPont والقضايا الخاصة',
`## DuPont
- **ROE = Net margin × Asset turnover × Equity multiplier**.
- مثال: NI 90، مبيعات 1,200، أصول 600، حقوق ملكية 300 → هامش **7.5%** × دوران **2.0** × رافعة **2.0** = ROE **30%**.
- التحليل: لو الهامش ثابت والـ ROE يرتفع بسبب الرافعة فقط، فالمخاطرة تزيد.
## الربحية
- **Gross margin %** = (Sales − COGS) ÷ Sales. **ROA** = NI ÷ Avg assets. **ROIC** = NOPAT ÷ رأس المال المستثمر.
## EPS
- **Basic EPS** = (NI − Preferred dividends) ÷ المتوسط المرجح للأسهم. مثال: NI 500، توزيعات مفضلة 50، أسهم 100 → **4.50**.
- **Diluted EPS** يضيف أثر الأوراق القابلة للتحويل (If-converted: يُضاف الفوائد بعد الضريبة للبسط والأسهم الإضافية للمقام) وخيارات الأسهم (Treasury stock method). لا يُحتسب إلا لو كان **مخففًا** فعلًا.
## قضايا خاصة
- **التضخم**: ترفع الأرباح الاسمية، وتشوه المقارنات التاريخية.
- **جودة الأرباح**: أرباح مدعومة بتدفق نقدي تشغيلي أعلى جودة. **Off-balance-sheet**، وتغيير السياسات المحاسبية، والإيرادات غير المتكررة تضعف الجودة.
- حدود النسب: اختلاف السياسات المحاسبية، والصناعة، والموسمية، وتاريخية البيانات.
> الامتحان يسأل: أي مكوّن في DuPont تغيّر؟ ابحث هل السبب هامش أم دوران أم رافعة.
= ROE = (NI/Sales) × (Sales/Assets) × (Assets/Equity)
= Basic EPS = (NI − Pref div) / Wtd avg shares`,
{o:['تفكك ROE بـ DuPont','تحسب Basic EPS وتفهم Diluted','تقيّم جودة الأرباح وحدود النسب'],
f:[['DuPont','Margin × Turnover × Equity multiplier','']],
c:[['مكونات DuPont؟','هامش الربح × دوران الأصول × مضاعف حقوق الملكية.'],['Basic EPS؟','(NI − توزيعات المفضلة) ÷ متوسط الأسهم.'],['Treasury stock method؟','لحساب أثر خيارات الأسهم في Diluted EPS.'],['ROIC؟','NOPAT ÷ رأس المال المستثمر.'],['جودة الأرباح؟','ارتباط الأرباح بالتدفق النقدي وقلة البنود غير المتكررة.']],
q:[[`Net income 90, sales 1,200, total assets 600, equity 300. Return on equity is:`,[`30%`,`15%`,`7.5%`,`60%`],0,`90/300 = 30%، أو 7.5% × 2 × 2.`],
[`In the same data, the equity multiplier is:`,[`2.0`,`0.5`,`4.0`,`1.0`],0,`600/300 = 2.`],
[`Net income 500, preferred dividends 50, weighted average common shares 100. Basic EPS is:`,[`4.50`,`5.00`,`5.50`,`4.00`],0,`(500−50)/100 = 4.50.`],
[`Which method is used to include stock options in diluted EPS?`,[`Treasury stock method`,`If-converted method`,`Equity method`,`Purchase method`],0,`خيارات الأسهم تعالج بـ Treasury stock method.`],
[`Return on equity rises while net margin and asset turnover are unchanged. The most likely cause is:`,[`Greater financial leverage`,`Higher profit margin`,`Faster asset turnover`,`Lower tax rate`],0,`المكوّن الثالث هو مضاعف حقوق الملكية (الرافعة).`]]})
]},

{id:'cma2B', topics:[
T('c2b1','Risk & Return','المخاطرة والعائد وCAPM',
`## قياس المخاطرة
- **Standard deviation** للمخاطرة الكلية. **Coefficient of variation = σ ÷ العائد المتوقع** لمقارنة استثمارات مختلفة الحجم: σ 20% ÷ عائد 10% = **2.0**.
- **Beta** يقيس المخاطرة النظامية (Systematic) مقارنة بالسوق. Beta = 1.2 يعني الأصل أكثر تقلبًا من السوق.
## CAPM
- **Required return = Rf + β × (Rm − Rf)**. مثال: Rf 4%، β 1.2، Rm 10% → 4% + 1.2×6% = **11.2%**.
## المحفظة
- التنويع يقلل المخاطرة **غير النظامية** (Unsystematic) فقط، ولا يلغي النظامية.
- مثال: وزن 60% في A (σ 20%) و40% في B (σ 30%)، معامل ارتباط 0.5 → σ المحفظة ≈ **20.8%** (أقل من المتوسط المرجح البسيط 24%).
- ارتباط +1 لا فائدة تنويع. ارتباط −1 أقصى فائدة.
## أنواع المخاطر
- **Market، Interest rate، Credit، Liquidity، Inflation، Currency، Business vs Financial risk**.
> المستثمر الراشد المنوَّع يطلب تعويضًا عن **المخاطرة النظامية** فقط (لذلك beta هو المقياس).
= CAPM: r = Rf + β(Rm − Rf)
= CV = σ / Expected return`,
{o:['تحسب CAPM وCV','تفسر أثر التنويع والارتباط','تفرّق بين المخاطرة النظامية وغير النظامية'],
f:[['CAPM','Rf + β(Rm − Rf)',''],['Coefficient of variation','σ / E(r)','']],
c:[['CAPM؟','Rf + β × علاوة مخاطر السوق.'],['التنويع يقلل أي مخاطرة؟','غير النظامية فقط.'],['Beta يقيس؟','المخاطرة النظامية بالنسبة للسوق.'],['CV؟','المخاطرة لكل وحدة عائد: σ ÷ العائد.'],['أفضل ارتباط للتنويع؟','−1.']],
q:[[`Risk-free rate 4%, market return 10%, beta 1.2. The required return under CAPM is:`,[`11.2%`,`12.0%`,`10.0%`,`7.2%`],0,`4% + 1.2×(10%−4%) = 11.2%.`],
[`Investment X has expected return 10% and standard deviation 20%. Its coefficient of variation is:`,[`2.0`,`0.5`,`10`,`0.2`],0,`20/10 = 2.`],
[`Diversification primarily reduces:`,[`Unsystematic risk`,`Systematic risk`,`Inflation risk`,`Interest rate risk of all assets`],0,`المخاطرة الخاصة بالشركة تقل بالتنويع.`],
[`A two-asset portfolio has the greatest risk reduction when the correlation coefficient is:`,[`−1.0`,`0`,`+0.5`,`+1.0`],0,`ارتباط سلبي كامل يعطي أكبر خفض.`],
[`A stock with a beta of 1.5 is expected to:`,[`Be more volatile than the market`,`Be less volatile than the market`,`Move opposite to the market`,`Have no market risk`],0,`Beta أكبر من 1 تعني أعلى تقلبًا من السوق.`]]}),

T('c2b2','Long-term Financing, Cost of Capital & Valuation','التمويل طويل الأجل وتكلفة رأس المال والتقييم',
`## تكلفة المكونات
- **الدين بعد الضريبة** = Kd × (1 − t). مثال: 8% × 0.75 = **6%**.
- **الأسهم الممتازة** = DPS ÷ سعر الصافي. **الأسهم العادية**: CAPM، أو **Dividend growth**: Ke = D1 ÷ P0 + g، أو Bond yield + risk premium.
- **Retained earnings** تكلفتها = Ke (لا تكلفة flotation)، لكن الإصدار الجديد عليه تكلفة إصدار.
## WACC
- WACC = Σ (وزن × تكلفة). مثال: أسهم 600 بتكلفة 12%، ودين 400 بتكلفة 8% بعد ضريبة 25% → 0.6×12% + 0.4×6% = **9.6%**. الأوزان من **القيمة السوقية** وليس الدفترية.
## تقييم
- **Gordon**: P0 = D1 ÷ (Ke − g). مثال: D0 2.00، g 5%، Ke 11% → D1 2.10 → P0 = 2.10 ÷ 0.06 = **35**.
- **سعر السند** = PV للكوبونات + PV للقيمة الاسمية. سند 5 سنوات، كوبون 8%، عائد 10%، اسمي 1,000 → ≈ **924**. (خصم لأن الكوبون أقل من العائد.)
## هيكل رأس المال
- **Trade-off theory**: دين أكثر يعطي وفر ضريبي لكنه يرفع مخاطر الإفلاس، فيوجد هيكل أمثل. **Pecking order**: تمويل داخلي أولًا ثم دين ثم أسهم.
- **الرافعة**: Operating leverage (DOL) = %ΔEBIT ÷ %ΔSales. Financial leverage (DFL) = EBIT ÷ (EBIT − I). Combined = DOL × DFL.
> الدين يرخص بسبب الوفر الضريبي، لكن الزيادة المفرطة تزيد Ke وتكلفة الإفلاس.
= After-tax Kd = Kd (1 − t)
= Ke = D1/P0 + g
= WACC = Σ w_i × k_i`,
{o:['تحسب WACC بالأوزان السوقية','تطبق Gordon وتسعّر السند','تفسر نظريات هيكل رأس المال والرافعة'],
f:[['WACC','Σ w × cost (after-tax debt)',''],['Gordon','D1 / (Ke − g)','']],
c:[['تكلفة الدين بعد الضريبة؟','Kd × (1 − t).'],['أوزان WACC من؟','القيمة السوقية.'],['Gordon؟','P0 = D1 ÷ (Ke − g).'],['Pecking order؟','تمويل داخلي ثم دين ثم أسهم.'],['DFL؟','EBIT ÷ (EBIT − فوائد).']],
q:[[`Cost of debt is 8% and the tax rate is 25%. After-tax cost of debt is:`,[`6.0%`,`8.0%`,`2.0%`,`10.0%`],0,`8%×0.75 = 6%.`],
[`Equity of 600 at 12% cost and debt of 400 at 8% pre-tax with a 25% tax rate. WACC is:`,[`9.6%`,`10.4%`,`10.0%`,`8.4%`],0,`0.6×12 + 0.4×6 = 9.6%.`],
[`Last dividend D0 = 2.00, growth 5%, required return 11%. The stock value is:`,[`35.00`,`33.33`,`18.18`,`40.00`],0,`D1 = 2.10 ÷ 0.06 = 35.`],
[`A 5-year, 8% coupon bond (face 1,000) is priced when the market yield is 10%. The price is:`,[`Below 1,000`,`Above 1,000`,`Equal to 1,000`,`Cannot be determined`],0,`الكوبون أقل من العائد فيباع بخصم (≈ 924).`],
[`EBIT 300 and interest 100. The degree of financial leverage is:`,[`1.5`,`3.0`,`0.67`,`2.0`],0,`300 ÷ (300−100) = 1.5.`]]}),

T('c2b3','Raising Capital, Leases & Dividends','جمع رأس المال والإيجار والتوزيعات',
`## مصادر التمويل
- **دين**: قروض بنكية، سندات (Debentures غير مضمونة، Mortgage bonds مضمونة، Convertible، Callable). **Covenants** شروط تحمي المقرض.
- **حقوق ملكية**: IPO، **Rights offering** (حق الأولوية)، أسهم ممتازة، **Retained earnings**.
- **Investment bank**: Underwriting (يضمن الإصدار) أو Best efforts. تكلفة الإصدار **Flotation costs** ترفع تكلفة الإصدار الجديد.
## قرار الإيجار مقابل الشراء
- قارن PV لتكلفة الإيجار بعد الضريبة مقابل PV لتكلفة الشراء بعد الضريبة (ناقص الإهلاك الضريبي والقيمة المتبقية)، باستخدام **معدل الخصم بعد الضريبة للدين**.
- **Finance lease** يقترب من التمويل بالدين. **Operating lease** يمنح مرونة.
## سياسة التوزيعات
- **Residual dividend policy**: توزع ما يتبقى بعد تمويل المشروعات المربحة. **Stable dividend**، **Target payout**.
- **Stock dividend / Split**: لا يغيّر الثروة الإجمالية، لكنه يغيّر عدد الأسهم والسعر. **Buyback** يزيد EPS ويرسل إشارة.
- **Signaling**: رفع التوزيعات يعطي إشارة ثقة.
- مثال Residual: ربح 500، استثمارات مربحة 400 وهيكل 50% دين و50% حقوق ملكية، فالحاجة لحقوق الملكية 200 → توزيعات = 500 − 200 = **300**.
> المرونة ومخاطر التجديد: لا تمول أصولًا طويلة بدين قصير (Matching principle).
= Residual dividend = NI − (Equity % × Capital budget)`,
{o:['تفرّق بين مصادر التمويل','تقارن الإيجار بالشراء','تحسب Residual dividend'],
c:[['Rights offering؟','عرض أسهم جديدة على المساهمين الحاليين أولًا.'],['Underwriting؟','البنك يضمن شراء الإصدار.'],['Residual dividend؟','التوزيع من الربح المتبقي بعد تمويل المشروعات.'],['Matching principle؟','تمويل الأصل بتمويل عمره مماثل.'],['Buyback يؤثر على؟','يخفض عدد الأسهم فيرفع EPS.']],
q:[[`Net income 500; profitable investments of 400 funded 50% debt and 50% equity. Under a residual dividend policy dividends are:`,[`300`,`100`,`500`,`200`],0,`حقوق الملكية المطلوبة 200، فالتوزيع 500−200 = 300.`],
[`A rights offering gives the existing shareholders:`,[`The first opportunity to buy new shares`,`A dividend`,`A conversion right`,`Voting control only`],0,`حق أولوية في شراء الإصدار الجديد.`],
[`A stock split generally:`,[`Increases shares outstanding without changing total equity`,`Increases total equity`,`Reduces cash`,`Reduces retained earnings`],0,`لا يغير الثروة، فقط عدد الأسهم والسعر.`],
[`Matching principle in financing says:`,[`Finance long-term assets with long-term funds`,`Finance all assets with short-term debt`,`Use equity only`,`Match dividends to earnings`],0,`مطابقة عمر التمويل مع عمر الأصل.`],
[`Flotation costs make the cost of new common stock:`,[`Higher than the cost of retained earnings`,`Lower than retained earnings`,`Equal to the cost of debt`,`Zero`],0,`تكلفة الإصدار تزيد تكلفة الأسهم الجديدة.`]]}),

T('c2b4','Working Capital Management','إدارة رأس المال العامل',
`## دورة التحويل النقدي
- **CCC = DIO + DSO − DPO**. مثال: 60 + 45 − 30 = **75 يوم**. تقصيرها يحسّن السيولة.
## النقدية والأوراق المالية
- أسباب الاحتفاظ بالنقدية: معاملات، احتياط، مضاربة. أدوات: **Lockbox**، **Concentration banking**، **Float** (تقليل التحصيل، تأخير الدفع بشرعية).
## الذمم المدينة
- سياسة الائتمان (5 C's): Character، Capacity، Capital، Collateral، Conditions.
- **شروط الخصم 2/10 net 30**: التكلفة الضمنية = 2/98 × 365/20 = **37.2%** سنويًا تقريبًا. لو بديل التمويل أرخص من 37%، فاستفد من الخصم.
## المخزون
- **EOQ** و**JIT** و**Safety stock**. **ABC classification** للمخزون بتركيز الرقابة على الأصناف الأعلى قيمة.
## الدين قصير الأجل
- **Trade credit**، **Bank loans**، **Commercial paper**، **Line of credit**.
- **EAR** (التكلفة الفعلية): (1 + r/m)^m − 1. مثال 12% شهريًا: **12.68%**.
- **Compensating balance** يرفع التكلفة الفعلية. **Discount loan** يرفع الفائدة الفعلية.
## الاستراتيجيات
- **Aggressive**: تمويل جزء من الأصول الدائمة بدين قصير، أرخص وأخطر. **Conservative**: العكس. **Moderate/Matching** بينهما.
> الكفاءة: خفض DIO وDSO وإطالة DPO بدون الإضرار بالعلاقة مع الموردين.
= CCC = DIO + DSO − DPO
= Cost of forgoing discount = d/(1−d) × 365/(N − discount days)`,
{o:['تحسب CCC','تحسب تكلفة تفويت خصم الدفع المبكر','تفرّق بين استراتيجيات تمويل رأس المال العامل'],
f:[['CCC','DIO + DSO − DPO',''],['Forgone discount cost','d/(1−d) × 365/(N−disc days)','2/10 n30 ≈ 37.2%']],
c:[['CCC؟','DIO + DSO − DPO.'],['Aggressive financing؟','تمويل جزء من الدائم بدين قصير.'],['Lockbox؟','تسريع التحصيل عبر صندوق بريد بنكي.'],['EAR؟','(1 + r/m)^m − 1.'],['ABC inventory؟','تصنيف المخزون حسب القيمة لتركيز الرقابة.']],
q:[[`DIO is 60 days, DSO 45 days and DPO 30 days. The cash conversion cycle is:`,[`75 days`,`135 days`,`15 days`,`105 days`],0,`60+45−30 = 75.`],
[`Terms 2/10 net 30. The approximate annual cost of not taking the discount is:`,[`37.2%`,`2.0%`,`18.0%`,`24.0%`],0,`(2/98)×(365/20) ≈ 37.2%.`],
[`A nominal rate of 12% compounded monthly gives an effective annual rate of about:`,[`12.68%`,`12.00%`,`13.20%`,`11.50%`],0,`(1.01)^12 − 1 = 12.68%.`],
[`An aggressive working-capital financing policy:`,[`Uses more short-term debt to finance permanent assets`,`Uses only long-term debt`,`Holds more cash`,`Eliminates risk`],0,`أرخص لكن أخطر.`],
[`A lockbox system is used to:`,[`Speed up collections`,`Delay payments`,`Reduce inventory`,`Increase credit sales`],0,`يسرّع تحصيل الشيكات.`]]}),

T('c2b5','Corporate Restructuring & International Finance','إعادة الهيكلة والتمويل الدولي',
`## إعادة الهيكلة
- **Mergers & acquisitions**: أفقي، رأسي، تكتل (Conglomerate). التقييم بـ DCF أو مضاعفات أو **Asset-based**. **Synergies** تبرر العلاوة (Premium).
- **Divestiture، Spin-off، Carve-out، Leveraged buyout (LBO)**.
- **Bankruptcy**: Chapter 11 (إعادة تنظيم)، Chapter 7 (تصفية). أولوية الدائنين: مضمون ثم غير مضمون ثم ممتاز ثم عادي.
## الصرف الأجنبي
- **Spot** و**Forward**. **Interest rate parity**: Forward = Spot × (1 + i_domestic) ÷ (1 + i_foreign).
- مثال: Spot 50 جنيه/دولار، فائدة مصر 25%، أمريكا 5% → Forward = 50×1.25/1.05 = **59.52**. العملة ذات الفائدة الأعلى تُباع بخصم Forward.
- **Purchasing power parity**: الفرق في التضخم يفسر تغير السعر.
## مخاطر الصرف والتحوط
- **Transaction، Translation، Economic exposure**.
- **التحوط**: Forward، Futures، Options، Money market hedge، Netting، Natural hedge (إيراد وتكلفة بنفس العملة).
- **مثال**: مستورد سيدفع 100,000 دولار بعد 3 شهور. بشراء Forward يثبّت سعر الجنيه ويلغي المخاطرة.
## مخاطر الدولة
- **Political risk**، قيود تحويل الأرباح، **Transfer pricing** الضريبي.
> مفهوم الامتحان: لو العملة المحلية تضعف، تزيد تكلفة الواردات وتنخفض عند ترجمة الأرباح الأجنبية بالعملة القوية.
= Forward = Spot × (1 + i_d)/(1 + i_f)`,
{o:['تفرّق بين أشكال إعادة الهيكلة والإفلاس','تحسب Forward بـ IRP','تحدد أدوات التحوط لمخاطر العملة'],
f:[['Interest rate parity','Forward = Spot × (1+i_d)/(1+i_f)','']],
c:[['Chapter 11؟','إعادة تنظيم مع استمرار النشاط.'],['Chapter 7؟','تصفية.'],['Natural hedge؟','مطابقة إيرادات وتكاليف بنفس العملة.'],['Spin-off؟','فصل وحدة وتوزيع أسهمها على المساهمين.'],['IRP؟','الفرق في الفوائد يحدد الفرق بين Forward وSpot.']],
q:[[`Spot rate is 50 EGP per USD. Egyptian interest is 25% and U.S. interest is 5%. The one-year forward rate under interest rate parity is approximately:`,[`59.52`,`50.00`,`40.00`,`62.50`],0,`50×1.25/1.05 = 59.52.`],
[`An importer owes USD 100,000 in three months and wants to eliminate exchange risk. The simplest hedge is to:`,[`Buy USD forward`,`Sell USD forward`,`Wait and buy spot`,`Borrow in EGP`],0,`الشراء الآجل يثبت التكلفة.`],
[`Chapter 11 bankruptcy generally results in:`,[`Reorganization`,`Liquidation`,`Dissolution of creditors`,`A hostile takeover`],0,`Chapter 11 إعادة تنظيم.`],
[`A spin-off:`,[`Distributes shares of a subsidiary to existing shareholders`,`Sells a division for cash`,`Merges two competitors`,`Issues new debt`],0,`الأسهم تُوزع على المساهمين الحاليين.`],
[`Which exposure arises from converting foreign subsidiary financial statements into the parent's currency?`,[`Translation exposure`,`Transaction exposure`,`Economic exposure`,`Political exposure`],0,`الترجمة المحاسبية للقوائم.`]]})
]}

]}]}]
});
