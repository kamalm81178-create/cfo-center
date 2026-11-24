CFO.addPack({id:'cfa', ver:'2026.11.1', date:'2026-11-24', name:'CFA Program — Curriculum 2027 weights',
tracks:[{id:'cfa', en:'CFA Program', ar:'شهادة CFA', icon:'◎', desc:'3 مستويات. الأوزان حسب منهج 2027 المنشور من CFA Institute (المستوى الأول 2027 تغير فيه الأوزان: Quant ↑، Ethics ↓). راجع الموقع الرسمي قبل التسجيل.',
parts:[
{id:'cfa1', en:'Level I', ar:'المستوى الأول', secs:[

{id:'cfa1-eth', en:'Ethical & Professional Standards', ar:'الأخلاقيات والمعايير المهنية', w:'10–15%', topics:[
T('a1-eth','Code of Ethics & Standards of Professional Conduct','مدونة الأخلاقيات ومعايير السلوك المهني',
`## المعايير السبعة
- **I** Professionalism، **II** Integrity of Capital Markets (MNPI, تلاعب)، **III** Duties to Clients (Loyalty, Suitability, Fair dealing)، **IV** Duties to Employers، **V** Investment Analysis & Recommendations، **VI** Conflicts of Interest، **VII** Responsibilities as CFA member.
## GIPS
- معايير الأداء الاستثماري العالمية: Fair representation & full disclosure.
> السؤال المعتاد: أي معيار انتُهك؟ والإجراء الصحيح؟`,
{c:[['إيه Standard II؟','Integrity of Capital Markets: عدم استخدام معلومات جوهرية غير عامة وعدم التلاعب بالسوق.']]})
]},

{id:'cfa1-quant', en:'Quantitative Methods', ar:'الأساليب الكمية', w:'11–14%', topics:[
T('a1-q1','Time Value of Money & Cash Flow Applications','القيمة الزمنية للنقود',
`## الأساس
- FV = PV(1+r)^N. Annuity، Perpetuity، NPV، IRR، Money-weighted vs Time-weighted return.
- Effective annual rate EAR = (1 + r/m)^m − 1.
= PV annuity = PMT × [1 − (1+r)^−N] / r
= Perpetuity PV = PMT / r`,
{f:[['EAR','(1 + r/m)^m − 1','']],
c:[['إيه الفرق بين MWR وTWR؟','MWR يتأثر بتوقيت التدفقات (IRR)، وTWR يستبعدها ويقيس أداء المدير.']]}),
T('a1-q2','Statistics, Probability & Hypothesis Testing','الإحصاء والاحتمالات واختبار الفرضيات',
`## نقاط
- المقاييس المركزية (Arithmetic, Geometric, Harmonic)، التشتت، Skewness وKurtosis، Correlation.
- Bayes، Expected value، Normal distribution، Z وt، Confidence intervals، Type I/II errors.
- Regression بسيط وفهم ML/Data science (جديد في 2027).
= Sample variance = Σ(x − x̄)² / (n − 1)
= Z = (x − μ) / σ`,
{c:[['Type I error؟','رفض فرضية صحيحة (False positive).']],
q:[['A distribution with positive skew has:',['Mean < Median','Mean > Median','Mean = Median','Mode > Mean'],1,'ذيل يمين يسحب المتوسط للأعلى.']]})
]},

{id:'cfa1-econ', en:'Economics', ar:'الاقتصاد', w:'6–9%', topics:[
T('a1-e1','Microeconomics & Market Structures','الاقتصاد الجزئي وهياكل الأسواق',
`## نقاط
- Demand/Supply، Elasticity، Consumer/Producer surplus، المنافسة الكاملة، الاحتكار، احتكار القلة.
- MC=MR لتعظيم الربح.`,{c:[['شرط تعظيم الربح؟','MR = MC.']]}),
T('a1-e2','Macroeconomics, Monetary & Fiscal Policy, FX','الاقتصاد الكلي والسياسات والعملات',
`## نقاط
- GDP، دورة الأعمال، التضخم، سياسة نقدية ومالية، Exchange rates، Balance of payments، Trade.`,{c:[['أداة السياسة النقدية؟','سعر الفائدة، العمليات المفتوحة، الاحتياطي.']]})
]},

{id:'cfa1-fsa', en:'Financial Statement Analysis', ar:'تحليل القوائم المالية', w:'11–14%', topics:[
T('a1-f1','Statements, Inventories, Long-lived Assets, Taxes','القوائم والمخزون والأصول والضرائب',
`## نقاط
- IS/BS/CF. المخزون (FIFO, LIFO, WAC). تكلفة الأصول، الإهلاك، الاضمحلال. الضرائب المؤجلة. Leverage وCoverage.
- Quality of earnings وReporting quality. IFRS vs US GAAP.`,{c:[['LIFO في التضخم؟','COGS أعلى، أرباح أقل، ضريبة أقل.']]}),
T('a1-f2','Analysis Techniques','أساليب التحليل',
`## نقاط
- Common-size، Ratios، DuPont، Credit analysis، Forecasting basic.`,{c:[['DuPont الثلاثي؟','Net margin × Asset turnover × Leverage.']]})
]},

{id:'cfa1-cf', en:'Corporate Finance', ar:'تمويل الشركات', w:'6–9%', topics:[
T('a1-c1','Capital Budgeting, Cost of Capital, Governance','الموازنة الرأسمالية وتكلفة رأس المال والحوكمة',
`## نقاط
- NPV/IRR، WACC، Leverage (DOL, DFL)، Working capital، Governance، ESG، Business models.`,{c:[['قرار تفضيل المشروع؟','NPV أعلى.']]})
]},

{id:'cfa1-eq', en:'Equities', ar:'الأسهم', w:'11–14%', topics:[
T('a1-eq1','Market Organization, Indexes & Efficiency','تنظيم الأسواق والمؤشرات والكفاءة',
`## نقاط
- Primary/Secondary markets، Order types، Index construction (price/value/equal weighted)، Market efficiency (Weak, Semi-strong, Strong).`,{c:[['Semi-strong EMH؟','الأسعار تعكس كل المعلومات العامة.']]}),
T('a1-eq2','Equity Analysis & Valuation Basics','تحليل وتقييم الأسهم (أساسيات)',
`## نقاط
- DDM، Multiples (P/E, P/B, EV/EBITDA)، Industry analysis، Cost of equity.
= Gordon growth: V0 = D1 / (r − g)`,{c:[['شرط Gordon growth؟','g < r، ونمو ثابت للأبد.']]})
]},

{id:'cfa1-fi', en:'Fixed Income', ar:'الدخل الثابت', w:'11–14%', topics:[
T('a1-fi1','Bond Features, Pricing & Yields','خصائص السندات والتسعير والعوائد',
`## نقاط
- الكوبون، الاستحقاق، Zero coupon. السعر عكس العائد. Yield to maturity، Spot rates، Yield curve.
## Duration & Convexity
- Modified duration تقيس حساسية السعر. التقريب: %ΔP ≈ −ModDur × ΔY + ½ Convexity × (ΔY)².
= Price = Σ C/(1+y)^t + FV/(1+y)^N`,
{c:[['إيه علاقة السعر والعائد؟','عكسية. السعر ينخفض مع ارتفاع العائد.']],
q:[['If yields rise, a bond price:',['Rises','Falls','Unchanged','Depends on coupon only'],1,'علاقة عكسية.']]}),
T('a1-fi2','Credit Analysis & Securitization (basics)','التحليل الائتماني والتوريق',
`## نقاط
- Credit risk: PD، LGD، Spread. Covenants. Securitization: ABS/MBS.`,{c:[['Expected loss؟','PD × LGD × Exposure.']]})
]},

{id:'cfa1-der', en:'Derivatives and Risk Management', ar:'المشتقات وإدارة المخاطر', w:'6–9%', topics:[
T('a1-d1','Forwards, Futures, Swaps & Options','العقود الآجلة والمستقبلية والمبادلات والخيارات',
`## نقاط
- Payoffs. Arbitrage. Put-call parity.
= Put-call parity: C + PV(X) = P + S
= Forward price = S0 × (1+r)^T`,{c:[['Call payoff؟','max(0, S − X).']]})
]},

{id:'cfa1-alt', en:'Alternative Investments', ar:'الاستثمارات البديلة', w:'6–9%', topics:[
T('a1-a1','Hedge Funds, PE, Real Estate, Commodities, Digital Assets','الصناديق والملكية الخاصة والعقار والسلع والأصول الرقمية',
`## نقاط
- خصائص: سيولة أقل، رسوم أعلى (2 and 20)، بيانات أقل، تنويع محتمل. Real estate (NOI, Cap rate).
= Cap rate = NOI / Property value`,{c:[['Cap rate؟','NOI ÷ قيمة العقار.']]})
]},

{id:'cfa1-pc', en:'Portfolio Construction', ar:'بناء المحافظ', w:'8–12%', topics:[
T('a1-p1','Risk, Return, CAPM & Behavioral Finance','المخاطرة والعائد وCAPM والتمويل السلوكي',
`## نقاط
- Portfolio variance، Diversification، Efficient frontier، CAPM، Sharpe، IPS، Behavioral biases.
= Sharpe = (Rp − Rf) / σp
= Portfolio variance (2 assets) = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2`,
{f:[['Treynor','(Rp − Rf) / β','']],
c:[['Sharpe يقيس؟','العائد الزائد لكل وحدة مخاطر كلية.']],
q:[['Correlation of 1 between two assets implies:',['Maximum diversification benefit','No diversification benefit','Negative risk','Zero variance'],1,'ρ = 1 لا فائدة تنويع.']]})
]}
]},

{id:'cfa2', en:'Level II', ar:'المستوى الثاني', secs:[
{id:'cfa2-1', en:'Core Topic Areas (applied)', ar:'المحاور الأساسية (تطبيقي)', topics:[
T('b2-q','Quantitative Methods (L2): Regression, Time Series, ML','الأساليب الكمية: الانحدار والسلاسل الزمنية و ML',
`## الوزن: 5–10%
- Multiple regression وSignificance (t, F). Heteroskedasticity وAutocorrelation وMulticollinearity. Time series. Machine learning (supervised/unsupervised). Big data.`,{c:[['Multicollinearity؟','ارتباط عالٍ بين المتغيرات المستقلة.']]}),
T('b2-e','Economics (L2): Currency, Growth, Regulation','الاقتصاد: العملات والنمو',
`## الوزن: 5–10%
- Exchange rate determination، Parity (PPP, IRP)، Growth models، Regulation، Currency crises.
= Covered interest parity: F/S = (1+i_d)/(1+i_f)`,{c:[['IRP؟','الفرق بين الآجل والفوري يعكس فرق الفائدة.']]}),
T('b2-f','FSA (L2): Intercorporate Investments, Consolidation, Pensions, FX','FSA: الاستثمارات المتبادلة والتوحيد والمعاشات',
`## الوزن: 10–15%
- Equity method vs Acquisition (Consolidation) vs Fair value. Pensions (PBO، Funded status). Multinational operations (Current rate vs Temporal). Quality of earnings. Financial modeling.`,{c:[['Temporal method؟','تعيد القياس: الأصول النقدية بسعر جارٍ وغير النقدية بسعر تاريخي، والأثر في الربح.']]}),
T('b2-c','Corporate Finance (L2): Capital Structure, Dividends, M&A','تمويل الشركات: هيكل رأس المال والتوزيعات والاندماج',
`## الوزن: 5–10%
- M&A وتقييم الأهداف، Takeover defenses، Dividend policy (Signaling، Clientele)، Capital structure (MM theory), ESG.`,{c:[['MM Proposition I (بدون ضرائب)؟','قيمة الشركة لا تتأثر بهيكل رأس المال.']]}),
T('b2-eq','Equities (L2): DCF, Residual Income, Multiples, Private Company','الأسهم: DCF والدخل المتبقي',
`## الوزن: 10–15%
- DDM، FCFF/FCFE، Residual income، Market-based valuation، Private company valuation.
= FCFF = NI + NCC + Int(1−t) − FCInv − WCInv
= FCFE = FCFF − Int(1−t) + Net borrowing
= RI = NI − (Ke × Beginning equity)`,{c:[['FCFF يخصم بـ؟','WACC.']]}),
T('b2-fi','Fixed Income (L2): Term Structure, Credit, Embedded Options, MBS','الدخل الثابت: هيكل الأجل والائتمان والخيارات المضمنة',
`## الوزن: 10–15%
- Term structure models، Binomial trees، Callable/Putable، OAS، Credit analysis (structural/reduced form)، ABS/MBS.`,{c:[['OAS؟','Spread بعد استبعاد قيمة الخيار.']]}),
T('b2-d','Derivatives (L2): Pricing, Swaps, Options','المشتقات: التسعير والمبادلات والخيارات',
`## الوزن: 5–10%
- Forward/Futures pricing، Swaps valuation، Options: Binomial، Black-Scholes-Merton، Greeks.`,{c:[['Delta؟','حساسية سعر الخيار لسعر الأصل.']]}),
T('b2-a','Alternative Investments (L2)','الاستثمارات البديلة',
`## الوزن: 5–10%
- تقييم العقارات (Income، Cost، Sales comparison)، تقييم PE (Venture)، Hedge funds، Commodities، Infrastructure.`,{c:[['طرق تقييم العقار؟','Income, Cost, Sales comparison.']]}),
T('b2-p','Portfolio Construction (L2): Factors, Active Management','المحافظ: العوامل والإدارة النشطة',
`## الوزن: 10–15%
- Multifactor models، Active return، Information ratio، Fundamental law، Backtesting.
= IR = Active return / Active risk`,{c:[['Information ratio؟','العائد النشط ÷ الخطأ التتبعي.']]}),
T('b2-eth','Ethics (L2): Application of Standards','الأخلاقيات: تطبيق المعايير',
`## الوزن: 10–15%
- تطبيق حالات: Research objectivity، Soft dollars، Fair dealing، Compliance.`,{c:[['Soft dollars؟','عمولات وساطة تقابل خدمات بحثية يجب أن تفيد العميل.']]})
]}]},

{id:'cfa3', en:'Level III', ar:'المستوى الثالث', secs:[
{id:'cfa3-1', en:'Core & Pathways', ar:'الأساسي والمسارات', topics:[
T('c3-aa','Asset Allocation','تخصيص الأصول',
`## الوزن: 15–20%
- Strategic vs Tactical، Liability-driven، Goals-based، Mean-variance وRobust approaches، Rebalancing.`,{c:[['SAA؟','Strategic asset allocation: توزيع طويل الأجل حسب IPS.']]}),
T('c3-pc','Portfolio Construction','بناء المحافظ',
`## الوزن: 15–20%
- محافظ الأسهم والدخل الثابت، Passive vs Active، Risk budgeting، Factor-based، ESG.`,{c:[['Risk budgeting؟','تخصيص المخاطر لا رأس المال.']]}),
T('c3-d','Derivatives & Risk Management','المشتقات وإدارة المخاطر',
`## الوزن: 10–15%
- Options strategies، Currency management، Hedging، Overlay.`,{c:[['Covered call؟','شراء الأصل وبيع Call.']]}),
T('c3-pm','Performance Measurement','قياس الأداء',
`## الوزن: 5–10%
- Attribution، Benchmarking، GIPS، Risk-adjusted metrics.`,{c:[['Attribution؟','تفسير مصدر الأداء: تخصيص واختيار.']]}),
T('c3-eth','Ethics (L3)','الأخلاقيات',
`## الوزن: 10–15%
- تطبيق Standards في سياقات إدارة المحافظ والعملاء والمؤسسات.`,{c:[['L3 يركز على؟','حالات تطبيقية في المحافظ.']]}),
T('c3-path','Pathways: Portfolio Management / Private Wealth / Private Markets','المسارات الثلاثة',
`## الوزن: 30–35%
- تختار مسارًا: **Portfolio Management** (مؤسسات)، **Private Wealth** (أفراد وعائلات)، **Private Markets** (أسواق خاصة).`,{c:[['كم عدد مسارات المستوى الثالث؟','ثلاثة.']]})
]}]}
]}]
});
