CFO.addPack({id:'cma2b', ver:'2026.11.3', date:'2026-11-24', name:'CMA Part 2 Deep Dive — 2C, 2D, 2E, 2F',
news:['2026.11.3 — CMA Part 2 Deep Dive (2C–2F): القرارات والمخاطر والاستثمار والأخلاقيات بأمثلة محلولة.'],
tracks:[{id:'cma', parts:[{id:'cma2', secs:[

{id:'cma2C', topics:[
T('c2c1','Cost/Volume/Profit Analysis','تحليل التكلفة والحجم والربح CVP',
`## الأساس
- **Contribution margin (CM)** = السعر − التكلفة المتغيرة. **CM ratio** = CM ÷ السعر.
- مثال: سعر 50، متغير 30، ثابت 100,000 → CM = 20 (40%).
## معادلات
- **Break-even units** = Fixed ÷ CM = 100,000 ÷ 20 = **5,000 وحدة**. **Break-even sales** = Fixed ÷ CM ratio = **250,000**.
- **هدف ربح 60,000 قبل الضريبة**: (100,000 + 60,000) ÷ 20 = **8,000 وحدة**.
- **هدف ربح بعد الضريبة 54,000 بضريبة 40%**: الربح قبل الضريبة = 54,000 ÷ 0.6 = 90,000 → (100,000 + 90,000) ÷ 20 = **9,500 وحدة**.
- **Margin of safety** عند 8,000 وحدة = (8,000 − 5,000) ÷ 8,000 = **37.5%**.
- **DOL** = CM الكلي ÷ الربح التشغيلي = 160,000 ÷ 60,000 = **2.67** (زيادة المبيعات 10% ترفع الربح 26.7%).
## أكثر من منتج
- مزيج مبيعات A:B = 3:1، CM للوحدة A=8 وB=12 → **متوسط CM مرجح = 9**. Break-even = 100,000 ÷ 9 = **11,111 وحدة**، منها A ≈ 8,333 وB ≈ 2,778.
- تغيّر المزيج نحو المنتج الأقل هامشًا يرفع نقطة التعادل.
## افتراضات CVP
- ثبات السعر والتكلفة المتغيرة للوحدة، وتصنيف التكلفة إلى ثابتة ومتغيرة داخل **Relevant range**، وثبات المزيج، وتساوي الإنتاج والمبيعات.
> في المطاعم: التكلفة الثابتة (إيجار، رواتب) فوق حد معين تجعل نقطة التعادل اليومية معيارًا للتشغيل.
= BE units = Fixed / CM
= Target units = (Fixed + Target profit) / CM
= DOL = CM / Operating income`,
{o:['تحسب نقطة التعادل والربح المستهدف','تحسب هامش الأمان وDOL','تتعامل مع مزيج منتجات'],
f:[['Break-even units','Fixed / CM per unit',''],['Target (after-tax)','(Fixed + NI/(1−t)) / CM','']],
c:[['CM ratio؟','CM ÷ سعر البيع.'],['DOL؟','CM الكلي ÷ الربح التشغيلي.'],['Margin of safety؟','(المبيعات − التعادل) ÷ المبيعات.'],['هل تغيير المزيج يؤثر؟','نعم، يغير متوسط CM ونقطة التعادل.'],['افتراض Relevant range؟','التكاليف ثابتة أو متغيرة داخل نطاق نشاط محدد.']],
q:[[`Price 50, variable cost 30, fixed costs 100,000. Break-even units are:`,[`5,000`,`2,000`,`3,333`,`10,000`],0,`100,000 ÷ 20 = 5,000.`],
[`Using the same data, units needed to earn a pre-tax profit of 60,000 are:`,[`8,000`,`3,000`,`5,000`,`7,500`],0,`(100,000+60,000)/20 = 8,000.`],
[`Target after-tax profit is 54,000 and the tax rate is 40%. Units required are:`,[`9,500`,`8,000`,`7,700`,`10,000`],0,`54,000/0.6 = 90,000 قبل الضريبة. (100,000+90,000)/20 = 9,500.`],
[`At 8,000 units (break-even 5,000), the margin of safety percentage is:`,[`37.5%`,`62.5%`,`60%`,`40%`],0,`3,000/8,000 = 37.5%.`],
[`Sales mix is 3 units of A (CM 8) to 1 unit of B (CM 12). Weighted-average CM per unit is:`,[`9`,`10`,`8`,`20`],0,`(3×8 + 1×12)/4 = 9.`]]}),

T('c2c2','Marginal Analysis & Relevant Costs','التحليل الحدي والتكاليف ذات الصلة',
`## قاعدة الصلة
- **Relevant cost**: مستقبلية + تختلف بين البدائل. **Sunk cost** و**Allocated fixed cost** غير الملغاة غير ذات صلة. **Opportunity cost** ذات صلة.
## قرارات
- **طلب خاص (Special order)**: 1,000 وحدة بسعر 38 مقابل تكلفة متغيرة 30 مع طاقة فائضة → ربح إضافي **8,000**. لو الطاقة كاملة فأضف تكلفة الفرصة الضائعة.
- **Make or buy**: تصنيع داخلي: مواد 4 + عمالة 3 + أعباء متغيرة 2 + ثابت قابل للتجنب 2 = **11** مقابل شراء 12 → **صنّع** (يوفر 1 للوحدة). الثابت غير القابل للتجنب (3) لا يدخل.
- **إلغاء قسم**: قارن CM المفقود بالتكاليف الثابتة القابلة للتجنب.
- **Sell or process further**: الإيراد الإضافي مقابل التكلفة الإضافية، وتجاهل التكلفة المشتركة.
- **Constrained resource**: رتّب المنتجات بـ **CM لكل وحدة من المورد النادر**. منتج X: CM 20، ساعة آلة 4 → 5 للساعة. منتج Y: CM 15، ساعة آلة 2 → **7.5 للساعة**. الأفضلية لـ Y.
## Cost-Volume decisions
- Linear programming لتحديد المزيج الأمثل تحت قيود متعددة (Shadow price لقيمة وحدة إضافية من القيد).
> أي رقم سيحدث بغض النظر عن القرار فهو غير ذي صلة.
= Constrained resource rank = CM per unit / Units of scarce resource`,
{o:['تحدد التكلفة ذات الصلة','تقيّم الطلب الخاص وMake-or-buy','ترتّب المنتجات تحت قيد مورد نادر'],
c:[['Sunk cost؟','تكلفة مضت ولا تتغير بالقرار.'],['Opportunity cost؟','المنفعة الضائعة من أفضل بديل. ذات صلة.'],['Constrained resource؟','تفاضل بـ CM لكل وحدة من المورد النادر.'],['Make-or-buy: ماذا نستبعد؟','الثابت غير القابل للتجنب.'],['Shadow price؟','قيمة وحدة إضافية من القيد.']],
q:[[`Idle capacity exists. A special order of 1,000 units at 38 each; variable cost is 30 per unit. Incremental profit is:`,[`8,000`,`38,000`,`30,000`,`0`],0,`(38−30)×1,000 = 8,000.`],
[`Make cost: materials 4, labor 3, variable overhead 2, avoidable fixed 2, unavoidable fixed allocation 3. Supplier price 12. The company should:`,[`Make; saving 1 per unit`,`Buy; saving 3 per unit`,`Buy; saving 1 per unit`,`Make; saving 4 per unit`],0,`التكلفة ذات الصلة 11 < 12.`],
[`Product X CM 20 using 4 machine hours; product Y CM 15 using 2 machine hours; machine hours are scarce. Priority goes to:`,[`Y (7.5 per hour)`,`X (5 per hour)`,`X because higher CM`,`Equal priority`],0,`7.5 > 5 لكل ساعة.`],
[`Which is irrelevant to a decision to continue or drop a product?`,[`Allocated unavoidable fixed overhead`,`Avoidable fixed costs`,`Lost contribution margin`,`Opportunity cost of space`],0,`الثابت غير القابل للتجنب لا يتغير بالقرار.`],
[`A shadow price in linear programming measures:`,[`The value of one more unit of a constraint`,`The cost of capital`,`The fixed cost`,`The selling price`],0,`قيمة تخفيف القيد بوحدة.`]]}),

T('c2c3','Pricing','التسعير',
`## عوامل التسعير
- التكلفة، الطلب (المرونة)، المنافسة، الأهداف الاستراتيجية، القيود القانونية (Predatory pricing، Price discrimination).
## طرق
- **Cost-plus**: السعر = التكلفة + هامش. مثال: تكلفة كلية للوحدة 40 عند 10,000 وحدة، وعائد مطلوب 15% على استثمار 500,000 → السعر = (40×10,000 + 0.15×500,000) ÷ 10,000 = **47.50**.
- **Target costing**: Target cost = السعر السوقي − الربح المستهدف. سعر 100 وربح 20% → تكلفة مستهدفة **80**. يُصمم المنتج ليصل إليها (Value engineering).
- **Time and material**: عمالة بمعدل ساعي شامل + مواد بهامش.
- **Variable-cost pricing / Marginal**: أدنى سعر يغطي المتغير في الطلبات الخاصة.
## الاستراتيجيات
- **Price skimming** (سعر عالٍ أولًا)، **Penetration** (سعر منخفض لاكتساب حصة)، **Bundling**، **Loss leader**، **Dynamic pricing**.
## المرونة
- **Price elasticity** = %ΔQ ÷ %ΔP. مرونة أكبر من 1 تعني أن خفض السعر يرفع الإيراد.
> في مطعم: الأطباق ذات المرونة العالية (بيتزا ماركة قوية مقابل مشروبات) تُسعَّر بحسب المنافسة، أما الإضافات فبالقيمة المدركة.
= Cost-plus price = (Total cost + Required return) / Units
= Target cost = Market price − Target profit`,
{o:['تحسب سعرًا بطريقة Cost-plus','تحسب Target cost','تفرّق بين Skimming وPenetration'],
f:[['Target cost','Price − Target profit','']],
c:[['Target costing؟','السعر السوقي ناقص الربح المستهدف يحدد التكلفة المسموحة.'],['Skimming؟','سعر مرتفع في البداية ثم يخفض.'],['Penetration؟','سعر منخفض لاكتساب حصة سوقية.'],['مرونة > 1؟','الطلب مرن، خفض السعر يزيد الإيراد.'],['Predatory pricing؟','تسعير تحت التكلفة لإقصاء المنافسين.']],
q:[[`Full cost per unit is 40 at 10,000 units; required return is 15% on invested capital of 500,000. The cost-plus price per unit is:`,[`47.50`,`46.00`,`55.00`,`40.00`],0,`(400,000+75,000)/10,000 = 47.5.`],
[`Market price is 100 and the required profit is 20% of price. The target cost is:`,[`80`,`120`,`20`,`100`],0,`100 − 20 = 80.`],
[`A firm launching an innovative product sets a high initial price and lowers it over time. This is:`,[`Price skimming`,`Penetration pricing`,`Predatory pricing`,`Cost-plus pricing`],0,`Skimming.`],
[`Demand is elastic (elasticity > 1). A price decrease will:`,[`Increase total revenue`,`Decrease total revenue`,`Leave revenue unchanged`,`Reduce quantity demanded`],0,`الكمية تزيد بنسبة أكبر.`],
[`Pricing below cost to drive out competitors is known as:`,[`Predatory pricing`,`Price skimming`,`Bundling`,`Target pricing`],0,`مخالف لقوانين المنافسة غالبًا.`]]})
]},

{id:'cma2D', topics:[
T('c2d1','Enterprise Risk Management','إدارة المخاطر المؤسسية',
`## الإطار
- **COSO ERM (2017)**: الحوكمة والثقافة، الاستراتيجية وتحديد الأهداف، الأداء، المراجعة، المعلومات والاتصال. يربط المخاطر بـ **Strategy & Performance**.
- **ISO 31000**: مبادئ وإطار وعملية.
## العملية
- تحديد (Identify) ← تقييم (Assess: احتمال × أثر) ← استجابة ← مراقبة.
- **Risk appetite**: مستوى المخاطر الذي تقبله المنظمة لتحقيق الأهداف. **Risk tolerance**: الانحراف المقبول. **Inherent risk** قبل الضوابط، و**Residual** بعدها.
## استجابات المخاطر
- **Avoid، Reduce (Mitigate)، Share/Transfer (تأمين، تعاقد، تحوط)، Accept**.
## القياس
- **Expected loss** = الاحتمال × الأثر: 5% × 2,000,000 = **100,000**.
- **VaR** (Value at Risk): أقصى خسارة متوقعة بدرجة ثقة. محفظة 10 مليون، تذبذب يومي 1%، ثقة 95% (z = 1.645): VaR يومي = 10,000,000 × 1% × 1.645 = **164,500**. لـ 10 أيام: ×√10 ≈ **520,200**.
- **Scenario analysis، Stress testing، Sensitivity، Monte Carlo**.
## أنواع المخاطر
- استراتيجية، تشغيلية، مالية، التزام، سمعة، سيبرانية، **Supply chain**.
> الـ CFO يربط **Risk register** بخطة الموازنة والتأمين وسياسة التحوط.
= Expected loss = Probability × Impact
= VaR = Position × σ × z`,
{o:['تحدد استجابات المخاطر الأربعة','تحسب Expected loss وVaR','تفرّق بين Appetite وTolerance وInherent وResidual'],
f:[['Expected loss','Probability × Impact',''],['Parametric VaR','Value × σ × z','']],
c:[['استجابات المخاطر؟','Avoid, Reduce, Share, Accept.'],['Risk appetite؟','مستوى المخاطر المقبول لتحقيق الأهداف.'],['Residual risk؟','المخاطر المتبقية بعد الضوابط.'],['VaR؟','أقصى خسارة بدرجة ثقة خلال فترة.'],['Stress testing؟','اختبار الأثر في ظروف متطرفة.']],
q:[[`Probability of a loss is 5% and the impact is 2,000,000. The expected loss is:`,[`100,000`,`40,000,000`,`1,000,000`,`10,000`],0,`0.05 × 2,000,000 = 100,000.`],
[`A portfolio of 10,000,000 has daily standard deviation of 1%. The one-day 95% VaR (z = 1.645) is:`,[`164,500`,`100,000`,`1,645,000`,`16,450`],0,`10M × 1% × 1.645 = 164,500.`],
[`Purchasing insurance against a fire is which type of risk response?`,[`Share/transfer`,`Avoid`,`Accept`,`Reduce`],0,`نقل المخاطر لشركة التأمين.`],
[`Risk remaining after controls are applied is the:`,[`Residual risk`,`Inherent risk`,`Risk appetite`,`Risk tolerance`],0,`المتبقي بعد الضوابط.`],
[`Under COSO ERM (2017), risk management is most closely integrated with:`,[`Strategy and performance`,`Only compliance`,`Only internal audit`,`Only insurance`],0,`النسخة الجديدة تربط المخاطر بالاستراتيجية والأداء.`]]})
]},

{id:'cma2E', topics:[
T('c2e1','Capital Budgeting: Process & Cash Flows','عملية الموازنة الرأسمالية والتدفقات النقدية',
`## الخطوات
- تحديد الفرص، تقدير التدفقات، التقييم بالمعايير، الاختيار (مع **Capital rationing**)، التنفيذ، **Post-audit**.
## التدفقات المناسبة
- **Incremental cash flows** فقط. تجاهل **Sunk costs**، وأضف **Opportunity costs** والآثار الجانبية (Cannibalization) وتغيير **Working capital**.
- تجاهل الفوائد (تُحتسب في معدل الخصم). الإهلاك غير نقدي لكنه يخلق **وفرًا ضريبيًا**.
## التدفق التشغيلي بعد الضريبة
- مثال: إيراد 80,000، مصروف نقدي 30,000، إهلاك 20,000، ضريبة 30%.
- **OCF** = (80,000 − 30,000 − 20,000) × 0.7 + 20,000 = **41,000**. أو = (Rev − Cash exp) × (1−t) + Dep × t = 50,000×0.7 + 6,000 = 41,000.
## التخلص من الأصل
- بيع بـ 15,000 بقيمة دفترية 10,000 وضريبة 30%: صافي = 15,000 − 0.3×5,000 = **13,500**.
- يُسترد رأس المال العامل في نهاية المشروع.
## الاستثمار الأولي
- سعر الشراء + الشحن والتركيب + زيادة رأس المال العامل − بيع أصل قديم (بعد الضريبة).
> فخ: تضمين الفوائد أو التكاليف المغمورة أو تجاهل رأس المال العامل.
= OCF = (Rev − Cash exp)(1−t) + Dep × t
= After-tax salvage = Sale − t × (Sale − BV)`,
{o:['تحدد التدفقات ذات الصلة','تحسب OCF بالطريقة الضريبية','تحسب صافي التخلص من الأصل بعد الضريبة'],
f:[['OCF','(R − C)(1 − t) + Dep × t','']],
c:[['هل تدخل الفوائد في تدفقات المشروع؟','لا، في معدل الخصم.'],['الإهلاك يؤثر عبر؟','الوفر الضريبي.'],['Post-audit؟','مقارنة النتائج الفعلية بالمتوقعة بعد التنفيذ.'],['Cannibalization؟','خسارة مبيعات منتج قائم بسبب الجديد.'],['Capital rationing؟','تقييد الميزانية يفرض اختيار أفضل المشروعات.']],
q:[[`Revenue 80,000, cash expenses 30,000, depreciation 20,000, tax rate 30%. After-tax operating cash flow is:`,[`41,000`,`35,000`,`21,000`,`50,000`],0,`(30,000)×0.7 + 20,000 = 41,000.`],
[`An asset with book value 10,000 is sold for 15,000. The tax rate is 30%. After-tax proceeds are:`,[`13,500`,`15,000`,`10,000`,`16,500`],0,`15,000 − 0.3×5,000 = 13,500.`],
[`Which of the following is excluded from incremental cash flows in capital budgeting?`,[`Previously incurred research cost (sunk)`,`Increase in working capital`,`Opportunity cost of an existing building`,`Cannibalized sales`],0,`التكلفة المغمورة لا تؤثر.`],
[`Interest expense on project financing is excluded from cash flows because:`,[`It is reflected in the discount rate`,`It is non-cash`,`It is not tax deductible`,`It is a sunk cost`],0,`تكلفة التمويل في معدل الخصم.`],
[`A post-audit of a capital project compares:`,[`Actual results with projections`,`Two competing projects`,`Debt and equity costs`,`Tax and book depreciation`],0,`تقييم لاحق وتعلم.`]]}),

T('c2e2','NPV, IRR, Payback, PI & Risk','NPV وIRR والاسترداد ومؤشر الربحية والمخاطر',
`## مثال متكامل
- استثمار 100,000، تدفقات 30,000 / 40,000 / 50,000 / 30,000، معدل خصم 10%.
- **NPV** = **18,387** (> 0 فيقبل). **IRR** ≈ **18.0%** (> 10% فيقبل). **PI** = PV للتدفقات ÷ الاستثمار = 118,387 ÷ 100,000 = **1.18**.
- **Payback** = 2 + 30,000 ÷ 50,000 = **2.6 سنة**. **Discounted payback** ≈ **3.1 سنة** (يتجاهل ما بعد الاسترداد).
## الخصائص
- **NPV**: يقيس القيمة المضافة، يفترض إعادة استثمار بمعدل الخصم، قابل للجمع. الأفضل نظريًا.
- **IRR**: معدل يجعل NPV = 0. قد يتعدد مع تدفقات متغيرة الإشارة، ويتعارض مع NPV في المشروعات **المتنافية** (حجم أو توقيت مختلف). **MIRR** يحل مشكلة إعادة الاستثمار.
- **Payback**: يقيس السيولة والمخاطر، ويتجاهل القيمة الزمنية (البسيط) وما بعد الاسترداد.
- **ARR** يستخدم المحاسبة لا التدفق النقدي.
## تفاضل المشروعات
- **Mutually exclusive**: اختر أعلى NPV. **Unequal lives**: **Equivalent annual annuity** = NPV ÷ معامل الدفعة. **Capital rationing**: اختر بحسب PI.
## المخاطر
- **Sensitivity**، **Scenario**، **Simulation (Monte Carlo)**، **Risk-adjusted discount rate** (رفع المعدل للمخاطر الأعلى)، **Certainty equivalent**، **Real options** (التوسع، التأجيل، التخلي).
> قاعدة الامتحان: عند التعارض بين NPV وIRR في مشروعين متنافيين، اتبع **NPV**.
= NPV = Σ CF_t/(1+r)^t − I0
= PI = PV of inflows / I0
= Payback = years before recovery + unrecovered/next CF`,
{o:['تحسب NPV وPI وPayback','تفسر IRR وحدوده وتعارضه مع NPV','تتعامل مع المخاطر في التقييم'],
f:[['NPV','Σ CF/(1+r)^t − I0',''],['PI','PV inflows / Investment','']],
c:[['قاعدة NPV؟','اقبل لو NPV أكبر من صفر.'],['IRR؟','المعدل الذي يجعل NPV = صفر.'],['عند تعارض NPV وIRR؟','اتبع NPV.'],['Payback يتجاهل؟','القيمة الزمنية (البسيط) وما بعد الاسترداد.'],['Real options؟','قيمة مرونة التوسع أو التأجيل أو التخلي.']],
q:[[`Initial investment 100,000; cash inflows 30,000, 40,000, 50,000 and 30,000 in years 1–4; discount rate 10%. NPV is approximately:`,[`18,387`,`50,000`,`28,000`,`0`],0,`PV للتدفقات 118,387 ناقص 100,000.`],
[`Using the same data, the simple payback period is:`,[`2.6 years`,`3.0 years`,`2.0 years`,`3.1 years`],0,`70,000 بعد سنتين، يحتاج 30,000 من 50,000 = 0.6.`],
[`The profitability index for the same project is approximately:`,[`1.18`,`0.84`,`1.50`,`0.18`],0,`118,387 ÷ 100,000.`],
[`Two mutually exclusive projects: NPV ranking and IRR ranking conflict. The firm should choose the project with:`,[`The higher NPV`,`The higher IRR`,`The shorter payback`,`The lower investment`],0,`NPV يعظم الثروة.`],
[`Which technique uses a higher discount rate for riskier projects?`,[`Risk-adjusted discount rate`,`Sensitivity analysis`,`Payback`,`Certainty equivalent`],0,`رفع المعدل ليعكس المخاطرة.`]]})
]},

{id:'cma2F', topics:[
T('c2f1','IMA Statement of Ethical Professional Practice','بيان IMA للممارسة المهنية الأخلاقية',
`## المبادئ (4)
- **Honesty، Fairness، Objectivity، Responsibility**.
## المعايير (4 مجالات)
- **Competence**: الحفاظ على المعرفة، الالتزام بالقوانين والمعايير، إعداد تقارير دقيقة وواضحة وفي وقتها.
- **Confidentiality**: عدم الإفصاح عن المعلومات السرية إلا بتفويض أو واجب قانوني، وعدم استخدامها لمنفعة شخصية.
- **Integrity**: تجنب **تضارب المصالح**، عدم قبول هدايا تؤثر على الحكم، عدم تقويض أهداف المنظمة الأخلاقية، عدم التورط في نشاط يضعف الثقة.
- **Credibility**: عرض المعلومات بعدل وموضوعية، الإفصاح عن كل ما قد يؤثر على فهم المستخدم، والإفصاح عن أي تأخير أو نقص.
## حل النزاع الأخلاقي
- 1) اتبع سياسة المنظمة. 2) ناقش مع **المشرف الأعلى** (ما لم يكن متورطًا). 3) استشر مستشارًا مستقلًا أو IMA hotline. 4) لو استمر النزاع: ارفع للمستوى الأعلى (لجنة المراجعة). 5) قد تحتاج **الاستقالة** وتوثيق الواقعة. استشارة محامٍ قانونية للحقوق.
## أمثلة
- مدير مالي يُطلب منه تأجيل الاعتراف بمصروف لتحقيق هدف الربع → مخالفة **Integrity/Credibility**.
- معرفة ميزانية عميل منافس بحكم العمل واستخدامها → مخالفة **Confidentiality**.
> في الأسئلة: ابدأ بسياسة الشركة ثم المشرف المباشر، ولا تذهب للجهات الخارجية إلا إذا كان ذلك مطلوبًا قانونيًا.`,
{o:['تحفظ المبادئ والمعايير الأربعة','تطبق خطوات حل النزاع الأخلاقي','تحدد المعيار المخالف في موقف'],
c:[['معايير IMA الأربعة؟','Competence, Confidentiality, Integrity, Credibility.'],['أول خطوة في النزاع؟','اتباع سياسة المنظمة ثم المشرف المباشر.'],['إذا كان المشرف متورطًا؟','ارفع للمستوى الأعلى.'],['تضارب المصالح تحت؟','Integrity.'],['الإفصاح الكامل تحت؟','Credibility.']],
q:[[`An accountant is asked by the CFO to delay recognizing an expense to meet a quarterly target. Which IMA standard is most directly violated?`,[`Credibility`,`Confidentiality`,`Competence only`,`None`],0,`تقارير غير عادلة تخالف Credibility (وقد تمس Integrity).`],
[`Using a client's confidential information for personal investment violates:`,[`Confidentiality`,`Competence`,`Credibility`,`Fairness only`],0,`Confidentiality.`],
[`The first step in resolving an ethical conflict is to:`,[`Follow the organization's established policies`,`Resign immediately`,`Contact the press`,`Contact regulators`],0,`ابدأ بسياسات الشركة.`],
[`If the immediate supervisor is involved in the ethical issue, the accountant should:`,[`Escalate to the next higher level of management`,`Ignore the issue`,`Discuss it with colleagues`,`Resign without documentation`],0,`المستوى الأعلى التالي.`],
[`Which is one of the four IMA overarching ethical principles?`,[`Fairness`,`Profitability`,`Efficiency`,`Secrecy`],0,`Honesty, Fairness, Objectivity, Responsibility.`]]}),

T('c2f2','Fraud, Culture, Sustainability & Data Ethics','الاحتيال والثقافة والاستدامة وأخلاقيات البيانات',
`## الاحتيال
- **Fraud triangle**: Pressure، Opportunity، Rationalization. **Fraud diamond** يضيف Capability.
- أنواع (ACFE): **Asset misappropriation** (الأكثر تكرارًا)، **Corruption**، **Financial statement fraud** (الأعلى خسارة).
- إشارات: أسلوب حياة مرتفع، رفض الإجازات، ضوابط ضعيفة، عميل أو مورد وهمي.
- **الرقابة**: فصل المهام، مراجعة مفاجئة، **Whistleblower hotline**، تدوير الوظائف.
## ثقافة أخلاقية
- **Tone at the top**، مدونة سلوك، تدريب، قنوات إبلاغ، حماية المبلغين. SOX يحمي المبلغين ويفرض Code of ethics للمدير المالي.
## FCPA والرشوة
- **Foreign Corrupt Practices Act** يحظر رشوة المسؤولين الأجانب ويطلب دفاتر وضوابط دقيقة.
## الاستدامة والمسؤولية
- **ESG** (بيئي، اجتماعي، حوكمة). **Triple bottom line**: People, Planet, Profit. **Integrated reporting**. **Greenwashing** تضليل بيئي.
- معايير الإفصاح: ISSB وGRI وSASB وTCFD.
## أخلاقيات البيانات
- الخصوصية، الموافقة، الحد الأدنى من البيانات، **Bias** في الخوارزميات، الشفافية، الأمن، والمسؤولية عن القرارات الآلية.
> الاحتيال في القوائم المالية أقل تكرارًا لكنه أكثر تكلفة. اجعل الضوابط مصممة لتقليل **Opportunity**.`,
{o:['تحدد عناصر Fraud triangle والـ Diamond','تفرّق بين أنواع الاحتيال','تربط ESG بالاستدامة','تذكر مبادئ أخلاقيات البيانات'],
c:[['Fraud triangle؟','ضغط، فرصة، تبرير.'],['أكثر أنواع الاحتيال تكرارًا؟','اختلاس الأصول.'],['أعلى تكلفة؟','احتيال القوائم المالية.'],['Triple bottom line؟','People, Planet, Profit.'],['Greenwashing؟','ادعاءات بيئية مضللة.']],
q:[[`Which fraud scheme is generally the most frequent but least costly per case?`,[`Asset misappropriation`,`Financial statement fraud`,`Corruption`,`Bribery of officials`],0,`الاختلاس أكثر تكرارًا وأقل تكلفة.`],
[`Which element of the fraud diamond is added to the fraud triangle?`,[`Capability`,`Greed`,`Secrecy`,`Audit`],0,`القدرة.`],
[`Mandatory vacations and job rotation primarily help to:`,[`Detect fraud and reduce opportunity`,`Increase pay`,`Reduce training cost`,`Improve marketing`],0,`تكشف المخالفات وتقلل الفرصة.`],
[`The triple bottom line refers to:`,[`People, planet and profit`,`Revenue, cost and margin`,`Debt, equity and cash`,`Plan, do and check`],0,`ثلاثية المجتمع والبيئة والربح.`],
[`The Foreign Corrupt Practices Act prohibits:`,[`Bribing foreign officials`,`Foreign investment`,`Currency hedging`,`Tax planning`],0,`رشوة المسؤولين الأجانب.`]]})
]}

]}]}]
});
