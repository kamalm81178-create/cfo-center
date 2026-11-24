CFO.addPack({id:'cma', ver:'2026.11.1', date:'2026-11-24', name:'CMA (IMA) — Content Outline 2024',
tracks:[{id:'cma', en:'CMA (IMA)', ar:'شهادة CMA', icon:'▣', desc:'الجزءان 1 و 2 حسب Content Specification Outlines (سارية من 1 سبتمبر 2024). راجع IMA لأي تحديث.',
parts:[
{id:'cma1', en:'Part 1: Financial Planning, Performance, and Analytics', ar:'الجزء الأول: التخطيط والأداء والتحليلات', secs:[

{id:'cma1A', en:'1A External Financial Reporting Decisions', ar:'1A قرارات التقارير المالية الخارجية', w:'15%', topics:[
T('c1a1','Financial Statements (US GAAP / IFRS)','القوائم المالية',
`## المطلوب
- إعداد وتحليل: Income Statement، Statement of Comprehensive Income، Balance Sheet، Cash Flows، Changes in Equity.
- فرّق بين المحاسبة وفق US GAAP وIFRS في أهم النقاط: LIFO (مسموح US فقط)، رد خسائر الاضمحلال (IFRS يسمح لغير الشهرة)، تبويب الفوائد في CFS، إعادة التقييم (IFRS).
## قراءة
- Income statement: single-step/multi-step، البنود غير العادية والعمليات المتوقفة.
- Balance sheet: متداول/غير متداول، السيولة.
> الامتحان يختبر التطبيق (Level C): احسب وفسّر.
= Comprehensive income = Net income + OCI`,
{c:[['LIFO مسموح تحت أي معيار؟','US GAAP فقط (IFRS يمنعه).'],['أين تظهر Other Comprehensive Income؟','Statement of comprehensive income، ويتراكم في AOCI بحقوق الملكية.']]}),
T('c1a2','Revenue, Inventory & Long-lived Assets','الإيراد والمخزون والأصول طويلة الأجل',
`## الإيراد (5 خطوات)
- تحديد العقد، التزامات الأداء، سعر المعاملة، التوزيع، الاعتراف عند/خلال الوفاء.
## المخزون
- FIFO، Weighted average، LIFO (US). التقويم بالأقل من التكلفة وصافي القيمة القابلة للتحقق (LCNRV) لغير LIFO.
## الأصول الثابتة والاضمحلال
- خط مستقيم، قسط متناقص، وحدات إنتاج. الاضمحلال: القيمة الدفترية مقابل القابلة للاسترداد.
## الأخرى
- الإيجارات (Right-of-use asset/lease liability)، السندات (Effective interest)، الضرائب المؤجلة، EPS.
= SL depreciation = (Cost − Salvage) / Useful life
= Basic EPS = (NI − Preferred dividends) / Weighted avg shares`,
{c:[['خطوات الاعتراف بالإيراد؟','عقد، التزامات أداء، سعر، توزيع، اعتراف.']],
q:[['Cost 100,000, salvage 10,000, life 5 years. Straight-line annual depreciation:',['18,000','20,000','22,000','16,000'],0,'(100,000−10,000)/5 = 18,000.']]})
]},

{id:'cma1B', en:'1B Planning, Budgeting, and Forecasting', ar:'1B التخطيط والموازنات والتنبؤ', w:'20%', topics:[
T('c1b1','Strategic Planning','التخطيط الاستراتيجي',
`## أدوات
- SWOT، Porter's Five Forces، تحليل PEST، Scenario planning، Value chain.
## الربط
- الاستراتيجية ← أهداف ← خطط تشغيلية ← موازنة ← مؤشرات أداء.
- التخطيط طويل المدى (3-5 سنوات) مقابل قصير (سنة).
> السؤال المعتاد: أي أداة تناسب الموقف؟ اربط الأداة بالمشكلة.`,
{c:[['إيه اللي بيربط الاستراتيجية بالموازنة؟','الأهداف والخطط التشغيلية السنوية.']]}),
T('c1b2','Budgeting Concepts & Methodologies','مفاهيم ومنهجيات الموازنة',
`## الطرق
- **Static** مقابل **Flexible** (تُعدل حسب النشاط الفعلي). **Incremental**، **Zero-based**، **Activity-based**، **Rolling/Continuous**، **Participative**.
## الاختيار
- Flexible budget أفضل لتقييم الأداء لأنه يقارن التكلفة الفعلية بما كان يجب أن تكون عند الحجم الفعلي.
- Participative تحسن الالتزام لكن قد تخلق Slack.
> Budgetary slack = تعمد تقدير الإيراد أقل أو التكلفة أعلى.`,
{c:[['ليه Flexible budget أفضل للتقييم؟','لأنه يضبط المستهدف على الحجم الفعلي.'],['Zero-based budgeting؟','تبرير كل بند من الصفر كل فترة.']],
q:[['Which budget is best for evaluating a manager when actual volume differs from plan?',['Static budget','Flexible budget','Incremental budget','Capital budget'],1,'Flexible يعدّل التكاليف المتغيرة حسب الحجم الفعلي.']]}),
T('c1b3','Forecasting Techniques','تقنيات التنبؤ',
`## الأساليب
- Regression (y = a + bx)، High-low، Moving average، Exponential smoothing، Time series (trend, seasonal, cyclical, random)، Learning curve.
- **R²** يقيس نسبة تفسير المتغير المستقل للتغير. **Standard error** يقيس التشتت حول خط الانحدار.
## High-low
- b = (Cost high − Cost low) / (Activity high − Activity low) ثم a = Cost − b×Activity.
= Exponential smoothing: F(t+1) = α×A(t) + (1−α)×F(t)`,
{f:[['High-low variable rate','ΔCost / ΔActivity','']],
c:[['إيه R² = 0.9؟','90% من تغير y مفسر بالعلاقة مع x.']],
q:[['At 1,000 units cost is 12,000; at 2,000 units cost is 17,000. High-low variable cost per unit:',['5','4','6','12'],0,'(17,000−12,000)/(2,000−1,000) = 5.']]}),
T('c1b4','Annual Profit Plan & Schedules','خطة الربح السنوية والجداول الداعمة',
`## التسلسل
- مبيعات ← إنتاج ← مواد ← عمالة ← أعباء ← تكلفة المبيعات ← مصروفات بيع وإدارة ← موازنة النقدية ← القوائم التقديرية.
- Capital budget منفصل لكنه يؤثر على الإهلاك والنقدية.
> انتبه لسياسة المخزون المستهدف (Ending inventory) وجدولة التحصيل والسداد.`,
{c:[['إيه هو Pro forma statement؟','قوائم مالية تقديرية مبنية على الافتراضات والموازنة.']]}),
T('c1b5','Top-level Planning & Analysis','التخطيط والتحليل على مستوى الإدارة العليا',
`## المحتوى
- Pro forma financial statements، حساب العلاقة بين الأهداف المالية والتمويل، تحليل الحساسية والسيناريوهات، Monte Carlo (مفهوم).
- الربط بين الخطة والاستراتيجية، وإدارة الفجوات.
> اختبر أثر السيناريوهات على النقدية والالتزامات (Covenants) لا الربح فقط.`,
{c:[['أداة لاختبار عدة مستويات من الاحتمال؟','Scenario/Sensitivity/Monte Carlo.']]})
]},

{id:'cma1C', en:'1C Performance Management', ar:'1C إدارة الأداء', w:'20%', topics:[
T('c1c1','Cost & Variance Measures','قياسات التكلفة والانحرافات',
`## الانحرافات
- **Flexible budget variance** و **Sales volume variance** يفسران الفرق عن Static budget.
- مواد: Price & Usage. عمالة: Rate & Efficiency. أعباء متغيرة: Spending & Efficiency. ثابتة: Spending & Volume.
- تحليل مزيج وإنتاجية (Mix & Yield).
= Direct labor rate var = (AR − SR) × AH
= Direct labor efficiency var = (AH − SH) × SR
= Fixed OH volume var = Budgeted FOH − Applied FOH`,
{c:[['Sales volume variance؟','الفرق بين Static budget وFlexible budget عند الحجم الفعلي.']],
q:[['Standard labor rate 20/hr, actual rate 22/hr, actual hours 1,000. Labor rate variance:',['2,000 U','2,000 F','1,000 U','20,000 U'],0,'(22−20)×1,000 = 2,000 غير مناسب.']]}),
T('c1c2','Responsibility Centers & Transfer Pricing','مراكز المسؤولية والتسعير الداخلي',
`## المراكز
- Cost center، Revenue center، Profit center، Investment center.
- قيّم المدير على ما يتحكم فيه (Controllable).
## Transfer pricing
- Market-based، Cost-based، Negotiated. النطاق: الحد الأدنى = التكلفة الحدية + تكلفة الفرصة، والحد الأقصى = سعر السوق/القيمة للمشتري.
- الأهداف: Goal congruence وحافز المديرين واستقلالية.
> عند طاقة فائضة يميل الحد الأدنى للتكلفة الحدية.`,
{c:[['إيه الحد الأدنى لسعر التحويل؟','التكلفة الحدية للبائع + تكلفة فرصة الطاقة.']]}),
T('c1c3','Performance Measures: ROI, RI, EVA, BSC','مقاييس الأداء',
`## مقاييس مراكز الاستثمار
- **ROI** = Operating income / Invested assets. **Residual income** = Operating income − (Required return × Invested assets). **EVA** = NOPAT − WACC × Invested capital.
- RI تتجنب رفض مشروعات عائدها أعلى من التكلفة لكن أقل من ROI الحالي.
## Balanced Scorecard
- أربعة منظورات: Financial، Customer، Internal process، Learning & growth.
= ROI = Margin × Turnover
= RI = OI − (r × Assets)`,
{c:[['إيه ميزة RI على ROI؟','تحفز قبول مشروعات عائدها فوق التكلفة حتى لو أقل من ROI الحالي.'],['منظورات BSC؟','مالي، عملاء، عمليات داخلية، تعلم ونمو.']],
q:[['Operating income 200,000, assets 1,000,000, required return 15%. Residual income:',['50,000','150,000','200,000','35,000'],0,'200,000 − 150,000 = 50,000.']]})
]},

{id:'cma1D', en:'1D Cost Management', ar:'1D إدارة التكلفة', w:'15%', topics:[
T('c1d1','Measurement Concepts','مفاهيم القياس',
`## التصنيف
- Direct/Indirect، Variable/Fixed، Product/Period، Relevant/Sunk.
- **Absorption costing** مقابل **Variable costing**: الفرق في معالجة الأعباء الصناعية الثابتة. عند زيادة المخزون يكون ربح الامتصاص أعلى.
- Normal، Actual، Standard costing. Joint & By-products.
= Abs − Var income = ΔInventory units × Fixed OH per unit`,
{c:[['متى يكون ربح Absorption أعلى من Variable؟','عند زيادة المخزون (إنتاج > مبيعات).']],
q:[['Production exceeds sales. Compared to variable costing, absorption costing operating income is:',['Higher','Lower','Equal','Cannot be determined'],0,'جزء من الأعباء الثابتة يتأجل في المخزون.']]}),
T('c1d2','Costing Systems: Job, Process, ABC','أنظمة التكاليف',
`## Job vs Process
- Job: منتجات مميزة. Process: منتجات متجانسة، **Equivalent units** (WA أو FIFO).
## ABC
- Resource → Activity → Cost object عبر Cost drivers. Activity hierarchy: Unit, Batch, Product, Facility.
## Life-cycle, Target, Kaizen
- Target cost = Price − Desired profit. Kaizen تحسين تدريجي.
= Equivalent units = Completed + (WIP × % completion)`,
{c:[['مستويات الأنشطة في ABC؟','Unit, Batch, Product-sustaining, Facility-sustaining.']]}),
T('c1d3','Overhead Allocation','توزيع الأعباء',
`## المعدل المحدد مسبقًا
- Predetermined rate = Estimated OH / Estimated driver. تحمّل على الإنتاج بالساعات/النشاط الفعلي.
- Under/Over-applied يُسوى في COGS أو يوزع.
## توزيع الأقسام الخدمية
- Direct، Step-down، Reciprocal (الأدق).
= Over/Under-applied = Applied OH − Actual OH`,
{c:[['أدق طرق توزيع الأقسام الخدمية؟','Reciprocal.']]}),
T('c1d4','Supply Chain & Process Improvement','سلسلة الإمداد وتحسين العمليات',
`## أدوات
- **JIT**، **MRP/ERP**، **TOC** (Throughput, constraint)، Lean، Six Sigma، Kaizen، Benchmarking، BPR، Cost of quality (منع، تقييم، فشل داخلي/خارجي).
## المخزون
- EOQ، Reorder point، Safety stock.
= EOQ = √(2DS/H)
= Reorder point = Daily usage × Lead time + Safety stock`,
{f:[['EOQ','√(2 × D × S / H)','D طلب سنوي، S تكلفة أمر، H تكلفة احتفاظ للوحدة']],
c:[['إيه تكاليف الجودة الأربع؟','منع، تقييم، فشل داخلي، فشل خارجي.']],
q:[['Annual demand 10,000, order cost 50, holding cost 4 per unit. EOQ?',['500','250','1,000','100'],0,'√(2×10,000×50/4)=√250,000=500.']]})
]},

{id:'cma1E', en:'1E Internal Controls', ar:'1E الرقابة الداخلية', w:'15%', topics:[
T('c1e1','Governance, Risk & Compliance','الحوكمة والمخاطر والالتزام',
`## الأطر
- COSO Internal Control 2013 (5 مكونات، 17 مبدأ)، COSO ERM.
- SOX: Section 302 (شهادة الإدارة)، 404 (تقييم ICFR)، Audit committee، Whistleblower.
- Three lines model. Fraud triangle: Pressure, Opportunity, Rationalization.
> ميّز بين Preventive وDetective وCorrective controls.`,
{c:[['إيه Fraud triangle؟','ضغط، فرصة، تبرير.']]}),
T('c1e2','System Controls & Security','ضوابط الأنظمة والأمن',
`## ضوابط
- General IT controls (الوصول، التغيير، العمليات) وApplication controls (Input, Processing, Output).
- Segregation of duties، Authorization، Reconciliation، Backup & Disaster recovery.
- **CIA**: Confidentiality, Integrity, Availability.
- أمن: Encryption، MFA، Firewalls، Least privilege.`,
{c:[['إيه CIA triad؟','Confidentiality, Integrity, Availability.']]})
]},

{id:'cma1F', en:'1F Technology and Analytics', ar:'1F التكنولوجيا والتحليلات', w:'15%', topics:[
T('c1f1','Information Systems & Data Governance','نظم المعلومات وحوكمة البيانات',
`## أنظمة
- AIS، ERP، دورات (إيراد، مصروفات، تحويل، تمويل). قواعد البيانات.
## حوكمة البيانات
- ملكية البيانات، جودة البيانات (دقة، اكتمال، اتساق، توقيت)، دورة حياة البيانات، الخصوصية.
> ربط: بيانات سيئة = تقرير مالي سيئ.`,
{c:[['أبعاد جودة البيانات؟','الدقة، الاكتمال، الاتساق، التوقيت.']]}),
T('c1f2','Tech-enabled Finance & Data Analytics','التحول المالي التقني وتحليلات البيانات',
`## التحول
- RPA، AI/ML، Cloud، Blockchain، Dashboards، Process mining.
## التحليلات
- Descriptive، Diagnostic، Predictive، Prescriptive. ETL، Data mining، Visualization، Big data.
- Statistical basics: mean, variance, correlation, regression.
> اختر التصور المناسب: مقارنة (Bar)، اتجاه (Line)، علاقة (Scatter).`,
{c:[['أنواع التحليلات الأربعة؟','Descriptive, Diagnostic, Predictive, Prescriptive.']]})
]}
]},

{id:'cma2', en:'Part 2: Strategic Financial Management', ar:'الجزء الثاني: الإدارة المالية الاستراتيجية', secs:[

{id:'cma2A', en:'2A Financial Statement Analysis', ar:'2A تحليل القوائم المالية', w:'20%', topics:[
T('c2a1','Ratios & Comparative Analysis','النسب والتحليل المقارن',
`## الأدوات
- Common-size (رأسي)، Trend/Horizontal، Index. نسب السيولة، النشاط، الرافعة، الربحية، السوق.
- **DuPont** (3 و5 عوامل).
= Quick = (Cash + Securities + AR) / CL
= Times interest earned = EBIT / Interest
= P/E = Price / EPS ; Dividend yield = DPS / Price`,
{c:[['Debt-to-equity؟','إجمالي الديون ÷ حقوق الملكية.']],
q:[['Current assets 300, inventory 100, current liabilities 150. Quick ratio:',['1.33','2.0','0.67','3.0'],0,'(300−100)/150 = 1.33.']]}),
T('c2a2','Profitability & Special Issues','تحليل الربحية والقضايا الخاصة',
`## الربحية
- Gross/Operating/Net margin، ROA، ROE، تحليل الانحرافات في الهامش.
## قضايا خاصة
- جودة الأرباح، تأثير التضخم، العملات الأجنبية، تعدد الأنظمة المحاسبية، القيود (التحليل التاريخي، السياسات المحاسبية).
- التحليل القطاعي (Segment).`,
{c:[['لماذا قد تكون النسب مضللة؟','سياسات محاسبية مختلفة، موسمية، تضخم، أحداث غير متكررة.']]})
]},

{id:'cma2B', en:'2B Corporate Finance', ar:'2B تمويل الشركات', w:'20%', topics:[
T('c2b1','Risk & Return','المخاطرة والعائد',
`## المفاهيم
- Systematic (سوقي) مقابل Unsystematic (يمكن تنويعه). **Beta** يقيس الحساسية للسوق.
- **CAPM**: E(R) = Rf + β(Rm − Rf). **SML** تمثل العلاقة.
- Standard deviation، Coefficient of variation، Correlation، Diversification.
= CV = σ / Expected return`,
{c:[['إيه الفرق بين المخاطر المنتظمة وغير المنتظمة؟','المنتظمة لا تُنوَّع (Beta)، وغير المنتظمة تُنوَّع.']],
q:[['Rf 5%, beta 1.2, market return 11%. CAPM expected return:',['12.2%','11%','13.2%','6.2%'],0,'5% + 1.2×6% = 12.2%.']]}),
T('c2b2','Long-term Financial Management','التمويل طويل الأجل: تكلفة رأس المال والرافعة',
`## WACC والهيكل
- Kd بعد الضريبة، Kp، Ke (CAPM أو DDM أو Bond yield + premium).
- DOL، DFL، DTL: رافعة تشغيلية ومالية.
## تقييم
- السندات: PV للكوبونات + الاستحقاق. الأسهم: DDM = D1 / (Ke − g).
= DOL = %ΔEBIT / %ΔSales = CM / EBIT
= DFL = EBIT / (EBIT − Interest)
= DDM: P0 = D1 / (Ke − g)`,
{c:[['إيه DFL؟','حساسية EPS لتغير EBIT بسبب الفوائد.']]}),
T('c2b3','Raising Capital & Leases','جمع رأس المال والتأجير',
`## مصادر
- أسهم عادية، ممتازة، سندات (قابلة للتحويل، Callable)، قروض مصرفية.
- IPO، Rights issue، Private placement.
## Lease vs Buy
- قارن NPV تكلفة التأجير مقابل الشراء بعد الضريبة. Operating vs Finance lease.`,
{c:[['Callable bond؟','يحق للمصدر استدعاؤه قبل الاستحقاق.']]}),
T('c2b4','Working Capital Management','إدارة رأس المال العامل',
`## الأصل
- Cash management (Float، Lockbox، Concentration)، Receivables (Terms, 2/10 net 30)، Inventory (EOQ، JIT)، Payables.
- التمويل قصير الأجل: Trade credit، Bank loans، Commercial paper، Factoring.
- **CCC**.
= Annualized cost of skipping discount (2/10 n30) = 2/98 × 365/20 ≈ 37.2%
= CCC = DIO + DSO − DPO`,
{c:[['تكلفة التنازل عن خصم 2/10 net 30؟','حوالي 37%.']],
q:[['Terms 2/10 net 30. Approximate annualized cost of NOT taking the discount:',['37.2%','2%','24.5%','12%'],0,'(2/98)×(365/20) = 37.2%.']]}),
T('c2b5','Restructuring & International Finance','إعادة الهيكلة والتمويل الدولي',
`## إعادة الهيكلة
- M&A: Horizontal, Vertical, Conglomerate. Synergies. LBO، Spin-off، Divestiture، Bankruptcy.
## الدولي
- Exchange rates، Interest rate parity، PPP، Hedging (Forward, Futures, Options, Money market)، Transaction vs Translation exposure.
> الاستحواذ يخلق قيمة لو القيمة المضافة (Synergies) أعلى من العلاوة المدفوعة.`,
{c:[['إيه Translation exposure؟','تأثير توحيد القوائم بالعملة الأجنبية على القوائم الموحدة.']]})
]},

{id:'cma2C', en:'2C Business Decision Analysis', ar:'2C تحليل القرارات', w:'25%', topics:[
T('c2c1','Cost/Volume/Profit Analysis','تحليل التكلفة والحجم والربح',
`## CVP
- Break-even، Target profit، Margin of safety، DOL. تعدد المنتجات (Weighted-average CM).
- التأثير الضريبي: Pretax = After-tax / (1 − t).
= BE units = FC / CM per unit
= Target units = (FC + Target pretax profit) / CM
= Pretax profit = After-tax profit / (1 − t)`,
{c:[['Margin of safety؟','المبيعات الفعلية − مبيعات التعادل.']],
q:[['Fixed costs 60,000, CM/unit 12. Units needed for pretax profit of 24,000:',['7,000','5,000','2,000','12,000'],0,'(60,000+24,000)/12 = 7,000.']]}),
T('c2c2','Marginal Analysis & Relevant Costs','التحليل الحدي والتكاليف ذات الصلة',
`## قاعدة
- ذات الصلة: مستقبلية + تختلف بين البدائل. الغارقة (Sunk) ليست ذات صلة. تكلفة الفرصة تُحسب.
## قرارات
- Make-or-buy، Special order، Sell or process further (Joint costs غير ذات صلة)، Drop a segment، Constrained resource (رتب بـ CM لكل وحدة قيد).
> قرار إيقاف قسم: قارن Avoidable costs مع CM المفقود.`,
{c:[['عند وجود مورد نادر، بأي مقياس نرتب المنتجات؟','CM لكل وحدة من المورد المقيد.']],
q:[['In a make-or-buy decision, which cost is irrelevant?',['Avoidable fixed cost','Opportunity cost of facility','Unavoidable allocated overhead','Variable manufacturing cost'],2,'الأعباء غير القابلة للتجنب لا تتغير بين البدائل.']]}),
T('c2c3','Pricing','التسعير',
`## الطرق
- Cost-plus (Full, Variable)، Target costing، Market-based، Value-based، Penetration/Skimming، Price discrimination.
- Elasticity: عند الطلب المرن خفض السعر يزيد الإيراد.
## العلاقة
- السعر المستهدف − الربح المطلوب = التكلفة المستهدفة.
= Markup % = (Price − Cost) / Cost
= Elasticity = %ΔQ / %ΔP`,
{c:[['Penetration pricing؟','تسعير منخفض للدخول وكسب حصة سوقية.']]})
]},

{id:'cma2D', en:'2D Enterprise Risk Management', ar:'2D إدارة المخاطر المؤسسية', w:'10%', topics:[
T('c2d1','Enterprise Risk Management','إدارة المخاطر المؤسسية',
`## COSO ERM
- حوكمة وثقافة، استراتيجية وأهداف، أداء (تحديد، تقييم، استجابة)، مراجعة، معلومات واتصال.
- Risk appetite و Risk tolerance. Inherent vs Residual risk.
- استجابة: Accept, Avoid, Reduce, Share/Transfer. Risk matrix، Monte Carlo، Stress testing.
= Residual risk = Inherent risk − Effect of controls`,
{c:[['الفرق بين Risk appetite وTolerance؟','Appetite: مستوى المخاطر المستعد لقبوله استراتيجيًا. Tolerance: الانحراف المقبول عن الهدف.']]})
]},

{id:'cma2E', en:'2E Capital Investment Decisions', ar:'2E قرارات الاستثمار الرأسمالي', w:'10%', topics:[
T('c2e1','Capital Budgeting Process & Cash Flows','عملية الموازنة الرأسمالية والتدفقات',
`## الخطوات
- تحديد الفرص، تقدير التدفقات الإضافية، تقييم، اختيار، التنفيذ، **Post-audit**.
## التدفقات
- Incremental after-tax: استثمار أولي، رأس مال عامل، تشغيل، قيمة الخردة. **Depreciation tax shield** = Dep × t.
- تجاهل التكاليف الغارقة، وتضمين تكلفة الفرصة.
= After-tax CF = (Revenue − Cash costs)(1−t) + Dep × t`,
{c:[['إيه Depreciation tax shield؟','الإهلاك × معدل الضريبة.']]}),
T('c2e2','NPV, IRR, Payback, PI & Risk','NPV وIRR والاسترداد وتحليل المخاطر',
`## الطرق
- NPV (الأفضل)، IRR، Payback (لا يعتبر القيمة الزمنية)، Discounted payback، Profitability Index = PV inflows / Investment، MIRR.
- Capital rationing: رتب بـ PI داخل الميزانية.
## المخاطر
- Sensitivity، Scenario، Simulation، Real options، Risk-adjusted discount rate.
> التعارض بين NPV وIRR (Mutually exclusive): اختر NPV الأعلى.`,
{c:[['PI >1 تعني؟','NPV موجب.']],
q:[['Which method ignores the time value of money?',['NPV','IRR','Payback period','Profitability index'],2,'Payback البسيط لا يخصم التدفقات.']]})
]},

{id:'cma2F', en:'2F Professional Ethics', ar:'2F أخلاقيات المهنة', w:'15%', topics:[
T('c2f1','IMA Statement of Ethical Professional Practice','بيان IMA للممارسة المهنية الأخلاقية',
`## المبادئ والمعايير
- المبادئ: **Honesty, Fairness, Objectivity, Responsibility**.
- المعايير: **Competence, Confidentiality, Integrity, Credibility**.
## حل الصراع الأخلاقي
- اتبع سياسات المنشأة، ناقش مع المشرف (إلا إن كان طرفًا)، مستوى أعلى، مستشار قانوني/موضوعي، وقد تستقيل كخيار أخير. وثّق ولا تفشِ خارج المنشأة إلا قانونيًا.
> الامتحان: حدد أي معيار انتُهك واختر الخطوة التالية الصحيحة.`,
{c:[['معايير IMA الأربعة؟','Competence, Confidentiality, Integrity, Credibility.']],
q:[['A management accountant discovers a superior is manipulating figures. First step per IMA?',['Report to the SEC','Follow established company policies / discuss with an appropriate level','Resign immediately','Ignore'],1,'ابدأ بسياسات الشركة والمستويات الأعلى حسب التسلسل.']]}),
T('c2f2','Fraud, Culture, Sustainability & Data Ethics','الاحتيال والثقافة والاستدامة وأخلاقيات البيانات',
`## موضوعات
- Fraud (اختلاس، فساد، تلاعب بالقوائم)، تقليل الفرصة، Tone at the top، Code of conduct، Whistleblowing.
- الاستدامة/ESG والإفصاح. أخلاقيات البيانات: الخصوصية، التحيز، الاستخدام العادل.`,
{c:[['Tone at the top؟','سلوك وقيم الإدارة العليا تحدد ثقافة الالتزام.']]})
]}
]}
]}]
});
