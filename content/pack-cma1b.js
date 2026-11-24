CFO.addPack({id:'cma1b', ver:'2026.11.2', date:'2026-11-24', name:'CMA Part 1 Deep Dive — 1D, 1E, 1F',
news:['2026.11.2 — CMA Part 1 Deep Dive (1D–1F): إدارة التكلفة والرقابة والتكنولوجيا بأمثلة وأسئلة.'],
tracks:[{id:'cma', parts:[{id:'cma1', secs:[

{id:'cma1D', topics:[
T('c1d1','Measurement Concepts: Absorption vs Variable Costing','مفاهيم القياس: التكلفة الكلية مقابل المتغيرة',
`## التصنيفات
- **Direct/Indirect**، **Variable/Fixed/Mixed**، **Product/Period**، **Relevant/Sunk**، **Controllable**.
- **Product cost** (مواد مباشرة + عمالة مباشرة + أعباء صناعية) تُرسمل في المخزون. **Period cost** (بيع وإدارة) تُصرف مباشرة.
## الفرق الجوهري
- **Absorption (Full) costing**: الأعباء الصناعية الثابتة جزء من تكلفة المنتج. مطلوبة للتقارير الخارجية.
- **Variable (Direct) costing**: الأعباء الثابتة مصروف فترة. مفيدة للإدارة وقرارات CVP.
## مثال محلول
- إنتاج 10,000 وحدة، مبيعات 8,000، سعر 50$، تكلفة متغيرة 20$ للوحدة، أعباء صناعية ثابتة 100,000، بيع وإدارة ثابت 30,000.
- **Absorption**: تكلفة الوحدة 20 + 10 = 30. الربح = 8,000×50 − 8,000×30 − 30,000 = **130,000**.
- **Variable**: CM = 8,000×30 = 240,000 − 100,000 − 30,000 = **110,000**.
- الفرق **20,000** = 2,000 وحدة زيادة مخزون × 10 أعباء ثابتة.
- لو الإنتاج > المبيعات: ربح Absorption أعلى. لو أقل: ربح Variable أعلى. لو متساويين: الربحان متساويان.
## أنظمة التحميل
- **Actual**، **Normal** (معدل محدد مسبقًا للأعباء + فعلي للمباشر)، **Standard**.
> فخ: Absorption قد يشجع على إنتاج زائد لرفع الربح الدفتري. الـ CFO يراقب المخزون.
= Absorption OI − Variable OI = ΔInventory units × Fixed MOH per unit`,
{o:['تفرّق بين Product وPeriod costs','تحسب الربح بالطريقتين','تفسر سبب الفرق وتتنبأ بالاتجاه'],
c:[['الفرق بين الطريقتين؟','معالجة الأعباء الصناعية الثابتة.'],['إنتاج > مبيعات: أي ربح أعلى؟','Absorption.'],['أي طريقة للتقارير الخارجية؟','Absorption.'],['Normal costing؟','مباشر فعلي + أعباء بمعدل محدد مسبقًا.'],['Period costs؟','تُصرف في الفترة، ومنها البيع والإدارة.']],
q:[[`Production 10,000 units; sales 8,000 units at 50. Variable cost 20 per unit; fixed manufacturing overhead 100,000; fixed SG&A 30,000. Operating income under absorption costing is:`,[`130,000`,`110,000`,`120,000`,`150,000`],0,`تكلفة الوحدة 30. 400,000 − 240,000 − 30,000 = 130,000.`],
[`Using the same data, operating income under variable costing is:`,[`110,000`,`130,000`,`140,000`,`100,000`],0,`CM 240,000 − 100,000 − 30,000 = 110,000.`],
[`The difference between the two profits (20,000) is explained by:`,[`2,000 units added to inventory × 10 fixed overhead per unit`,`Variable costs of 8,000 units`,`Fixed SG&A`,`Selling price differences`],0,`الفرق = تغير المخزون × الأعباء الثابتة للوحدة.`],
[`When production is less than sales, which statement is true?`,[`Variable costing income is higher`,`Absorption costing income is higher`,`The two incomes are equal`,`Variable costing cannot be computed`],0,`المخزون ينخفض فتخرج أعباء ثابتة قديمة في COGS، فيقل ربح Absorption.`],
[`Under variable costing, fixed manufacturing overhead is treated as:`,[`A period cost`,`A product cost`,`An asset`,`Part of COGS`],0,`يُصرف في الفترة.`]]}),

T('c1d2','Costing Systems: Job, Process & ABC','أنظمة التكاليف: الأوامر والعمليات وABC',
`## Job vs Process
- **Job costing**: منتجات متميزة (أمر إنتاج)، تجمع المباشر وتحمل الأعباء بمعدل.
- **Process costing**: منتجات متجانسة، تقسم التكلفة على **Equivalent units (EU)** لكل عنصر (مواد وتحويل).
## مثال محلول (Weighted average مقابل FIFO)
- WIP أول 1,000 وحدة (تحويل 40%)، بدأ 9,000، WIP آخر 2,000 (تحويل 50%). المواد تُضاف في البداية. **المكتمل = 8,000**.
- **Weighted average EU**: مواد = 8,000 + 2,000 = **10,000**. تحويل = 8,000 + 1,000 = **9,000**.
- **FIFO EU**: مواد = 0 (WIP أول) + 7,000 (بدأ وانتهى) + 2,000 = **9,000**. تحويل = 600 (إتمام WIP أول) + 7,000 + 1,000 = **8,600**.
- لو تكلفة المواد الكلية 100,000 والتحويل الكلي 72,000 (WA): **10 + 8 = 18** للوحدة. المكتمل 144,000 و WIP آخر = 2,000×10 + 1,000×8 = 28,000. المجموع 172,000.
## ABC
- حدد الأنشطة والمحركات: **Unit-level، Batch-level، Product-sustaining، Facility-sustaining**.
- **مثال**: تجهيز 60,000 ÷ 300 تجهيزة = **200** للتجهيزة. فحص 40,000 ÷ 200 فحص = **200**. المنتج A (100 تجهيزة و50 فحص) = 30,000. المنتج B (200 و150) = **70,000**.
- ABC أدق مع تنوع المنتجات والتعقيد، لكنه أغلى في التنفيذ.
> فرق مهم: Weighted average يخلط التكاليف السابقة والحالية. FIFO يفصلها (WIP أول = تكلفة منفصلة).
= EU (WA) = Completed + Ending WIP × % complete
= ABC rate = Pool cost / Driver volume`,
{o:['تحسب EU بطريقتي WA وFIFO','تحسب تكلفة الوحدة وتوزعها على المكتمل وWIP','تطبق ABC وتفهم مستويات الأنشطة'],
c:[['EU؟','وحدات مكافئة مكتملة لعنصر التكلفة.'],['الفرق بين WA وFIFO؟','WA يدمج WIP الأول مع الفترة، وFIFO يفصله.'],['ABC drivers؟','مقاييس النشاط الذي يسبب التكلفة.'],['مستويات الأنشطة؟','Unit, Batch, Product-sustaining, Facility-sustaining.'],['متى ABC أفضل؟','تنوع منتجات وأعباء غير مباشرة كبيرة.']],
q:[[`Beginning WIP 1,000 (40% conversion), started 9,000, ending WIP 2,000 (50% conversion). Materials added at start. Weighted-average equivalent units for conversion are:`,[`9,000`,`10,000`,`8,600`,`8,000`],0,`8,000 + 2,000×50% = 9,000.`],
[`Using the same data, FIFO equivalent units for conversion are:`,[`8,600`,`9,000`,`8,000`,`9,600`],0,`600 + 7,000 + 1,000 = 8,600.`],
[`Conversion costs total 72,000 and weighted-average EU are 9,000. Cost per EU is:`,[`8`,`7.2`,`10`,`9`],0,`72,000 ÷ 9,000 = 8.`],
[`Setup costs 60,000 with 300 setups. The ABC cost per setup is:`,[`200`,`100`,`300`,`150`],0,`60,000 ÷ 300 = 200.`],
[`Setup rate 200 per setup, inspection rate 200 per inspection. Product B uses 200 setups and 150 inspections. Overhead assigned to B is:`,[`70,000`,`40,000`,`60,000`,`30,000`],0,`200×200 + 150×200 = 70,000.`]]}),

T('c1d3','Overhead Allocation','توزيع الأعباء الصناعية',
`## معدل التحميل المحدد مسبقًا
- **Predetermined rate = Estimated overhead ÷ Estimated driver.** مثال: 600,000 ÷ 20,000 ساعة = **30$/ساعة**.
- فعلي 21,000 ساعة → **Applied = 630,000**. أعباء فعلية 640,000 → **Underapplied = 10,000** (التحميل أقل من الفعلي). تُغلق عادة في COGS فتزيد التكلفة وتخفض الربح.
## توزيع الأقسام الخدمية
- **Direct method**: توزع الخدمة على أقسام الإنتاج فقط وتتجاهل التبادل بين الخدمات.
- **Step-down (Sequential)**: تبدأ بالقسم الأكثر خدمة، وتوزع على الباقي ولا ترجع.
- **Reciprocal**: معادلات متبادلة بالكامل، والأدق.
## مثال محلول
- S1 تكلفته 100,000 وتخدم: S2 20%، P1 40%، P2 40%. S2 تكلفته 60,000 وتخدم: S1 10%، P1 50%، P2 40%.
- **Direct**: S2 → P1 = 60,000 × 50/90 = 33,333. إجمالي P1 = 50,000 + 33,333 = **83,333**.
- **Step-down (S1 أولًا)**: S1 → S2 20,000، P1 40,000، P2 40,000. S2 = 80,000 → P1 44,444، P2 35,556. إجمالي P1 = **84,444**، P2 = 75,556.
- **Reciprocal**: S1 = 100,000 + 0.1·S2، S2 = 60,000 + 0.2·S1 ⇒ S1 ≈ **108,163**، S2 ≈ 81,633. P1 = **84,082**، P2 = 75,918. الإجمالي 160,000 في كل الطرق.
> اختيار المعدل (ساعات عمل، ساعات آلة، أنشطة) يغير الربحية. اختر المحرك الذي يسبب التكلفة فعلًا.
= Applied OH = Rate × Actual driver
= Under/Over-applied = Actual OH − Applied OH`,
{o:['تحسب معدل التحميل والـ Under/Over-applied','تقارن Direct وStep-down وReciprocal','تضبط التوزيع عند 160,000 إجمالي'],
c:[['معدل التحميل؟','التقديري ÷ المحرك التقديري.'],['Underapplied يعني؟','المحمل أقل من الفعلي.'],['أدق طرق الأقسام الخدمية؟','Reciprocal.'],['Direct method؟','يتجاهل الخدمات المتبادلة.'],['أين تُغلق فروق التحميل؟','عادة في COGS (أو تُوزع على WIP/FG/COGS).']],
q:[[`Estimated overhead 600,000 and estimated direct labor hours 20,000. The predetermined overhead rate per hour is:`,[`30`,`3`,`20`,`300`],0,`600,000 ÷ 20,000 = 30.`],
[`Actual hours 21,000 and actual overhead 640,000. Using the 30 rate, overhead is:`,[`Underapplied by 10,000`,`Overapplied by 10,000`,`Underapplied by 40,000`,`Properly applied`],0,`المحمل 630,000 < الفعلي 640,000.`],
[`Which allocation method fully recognizes reciprocal services between service departments?`,[`Reciprocal method`,`Direct method`,`Step-down method`,`Plantwide rate`],0,`Reciprocal هو الوحيد الذي يحل التبادل بمعادلات متزامنة.`],
[`S1 (100,000) serves P1 40% and P2 40% and S2 20%. S2 (60,000) serves P1 50% and P2 40% (and S1 10%). Under the direct method, total allocated to P1 is:`,[`83,333`,`84,444`,`84,082`,`90,000`],0,`S1: 100,000×40/80 = 50,000. S2: 60,000×50/90 = 33,333. الإجمالي 83,333.`],
[`Under the step-down method (S1 first), total allocated to P1 is approximately:`,[`84,444`,`83,333`,`84,082`,`80,000`],0,`40,000 + 80,000×50/90 = 84,444.`]]}),

T('c1d4','Supply Chain, EOQ, TOC & Cost of Quality','سلسلة الإمداد وEOQ وTOC وتكاليف الجودة',
`## إدارة المخزون
- **EOQ = √(2DS/H)**. مثال: D=24,000، S=150$، H=6$ → √1,200,000 ≈ **1,095** وحدة.
- **Reorder point = الاستهلاك اليومي × مدة التوريد + Safety stock**. مثال: 24,000÷365 = 65.75 يوميًا × 10 أيام + 100 = **757.5** (≈ 758).
- **Safety stock** يحمي من تذبذب الطلب أو التأخر في التوريد.
## نظم التخطيط
- **JIT**: تقليل المخزون إلى أدنى حد، جودة عالية، موردين موثوقين. **MRP** (مواد)، **MRP II**، **ERP** (تكامل كل الوظائف).
## TOC (نظرية القيود)
- الخطوات: 1) حدد القيد. 2) استغله بالكامل. 3) اخضع بقية العمليات له. 4) ارفع القيد. 5) كرر.
- **Throughput contribution** = الإيراد − التكاليف المتغيرة تمامًا (غالبًا المواد). الهدف: رفع Throughput وخفض المخزون والمصروف التشغيلي.
## تكاليف الجودة
- **Prevention** (تدريب، تصميم)، **Appraisal** (فحص، اختبار)، **Internal failure** (خردة، إعادة تشغيل)، **External failure** (مرتجعات، ضمان، فقدان سمعة).
- زيادة الإنفاق على الوقاية تخفض الفشل عادة.
## تحسين العمليات
- **Lean**، **Six Sigma** (DMAIC: Define, Measure, Analyze, Improve, Control)، **Kaizen**، **BPR** (إعادة هندسة جذرية)، **Benchmarking**، **Value chain** (أنشطة تضيف قيمة).
> في المطاعم: المطبخ المركزي غالبًا القيد (طاقة التحضير)، ومعدل الدوران وصلاحية المخزون أهم من EOQ الحرفي.
= EOQ = √(2 × D × S / H)
= ROP = d × L + SS
= Total cost = (D/Q) × S + (Q/2) × H`,
{o:['تحسب EOQ ونقطة إعادة الطلب','تطبق خطوات TOC','تصنف تكاليف الجودة','تفرّق بين JIT وMRP وERP'],
c:[['EOQ؟','√(2DS/H).'],['خطوات TOC؟','حدد، استغل، اخضع، ارفع، كرر.'],['الفحص في تكاليف الجودة؟','Appraisal.'],['الخردة داخل المصنع؟','Internal failure.'],['DMAIC؟','Define, Measure, Analyze, Improve, Control.']],
q:[[`Annual demand 24,000, order cost 150, holding cost 6 per unit per year. The EOQ is approximately:`,[`1,095`,`1,200`,`600`,`2,400`],0,`√(2×24,000×150/6) = √1,200,000 ≈ 1,095.`],
[`Demand 24,000 per year (365 days), lead time 10 days, safety stock 100. The reorder point is approximately:`,[`758`,`658`,`1,095`,`240`],0,`65.75×10 + 100 = 757.5 ≈ 758.`],
[`Under the theory of constraints, the FIRST step is to:`,[`Identify the system constraint`,`Elevate the constraint`,`Subordinate other processes`,`Reduce inventory`],0,`الخطوة الأولى تحديد القيد.`],
[`Inspection and testing of products is classified as which cost of quality?`,[`Appraisal`,`Prevention`,`Internal failure`,`External failure`],0,`الفحص والاختبار تقييم.`],
[`A just-in-time system is expected to:`,[`Reduce inventory levels and require reliable suppliers`,`Increase safety stock`,`Increase batch sizes`,`Eliminate the need for quality`],0,`JIT يقلل المخزون ويعتمد على موردين وجودة موثوقة.`]]}),

T('c1d5','Joint Costs & By-products','التكاليف المشتركة والمنتجات الثانوية',
`## المفهوم
- **Joint costs** تُنفق حتى نقطة الانفصال (Split-off point). تُوزع على المنتجات المشتركة بأسلوب:
  - **Relative sales value at split-off**.
  - **NRV method** (قيمة بيع نهائية − تكاليف إضافية).
  - **Physical measure** (أوزان أو أحجام).
  - **Constant gross margin**.
## مثال: Relative sales value
- تكاليف مشتركة 100,000. قيمة بيع X عند الانفصال 60,000، Y 40,000. يتحمل X = 100,000 × 60% = **60,000**، وY = **40,000**.
## قرار: بيع أم تصنيع إضافي؟
- **Joint costs غير ذات صلة** (غارقة). قارن **Incremental revenue** مقابل **Incremental cost**.
- مثال: Y يباع عند الانفصال بـ 40,000. بعد المعالجة يباع بـ 65,000 بتكلفة إضافية 18,000 → الإيراد الإضافي 25,000 − 18,000 = **+7,000** فنكمل التصنيع.
## المنتجات الثانوية (By-products)
- إيرادها محدود. تُعالج: إما كدخل آخر، أو بخصم صافي القيمة من تكلفة المنتج الرئيسي (COGS).
> الخطأ الأشهر: إدخال التكلفة المشتركة في قرار التصنيع الإضافي.
= Allocation = Joint cost × (Product value / Total value)
= Process further if Incremental revenue > Incremental cost`,
{o:['توزع التكاليف المشتركة بالـ Relative sales value','تطبق قرار البيع أو التصنيع الإضافي','تعالج By-products'],
c:[['Split-off point؟','النقطة التي تنفصل عندها المنتجات المشتركة.'],['هل Joint cost ذات صلة بقرار التصنيع الإضافي؟','لا.'],['Relative sales value؟','توزيع حسب قيمة البيع عند الانفصال.'],['By-product؟','منتج ثانوي قيمته صغيرة.'],['قاعدة التصنيع الإضافي؟','الإيراد الإضافي > التكلفة الإضافية.']],
q:[[`Joint costs 100,000. Sales value at split-off: X 60,000, Y 40,000. Joint cost allocated to X using relative sales value is:`,[`60,000`,`50,000`,`40,000`,`100,000`],0,`100,000 × 60/100 = 60,000.`],
[`Product Y sells for 40,000 at split-off or 65,000 after further processing costing 18,000. The company should:`,[`Process further (gain 7,000)`,`Sell at split-off (gain 7,000)`,`Process further (loss 7,000)`,`Be indifferent`],0,`25,000 − 18,000 = 7,000 ربح إضافي.`],
[`Which cost is irrelevant to the decision to process further?`,[`Joint costs incurred before split-off`,`Additional processing costs`,`Incremental revenue`,`Additional packaging`],0,`التكلفة المشتركة غارقة.`],
[`The split-off point is the point at which:`,[`Joint products become separately identifiable`,`Production begins`,`Products are sold`,`Costs become fixed`],0,`عند الانفصال تظهر المنتجات المنفصلة.`],
[`By-product net revenue is often:`,[`Deducted from the main product's cost or reported as other income`,`Added to joint costs`,`Ignored`,`Allocated using physical measures`],0,`يعالج كدخل آخر أو يخصم من التكلفة.`]]})
]},

{id:'cma1E', topics:[
T('c1e1','Governance, Risk & Compliance: COSO & SOX','الحوكمة والمخاطر والالتزام: COSO وSOX',
`## COSO Internal Control (2013)
- **5 مكونات**: Control environment، Risk assessment، Control activities، Information & communication، Monitoring. وتحتها **17 مبدأ**.
- مثال Control environment: النزاهة، لجنة المراجعة، تفويض الصلاحيات (Tone at the top).
- Control activities: الموافقات، المطابقات، فصل المهام، ضوابط الأصول، ضوابط IT.
## أنواع الضوابط
- **Preventive** (تمنع)، **Detective** (تكتشف)، **Corrective** (تصلح)، **Compensating** (تعوض ضعفًا).
## قانون Sarbanes-Oxley (SOX)
- **302**: المدير التنفيذي والمالي يشهدان على القوائم وعلى فعالية الضوابط.
- **404**: (a) تقييم الإدارة لفعالية ICFR، (b) شهادة المراجع الخارجي (للشركات الكبيرة).
- **301**: لجنة المراجعة مستقلة. **906**: عقوبات جنائية على الشهادة الكاذبة. **PCAOB** يراقب المراجعين.
## الاحتيال والمراجعة الداخلية
- **Fraud triangle**: Pressure، Opportunity، Rationalization. العلاج الأقوى: تقليل الفرصة بالضوابط.
- **Three lines**: الإدارة التشغيلية، إدارة المخاطر والالتزام، المراجعة الداخلية (مستقلة وتتبع لجنة المراجعة).
- **ERM (COSO 2017)**: ربط المخاطر بالاستراتيجية والأداء.
> حدود أي نظام رقابة: التواطؤ، تجاوز الإدارة، الأخطاء البشرية، وتكلفة الضبط مقابل منفعته.`,
{o:['تحفظ مكونات COSO الخمسة','تفرّق بين 302 و404','تصنف الضوابط وتحدد الفرص للاحتيال'],
c:[['مكونات COSO؟','Control environment, Risk assessment, Control activities, Info & communication, Monitoring.'],['SOX 302؟','شهادة الإدارة على القوائم والضوابط.'],['SOX 404؟','تقييم ICFR وشهادة المراجع الخارجي.'],['Fraud triangle؟','ضغط، فرصة، تبرير.'],['Preventive vs Detective؟','Preventive تمنع الخطأ، Detective تكتشفه بعد الحدوث.']],
q:[[`Which COSO component includes the tone at the top and the integrity of management?`,[`Control environment`,`Monitoring activities`,`Risk assessment`,`Information and communication`],0,`بيئة الرقابة تحدد النغمة العليا.`],
[`SOX Section 302 requires:`,[`CEO and CFO certification of financial statements and controls`,`Management and auditor assessment of ICFR`,`Criminal penalties only`,`Rotation of auditors`],0,`302 شهادة الإدارة. أما 404 فتقييم ICFR.`],
[`Reconciling the bank statement monthly is primarily a:`,[`Detective control`,`Preventive control`,`Corrective control`,`Compensating control`],0,`المطابقة تكتشف الأخطاء بعد حدوثها.`],
[`Which element of the fraud triangle is most directly reduced by strong internal controls?`,[`Opportunity`,`Pressure`,`Rationalization`,`Motivation`],0,`الضوابط تقلل الفرصة.`],
[`The internal audit function should report functionally to:`,[`The audit committee`,`The CFO`,`The controller`,`Operations management`],0,`الاستقلال يتطلب التبعية لجنة المراجعة.`]]}),

T('c1e2','System Controls & Security','ضوابط الأنظمة والأمن',
`## ضوابط تقنية المعلومات العامة (GITC)
- **Access**: كلمات مرور قوية، MFA، أقل صلاحيات (Least privilege)، مراجعة دورية للصلاحيات.
- **Change management**: اختبار وموافقة قبل نقل أي تعديل للإنتاج، وفصل بيئة التطوير عن التشغيل.
- **Operations**: نسخ احتياطية، جدولة، مراقبة، استمرارية الأعمال.
## ضوابط التطبيقات
- **Input**: edit checks، validation، **check digit**، completeness check، مطابقة المستندات.
- **Processing**: **Batch totals**، run-to-run totals، sequence check.
- **Output**: مراجعة وتوزيع مقيد.
## الأمن
- **CIA**: Confidentiality، Integrity، Availability.
- **التشفير**: Symmetric (مفتاح واحد، أسرع)، Asymmetric (مفتاح عام وخاص، أنسب للتبادل الآمن).
- تهديدات: Phishing، Ransomware، Malware، DDoS، Social engineering.
- **Firewall**، **IDS/IPS**، **Patching**، **Network segmentation**.
## استمرارية الأعمال
- **RTO** (زمن التعافي المقبول)، **RPO** (فقد البيانات المقبول). مواقع بديلة: **Hot** (جاهز فورًا)، **Warm**، **Cold**.
## أطر
- **COBIT** لحوكمة IT. ISO 27001 للأمن.
> فصل المهام الأساسي: من يوافق ≠ من يسجل ≠ من يحتفظ بالأصل ≠ من يطابق.`,
{o:['تفرّق بين GITC وضوابط التطبيقات','تحفظ CIA','تحدد RTO/RPO ونوع الموقع البديل'],
c:[['CIA؟','Confidentiality, Integrity, Availability.'],['Batch total؟','مجموع مرجعي لمجموعة مستندات للتحقق من اكتمال المعالجة.'],['RTO؟','أقصى زمن لتعافي النظام.'],['RPO؟','أقصى فقد بيانات مقبول.'],['Least privilege؟','أقل صلاحيات لازمة للمهمة.']],
q:[[`A control that verifies the last digit of an account number is a:`,[`Check digit (input control)`,`Batch total (processing control)`,`Backup control`,`Output control`],0,`Check digit ضابط إدخال.`],
[`A hot site is a backup facility that:`,[`Is fully equipped and can take over almost immediately`,`Has only space and power`,`Requires weeks to configure`,`Stores only paper records`],0,`Hot site جاهز مباشرة.`],
[`Recovery point objective (RPO) refers to:`,[`The maximum acceptable data loss measured in time`,`The time to restore the system`,`The cost of recovery`,`The number of backups`],0,`RPO فقد البيانات المقبول.`],
[`Which control best addresses unauthorized changes to production programs?`,[`Change management with separation of development and production`,`Batch totals`,`Check digits`,`Output review`],0,`إدارة التغيير تمنع النشر غير المصرح.`],
[`Which type of encryption uses a public key and a private key?`,[`Asymmetric`,`Symmetric`,`Hashing`,`Tokenization`],0,`Asymmetric يستخدم زوج مفاتيح.`]]})
]},

{id:'cma1F', topics:[
T('c1f1','Information Systems & Data Governance','نظم المعلومات وحوكمة البيانات',
`## نظم المعلومات
- **AIS** تجمع وتعالج المعاملات المالية. **ERP** تدمج المالية والمشتريات والمخزون والموارد البشرية في قاعدة بيانات واحدة.
- **دورات الأعمال**: الإيراد، المصروفات (المشتريات والدفع)، التحويل (الإنتاج)، التمويل، الموارد البشرية.
## قواعد البيانات
- **Relational DB**: جداول، **Primary key** (يعرّف السجل)، **Foreign key** (يربط بجدول آخر)، **Normalization** لتقليل التكرار.
- **Data warehouse**: بيانات منظمة للتحليل التاريخي. **Data lake**: بيانات خام متنوعة (منظمة وغير منظمة).
## حوكمة البيانات
- أدوار: **Data owner** (مسؤول قرار)، **Data steward** (جودة ومعايير)، **Data custodian** (حفظ وأمن).
- أبعاد الجودة: **Accuracy، Completeness، Consistency، Timeliness، Validity، Uniqueness**.
- دورة حياة البيانات: إنشاء، تخزين، استخدام، مشاركة، أرشفة، إتلاف.
- لوائح الخصوصية مثل GDPR تتطلب الحد الأدنى من البيانات والموافقة وحق المحو.
> تقارير الـ CFO لا تكون أفضل من بياناتها المصدرية: بنية الأكواد وقواعد الإدخال تحدد الجودة.`,
{o:['تميز بين AIS وERP','تفهم المفاتيح وتفرق بين Warehouse وLake','تحدد أدوار حوكمة البيانات وأبعاد الجودة'],
c:[['Primary key؟','معرف فريد للسجل.'],['Foreign key؟','عمود يربط بالمفتاح الأساسي لجدول آخر.'],['Data steward؟','مسؤول جودة ومعايير البيانات.'],['Data lake؟','مخزن بيانات خام متنوعة.'],['أبعاد جودة البيانات؟','دقة، اكتمال، اتساق، توقيت، صلاحية، تفرد.']],
q:[[`In a relational database, a field in one table that references the primary key of another table is a:`,[`Foreign key`,`Primary key`,`Index`,`Attribute only`],0,`المفتاح الأجنبي يربط الجداول.`],
[`Which data governance role is responsible for data quality standards and definitions?`,[`Data steward`,`Data custodian`,`Data owner only`,`Database administrator`],0,`Steward مسؤول عن المعايير والجودة.`],
[`Which statement best describes a data lake?`,[`Stores raw data in various formats for later analysis`,`Stores only structured reporting data`,`Is a paper archive`,`Is a backup system`],0,`Data lake يخزن بيانات خام متنوعة.`],
[`An ERP system primarily:`,[`Integrates business functions on a shared database`,`Only produces the financial statements`,`Replaces the auditor`,`Provides network security`],0,`ERP يدمج الوظائف.`],
[`Data that is accurate but missing required fields has a problem of:`,[`Completeness`,`Timeliness`,`Uniqueness`,`Validity`],0,`الحقول الناقصة مشكلة اكتمال.`]]}),

T('c1f2','Technology-enabled Finance & Data Analytics','التحول المالي التقني وتحليلات البيانات',
`## تقنيات
- **RPA**: روبوتات برمجية لمهام قواعدية متكررة (مطابقة، إدخال).
- **AI/ML**: تنبؤ، اكتشاف شذوذ. **Cloud**: SaaS (برنامج)، PaaS (منصة)، IaaS (بنية).
- **Blockchain**: دفتر موزع غير قابل للتعديل. **Process mining**: اكتشاف مسار العملية الفعلي من السجلات.
- **Close automation** وتقارير آنية وقرارات بالبيانات.
## أنواع التحليلات
- **Descriptive** (ماذا حدث؟)، **Diagnostic** (لماذا؟)، **Predictive** (ماذا سيحدث؟)، **Prescriptive** (ماذا نفعل؟).
## ETL والتصور
- **ETL**: Extract، Transform، Load. جودة البيانات قبل التحليل.
- اختيار الرسم: **Bar** للمقارنة، **Line** للاتجاه، **Scatter** للعلاقة، **Pie** (استخدام محدود) للأجزاء من كل.
- **Big data**: Volume، Velocity، Variety (وVeracity).
## إحصاء أساسي
- **Correlation لا يعني Causation**. **R²** يفسر نسبة التباين. تفسير المتوسط والانحراف المعياري.
> تطبيق عملي: تحليل ربحية الأصناف (Menu engineering) بالرسم Scatter بين المبيعات والهامش.`,
{o:['تحدد استخدامات RPA وAI وBlockchain','تصنف أنواع التحليلات الأربعة','تختار الرسم المناسب','تفرّق بين Correlation وCausation'],
c:[['أنواع التحليلات؟','Descriptive, Diagnostic, Predictive, Prescriptive.'],['RPA؟','روبوت برمجي لأتمتة مهام متكررة.'],['ETL؟','Extract, Transform, Load.'],['Scatter plot يناسب؟','إظهار العلاقة بين متغيرين.'],['Correlation vs Causation؟','الارتباط لا يثبت السببية.']],
q:[[`Analytics that answers "What should we do?" is:`,[`Prescriptive`,`Descriptive`,`Diagnostic`,`Predictive`],0,`Prescriptive يوصي بإجراء.`],
[`Which chart is most appropriate to show the relationship between two numeric variables?`,[`Scatter plot`,`Pie chart`,`Line chart`,`Stacked bar`],0,`Scatter يظهر العلاقة.`],
[`Software robots performing rule-based repetitive tasks such as invoice matching are:`,[`Robotic process automation`,`Blockchain`,`Data warehousing`,`Cloud computing`],0,`هذه RPA.`],
[`A high correlation between ice cream sales and drownings most clearly illustrates that:`,[`Correlation does not imply causation`,`Ice cream causes drowning`,`The data is invalid`,`Sales should be reduced`],0,`متغير ثالث (الطقس) يفسرهما.`],
[`In ETL, the T stands for:`,[`Transform`,`Transfer`,`Track`,`Test`],0,`Extract, Transform, Load.`]]})
]}

]}]}]
});
