CFO.addPack({id:'cpa2', ver:'2026.11.4', date:'2026-11-24', name:'CPA Deep Dive — FAR, AUD, REG, BAR',
news:['2026.11.4 — CPA: 9 مواضيع موسّعة بأمثلة محلولة وأسئلة (FAR/AUD/REG/BAR).'],
tracks:[{id:'cpa', parts:[

{id:'cpa-far', secs:[
{id:'farII', topics:[
T('p-far3','Cash, Receivables & Inventory','النقدية والذمم والمخزون',
`## الذمم المدينة
- **Allowance method**: مصروف الديون المعدومة = المطلوب في المخصص − رصيد المخصص الحالي (الدائن) أو + رصيد مدين.
- مثال: AR 500,000، طريقة النسبة 3% → المخصص المطلوب **15,000**. الرصيد الدائن الحالي 4,000 → المصروف **11,000**. لو الرصيد مدين 2,000 → المصروف **17,000**.
- **الشطب (Write-off)** لا يغير صافي AR ولا الدخل. الاسترداد: عكس الشطب ثم تحصيل.
- **Factoring**: With recourse قد يُعامل كاقتراض. **Without recourse** بيع.
## المخزون
- FIFO / LIFO / Weighted average. **LCNRV** لغير LIFO وطريقة التجزئة. **LCM** (التكلفة أو السوق) لـ LIFO وطريقة التجزئة.
- LIFO يخفض الضريبة في التضخم لكنه يُظهر المخزون بتكلفة قديمة. **LIFO liquidation** يرفع الربح مؤقتًا.
- **Periodic vs Perpetual**: نتائج FIFO واحدة، أما LIFO وWAC فتختلف.
## النقدية
- **Bank reconciliation**: شيكات معلقة وإيداعات في الطريق وأخطاء البنك والدفاتر. النقدية ومعادلاتها (أقل من 3 أشهر).
> الامتحان يختبر: أي بند يعدل رصيد البنك وأي بند يعدل الدفاتر (يحتاج قيد).`,
{o:['تحسب مصروف الديون المعدومة','تفرّق بين طرق المخزون وLCNRV وLCM','تعدّ تسوية بنك'],
c:[['الشطب يؤثر على صافي AR؟','لا.'],['LCNRV لأي طرق؟','غير LIFO وغير التجزئة.'],['Factoring without recourse؟','بيع.'],['LIFO liquidation؟','بيع طبقات قديمة فيرتفع الربح.'],['شيكات معلقة تعدل؟','رصيد البنك.']],
q:[[`Accounts receivable 500,000; the allowance should be 3%. The allowance account currently has a credit balance of 4,000. Bad debt expense is:`,[`11,000`,`15,000`,`19,000`,`4,000`],0,`15,000 − 4,000 = 11,000.`],
[`Same facts, but the allowance has a debit balance of 2,000. Bad debt expense is:`,[`17,000`,`13,000`,`15,000`,`2,000`],0,`15,000 + 2,000 = 17,000.`],
[`Writing off a specific uncollectible account under the allowance method:`,[`Does not change net receivables`,`Decreases net income`,`Decreases net receivables`,`Increases expenses`],0,`يخفض AR والمخصص بنفس المبلغ.`],
[`Under US GAAP, which inventory methods are measured at the lower of cost and net realizable value?`,[`FIFO and average cost`,`LIFO only`,`Retail LIFO only`,`None`],0,`LIFO وطريقة التجزئة تستخدمان LCM.`],
[`Outstanding checks on a bank reconciliation are:`,[`Deducted from the bank balance`,`Added to the book balance`,`Deducted from the book balance`,`Added to the bank balance`],0,`تعدل رصيد البنك.`]]}),

T('p-far4','PP&E, Intangibles & Investments','الأصول الثابتة وغير الملموسة والاستثمارات',
`## PP&E
- التكلفة = السعر + كل ما يلزم لوضع الأصل في الاستخدام. **الفوائد** تُرسمل للأصل المؤهل. **الاضمحلال (ASC 360)**: اختبار الاسترداد بالتدفقات غير المخصومة ثم قياس الخسارة بالقيمة العادلة. لا عكس.
## الأصول غير الملموسة والشهرة
- **R&D** مصروف. **البرمجيات**: مصروف حتى الجدوى التقنية ثم رسملة. الشهرة والأصول غير محددة العمر: اختبار سنوي (الشهرة بالمقارنة المباشرة لـ Reporting unit بالقيمة العادلة).
## الاستثمارات
- **أسهم** (ASC 321): FV-NI. **سندات**: Held-to-maturity (تكلفة مستنفدة)، Trading (FV-NI)، AFS (FV-OCI).
- **Equity method** (تأثير جوهري، عادة 20–50%): الاستثمار يزيد بحصة الأرباح ويقل بالتوزيعات.
- مثال: ملكية 30%، ربح المستثمَر فيه 200,000، توزيعات 50,000 → الاستثمار يزيد بـ 60,000 − 15,000 = **45,000**، وإيراد الاستثمار **60,000**.
> التوزيعات المستلمة بطريقة حقوق الملكية تخفض الاستثمار ولا تُعد إيرادًا.
= Equity method income = % × Investee NI`,
{o:['تحسب أثر طريقة حقوق الملكية','تفرّق بين تصنيفات الأوراق المالية','تطبق قواعد الاضمحلال'],
c:[['Equity method يزداد بـ؟','حصة الأرباح، وينقص بالتوزيعات.'],['AFS يتأثر بـ؟','OCI.'],['اضمحلال PP&E يُعكس؟','لا.'],['R&D؟','مصروف.'],['الأسهم تحت ASC 321؟','FV-NI.']],
q:[[`An investor owns 30% of an investee with significant influence. The investee earns 200,000 and pays dividends of 50,000. The increase in the investment account is:`,[`45,000`,`60,000`,`15,000`,`75,000`],0,`60,000 − 15,000.`],
[`Equity method investment income for the year in the previous question is:`,[`60,000`,`45,000`,`15,000`,`200,000`],0,`30%×200,000.`],
[`Unrealized gains on available-for-sale debt securities are reported in:`,[`Other comprehensive income`,`Net income`,`Retained earnings`,`Goodwill`],0,`AFS يمر عبر OCI.`],
[`Impairment losses on property, plant and equipment held for use under US GAAP:`,[`Cannot be reversed`,`Can always be reversed`,`Are recorded in OCI`,`Are never recorded`],0,`لا عكس في US GAAP.`],
[`Costs of research and development are generally:`,[`Expensed as incurred`,`Capitalized`,`Deferred 5 years`,`Added to goodwill`],0,`مصروف.`]]}),

T('p-far5','Liabilities, Debt, Leases, Taxes & Equity','الالتزامات والديون والإيجار والضرائب وحقوق الملكية',
`## السندات
- سعر السند = PV للكوبونات + PV للأصل. كوبون أقل من السوق → **Discount**. الاستنفاد بالفائدة الفعلية: مصروف = دفتري × معدل السوق.
- مثال: 100,000، كوبون 8%، سوق 10%، 3 سنوات → السعر **95,026**، مصروف السنة 1 = **9,503**، الكوبون 8,000، استنفاد الخصم 1,503.
## الإيجارات (ASC 842)
- **Finance** و**Operating** للمستأجر: كلاهما يعترف بـ ROU وبالتزام، لكن Operating له مصروف إيجار خطي واحد.
## الضرائب
- DTL/DTA بالمعدل المقرر المستقبلي. **Valuation allowance** عندما يكون الأرجح (more likely than not) عدم تحقق DTA.
## حقوق الملكية
- **Treasury stock (cost method)**: يخفض الحقوق بالتكلفة. إعادة إصدار بأعلى: APIC. **Stock dividend** صغير (<20–25%) بالقيمة العادلة؛ كبير بالقيمة الاسمية. **Stock split** لا قيد.
- **Retained earnings**: يتغير بالأرباح والتوزيعات وتصحيح أخطاء الفترات السابقة.
> الفرق عن IFRS: معالجة الاضمحلال والرسملة والـ LIFO.`,
{o:['تحسب مصروف الفائدة الفعلي','تفهم Valuation allowance','تعالج Treasury stock والتوزيعات'],
c:[['Valuation allowance؟','يخفض DTA إذا الأرجح عدم تحققه.'],['Stock split؟','لا قيد، يتغير عدد الأسهم فقط.'],['Treasury stock؟','يخفض حقوق الملكية بالتكلفة.'],['كوبون < سوق؟','خصم.'],['Operating lease للمستأجر؟','ROU + مصروف خطي.']],
q:[[`A 3-year, 100,000 bond with an 8% stated rate is issued at 95,026 when the market rate is 10%. Year 1 interest expense is:`,[`9,503`,`8,000`,`10,000`,`1,503`],0,`95,026×10%.`],
[`A valuation allowance is recorded against a deferred tax asset when:`,[`It is more likely than not that some of it will not be realized`,`Taxes are due`,`The tax rate changes`,`The asset is sold`],0,`more likely than not.`],
[`A stock split generally:`,[`Requires no journal entry`,`Reduces retained earnings`,`Increases total equity`,`Is recorded at fair value`],0,`لا قيد.`],
[`Purchase of treasury stock under the cost method:`,[`Reduces total stockholders' equity`,`Increases total equity`,`Is recorded as an asset`,`Increases retained earnings`],0,`بالتكلفة.`],
[`Under ASC 842, a lessee's operating lease results in:`,[`ROU asset, lease liability and a single straight-line lease cost`,`No balance sheet impact`,`Interest and depreciation separately`,`Only expense when paid`],0,`نموذج خطي.`]]})
]},
{id:'farIII', topics:[
T('p-far6','Revenue (ASC 606) & Business Combinations','الإيراد وتجميع الأعمال',
`## ASC 606
- الخطوات الخمس مثل IFRS 15. مثال التوزيع: منتج SSP 900 وخدمة SSP 300 بسعر 1,000 → المنتج **750**، الخدمة **250**.
- **Principal vs Agent**، **Variable consideration** (expected value أو most likely) مع الـ Constraint. **عقود الإنشاءات**: Over time بمقياس Input (تكلفة إلى تكلفة) أو Output.
- مثال Cost-to-cost: عقد 1,000، تكلفة مقدرة 800، تكلفة حتى تاريخه 200 → إنجاز 25% → إيراد **250**.
## تجميع الأعمال (ASC 805)
- طريقة الاستحواذ: كل شيء بالقيمة العادلة، و**NCI بالقيمة العادلة**. الشهرة = المقابل + NCI + حصة سابقة − صافي الأصول القابلة للتحديد بالقيمة العادلة.
- مثال: دفع 1,000 مقابل 80%، NCI بالقيمة العادلة 220، صافي الأصول 900 → الشهرة **320**.
- تكاليف الاستحواذ مصروف. **Contingent consideration** تُقاس بالقيمة العادلة.
## التوحيد
- حذف المعاملات البينية والأرباح غير المحققة. **VIE** يوحدها الطرف المسيطر (Primary beneficiary).
= Goodwill = Consideration + NCI(FV) − FV of net assets`,
{o:['تطبق ASC 606 وتحسب نسبة الإنجاز','تحسب الشهرة وفق ASC 805','تفهم VIE'],
c:[['NCI في US GAAP؟','بالقيمة العادلة.'],['Cost-to-cost؟','نسبة التكلفة المنفقة إلى المقدرة.'],['VIE؟','كيان متغير الفائدة يُوحَّد لدى Primary beneficiary.'],['تكاليف الاستحواذ؟','مصروف.'],['Contingent consideration؟','بالقيمة العادلة وقت الاستحواذ.']],
q:[[`A contract price is 1,000, estimated total cost 800, cost incurred to date 200. Revenue recognized under cost-to-cost is:`,[`250`,`200`,`1,000`,`800`],0,`25% × 1,000.`],
[`Company A pays 1,000 for 80% of B. NCI fair value 220; fair value of B's identifiable net assets 900. Goodwill is:`,[`320`,`280`,`100`,`220`],0,`1,000 + 220 − 900.`],
[`Under ASC 805, acquisition-related transaction costs are:`,[`Expensed as incurred`,`Capitalized in goodwill`,`Added to investment`,`Recorded in equity`],0,`مصروف.`],
[`A bundle: product SSP 900 and service SSP 300 sold for 1,000. Revenue allocated to the service is:`,[`250`,`300`,`150`,`500`],0,`1,000×300/1,200.`],
[`The primary beneficiary of a variable interest entity:`,[`Consolidates it`,`Uses the equity method`,`Uses the cost method`,`Discloses only`],0,`يوحدها.`]]})
]}
]},

{id:'cpa-aud', secs:[
{id:'audII', topics:[
T('p-aud2','Planning, Materiality & Audit Risk','التخطيط والأهمية النسبية ومخاطر المراجعة',
`## نموذج مخاطر المراجعة
- **Audit risk = IR × CR × DR** (مخاطر متأصلة × رقابية × اكتشاف). مثال: AR المقبول 5%، IR 100%، CR 50% → **DR = 0.05 ÷ (1 × 0.5) = 10%**. كل ما زادت مخاطر RMM قلّت DR المقبولة، فتزيد الاختبارات.
## الأهمية النسبية
- **Overall materiality** للقوائم ككل، **Performance materiality** أقل منها لتقليل مخاطر تجمع الأخطاء، و**Clearly trivial threshold** للأخطاء التي تُتجاهل.
- أساس شائع للقياس: نسبة من الدخل قبل الضريبة أو الإيرادات أو الأصول.
## تقييم المخاطر
- فهم المنشأة وبيئتها وضوابطها الداخلية. **Inquiry, Observation, Inspection, Analytical procedures**.
- **Fraud risks** (Significant risks): الاعتراف بالإيراد وتجاوز الإدارة للضوابط افتراضيًا.
## الاستجابة
- **Overall responses** (تدوير الفريق، عنصر المفاجأة) ثم **Further audit procedures**: Tests of controls و Substantive procedures.
> فخ: تقليل الاختبارات الجوهرية مع ضوابط ضعيفة خطأ. ضعف الضوابط يعني مزيدًا من الجوهري.
= AR = IR × CR × DR`,
{o:['تحل نموذج مخاطر المراجعة','تفرّق بين الأهمية العامة والتنفيذية','تحدد المخاطر الجوهرية والاستجابة'],
c:[['Audit risk model؟','IR × CR × DR.'],['Performance materiality؟','أقل من الأهمية العامة لتقليل تجمع الأخطاء.'],['مخاطر افتراضية للاحتيال؟','الاعتراف بالإيراد وتجاوز الإدارة.'],['DR تنخفض عندما؟','ترتفع RMM.'],['Substantive procedures؟','اختبارات تفاصيل وإجراءات تحليلية.']],
q:[[`Acceptable audit risk 5%, inherent risk 100%, control risk 50%. The allowable detection risk is:`,[`10%`,`5%`,`2.5%`,`25%`],0,`0.05 ÷ 0.5.`],
[`As assessed risk of material misstatement increases, the auditor should:`,[`Lower detection risk by performing more substantive testing`,`Raise detection risk`,`Reduce sample sizes`,`Rely more on analytical procedures only`],0,`DR أقل.`],
[`Performance materiality is set:`,[`Lower than overall materiality`,`Higher than overall materiality`,`Equal to zero`,`Equal to clearly trivial`],0,`لتقليل مخاطر تجمع الأخطاء.`],
[`Which is a presumed fraud risk in an audit?`,[`Improper revenue recognition`,`Depreciation methods`,`Rent expense`,`Insurance`],0,`افتراض الاعتراف بالإيراد.`],
[`Tests of controls are performed primarily to:`,[`Evaluate the operating effectiveness of controls`,`Verify account balances directly`,`Estimate fraud`,`Set materiality`],0,`فعالية التشغيل.`]]})
]},
{id:'audIII', topics:[
T('p-aud3','Evidence, Sampling & Analytical Procedures','الأدلة والعينات والإجراءات التحليلية',
`## الأدلة
- الأقوى: ما يتم الحصول عليه من **مصدر خارجي** مباشرة، ثم الداخلي بضوابط فعالة. **المصادقات (Confirmations)** للمدينين والبنوك. **Inspection** و**Recalculation** و**Reperformance**.
## العينات
- **Attribute sampling** لاختبارات الضوابط: معدل الانحراف المقبول والمتوقع ومستوى الثقة يحددون الحجم. **Variables / MUS** للتفاصيل.
- **MUS**: الحجم = (القيمة الدفترية × معامل الثقة) ÷ الخطأ المقبول. مثال: 5,000,000 × 3 ÷ 200,000 = **75**. وحدة الاختيار هي الجنيه (الدولار).
- **مخاطر العينات** (Sampling risk) مقابل **غير العينات** (Nonsampling risk: أخطاء في الأسلوب).
- **مخاطر الاعتماد الزائد (Overreliance)** و**Incorrect acceptance** تؤثران على الفعالية. **Underreliance** و**Incorrect rejection** تؤثران على الكفاءة.
## الإجراءات التحليلية
- في **التخطيط** (مطلوبة)، **الجوهرية** (اختيارية)، **المراجعة النهائية** (مطلوبة). التوقع المستقل أساس الاختبار.
## أنواع الاختبارات حسب الإقرار
- **Existence/Occurrence، Completeness، Rights & Obligations، Valuation، Presentation**. Cutoff.
> الإيرادات: اختبار الوجود. الالتزامات: اختبار الاكتمال.
= MUS sample size = (Book value × RF) / Tolerable misstatement`,
{o:['تحسب حجم عينة MUS','تفرّق بين مخاطر العينات وغير العينات','تحدد الإقرار المناسب لكل اختبار'],
c:[['MUS؟','Monetary unit sampling: احتمال الاختيار يتناسب مع القيمة.'],['Overreliance؟','تأثير على فعالية المراجعة.'],['تحليلية إلزامية في؟','التخطيط والمراجعة النهائية.'],['الالتزامات تختبر لـ؟','Completeness.'],['أقوى الأدلة؟','خارجي مباشر.']],
q:[[`Book value of the population 5,000,000, reliability factor 3, tolerable misstatement 200,000. The monetary unit sample size is:`,[`75`,`83`,`25`,`150`],0,`5,000,000×3/200,000.`],
[`To test completeness of accounts payable, the auditor should select items from:`,[`Subsequent disbursements and unrecorded liabilities`,`The accounts payable subledger`,`Purchase orders`,`The general ledger only`],0,`ابدأ من خارج السجل.`],
[`Which risk relates to the efficiency of the audit rather than its effectiveness?`,[`Risk of incorrect rejection`,`Risk of incorrect acceptance`,`Risk of overreliance`,`Fraud risk`],0,`الرفض الخاطئ يسبب عملًا إضافيًا.`],
[`Analytical procedures are required:`,[`During planning and the overall review`,`Only in substantive testing`,`Only at year-end`,`Never`],0,`التخطيط والمراجعة النهائية.`],
[`Which evidence is generally the most reliable?`,[`Confirmation received directly from a third party`,`Management representation`,`Internal memo`,`Client schedule`],0,`مصدر خارجي مباشر.`]]})
]},
{id:'audIV', topics:[
T('p-aud4','Audit Reports & SSARS','تقارير المراجعة وSSARS',
`## أنواع الرأي
- **Unmodified**: القوائم عادلة.
- **Qualified**: خطأ جوهري **غير واسع الانتشار** أو قيد على النطاق جوهري غير واسع. العبارة: "except for".
- **Adverse**: خطأ جوهري **وواسع الانتشار**.
- **Disclaimer**: قيد على النطاق جوهري **وواسع الانتشار**، فلا يمكن إبداء رأي.
## الفقرات الإضافية
- **Emphasis-of-matter** (موضوع مهم مفصح عنه)، **Other-matter**. **Going concern**: الشك الكبير لمدة سنة من تاريخ إصدار القوائم يوجب إفصاحًا وفقرة.
- **Key audit matters (CAM) للشركات العامة** وفق PCAOB. معايير AICPA تستخدم KAM اختياريًا.
## الأحداث اللاحقة
- **Type I** (ظروف وقت الميزانية) تعدل القوائم. **Type II** (ظروف جديدة) إفصاح فقط.
## خدمات أخرى (SSARS)
- **Compilation**: لا تأكيد. **Review**: تأكيد محدود (Limited assurance). المراجعة: تأكيد معقول.
> ضع في بالك: Qualified للأخطاء المحددة، Adverse للأخطاء المنتشرة.`,
{o:['تحدد نوع الرأي','تفرّق بين الأحداث اللاحقة','تفرّق بين Compilation وReview وAudit'],
c:[['Qualified؟','خطأ جوهري غير منتشر أو قيد نطاق جوهري غير منتشر.'],['Adverse؟','خطأ جوهري ومنتشر.'],['Disclaimer؟','قيد نطاق جوهري ومنتشر.'],['Review؟','تأكيد محدود.'],['Type I subsequent event؟','تعديل القوائم.']],
q:[[`The auditor concludes that financial statements contain a material misstatement that is pervasive. The opinion is:`,[`Adverse`,`Qualified`,`Disclaimer`,`Unmodified with emphasis`],0,`جوهري ومنتشر.`],
[`A scope limitation that is material but not pervasive results in:`,[`A qualified opinion`,`An adverse opinion`,`A disclaimer`,`An unmodified opinion`],0,`رأي متحفظ.`],
[`A review engagement under SSARS provides:`,[`Limited assurance`,`Reasonable assurance`,`No assurance`,`Absolute assurance`],0,`تأكيد محدود.`],
[`A subsequent event that provides additional evidence about conditions existing at the balance sheet date requires:`,[`Adjustment of the financial statements`,`Disclosure only`,`No action`,`A new audit report`],0,`Type I.`],
[`A compilation provides:`,[`No assurance`,`Limited assurance`,`Reasonable assurance`,`An opinion`],0,`بلا تأكيد.`]]})
]}
]},

{id:'cpa-reg', secs:[
{id:'regIII', topics:[
T('p-reg3','Basis, Gain/Loss & Depreciation','الأساس والربح والخسارة والإهلاك',
`## الأساس (Basis)
- **شراء**: التكلفة. **هدية**: أساس المتبرع (Carryover) وللخسارة الأقل بين الأساس والقيمة العادلة. **ميراث**: **Step-up** إلى القيمة العادلة عند الوفاة.
- **Amount realized − Adjusted basis = Gain (Loss)**. Adjusted basis = التكلفة + التحسينات − الإهلاك.
- مثال: شراء بـ 100,000، إهلاك 30,000، بيع بـ 90,000 → الأساس المعدل 70,000 → ربح **20,000**.
## طبيعة الربح
- **Capital** مقابل **Ordinary**. المدة أكثر من سنة = طويل الأجل بمعدلات أفضل. **§1245 recapture** على المنقولات: الربح حتى الإهلاك السابق عادي. **§1231** للممتلكات المستخدمة في النشاط: صافي الربح يُعامل رأسماليًا وصافي الخسارة عاديًا.
## الإهلاك
- **MACRS** للضريبة (فترات استرداد محددة)، **Section 179** خصم فوري ضمن حدود، **Bonus depreciation** حسب القانون الساري، تحقق من القيم السنوية.
## تبادل مماثل (§1031)
- يقتصر على العقارات. تأجيل الربح، والأساس الجديد ينقل الأساس القديم.
> الحدود الرقمية للخصم الفوري والمعدلات تتغير سنويًا؛ راجع AICPA/IRS لعام الامتحان.
= Gain/Loss = Amount realized − Adjusted basis`,
{o:['تحسب الربح والخسارة','تفرّق بين أساس الشراء والهدية والميراث','تفهم recapture و§1231'],
c:[['أساس الميراث؟','القيمة العادلة وقت الوفاة (Step-up).'],['أساس الهدية؟','أساس المتبرع (Carryover).'],['§1245؟','Recapture: الربح حتى الإهلاك السابق عادي.'],['§1031؟','تبادل عقاري مماثل.'],['Adjusted basis؟','التكلفة + تحسينات − إهلاك.']],
q:[[`Equipment cost 100,000, accumulated depreciation 30,000, sold for 90,000. The recognized gain is:`,[`20,000`,`10,000`,`-10,000`,`90,000`],0,`90,000 − 70,000.`],
[`The basis of property received by inheritance is generally:`,[`Fair value at the date of death`,`The decedent's basis`,`Zero`,`Fair value at the sale date`],0,`Step-up.`],
[`The basis of gifted property for computing gain is generally:`,[`The donor's adjusted basis`,`Fair value at gift date`,`Zero`,`Fair value at sale date`],0,`Carryover basis.`],
[`Section 1245 recapture applies to:`,[`Gain on depreciable personal property up to prior depreciation`,`Land only`,`Stock sales`,`Inherited property`],0,`المنقولات.`],
[`Like-kind exchanges under Section 1031 are limited to:`,[`Real property`,`Equipment`,`Securities`,`Vehicles`],0,`عقارات فقط.`]]})
]}
]},

{id:'cpa-bar', secs:[
{id:'barI', topics:[
T('p-bar1','Business Analysis & Financial Analytics','تحليل الأعمال والتحليلات المالية',
`## التحليل المالي
- DuPont، الاتجاهات، المقارنات، **Forecasting** (انحدار، متوسطات متحركة)، **Variance analysis**.
- **Cost of capital و NPV/IRR** ضمن اتخاذ القرار. **Budgeting**: ثابتة، مرنة، متجددة.
## تحليلات البيانات (ETL)
- **Extract, Transform, Load**، جودة البيانات، **Descriptive/Diagnostic/Predictive/Prescriptive**.
- **Data visualization**: اختيار الرسم المناسب. **Correlation ≠ Causation**.
## تقييم الأداء
- ROI، RI، **EVA**، Balanced Scorecard. مثال: NOPAT 120,000، رأس مال 900,000، WACC 10% → EVA **30,000**.
## ضوابط وSOX
- COSO، تقييم المخاطر، ضوابط تقنية المعلومات.
> BAR يدمج المحاسبة المالية والإدارية والتحليلات، فاحرص على الحسابات السريعة.`,
{o:['تحسب EVA وRI','تطبق DuPont','تصنف أنواع التحليلات'],
c:[['EVA؟','NOPAT − WACC × رأس المال.'],['ETL؟','Extract, Transform, Load.'],['Predictive؟','ماذا سيحدث؟'],['Correlation؟','لا تعني سببية.'],['Flexible budget؟','يُعاد حسابها على النشاط الفعلي.']],
q:[[`NOPAT 120,000, invested capital 900,000, WACC 10%. EVA is:`,[`30,000`,`90,000`,`120,000`,`12,000`],0,`120,000 − 90,000.`],
[`Analytics that predicts future outcomes is:`,[`Predictive`,`Descriptive`,`Diagnostic`,`Prescriptive`],0,`Predictive.`],
[`In ETL, "Load" means:`,[`Placing transformed data into the target system`,`Collecting data`,`Cleaning data`,`Backing up data`],0,`تحميل البيانات المحولة.`],
[`ROE = Net margin × Asset turnover ×:`,[`Equity multiplier`,`Current ratio`,`Payout ratio`,`Interest cover`],0,`DuPont.`],
[`Which chart type best shows a trend over time?`,[`Line chart`,`Pie chart`,`Scatter plot`,`Stacked bar`],0,`خطي.`]]})
]}
]}

]}]
});
