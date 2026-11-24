CFO.addPack({id:'cpa', ver:'2026.11.1', date:'2026-11-24', name:'CPA (AICPA) — Blueprint 2026',
tracks:[{id:'cpa', en:'CPA (AICPA)', ar:'شهادة CPA', icon:'✦', desc:'3 أقسام Core (AUD, FAR, REG) + قسم Discipline واحد (BAR أو ISC أو TCP). الأوزان من Blueprint 2026؛ تحقق من AICPA وNASBA.',
parts:[
{id:'cpa-far', en:'FAR — Financial Accounting & Reporting (Core)', ar:'FAR المحاسبة المالية والتقارير', secs:[
{id:'farI', en:'Area I: Financial Reporting', ar:'المنطقة I: التقارير المالية', w:'30–40%', topics:[
T('p-far1','Conceptual Framework & Financial Statements','الإطار المفاهيمي والقوائم',
`## الإطار
- أهداف التقرير، الخصائص النوعية (Relevance, Faithful representation)، العناصر، الاعتراف والقياس.
## القوائم
- IS/OCI، BS، CF، Equity. الإيضاحات، الأطراف ذات العلاقة، الأحداث اللاحقة، Segment، Interim.
- الأخطاء والتغيرات المحاسبية: Change in estimate (مستقبلي)، Change in principle (بأثر رجعي)، Error correction (تعديل رصيد أول).
> ميّز: Estimate = prospective، Principle = retrospective.`,
{c:[['تغير تقدير محاسبي يعامل كيف؟','Prospectively (من الفترة الحالية للمستقبل).']],
q:[['A change in depreciation method is accounted for as:',['Change in estimate (prospective)','Prior period adjustment','Cumulative effect to equity only','Restatement of all periods'],0,'تغير طريقة الإهلاك يعامل كتغير تقدير.']]}),
T('p-far2','EPS, Accounting Changes & Special Reporting','ربحية السهم وبنود خاصة',
`## EPS
- Basic = (NI − pref. dividends) / Weighted avg shares. Diluted يدخل الأوراق القابلة للتخفيف (Treasury stock method).
## أخرى
- العمليات المتوقفة، الأصول المحتفظ بها للبيع، تقارير القطاعات.`,
{c:[['Treasury stock method؟','يفترض استخدام عوائد ممارسة الخيارات لشراء أسهم بالسعر السوقي.']]})
]},
{id:'farII', en:'Area II: Select Balance Sheet Accounts', ar:'المنطقة II: حسابات الميزانية', w:'30–40%', topics:[
T('p-far3','Cash, Receivables & Inventory','النقدية والمدينون والمخزون',
`## نقاط
- Bank reconciliation. Allowance (Aging / % of sales / CECL). Factoring.
- المخزون: FIFO، WA، LIFO، LCNRV (لغير LIFO/retail)، Retail method، Gross profit method.`,
{c:[['LCNRV تُطبق على؟','FIFO وWeighted average. LIFO تستخدم LCM.']]}),
T('p-far4','PP&E, Intangibles & Investments','الأصول الثابتة وغير الملموسة والاستثمارات',
`## نقاط
- التكلفة، الإهلاك، الاضمحلال (Step 1: recoverability، Step 2: fair value)، الاستنفاد.
- الشهرة: اختبار اضمحلال سنوي. الاستثمارات: FV-NI، AFS/HTM للدين، Equity method (20-50%).`,
{c:[['نسبة تأثير مؤثر تقريبية لـ Equity method؟','20% إلى 50%.']]}),
T('p-far5','Liabilities, Debt, Leases, Taxes & Equity','الالتزامات والديون والإيجارات والضرائب وحقوق الملكية',
`## نقاط
- Bonds: Effective interest، علاوة/خصم. الاسترداد المبكر.
- Leases (ASC 842): ROU asset وLease liability. Finance vs Operating.
- الضرائب المؤجلة: DTA/DTL، Valuation allowance.
- حقوق الملكية: أسهم خزينة، توزيعات، Stock splits، Comprehensive income.`,
{c:[['Operating lease تحت ASC 842 على الميزانية؟','Yes، ROU asset وLease liability، مع مصروف إيجار خطي.']]})
]},
{id:'farIII', en:'Area III: Select Transactions', ar:'المنطقة III: معاملات مختارة', w:'25–35%', topics:[
T('p-far6','Revenue (ASC 606) & Business Combinations','الإيراد (ASC 606) واندماج الأعمال',
`## ASC 606
- 5 خطوات: العقد، الالتزامات، سعر المعاملة، التوزيع، الاعتراف.
## Business combinations
- Acquisition method: القيمة العادلة للأصول المقتناة، الشهرة = المقابل − صافي الأصول بالقيمة العادلة. التوحيد وحقوق غير المسيطرين.`,
{c:[['كيف تُحسب الشهرة؟','المقابل المحول + NCI + الحصة السابقة − صافي الأصول المحددة بالقيمة العادلة.']]}),
T('p-far7','Derivatives, Foreign Currency & Fair Value','المشتقات والعملات الأجنبية والقيمة العادلة',
`## نقاط
- Hedge accounting: Fair value، Cash flow، Net investment.
- العملة الأجنبية: Remeasurement مقابل Translation. Fair value hierarchy (Level 1-3).
- Pensions وShare-based compensation.`,
{c:[['مستويات القيمة العادلة؟','L1 أسعار مدرجة، L2 مدخلات ملحوظة، L3 مدخلات غير ملحوظة.']]})
]}
]},

{id:'cpa-aud', en:'AUD — Auditing & Attestation (Core)', ar:'AUD التدقيق والتوكيد', secs:[
{id:'audI', en:'Area I: Ethics & General Principles', ar:'المنطقة I: الأخلاق والمبادئ العامة', w:'15–25%', topics:[
T('p-aud1','Ethics, Independence & Quality Management','الأخلاق والاستقلال وإدارة الجودة',
`## نقاط
- AICPA Code: الاستقلال في المظهر والواقع، التهديدات (مصلحة ذاتية، مراجعة ذاتية، دفاع، ألفة، ترهيب) والضمانات.
- Quality management (SQMS). العناية المهنية والشك المهني. Engagement letter، التواصل مع TCWG.`,
{c:[['تهديدات الاستقلال؟','Self-interest, self-review, advocacy, familiarity, undue influence.']]})
]},
{id:'audII', en:'Area II: Risk Assessment & Planned Response', ar:'المنطقة II: تقييم المخاطر', w:'25–35%', topics:[
T('p-aud2','Planning, Materiality & Risk of Material Misstatement','التخطيط والأهمية النسبية وخطر التحريف',
`## نقاط
- قبول العميل، فهم المنشأة وبيئتها، الرقابة الداخلية، IT.
- **Audit risk = RMM × Detection risk**. RMM = Inherent × Control risk.
- Materiality: الأداء (Performance materiality) والحد الأدنى للتحريفات الواضحة.
- Fraud risk factors (SAS 145 / AS): تقييم، استفسارات، إجراءات.
= AR = IR × CR × DR`,
{c:[['علاقة Detection risk بـ RMM؟','عكسية: ارتفاع RMM يتطلب خفض Detection risk بإجراءات أكثر.']],
q:[['If assessed risk of material misstatement increases, the auditor should:',['Increase acceptable detection risk','Decrease acceptable detection risk','Reduce substantive testing','No change'],1,'RMM أعلى → DR مقبول أقل → اختبارات أوسع.']]})
]},
{id:'audIII', en:'Area III: Further Procedures & Evidence', ar:'المنطقة III: إجراءات إضافية وأدلة', w:'30–40%', topics:[
T('p-aud3','Evidence, Sampling & Analytical Procedures','الأدلة والعينات والإجراءات التحليلية',
`## نقاط
- Tests of controls وSubstantive tests. Assertions: Existence, Completeness, Rights, Valuation, Presentation.
- Statistical vs Non-statistical sampling، Tolerable misstatement.
- Analytical procedures كتخطيط ومراجعة نهائية. التقديرات المحاسبية، الأطراف ذات العلاقة، الأحداث اللاحقة، Going concern، Group audits.`,
{c:[['assertions الرئيسية للأرصدة؟','Existence, Rights & obligations, Completeness, Valuation/Allocation.']]})
]},
{id:'audIV', en:'Area IV: Conclusions & Reporting', ar:'المنطقة IV: الاستنتاجات والتقارير', w:'10–20%', topics:[
T('p-aud4','Audit Reports & SSARS','تقارير التدقيق و SSARS',
`## أنواع الرأي
- Unmodified، Qualified، Adverse، Disclaimer. فقرات Emphasis of matter وOther matter. KAMs في المدرجات.
## SSARS
- Compilation، Review (توكيد محدود). تقارير ICFR المتكاملة.`,
{c:[['متى Disclaimer؟','عدم القدرة على الحصول على أدلة كافية بشكل واسع وجوهري.']]})
]}
]},

{id:'cpa-reg', en:'REG — Taxation & Regulation (Core)', ar:'REG الضرائب والتنظيم', secs:[
{id:'regI', en:'Area I: Ethics & Federal Tax Procedures', ar:'المنطقة I', w:'10–20%', topics:[
T('p-reg1','Ethics & Tax Procedures','أخلاقيات وإجراءات الضرائب',
`## نقاط
- Circular 230، عقوبات المعدّ، Statute of limitations، الاستئناف.`,{c:[['مرجع آداب ممارسة الضريبة أمام IRS؟','Circular 230.']]})
]},
{id:'regII', en:'Area II: Business Law', ar:'المنطقة II: القانون التجاري', w:'15–25%', topics:[
T('p-reg2','Contracts, Agency, UCC & Debtor-Creditor','العقود والوكالة وUCC',
`## نقاط
- العقود: عرض، قبول، مقابل، Statute of frauds. الوكالة. UCC Article 2. الإفلاس (Ch. 7, 11, 13). الأوراق التجارية.`,{c:[['Chapter 7؟','تصفية.']]})
]},
{id:'regIII', en:'Area III: Property Transactions', ar:'المنطقة III: معاملات الملكية', w:'5–15%', topics:[
T('p-reg3','Basis, Gain/Loss & Depreciation','الأساس والمكسب والخسارة',
`## نقاط
- Basis (شراء، هبة، ميراث)، Capital gains (قصير/طويل)، §1031 like-kind (عقارات)، Depreciation recapture (§1245, §1250)، MACRS.`,{c:[['حيازة ميراث؟','Basis = القيمة العادلة وقت الوفاة (step-up).']]})
]},
{id:'regIV', en:'Area IV: Federal Taxation of Individuals', ar:'المنطقة IV: ضرائب الأفراد', w:'22–32%', topics:[
T('p-reg4','Individual Income Tax','ضريبة الدخل للأفراد',
`## نقاط
- الدخل الإجمالي، AGI، Standard vs itemized، الإعفاءات والائتمانات، Filing status، AMT، Passive losses، الاستثمار والتقاعد، Self-employment tax.`,{c:[['AGI؟','الدخل الإجمالي ناقص التعديلات (Above-the-line).']]})
]},
{id:'regV', en:'Area V: Federal Taxation of Entities', ar:'المنطقة V: ضرائب الكيانات', w:'23–33%', topics:[
T('p-reg5','C-Corp, S-Corp, Partnerships & Trusts','C وS corporations والشراكات',
`## نقاط
- C corp: معدل 21% (قانون TCJA)، Schedule M-1/M-3. S corp: تمرير الدخل، قيود المساهمين. Partnership: Basis، Guaranteed payments، Allocations. Trusts & Estates، منظمات معفاة.`,{c:[['معدل ضريبة C corp الفيدرالي؟','21%.']]})
]}
]},

{id:'cpa-bar', en:'BAR — Business Analysis & Reporting (Discipline)', ar:'BAR تحليل الأعمال والتقارير', secs:[
{id:'barI', en:'Area I: Business Analysis', ar:'المنطقة I', w:'40–50%', topics:[
T('p-bar1','Business Analysis & Financial Analytics','تحليل الأعمال',
`## نقاط
- تحليل القوائم والنسب، Cost/Managerial، التنبؤ، الموازنات، Capital budgeting (NPV, IRR)، تحليلات البيانات، حوكمة الشركات، Risk.`,{c:[['BAR يتشارك مع؟','FAR في القيمة العادلة والتقارير؛ ومع CMA في التحليل الإداري.']]})
]},
{id:'barII', en:'Area II: Technical Accounting & Reporting', ar:'المنطقة II', w:'35–45%', topics:[
T('p-bar2','Technical Accounting','المحاسبة الفنية',
`## نقاط
- Leases، Derivatives، Business combinations وConsolidations، Fair value، Foreign currency، Segment، IFRS differences.`,{c:[['IFRS vs US GAAP في الاضمحلال؟','IFRS يسمح برد خسارة الاضمحلال لغير الشهرة.']]})
]},
{id:'barIII', en:'Area III: State & Local Governments', ar:'المنطقة III: الحكومات', w:'10–20%', topics:[
T('p-bar3','Governmental Accounting (GASB)','محاسبة الحكومات',
`## نقاط
- Government-wide مقابل Fund statements، Modified accrual، Fund types (Governmental, Proprietary, Fiduciary).`,{c:[['أساس القياس في Governmental funds؟','Modified accrual.']]})
]}
]},

{id:'cpa-isc', en:'ISC — Information Systems & Controls (Discipline)', ar:'ISC نظم المعلومات والرقابة', secs:[
{id:'iscI', en:'Area I: IS & Data Management', ar:'المنطقة I', w:'35–45%', topics:[
T('p-isc1','IT Governance, SDLC & Data','حوكمة التقنية والبيانات',
`## نقاط
- IT governance، SDLC، Change management، Database، ETL، Cloud، DR/BCP.`,{c:[['SDLC؟','دورة حياة تطوير النظم: تخطيط، تحليل، تصميم، تنفيذ، اختبار، صيانة.']]})
]},
{id:'iscII', en:'Area II: Security, Confidentiality & Privacy', ar:'المنطقة II', w:'35–45%', topics:[
T('p-isc2','Security, Privacy & Controls','الأمن والخصوصية والضوابط',
`## نقاط
- Threats، Encryption، IAM، Network security، Privacy frameworks، Incident response، NIST/COBIT.`,{c:[['مبدأ Least privilege؟','أقل صلاحيات لازمة لأداء المهمة.']]})
]},
{id:'iscIII', en:'Area III: SOC Engagements', ar:'المنطقة III: تكليفات SOC', w:'15–25%', topics:[
T('p-isc3','SOC 1/2/3 Engagements','تكليفات SOC',
`## نقاط
- SOC 1: ICFR للعميل. SOC 2: Trust Services Criteria (Security, Availability, Processing integrity, Confidentiality, Privacy). SOC 3: تقرير عام. Type 1 (تصميم) مقابل Type 2 (تصميم وتشغيل خلال فترة).`,{c:[['Type 2؟','تقييم تصميم وفعالية التشغيل خلال فترة.']]})
]}
]},

{id:'cpa-tcp', en:'TCP — Tax Compliance & Planning (Discipline)', ar:'TCP الالتزام والتخطيط الضريبي', secs:[
{id:'tcpI', en:'Area I: Individual Tax & PFP', ar:'المنطقة I', w:'30–40%', topics:[
T('p-tcp1','Individual Compliance & Personal Financial Planning','ضرائب الأفراد والتخطيط المالي الشخصي',
`## نقاط
- تخطيط الدخل والتقاعد والعقار، الهبات، التأمين.`,{c:[['PFP؟','Personal Financial Planning.']]})
]},
{id:'tcpII', en:'Area II: Entity Tax Compliance', ar:'المنطقة II', w:'30–40%', topics:[
T('p-tcp2','Entity Compliance','التزام الكيانات',
`## نقاط
- C/S corp، Partnerships، Trusts، الإقرارات والتسويات (M-1/M-3)، ضرائب الولايات.`,{c:[['Schedule M-1؟','تسوية الدخل الدفتري والضريبي.']]})
]},
{id:'tcpIII', en:'Area III: Entity Tax Planning', ar:'المنطقة III', w:'10–20%', topics:[
T('p-tcp3','Entity Tax Planning','تخطيط ضرائب الكيانات',
`## نقاط
- اختيار شكل الكيان، توقيت الدخل والخصم، تخطيط التصفية والاندماج.`,{c:[['هدف التخطيط الضريبي؟','تقليل العبء بشكل قانوني وبتوقيت مناسب.']]})
]},
{id:'tcpIV', en:'Area IV: Property Transactions', ar:'المنطقة IV', w:'10–20%', topics:[
T('p-tcp4','Property Transactions','معاملات الملكية',
`## نقاط
- تحديد الأساس، المكسب والخسارة، الاستبدال غير المحقق، Recapture.`,{c:[['§1031؟','تأجيل المكسب عند تبادل عقارات مماثلة.']]})
]}
]}
]}]
});
