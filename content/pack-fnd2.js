CFO.addPack({id:'fnd2', ver:'2026.11.4', date:'2026-11-24', name:'CFO Toolkit — Modeling, Reporting, Close & Valuation',
news:['2026.11.4 — أساسيات الـ CFO: 4 مواضيع جديدة (النمذجة، تقرير الإدارة، القفل الشهري، تقييم العلامة التجارية).'],
tracks:[{id:'fnd', parts:[{id:'fnd-main', secs:[

{id:'fnd14', en:'14. Modeling, Reporting & Close', ar:'١٤. النمذجة والتقارير والقفل', topics:[
T('f14a','Financial Modeling Principles','مبادئ النمذجة المالية',
`## هيكل النموذج
- **Inputs** (مدخلات منفصلة بلون ثابت) ← **Calculations** ← **Outputs** (تقارير). لا أرقام مكتوبة داخل المعادلات (No hardcodes).
- وحدة زمنية واحدة، تسلسل زمني متسق، **Checks** (ميزانية متوازنة، مجموع الأقسام = الإجمالي).
## القوائم الثلاث المترابطة
- الربح من قائمة الدخل ← الأرباح المحتجزة ← الميزانية. الميزانية تُشتق منها التدفقات: صافي الربح + إهلاك − زيادة رأس المال العامل − CAPEX ± التمويل = تغير النقد.
## سيناريوهات وحساسية
- **Base / Best / Worst**، **Sensitivity** على متغير أو متغيرين (جدول بيانات). حدد **Drivers**: سعر، كمية، تكلفة وحدة، دوران.
- مثال مطعم: أيام تشغيل × عدد الفواتير × متوسط الفاتورة = الإيراد. غيّر متوسط الفاتورة ±5% وراقب أثره على EBITDA (Operating leverage).
## ضوابط النماذج
- مراجعة النسخة، سجل التعديلات، حماية الخلايا، اختبار النموذج بحالة معروفة.
> قاعدة: النموذج الجيد يجاوب على "ماذا لو؟" بتغيير خلية مدخلات واحدة.`,
{o:['تبني نموذجًا مفصول المدخلات','تربط القوائم الثلاث','تضيف فحوصات وسيناريوهات'],
c:[['فصل المدخلات؟','لتغيير الافتراضات دون لمس المعادلات.'],['Hardcode؟','رقم مكتوب داخل معادلة.'],['Check؟','معادلة تتأكد من توازن الميزانية.'],['Driver؟','متغير أساسي يحرك النتائج.'],['Sensitivity؟','أثر تغير متغير واحد أو اثنين على النتيجة.']],
q:[[`A good modeling practice is to:`,[`Separate inputs from calculations and avoid hardcodes in formulas`,`Hardcode growth rates inside formulas`,`Mix inputs and outputs`,`Avoid checks`],0,`فصل المدخلات.`],
[`In a three-statement model, net income flows to:`,[`Retained earnings on the balance sheet`,`Share capital`,`Accounts payable`,`Inventory`],0,`الأرباح المحتجزة.`],
[`A sensitivity table changes:`,[`One or two key inputs to see their effect on an output`,`All formulas`,`Only the layout`,`The accounting policy`],0,`تحليل الحساسية.`],
[`Which check confirms the integrity of a model?`,[`Assets minus liabilities and equity equal zero`,`Revenue equals cost`,`Net income equals cash`,`Taxes equal zero`],0,`توازن الميزانية.`],
[`Operating leverage means a small change in revenue causes:`,[`A larger percentage change in operating profit`,`No change in profit`,`A smaller change in profit`,`A change in tax rate`],0,`تكاليف ثابتة.`]]}),

T('f14b','Management Reporting Pack & Dashboards','تقرير الإدارة ولوحات المؤشرات',
`## مكونات تقرير الإدارة الشهري
- **Executive summary** (3 رسائل فقط): ما الذي حدث؟ لماذا؟ ما الإجراء المطلوب؟
- قائمة الدخل **Actual vs Budget vs Last year** مع تعليق على الانحرافات الجوهرية.
- **الفروع/القطاعات** (Branch P&L)، المبيعات والتكاليف الرئيسية، **Cash & Working capital**، **CAPEX**، **Forecast** محدث.
## تصميم الـ KPIs
- اختر 8–12 مؤشرًا: **Same-store sales، Average ticket، Food cost %، Labor cost %، Prime cost %، Rent %، EBITDA margin، Cash conversion**.
- مثال: Prime cost = (Food + Labor) ÷ Sales. إيراد 1,000,000، طعام 300,000، عمالة 280,000 → **58%** (الهدف شائعًا أقل من 60–65% بحسب النموذج).
## الانحرافات
- ركز على ما يتجاوز عتبة (مثلًا 5% أو مبلغ). فسّر **الحجم / السعر / المزيج / الكفاءة**.
## البيانات
- مصدر واحد للحقيقة، مواعيد ثابتة، نسخة مجمدة بعد الموافقة.
> الإدارة تقرأ الصفحة الأولى فقط. اجعلها تحكي القصة وتقترح القرار.
= Prime cost % = (Food cost + Labor cost) / Sales`,
{o:['تصمم تقرير إدارة','تحدد KPIs للمطاعم','تفسر الانحرافات'],
f:[['Prime cost %','(Food + Labor)/Sales',''],['Food cost %','COGS / Sales','']],
c:[['Prime cost؟','تكلفة الطعام + العمالة كنسبة من المبيعات.'],['Same-store sales؟','مبيعات الفروع المقارنة سنويًا.'],['الانحراف يفسر بـ؟','حجم، سعر، مزيج، كفاءة.'],['Executive summary؟','ثلاث رسائل: ما حدث ولماذا والإجراء.'],['Single source of truth؟','مصدر بيانات واحد معتمد.']],
q:[[`Sales 1,000,000; food cost 300,000; labor cost 280,000. The prime cost percentage is:`,[`58%`,`30%`,`28%`,`80%`],0,`580/1000.`],
[`A management report should begin with:`,[`A concise executive summary with actions`,`A long list of journal entries`,`Detailed ledgers`,`Raw data dumps`],0,`الرسائل أولًا.`],
[`Same-store sales growth compares:`,[`Sales of outlets open in both periods`,`All sales including new outlets`,`Sales to assets`,`Costs to sales`],0,`الفروع المقارنة.`],
[`A variance in revenue caused by selling more items than planned is a:`,[`Volume variance`,`Price variance`,`Mix variance`,`Efficiency variance`],0,`حجم.`],
[`A good KPI set for management has:`,[`A limited number of actionable measures`,`Hundreds of metrics`,`Only financial lagging indicators`,`No targets`],0,`قليلة وقابلة للتنفيذ.`]]}),

T('f14c','Month-End Close & Audit Readiness','القفل الشهري والاستعداد للمراجعة',
`## قفل شهري منضبط (Close calendar)
- **يوم 1–2**: إقفال المبيعات والمشتريات والمخزون (Cutoff). **يوم 3**: مطابقات البنوك والذمم. **يوم 4**: المستحقات والمقدمات والإهلاك. **يوم 5**: مراجعة وتحليل ثم التقرير.
## المطابقات الأساسية
- **Bank rec، AR/AP subledger to GL، Inventory count to GL، Intercompany، Prepaids، Fixed assets register، Payroll**. كل رصيد له مالك وتاريخ مراجعة.
## القيود
- **Accruals** للمصروفات غير المفوترة (مثلًا إيجار وكهرباء)، **Prepaids** تُستنفد شهريًا، **Provisions** للالتزامات. لكل قيد مستند داعم وموافقة.
## الاستعداد للمراجعة
- **PBC list**: مطابقات، كشوف بنوك، عقود، جداول أعمار، سجل الأصول، محاضر. فصل المهام وسجل تغييرات النظام.
- **Cutoff**: تأكد من تسجيل المبيعات والمشتريات في الفترة الصحيحة (محاضر الاستلام).
## تحسين الجودة
- قوائم فحص، أتمتة، تتبع **Days to close** كمؤشر، وتحليل الأخطاء المتكررة.
> أخطر مشكلة: ترحيل رصيد غير مفسر شهورًا. اطلب تفسير كل رصيد تتجاوز عمره 90 يومًا.`,
{o:['تصمم تقويم قفل شهري','تعد قائمة PBC للمراجع','تتحكم في cutoff'],
c:[['PBC؟','Prepared By Client: مستندات تطلبها المراجعة.'],['Cutoff؟','تسجيل المعاملات في الفترة الصحيحة.'],['Accrual؟','مصروف حدث ولم يُفوتر.'],['Days to close؟','مؤشر سرعة إقفال الدفاتر.'],['Intercompany؟','مطابقة المعاملات بين شركات المجموعة.']],
q:[[`A utility expense for December is invoiced in January. At December year-end it should be recorded as:`,[`An accrued expense`,`A prepaid expense`,`Revenue`,`Equity`],0,`مصروف مستحق.`],
[`A PBC list is:`,[`A list of documents the client prepares for the auditor`,`A budget plan`,`A tax return`,`A bank statement`],0,`Prepared by client.`],
[`Cutoff testing ensures that transactions are recorded:`,[`In the correct accounting period`,`In the correct currency`,`By the correct person`,`At the correct price`],0,`الفترة الصحيحة.`],
[`Which reconciliation compares the subledger with the general ledger?`,[`Accounts receivable subledger to GL`,`Bank to payroll`,`Budget to forecast`,`Inventory to sales`],0,`Subledger to GL.`],
[`A strong close process includes:`,[`Owners and review dates for every reconciliation`,`Skipping reconciliations`,`Closing after the audit`,`Manual only`],0,`مسؤولية وتوقيت.`]]})
]},

{id:'fnd15', en:'15. Valuation & Growth Capital', ar:'١٥. التقييم وتمويل النمو', topics:[
T('f15a','Valuing a Restaurant Brand & Unit Economics for Franchise','تقييم علامة مطاعم واقتصاديات الفرع والفرنشايز',
`## اقتصاديات الفرع
- **Four-wall EBITDA** = إيراد الفرع − كل تكاليف الفرع المباشرة (بدون المركز الرئيسي).
- **Payback** = الاستثمار الأولي ÷ التدفق السنوي. فرع باستثمار 4,000,000 وـ Four-wall EBITDA سنوي 1,600,000 → استرداد **2.5 سنة**. **Cash-on-cash** = 1,600,000 ÷ 4,000,000 = **40%**.
## تقييم المجموعة
- **EV/EBITDA** (مضاعف قطاعي)، **DCF**، **Sum of the parts**. مثال: EBITDA 10 ملايين × مضاعف 6 = EV **60 مليون**. ناقص صافي الدين 15 → Equity **45 مليون**.
- عدّل EBITDA لنظافة الأرباح (بنود غير متكررة، إيجارات حسب IFRS 16).
## الفرنشايز
- **Royalty** 4–6% (نطاق تقريبي) + **Franchise fee** مقدمة. التحكم في الجودة، **Master franchise** للدول. حاسب الفرنشايز نفس Payback المتوقع للمستثمر.
## تمويل النمو
- التمويل الداخلي، قروض فروع، شركاء، Equity من مستثمر (Dilution). حافظ على **Net debt/EBITDA** مقبولًا للبنوك.
> التقييم يتبع النمو القابل للتكرار وليس عدد الفروع فقط.
= EV = EBITDA × Multiple ; Equity = EV − Net debt`,
{o:['تحسب Payback وCash-on-cash','تحسب EV وEquity value','تفهم اقتصاديات الفرنشايز'],
f:[['Payback','Investment / Annual cash flow',''],['Equity value','EV − Net debt','']],
c:[['Four-wall EBITDA؟','ربح الفرع قبل مصروفات المركز الرئيسي.'],['Cash-on-cash؟','التدفق السنوي ÷ الاستثمار.'],['Royalty؟','نسبة من مبيعات الفرنشايز تُدفع للمانح.'],['EV؟','قيمة المنشأة قبل صافي الدين.'],['Dilution؟','انخفاض حصة الملاك عند إدخال شريك.']],
q:[[`A branch requires 4,000,000 investment and generates annual four-wall EBITDA of 1,600,000. Payback is:`,[`2.5 years`,`4 years`,`1.6 years`,`40 years`],0,`4,000,000/1,600,000.`],
[`Cash-on-cash return for the same branch is:`,[`40%`,`25%`,`160%`,`2.5%`],0,`1,600,000/4,000,000.`],
[`EBITDA 10 million, multiple 6, net debt 15 million. Equity value is:`,[`45 million`,`60 million`,`75 million`,`15 million`],0,`60 − 15.`],
[`A franchisor typically earns:`,[`A royalty on franchisee sales plus an initial fee`,`Only profits`,`Rent only`,`Interest only`],0,`Royalty + fee.`],
[`Issuing equity to a new investor causes:`,[`Dilution of existing owners' percentage`,`No change in ownership`,`Higher debt`,`Lower assets`],0,`تخفيف الحصة.`]]})
]}

]}]}]
});
