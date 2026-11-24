CFO.addPack({id:'cma1a', ver:'2026.11.2', date:'2026-11-24', name:'CMA Part 1 Deep Dive — 1A, 1B, 1C',
news:['2026.11.2 — CMA Part 1 Deep Dive (1A–1C): دروس موسعة وأمثلة محلولة وأهداف تعلم وأسئلة بالأرقام.'],
tracks:[{id:'cma', parts:[{id:'cma1', secs:[

{id:'cma1A', topics:[
T('c1a1','Financial Statements (US GAAP / IFRS)','القوائم المالية: الأربع قوائم والفروق بين US GAAP وIFRS',
`## القوائم الأساسية
- **Income statement**: Single-step (إيرادات − مصروفات) أو Multi-step (Gross profit ثم Operating income ثم Net income). العمليات المتوقفة (Discontinued operations) تظهر بعد الضريبة وبشكل منفصل.
- **Comprehensive income**: صافي الربح + OCI. بنود OCI الشائعة: أرباح/خسائر غير محققة على أدوات دين FVOCI/AFS، فروق ترجمة العملات الأجنبية، تسويات المعاشات، تحوطات التدفق النقدي. تتراكم في **AOCI** ضمن حقوق الملكية.
- **Balance sheet**: تبويب متداول وغير متداول. المتداول = يتحقق أو يُسدد خلال سنة أو دورة تشغيل أيهما أطول.
- **Cash flow statement**: تشغيل / استثمار / تمويل، بطريقة مباشرة أو غير مباشرة، مع إفصاح عن العمليات غير النقدية.
- **Statement of changes in equity**: رصيد أول + صافي ربح + OCI − توزيعات ± إصدارات.
## أهم الفروق: US GAAP مقابل IFRS
- **LIFO**: مسموح في US GAAP فقط. IFRS يمنعه.
- **عكس خسارة الاضمحلال**: IFRS يسمح بعكسها (ما عدا الشهرة). US GAAP لا يسمح.
- **تكاليف التطوير**: IFRS تُرسمل إذا تحققت شروط. US GAAP تُصرف غالبًا (R&D).
- **إعادة التقييم (Revaluation) للأصول الثابتة**: مسموحة في IFRS. غير مسموحة في US GAAP.
- **الفوائد المدفوعة في CFS**: US GAAP تشغيلي. IFRS تشغيلي أو تمويلي بسياسة ثابتة. **التوزيعات المدفوعة**: تمويلي في US GAAP، وتمويلي أو تشغيلي في IFRS.
## مثال محلول
- صافي الربح 500، ربح غير محقق 40 على أدوات FVOCI، خسارة ترجمة 10: **Comprehensive income = 500 + 40 − 10 = 530**.
> الامتحان: لو سألك عن بند يظهر في AOCI فالإجابة غالبًا فروق الترجمة أو أرباح الأدوات المتاحة للبيع، مش المصروفات التشغيلية.
= Comprehensive income = Net income + OCI
= Ending Retained earnings = Beginning RE + NI − Dividends`,
{o:['تفرّق بين الأربع قوائم وتربطها ببعض','تحسب Comprehensive income وتحدد بنود AOCI','تحفظ 5 فروق رئيسية بين US GAAP وIFRS','تصنف الفوائد والتوزيعات في CFS حسب المعيار'],
f:[['Comprehensive income','NI + OCI','يظهر في AOCI التراكمي'],['Current ratio','CA / CL','']],
c:[['إيه الفرق بين NI وComprehensive income؟','Comprehensive income = NI + OCI (بنود لا تمر بقائمة الدخل).'],['LIFO مسموح تحت أي معيار؟','US GAAP فقط.'],['أين تظهر فروق ترجمة العملات؟','OCI ثم تتراكم في AOCI.'],['الفوائد المدفوعة في US GAAP تُصنف؟','Operating activities.'],['هل يمكن عكس اضمحلال الأصول الثابتة؟','IFRS نعم (ما عدا الشهرة). US GAAP لا.']],
q:[[`Which inventory method is permitted under US GAAP but prohibited under IFRS?`,[`LIFO`,`FIFO`,`Weighted average cost`,`Specific identification`],0,`LIFO مسموح في US GAAP فقط.`],
[`Net income is 200. The company has an unrealized gain of 30 on FVOCI debt securities and a foreign currency translation loss of 10. Comprehensive income is:`,[`220`,`240`,`200`,`230`],0,`200 + 30 − 10 = 220.`],
[`Under US GAAP, interest paid is classified in the statement of cash flows as:`,[`Operating activities`,`Investing activities`,`Financing activities`,`Either operating or financing`],0,`US GAAP يصنف الفوائد المدفوعة تشغيلية، بينما IFRS يسمح بالتشغيلي أو التمويلي.`],
[`Which item is reported in accumulated other comprehensive income (AOCI)?`,[`Cumulative foreign currency translation adjustments`,`Dividends declared`,`Depreciation expense`,`Cost of goods sold`],0,`فروق الترجمة تمر عبر OCI وتتراكم في AOCI.`],
[`A previously recognized impairment loss on property, plant and equipment may be reversed:`,[`Under IFRS but not under US GAAP`,`Under both standards`,`Under neither standard`,`Under US GAAP but not under IFRS`],0,`IFRS يسمح بعكس الاضمحلال (ما عدا الشهرة)، وUS GAAP لا يسمح.`]]}),

T('c1a2','Revenue Recognition & Inventory','الاعتراف بالإيراد والمخزون',
`## الإيراد (5 خطوات)
- 1) تحديد العقد. 2) تحديد التزامات الأداء. 3) تحديد سعر المعاملة. 4) توزيع السعر على الالتزامات حسب **Standalone selling price**. 5) الاعتراف عند الوفاء (نقطة زمنية أو على مدار الوقت).
- **مثال توزيع**: باقة (منتج سعره المستقل 900 + خدمة 300) تباع بـ 1,000. المنتج = 1,000 × 900/1,200 = **750**، والخدمة = **250**.
## تكلفة المخزون
- **FIFO**: الأقدم أولًا. **LIFO**: الأحدث أولًا (US فقط). **Weighted average**: متوسط مرجح.
## مثال محلول (300 وحدة مباعة)
- الرصيد الأول 100 وحدة بـ 10، مشتريات 200 بـ 12، ثم 150 بـ 14. إجمالي التكلفة 5,500 لعدد 450 وحدة.
- **FIFO**: COGS = 100×10 + 200×12 = **3,400**. المخزون الآخر = 150×14 = 2,100.
- **LIFO**: COGS = 150×14 + 150×12 = **3,900**. المخزون الآخر = 100×10 + 50×12 = 1,600.
- **Weighted average**: التكلفة للوحدة 5,500 ÷ 450 = 12.22. COGS ≈ **3,667**، والمخزون الآخر ≈ 1,833.
- مع ارتفاع الأسعار: FIFO يعطي ربح ومخزون أعلى، وLIFO يعطي COGS أعلى وضريبة أقل.
## التقويم
- **LCNRV** (لغير LIFO): المخزون بالأقل من التكلفة وصافي القيمة القابلة للتحقق. NRV = سعر البيع − تكاليف الإتمام والبيع.
> الامتحان: مجموع COGS + المخزون الآخر = إجمالي التكلفة المتاحة (5,500 هنا). استخدمها للتأكد من إجابتك.
= NRV = Selling price − Costs to complete and sell
= Goods available = Beginning inventory + Purchases`,
{o:['تطبق الخطوات الخمس وتوزع سعر الباقة','تحسب COGS والمخزون بـ FIFO وLIFO وWAC','تفسر أثر ارتفاع الأسعار على الربح والضريبة','تطبق LCNRV'],
f:[['Allocation','Price × SSP / ΣSSP','توزيع سعر المعاملة']],
c:[['خطوات الإيراد الخمس؟','عقد، التزامات أداء، سعر، توزيع، اعتراف.'],['مع ارتفاع الأسعار أيهما يعطي ربح أعلى: FIFO أم LIFO؟','FIFO.'],['إيه NRV؟','سعر البيع − تكاليف الإتمام والبيع.'],['أساس توزيع سعر العقد على الالتزامات؟','Standalone selling price.'],['COGS + Ending inventory = ؟','Goods available for sale.']],
q:[[`A bundle consists of a product (standalone price 900) and a service (standalone price 300) sold for 1,000. Revenue allocated to the product is:`,[`750`,`900`,`1,000`,`700`],0,`1,000 × 900 / 1,200 = 750.`],
[`Beginning inventory 100 units at 10; purchases of 200 at 12 and then 150 at 14. 300 units are sold. FIFO cost of goods sold is:`,[`3,400`,`3,900`,`3,667`,`3,000`],0,`100×10 + 200×12 = 3,400.`],
[`Using the data in the previous question, LIFO ending inventory is:`,[`1,600`,`2,100`,`1,833`,`1,000`],0,`LIFO يبقي الأقدم: 100×10 + 50×12 = 1,600.`],
[`In a period of rising prices, compared with LIFO, FIFO produces:`,[`Higher net income and higher ending inventory`,`Lower net income and higher ending inventory`,`Higher net income and lower ending inventory`,`Lower net income and lower ending inventory`],0,`FIFO يطابق التكاليف الأقدم الأقل مع الإيراد، فالربح والمخزون أعلى.`],
[`Inventory cost is 50, selling price 70, costs to complete and sell 15. Under LCNRV the inventory is carried at:`,[`50`,`55`,`70`,`35`],0,`NRV = 55، وهو أعلى من التكلفة 50، فنقيّم بالأقل أي 50.`]]}),

T('c1a3','PP&E, Depreciation & Impairment','الأصول الثابتة والإهلاك والاضمحلال',
`## طرق الإهلاك (تكلفة 120,000، خردة 20,000، عمر 5 سنوات)
- **Straight-line**: (120,000 − 20,000) ÷ 5 = **20,000** كل سنة.
- **Double-declining balance**: المعدل 2 ÷ 5 = 40% على القيمة الدفترية (من غير طرح الخردة). السنة 1 = 48,000. السنة 2 = 72,000×40% = **28,800**. السنة 3 = 17,280. السنة 4 محدودة بالخردة: 25,920 − 20,000 = **5,920**.
- **Units of production**: (التكلفة − الخردة) × الوحدات المنتجة ÷ إجمالي الوحدات المقدرة. لو أُنتج 20,000 من 100,000: 100,000 × 20% = 20,000.
## الاضمحلال (Impairment)
- **US GAAP للأصول المحتفظ بها للاستخدام (خطوتان)**: 1) اختبار الاسترداد: هل مجموع التدفقات غير المخصومة < القيمة الدفترية؟ 2) لو نعم: الخسارة = القيمة الدفترية − القيمة العادلة.
- **IFRS (خطوة واحدة)**: الخسارة = الدفترية − Recoverable amount (الأعلى من: FV ناقص تكاليف البيع، وValue in use).
- **مثال**: دفترية 500، تدفقات غير مخصومة 480، قيمة عادلة 400. 480 < 500 فالخسارة = **100**. لو التدفقات 520 فلا يوجد اضمحلال.
> الإهلاك أسلوب توزيع تكلفة، لا تقييم. عدّل التقدير مستقبليًا (Change in estimate).
= SL = (Cost − Salvage) / Life
= DDB rate = 2 / Life ; Depreciation = BV × rate
= UOP = (Cost − Salvage) × Units / Total units`,
{o:['تحسب SL وDDB وUOP','تطبق قاعدة عدم النزول عن الخردة في DDB','تطبق اختبار الاضمحلال بخطوتين (US) وخطوة (IFRS)'],
c:[['معدل DDB لأصل عمره 5 سنوات؟','40% (2/5) على القيمة الدفترية.'],['هل تُطرح الخردة في DDB من الأساس؟','لا، لكن لا يجوز النزول عن الخردة.'],['اختبار الاسترداد في US GAAP؟','التدفقات غير المخصومة مقابل القيمة الدفترية.'],['IFRS recoverable amount؟','الأعلى بين FV ناقص تكاليف البيع وValue in use.'],['تغيير العمر الإنتاجي يعامل كيف؟','Change in estimate: مستقبليًا.']],
q:[[`Equipment cost 120,000, salvage 20,000, life 5 years. Double-declining balance depreciation for year 2 is:`,[`28,800`,`48,000`,`24,000`,`20,000`],0,`السنة 1 = 48,000، والقيمة الدفترية 72,000 × 40% = 28,800.`],
[`Using the same equipment, DDB depreciation in year 4 is (book value at start of year 4 is 25,920):`,[`5,920`,`10,368`,`20,000`,`8,000`],0,`لا نهبط تحت الخردة: 25,920 − 20,000 = 5,920.`],
[`Cost 120,000, salvage 20,000, estimated total output 100,000 units. 15,000 units produced this year. Units-of-production depreciation is:`,[`15,000`,`18,000`,`12,000`,`20,000`],0,`100,000 × 15% = 15,000.`],
[`Under US GAAP, carrying amount 500, undiscounted cash flows 480, fair value 400. The impairment loss is:`,[`100`,`20`,`80`,`0`],0,`480 < 500 فيوجد اضمحلال. الخسارة = 500 − 400 = 100.`],
[`Under US GAAP, carrying amount 500, undiscounted cash flows 520, fair value 400. The impairment loss is:`,[`0`,`100`,`20`,`80`],0,`التدفقات 520 ≥ 500، فاجتاز اختبار الاسترداد، ولا خسارة.`]]}),

T('c1a4','Bonds, Leases & Deferred Taxes','السندات والإيجارات والضرائب المؤجلة',
`## السندات
- لو **معدل الكوبون < معدل السوق**: يصدر بخصم (Discount). لو أعلى: بعلاوة (Premium).
- **Effective interest method**: مصروف الفائدة = القيمة الدفترية × معدل السوق. الفرق عن الكوبون يُستنفد.
- **مثال**: قيمة اسمية 100,000، كوبون 8% سنوي، سوق 10%، 3 سنوات. السعر ≈ **95,026**. السنة 1: مصروف الفائدة = 95,026×10% = **9,503**، المدفوع 8,000، استنفاد الخصم 1,503. القيمة الدفترية الجديدة = 96,529.
## الإيجارات (ASC 842 / IFRS 16)
- المستأجر يعترف بـ **Right-of-use asset** وبالتزام إيجار. في US GAAP: Finance lease (مصروف إهلاك + فائدة) أو Operating lease (تكلفة إيجار خطية). IFRS 16 يعامل كل العقود كنموذج واحد تقريبًا للمستأجر.
- تعتبر Finance lease لو تحقق أحد المعايير: نقل الملكية، خيار شراء بسعر مغرٍ، مدة الإيجار تغطي معظم العمر، القيمة الحالية تقارب القيمة العادلة، أو أصل متخصص.
## الضرائب المؤجلة
- **DTL** يظهر عندما تكون الضريبة المؤجلة للدفع مستقبلًا، مثل إهلاك ضريبي أسرع من الدفتري. **DTA** عندما تُسترد ضريبة مستقبلًا، مثل مخصص ضمان لم يُخصم ضريبيًا بعد.
- **مثال**: فرق مؤقت 50,000 ومعدل مقرر 25% = DTL **12,500**. Income tax expense = Current + Deferred.
> الفرق المؤقت يعكس نفسه، أما الدائم (مثل غرامات غير قابلة للخصم) فلا ينشئ DTA/DTL.
= Interest expense = Carrying amount × Market rate
= Deferred tax = Temporary difference × Enacted tax rate`,
{o:['تحدد إصدار السند بخصم أو علاوة وتحسب مصروف الفائدة الفعلي','تفرّق بين Finance وOperating lease','تحسب DTL/DTA وتحدد مصدرها'],
c:[['كوبون أقل من سعر السوق: إصدار بخصم أم علاوة؟','بخصم.'],['مصروف الفائدة بطريقة الفائدة الفعلية؟','القيمة الدفترية × معدل السوق.'],['إيه ينشئ DTL؟','إهلاك ضريبي أسرع من الدفتري.'],['إيه ينشئ DTA؟','مصروف دفتري يُخصم ضريبيًا لاحقًا (مثل مخصص الضمان) أو NOL.'],['إيه الأصل الذي يعترف به المستأجر؟','Right-of-use asset.']],
q:[[`A bond with a stated coupon of 8% is issued when the market rate is 10%. The bond is issued:`,[`At a discount`,`At a premium`,`At par`,`Cannot be determined`],0,`الكوبون أقل من السوق فيباع بخصم.`],
[`A 3-year bond, face 100,000, coupon 8% annually, market rate 10%, is issued for 95,026. Year 1 interest expense under the effective interest method is:`,[`9,503`,`8,000`,`10,000`,`1,503`],0,`95,026 × 10% = 9,503.`],
[`Cumulative tax depreciation exceeds book depreciation by 50,000 and the enacted rate is 25%. The deferred tax liability is:`,[`12,500`,`50,000`,`25,000`,`0`],0,`50,000 × 25% = 12,500.`],
[`Which item most likely gives rise to a deferred tax asset?`,[`Warranty expense accrued for book purposes but deductible for tax when paid`,`Tax depreciation faster than book depreciation`,`Installment sales taxed when collected`,`Tax-exempt municipal interest`],0,`المصروف يظهر دفتريًا الآن ويُخصم ضريبيًا لاحقًا، فيخلق أصلًا ضريبيًا مؤجلًا.`],
[`Under ASC 842, a lessee with an operating lease:`,[`Recognizes a right-of-use asset and a lease liability`,`Recognizes nothing on the balance sheet`,`Recognizes only rent expense when paid`,`Recognizes only a liability`],0,`المستأجر يسجل ROU asset والتزام إيجار حتى للتشغيلي.`]]})
]},

{id:'cma1B', topics:[
T('c1b2','Budgeting Concepts & Methodologies','مفاهيم ومنهجيات الموازنة',
`## وظائف الموازنة
- تخطيط، تنسيق، اتصال، تحفيز، رقابة وتقييم أداء.
## الأنواع
- **Static** (حجم نشاط واحد) مقابل **Flexible** (تُعاد صياغتها على النشاط الفعلي).
- **Incremental**: السنة الماضية ± نسبة. سهلة لكنها تُكرّس الهدر.
- **Zero-based (ZBB)**: تبرير كل بند من الصفر. أدق لكنها مكلفة في الوقت.
- **Activity-based (ABB)**: ميزانية الأنشطة وprocess drivers.
- **Rolling / Continuous**: تُمدد كلما انتهت فترة (فتبقى دائمًا 12 شهر قادمة مثلًا).
- **Participative**: يشارك فيها المديرون. تزيد الالتزام لكن تفتح الباب لـ **Budgetary slack**.
- **Authoritative / Top-down**: تُفرض من الإدارة العليا.
## نقاط تطبيقية
- **Standards**: Ideal (مثالي) و**Currently attainable** (أكثر تحفيزًا وواقعية).
- التقييم العادل يتطلب Flexible budget لأن الحجم الفعلي يختلف عن المخطط.
> سؤال شائع: أي طريقة تناسب بيئة تتغير بسرعة؟ **Rolling**.`,
{o:['تفرّق بين أنواع الموازنات وتختار الأنسب','تشرح Budgetary slack وأثر المشاركة','تعرف متى تُستخدم Flexible budget'],
c:[['إيه ZBB؟','تبرير كل بند من الصفر كل فترة.'],['إيه Rolling budget؟','تُضاف فترة جديدة كلما انتهت فترة، فيبقى الأفق ثابتًا.'],['إيه Budgetary slack؟','تضخيم متعمد للتكاليف أو تقليل للإيراد المقدر لتسهيل الهدف.'],['أي موازنة للتقييم؟','Flexible.'],['Currently attainable standard؟','معيار صعب لكن قابل للتحقيق بجهد معقول.']],
q:[[`Zero-based budgeting requires managers to:`,[`Justify each expense from zero in every budget period`,`Add a percentage to last year's budget`,`Extend the budget by one period each month`,`Budget only capital items`],0,`ZBB تبدأ من الصفر وتبرر كل بند.`],
[`A rolling budget is one that:`,[`Is extended by adding a new period as each period expires`,`Is set once and never changed`,`Is based on one activity level`,`Includes only cash items`],0,`الموازنة المتجددة تحافظ على أفق ثابت.`],
[`The main disadvantage of participative budgeting is the risk of:`,[`Budgetary slack`,`Lack of commitment`,`Top-down bias`,`Inflexible standards`],0,`المشاركة قد تدفع المديرين لإنشاء هامش أمان في أهدافهم.`],
[`Which budget is most appropriate to evaluate a manager when actual volume differs from plan?`,[`Flexible budget`,`Static budget`,`Incremental budget`,`Capital budget`],0,`Flexible يعدّل على الحجم الفعلي.`],
[`Which standard is generally the most motivating while still achievable?`,[`Currently attainable standard`,`Ideal standard`,`Historical average`,`Zero standard`],0,`Currently attainable يتطلب جهدًا لكنه قابل للتحقيق.`]]}),

T('c1b3','Forecasting Techniques','تقنيات التنبؤ',
`## الأساليب
- **High-low**: b = (التكلفة العليا − الدنيا) ÷ (النشاط الأعلى − الأدنى). ثم a = التكلفة − b×النشاط.
- **Regression**: Y = a + bX. مثال: a=1,000، b=2.5، X=400 → **Y = 2,000**.
- **R²** نسبة التباين المفسر. **Correlation (r)** من −1 إلى +1: قريب من −0.9 علاقة عكسية قوية.
- **Moving average**: متوسط آخر n فترة. **Exponential smoothing**: F(t+1) = α×A(t) + (1−α)×F(t). مثال: α=0.3، F=100، A=110 → **103**.
- **Learning curve**: عند 80% بنموذج المتوسط التراكمي، الوقت المتوسط يتناقص 20% مع كل تضاعف للإنتاج. الوحدة الأولى 100 ساعة: متوسط الوحدتين 80 (إجمالي 160)، متوسط الأربع 64 (إجمالي **256**).
- **Expected value**: احتمالات 0.3/0.5/0.2 لقيم 100/200/300 → 30+100+60 = **190**.
- **Time series**: اتجاه، موسمية، دورية، عشوائي.
## متى تثق في الانحدار؟
- لو R² عالٍ وSignificance (t-stat) مقبول، وتبقى داخل المدى الملائم (Relevant range).
> Standard error of the estimate يقيس التشتت حول خط الانحدار: كلما قل زادت الدقة.
= High-low b = ΔCost / ΔActivity
= Exponential smoothing: F(t+1) = αA(t) + (1−α)F(t)
= Cumulative average time (learning): Y = a·X^b`,
{o:['تحسب High-low وRegression','تفسر R² وCorrelation','تطبق Exponential smoothing وLearning curve','تحسب Expected value'],
c:[['إيه R²؟','نسبة تغير Y المفسرة بالمتغير المستقل.'],['إيه α في smoothing؟','وزن أحدث فعلي. كلما كبر زادت الاستجابة للتغير.'],['Learning curve 80%؟','المتوسط التراكمي ينخفض لـ 80% مع كل تضاعف للإنتاج.'],['الفرق بين Trend وSeasonality؟','Trend اتجاه طويل. Seasonality نمط متكرر داخل السنة.'],['r = −0.9 تعني؟','علاقة خطية عكسية قوية.']],
q:[[`With an 80% cumulative-average learning curve, the first unit takes 100 hours. Total time for 4 units is:`,[`256`,`320`,`400`,`160`],0,`4 وحدات = تضاعفان: متوسط 100×0.8×0.8 = 64، الإجمالي 256.`],
[`Exponential smoothing with α = 0.3: forecast for the current period 100, actual 110. Next forecast is:`,[`103`,`110`,`105`,`107`],0,`0.3×110 + 0.7×100 = 103.`],
[`Outcomes 100, 200, 300 with probabilities 0.3, 0.5, 0.2. The expected value is:`,[`190`,`200`,`180`,`210`],0,`30 + 100 + 60 = 190.`],
[`A regression gives Y = 1,000 + 2.5X. The forecast for X = 400 is:`,[`2,000`,`1,400`,`1,250`,`3,500`],0,`1,000 + 2.5×400 = 2,000.`],
[`A correlation coefficient of −0.9 indicates:`,[`A strong negative linear relationship`,`A weak positive relationship`,`No relationship`,`A perfect relationship`],0,`قريب من −1 يعني علاقة عكسية قوية.`]]}),

T('c1b4','Annual Profit Plan: Master Budget & Cash Budget','الموازنة الشاملة وموازنة النقدية بأمثلة',
`## تسلسل الموازنة الشاملة
- Sales → Production → Direct materials / Direct labor / Overhead → COGS → Selling & admin → **Cash budget** → Pro forma IS / BS.
## معادلات الإنتاج والمشتريات
- **الإنتاج = المبيعات + المخزون الآخر المستهدف − المخزون الأول.** مثال: مبيعات 1,200 ومخزون آخر 300 وأول 240 → إنتاج **1,260**.
- **المشتريات = احتياج الإنتاج + مخزون المواد آخر المدة − أول المدة.**
## جدول التحصيلات (مثال)
- مبيعات ديسمبر 40,000، يناير 50,000، فبراير 60,000، مارس 75,000. التحصيل: 70% في الشهر و30% في التالي.
- فبراير: 0.7×60,000 + 0.3×50,000 = **57,000**. مارس: 0.7×75,000 + 0.3×60,000 = **70,500**.
## موازنة النقدية (مثال)
- رصيد أول 20,000 + تحصيلات 57,000 − مدفوعات 70,000 = **7,000** قبل التمويل. الحد الأدنى المطلوب 15,000 فنقترض **8,000**.
- لو المدفوعات 60,000 فالرصيد 17,000 وهو أعلى من الحد الأدنى فلا اقتراض.
> انتبه: الإهلاك مصروف غير نقدي، فلا يظهر في المدفوعات النقدية.
= Cash available = Beginning cash + Collections − Disbursements
= Borrowing = Minimum cash − Cash before financing`,
{o:['ترتب جداول الموازنة الشاملة','تحسب الإنتاج والمشتريات','تحسب تحصيلات النقدية وتحدد الاقتراض المطلوب'],
c:[['أول موازنة؟','موازنة المبيعات.'],['الإنتاج = ؟','مبيعات + مخزون آخر مستهدف − مخزون أول.'],['هل الإهلاك يدخل موازنة النقدية؟','لا، لأنه غير نقدي.'],['إيه Pro forma؟','قوائم مالية تقديرية.'],['كيف تحسب الاقتراض؟','الحد الأدنى للنقدية − الرصيد قبل التمويل.']],
q:[[`Budgeted sales are 1,200 units, desired ending finished goods are 300 and beginning finished goods are 240. Required production is:`,[`1,260`,`1,140`,`1,500`,`1,200`],0,`1,200 + 300 − 240 = 1,260.`],
[`January sales are 50,000, February 60,000. 70% is collected in the month of sale and 30% in the following month. February collections are:`,[`57,000`,`60,000`,`42,000`,`45,000`],0,`0.7×60,000 + 0.3×50,000 = 57,000.`],
[`Beginning cash 20,000, collections 57,000, disbursements 70,000. Minimum cash balance is 15,000. Required borrowing is:`,[`8,000`,`7,000`,`15,000`,`0`],0,`الرصيد قبل التمويل 7,000، والمطلوب 15,000 فالاقتراض 8,000.`],
[`Which of the following is NOT included in the cash disbursements budget?`,[`Depreciation expense`,`Direct materials purchases paid`,`Wages paid`,`Interest paid`],0,`الإهلاك غير نقدي.`],
[`Which budget is prepared first in the master budget sequence?`,[`Sales budget`,`Production budget`,`Cash budget`,`Capital budget`],0,`كل شيء يبدأ من توقع المبيعات.`]]})
]},

{id:'cma1C', topics:[
T('c1c1','Cost & Variance Measures: Standard Costing','التكلفة المعيارية وتحليل الانحرافات',
`## المبدأ
- Standard cost للوحدة = كمية معيارية × سعر معياري. الانحراف **Unfavorable (U)** يخفض الربح، و**Favorable (F)** يزيده.
## معادلات
- **Price variance** = (AP − SP) × **AQ** (على الكمية المشتراة للمواد، وعلى الساعات الفعلية للعمالة).
- **Usage/Efficiency variance** = (AQ − **SQ**) × SP، حيث SQ = الكمية المعيارية المسموحة للإنتاج الفعلي.
## مثال محلول (إنتاج فعلي 1,000 وحدة)
- المعيار: مواد 3 كجم × 4$ للوحدة. عمالة 2 ساعة × 15$ للوحدة.
- فعلي: مواد 3,200 كجم بسعر 3.80$. عمالة 2,100 ساعة بسعر 15.50$.
- **DM price** = (3.80 − 4.00) × 3,200 = **640 F**.
- **DM usage** = (3,200 − 3,000) × 4 = **800 U**.
- **DL rate** = (15.50 − 15.00) × 2,100 = **1,050 U**.
- **DL efficiency** = (2,100 − 2,000) × 15 = **1,500 U**.
- **VOH** (معدل معياري 6$/ساعة، فعلي 12,900): spending = 12,900 − 2,100×6 = **300 U**. efficiency = (2,100 − 2,000) × 6 = **600 U**.
- **FOH**: موازنة 20,000، فعلي 20,500: spending = **500 U**. Volume variance = الموازنة − المحمّل (2,000 ساعة × 10 = 20,000) = 0.
> تحذير: انحراف مناسب في السعر (شراء رخيص) قد يسبب انحراف كمية غير مناسب (جودة أقل). حلل الانحرافات معًا.
= DM price var = (AP − SP) × AQ purchased
= DM usage var = (AQ used − SQ allowed) × SP
= DL efficiency var = (AH − SH allowed) × SR`,
{o:['تحسب انحرافات المواد والعمالة والأعباء','تحدد U/F بدقة','تفسر العلاقة بين انحرافات السعر والكفاءة'],
c:[['Price variance على أي كمية؟','الكمية المشتراة (المواد) / الساعات الفعلية (العمالة).'],['SQ؟','الكمية المعيارية المسموحة للإنتاج الفعلي.'],['انحراف سلبي يعني؟','Unfavorable: يخفض الربح.'],['VOH efficiency يعتمد على؟','الفرق في ساعات العمل المعيارية والفعلية × المعدل المعياري.'],['FOH volume variance؟','الفرق بين FOH الموازنة والمحمل على الإنتاج.']],
q:[[`Standard: 3 kg at 4.00 per unit. 1,000 units produced. Actual: 3,200 kg purchased and used at 3.80. Direct materials price variance is:`,[`640 F`,`640 U`,`800 U`,`800 F`],0,`(3.80−4.00)×3,200 = 640 مناسب لأن السعر الفعلي أقل.`],
[`Using the same data, direct materials usage variance is:`,[`800 U`,`800 F`,`640 U`,`1,200 U`],0,`(3,200−3,000)×4 = 800 غير مناسب.`],
[`Standard labor: 2 hours at 15 per unit; 1,000 units produced. Actual: 2,100 hours at 15.50. Labor rate variance is:`,[`1,050 U`,`1,050 F`,`1,500 U`,`1,000 U`],0,`(15.50−15.00)×2,100 = 1,050 غير مناسب.`],
[`Using the same data, labor efficiency variance is:`,[`1,500 U`,`1,500 F`,`1,050 U`,`1,650 U`],0,`(2,100−2,000)×15 = 1,500 غير مناسب.`],
[`Variable overhead standard rate is 6 per labor hour. Actual hours 2,100, standard hours allowed 2,000. Variable overhead efficiency variance is:`,[`600 U`,`600 F`,`300 U`,`12,600 U`],0,`(2,100−2,000)×6 = 600 غير مناسب.`]]}),

T('c1c4','Flexible Budget & Sales Variances','الموازنة المرنة وانحرافات المبيعات',
`## الفكرة
- **Static budget variance** يتفكك إلى: **Sales volume variance** + **Flexible budget variance**.
## مثال محلول
- موازنة ثابتة: 10,000 وحدة، سعر 20$، متغير 12$، ثابت 50,000 → الربح التشغيلي **30,000** (CM 80,000 − 50,000).
- فعلي: 11,000 وحدة، إيراد 214,500، تكلفة متغيرة 135,000، ثابت 52,000 → ربح **27,500**.
- **Flexible budget عند 11,000**: إيراد 220,000 − متغير 132,000 − ثابت 50,000 = **38,000**.
- **Sales volume variance** = 38,000 − 30,000 = **8,000 F** (بيع أكثر من المخطط).
- **Flexible budget variance** = 27,500 − 38,000 = **10,500 U**: إيراد −5,500 (سعر أقل)، متغير −3,000، ثابت −2,000.
- **Total static variance** = 27,500 − 30,000 = **2,500 U**.
> الفحص: الحجم ممتاز لكن السعر والتكلفة أضعفاه. هذا ما يطلبه الـ CFO: قرار تسعير وتكلفة وليس مجرد رقم.
= Sales volume var = Flexible budget OI − Static budget OI
= Flexible budget var = Actual OI − Flexible budget OI`,
{o:['تبني Flexible budget','تفرّق بين انحراف الحجم وانحراف الموازنة المرنة','تفسر مصدر الانحراف الكلي'],
c:[['Static variance = ؟','Sales volume var + Flexible budget var.'],['Flexible budget يتغير مع؟','النشاط الفعلي.'],['Sales volume var يقيس؟','أثر اختلاف الكمية المباعة عن المخطط.'],['Flexible budget var يقيس؟','أثر السعر والتكلفة عند الحجم الفعلي.'],['هل الثابت يتغير في Flexible budget؟','لا، يبقى كما هو داخل المدى الملائم.']],
q:[[`Static budget: 10,000 units, price 20, variable cost 12, fixed costs 50,000. Budgeted operating income is:`,[`30,000`,`80,000`,`40,000`,`50,000`],0,`CM = 8×10,000 = 80,000 − 50,000 = 30,000.`],
[`Actual volume is 11,000 units. Flexible budget operating income is:`,[`38,000`,`30,000`,`28,000`,`40,000`],0,`11,000×8 = 88,000 − 50,000 = 38,000.`],
[`Actual operating income is 27,500. The sales volume variance is:`,[`8,000 F`,`8,000 U`,`10,500 U`,`2,500 U`],0,`38,000 − 30,000 = 8,000 مناسب.`],
[`The flexible budget variance is:`,[`10,500 U`,`10,500 F`,`8,000 F`,`2,500 U`],0,`27,500 − 38,000 = 10,500 غير مناسب.`],
[`The total static budget variance is:`,[`2,500 U`,`2,500 F`,`18,500 U`,`10,500 U`],0,`27,500 − 30,000 = 2,500 غير مناسب.`]]}),

T('c1c2','Responsibility Centers & Transfer Pricing','مراكز المسؤولية وتسعير التحويل',
`## أنواع المراكز
- **Cost center** (يتحكم في التكلفة)، **Revenue center**، **Profit center** (إيراد وتكلفة)، **Investment center** (ربح وأصول). قيّم المدير على ما **يتحكم فيه (Controllable)**.
- **Segment reporting**: Contribution margin ثم Controllable margin ثم Segment margin (بعد التكاليف الثابتة المباشرة).
## Transfer pricing
- الحد الأدنى للبائع = التكلفة الحدية + تكلفة الفرصة. الحد الأقصى للمشتري = أقل من (سعر السوق الخارجي / القيمة له).
- **مثال**: الوحدة A تنتج مكونًا: تكلفة متغيرة 30، كاملة 45، سعر السوق 60. الوحدة B تستطيع شراءه من الخارج بـ 55.
  - **طاقة فائضة**: الحد الأدنى = 30، الأعلى = 55. التحويل الداخلي مفيد للشركة.
  - **طاقة كاملة**: الحد الأدنى = 30 + (60 − 30) = **60** > 55. لا يتم التحويل (تشتري B من الخارج).
- **الطرق**: Market-based، Cost-based (متغيرة أو كاملة + هامش)، Negotiated، **Dual pricing**.
## أهداف
- Goal congruence، تحفيز المديرين، استقلالية، تقييم الأداء.
> Market price عادة أفضل لو السوق تنافسية. بعض الدول تفرض قواعد جمركية وضريبية على أسعار التحويل بين الأطراف المرتبطة.
= Min TP = Variable cost + Opportunity cost (contribution lost)`,
{o:['تفرّق بين أنواع المراكز','تحسب نطاق سعر التحويل بالطاقة الفائضة والكاملة','تقارن طرق التسعير الداخلي'],
c:[['الحد الأدنى للتحويل بطاقة فائضة؟','التكلفة المتغيرة.'],['الحد الأدنى عند الطاقة الكاملة؟','التكلفة المتغيرة + المساهمة الضائعة (غالبًا سعر السوق).'],['Investment center؟','مركز مسؤول عن الربح والأصول.'],['Dual pricing؟','سعر للبائع وسعر للمشتري مختلفان.'],['Controllable cost؟','تكلفة يتحكم فيها المدير.']],
q:[[`Division A has idle capacity, variable cost 30, market price 60. Division B can buy externally for 55. The minimum transfer price acceptable to A is:`,[`30`,`45`,`55`,`60`],0,`مع طاقة فائضة لا توجد مساهمة ضائعة، فالحد الأدنى = التكلفة المتغيرة.`],
[`In the same situation, A is operating at full capacity. The minimum transfer price is:`,[`60`,`30`,`45`,`55`],0,`30 + مساهمة ضائعة (60−30) = 60.`],
[`Under the full-capacity case, should B buy from A at 60 when it can buy externally at 55?`,[`No, buy externally at 55`,`Yes, always internally`,`Yes, if A cuts its price to 30`,`Only at full cost 45`],0,`الحد الأدنى للبائع 60 أعلى من الحد الأقصى للمشتري 55 فلا صفقة.`],
[`A manager is responsible for revenues, costs and the assets invested. The center is a(n):`,[`Investment center`,`Cost center`,`Revenue center`,`Profit center`],0,`مسؤولية عن الأصول تجعله Investment center.`],
[`Dual pricing means:`,[`Buyer and seller record different transfer prices`,`Two competing suppliers`,`A price in two currencies`,`Setting price at full cost`],0,`Dual pricing يسمح لكل طرف بسعر مختلف لتحقيق التحفيز.`]]}),

T('c1c3','Performance Measures: ROI, RI, EVA, Balanced Scorecard','مقاييس الأداء: ROI وRI وEVA وBSC',
`## ROI
- **ROI = Operating income ÷ Invested assets** = **Margin × Turnover** (DuPont). مثال: هامش 10% × دوران 2 = **20%**.
- عيبه: يشجع على رفض مشروعات جيدة عائدها أعلى من تكلفة رأس المال لكن أقل من ROI الحالي.
## Residual income
- **RI = OI − (Required return × Invested assets)**. مثال: OI 300,000، أصول 1,500,000، عائد مطلوب 15% → RI = 300,000 − 225,000 = **75,000**. ROI = 20%.
- مشروع جديد: استثمار 200,000 يحقق 36,000 (18%). ROI بعد المشروع = 336,000 ÷ 1,700,000 = 19.76% < 20%، فالمدير المقيم بالـ ROI **يرفضه**. لكن RI يزيد بـ 36,000 − 30,000 = **6,000** فالشركة تقبله.
## EVA
- **EVA = NOPAT − WACC × (Total assets − Current liabilities)**. مثال: 120,000 − 10%×900,000 = **30,000**.
## Balanced Scorecard
- أربعة منظورات: Financial، Customer، Internal business process، Learning & growth. تربط الاستراتيجية بمؤشرات Leading وLagging.
> فخ: مقارنة ROI بين قسمين بأصول بقيم دفترية مختلفة (Gross vs Net book value) قد تضلل.
= ROI = OI / Assets
= RI = OI − r × Assets
= EVA = NOPAT − WACC × Capital`,
{o:['تحسب ROI وRI وEVA','تفسر لماذا ROI قد يرفض مشروعًا مفيدًا','تذكر المنظورات الأربعة للـ BSC'],
c:[['DuPont ROI؟','Margin × Asset turnover.'],['RI الموجب يعني؟','العائد أعلى من تكلفة رأس المال المطلوبة.'],['EVA = ؟','NOPAT − (WACC × رأس المال المستثمر).'],['منظورات BSC؟','مالي، عملاء، عمليات داخلية، تعلم ونمو.'],['ميزة RI على ROI؟','يحفز قبول كل مشروع عائده فوق المعدل المطلوب.']],
q:[[`Operating income 300,000, invested assets 1,500,000, required return 15%. Residual income is:`,[`75,000`,`225,000`,`150,000`,`300,000`],0,`300,000 − 225,000 = 75,000.`],
[`A new project requires 200,000 and generates 36,000 per year (18%). The division's current ROI is 20% and required return is 15%. The manager evaluated on ROI would likely:`,[`Reject it although it increases residual income`,`Accept it because ROI rises`,`Be indifferent`,`Reject it because RI falls`],0,`ROI يهبط من 20% إلى 19.76%، لكن RI يزيد 6,000.`],
[`NOPAT 120,000, WACC 10%, invested capital 900,000. EVA is:`,[`30,000`,`120,000`,`90,000`,`12,000`],0,`120,000 − 90,000 = 30,000.`],
[`Net margin 10% and asset turnover 2.0. ROI is:`,[`20%`,`5%`,`12%`,`0.2%`],0,`10% × 2 = 20%.`],
[`Which is NOT one of the four Balanced Scorecard perspectives?`,[`Regulatory`,`Customer`,`Learning and growth`,`Internal business process`],0,`المنظورات: مالي، عملاء، عمليات داخلية، تعلم ونمو.`]]})
]}

]}]}]
});
