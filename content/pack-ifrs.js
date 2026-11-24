CFO.addPack({id:'ifrs', ver:'2026.11.4', date:'2026-11-24', name:'IFRS Essentials for a CFO',
news:['2026.11.4 — مسار جديد: IFRS Essentials (9 مواضيع) مع ربط بالمعايير المصرية EAS.'],
tracks:[{id:'ifrs', en:'IFRS Essentials', ar:'المعايير الدولية IFRS', icon:'§', desc:'أهم معايير IFRS للمدير المالي مع أمثلة محلولة. المعايير المصرية EAS قريبة جدًا لكنها ليست مطابقة تمامًا، فراجع نص EAS المعتمد قبل التطبيق.',
parts:[{id:'ifrs1', en:'Core Standards', ar:'المعايير الأساسية', secs:[

{id:'ifrsA', en:'Presentation & Revenue', ar:'العرض والإيراد', w:'', topics:[
T('i-pres','Presentation: IAS 1, IFRS 18 & IAS 7','العرض: IAS 1 وIFRS 18 وقائمة التدفقات',
`## IAS 1 (الحالي)
- مجموعة كاملة: قائمة المركز المالي، الأرباح أو الخسائر وOCI، التغيرات في حقوق الملكية، التدفقات النقدية، الإيضاحات.
- **الاستمرارية (Going concern)** و**الاستحقاق** وتصنيف متداول/غير متداول (حق غير مشروط في تأجيل السداد 12 شهرًا بعد التاريخ).
## IFRS 18 (يحل محل IAS 1، يسري من 1 يناير 2027)
- ثلاث فئات في قائمة الأرباح: **التشغيل، الاستثمار، التمويل**، وإجمالي فرعي إلزامي: **Operating profit**.
- إفصاح عن **Management-defined performance measures (MPMs)** في الإيضاحات مع مطابقة.
## IAS 7
- التشغيل / الاستثمار / التمويل. الفوائد والتوزيعات المدفوعة والمقبوضة: تُصنَّف بسياسة ثابتة.
- الطريقة غير المباشرة: يُبدأ من الربح قبل الضريبة وتُعدَّل البنود غير النقدية وتغيرات رأس المال العامل.
## مقارنة سريعة
- US GAAP يقيّد الفوائد المدفوعة في التشغيل، وIFRS يسمح بالتشغيل أو التمويل.
> فخ: IAS 1 لا يسمح ببنود «غير عادية» (Extraordinary) في القائمة.`,
{o:['تحدد مكونات القوائم الكاملة','تفهم فئات IFRS 18 وMPMs','تصنف بنود التدفقات النقدية'],
c:[['فئات الأرباح في IFRS 18؟','تشغيل، استثمار، تمويل.'],['MPMs؟','مقاييس أداء حددتها الإدارة وتُفصح مع مطابقة.'],['الفوائد المدفوعة في IFRS؟','تشغيلي أو تمويلي بسياسة ثابتة.'],['البنود الاستثنائية؟','غير مسموحة في IAS 1.'],['الطريقة غير المباشرة تبدأ من؟','الربح قبل الضريبة.']],
q:[[`Under IFRS 18, the statement of profit or loss classifies income and expenses into:`,[`Operating, investing and financing categories`,`Current and non-current categories`,`Realized and unrealized categories`,`Ordinary and extraordinary categories`],0,`IFRS 18 يقسم البنود إلى تشغيل واستثمار وتمويل.`],
[`Under IFRS, interest paid may be classified in the cash flow statement as:`,[`Operating or financing`,`Investing only`,`Financing only`,`Operating only`],0,`IFRS يسمح بالتشغيلي أو التمويلي بسياسة ثابتة.`],
[`Extraordinary items in the income statement are:`,[`Prohibited under IFRS`,`Required under IFRS`,`Shown after tax under IFRS`,`Shown in OCI`],0,`IAS 1 لا يسمح بعرض بنود استثنائية.`],
[`A liability is classified as current if the entity does not have:`,[`The right at the reporting date to defer settlement for at least 12 months`,`A bank guarantee`,`Positive working capital`,`A fixed interest rate`],0,`غياب حق التأجيل 12 شهرًا يجعله متداولًا.`],
[`In the indirect method, the starting point is usually:`,[`Profit before tax`,`Cash receipts from customers`,`Total assets`,`Retained earnings`],0,`ثم تُعدّل البنود غير النقدية.`]]}),

T('i-rev','IFRS 15 Revenue from Contracts','IFRS 15 الإيراد من العقود',
`## الخطوات الخمس
- 1) تحديد العقد. 2) التزامات الأداء المتمايزة. 3) سعر المعاملة (يشمل المقابل المتغير بقيد Constraint). 4) التوزيع على الالتزامات بنسبة **Standalone selling price**. 5) الاعتراف عند الوفاء: **مع مرور الوقت** أو **عند نقطة زمنية**.
## مثال محلول
- باقة: جهاز (SSP 900) + خدمة سنة (SSP 300) بسعر 1,000. التوزيع: الجهاز = 1,000×900/1,200 = **750**، الخدمة = **250** تُعترف على 12 شهرًا (≈ 20.83 شهريًا).
## مقابل متغير
- خصم كمية محتمل: تُقدّر بـ Expected value أو Most likely amount، ولا يُعترف إلا بما لا يُرجّح عكسه (Constraint).
## Principal vs Agent
- **Principal** يعترف بالإيراد إجماليًا (يتحكم في السلعة قبل التسليم). **Agent** يعترف بالعمولة فقط. مثال: منصة توصيل تحصّل مقابل الطعام لحساب المطعم وتأخذ عمولة → غالبًا Agent بالنسبة لقيمة الطعام.
## تكاليف العقد
- تكاليف الحصول على العقد (عمولات) تُرسمل إذا كانت إضافية وقابلة للاسترداد.
> في F&B: برامج الولاء تخلق التزام أداء مستقلًا (Material right) فيُؤجَّل جزء من الإيراد.
= Allocated price = Transaction price × SSP / Σ SSP`,
{o:['تطبق الخطوات الخمس وتوزع سعر باقة','تفرّق بين Principal وAgent','تتعامل مع المقابل المتغير والقيد'],
c:[['أساس توزيع السعر؟','Standalone selling price.'],['Principal يعترف بـ؟','الإيراد الإجمالي.'],['Agent يعترف بـ؟','العمولة (الصافي).'],['Constraint؟','لا يُعترف بمقابل متغير إلا إذا لا يُرجَّح عكسه جوهريًا.'],['برنامج الولاء؟','التزام أداء (Material right) يؤجل جزءًا من الإيراد.']],
q:[[`A device (SSP 900) and a one-year service (SSP 300) are sold together for 1,000. Revenue allocated to the device is:`,[`750`,`900`,`1,000`,`700`],0,`1,000×900/1,200 = 750.`],
[`An entity that does not control the goods before transfer to the customer is:`,[`An agent`,`A principal`,`A distributor with inventory risk`,`A manufacturer`],0,`الوكيل يعترف بالعمولة.`],
[`Variable consideration is included in the transaction price only to the extent that:`,[`A significant reversal of cumulative revenue is not highly probable`,`Cash is received`,`The contract is signed`,`The customer pays in advance`],0,`قيد الاعتراف بالمقابل المتغير.`],
[`Incremental costs of obtaining a contract (e.g., sales commissions) are generally:`,[`Capitalized if expected to be recovered`,`Always expensed`,`Included in revenue`,`Recorded as equity`],0,`ترسمل لو إضافية وقابلة للاسترداد.`],
[`Revenue for a performance obligation satisfied over time is recognized:`,[`As progress toward satisfaction is made`,`When cash is collected`,`At contract signing`,`At contract end only`],0,`حسب مقياس التقدم.`]]})
]},

{id:'ifrsB', en:'Assets', ar:'الأصول', w:'', topics:[
T('i-inv','IAS 2 Inventories & IAS 16 PP&E','IAS 2 المخزون وIAS 16 الأصول الثابتة',
`## المخزون (IAS 2)
- بالأقل من **التكلفة** و**NRV**. الطرق: FIFO وWeighted average وSpecific. **LIFO ممنوع**.
- NRV = سعر البيع − تكاليف الإتمام والبيع. **يُعكس** التخفيض إذا ارتفعت NRV (حتى حد التكلفة الأصلية).
## PP&E (IAS 16)
- التكلفة: سعر الشراء + التكاليف المنسوبة مباشرة + تقدير التفكيك. الفوائد تُرسمل للأصل المؤهل (IAS 23).
- **Component approach**: كل مكوّن ذي عمر مختلف يُهلك منفصلًا (مثلًا مبنى مطبخ مركزي: هيكل، معدات تبريد، تشطيبات).
- النموذج بعد الاعتراف: **Cost** أو **Revaluation** (يُطبق على الفئة كلها).
- مثال إعادة تقييم: قيمة دفترية 800 وعادلة 900 → فائض **100** إلى OCI (Revaluation surplus). لو سبق خسارة اضمحلال على نفس الأصل فيمر ما يعوضها في الأرباح.
- تغيير العمر أو الخردة أو الطريقة: **تقدير محاسبي** (مستقبلي).
## الأصول المحتفظ بها للبيع (IFRS 5)
- تُقاس بالأقل من القيمة الدفترية والقيمة العادلة ناقص تكاليف البيع، ويتوقف إهلاكها.
> الفرق عن US GAAP: إعادة التقييم والـ component approach وعكس الاضمحلال.`,
{o:['تطبق LCNRV وتعرف أن LIFO ممنوع','تفهم Component approach وإعادة التقييم','تعامل التغيرات كتقدير محاسبي'],
c:[['IAS 2 يقيس بـ؟','الأقل من التكلفة وNRV.'],['LIFO؟','ممنوع في IFRS.'],['فائض إعادة التقييم؟','OCI ثم Revaluation surplus.'],['Component approach؟','إهلاك كل مكون مهم منفصلًا.'],['IFRS 5؟','أصول محتفظ بها للبيع: توقف الإهلاك.']],
q:[[`Which inventory cost formula is prohibited by IAS 2?`,[`LIFO`,`FIFO`,`Weighted average`,`Specific identification`],0,`LIFO ممنوع.`],
[`An asset carried at 800 is revalued to fair value of 900 (no prior revaluation losses). The surplus of 100 is recognized in:`,[`Other comprehensive income`,`Profit or loss`,`Retained earnings directly`,`Not recognized`],0,`يذهب إلى OCI.`],
[`Under IAS 16, if parts of an asset have different useful lives, an entity:`,[`Depreciates each significant part separately`,`Uses one rate for all`,`Expenses the parts`,`Revalues only the parts`],0,`Component approach.`],
[`A change in the useful life of an asset is:`,[`A change in estimate applied prospectively`,`A prior period error`,`A change in policy applied retrospectively`,`Not permitted`],0,`تقدير محاسبي.`],
[`Assets classified as held for sale are:`,[`Not depreciated`,`Depreciated at double rate`,`Always revalued upward`,`Recorded at cost only`],0,`IFRS 5 يوقف الإهلاك.`]]}),

T('i-imp','IAS 36 Impairment & IAS 38 Intangibles','IAS 36 الاضمحلال وIAS 38 الأصول غير الملموسة',
`## IAS 36 (خطوة واحدة)
- الخسارة = القيمة الدفترية − **Recoverable amount**، حيث Recoverable = الأعلى من (**FVLCD** و**Value in use**).
- مثال: دفترية 500، FVLCD 380، VIU 420 → Recoverable = **420** → خسارة **80**.
- يتم الاختبار على مستوى **CGU** إذا لم يولد الأصل تدفقات مستقلة. تُوزّع الخسارة أولًا على **الشهرة** ثم على باقي الأصول بنسبة دفترية (لا تقل عن الأعلى من FVLCD وVIU والصفر).
- **عكس الخسارة** مسموح (ما عدا الشهرة) بحد القيمة الدفترية بدون اضمحلال.
- **الشهرة** والأصول غير الملموسة غير محددة العمر: اختبار **سنوي** إلزامي.
## IAS 38
- الاعتراف: قابل للتحديد، مسيطر عليه، منافع مستقبلية.
- **البحث**: مصروف. **التطوير**: يُرسمل إذا تحققت الشروط (جدوى فنية، نية الإكمال، القدرة على الاستخدام، منافع محتملة، موارد كافية، قياس موثوق).
- لا تُرسمل الشهرة المتولدة داخليًا ولا العلامات التجارية المتولدة داخليًا.
> الفرق: US GAAP يعتمد خطوتين وبلا عكس.
= Impairment = Carrying − max(FVLCD, VIU)`,
{o:['تحسب خسارة الاضمحلال','تعرف قواعد العكس وCGU','تفرّق بين البحث والتطوير'],
c:[['Recoverable amount؟','الأعلى من FVLCD وVIU.'],['هل تُعكس خسارة الشهرة؟','لا.'],['اختبار الشهرة؟','سنوي على الأقل.'],['البحث؟','مصروف.'],['CGU؟','أصغر مجموعة أصول تولد تدفقات مستقلة.']],
q:[[`Carrying amount 500, fair value less costs of disposal 380, value in use 420. The impairment loss under IAS 36 is:`,[`80`,`120`,`0`,`100`],0,`الأعلى 420، 500−420 = 80.`],
[`An impairment loss on goodwill under IFRS:`,[`Cannot be reversed`,`Is reversed when value recovers`,`Is reversed for half`,`Is reported in OCI`],0,`شهرة لا تُعكس.`],
[`Internally generated research costs are:`,[`Expensed`,`Capitalized`,`Deferred over 5 years`,`Added to goodwill`],0,`البحث مصروف.`],
[`Goodwill must be tested for impairment:`,[`At least annually`,`Only if sold`,`Every 5 years`,`Never`],0,`سنويًا.`],
[`An impairment loss allocated to a CGU is first applied to:`,[`Goodwill allocated to the CGU`,`Inventory`,`Cash`,`Receivables`],0,`ثم باقي الأصول بنسبة دفترية.`]]})
]},

{id:'ifrsC', en:'Liabilities, Leases & Financial Instruments', ar:'الالتزامات والإيجار والأدوات المالية', w:'', topics:[
T('i-lease','IFRS 16 Leases','IFRS 16 الإيجارات',
`## نموذج المستأجر الواحد
- يعترف المستأجر بـ **Right-of-use (ROU) asset** و**Lease liability** لكل العقود، عدا **القصيرة الأجل (≤ 12 شهرًا)** و**الأصول منخفضة القيمة**.
- الالتزام = PV لدفعات الإيجار المتبقية بمعدل الاقتراض الإضافي (IBR) لو لم يكن معدل العقد معروفًا.
## مثال محلول
- دفعات سنوية 10,000 في نهاية كل سنة لمدة 5 سنوات، معدل 8% → الالتزام والأصل = **39,927**.
- السنة 1: مصروف الفائدة = 39,927×8% = **3,194**؛ الإهلاك (خط مستقيم) = 39,927÷5 = **7,985**؛ إجمالي مصروف السنة الأولى ≈ **11,179**؛ الالتزام بعد الدفعة = 39,927 + 3,194 − 10,000 = **33,121**.
- مصروف السنة الأولى أعلى من الدفعة (front-loaded) ثم ينخفض.
## أثر على النسب
- ترتفع الأصول والديون و**EBITDA** (لا يظهر إيجار تشغيلي) وتنخفض ربحية البداية، ويتأثر Net debt/EBITDA وتعهدات البنوك.
## المؤجِّر
- يظل التقسيم: **Finance lease** (ينقل المخاطر والمنافع) أو **Operating**.
> في سلسلة مطاعم: عقود إيجار الفروع في المولات هي أكبر تأثير لـ IFRS 16 على الميزانية.
= Lease liability = PV(lease payments, IBR)`,
{o:['تحسب الالتزام وROU','تحسب مصروف السنة الأولى','تفسر أثر IFRS 16 على EBITDA والنسب'],
f:[['Lease liability','Σ Payment/(1+r)^t','']],
c:[['استثناءات IFRS 16؟','قصير الأجل 12 شهرًا أو أقل، وأصل منخفض القيمة.'],['ROU asset؟','حق استخدام الأصل المؤجر.'],['أثر على EBITDA؟','يرتفع لأن مصروف الإيجار يتحول إلى إهلاك وفائدة.'],['IBR؟','معدل الاقتراض الإضافي للمستأجر.'],['المؤجر؟','لا يزال يصنف تمويلي أو تشغيلي.']],
q:[[`Annual lease payments of 10,000 at year-end for 5 years, discount rate 8%. The initial lease liability is approximately:`,[`39,927`,`50,000`,`46,000`,`35,000`],0,`PV لدفعات سنوية.`],
[`With the same lease, first-year interest expense is approximately:`,[`3,194`,`4,000`,`2,500`,`7,985`],0,`39,927×8%.`],
[`Compared with an operating lease under IAS 17, IFRS 16 for a lessee generally:`,[`Increases EBITDA and increases reported debt`,`Decreases EBITDA`,`Has no effect on the balance sheet`,`Reduces total assets`],0,`ينتقل المصروف من إيجار إلى إهلاك وفائدة.`],
[`Which lease may be excluded from the IFRS 16 balance sheet model?`,[`A lease with a term of 12 months or less`,`A 10-year property lease`,`A finance lease`,`Any lease with options`],0,`استثناء الأجل القصير.`],
[`The rate used to discount lease payments when the rate implicit in the lease cannot be readily determined is the:`,[`Incremental borrowing rate`,`Risk-free rate`,`Dividend yield`,`Inflation rate`],0,`IBR.`]]}),

T('i-fin','IFRS 9 Financial Instruments','IFRS 9 الأدوات المالية',
`## التصنيف والقياس (الأصول المالية)
- **Amortised cost**: نموذج أعمال تحصيل التدفقات + SPPI. **FVOCI**: تحصيل وبيع + SPPI. **FVTPL**: غير ذلك (والأسهم بشكل افتراضي، مع خيار FVOCI للأسهم غير المتاجر بها دون إعادة تدوير).
## الاضمحلال: نموذج الخسائر المتوقعة (ECL)
- **Stage 1**: لم يزد الخطر جوهريًا → ECL لمدة 12 شهرًا. **Stage 2**: زيادة جوهرية → ECL مدى الحياة. **Stage 3**: اضمحلال ائتماني → مدى الحياة والفائدة على الصافي.
- **ECL = PD × LGD × EAD**. مثال: 2% × 40% × 100,000 = **800**.
- الذمم التجارية: **Simplified approach** (مدى الحياة) عبر مصفوفة مخصصات حسب أعمار الديون.
## الالتزامات المالية
- غالبًا Amortised cost. **FVTPL** للمشتقات والمحتفظ بها للمتاجرة.
## محاسبة التحوط
- **Fair value hedge، Cash flow hedge (الجزء الفعّال في OCI)، Net investment hedge**، شروط توثيق وفعالية.
## الفرق مع US GAAP
- CECL في US GAAP يعترف بخسارة العمر الكامل من اليوم الأول لكل الأدوات.
> مثال تطبيقي: مخصص ديون العملاء الآجلين (شركات توريد) تُحسب بمصفوفة أعمار الديون × معدلات تاريخية معدلة بالظروف.
= ECL = PD × LGD × EAD`,
{o:['تصنف الأصل المالي','تحسب ECL وتفرّق بين المراحل','تعرف أنواع التحوط'],
f:[['ECL','PD × LGD × EAD','']],
c:[['شرط Amortised cost؟','نموذج أعمال للتحصيل + SPPI.'],['Stage 1؟','ECL لـ 12 شهرًا.'],['Simplified approach؟','للذمم التجارية: خسارة العمر دائمًا.'],['ECL = ؟','PD × LGD × EAD.'],['Cash flow hedge؟','الجزء الفعال في OCI.']],
q:[[`PD 2%, LGD 40%, EAD 100,000. The 12-month expected credit loss is:`,[`800`,`2,000`,`40,000`,`8,000`],0,`0.02×0.4×100,000.`],
[`A debt instrument held to collect contractual cash flows that are solely payments of principal and interest is measured at:`,[`Amortised cost`,`FVTPL`,`Cost less impairment only`,`FVOCI always`],0,`نموذج Hold to collect + SPPI.`],
[`For trade receivables without a significant financing component, the entity may use:`,[`The simplified approach (lifetime ECL)`,`The 12-month approach only`,`No impairment`,`The incurred loss model`],0,`Simplified.`],
[`The effective portion of a cash flow hedge is recognized in:`,[`Other comprehensive income`,`Profit or loss immediately`,`Goodwill`,`Inventory only`],0,`OCI.`],
[`An asset moved to Stage 2 requires recognition of:`,[`Lifetime expected credit losses`,`No loss`,`12-month ECL only`,`Written-off balance`],0,`زيادة جوهرية في المخاطر.`]]}),

T('i-tax','IAS 12 Deferred Tax & IAS 37 Provisions','IAS 12 الضرائب المؤجلة وIAS 37 المخصصات',
`## IAS 12 (Balance sheet liability method)
- **الفرق المؤقت** = القيمة الدفترية − القاعدة الضريبية. فرق خاضع للضريبة → **DTL**. فرق قابل للخصم → **DTA** (بشرط احتمال أرباح مستقبلية كافية).
- مثال: الأصل دفتريًا 1,000 وضريبيًا 700، معدل 25% → DTL = 300×25% = **75**.
- لا يُعترف بالضريبة المؤجلة على الشهرة عند الاعتراف المبدئي. الأصول والالتزامات الضريبية المؤجلة **غير مخصومة** وتُصنف غير متداولة.
## IAS 37
- **مخصص** عند: التزام حالي (قانوني أو استدلالي) + احتمال تدفق خارج (أكثر ترجيحًا من العكس) + قياس موثوق.
- القياس: أفضل تقدير؛ للمجموعات **Expected value**؛ يُخصم إذا كان أثر الوقت جوهريًا.
- مثال: دعوى، احتمال الخسارة 60% بمبلغ 100,000 → يُعترف بمخصص (أكثر ترجيحًا) بأفضل تقدير للمبلغ.
- **Contingent liability**: إفصاح فقط إذا كان محتملًا بدرجة أقل. **Contingent asset**: إفصاح إذا كان التدفق شبه مؤكد فقط.
- **إعادة الهيكلة**: مخصص فقط عند وجود خطة رسمية وإعلان للمتأثرين.
> تذكير: لا مخصصات للخسائر التشغيلية المستقبلية.
= Deferred tax = Temporary difference × Enacted rate`,
{o:['تحسب DTL/DTA','تطبق شروط الاعتراف بمخصص','تفرّق بين المخصص والالتزام المحتمل'],
c:[['DTL؟','فرق مؤقت خاضع للضريبة: دفتري أعلى من ضريبي للأصل.'],['شروط المخصص؟','التزام حالي + احتمال تدفق + قياس موثوق.'],['Contingent liability؟','إفصاح فقط.'],['الضريبة المؤجلة تُخصم؟','لا.'],['إعادة الهيكلة؟','خطة رسمية + إعلان.']],
q:[[`Carrying amount of an asset 1,000, tax base 700, tax rate 25%. The deferred tax is:`,[`DTL of 75`,`DTA of 75`,`DTL of 250`,`No deferred tax`],0,`فرق 300 × 25% = 75 التزام.`],
[`A provision is recognized when:`,[`A present obligation exists, outflow is probable and the amount can be reliably estimated`,`A loss is possible`,`Management intends to spend`,`Cash is available`],0,`الشروط الثلاثة.`],
[`A possible obligation whose outflow is not probable is:`,[`Disclosed as a contingent liability`,`Provided for`,`Ignored always`,`Recorded as an asset`],0,`إفصاح.`],
[`Deferred tax assets and liabilities under IAS 12 are:`,[`Not discounted`,`Discounted at the risk-free rate`,`Offset against equity`,`Always current`],0,`لا تُخصم.`],
[`Future operating losses are:`,[`Not provided for`,`Provided for if expected`,`Recorded as contingent assets`,`Capitalized`],0,`لا مخصصات لها.`]]})
]},

{id:'ifrsD', en:'Groups, FX & Other', ar:'المجموعات والعملات ومعايير أخرى', w:'', topics:[
T('i-group','IFRS 10/3 Consolidation, Business Combinations & Goodwill','IFRS 10 وIFRS 3 التوحيد والشهرة',
`## السيطرة (IFRS 10)
- **Power + Exposure to variable returns + ability to use power**. توحيد كامل لكل التابعات. **Associates** (تأثير جوهري ≈ 20–50%) بطريقة **حقوق الملكية**. **Joint ventures** بحقوق الملكية.
## IFRS 3: طريقة الاستحواذ
- تُقاس الأصول والالتزامات المستحوذ عليها بـ**القيمة العادلة**.
- **الشهرة** = المقابل + NCI − القيمة العادلة لصافي الأصول.
- مثال: دفع 1,000 مقابل 80%، القيمة العادلة لصافي الأصول 900.
  - **Partial goodwill** (NCI بحصته من صافي الأصول 20%×900 = 180): 1,000 + 180 − 900 = **280**.
  - **Full goodwill** (NCI بالقيمة العادلة 220): 1,000 + 220 − 900 = **320**.
- تكاليف الاستحواذ مصروف. **Bargain purchase** ربح بعد إعادة التحقق.
## المعاملات بين شركات المجموعة
- حذف الأرباح غير المحققة في المخزون والأصول، وحذف الأرصدة والمعاملات البينية.
## تغييرات الملكية
- **زيادة أو تخفيض الحصة مع بقاء السيطرة** = معاملة حقوق ملكية (لا ربح). **فقدان السيطرة** = ربح أو خسارة وإعادة قياس الحصة المتبقية بالقيمة العادلة.
> الفرق: IFRS يسمح بخيارين لقياس NCI، وUS GAAP يقيسه بالقيمة العادلة فقط.
= Goodwill = Consideration + NCI − FV of net assets`,
{o:['تحسب الشهرة بالطريقتين','تعرف متى توحد ومتى تستخدم حقوق الملكية','تعالج تغير الملكية'],
f:[['Goodwill','Consideration + NCI − FV net identifiable assets','']],
c:[['شروط السيطرة؟','سلطة + عوائد متغيرة + القدرة على استخدام السلطة.'],['Partial goodwill؟','NCI بحصته من صافي الأصول.'],['Full goodwill؟','NCI بالقيمة العادلة.'],['تكاليف الاستحواذ؟','مصروف.'],['فقدان السيطرة؟','ربح أو خسارة.']],
q:[[`Parent pays 1,000 for 80% of a subsidiary with fair value of net assets 900. NCI is measured at its proportionate share of net assets. Goodwill is:`,[`280`,`100`,`320`,`1,000`],0,`1,000 + 180 − 900.`],
[`If NCI is measured at fair value of 220, goodwill is:`,[`320`,`280`,`220`,`100`],0,`1,000 + 220 − 900.`],
[`Acquisition-related costs (legal and advisory fees) under IFRS 3 are:`,[`Expensed`,`Added to goodwill`,`Added to investment cost`,`Deferred`],0,`مصروف.`],
[`An investor with 30% holding and significant influence accounts for the investee using:`,[`The equity method`,`Full consolidation`,`Proportionate consolidation`,`Cost method only`],0,`Associate.`],
[`A change in ownership interest that does not result in loss of control is accounted for as:`,[`An equity transaction`,`A gain in profit or loss`,`A revaluation to OCI`,`A discontinued operation`],0,`لا ربح أو خسارة.`]]}),

T('i-fx','IAS 21 FX, IAS 29 Hyperinflation, IAS 33 EPS & IFRS 8','IAS 21 وIAS 29 وIAS 33 وIFRS 8',
`## IAS 21
- **Functional currency** (بيئة اقتصادية رئيسية) و**Presentation currency**.
- معاملة بعملة أجنبية: تُسجل بسعر اليوم. البنود النقدية في نهاية الفترة بسعر الإقفال، والفرق في **الأرباح أو الخسائر**. البنود غير النقدية بالتكلفة تبقى بسعر المعاملة.
- مثال: استيراد بـ 10,000 دولار عند 48 جنيهًا (480,000). عند الإقفال 50 → التزام 500,000 → **خسارة صرف 20,000**.
- ترجمة شركة تابعة أجنبية: الأصول والخصوم بسعر الإقفال، الإيراد والمصروف بالمتوسط، والفروق في **OCI (CTA)**.
## IAS 29
- يُطبق عندما تكون الاقتصاد عالية التضخم (علامات منها تراكم تضخم نحو 100% خلال 3 سنوات). القوائم تُعاد صياغتها بوحدة القياس الجارية، وتُدرج **ربح/خسارة صافي المركز النقدي** في الأرباح.
## IAS 33
- Basic EPS = (الربح − توزيعات المفضلة) ÷ المتوسط المرجح للأسهم العادية. Diluted يضيف الأثر المخفف (If-converted، Treasury stock).
## IFRS 8
- تقارير القطاعات بالمنظور الإداري: القطاعات التي تتجاوز **10%** من الإيرادات أو الربح أو الأصول، ويغطي المجموع 75% من إيرادات المنشأة على الأقل.
> المعايير المصرية EAS قريبة، لكن توقيت تطبيق بعض المعايير والاختيارات يختلف: تحقق من النص المصري.`,
{o:['تحسب فروق العملة','تعرف ترجمة القوائم الأجنبية وCTA','تفهم فكرة IAS 29 وIFRS 8'],
c:[['فرق عملة البنود النقدية؟','في الأرباح أو الخسائر.'],['CTA؟','فروق الترجمة في OCI.'],['Functional currency؟','عملة البيئة الاقتصادية الأساسية.'],['IAS 29؟','قوائم بالوحدة الجارية للاقتصاد عالي التضخم.'],['حد القطاع التشغيلي؟','10% من الإيرادات أو الربح أو الأصول.']],
q:[[`An entity buys goods for USD 10,000 when the rate is 48 EGP. At year-end the rate is 50 and the payable is unpaid. The exchange loss in profit or loss is:`,[`20,000`,`0`,`500,000`,`480,000`],0,`10,000×(50−48).`],
[`Exchange differences on translating a foreign subsidiary into the group presentation currency are recognized in:`,[`Other comprehensive income`,`Profit or loss`,`Goodwill`,`Retained earnings directly`],0,`CTA.`],
[`A reportable operating segment under IFRS 8 generally must meet a threshold of:`,[`10% of combined revenue, profit or assets`,`5% of revenue only`,`25% of assets`,`50% of revenue`],0,`حد 10%.`],
[`Under IAS 29, the effect of inflation on net monetary position is recognized in:`,[`Profit or loss`,`OCI`,`Equity directly`,`Goodwill`],0,`ربح/خسارة صافي المركز النقدي.`],
[`Monetary items at the reporting date are translated at the:`,[`Closing rate`,`Historical rate`,`Average rate`,`Budget rate`],0,`سعر الإقفال.`]]})
]}

]}]}]
});
