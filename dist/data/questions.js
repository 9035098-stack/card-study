/*
 * 题库格式：每题均含 id、section、type、prompt、answer、explanation、tags、difficulty。
 * type 可为 blank、cloze_subjective、free_response。
 * cloze_subjective 的 prompt 中用 {{0}}、{{1}}… 标记挖空位置，answer 为对应答案数组。
 */
globalThis.QUESTION_BANK = {
  version: "1.4.0",
  updatedAt: "2026-10-12",
  questions: [
    {
      id: "bse-001",
      section: "北交所与资本市场",
      type: "blank",
      prompt: "北京证券交易所于 2021 年 11 月 15 日正式____。",
      answer: "开市",
      explanation: "北交所于 2021 年 9 月 3 日注册成立，并于同年 11 月 15 日正式开市。",
      tags: ["基本信息", "时间"],
      difficulty: 1
    },
    {
      id: "bse-002",
      section: "北交所与资本市场",
      type: "blank",
      prompt: "北交所主要服务____企业，致力于打造服务创新型中小企业主阵地。",
      answer: "创新型中小",
      explanation: "“创新型中小企业”是北交所最核心的市场定位。",
      tags: ["定位"],
      difficulty: 1
    },
    {
      id: "bse-003",
      section: "北交所与资本市场",
      type: "cloze_subjective",
      prompt: "北交所与新三板一体运营，形成“{{0}}—{{1}}—{{2}}”的递进式市场结构。",
      answer: ["基础层", "创新层", "北交所"],
      explanation: "基础层广泛培育，创新层筛选培育更优质企业，北交所提供公开发行、上市交易和资本定价。",
      tags: ["新三板", "市场层级"],
      difficulty: 2
    },
    {
      id: "bse-004",
      section: "北交所与资本市场",
      type: "blank",
      prompt: "北交所发行人应为在全国股转系统连续挂牌满____个月的创新层挂牌公司。",
      answer: "12",
      explanation: "申报北交所公开发行并上市前，发行人须在新三板连续挂牌满 12 个月且属于创新层。",
      tags: ["上市条件"],
      difficulty: 2
    },
    {
      id: "bse-005",
      section: "北交所与资本市场",
      type: "cloze_subjective",
      prompt: "北交所盈利型上市标准之一：最近两年净利润均不低于 {{0}} 万元，且平均净资产收益率不低于 {{1}}。",
      answer: ["1500", "8%"],
      explanation: "也可满足“最近一年净利润不低于 2500 万元且 ROE 不低于 8%”。",
      tags: ["上市条件", "财务指标"],
      difficulty: 3
    },
    {
      id: "bse-006",
      section: "北交所与资本市场",
      type: "blank",
      prompt: "北交所股票日常涨跌幅限制为____。",
      answer: "30%",
      explanation: "北交所上市首日不设涨跌幅限制；日常涨跌幅限制为 30%。",
      tags: ["交易规则"],
      difficulty: 1
    },
    {
      id: "bse-007",
      section: "北交所与资本市场",
      type: "free_response",
      prompt: "默写：注册制下发行人、交易所、证监会和中介机构分别承担什么主要职责？",
      answer: "发行人真实、准确、完整披露信息；交易所审核发行上市申请；证监会依法履行注册程序；中介机构尽职调查、专业核查、保荐把关。",
      explanation: "注册制不是不审核，而是审核理念和职责分工发生变化。",
      tags: ["注册制", "主观题"],
      difficulty: 3
    },
    {
      id: "bse-008",
      section: "北交所与资本市场",
      type: "blank",
      prompt: "我国股票发行制度的演进顺序是：审批制 → ____ → 注册制。",
      answer: "核准制",
      explanation: "全面实行股票发行注册制的时间节点为 2023 年。",
      tags: ["资本市场", "制度演进"],
      difficulty: 1
    },
    {
      id: "acc-001",
      section: "会计",
      type: "cloze_subjective",
      prompt: "外购存货的采购成本包括购买价款、相关税费、运输费、装卸费、保险费和 {{0}}。",
      answer: ["其他可归属于采购成本的支出"],
      explanation: "可抵扣进项税、入库后一般仓储费、非正常损耗等通常不计入采购成本。",
      tags: ["存货", "初始计量"],
      difficulty: 2
    },
    {
      id: "acc-002",
      section: "会计",
      type: "blank",
      prompt: "自产存货成本 = 直接材料 + 直接人工 + ____。",
      answer: "制造费用",
      explanation: "三项构成自产存货的生产成本。",
      tags: ["存货", "成本"],
      difficulty: 1
    },
    {
      id: "acc-003",
      section: "会计",
      type: "free_response",
      prompt: "默写：合理损耗与非正常损耗在存货核算中的处理差异。",
      answer: "合理损耗不单独确认为损失，由实际入库的存货承担，总成本通常不变而单位成本上升；非正常损耗不计入正常存货成本，应单独确认损失。",
      explanation: "判断正常与否会直接影响存货成本和损益。",
      tags: ["存货", "损耗", "主观题"],
      difficulty: 3
    },
    {
      id: "acc-004",
      section: "会计",
      type: "blank",
      prompt: "物价上涨时，采用先进先出法通常会使期末存货较____、利润较高。",
      answer: "高",
      explanation: "先购入的较低成本先结转，发出成本较低，期末保留的存货成本相对较高。",
      tags: ["存货", "计价方法"],
      difficulty: 2
    },
    {
      id: "acc-005",
      section: "会计",
      type: "cloze_subjective",
      prompt: "直接用于出售的商品，可变现净值 = 预计售价 − {{0}} − {{1}}。",
      answer: ["预计销售费用", "相关税费"],
      explanation: "当成本高于可变现净值时，应计提存货跌价准备。",
      tags: ["存货", "减值"],
      difficulty: 2
    },
    {
      id: "acc-006",
      section: "会计",
      type: "blank",
      prompt: "固定资产自达到预定可使用状态的____开始计提折旧。",
      answer: "次月",
      explanation: "无形资产则自达到预定用途的当月开始摊销。",
      tags: ["固定资产", "折旧"],
      difficulty: 1
    },
    {
      id: "acc-007",
      section: "会计",
      type: "free_response",
      prompt: "默写：固定资产处置时，转入固定资产清理的基本分录。",
      answer: "借：固定资产清理、累计折旧、固定资产减值准备；贷：固定资产。",
      explanation: "后续再按收到出售款、支付清理费用及清理净损益分别处理。",
      tags: ["固定资产", "分录", "主观题"],
      difficulty: 3
    },
    {
      id: "acc-008",
      section: "会计",
      type: "cloze_subjective",
      prompt: "内部研发项目中，{{0}}阶段支出全部费用化；{{1}}阶段满足资本化条件的支出计入无形资产成本。",
      answer: ["研究", "开发"],
      explanation: "开发阶段不满足资本化条件的支出也应计入当期损益。",
      tags: ["无形资产", "研发支出"],
      difficulty: 2
    },
    {
      id: "acc-009",
      section: "会计",
      type: "blank",
      prompt: "对具有控制的子公司投资，个别财务报表通常采用____核算。",
      answer: "成本法",
      explanation: "共同控制或重大影响的长期股权投资采用权益法。",
      tags: ["长期股权投资"],
      difficulty: 1
    },
    {
      id: "acc-010",
      section: "会计",
      type: "free_response",
      prompt: "默写：金融资产分类判断的两个核心维度，以及以摊余成本计量应满足的条件。",
      answer: "核心维度是管理金融资产的业务模式和合同现金流量特征。以摊余成本计量需以收取合同现金流量为目标，且合同现金流量仅为本金及以未偿付本金金额为基础的利息支付。",
      explanation: "业务模式与 SPPI 现金流量特征共同决定金融资产分类。",
      tags: ["金融资产", "主观题"],
      difficulty: 3
    },
    {
      id: "acc-011",
      section: "会计",
      type: "blank",
      prompt: "存货应当按照成本与____孰低计量。",
      answer: "可变现净值",
      explanation: "可变现净值不是公允价值，通常以预计售价扣除至完工成本、销售费用和相关税费后确定。",
      tags: ["存货", "期末计量"],
      difficulty: 1
    },
    {
      id: "acc-012",
      section: "会计",
      type: "cloze_subjective",
      prompt: "为生产而持有的材料，若用其生产的产成品可变现净值高于成本，则该材料仍应按 {{0}} 计量；若产成品可变现净值低于成本，应按材料的 {{1}} 与成本孰低计量。",
      answer: ["成本", "可变现净值"],
      explanation: "材料是否减值，要结合其生产的产成品能否实现成本来判断。",
      tags: ["存货", "减值", "材料"],
      difficulty: 3
    },
    {
      id: "acc-013",
      section: "会计",
      type: "blank",
      prompt: "企业发出存货可采用先进先出法、加权平均法或个别计价法；企业会计准则不允许采用____。",
      answer: "后进先出法",
      explanation: "后进先出法在我国企业会计准则下不适用。",
      tags: ["存货", "计价方法"],
      difficulty: 2
    },
    {
      id: "acc-014",
      section: "会计",
      type: "free_response",
      prompt: "默写：存货跌价准备的计提、转回和结转如何处理？",
      answer: "期末成本高于可变现净值时，按差额计提存货跌价准备并计入资产减值损失；以前减记因素消失的，在原已计提金额内转回，冲减资产减值损失；存货出售、领用或报废时，应同时结转相应的存货跌价准备。",
      explanation: "转回上限是原已计提的跌价准备，不能因此把存货账面价值调高至成本以上。",
      tags: ["存货", "跌价准备", "主观题"],
      difficulty: 3
    },
    {
      id: "acc-015",
      section: "会计",
      type: "blank",
      prompt: "固定资产的初始成本除购买价款、相关税费外，还包括使资产达到预定可使用状态前所发生的____。",
      answer: "可直接归属于该资产的支出",
      explanation: "例如场地整理费、运输费、装卸费、安装费和专业人员服务费等。",
      tags: ["固定资产", "初始计量"],
      difficulty: 2
    },
    {
      id: "acc-016",
      section: "会计",
      type: "cloze_subjective",
      prompt: "固定资产后续支出中，满足确认条件的更新改造支出应 {{0}}；日常修理等不满足条件的支出应 {{1}}。",
      answer: ["资本化计入固定资产成本", "费用化计入当期损益"],
      explanation: "核心是该支出是否很可能带来未来经济利益且其成本能够可靠计量。",
      tags: ["固定资产", "后续支出"],
      difficulty: 2
    },
    {
      id: "acc-017",
      section: "会计",
      type: "blank",
      prompt: "固定资产减值损失一经确认，在以后会计期间____转回。",
      answer: "不得",
      explanation: "适用资产减值准则的长期资产减值损失不得转回；这与存货跌价准备不同。",
      tags: ["固定资产", "减值"],
      difficulty: 2
    },
    {
      id: "acc-018",
      section: "会计",
      type: "free_response",
      prompt: "默写：固定资产折旧的四个主要影响因素，以及需要单独计提折旧的典型情形。",
      answer: "折旧通常考虑原价、预计净残值、预计使用寿命和折旧方法。固定资产的各组成部分具有不同使用寿命或以不同方式为企业提供经济利益的，应分别确认为单项固定资产并分别计提折旧。",
      explanation: "折旧方法应反映经济利益的预期实现方式；无法可靠确定时采用年限平均法。",
      tags: ["固定资产", "折旧", "主观题"],
      difficulty: 3
    },
    {
      id: "acc-019",
      section: "会计",
      type: "cloze_subjective",
      prompt: "无形资产的确认通常要求：与该资产有关的经济利益很可能流入企业，且其成本能够 {{0}}。",
      answer: ["可靠计量"],
      explanation: "可辨认性、未来经济利益和成本可靠计量是无形资产确认的关键。",
      tags: ["无形资产", "确认"],
      difficulty: 2
    },
    {
      id: "acc-020",
      section: "会计",
      type: "blank",
      prompt: "使用寿命有限的无形资产，应自达到预定用途的____开始摊销。",
      answer: "当月",
      explanation: "与固定资产通常自达到预定可使用状态的次月开始计提折旧相区别。",
      tags: ["无形资产", "摊销"],
      difficulty: 1
    },
    {
      id: "acc-021",
      section: "会计",
      type: "cloze_subjective",
      prompt: "使用寿命不确定的无形资产 {{0}} 摊销，但应在每个会计期间进行 {{1}} 测试。",
      answer: ["不", "减值"],
      explanation: "企业还应在每个会计期间复核其使用寿命是否仍不确定。",
      tags: ["无形资产", "减值", "摊销"],
      difficulty: 2
    },
    {
      id: "acc-022",
      section: "会计",
      type: "free_response",
      prompt: "默写：开发阶段支出资本化需要同时满足的五项条件。",
      answer: "完成无形资产在技术上具有可行性；有完成并使用或出售的意图；能够证明无形资产将产生经济利益；有足够的技术、财务和其他资源支持完成、使用或出售；归属于该无形资产开发阶段的支出能够可靠计量。",
      explanation: "任一条件不满足，开发阶段支出也应计入当期损益；研究阶段支出一律费用化。",
      tags: ["无形资产", "研发支出", "主观题"],
      difficulty: 3
    },
    {
      id: "acc-023",
      section: "会计",
      type: "blank",
      prompt: "投资方对被投资单位具有共同控制或重大影响的长期股权投资，应采用____核算。",
      answer: "权益法",
      explanation: "控制情形下在个别财务报表中通常采用成本法。",
      tags: ["长期股权投资", "权益法"],
      difficulty: 1
    },
    {
      id: "acc-024",
      section: "会计",
      type: "cloze_subjective",
      prompt: "权益法下，投资方应按应享有被投资单位实现净损益的份额，调整长期股权投资的 {{0}} 并确认 {{1}}。",
      answer: ["账面价值", "投资损益"],
      explanation: "被投资单位发生其他综合收益或其他所有者权益变动时，投资方也应按份额作相应调整。",
      tags: ["长期股权投资", "权益法"],
      difficulty: 2
    },
    {
      id: "acc-025",
      section: "会计",
      type: "blank",
      prompt: "权益法下，被投资单位宣告分派现金股利时，投资方应____长期股权投资的账面价值。",
      answer: "减少",
      explanation: "权益法下的股利通常是投资账面价值的收回，不直接确认为投资收益。",
      tags: ["长期股权投资", "权益法", "现金股利"],
      difficulty: 2
    },
    {
      id: "acc-026",
      section: "会计",
      type: "free_response",
      prompt: "默写：权益法初始投资成本与应享有被投资单位可辨认净资产公允价值份额的差额分别如何处理？",
      answer: "初始投资成本大于应享有被投资单位可辨认净资产公允价值份额的，不调整长期股权投资初始投资成本；初始投资成本小于该份额的，应按差额调增长期股权投资初始投资成本，并计入取得投资当期损益。",
      explanation: "前者实质上包含商誉，后者体现廉价取得利益。",
      tags: ["长期股权投资", "权益法", "初始计量", "主观题"],
      difficulty: 3
    },
    {
      id: "acc-027",
      section: "会计",
      type: "cloze_subjective",
      prompt: "成本法下，投资单位确认投资收益的依据通常是被投资单位已宣告发放的 {{0}} 中属于本企业的部分。",
      answer: ["现金股利或利润"],
      explanation: "成本法不因被投资单位实现净利润而同步调整长期股权投资账面价值。",
      tags: ["长期股权投资", "成本法"],
      difficulty: 2
    },
    {
      id: "acc-028",
      section: "会计",
      type: "blank",
      prompt: "企业持有金融资产的业务模式若以收取合同现金流量和出售金融资产为目标，且满足 SPPI 特征，应分类为____计量的金融资产。",
      answer: "以公允价值计量且其变动计入其他综合收益",
      explanation: "这是债务工具金融资产的 FVOCI 分类；还须同时满足合同现金流量仅为本金和利息支付。",
      tags: ["金融资产", "分类", "FVOCI"],
      difficulty: 3
    },
    {
      id: "acc-029",
      section: "会计",
      type: "cloze_subjective",
      prompt: "不满足以摊余成本计量或以公允价值计量且其变动计入其他综合收益条件的金融资产，应分类为以 {{0}} 计量且其变动计入 {{1}}。",
      answer: ["公允价值", "当期损益"],
      explanation: "该分类通常简称 FVTPL，是金融资产分类的兜底类别。",
      tags: ["金融资产", "分类", "FVTPL"],
      difficulty: 2
    },
    {
      id: "acc-030",
      section: "会计",
      type: "blank",
      prompt: "以摊余成本计量的金融资产，后续通常采用实际利率法，以____为基础计算利息收入。",
      answer: "摊余成本",
      explanation: "实际利率法将估计未来现金流量按实际利率折现至初始确认金额。",
      tags: ["金融资产", "摊余成本", "实际利率法"],
      difficulty: 2
    },
    {
      id: "acc-031",
      section: "会计",
      type: "cloze_subjective",
      prompt: "对于非交易性权益工具投资，企业可在初始确认时作出不可撤销的选择，将其公允价值变动计入 {{0}}；处置时该累计利得或损失 {{1}} 转入当期损益。",
      answer: ["其他综合收益", "不得"],
      explanation: "这是权益工具 FVOCI 的特殊指定；其股利在通常情况下仍计入当期损益。",
      tags: ["金融资产", "权益工具", "FVOCI"],
      difficulty: 3
    },
    {
      id: "acc-032",
      section: "会计",
      type: "blank",
      prompt: "金融资产减值采用____损失模型，而不是已发生损失模型。",
      answer: "预期信用",
      explanation: "预期信用损失模型要求企业前瞻性评估信用风险和预期损失。",
      tags: ["金融资产", "减值", "预期信用损失"],
      difficulty: 2
    },
    {
      id: "acc-033",
      section: "会计",
      type: "cloze_subjective",
      prompt: "金融资产终止确认的核心判断是：收取该金融资产现金流量的合同权利终止，或金融资产已转移且转移了几乎所有 {{0}} 和 {{1}}。",
      answer: ["风险", "报酬"],
      explanation: "若既未转移也未保留几乎所有风险和报酬，还需判断是否保留控制。",
      tags: ["金融资产", "终止确认"],
      difficulty: 3
    },
    {
      id: "acc-034",
      section: "会计",
      type: "free_response",
      prompt: "默写：金融资产分类的决策顺序，并比较三类计量类别的核心特征。",
      answer: "先判断管理金融资产的业务模式，再判断合同现金流量是否仅为本金及以未偿付本金金额为基础的利息支付。以收取合同现金流量为目标且满足 SPPI 的，按摊余成本计量；以收取合同现金流量和出售为目标且满足 SPPI 的，按公允价值计量且其变动计入其他综合收益；其余按公允价值计量且其变动计入当期损益。",
      explanation: "业务模式是在组合层面评估，不是针对单项资产的持有意图；非交易性权益工具可作 FVOCI 特殊指定。",
      tags: ["金融资产", "分类", "主观题"],
      difficulty: 3
    },
    {
      id: "aud-001",
      section: "审计",
      type: "cloze_subjective",
      prompt: "审计风险 = {{0}} × {{1}}。",
      answer: ["重大错报风险", "检查风险"],
      explanation: "重大错报风险受固有风险和控制风险影响；检查风险通过审计程序设计加以控制。",
      tags: ["审计风险模型"],
      difficulty: 1
    },
    {
      id: "aud-002",
      section: "审计",
      type: "blank",
      prompt: "重大错报风险越高，可接受的检查风险越____。",
      answer: "低",
      explanation: "此时通常需要扩大范围、使程序更接近期末、获取质量更高的证据。",
      tags: ["审计风险模型"],
      difficulty: 1
    },
    {
      id: "aud-003",
      section: "审计",
      type: "free_response",
      prompt: "默写：四种审计意见分别对应什么典型情形？",
      answer: "无保留意见：财务报表整体不存在重大错报；保留意见：重大错报或范围受限但不具有广泛性；否定意见：存在重大且具有广泛性的错报；无法表示意见：无法取得充分适当证据且潜在影响重大并具有广泛性。",
      explanation: "先区分错报与证据受限，再判断重大性和广泛性。",
      tags: ["审计意见", "主观题"],
      difficulty: 3
    },
    {
      id: "aud-004",
      section: "审计",
      type: "cloze_subjective",
      prompt: "存在认定关注“账上有的是否真实存在”；完整性认定关注“实际有的是否 {{0}}”。",
      answer: ["全部入账"],
      explanation: "应收账款虚增重点查存在，应付账款漏记重点查完整性。",
      tags: ["认定"],
      difficulty: 2
    },
    {
      id: "aud-005",
      section: "审计",
      type: "blank",
      prompt: "进一步审计程序 = 控制测试 + ____。",
      answer: "实质性程序",
      explanation: "实质性程序包括实质性分析程序和细节测试。",
      tags: ["审计程序"],
      difficulty: 1
    },
    {
      id: "aud-006",
      section: "审计",
      type: "blank",
      prompt: "对所有重大的交易类别、账户余额和披露，无论风险评估结果如何，都应实施____。",
      answer: "实质性程序",
      explanation: "风险评估程序本身不能提供支持审计意见所需的全部充分、适当审计证据。",
      tags: ["审计程序"],
      difficulty: 2
    },
    {
      id: "aud-007",
      section: "审计",
      type: "free_response",
      prompt: "默写：审计证据的充分性与适当性分别指什么？列出三条一般可靠性规律。",
      answer: "充分性指证据数量；适当性指证据质量，包括相关性和可靠性。一般而言，外部证据比内部证据可靠；注册会计师直接获取的证据比间接获取的可靠；书面证据比口头证据可靠。",
      explanation: "可靠性规律须结合具体业务判断，不能机械套用。",
      tags: ["审计证据", "主观题"],
      difficulty: 3
    },
    {
      id: "aud-008",
      section: "审计",
      type: "cloze_subjective",
      prompt: "分析程序在 {{0}} 阶段和 {{1}} 阶段必须使用。",
      answer: ["风险评估", "总体复核"],
      explanation: "分析程序在实质性程序阶段可以使用。",
      tags: ["分析程序"],
      difficulty: 2
    },
    {
      id: "aud-009",
      section: "审计",
      type: "blank",
      prompt: "细节测试中，认为不存在重大错报但实际存在的抽样风险是____。",
      answer: "误受风险",
      explanation: "误受风险影响审计效果；误拒风险主要影响审计效率。",
      tags: ["审计抽样"],
      difficulty: 3
    },
    {
      id: "aud-010",
      section: "审计",
      type: "free_response",
      prompt: "默写：存货监盘中管理层与注册会计师分别负责什么？监盘主要支持哪两项内容？",
      answer: "被审计单位管理层负责组织盘点，注册会计师负责实施监盘程序。注册会计师观察管理层盘点程序、检查存货状态并执行抽盘。监盘主要为存货的存在和状况提供证据。",
      explanation: "存货完整性通常还需结合其他审计程序取得证据。",
      tags: ["存货监盘", "主观题"],
      difficulty: 3
    },
    {
      "id": "zjkj-001",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计机构负责人的基本条件之一：应____、廉洁。",
      "answer": "坚持原则",
      "explanation": "坚持原则、廉洁是会计机构负责人的基本职业要求。",
      "tags": [
        "第一章",
        "总论",
        "会计机构负责人"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-002",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "会计机构负责人应具备{{0}}资格，或者从事会计工作不少于{{1}}年。",
      "answer": [
        "会计师以上",
        "3"
      ],
      "explanation": "任一条件符合即可满足该项专业资格或工作经历要求。",
      "tags": [
        "第一章",
        "总论",
        "会计机构负责人"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-003",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计机构负责人应熟悉有关____知识。",
      "answer": "会计",
      "explanation": "除职业品行和工作经历外，还应具备相应的会计专业知识。",
      "tags": [
        "第一章",
        "总论",
        "会计机构负责人"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-004",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计机构负责人应具有较强的____能力。",
      "answer": "组织",
      "explanation": "该要求强调负责人对会计工作的组织与协调能力。",
      "tags": [
        "第一章",
        "总论",
        "会计机构负责人"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-005",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计机构负责人还应具备能够适应工作的____状况。",
      "answer": "身体",
      "explanation": "身体状况能够适应工作属于会计机构负责人基本条件之一。",
      "tags": [
        "第一章",
        "总论",
        "会计机构负责人"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-006",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "单位负责人对本单位会计工作和会计资料的{{0}}、{{1}}负责。",
      "answer": [
        "真实性",
        "完整性"
      ],
      "explanation": "责任主体是单位负责人，责任对象包括会计工作及会计资料。",
      "tags": [
        "第一章",
        "总论",
        "会计责任"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-007",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "因违法被追究刑事责任的人员，____聘用为会计机构负责人。",
      "answer": "不得",
      "explanation": "该情形属于聘用限制。",
      "tags": [
        "第一章",
        "总论",
        "会计机构负责人"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-008",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "受到行政处罚____年内的人员，在期满前不得聘用为会计机构负责人。",
      "answer": "5",
      "explanation": "注意该限制期间为 5 年。",
      "tags": [
        "第一章",
        "总论",
        "会计机构负责人"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-009",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "会计人员“三坚三守”中的自律要求是：坚持{{0}}，守法{{1}}。",
      "answer": [
        "诚信",
        "奉公"
      ],
      "explanation": "“坚持诚信，守法奉公”对应自律要求。",
      "tags": [
        "第一章",
        "总论",
        "会计职业道德",
        "三坚三守"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-010",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "会计人员“三坚三守”中的履职要求是：坚持{{0}}，守责{{1}}。",
      "answer": [
        "准则",
        "敬业"
      ],
      "explanation": "“坚持准则，守责敬业”对应履职要求。",
      "tags": [
        "第一章",
        "总论",
        "会计职业道德",
        "三坚三守"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-011",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "会计人员“三坚三守”中的发展要求是：坚持{{0}}，守正{{1}}。",
      "answer": [
        "学习",
        "创新"
      ],
      "explanation": "“坚持学习，守正创新”对应发展要求。",
      "tags": [
        "第一章",
        "总论",
        "会计职业道德",
        "三坚三守"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-012",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计信息质量要求中的可靠性，强调会计信息应以____发生的交易或事项为依据。",
      "answer": "实际",
      "explanation": "可靠性要求会计信息真实可靠，反映实际发生的经济业务。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "可靠性"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-013",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "相关性要求会计信息应与使用者的____需要相关。",
      "answer": "经济决策",
      "explanation": "相关性关注信息是否有助于会计信息使用者作出经济决策。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "相关性"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-014",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "可理解性要求会计信息应当____明了。",
      "answer": "清晰",
      "explanation": "可理解性强调会计信息应清晰、易于理解。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "可理解性"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-015",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "可比性包括：同一企业不同时期的{{0}}可比，以及不同企业相同会计期间的{{1}}可比。",
      "answer": [
        "纵向",
        "横向"
      ],
      "explanation": "纵向可比针对同一企业不同时期；横向可比针对不同企业同一会计期间。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "可比性"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-016",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "实质重于形式要求企业按照交易或事项的____实质进行会计确认、计量和报告。",
      "answer": "经济",
      "explanation": "经济实质优先于法律形式。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "实质重于形式"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-017",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "判断交易或事项是否具有重要性，应从项目的{{0}}和{{1}}两方面判断。",
      "answer": [
        "性质",
        "金额大小"
      ],
      "explanation": "重要性不能只看金额，还要结合事项性质判断。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "重要性"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-018",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "谨慎性的典型应用包括：计提资产{{0}}准备；对商品保修义务确认{{1}}；采用加速{{2}}法计提折旧。",
      "answer": [
        "减值",
        "预计负债",
        "折旧"
      ],
      "explanation": "谨慎性要求不高估资产或收益，不低估负债或费用。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "谨慎性"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-019",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "及时性要求企业及时____、处理和传递会计信息。",
      "answer": "收集",
      "explanation": "及时性贯穿会计信息收集、处理和传递全过程。",
      "tags": [
        "第一章",
        "总论",
        "会计信息质量要求",
        "及时性"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-020",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "外购存货的成本包括{{0}}、{{1}}和入库前发生的相关费用。",
      "answer": [
        "购买价款",
        "相关税费"
      ],
      "explanation": "外购存货应按购买价款、相关税费及入库前可归属于存货成本的支出确定成本。",
      "tags": [
        "第二章",
        "存货",
        "外购存货",
        "初始计量"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-021",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "外购存货涉及增值税时，{{0}}纳税人的增值税通常计入成本；{{1}}纳税人的可抵扣增值税确认为进项税额。",
      "answer": [
        "小规模",
        "一般"
      ],
      "explanation": "能抵扣的进项税额不构成存货成本。",
      "tags": [
        "第二章",
        "存货",
        "外购存货",
        "增值税"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-022",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "为下一生产阶段所必需的仓储费计入存货成本；采购入库后发生的仓储费通常计入{{0}}。",
      "answer": [
        "当期损益"
      ],
      "explanation": "关键在于仓储是否为使存货达到目前场所和状态所必需。",
      "tags": [
        "第二章",
        "存货",
        "外购存货",
        "仓储费"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-023",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "为特定客户发生的设计费计入存货成本；一般设计费通常计入{{0}}。",
      "answer": [
        "当期损益"
      ],
      "explanation": "只有直接为特定客户或特定合同服务的设计支出，才可归入相关存货成本。",
      "tags": [
        "第二章",
        "存货",
        "外购存货",
        "设计费"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-024",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存货发生{{0}}损耗时，总成本通常已包含该损耗；发生{{1}}损耗时，应在发生时从存货总成本中扣除。",
      "answer": [
        "合理",
        "非合理"
      ],
      "explanation": "合理损耗通常由完工或入库存货负担；非正常损耗不应计入正常存货成本。",
      "tags": [
        "第二章",
        "存货",
        "外购存货",
        "损耗"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-025",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "委托外单位加工收回存货的成本可概括为：{{0}}＋{{1}}＋费。",
      "answer": [
        "料",
        "工"
      ],
      "explanation": "“料、工、费”分别对应发出材料成本、加工费及相关应负担费用。",
      "tags": [
        "第二章",
        "存货",
        "委托加工",
        "初始计量"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-026",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "委托加工物资收回后直接销售的，受托方代收代缴的消费税应计入存货____。",
      "answer": "成本",
      "explanation": "收回后直接销售时，消费税不能抵扣，应构成委托加工物资成本。",
      "tags": [
        "第二章",
        "存货",
        "委托加工",
        "消费税"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-027",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "委托加工物资收回后继续生产应税消费品的，代收代缴消费税不计入成本，分录为：借：{{0}}；贷：{{1}}。",
      "answer": [
        "应交税费——应交消费税",
        "银行存款等"
      ],
      "explanation": "继续生产应税消费品时，已缴消费税可按规定抵扣。",
      "tags": [
        "第二章",
        "存货",
        "委托加工",
        "消费税",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-028",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "委托加工中非正常消耗的材料、人工和费用应计入____。",
      "answer": "当期损益",
      "explanation": "非正常消耗不属于使存货达到目前场所和状态的必要支出。",
      "tags": [
        "第二章",
        "存货",
        "委托加工",
        "非正常损耗"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-029",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "因自然灾害造成的存货损失，应计入____。",
      "answer": "营业外支出",
      "explanation": "自然灾害属于非正常原因造成的损失。",
      "tags": [
        "第二章",
        "存货",
        "非正常损耗",
        "损益处理"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-030",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "因管理不善造成的存货损失，应计入____。",
      "answer": "管理费用",
      "explanation": "注意与自然灾害造成的损失计入营业外支出相区别。",
      "tags": [
        "第二章",
        "存货",
        "非正常损耗",
        "损益处理"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-031",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "投资者投入存货通常按照投资合同或协议约定的____确定；约定价值不公允的除外。",
      "answer": "价值",
      "explanation": "合同或协议约定价值不公允时，不能机械按约定价值确定。",
      "tags": [
        "第二章",
        "存货",
        "投资者投入",
        "初始计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-032",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资产负债表日，存货按照{{0}}与{{1}}孰低计量。",
      "answer": [
        "成本",
        "可变现净值"
      ],
      "explanation": "这是存货期末计量的基本原则。",
      "tags": [
        "第二章",
        "存货",
        "期末计量"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-033",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存货成本高于可变现净值时，应计提跌价准备：借：{{0}}；贷：{{1}}。",
      "answer": [
        "资产减值损失",
        "存货跌价准备"
      ],
      "explanation": "差额计入资产减值损失，同时减少存货账面价值。",
      "tags": [
        "第二章",
        "存货",
        "存货跌价准备",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-034",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存货跌价准备的减值因素消失、原已计提金额应转回时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "存货跌价准备",
        "资产减值损失"
      ],
      "explanation": "转回金额以原已计提的存货跌价准备为限。",
      "tags": [
        "第二章",
        "存货",
        "存货跌价准备",
        "转回",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-035",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "已计提跌价准备的存货出售时，应同时结转准备：借：{{0}}、存货跌价准备；贷：{{1}}。",
      "answer": [
        "主营业务成本或其他业务成本",
        "库存商品或原材料等"
      ],
      "explanation": "出售存货时，存货成本与对应存货跌价准备应一并结转。",
      "tags": [
        "第二章",
        "存货",
        "存货跌价准备",
        "出售",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-036",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "直接用于出售的存货，其可变现净值通常以预计售价扣除对应的估计____确定。",
      "answer": "税费",
      "explanation": "题目中的“估计税费”通常包括销售过程中发生的相关税费；应结合题干判断是否还需扣除销售费用。",
      "tags": [
        "第二章",
        "存货",
        "可变现净值",
        "直接出售"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-037",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "需加工材料的减值测试中，若用其生产的产品未发生减值，则该材料____发生减值。",
      "answer": "一定不会",
      "explanation": "材料是否减值，应先结合其生产产品的可变现净值与成本判断。",
      "tags": [
        "第二章",
        "存货",
        "可变现净值",
        "材料减值"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-038",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "需加工材料的可变现净值＝产品估计售价－{{0}}－产品对应的估计{{1}}。",
      "answer": [
        "加工成本",
        "税费"
      ],
      "explanation": "材料的可变现净值应以最终产品预计售价为基础，扣除完成加工和销售所需支出。",
      "tags": [
        "第二章",
        "存货",
        "可变现净值",
        "材料减值"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-039",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "确定存货估计售价时，有合同部分按{{0}}确定；无合同部分按{{1}}确定。",
      "answer": [
        "合同价",
        "市场价"
      ],
      "explanation": "有合同与无合同部分应分别确定可变现净值。",
      "tags": [
        "第二章",
        "存货",
        "可变现净值",
        "合同"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-040",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "存货可变现净值测试中，有合同部分与无合同部分____合并计算结果。",
      "answer": "不能",
      "explanation": "两部分估计售价依据不同，应分开进行减值判断。",
      "tags": [
        "第二章",
        "存货",
        "可变现净值",
        "合同"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-041",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：计算当期计提的存货跌价准备金额的基本步骤。",
      "answer": "先按照成本与可变现净值孰低原则确定“存货跌价准备”科目的期末余额，再结合期初余额、当期转回和结转等情况，通过T型账户计算当期应计提的金额。",
      "explanation": "题目若询问“当期计提金额”，不能直接以期末跌价准备余额作答。",
      "tags": [
        "第二章",
        "存货",
        "存货跌价准备",
        "计算"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-042",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存货期末账面价值＝存货期末{{0}}－存货跌价准备{{1}}余额。",
      "answer": [
        "成本",
        "期末"
      ],
      "explanation": "账面余额与账面价值不同；存货跌价准备是存货账面价值的抵减项目。",
      "tags": [
        "第二章",
        "存货",
        "期末计量",
        "账面价值"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-043",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "环保、安全设备虽不直接为企业带来经济利益，但能使企业从相关资产获得经济利益或减少损失，符合条件的应确认为____。",
      "answer": "固定资产",
      "explanation": "环保、安全设备通常作为固定资产核算。",
      "tags": [
        "第三章",
        "固定资产",
        "确认"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-044",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "周转件中，数量多、价值低的通常作为{{0}}；航空等高价值周转件通常作为{{1}}。",
      "answer": [
        "存货",
        "固定资产"
      ],
      "explanation": "判断重点是价值与使用特征。",
      "tags": [
        "第三章",
        "固定资产",
        "确认",
        "周转件"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-045",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "固定资产的各组成部分具有不同使用寿命，或以不同方式提供经济利益的，应分别确认为____固定资产。",
      "answer": "单项",
      "explanation": "组成部分法有利于分别确定折旧年限、净残值和折旧方法。",
      "tags": [
        "第三章",
        "固定资产",
        "确认",
        "组成部分"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-046",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "外购固定资产入账成本包括买价、相关税费以及装卸、运输、安装、保险和{{0}}等必要支出。",
      "answer": [
        "专业人员服务费"
      ],
      "explanation": "使固定资产达到预定可使用状态前发生的必要支出可计入成本。",
      "tags": [
        "第三章",
        "固定资产",
        "初始计量",
        "外购"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-047",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "外购固定资产发生的专业人员培训费通常不计入固定资产成本，而应计入____。",
      "answer": "当期损益",
      "explanation": "培训费不属于使固定资产达到预定可使用状态的必要支出。",
      "tags": [
        "第三章",
        "固定资产",
        "初始计量",
        "培训费"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-048",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "购入需要安装的固定资产时，基本分录为：借：{{0}}、应交税费——应交增值税（进项税额）；贷：{{1}}。",
      "answer": [
        "在建工程",
        "银行存款等"
      ],
      "explanation": "需安装设备在达到预定可使用状态前通过“在建工程”归集成本。",
      "tags": [
        "第三章",
        "固定资产",
        "初始计量",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-049",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "固定资产安装过程中领用原材料或库存商品时，借：{{0}}；贷：{{1}}。",
      "answer": [
        "在建工程",
        "库存商品或原材料"
      ],
      "explanation": "领用的材料、商品应按成本价转入在建工程。",
      "tags": [
        "第三章",
        "固定资产",
        "初始计量",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-050",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "安装完毕、达到预定可使用状态时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "固定资产",
        "在建工程"
      ],
      "explanation": "达到预定可使用状态是由在建工程转入固定资产的时点。",
      "tags": [
        "第三章",
        "固定资产",
        "初始计量",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-051",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "一笔款项购入多项没有单独标价的固定资产，应按各项固定资产的____比例分配总成本。",
      "answer": "公允价值",
      "explanation": "分配后分别确定各项固定资产成本。",
      "tags": [
        "第三章",
        "固定资产",
        "初始计量",
        "成本分配"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-052",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "自营方式建造固定资产的入账价值，按达到预定可使用状态前发生的必要支出确定，包括直接材料、{{0}}和{{1}}等。",
      "answer": [
        "直接人工",
        "直接机械施工费"
      ],
      "explanation": "自营建造的成本通过在建工程归集。",
      "tags": [
        "第三章",
        "固定资产",
        "自营建造",
        "初始计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-053",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "自营建造中购入工程物资时：借：{{0}}、应交税费——应交增值税（进项税额）；贷：{{1}}。",
      "answer": [
        "工程物资",
        "银行存款等"
      ],
      "explanation": "工程物资购入后，领用时再转入在建工程。",
      "tags": [
        "第三章",
        "固定资产",
        "自营建造",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-054",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "自营建造中确认工程人员工资时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "在建工程",
        "应付职工薪酬"
      ],
      "explanation": "工程人员薪酬属于建造过程中发生的必要支出。",
      "tags": [
        "第三章",
        "固定资产",
        "自营建造",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-055",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业为建造固定资产通过出让方式取得土地使用权支付的土地出让金，应确认为____。",
      "answer": "无形资产",
      "explanation": "土地使用权本身不计入在建工程；其符合资本化条件的摊销额可计入固定资产成本。",
      "tags": [
        "第三章",
        "固定资产",
        "自营建造",
        "土地使用权"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-056",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "所建固定资产已达到预定可使用状态但尚未办理竣工决算的，应按{{0}}转入固定资产并计提折旧；决算后调整原暂估价值，但{{1}}调整已计提折旧额。",
      "answer": [
        "暂估价值",
        "不需要"
      ],
      "explanation": "达到预定可使用状态是确认固定资产和开始计提折旧的关键时点。",
      "tags": [
        "第三章",
        "固定资产",
        "自营建造",
        "暂估入账"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-057",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存在弃置费用的固定资产，取得时应将弃置费用的{{0}}计入固定资产成本，同时确认{{1}}。",
      "answer": [
        "现值",
        "预计负债"
      ],
      "explanation": "弃置费用终值与现值之间的差额在使用寿命内按实际利率法确认利息费用。",
      "tags": [
        "第三章",
        "固定资产",
        "初始计量",
        "弃置费用"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-058",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "弃置费用形成的预计负债在后续期间按实际利率确认利息费用：借：{{0}}；贷：{{1}}。",
      "answer": [
        "财务费用",
        "预计负债"
      ],
      "explanation": "利息费用＝期初预计负债的摊余成本×实际利率。",
      "tags": [
        "第三章",
        "固定资产",
        "弃置费用",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-059",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：不再计提固定资产折旧的主要情形。",
      "answer": "已提足折旧的固定资产无论是否继续使用均不再计提折旧；单独计价入账的土地不计提折旧；更新改造期间停止使用的固定资产不计提折旧；提前报废的固定资产不再计提折旧。",
      "explanation": "更新改造期间应将固定资产账面价值转入在建工程。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "范围"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-060",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "因定期大修理而暂时停用、且修理支出不符合资本化条件的固定资产，应当____计提折旧。",
      "answer": "照常",
      "explanation": "该情形不同于更新改造期间停止使用的固定资产。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-061",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "固定资产更新改造期间停止使用时，应将账面价值转入{{0}}，并{{1}}计提折旧。",
      "answer": [
        "在建工程",
        "不再"
      ],
      "explanation": "更新改造完成后按重新确定的使用寿命、净残值和折旧方法计提折旧。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "更新改造"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-062",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "固定资产应按月计提折旧：当月增加的{{0}}计提；当月减少的{{1}}停提。",
      "answer": [
        "下月",
        "下月"
      ],
      "explanation": "增加与减少均从下月起改变折旧状态。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "时间范围"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-063",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：固定资产的主要折旧方法。",
      "answer": "固定资产的折旧方法包括年限平均法、工作量法、双倍余额递减法和年数总和法等。",
      "explanation": "折旧方法应反映与固定资产有关的经济利益预期消耗方式，确定后不得随意变更。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧方法"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-064",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "生产用固定资产计提折旧计入{{0}}；行政、财务或尚未使用的固定资产计提折旧计入{{1}}。",
      "answer": [
        "制造费用",
        "管理费用"
      ],
      "explanation": "折旧费用归属取决于固定资产的用途。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-065",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "销售部门使用的固定资产折旧计入{{0}}；经营租出的固定资产折旧计入{{1}}。",
      "answer": [
        "销售费用",
        "其他业务成本"
      ],
      "explanation": "不同用途的固定资产，其折旧费用计入不同损益或成本项目。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-066",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "用于工程建造的固定资产折旧计入{{0}}；用于研发的固定资产折旧计入{{1}}。",
      "answer": [
        "在建工程",
        "研发支出"
      ],
      "explanation": "折旧费用可资本化时，应计入相关资产或研发支出成本。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-067",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "年限平均法下，年折旧额＝（固定资产原值－预计净残值）÷____。",
      "answer": "预计使用年限",
      "explanation": "月折旧额＝年折旧额÷12。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧方法",
        "年限平均法"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-068",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "工作量法下，单位工作量折旧额＝（固定资产原值－预计净残值）÷____。",
      "answer": "预计总工作量",
      "explanation": "某月折旧额＝当月工作量×单位工作量折旧额。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧方法",
        "工作量法"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-069",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "双倍余额递减法前 n－2 年的年折旧额＝（固定资产原值－累计折旧）×2÷____。",
      "answer": "预计使用年限",
      "explanation": "双倍余额递减法在最后两年改按平均年限法计算。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧方法",
        "双倍余额递减法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-070",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "双倍余额递减法后两年的年折旧额＝（固定资产原值－累计折旧－预计净残值）÷____。",
      "answer": "2",
      "explanation": "后两年将扣除预计净残值后的账面净额平均摊销。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧方法",
        "双倍余额递减法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-071",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "固定资产账面净值＝固定资产原值－{{0}}；固定资产账面价值还应再减去{{1}}。",
      "answer": [
        "累计折旧",
        "固定资产减值准备"
      ],
      "explanation": "账面余额、账面净值与账面价值是高频区分点。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "账面价值"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-072",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业至少应当于每年____，对固定资产使用寿命、预计净残值和折旧方法进行复核。",
      "answer": "年度终了",
      "explanation": "复核并不意味着必须变更；发生变化时按会计估计变更处理。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "会计估计变更"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-073",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "固定资产使用寿命、预计净残值和折旧方法发生改变，应作为____处理。",
      "answer": "会计估计变更",
      "explanation": "会计估计变更采用未来适用法。",
      "tags": [
        "第三章",
        "固定资产",
        "折旧",
        "会计估计变更"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-074",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "更新改造等后续支出符合固定资产确认条件的，应{{0}}；同时将被替换部分的{{1}}扣除。",
      "answer": [
        "计入固定资产成本",
        "账面价值"
      ],
      "explanation": "符合资本化条件的后续支出通常先通过在建工程归集。",
      "tags": [
        "第三章",
        "固定资产",
        "后续支出",
        "资本化"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-075",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "不符合固定资产确认条件的修理费用中，行政管理部门发生的计入{{0}}；专设销售机构发生的计入{{1}}。",
      "answer": [
        "管理费用",
        "销售费用"
      ],
      "explanation": "与存货生产和加工相关的日常修理费用按存货成本确定原则处理。",
      "tags": [
        "第三章",
        "固定资产",
        "后续支出",
        "费用化"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-076",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "固定资产处置转入清理时：借：{{0}}、累计折旧、固定资产减值准备；贷：{{1}}。",
      "answer": [
        "固定资产清理",
        "固定资产"
      ],
      "explanation": "先结转账面价值，再核算清理费用、处置收入及清理净损益。",
      "tags": [
        "第三章",
        "固定资产",
        "处置",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-077",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "发生固定资产清理费等支出时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "固定资产清理",
        "银行存款等"
      ],
      "explanation": "清理费增加固定资产清理科目借方余额。",
      "tags": [
        "第三章",
        "固定资产",
        "处置",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-078",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "取得固定资产处置价款时：借：{{0}}；贷：{{1}}、应交税费——应交增值税（销项税额）。",
      "answer": [
        "银行存款",
        "固定资产清理"
      ],
      "explanation": "出售固定资产取得的价款先冲减固定资产清理。",
      "tags": [
        "第三章",
        "固定资产",
        "处置",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-079",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "固定资产因自然灾害毁损报废的清理损失计入{{0}}；出售转让产生的清理净损益计入{{1}}。",
      "answer": [
        "营业外支出",
        "资产处置损益"
      ],
      "explanation": "自然灾害毁损的净损益通常不影响营业利润；出售转让的净损益影响营业利润。",
      "tags": [
        "第三章",
        "固定资产",
        "处置",
        "损益处理"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-080",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "外购无形资产的成本可概括为：价、{{0}}、费。",
      "answer": [
        "税"
      ],
      "explanation": "成本包括购买价款、相关税费及使无形资产达到预定用途前发生的相关支出。",
      "tags": [
        "第四章",
        "无形资产",
        "初始计量",
        "外购"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-081",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "一般纳税人购入无形资产时，可抵扣的增值税____计入无形资产成本。",
      "answer": "不",
      "explanation": "可抵扣进项税额应单独核算。",
      "tags": [
        "第四章",
        "无形资产",
        "初始计量",
        "增值税"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-082",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "外购无形资产发生的{{0}}计入成本；员工{{1}}费不计入成本。",
      "answer": [
        "专业服务费",
        "培训"
      ],
      "explanation": "培训费不属于使无形资产达到预定用途的必要支出。",
      "tags": [
        "第四章",
        "无形资产",
        "初始计量",
        "外购"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-083",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "为引入新产品发生的宣传广告费，通常____计入无形资产成本。",
      "answer": "不",
      "explanation": "宣传广告费通常在发生时计入当期损益。",
      "tags": [
        "第四章",
        "无形资产",
        "初始计量",
        "广告费"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-084",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "无形资产达到预定用途前发生的测试费，应____无形资产成本。",
      "answer": "计入",
      "explanation": "测试费属于达到预定用途前发生的必要支出。",
      "tags": [
        "第四章",
        "无形资产",
        "初始计量",
        "测试费"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-085",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "购买无形资产的价款超过正常信用条件延期支付、实质具有融资性质的，其初始成本以购买价款的____为基础确定。",
      "answer": "现值",
      "explanation": "延期付款额与现值之间的差额作为未确认融资费用。",
      "tags": [
        "第四章",
        "无形资产",
        "初始计量",
        "融资性质"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-086",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "融资性质购入无形资产时：借：无形资产、{{0}}；贷：{{1}}。",
      "answer": [
        "未确认融资费用",
        "长期应付款"
      ],
      "explanation": "无形资产按购买价款现值入账，差额计入未确认融资费用。",
      "tags": [
        "第四章",
        "无形资产",
        "融资性质",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-087",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "融资性质购入无形资产，每期期末确认利息费用时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "财务费用",
        "未确认融资费用"
      ],
      "explanation": "利息费用按期初摊余成本乘以实际利率确定；符合资本化条件的除外。",
      "tags": [
        "第四章",
        "无形资产",
        "融资性质",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-088",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "融资性质购入无形资产，支付款项时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "长期应付款",
        "银行存款"
      ],
      "explanation": "付款时冲减长期应付款。",
      "tags": [
        "第四章",
        "无形资产",
        "融资性质",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-089",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业自用的土地使用权，应确认为____。",
      "answer": "无形资产",
      "explanation": "自用土地使用权通常单独作为无形资产核算。",
      "tags": [
        "第四章",
        "无形资产",
        "土地使用权"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-090",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "房地产开发企业用于建造对外出售房屋建筑物的土地使用权，应作为____核算。",
      "answer": "存货",
      "explanation": "该土地使用权直接服务于开发、出售的房地产项目。",
      "tags": [
        "第四章",
        "无形资产",
        "土地使用权",
        "房地产开发"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-091",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "外购房屋建筑物价款中同时包含土地使用权和地上建筑物价值，能够合理分配的，分别作为{{0}}和{{1}}核算。",
      "answer": [
        "固定资产",
        "无形资产"
      ],
      "explanation": "价值不能合理分配的，全部作为固定资产核算。",
      "tags": [
        "第四章",
        "无形资产",
        "土地使用权",
        "初始计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-092",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "内部研发项目中，{{0}}阶段支出全部费用化；{{1}}阶段满足资本化条件的支出资本化。",
      "answer": [
        "研究",
        "开发"
      ],
      "explanation": "开发阶段并非全部资本化，不满足资本化条件的支出仍应费用化。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-093",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "无法区分研究阶段和开发阶段的支出，应当____。",
      "answer": "全部费用化",
      "explanation": "无法可靠区分时，不得将支出资本化。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-094",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "开发阶段无形资产成本包括耗费材料、劳务成本、注册费、开发中使用资产的{{0}}以及{{1}}。",
      "answer": [
        "摊销",
        "资本化的利息"
      ],
      "explanation": "只有符合资本化条件的开发支出才构成无形资产成本。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出",
        "成本"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-095",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "达到预定用途前发生的可辨认无效和初始运作损失，以及{{0}}支出，均不计入无形资产成本。",
      "answer": [
        "培训"
      ],
      "explanation": "上述支出不属于使无形资产达到预定用途的必要支出。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出",
        "成本"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-096",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "同一无形资产在达到资本化条件前已费用化计入当期损益的支出，后续____调整为无形资产成本。",
      "answer": "不再",
      "explanation": "无形资产研发支出不得追溯资本化。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出",
        "资本化"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-097",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "研发费用化支出发生时：借：{{0}}；贷：原材料、银行存款或应付职工薪酬等。",
      "answer": [
        "研发支出——费用化支出"
      ],
      "explanation": "费用化支出发生时先归集至“研发支出”，并非直接计入管理费用。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-098",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "研发费用化支出在期末结转时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "管理费用",
        "研发支出——费用化支出"
      ],
      "explanation": "该结转影响当期损益和利润。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-099",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "研发资本化支出发生时：借：{{0}}；贷：原材料、银行存款或应付职工薪酬等。",
      "answer": [
        "研发支出——资本化支出"
      ],
      "explanation": "只有满足资本化条件的开发阶段支出进入该明细科目。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-100",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "研发项目达到预定用途时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "无形资产",
        "研发支出——资本化支出"
      ],
      "explanation": "达到预定用途是将资本化研发支出转入无形资产的时点。",
      "tags": [
        "第四章",
        "无形资产",
        "研发支出",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-101",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "无法预见无形资产为企业带来经济利益期限的，应视为使用寿命____的无形资产。",
      "answer": "不确定",
      "explanation": "使用寿命不确定不等于无限期使用。",
      "tags": [
        "第四章",
        "无形资产",
        "使用寿命"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-102",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "使用寿命有限的无形资产应按使用寿命{{0}}；使用寿命不确定的无形资产{{1}}摊销。",
      "answer": [
        "摊销",
        "不需要"
      ],
      "explanation": "使用寿命不确定的无形资产需进行减值测试并复核其使用寿命。",
      "tags": [
        "第四章",
        "无形资产",
        "摊销",
        "使用寿命"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-103",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "使用寿命不确定的无形资产，应至少于每个会计期末进行____测试。",
      "answer": "减值",
      "explanation": "同时应复核其使用寿命是否仍然不确定。",
      "tags": [
        "第四章",
        "无形资产",
        "减值",
        "使用寿命不确定"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-104",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：无形资产预计净残值通常为零的例外情形。",
      "answer": "无形资产预计净残值通常为零；但有第三方承诺在使用寿命结束时购买该无形资产的，按承诺购买金额确定残值，或者能够根据活跃市场取得预计残值信息且该市场在无形资产使用寿命结束时很可能仍然存在的除外。",
      "explanation": "预计净残值应至少每年年末复核。",
      "tags": [
        "第四章",
        "无形资产",
        "摊销",
        "预计净残值"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-105",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "无形资产摊销时间为：当月增加{{0}}提；当月减少{{1}}提。",
      "answer": [
        "当月开",
        "当月停止"
      ],
      "explanation": "口诀为“定下武当”，用于与固定资产折旧的次月起止相区分。",
      "tags": [
        "第四章",
        "无形资产",
        "摊销",
        "时间"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-106",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "无形资产无法可靠确定经济利益预期消耗方式的，应采用____法摊销。",
      "answer": "直线",
      "explanation": "直线法与年限平均法的原理相同。",
      "tags": [
        "第四章",
        "无形资产",
        "摊销方法"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-107",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业通常不应以产生的____为基础对无形资产进行摊销。",
      "answer": "收入",
      "explanation": "只有无形资产固有限制条款、收入与经济利益消耗高度相关等极其有限情形例外。",
      "tags": [
        "第四章",
        "无形资产",
        "摊销方法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-108",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "生产用无形资产的摊销计入{{0}}；出租无形资产的摊销计入{{1}}。",
      "answer": [
        "制造费用",
        "其他业务成本"
      ],
      "explanation": "管理用无形资产的摊销通常计入管理费用。",
      "tags": [
        "第四章",
        "无形资产",
        "摊销",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-109",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "无形资产重新估计的预计净残值高于其账面价值时，应{{0}}摊销；待残值低于账面价值时再{{1}}摊销。",
      "answer": [
        "停止",
        "恢复"
      ],
      "explanation": "这是预计净残值变化对摊销处理的特殊规则。",
      "tags": [
        "第四章",
        "无形资产",
        "摊销",
        "预计净残值"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-110",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "已出租的土地使用权，以及持有并准备增值后转让的土地使用权，属于{{0}}；闲置土地通常{{1}}属于投资性房地产。",
      "answer": [
        "投资性房地产",
        "不"
      ],
      "explanation": "土地使用权是否属于投资性房地产，取决于出租或资本增值目的是否已经实际形成。",
      "tags": [
        "第五章",
        "投资性房地产",
        "范围",
        "土地使用权"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-111",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "自用土地使用权作为{{0}}核算；房地产企业准备出售的土地使用权作为{{1}}核算。",
      "answer": [
        "无形资产",
        "存货"
      ],
      "explanation": "自用、出售开发目的均不符合投资性房地产定义。",
      "tags": [
        "第五章",
        "投资性房地产",
        "范围",
        "土地使用权"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-112",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业拥有产权并已出租的建筑物，通常属于____。",
      "answer": "投资性房地产",
      "explanation": "租入后再转租的建筑物不属于投资性房地产。",
      "tags": [
        "第五章",
        "投资性房地产",
        "范围",
        "建筑物"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-113",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "建筑物出租时提供的辅助服务在整个协议中不重大的，通常仍作为____核算。",
      "answer": "投资性房地产",
      "explanation": "例如提供保安、维修等非重大辅助服务，不改变建筑物的投资性房地产性质。",
      "tags": [
        "第五章",
        "投资性房地产",
        "范围",
        "建筑物"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-114",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：不属于投资性房地产的常见建筑物情形。",
      "answer": "租入后再转租的建筑物、自用建筑物、房地产企业准备出售的建筑物、出租给本企业职工居住的自建宿舍楼、持有并准备增值后转让但不能单独计量的建筑物，均不属于投资性房地产。",
      "explanation": "自用建筑物通常作为固定资产，准备出售的房地产通常作为存货。",
      "tags": [
        "第五章",
        "投资性房地产",
        "范围",
        "建筑物"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-115",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "同一企业对所有投资性房地产的后续计量只能采用____种模式。",
      "answer": "一",
      "explanation": "不得同时采用成本模式和公允价值模式进行后续计量。",
      "tags": [
        "第五章",
        "投资性房地产",
        "后续计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-116",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "成本模式下收取投资性房地产租金时：借：银行存款等；贷：{{0}}。计提折旧或摊销时：借：{{1}}；贷：投资性房地产累计折旧（摊销）。",
      "answer": [
        "其他业务收入",
        "其他业务成本"
      ],
      "explanation": "成本模式下，投资性房地产需要计提折旧或摊销。",
      "tags": [
        "第五章",
        "投资性房地产",
        "成本模式",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-117",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "成本模式下投资性房地产发生减值时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "资产减值损失",
        "投资性房地产减值准备"
      ],
      "explanation": "成本模式下可计提减值准备。",
      "tags": [
        "第五章",
        "投资性房地产",
        "成本模式",
        "减值",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-118",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "公允价值模式下，投资性房地产期末公允价值高于账面价值的差额计入____。",
      "answer": "公允价值变动损益",
      "explanation": "分录为借记“投资性房地产——公允价值变动”，贷记“公允价值变动损益”。",
      "tags": [
        "第五章",
        "投资性房地产",
        "公允价值模式",
        "期末计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-119",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "公允价值模式下投资性房地产期末公允价值低于账面价值时，应作与公允价值上升时____的分录。",
      "answer": "相反",
      "explanation": "差额仍通过“公允价值变动损益”核算。",
      "tags": [
        "第五章",
        "投资性房地产",
        "公允价值模式",
        "期末计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-120",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "公允价值模式下投资性房地产，后续{{0}}计提折旧或摊销，且{{1}}计提减值准备。",
      "answer": [
        "不",
        "不"
      ],
      "explanation": "公允价值变动已通过期末公允价值重新计量反映。",
      "tags": [
        "第五章",
        "投资性房地产",
        "公允价值模式"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-121",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "无论采用成本模式还是公允价值模式，发生费用化后续支出时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "其他业务成本",
        "银行存款等"
      ],
      "explanation": "费用化后续支出不增加投资性房地产账面价值。",
      "tags": [
        "第五章",
        "投资性房地产",
        "后续支出",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-122",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "投资性房地产由成本模式转为公允价值模式，应作为____处理。",
      "answer": "会计政策变更",
      "explanation": "该变更通常采用追溯调整法。",
      "tags": [
        "第五章",
        "投资性房地产",
        "后续计量模式变更",
        "会计政策变更"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-123",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "已采用公允价值模式计量的投资性房地产，____转回成本模式。",
      "answer": "不得",
      "explanation": "公允价值模式转回成本模式不被允许。",
      "tags": [
        "第五章",
        "投资性房地产",
        "后续计量模式变更"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-124",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "成本模式转为公允价值模式的转换日，应按转换日{{0}}调整投资性房地产成本；差额调整{{1}}和盈余公积。",
      "answer": [
        "公允价值",
        "未分配利润"
      ],
      "explanation": "转换日公允价值与账面价值差额按留存收益项目调整。",
      "tags": [
        "第五章",
        "投资性房地产",
        "后续计量模式变更",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-125",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "投资性房地产转为自用固定资产的转换日，是房地产达到{{0}}状态、开始用于生产商品、提供劳务或经营管理的日期。",
      "answer": [
        "自用"
      ],
      "explanation": "转换日按用途实质变化确定。",
      "tags": [
        "第五章",
        "投资性房地产",
        "转换",
        "固定资产"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-126",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "投资性房地产转为存货的转换日，是租赁期届满后董事会或类似机构作出书面决议，明确将其重新开发用于____的日期。",
      "answer": "对外销售",
      "explanation": "仅有出售意图不足以构成转换，须有书面决议明确重新开发销售。",
      "tags": [
        "第五章",
        "投资性房地产",
        "转换",
        "存货"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-127",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "固定资产或存货转换为投资性房地产，通常以____作为转换日。",
      "answer": "租赁期开始日",
      "explanation": "租赁开始意味着资产用途转为赚取租金或资本增值。",
      "tags": [
        "第五章",
        "投资性房地产",
        "转换"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-128",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "成本模式下，固定资产转换为投资性房地产时：借：投资性房地产、{{0}}；贷：固定资产、{{1}}。",
      "answer": [
        "累计折旧和固定资产减值准备",
        "投资性房地产累计折旧和投资性房地产减值准备"
      ],
      "explanation": "成本模式转换遵循账面价值连续原则，不产生转换损益。",
      "tags": [
        "第五章",
        "投资性房地产",
        "转换",
        "成本模式",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-129",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "成本模式下，非投资性房地产转换为投资性房地产时，通常按照原资产的____进行转换。",
      "answer": "账面价值",
      "explanation": "口诀为“成本模式对着转，转为谁来倒挤谁”。",
      "tags": [
        "第五章",
        "投资性房地产",
        "转换",
        "成本模式"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-130",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "公允价值模式下，非投资性房地产转换为投资性房地产时，转换日公允价值大于账面价值的差额计入{{0}}；小于账面价值的差额计入{{1}}。",
      "answer": [
        "其他综合收益",
        "公允价值变动损益"
      ],
      "explanation": "该规则适用于固定资产、无形资产或存货转换为采用公允价值模式计量的投资性房地产。",
      "tags": [
        "第五章",
        "投资性房地产",
        "转换",
        "公允价值模式"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-131",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "公允价值模式下投资性房地产转为固定资产、无形资产或存货时，应按转换日{{0}}入账；差额计入{{1}}。",
      "answer": [
        "公允价值",
        "公允价值变动损益"
      ],
      "explanation": "转换后资产以转换日公允价值作为新的账面基础。",
      "tags": [
        "第五章",
        "投资性房地产",
        "转换",
        "公允价值模式"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-132",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "成本模式下出售投资性房地产，确认出售收入时：借：银行存款；贷：{{0}}、应交税费——应交增值税（销项税额）。",
      "answer": [
        "其他业务收入"
      ],
      "explanation": "投资性房地产租赁、出售相关收入通常通过其他业务收入核算。",
      "tags": [
        "第五章",
        "投资性房地产",
        "处置",
        "成本模式",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-133",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "成本模式下出售投资性房地产结转成本时：借：{{0}}、累计折旧（摊销）、减值准备；贷：{{1}}。",
      "answer": [
        "其他业务成本",
        "投资性房地产"
      ],
      "explanation": "出售时应结转投资性房地产账面价值。",
      "tags": [
        "第五章",
        "投资性房地产",
        "处置",
        "成本模式",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-134",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "公允价值模式下出售投资性房地产结转账面价值时：借：{{0}}；贷：投资性房地产——成本、{{1}}。",
      "answer": [
        "其他业务成本",
        "投资性房地产——公允价值变动"
      ],
      "explanation": "贷方“公允价值变动”也可能出现借方余额，应结合账面价值方向处理。",
      "tags": [
        "第五章",
        "投资性房地产",
        "处置",
        "公允价值模式",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-135",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "公允价值模式下出售投资性房地产时，应将累计公允价值变动损益转入{{0}}；转换形成的其他综合收益也应转入{{1}}。",
      "answer": [
        "其他业务成本",
        "其他业务成本"
      ],
      "explanation": "处置时需将与该投资性房地产相关的累计公允价值变动和其他综合收益一并结转。",
      "tags": [
        "第五章",
        "投资性房地产",
        "处置",
        "公允价值模式"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-136",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "一次交易实现同一控制下企业合并时，长期股权投资初始成本＝被合并方在最终控制方合并财务报表中的净资产{{0}}＋最终控制方收购被合并方形成的{{1}}。",
      "answer": [
        "账面价值份额",
        "商誉"
      ],
      "explanation": "同一控制下企业合并以账面价值为基础，而非以公允价值为基础。",
      "tags": [
        "第六章",
        "长期股权投资",
        "同一控制下企业合并",
        "初始计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-137",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "同一控制下企业合并中，以非现金资产作为合并对价的，通常____确认非现金资产处置损益。",
      "answer": "不",
      "explanation": "同一控制下企业合并体现权益性交易特征。",
      "tags": [
        "第六章",
        "长期股权投资",
        "同一控制下企业合并"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-138",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "同一控制下企业合并中，被合并方在合并日净资产账面价值为负数的，长期股权投资初始投资成本按____确定。",
      "answer": "零",
      "explanation": "同时应在备查簿中登记。",
      "tags": [
        "第六章",
        "长期股权投资",
        "同一控制下企业合并",
        "初始计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-139",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "同一控制下企业合并____产生新的商誉。",
      "answer": "不会",
      "explanation": "最终控制方并未发生变化，因此不会形成新的商誉。",
      "tags": [
        "第六章",
        "长期股权投资",
        "同一控制下企业合并",
        "商誉"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-140",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "无论同一控制还是非同一控制下企业合并，实际支付对价中包含的已宣告但尚未发放现金股利或利润，应作为____处理。",
      "answer": "应收股利",
      "explanation": "该部分不构成长期股权投资初始成本。",
      "tags": [
        "第六章",
        "长期股权投资",
        "企业合并",
        "初始计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-141",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "多次交易分步取得股权、最终形成同一控制下控股合并时，合并日长期股权投资初始成本以被合并方净资产的____为基础确定。",
      "answer": "账面价值份额",
      "explanation": "还应加上最终控制方收购被合并方形成的商誉。",
      "tags": [
        "第六章",
        "长期股权投资",
        "同一控制下企业合并",
        "分步取得"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-142",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：同一控制下分步取得控股合并时，初始投资成本与支付对价账面价值差额的处理顺序。",
      "answer": "初始投资成本与原长期股权投资账面价值加上合并日新支付对价账面价值之和的差额，先调整资本公积中的资本溢价或股本溢价；资本公积不足冲减的，依次冲减盈余公积和利润分配——未分配利润。",
      "explanation": "差额不计入当期损益。",
      "tags": [
        "第六章",
        "长期股权投资",
        "同一控制下企业合并",
        "分步取得"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-143",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "一次交易实现非同一控制下企业合并时，商誉＝合并成本－被购买方可辨认净资产____×投资方持股比例。",
      "answer": "公允价值",
      "explanation": "非同一控制下企业合并以购买日公允价值为计量基础。",
      "tags": [
        "第六章",
        "长期股权投资",
        "非同一控制下企业合并",
        "商誉"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-144",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "非同一控制下企业合并以非货币性资产支付对价的，换出资产公允价值与账面价值的差额通常计入____。",
      "answer": "资产处置损益",
      "explanation": "存货作为合并对价时，还应按销售处理确认收入并结转成本。",
      "tags": [
        "第六章",
        "长期股权投资",
        "非同一控制下企业合并",
        "合并对价"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-145",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "企业合并过程中发生的律师费、审计费、评估费等中介费用：借：{{0}}；贷：{{1}}。",
      "answer": [
        "管理费用",
        "银行存款"
      ],
      "explanation": "该类中介费用通常不计入长期股权投资初始成本。",
      "tags": [
        "第六章",
        "长期股权投资",
        "企业合并",
        "中介费用",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-146",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "对被投资单位具有{{0}}的投资采用成本法；具有共同控制或{{1}}的投资采用权益法。",
      "answer": [
        "控制",
        "重大影响"
      ],
      "explanation": "控制对应子公司；共同控制对应合营企业；重大影响对应联营企业。",
      "tags": [
        "第六章",
        "长期股权投资",
        "后续计量方法"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-147",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以非企业合并方式取得长期股权投资时：借：长期股权投资——投资成本、{{0}}；贷：{{1}}。",
      "answer": [
        "应收股利",
        "银行存款等"
      ],
      "explanation": "应收股利为价款中包含的、被投资单位已宣告但尚未发放的现金股利。",
      "tags": [
        "第六章",
        "长期股权投资",
        "初始计量",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-148",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "权益法下，初始投资成本大于应享有被投资单位可辨认净资产公允价值份额的，____调整长期股权投资初始投资成本。",
      "answer": "不",
      "explanation": "该差额通常体现为投资成本中包含的商誉。",
      "tags": [
        "第六章",
        "长期股权投资",
        "权益法",
        "初始计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-149",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益法下，初始投资成本小于应享有被投资单位可辨认净资产公允价值份额的，应调增长期股权投资投资成本，并贷记{{0}}。",
      "answer": [
        "营业外收入"
      ],
      "explanation": "该调整在取得投资当期确认。",
      "tags": [
        "第六章",
        "长期股权投资",
        "权益法",
        "初始计量",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-150",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益法下，被投资单位实现净利润时：借：长期股权投资——损益调整；贷：{{0}}。发生净亏损时作{{1}}分录。",
      "answer": [
        "投资收益",
        "相反"
      ],
      "explanation": "金额通常按投资方应享有的份额确定，并需考虑净利润调整事项。",
      "tags": [
        "第六章",
        "长期股权投资",
        "权益法",
        "损益调整",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-151",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益法下，被投资单位宣告分配现金股利或利润时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "应收股利",
        "长期股权投资——损益调整"
      ],
      "explanation": "权益法下收到股利是投资账面价值的收回，而非再次确认投资收益。",
      "tags": [
        "第六章",
        "长期股权投资",
        "权益法",
        "现金股利",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-152",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "被投资单位宣告发放____股利时，投资方通常无需进行账务处理。",
      "answer": "股票",
      "explanation": "现金股利在权益法下需确认应收股利并调整长期股权投资；股票股利不作处理。",
      "tags": [
        "第六章",
        "长期股权投资",
        "现金股利",
        "股票股利"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-153",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益法下，被投资单位其他综合收益变动时：借：长期股权投资——{{0}}；贷：{{1}}。",
      "answer": [
        "其他综合收益",
        "其他综合收益"
      ],
      "explanation": "按投资方应享有的份额确认；减少时作相反分录。",
      "tags": [
        "第六章",
        "长期股权投资",
        "权益法",
        "其他综合收益",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-154",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益法下，被投资单位除净损益、其他综合收益和利润分配外的其他所有者权益变动时：借：长期股权投资——{{0}}；贷：资本公积——{{1}}。",
      "answer": [
        "其他权益变动",
        "其他资本公积"
      ],
      "explanation": "按应享有的份额调整；减少时作相反分录。",
      "tags": [
        "第六章",
        "长期股权投资",
        "权益法",
        "其他权益变动",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-155",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "长期股权投资发生减值时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "资产减值损失",
        "长期股权投资减值准备"
      ],
      "explanation": "长期股权投资减值准备一经计提，不得转回。",
      "tags": [
        "第六章",
        "长期股权投资",
        "减值",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-156",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "长期股权投资减值准备在提取后，____转回。",
      "answer": "不允许",
      "explanation": "与可转回的存货跌价准备相区别。",
      "tags": [
        "第六章",
        "长期股权投资",
        "减值"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-157",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "成本法下，被投资单位宣告分配现金股利时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "应收股利",
        "投资收益"
      ],
      "explanation": "成本法下，宣告分配的现金股利通常确认投资收益。",
      "tags": [
        "第六章",
        "长期股权投资",
        "成本法",
        "现金股利",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-158",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "全部处置长期股权投资时：借：银行存款、长期股权投资减值准备；贷：{{0}}、{{1}}。",
      "answer": [
        "长期股权投资",
        "投资收益"
      ],
      "explanation": "投资收益为倒挤差额，也可能位于借方。",
      "tags": [
        "第六章",
        "长期股权投资",
        "处置",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-159",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "成本法下部分处置长期股权投资但未丧失控制权的，应按处置比例结转长期股权投资的____。",
      "answer": "账面价值",
      "explanation": "处置差额计入投资收益。",
      "tags": [
        "第六章",
        "长期股权投资",
        "成本法",
        "处置"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-160",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益法核算的长期股权投资转为金融资产时：借：银行存款及新增金融资产；贷：{{0}}、{{1}}。",
      "answer": [
        "长期股权投资",
        "投资收益"
      ],
      "explanation": "长期股权投资的投资成本、损益调整、其他综合收益和其他权益变动等明细应反向转出。",
      "tags": [
        "第六章",
        "长期股权投资",
        "转换",
        "权益法",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-161",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "权益法核算形成的其他综合收益和资本公积，在转换或处置时应根据题目判断转入投资收益或____。",
      "answer": "留存收益",
      "explanation": "不同交易背景下结转去向不同，应结合题干判断。",
      "tags": [
        "第六章",
        "长期股权投资",
        "转换",
        "权益法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-162",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "由金融资产转为权益法核算的长期股权投资时，原交易性金融资产应按其____计入长期股权投资初始成本。",
      "answer": "公允价值",
      "explanation": "新支付对价也按其公允价值计入初始成本。",
      "tags": [
        "第六章",
        "长期股权投资",
        "转换",
        "权益法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-163",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "由成本法转为权益法核算、且不属于同一控制下企业合并的，原持有长期股权投资通常按其____价值加上新投资公允价值确定入账价值。",
      "answer": "账面",
      "explanation": "原投资明细反向转出后，原账面价值与新支付对价共同形成转换后的入账价值。",
      "tags": [
        "第六章",
        "长期股权投资",
        "转换",
        "成本法转权益法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-164",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：权益法下计算应享有被投资单位净利润份额时，常见的两类调整事项。",
      "answer": "应对投资时点被投资单位可辨认资产、负债公允价值与账面价值的差异进行调整，并对未实现内部交易损益进行抵销；存货、固定资产等不同资产的调整期间和计算方式应结合其出售、折旧或摊销情况确定。",
      "explanation": "表格题常围绕评估增值和未实现内部交易损益考查净利润调整。",
      "tags": [
        "第六章",
        "长期股权投资",
        "权益法",
        "损益调整"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-165",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资产的可收回金额，应在资产的公允价值减去处置费用后的净额与预计未来现金流量{{0}}之间取{{1}}。",
      "answer": [
        "现值",
        "较高者"
      ],
      "explanation": "两者之一只要高于账面价值，即无需确认减值。",
      "tags": [
        "第七章",
        "资产减值",
        "可收回金额"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-166",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资产的可收回金额{{0}}其账面价值时，应确认减值；减值损失＝账面价值－{{1}}。",
      "answer": [
        "低于",
        "可收回金额"
      ],
      "explanation": "减值测试的核心是账面价值与可收回金额的比较。",
      "tags": [
        "第七章",
        "资产减值",
        "减值确认"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-167",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：计算资产公允价值减去处置费用后净额时，处置费用包括和不包括哪些项目。",
      "answer": "处置费用包括与资产处置有关的法律费用、相关税费、搬运费以及为使资产达到可销售状态所发生的直接费用等；不包括财务费用和所得税费用。",
      "explanation": "处置费用必须与资产处置直接相关。",
      "tags": [
        "第七章",
        "资产减值",
        "可收回金额",
        "处置费用"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-168",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：预计未来现金流量现值计算中不应考虑的现金流量。",
      "answer": "不应考虑将来可能发生但尚未作出承诺的重组事项、资产改良有关的预计未来现金流量、筹资活动有关的现金流量，以及与所得税收付有关的现金流量。",
      "explanation": "预计未来现金流量应基于资产当前状况和管理层已批准的预算或预测。",
      "tags": [
        "第七章",
        "资产减值",
        "可收回金额",
        "未来现金流量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-169",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：无论是否存在减值迹象，至少应于每年年末进行减值测试的资产。",
      "answer": "因企业合并形成的商誉、使用寿命不确定的无形资产，以及尚未达到可使用状态的无形资产。",
      "explanation": "其他资产通常在存在减值迹象时才需要进行减值测试。",
      "tags": [
        "第七章",
        "资产减值",
        "减值测试"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-170",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "资产组认定的主要依据是其产生的现金流入是否____于其他资产或资产组产生的现金流入。",
      "answer": "独立",
      "explanation": "资产组是企业可以认定的最小资产组合。",
      "tags": [
        "第七章",
        "资产减值",
        "资产组"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-171",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "认定资产组时，除现金流入独立性外，还应考虑管理层对生产经营活动的{{0}}方式，以及对资产持续使用或处置的{{1}}方式。",
      "answer": [
        "管理或监控",
        "决策"
      ],
      "explanation": "资产组一经确定，在各会计期间应保持一致，不得随意变更。",
      "tags": [
        "第七章",
        "资产减值",
        "资产组"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-172",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资产组发生减值且含有商誉时，应先抵减{{0}}，抵减额以其账面价值减至{{1}}为限。",
      "answer": [
        "商誉",
        "零"
      ],
      "explanation": "剩余减值损失再按比例分摊至资产组内其他资产。",
      "tags": [
        "第七章",
        "资产减值",
        "资产组",
        "商誉"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-173",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：资产组减值损失分摊至各项资产时的账面价值下限。",
      "answer": "各项资产分摊减值损失后，其账面价值不得低于以下三者中的最高者：该资产的公允价值减去处置费用后的净额、该资产预计未来现金流量的现值和零。",
      "explanation": "受限后未能分摊的减值损失，应在其他资产之间按比例继续分摊。",
      "tags": [
        "第七章",
        "资产减值",
        "资产组",
        "减值分摊"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-174",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "固定资产、无形资产、成本模式投资性房地产、商誉、使用权资产和长期股权投资发生减值时：借：资产减值损失；贷：{{0}}。",
      "answer": [
        "相关资产减值准备"
      ],
      "explanation": "此类资产适用资产减值准则，减值损失确认后不得转回。",
      "tags": [
        "第七章",
        "资产减值",
        "减值分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-175",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存货发生减值时贷记{{0}}；合同资产发生减值时贷记{{1}}。",
      "answer": [
        "存货跌价准备",
        "合同资产减值准备"
      ],
      "explanation": "两者减值损失均通常借记“资产减值损失”。",
      "tags": [
        "第七章",
        "资产减值",
        "减值分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-176",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "应收款项、债权投资发生减值时，借记{{0}}；分别贷记坏账准备或债权投资{{1}}。",
      "answer": [
        "信用减值损失",
        "减值准备"
      ],
      "explanation": "金融资产减值通常通过“信用减值损失”核算。",
      "tags": [
        "第七章",
        "资产减值",
        "金融资产减值",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-177",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "其他债权投资计提减值时：借：信用减值损失；贷：{{0}}，且其账面价值{{1}}受到影响。",
      "answer": [
        "其他综合收益",
        "不"
      ],
      "explanation": "其他债权投资的减值准备不直接冲减其账面价值。",
      "tags": [
        "第七章",
        "资产减值",
        "其他债权投资",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-178",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "{{0}}和{{1}}通常不单独考虑减值。",
      "answer": [
        "交易性金融资产",
        "其他权益工具投资"
      ],
      "explanation": "其公允价值变动已反映价值变化；公允价值模式计量的投资性房地产也不单独考虑减值。",
      "tags": [
        "第七章",
        "资产减值",
        "金融资产"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-179",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "持有待售的非流动资产或处置组发生减值时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "资产减值损失",
        "持有待售资产减值准备"
      ],
      "explanation": "持有待售资产减值准备属于其专用抵减科目。",
      "tags": [
        "第七章",
        "资产减值",
        "持有待售资产",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-180",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "递延所得税资产发生减值时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "所得税费用",
        "递延所得税资产"
      ],
      "explanation": "递延所得税资产的减值处理不同于一般资产减值准备。",
      "tags": [
        "第七章",
        "资产减值",
        "递延所得税资产",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-181",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权投资以摊余成本计量，需同时满足：业务模式以{{0}}为目标，且合同现金流量仅为{{1}}及以未偿付本金金额为基础的利息支付。",
      "answer": [
        "收取合同现金流量",
        "本金"
      ],
      "explanation": "两项条件通常称为业务模式测试与合同现金流量特征测试。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产分类",
        "债权投资"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-182",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "其他债权投资以公允价值计量且其变动计入其他综合收益，需以{{0}}和{{1}}为目标，并满足本金和利息现金流量特征。",
      "answer": [
        "收取合同现金流量",
        "出售金融资产"
      ],
      "explanation": "该类别适用于同时收取现金流量和出售金融资产的债务工具。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产分类",
        "其他债权投资"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-183",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "非交易性权益工具投资可在初始确认时不可撤销地指定为以公允价值计量且其变动计入____。",
      "answer": "其他综合收益",
      "explanation": "对应科目为“其他权益工具投资”。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产分类",
        "其他权益工具投资"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-184",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "不符合以摊余成本计量或以公允价值计量且其变动计入其他综合收益条件的金融资产，通常分类为____。",
      "answer": "交易性金融资产",
      "explanation": "交易性金融资产以公允价值计量且其变动计入当期损益。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产分类",
        "交易性金融资产"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-185",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权投资初始确认时，分期付息债券已到付息期但尚未领取的利息计入{{0}}；到期一次还本付息债券的利息计入{{1}}。",
      "answer": [
        "应收利息",
        "债权投资——应计利息"
      ],
      "explanation": "两类债券已计提但未收取利息的科目不同。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "债权投资",
        "初始计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-186",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权投资后续计量确认利息收入时，投资收益＝期初摊余成本×{{0}}；应计利息＝面值×{{1}}。",
      "answer": [
        "实际利率",
        "票面利率"
      ],
      "explanation": "两者差额调整债权投资的利息调整明细。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "债权投资",
        "实际利率法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-187",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权投资收到利息时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "银行存款",
        "债权投资——应计利息"
      ],
      "explanation": "分期付息债券若已确认应收利息，应按相应明细结转。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "债权投资",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-188",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权投资计提减值准备时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "信用减值损失",
        "债权投资减值准备"
      ],
      "explanation": "债权投资适用预期信用损失模型。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "债权投资",
        "减值",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-189",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权投资到期收到本金和最后一期利息时：借：银行存款；贷：债权投资——{{0}}、{{1}}。",
      "answer": [
        "成本",
        "应计利息"
      ],
      "explanation": "到期时终止确认债权投资相关账面余额。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "债权投资",
        "到期",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-190",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "出售债权投资时，除转出债权投资各明细外，已计提的{{0}}应一并转出，差额计入{{1}}。",
      "answer": [
        "债权投资减值准备",
        "投资收益"
      ],
      "explanation": "出售差额可能为投资收益，也可能为投资损失。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "债权投资",
        "处置"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-191",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "期末债权投资摊余成本＝期初摊余成本×（1＋实际利率）－面值×票面利率－____。",
      "answer": "计提的减值准备",
      "explanation": "该公式体现实际利率计息与信用减值损失的共同影响。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "债权投资",
        "摊余成本"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-192",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "其他债权投资的取得成本按公允价值加上____确定。",
      "answer": "相关交易费用",
      "explanation": "与交易性金融资产不同，其他债权投资的交易费用计入初始入账金额。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他债权投资",
        "初始计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-193",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "其他债权投资确认利息收入时，仍按____法计算投资收益。",
      "answer": "实际利率",
      "explanation": "其他债权投资的利息收入计算逻辑与债权投资相同。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他债权投资",
        "实际利率法"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-194",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "其他债权投资期末公允价值上升时：借：其他债权投资——公允价值变动；贷：{{0}}。公允价值下降时作{{1}}分录。",
      "answer": [
        "其他综合收益",
        "相反"
      ],
      "explanation": "应先完成利息收入计算，再与期末公允价值比较。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他债权投资",
        "公允价值变动"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-195",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "其他债权投资计提减值时：借：信用减值损失；贷：{{0}}，且减值不影响其{{1}}。",
      "answer": [
        "其他综合收益",
        "账面价值"
      ],
      "explanation": "其他债权投资的减值准备通过其他综合收益核算。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他债权投资",
        "减值"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-196",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "出售其他债权投资时，应将原计入其他综合收益的累计金额转入{{0}}。",
      "answer": [
        "投资收益"
      ],
      "explanation": "其他债权投资处置时，其他综合收益需重分类转入当期损益。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他债权投资",
        "处置"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-197",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "其他权益工具投资____计提减值准备。",
      "answer": "无需",
      "explanation": "其公允价值变动已计入其他综合收益。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他权益工具投资",
        "减值"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-198",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "取得其他权益工具投资时，已宣告但尚未发放的现金股利计入{{0}}；相关交易费用{{1}}初始成本。",
      "answer": [
        "应收股利",
        "计入"
      ],
      "explanation": "其他权益工具投资初始成本按公允价值加相关交易费用确定。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他权益工具投资",
        "初始计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-199",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "持有其他权益工具投资期间，被投资单位宣告发放现金股利时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "应收股利",
        "投资收益"
      ],
      "explanation": "在通常情形下，符合条件的现金股利计入投资收益。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他权益工具投资",
        "现金股利",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-200",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "其他权益工具投资期末公允价值上升时：借：其他权益工具投资——公允价值变动；贷：{{0}}。",
      "answer": [
        "其他综合收益"
      ],
      "explanation": "公允价值下降时作相反分录。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他权益工具投资",
        "公允价值变动"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-201",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "处置其他权益工具投资时，原计入其他综合收益的累计利得或损失应转入____，不转入当期损益。",
      "answer": "留存收益",
      "explanation": "通常按盈余公积和利润分配——未分配利润进行结转。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "其他权益工具投资",
        "处置"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-202",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "交易性金融资产取得时，相关交易费用计入{{0}}；已宣告但尚未发放的现金股利或已到付息期未领取利息计入{{1}}。",
      "answer": [
        "投资收益",
        "应收股利或应收利息"
      ],
      "explanation": "交易性金融资产初始成本按公允价值确定，不包含交易费用与已宣告股利或已到期利息。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "交易性金融资产",
        "初始计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-203",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "持有交易性金融资产期间，确认现金股利或利息时：借：应收股利或交易性金融资产——应计利息；贷：{{0}}。",
      "answer": [
        "投资收益"
      ],
      "explanation": "收到股利或利息时再将应收项目转为银行存款。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "交易性金融资产",
        "持有期间"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-204",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "交易性金融资产期末公允价值上升时：借：交易性金融资产——公允价值变动；贷：{{0}}。",
      "answer": [
        "公允价值变动损益"
      ],
      "explanation": "下降时作相反分录，变动直接影响当期损益。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "交易性金融资产",
        "公允价值变动"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-205",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "出售交易性金融资产时，转出成本和公允价值变动后的差额计入{{0}}。",
      "answer": [
        "投资收益"
      ],
      "explanation": "出售时实际收到价款与账面价值的差额通过投资收益核算。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "交易性金融资产",
        "处置"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-206",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "交易性金融负债初始确认时，发行交易费用计入{{0}}；交易性金融负债按{{1}}确认。",
      "answer": [
        "投资收益",
        "公允价值"
      ],
      "explanation": "发行收入扣除交易费用后计入银行存款。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "交易性金融负债",
        "初始计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-207",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "交易性金融负债期末公允价值上升时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "公允价值变动损益",
        "交易性金融负债"
      ],
      "explanation": "负债公允价值上升会增加当期损失；下降时作相反分录。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "交易性金融负债",
        "公允价值变动",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-208",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "交易性金融负债计提利息时：借：{{0}}；贷：交易性金融负债——应计利息。",
      "answer": [
        "财务费用"
      ],
      "explanation": "利息通常按债券面值乘票面利率计算。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "交易性金融负债",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-209",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以摊余成本计量的应付债券初始确认时：借：{{0}}；贷：应付债券——面值、{{1}}。",
      "answer": [
        "银行存款",
        "利息调整"
      ],
      "explanation": "实际收款金额与面值的差额计入利息调整。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "应付债券",
        "初始计量",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-210",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以摊余成本计量的应付债券按实际利率计提利息时，利息费用＝期初摊余成本×{{0}}；贷记应付债券——{{1}}。",
      "answer": [
        "实际利率",
        "应计利息"
      ],
      "explanation": "票面利率计息额与实际利息费用的差额调整“利息调整”。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "应付债券",
        "实际利率法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-211",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "金融资产只有在企业改变管理金融资产的{{0}}时才应重分类；重分类自{{1}}起采用未来适用法。",
      "answer": [
        "业务模式",
        "重分类日"
      ],
      "explanation": "重分类不得追溯调整此前已确认的利得、损失、减值或利息。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产重分类"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-212",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：不属于金融资产管理业务模式变更的情形。",
      "answer": "企业持有特定金融资产的意图改变；金融资产特定市场暂时性消失从而暂时影响金融资产出售；金融资产在企业具有不同业务模式的各部门之间转移，均不属于业务模式变更。",
      "explanation": "不属于业务模式变更时不得进行金融资产重分类。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产重分类"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-213",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权投资重分类为交易性金融资产时，交易性金融资产按重分类日{{0}}计量；原债权投资减值准备一并{{1}}。",
      "answer": [
        "公允价值",
        "转出"
      ],
      "explanation": "差额计入公允价值变动损益。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产重分类",
        "债权投资"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-214",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "交易性金融资产重分类为债权投资时，债权投资按重分类日{{0}}计量；如存在信用损失，应{{1}}减值准备。",
      "answer": [
        "公允价值",
        "补提"
      ],
      "explanation": "补提减值时借记信用减值损失，贷记债权投资减值准备。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产重分类",
        "债权投资"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-215",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "其他债权投资重分类为交易性金融资产时，应将原计入{{0}}的累计金额转入{{1}}。",
      "answer": [
        "其他综合收益",
        "公允价值变动损益"
      ],
      "explanation": "其他债权投资重分类时需同时处理原累计其他综合收益。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融资产重分类",
        "其他债权投资"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-216",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "金融负债的分类一经确定，通常____变更；金融负债不得重分类为其他金融负债。",
      "answer": "不得",
      "explanation": "金融负债在满足条件时可重新分类为权益工具。",
      "tags": [
        "第八章",
        "金融资产和金融负债",
        "金融负债分类"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-217",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：职工薪酬的四类构成。",
      "answer": "职工薪酬包括短期薪酬、离职后福利、辞退福利和其他长期职工福利。",
      "explanation": "分类是后续确认、计量和列报的基础。",
      "tags": [
        "第九章",
        "职工薪酬",
        "分类"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-218",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业提供给职工配偶、子女、受赡养人、已故员工遗属及其他受益人的福利，也属于____。",
      "answer": "职工薪酬",
      "explanation": "职工薪酬的受益对象不限于在职职工本人。",
      "tags": [
        "第九章",
        "职工薪酬",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-219",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "基本养老保险和失业保险不属于{{0}}，而属于{{1}}。",
      "answer": [
        "短期薪酬",
        "离职后福利"
      ],
      "explanation": "注意与短期社会保险费相区别。",
      "tags": [
        "第九章",
        "职工薪酬",
        "离职后福利"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-220",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "职工报销的差旅费{{0}}职工薪酬；企业为职工代垫的款项{{1}}职工薪酬。",
      "answer": [
        "不属于",
        "不属于"
      ],
      "explanation": "两者均不构成企业因获得职工服务而承担的薪酬。",
      "tags": [
        "第九章",
        "职工薪酬",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-221",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "货币性短期薪酬的确认和计量总体原则是根据____进行分配。",
      "answer": "受益对象",
      "explanation": "薪酬费用或成本应归属于接受职工服务的对象。",
      "tags": [
        "第九章",
        "职工薪酬",
        "短期薪酬",
        "确认计量"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-222",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "生产车间工人薪酬计入{{0}}；生产车间管理人员薪酬计入{{1}}。",
      "answer": [
        "生产成本",
        "制造费用"
      ],
      "explanation": "两者均属于生产环节，但直接归属对象不同。",
      "tags": [
        "第九章",
        "职工薪酬",
        "短期薪酬",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-223",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "行政部门人员薪酬计入{{0}}；销售部门人员薪酬计入{{1}}。",
      "answer": [
        "管理费用",
        "销售费用"
      ],
      "explanation": "按受益部门归集薪酬费用。",
      "tags": [
        "第九章",
        "职工薪酬",
        "短期薪酬",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-224",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "从事研发活动人员的薪酬计入{{0}}；从事工程建设人员的薪酬计入{{1}}。",
      "answer": [
        "研发支出",
        "在建工程"
      ],
      "explanation": "两类薪酬均可能构成相关资产或研发项目成本。",
      "tags": [
        "第九章",
        "职工薪酬",
        "短期薪酬",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-225",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "自产产品作为非货币性福利发放给职工时，应视同{{0}}处理；外购产品作为福利发放时通常{{1}}视同销售。",
      "answer": [
        "销售",
        "不"
      ],
      "explanation": "自产产品需确认主营业务收入并结转主营业务成本；外购产品按成本结转。",
      "tags": [
        "第九章",
        "职工薪酬",
        "非货币性福利",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-226",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "购入商品用于职工福利、且购入时即确定用途的，应按{{0}}计入资产成本；实际发放时{{1}}再作进项税额转出。",
      "answer": [
        "价税合计金额",
        "无需"
      ],
      "explanation": "若购入时未确定福利用途，则实际发放时需考虑进项税额转出。",
      "tags": [
        "第九章",
        "职工薪酬",
        "非货币性福利",
        "增值税"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-227",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "累积带薪缺勤是指带薪权利可以{{0}}下期；企业以累积未行使权利增加的{{1}}计量相关职工薪酬。",
      "answer": [
        "结转",
        "预期支付金额"
      ],
      "explanation": "在职工提供服务从而增加未来带薪缺勤权利时确认。",
      "tags": [
        "第九章",
        "职工薪酬",
        "带薪缺勤",
        "累积带薪缺勤"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-228",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "非累积带薪缺勤的权利不能结转下期，企业应在职工{{0}}的会计期间确认相关职工薪酬。",
      "answer": [
        "实际发生缺勤"
      ],
      "explanation": "未使用的非累积带薪缺勤权利通常取消，职工离开企业时也无权获得现金支付。",
      "tags": [
        "第九章",
        "职工薪酬",
        "带薪缺勤",
        "非累积带薪缺勤"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-229",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "辞退福利应在企业不能单方面撤回辞退计划或确认相关重组成本、费用的时点中，按{{0}}者确认。",
      "answer": [
        "孰早"
      ],
      "explanation": "口诀为“谁早按谁来”。",
      "tags": [
        "第九章",
        "职工薪酬",
        "辞退福利",
        "确认时点"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-230",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "确认辞退福利时，无须按受益对象分配，直接：借：{{0}}；贷：{{1}}。",
      "answer": [
        "管理费用",
        "应付职工薪酬"
      ],
      "explanation": "辞退福利直接计入管理费用。",
      "tags": [
        "第九章",
        "职工薪酬",
        "辞退福利",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-231",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "内退职工在正式退休前停止提供服务期间的工资和社会保险费，比照{{0}}处理；正式退休后按{{1}}处理。",
      "answer": [
        "辞退福利",
        "离职后福利"
      ],
      "explanation": "正式退休前应一次性计入当期损益，不能在内退后分期确认。",
      "tags": [
        "第九章",
        "职工薪酬",
        "辞退福利",
        "内部退休"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-232",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "设定受益计划的{{0}}和{{1}}均由企业负担。",
      "answer": [
        "精算风险",
        "投资风险"
      ],
      "explanation": "这是设定受益计划区别于设定提存计划的核心特征。",
      "tags": [
        "第九章",
        "职工薪酬",
        "离职后福利",
        "设定受益计划"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-233",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：股份支付的定义。",
      "answer": "股份支付是指企业为获取职工和其他方提供服务而授予权益工具，或者承担以权益工具为基础确定的负债的交易。",
      "explanation": "判断核心是以获取服务为目的，且对价或定价与企业自身权益工具未来价值密切相关。",
      "tags": [
        "第十章",
        "股份支付",
        "定义"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-234",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以权益结算的股份支付以交付{{0}}为结算方式；以现金结算的股份支付以交付{{1}}为结算方式。",
      "answer": [
        "股份或其他权益工具",
        "现金或其他资产"
      ],
      "explanation": "限制性股票、股票期权属于权益结算；现金股票增值权、模拟股票属于现金结算。",
      "tags": [
        "第十章",
        "股份支付",
        "分类"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-235",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益结算的股份支付按{{0}}权益工具的公允价值计量，后续{{1}}公允价值变动。",
      "answer": [
        "授予日",
        "不关注"
      ],
      "explanation": "权益结算股份支付后续不因权益工具公允价值变动重新计量。",
      "tags": [
        "第十章",
        "股份支付",
        "权益结算",
        "计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-236",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "现金结算的股份支付应按每个{{0}}权益工具的公允价值重新计量。",
      "answer": [
        "资产负债表日"
      ],
      "explanation": "现金结算股份支付形成负债，需持续按公允价值重新计量。",
      "tags": [
        "第十章",
        "股份支付",
        "现金结算",
        "计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-237",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "立即可行权的权益结算股份支付在授予日：借：管理费用等；贷：{{0}}。",
      "answer": [
        "资本公积——股本溢价"
      ],
      "explanation": "金额按授予日权益工具公允价值确定。",
      "tags": [
        "第十章",
        "股份支付",
        "权益结算",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-238",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "有等待期的权益结算股份支付，在等待期每个资产负债表日：借：管理费用等；贷：{{0}}。",
      "answer": [
        "资本公积——其他资本公积"
      ],
      "explanation": "累计确认额以授予日公允价值、预计行权最佳估计数和时间权重为基础确定。",
      "tags": [
        "第十章",
        "股份支付",
        "权益结算",
        "等待期",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-239",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "有等待期的现金结算股份支付，在等待期每个资产负债表日：借：管理费用等；贷：{{0}}。",
      "answer": [
        "应付职工薪酬"
      ],
      "explanation": "确认额按资产负债表日负债公允价值、预计行权数和时间权重确定。",
      "tags": [
        "第十章",
        "股份支付",
        "现金结算",
        "等待期",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-240",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "权益结算股份支付行权时：借：银行存款、资本公积——其他资本公积；贷：{{0}}、{{1}}。",
      "answer": [
        "股本",
        "资本公积——股本溢价"
      ],
      "explanation": "股本按面值确认，差额计入资本公积——股本溢价。",
      "tags": [
        "第十章",
        "股份支付",
        "权益结算",
        "行权",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-241",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "现金结算股份支付在可行权日后不再确认成本费用，负债公允价值变动计入{{0}}。",
      "answer": [
        "公允价值变动损益"
      ],
      "explanation": "负债公允价值上升时借记公允价值变动损益，贷记应付职工薪酬；下降时作相反分录。",
      "tags": [
        "第十章",
        "股份支付",
        "现金结算",
        "可行权日后"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-242",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "股份支付可行权条件修改中，有利修改按{{0}}处理；不利修改{{1}}。",
      "answer": [
        "修改后的情形",
        "视而不见"
      ],
      "explanation": "取消或提前结算作为加速可行权处理，立即确认剩余未确认部分。",
      "tags": [
        "第十章",
        "股份支付",
        "修改",
        "取消"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-243",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：借款费用的主要构成。",
      "answer": "借款费用包括借款利息、折价或者溢价的摊销、辅助费用以及因外币借款而发生的汇兑差额等。",
      "explanation": "权益性融资费用不属于借款费用，例如股票发行费用。",
      "tags": [
        "第十一章",
        "借款费用",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-244",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业发生的权益性融资费用，如股票发行费用，____包括在借款费用中。",
      "answer": "不应",
      "explanation": "股票发行费用按权益工具发行相关规定处理。",
      "tags": [
        "第十一章",
        "借款费用",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-245",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：借款费用开始资本化必须同时满足的三个条件。",
      "answer": "资产支出已经发生；借款费用已经发生；为使资产达到预定可使用或者可销售状态所必要的购建或者生产活动已经开始。",
      "explanation": "三个条件必须同时满足，资本化才开始。",
      "tags": [
        "第十一章",
        "借款费用",
        "资本化开始"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-246",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "借款费用暂停资本化需同时满足：资产购建或生产发生{{0}}中断，且中断时间连续超过{{1}}个月。",
      "answer": [
        "非正常",
        "3"
      ],
      "explanation": "正常中断期间的借款费用仍可资本化。",
      "tags": [
        "第十一章",
        "借款费用",
        "资本化暂停"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-247",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "符合资本化条件的资产达到预定可使用或者可销售状态时，应当____借款费用资本化。",
      "answer": "停止",
      "explanation": "达到预定状态是资本化停止的时点。",
      "tags": [
        "第十一章",
        "借款费用",
        "资本化停止"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-248",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "专门借款资本化金额＝资本化期间总利息－闲置资金的____。",
      "answer": "投资收益",
      "explanation": "闲置专门借款用于短期投资取得的收益应冲减资本化金额。",
      "tags": [
        "第十一章",
        "借款费用",
        "专门借款",
        "资本化金额"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-249",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "专门借款在资本化期间，确认资本化利息时：借：{{0}}、应收利息或银行存款；贷：{{1}}。",
      "answer": [
        "在建工程",
        "长期借款——应计利息"
      ],
      "explanation": "闲置资金投资收益通过应收利息或银行存款冲减资本化金额。",
      "tags": [
        "第十一章",
        "借款费用",
        "专门借款",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-250",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "专门借款在暂停资本化期间，相关利息费用通常：借：{{0}}；贷：长期借款——应计利息。",
      "answer": [
        "财务费用"
      ],
      "explanation": "暂停资本化期间的利息扣除闲置资金投资收益后费用化。",
      "tags": [
        "第十一章",
        "借款费用",
        "专门借款",
        "暂停资本化",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-251",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "一般借款资本化金额＝超过专门借款部分的累计资产支出加权平均数×所占用一般借款的{{0}}。",
      "answer": [
        "资本化率"
      ],
      "explanation": "一般借款遵循“先专门、后一般”的占用原则。",
      "tags": [
        "第十一章",
        "借款费用",
        "一般借款",
        "资本化金额"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-252",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "一般借款资本化率＝一般借款利息之和÷一般借款____之和。",
      "answer": "本金",
      "explanation": "只有一笔一般借款时，资本化率即为该借款利率。",
      "tags": [
        "第十一章",
        "借款费用",
        "一般借款",
        "资本化率"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-253",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "计算一般借款累计资产支出加权平均数时，每笔支出占用时间计算至{{0}}和{{1}}孰早的日期。",
      "answer": [
        "到期日",
        "完工日"
      ],
      "explanation": "资产支出在当期占用天数不得超过该笔支出的实际占用期间。",
      "tags": [
        "第十一章",
        "借款费用",
        "一般借款",
        "计算"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-254",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "每一会计期间的利息资本化金额，不应超过当期相关借款实际发生的____金额。",
      "answer": "利息",
      "explanation": "资本化金额存在实际利息金额上限。",
      "tags": [
        "第十一章",
        "借款费用",
        "资本化金额"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-255",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资本化期间内，外币{{0}}借款本金及利息的汇兑差额应资本化；其他外币借款的该类汇兑差额计入{{1}}。",
      "answer": [
        "专门",
        "财务费用"
      ],
      "explanation": "外币专门借款汇兑差额可构成符合资本化条件资产的成本。",
      "tags": [
        "第十一章",
        "借款费用",
        "外币借款",
        "汇兑差额"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-256",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：常见的或有事项。",
      "answer": "常见的或有事项包括未决诉讼或未决仲裁、债务担保、产品质量保证、亏损合同、重组义务、承诺和环境污染整治等。",
      "explanation": "确认和计量时应按预计负债确认条件进行判断。",
      "tags": [
        "第十二章",
        "或有事项",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-257",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：或有事项确认为预计负债必须同时满足的三个条件。",
      "answer": "该义务是企业承担的现时义务；履行该义务很可能导致经济利益流出企业；该义务的金额能够可靠地计量。",
      "explanation": "三个条件缺少任一项，均不得确认预计负债。",
      "tags": [
        "第十二章",
        "或有事项",
        "预计负债",
        "确认条件"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-258",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "发生可能性大于50%且小于等于95%为{{0}}；大于5%且小于等于50%为{{1}}。",
      "answer": [
        "很可能",
        "可能"
      ],
      "explanation": "基本确定为大于95%且小于100%；极小可能为大于0且小于等于5%。",
      "tags": [
        "第十二章",
        "或有事项",
        "发生概率"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-259",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "预计负债应按履行相关现时义务所需支出的____进行初始计量。",
      "answer": "最佳估计数",
      "explanation": "最佳估计数的确定取决于预计负债涉及单个项目、多个项目或连续范围等情形。",
      "tags": [
        "第十二章",
        "或有事项",
        "预计负债",
        "初始计量"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-260",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "预计负债清偿金额存在连续范围且各种结果发生可能性相同时，最佳估计数为范围上、下限金额的____。",
      "answer": "平均数",
      "explanation": "计算公式为（上限金额＋下限金额）÷2。",
      "tags": [
        "第十二章",
        "或有事项",
        "预计负债",
        "最佳估计数"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-261",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "不存在连续范围或范围内可能性不同时，涉及单个项目的最佳估计数为{{0}}；涉及多个项目时按{{1}}计算。",
      "answer": [
        "最可能发生数",
        "各种可能发生额及发生概率加权"
      ],
      "explanation": "单项义务与多项义务的计量方法不同。",
      "tags": [
        "第十二章",
        "或有事项",
        "预计负债",
        "最佳估计数"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-262",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "预期获得第三方补偿时，只有在{{0}}能够收到时才能单独确认为资产，且补偿金额{{1}}超过所确认负债的账面价值。",
      "answer": [
        "基本确定",
        "不能"
      ],
      "explanation": "补偿资产以“其他应收款”核算，不能冲减预计负债账面价值。",
      "tags": [
        "第十二章",
        "或有事项",
        "预计负债",
        "补偿"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-263",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "未决诉讼满足预计负债确认条件时，诉讼费计入{{0}}，预计赔偿支出计入{{1}}。",
      "answer": [
        "管理费用",
        "营业外支出"
      ],
      "explanation": "两项费用贷方通常均为“预计负债”。",
      "tags": [
        "第十二章",
        "或有事项",
        "未决诉讼",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-264",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "企业已被判决败诉且损失金额已确定时：借：营业外支出；贷：{{0}}。若正在上诉等尚未终局时，贷：{{1}}。",
      "answer": [
        "其他应付款",
        "预计负债"
      ],
      "explanation": "判决终局、义务金额确定时不再通过预计负债核算。",
      "tags": [
        "第十二章",
        "或有事项",
        "未决诉讼",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-265",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "保证类质量保证按或有事项准则处理：借：{{0}}；贷：{{1}}。",
      "answer": [
        "主营业务成本",
        "预计负债"
      ],
      "explanation": "服务类质量保证则按收入准则处理。",
      "tags": [
        "第十二章",
        "或有事项",
        "产品质量保证",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-266",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "服务类质量保证按收入准则处理，发生相关支出时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "合同履约成本",
        "原材料等"
      ],
      "explanation": "服务类质保属于一项单独履约义务的相关成本处理。",
      "tags": [
        "第十二章",
        "或有事项",
        "产品质量保证",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-267",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "亏损合同相关义务可以无须支付任何补偿而撤销的，通常____现时义务。",
      "answer": "不存在",
      "explanation": "不存在现时义务时不确认预计负债。",
      "tags": [
        "第十二章",
        "或有事项",
        "亏损合同",
        "确认"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-268",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：存在标的资产的亏损合同的会计处理顺序。",
      "answer": "先对标的资产进行减值测试并按规定确认减值损失；如果预计亏损超过已确认的减值损失，将超过部分确认为预计负债。",
      "explanation": "不存在标的资产时，相关义务满足预计负债确认条件即可确认预计负债。",
      "tags": [
        "第十二章",
        "或有事项",
        "亏损合同"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-269",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存在标的资产的亏损合同，预计亏损超过资产减值损失的部分：借：{{0}}；贷：{{1}}。",
      "answer": [
        "主营业务成本",
        "预计负债"
      ],
      "explanation": "标的资产减值本身通常借记资产减值损失，贷记存货跌价准备等。",
      "tags": [
        "第十二章",
        "或有事项",
        "亏损合同",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-270",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "不存在标的资产的亏损合同确认预计负债时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "主营业务成本",
        "预计负债"
      ],
      "explanation": "生产出产品后，借记预计负债，贷记库存商品。",
      "tags": [
        "第十二章",
        "或有事项",
        "亏损合同",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-271",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：构成重组义务的确认条件。",
      "answer": "企业有详细、正式的重组计划，且该重组计划已对外公告，表明企业承担了重组义务；该义务同时满足预计负债确认条件时，应确认预计负债。",
      "explanation": "仅有内部计划而未对外公告，通常不足以形成重组义务。",
      "tags": [
        "第十二章",
        "或有事项",
        "重组义务",
        "确认条件"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-272",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：通常属于重组的事项。",
      "answer": "出售或终止企业的部分业务；对企业组织结构进行较大调整；关闭企业部分营业场所，或者将营业活动由一个国家或地区迁移到其他国家或地区。",
      "explanation": "重组事项需结合详细正式计划及对外公告判断是否形成重组义务。",
      "tags": [
        "第十二章",
        "或有事项",
        "重组义务",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-273",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "重组预计负债按与重组有关的{{0}}支出计量，例如自愿遣散、强制遣散和不再使用固定资产的{{1}}。",
      "answer": [
        "直接",
        "撤销租赁费"
      ],
      "explanation": "与重组未来经营相关的支出通常不属于重组预计负债的计量范围。",
      "tags": [
        "第十二章",
        "或有事项",
        "重组义务",
        "计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-274",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：客户合同在确认收入前必须同时满足的五项识别条件。",
      "answer": "合同各方已批准合同并承诺履行各自义务；合同明确了各方与所转让商品相关的权利和义务；合同有明确的与所转让商品相关的支付条款；合同具有商业实质；企业因向客户转让商品而有权取得的对价很可能收回。",
      "explanation": "满足合同识别条件后，企业在客户取得相关商品控制权时确认收入。",
      "tags": [
        "第十三章",
        "收入",
        "合同识别"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-275",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：与同一客户或其关联方订立的多份合同应合并为一份合同核算的情形。",
      "answer": "多份合同基于同一商业目的订立并构成一揽子交易；一份合同的对价金额取决于其他合同的定价或履行情况；多份合同中承诺的商品或部分商品构成单项履约义务。",
      "explanation": "合同合并后仍需识别其中包含的各单项履约义务。",
      "tags": [
        "第十三章",
        "收入",
        "合同合并"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-276",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "合同变更增加可明确区分商品，且新增合同价款反映新增商品{{0}}的，合同变更部分作为{{1}}处理。",
      "answer": [
        "单独售价",
        "单独合同"
      ],
      "explanation": "同时满足两个条件时，合同变更不影响原合同已确认部分。",
      "tags": [
        "第十三章",
        "收入",
        "合同变更"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-277",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "合同变更不属于单独合同，且变更日已转让商品与未转让商品可明确区分的，应视为{{0}}，并将未履约部分与变更部分合并为{{1}}。",
      "answer": [
        "原合同终止",
        "新合同"
      ],
      "explanation": "新合同交易价格包括原合同尚未确认为收入的部分和变更中客户承诺的对价。",
      "tags": [
        "第十三章",
        "收入",
        "合同变更"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-278",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "合同变更不属于单独合同，且已转让商品与未转让商品不可明确区分的，应作为{{0}}处理，在变更日重新计算{{1}}。",
      "answer": [
        "原合同的组成部分",
        "履约进度"
      ],
      "explanation": "该处理属于累计追补调整，并调整当期收入和相应成本。",
      "tags": [
        "第十三章",
        "收入",
        "合同变更"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-279",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "履约义务是合同中企业向客户转让____商品的承诺。",
      "answer": "可明确区分",
      "explanation": "一项履约义务也可以是转让一系列实质相同且转让模式相同的可明确区分商品的承诺。",
      "tags": [
        "第十三章",
        "收入",
        "履约义务"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-280",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：商品作为可明确区分履约义务应同时满足的两个条件。",
      "answer": "客户能够从该商品本身或从该商品与其他易于获得资源一起使用中受益；企业向客户转让该商品的承诺与合同中其他承诺可单独区分。",
      "explanation": "两项条件缺一不可。",
      "tags": [
        "第十三章",
        "收入",
        "履约义务",
        "可明确区分"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-281",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：通常表明商品承诺与合同其他承诺不可明确区分的情形。",
      "answer": "企业需提供重大服务以将商品与合同中其他商品整合形成组合产出；商品会重大修改或定制合同中其他商品；商品与合同中其他商品高度关联并相互产生重大影响。",
      "explanation": "存在上述情形时，通常不能拆分为单独履约义务。",
      "tags": [
        "第十三章",
        "收入",
        "履约义务",
        "可明确区分"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-282",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "销售产品并负责运输时，若产品控制权在运输前已转移，运输服务构成{{0}}；若送达指定地点时控制权才转移，运输活动{{1}}单独履约义务。",
      "answer": [
        "单独履约义务",
        "不构成"
      ],
      "explanation": "判断关键是商品控制权的转移时点。",
      "tags": [
        "第十三章",
        "收入",
        "履约义务",
        "运输服务"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-283",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "合同标价____代表交易价格，企业应结合合同条款和以往习惯做法确定交易价格。",
      "answer": "不一定",
      "explanation": "交易价格可能受折扣、返利、退款、业绩奖金等可变对价因素影响。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-284",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "存在大量具有类似特征合同、且可能产生多个结果时，可变对价通常按{{0}}估计；合同仅有两个可能结果时，通常按{{1}}估计。",
      "answer": [
        "期望值",
        "最可能发生金额"
      ],
      "explanation": "期望值以各种可能对价金额及其概率计算；最可能发生金额为最可能发生的单一金额。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格",
        "可变对价"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-285",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "计入交易价格的可变对价金额，应以相关不确定性消除时累计已确认收入____发生重大转回为限。",
      "answer": "极可能不会",
      "explanation": "“极可能”的把握程度高于“很可能”，但不要求达到“基本确定”。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格",
        "可变对价"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-286",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "合同存在重大融资成分时，交易价格应按客户取得商品控制权时的现金支付金额，即____确定。",
      "answer": "现销价格",
      "explanation": "现销价格反映假定客户在取得控制权时即以现金支付的应付金额。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格",
        "重大融资成分"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-287",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "合同开始日预计客户取得商品控制权与客户支付价款间隔不超过____年的，可以不考虑重大融资成分。",
      "answer": "一",
      "explanation": "这是重大融资成分的实务简化处理。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格",
        "重大融资成分"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-288",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "非现金对价通常按合同开始日的{{0}}确定交易价格；不能合理估计时，参照承诺商品的{{1}}间接确定。",
      "answer": [
        "公允价值",
        "单独售价"
      ],
      "explanation": "非现金对价可包括实物资产、无形资产、股权和客户提供的广告服务等。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格",
        "非现金对价"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-289",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "合同开始日后，非现金对价公允价值因对价形式{{0}}的原因变动时，按可变对价处理；因对价形式{{1}}变动时，不计入交易价格。",
      "answer": [
        "以外",
        "本身"
      ],
      "explanation": "例如股票价格本身变动不计入交易价格。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格",
        "非现金对价"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-290",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "企业向客户或第三方支付对价，除为取得客户提供的可明确区分商品外，应{{0}}交易价格，并在确认收入与支付或承诺支付对价{{1}}的时点冲减当期收入。",
      "answer": [
        "冲减",
        "孰晚"
      ],
      "explanation": "应付客户对价通常不是销售费用。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格",
        "应付客户对价"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-291",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "合同开始日，企业应按各单项履约义务承诺商品单独售价的____比例，将交易价格分摊至各单项履约义务。",
      "answer": "相对",
      "explanation": "合同折扣通常也按各单项履约义务相对单独售价比例分摊。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格分摊"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-292",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "有确凿证据表明合同折扣仅与一项或多项履约义务相关的，应将该折扣分摊至____履约义务。",
      "answer": "相关",
      "explanation": "常规情况下合同折扣按各单项履约义务相对单独售价比例分摊。",
      "tags": [
        "第十三章",
        "收入",
        "交易价格分摊",
        "合同折扣"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-293",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：属于在某一时段内履行履约义务的三种情形。",
      "answer": "客户在企业履约的同时即取得并消耗企业履约所带来的经济利益；客户能够控制企业履约过程中在建的商品；企业履约过程中所产出的商品具有不可替代用途，且企业在整个合同期间内有权就累计至今已完成的履约部分收取款项。",
      "explanation": "满足任一情形，即属于在某一时段内履行的履约义务。",
      "tags": [
        "第十三章",
        "收入",
        "收入确认",
        "某一时段内履行"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-294",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "某一时段内履行的履约义务，应按{{0}}确认收入；当期收入＝交易价格总额×履约进度－{{1}}。",
      "answer": [
        "履约进度",
        "以前会计期间累计已确认的收入"
      ],
      "explanation": "履约进度不能合理确定的除外。",
      "tags": [
        "第十三章",
        "收入",
        "收入确认",
        "某一时段内履行"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-295",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "确定履约进度时，企业应采用{{0}}或{{1}}，并扣除控制权尚未转移给客户的商品和服务。",
      "answer": [
        "产出法",
        "投入法"
      ],
      "explanation": "应结合商品或服务性质选择能够如实反映履约进度的方法。",
      "tags": [
        "第十三章",
        "收入",
        "收入确认",
        "履约进度"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-296",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "不属于某一时段内履行的履约义务，属于在某一____履行的履约义务。",
      "answer": "时点",
      "explanation": "企业在客户取得相关商品控制权时点确认收入。",
      "tags": [
        "第十三章",
        "收入",
        "收入确认",
        "某一时点履行"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-297",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：判断商品控制权在某一时点转移的五项主要迹象。",
      "answer": "企业享有现时收款权利；企业已将法定所有权转移给客户；企业已将商品实物转移给客户；企业已将商品所有权上的主要风险和报酬转移给客户；客户已接受该商品。",
      "explanation": "控制权转移需综合判断，不应机械依据单一迹象。",
      "tags": [
        "第十三章",
        "收入",
        "收入确认",
        "控制权转移"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-298",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：售后代管商品安排下，表明客户取得商品控制权还应同时满足的条件。",
      "answer": "该安排具有商业实质；属于客户的商品能够单独识别；商品可以随时应客户要求交付；企业不能自行使用该商品或将其提供给其他客户。",
      "explanation": "售后代管还应结合一般控制权转移迹象判断。",
      "tags": [
        "第十三章",
        "收入",
        "收入确认",
        "售后代管"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-299",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "附销售退回条款销售时，按预期有权收取的对价确认{{0}}，按预期退还金额确认{{1}}。",
      "answer": [
        "收入",
        "预计负债"
      ],
      "explanation": "预计退回金额不计入收入。",
      "tags": [
        "第十三章",
        "收入",
        "销售退回",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-300",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "附销售退回条款销售时，按预期将退回商品的账面价值扣除预计收回成本后的余额确认{{0}}，即{{1}}。",
      "answer": [
        "资产",
        "应收退货成本"
      ],
      "explanation": "同时按商品账面价值扣除该资产成本后的净额结转主营业务成本。",
      "tags": [
        "第十三章",
        "收入",
        "销售退回",
        "应收退货成本"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-301",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业每一资产负债表日应重新估计未来销售退回情况；估计变化按照____进行会计处理。",
      "answer": "会计估计变更",
      "explanation": "退货期满时，原确认的预计负债和应收退货成本均应冲减为零。",
      "tags": [
        "第十三章",
        "收入",
        "销售退回",
        "会计估计变更"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-302",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "企业在特定商品转让给客户之前{{0}}该商品的，为主要责任人，按{{1}}确认收入。",
      "answer": [
        "控制",
        "总额法"
      ],
      "explanation": "不控制商品的代理人，按佣金或净额确认收入。",
      "tags": [
        "第十三章",
        "收入",
        "主要责任人和代理人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-303",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "客户额外购买选择权使客户获得超过同类客户通常可享有的折扣时，该选择权构成一项____。",
      "answer": "重大权利",
      "explanation": "重大权利应作为单项履约义务分摊交易价格。",
      "tags": [
        "第十三章",
        "收入",
        "客户额外购买选择权"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-304",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "客户额外购买选择权构成重大权利时，应作为{{0}}，在客户行使选择权取得商品控制权或选择权{{1}}时确认收入。",
      "answer": [
        "单项履约义务",
        "失效"
      ],
      "explanation": "若购买价格反映额外商品单独售价，则通常不构成重大权利。",
      "tags": [
        "第十三章",
        "收入",
        "客户额外购买选择权"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-305",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：知识产权许可在某一时段内确认收入须同时满足的三个条件。",
      "answer": "合同要求或客户能够合理预期企业将从事对该知识产权有重大影响的活动；该活动对客户将产生有利或不利影响；该活动不会导致向客户转让某项商品。",
      "explanation": "不同时满足时，通常作为在某一时点履行的履约义务确认收入。",
      "tags": [
        "第十三章",
        "收入",
        "知识产权许可"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-306",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "知识产权许可在客户能够使用该许可并开始从中获利____，企业不得确认相关收入。",
      "answer": "之前",
      "explanation": "这是时点法下确认知识产权许可收入的重要限制。",
      "tags": [
        "第十三章",
        "收入",
        "知识产权许可"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-307",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "按客户实际销售或使用情况收取知识产权特许权使用费的，应在客户销售或使用实际发生与企业履行相关履约义务{{0}}的时点确认收入。",
      "answer": [
        "孰晚"
      ],
      "explanation": "销售或使用为基础的特许权使用费适用专门确认规则。",
      "tags": [
        "第十三章",
        "收入",
        "知识产权许可",
        "特许权使用费"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-308",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业销售商品向客户收取的预收款，应先确认为____。",
      "answer": "合同负债",
      "explanation": "待未来履行向客户转让商品的义务时，再将合同负债转为收入。",
      "tags": [
        "第十三章",
        "收入",
        "合同负债",
        "预收款"
      ],
      "difficulty": 1
    },
    {
      "id": "zjkj-309",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "客户可能放弃合同权利时，企业预期有权获得相关金额的，按客户{{0}}的模式按比例确认收入；否则在客户要求履行剩余义务可能性{{1}}时转为收入。",
      "answer": [
        "行使合同权利",
        "极低"
      ],
      "explanation": "该规则处理客户未行使的合同权利，即破产收入。",
      "tags": [
        "第十三章",
        "收入",
        "合同负债",
        "客户未行使权利"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-310",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "无需退回的初始费与合同承诺商品不相关的，应作为未来转让商品的{{0}}，在未来转让商品时确认{{1}}。",
      "answer": [
        "预收款",
        "收入"
      ],
      "explanation": "初始费与承诺商品相关时，还需判断其是否构成单项履约义务。",
      "tags": [
        "第十三章",
        "收入",
        "初始费"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-311",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：通常属于政府补助的项目。",
      "answer": "通常属于政府补助的项目包括无偿拨款、税收返还、财政贴息以及无偿给予非货币性资产等。",
      "explanation": "政府补助的核心是政府无偿向企业提供资产。",
      "tags": [
        "第十四章",
        "政府补助",
        "范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-312",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：不适用政府补助准则的常见事项。",
      "answer": "直接减征、免征、增加计税抵扣额、抵免部分税额等不涉及资产直接转移的经济资源不适用政府补助准则；增值税出口退税不属于政府补助；政府以企业所有者身份向企业投入资本也不属于政府补助。",
      "explanation": "是否存在政府无偿提供资产是判断重点。",
      "tags": [
        "第十四章",
        "政府补助",
        "范围"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-313",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "与资产相关政府补助采用总额法时，收到补助资金：借：银行存款；贷：{{0}}。",
      "answer": [
        "递延收益"
      ],
      "explanation": "总额法下补助不直接冲减资产账面价值。",
      "tags": [
        "第十四章",
        "政府补助",
        "与资产相关",
        "总额法",
        "分录"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-314",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "与资产相关政府补助采用总额法，在相关资产使用寿命内分摊递延收益时，日常活动相关部分计入{{0}}，非日常活动相关部分计入{{1}}。",
      "answer": [
        "其他收益",
        "营业外收入"
      ],
      "explanation": "资产折旧或摊销费用仍按资产用途计入制造费用、管理费用、销售费用等。",
      "tags": [
        "第十四章",
        "政府补助",
        "与资产相关",
        "总额法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-315",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "先取得补助后购建长期资产的，递延收益按相关资产{{0}}分摊；先购建资产后取得补助的，按相关资产{{1}}分摊。",
      "answer": [
        "使用寿命",
        "剩余使用寿命"
      ],
      "explanation": "分摊期间应与相关资产使用期间匹配。",
      "tags": [
        "第十四章",
        "政府补助",
        "与资产相关",
        "总额法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-316",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "相关资产使用寿命结束前被出售、报废、转让或毁损时，尚未分摊的递延收益余额应转入资产处置当期的____。",
      "answer": "损益",
      "explanation": "剩余递延收益不再继续递延。",
      "tags": [
        "第十四章",
        "政府补助",
        "与资产相关",
        "处置"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-317",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "与资产相关政府补助采用净额法时，收到补助资金先贷记递延收益；购入资产后：借：递延收益；贷：{{0}}。",
      "answer": [
        "相关资产"
      ],
      "explanation": "净额法通过递延收益冲减相关资产账面价值，后续按冲减后的价值计提折旧或摊销。",
      "tags": [
        "第十四章",
        "政府补助",
        "与资产相关",
        "净额法",
        "分录"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-318",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "补偿以后期间成本费用或损失的收益相关政府补助，收到时确认为{{0}}；相关成本费用发生时再按总额法或净额法处理。",
      "answer": [
        "递延收益"
      ],
      "explanation": "补偿以后期间的补助不能在收到时立即全部确认损益。",
      "tags": [
        "第十四章",
        "政府补助",
        "与收益相关",
        "确认"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-319",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "补偿已发生成本费用或损失的收益相关政府补助，采用总额法时，日常活动相关补助贷记{{0}}；非日常活动相关补助贷记{{1}}。",
      "answer": [
        "其他收益",
        "营业外收入"
      ],
      "explanation": "净额法下则冲减生产成本、管理费用、营业外支出等对应项目。",
      "tags": [
        "第十四章",
        "政府补助",
        "与收益相关",
        "总额法"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-320",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "补偿已发生成本费用或损失的收益相关政府补助，采用净额法时应冲减相关____。",
      "answer": "成本费用或损失",
      "explanation": "例如冲减生产成本、管理费用或营业外支出等。",
      "tags": [
        "第十四章",
        "政府补助",
        "与收益相关",
        "净额法"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-321",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：政府补助退回的会计处理原则。",
      "answer": "初始确认时冲减相关资产账面价值的，调整资产账面价值；存在相关递延收益的，冲减递延收益账面余额，超出部分计入当期损益；属于其他情况的，直接计入当期损益；属于前期差错的政府补助退回，按前期差错更正进行追溯调整。",
      "explanation": "退回处理取决于原补助的会计处理方式。",
      "tags": [
        "第十四章",
        "政府补助",
        "退回"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-322",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "涉及少量货币性资产的交换中，补价占整个资产交换金额比重{{0}}25%的，通常属于非货币性资产交换；达到或超过25%的，属于{{1}}。",
      "answer": [
        "低于",
        "货币性资产交换"
      ],
      "explanation": "计算补价比例时，分子和分母均不考虑增值税。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "认定"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-323",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：属于非货币性资产交换但不执行非货币性资产交换准则的情形。",
      "answer": "以存货换取客户的非货币性资产；交换资产包括属于非货币性资产的金融资产；交换涉及使用权资产或应收融资租赁款；在企业合并中取得非货币性资产；非货币性资产交换构成权益性交易。",
      "explanation": "此类交易应适用相应的收入、金融工具、租赁、企业合并或权益性交易准则。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "适用范围"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-324",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "非货币性资产交换具有商业实质且公允价值能够可靠计量的，换入资产通常以换出资产的{{0}}及应支付相关税费作为初始成本；换出资产应按{{1}}处理。",
      "answer": [
        "公允价值",
        "视同出售"
      ],
      "explanation": "有确凿证据表明换入资产公允价值更可靠的除外。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "公允价值计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-325",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "以公允价值为基础计量的非货币性资产交换中，换出资产公允价值与账面价值的差额计入____。",
      "answer": "当期损益",
      "explanation": "具体损益科目取决于换出资产类别。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "公允价值计量",
        "损益"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-326",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "非货币性资产交换不具有商业实质，或换入、换出资产公允价值均不能可靠计量的，以换出资产{{0}}及相关税费作为换入资产初始计量金额，且{{1}}损益。",
      "answer": [
        "账面价值",
        "不确认"
      ],
      "explanation": "无论是否支付补价，终止确认换出资产时均不确认损益。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "账面价值计量"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-327",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以公允价值计量的非货币性资产交换中，换出存货应按{{0}}处理；换出固定资产、在建工程或无形资产的处置差额计入{{1}}。",
      "answer": [
        "销售",
        "资产处置损益"
      ],
      "explanation": "换出存货确认收入并结转成本。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "换出资产",
        "损益"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-328",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以公允价值计量的非货币性资产交换中，换出长期股权投资或金融资产的处置差额计入{{0}}；换出时相关{{1}}等应一并结转。",
      "answer": [
        "投资收益",
        "其他综合收益"
      ],
      "explanation": "长期股权投资还可能涉及资本公积的结转。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "换出资产",
        "金融资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-329",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以公允价值计量的非货币性资产交换中，换出投资性房地产时确认{{0}}，并按其账面价值结转{{1}}。",
      "answer": [
        "其他业务收入",
        "其他业务成本"
      ],
      "explanation": "处置时还应关注累计公允价值变动损益和其他综合收益的结转。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "换出资产",
        "投资性房地产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-330",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "多项非货币性资产交换中，换入的金融资产应以其____为基础确定入账价值。",
      "answer": "公允价值",
      "explanation": "换入非金融资产总成本再按各资产公允价值比例分配。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "多项资产交换"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-331",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权人以债权换入金融资产时，取得金融资产按取得日{{0}}确认；投资收益＝金融资产公允价值－{{1}}。",
      "answer": [
        "公允价值",
        "债权账面价值"
      ],
      "explanation": "已计提坏账准备应在终止确认应收账款时一并转出。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "债务重组",
        "债权人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-332",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债务人以金融资产偿债时：借：应付账款；贷：金融资产、{{0}}。以其他债权投资偿债的，还应将其他综合收益转入{{1}}。",
      "answer": [
        "投资收益",
        "投资收益"
      ],
      "explanation": "以其他权益工具投资偿债时，相关其他综合收益通常转入留存收益。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "债务重组",
        "债务人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-333",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权人以债权换入非金融资产时，换入资产通常按放弃债权的{{0}}加相关税费、扣除进项税额计量；债务人以非金融资产偿债形成的收益计入{{1}}。",
      "answer": [
        "公允价值",
        "其他收益——债务重组收益"
      ],
      "explanation": "债务人以存货偿债时不确认销售收入，按账面价值直接转出存货。",
      "tags": [
        "第十五章",
        "非货币性资产交换",
        "债务重组",
        "非金融资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-334",
      "section": "中级会计实务",
      "type": "free_response",
      "prompt": "默写：债务重组的定义。",
      "answer": "债务重组是指在不改变交易对手方的情况下，经债权人和债务人协定或者法院裁定，就清偿债务的时间、金额或方式等重新达成协议的交易。",
      "explanation": "交易对手方不变是债务重组的定义要点。",
      "tags": [
        "第十六章",
        "债务重组",
        "定义"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-335",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债务重组适用的债权债务包括金融工具准则规范的债权债务以及{{0}}和{{1}}，不包括合同资产、合同负债和预计负债。",
      "answer": [
        "租赁应收款",
        "租赁应付款"
      ],
      "explanation": "债务重组的债权债务范围并非仅限于一般应收应付款项。",
      "tags": [
        "第十六章",
        "债务重组",
        "适用范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-336",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "通过债务重组形成企业合并的，应适用____准则。",
      "answer": "企业合并",
      "explanation": "债务重组构成企业合并时不适用债务重组一般会计处理。",
      "tags": [
        "第十六章",
        "债务重组",
        "适用范围"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-337",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "债务重组构成权益性交易的，债权人和债务人____确认相关损益。",
      "answer": "不",
      "explanation": "此时按权益性交易相关规定处理。",
      "tags": [
        "第十六章",
        "债务重组",
        "权益性交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-338",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权人以债权换入非金融资产时，换入资产按放弃债权{{0}}加相关税费、扣除进项税额确认；债权重组损益计入{{1}}。",
      "answer": [
        "公允价值",
        "投资收益"
      ],
      "explanation": "债权人还应同时转出已计提的坏账准备。",
      "tags": [
        "第十六章",
        "债务重组",
        "以资产清偿债务",
        "债权人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-339",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债务人以非金融资产清偿债务时，债务重组收益＝债务账面价值－偿债资产账面价值－销项税额，计入{{0}}。",
      "answer": [
        "其他收益——债务重组收益"
      ],
      "explanation": "以存货偿债不确认销售收入，直接按账面价值转出。",
      "tags": [
        "第十六章",
        "债务重组",
        "以资产清偿债务",
        "债务人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-340",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债权人以债权换入金融资产时，取得金融资产按取得日{{0}}确认；重组收益＝金融资产公允价值－{{1}}。",
      "answer": [
        "公允价值",
        "债权账面价值"
      ],
      "explanation": "相关税费通常计入取得资产成本。",
      "tags": [
        "第十六章",
        "债务重组",
        "以金融资产清偿债务",
        "债权人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-341",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债务人以金融资产清偿债务时，投资收益＝债务账面价值－{{0}}；以其他债权投资偿债的，原其他综合收益转入{{1}}。",
      "answer": [
        "金融资产账面价值",
        "投资收益"
      ],
      "explanation": "以其他权益工具投资偿债时，相关其他综合收益通常结转至留存收益。",
      "tags": [
        "第十六章",
        "债务重组",
        "以金融资产清偿债务",
        "债务人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-342",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "债务转为权益工具时，债务人按权益工具{{0}}确认权益；债务账面价值与权益确认额的差额计入{{1}}。",
      "answer": [
        "公允价值",
        "投资收益"
      ],
      "explanation": "权益工具公允价值不能可靠计量时，通常以债务公允价值计量。",
      "tags": [
        "第十六章",
        "债务重组",
        "债务转股",
        "债务人"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-343",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "资产的账面价值通常等于原值减累计折旧或摊销，再减____。",
      "answer": "减值准备",
      "explanation": "税法一般不承认减值准备。",
      "tags": [
        "第十七章",
        "所得税"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-344",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "负债的计税基础＝账面价值－未来____金额。",
      "answer": "抵扣",
      "explanation": "未来可税前扣除的金额会降低负债计税基础。",
      "tags": [
        "第十七章",
        "所得税"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-345",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资产账面价值小于计税基础，形成{{0}}暂时性差异；资产账面价值大于计税基础，形成{{1}}暂时性差异。",
      "answer": [
        "可抵扣",
        "应纳税"
      ],
      "explanation": "资产收回时分别导致未来少交税、未来多交税。",
      "tags": [
        "第十七章",
        "暂时性差异"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-346",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "负债账面价值小于计税基础，形成{{0}}暂时性差异；负债账面价值大于计税基础，形成{{1}}暂时性差异。",
      "answer": [
        "应纳税",
        "可抵扣"
      ],
      "explanation": "负债的判断方向与资产相反。",
      "tags": [
        "第十七章",
        "暂时性差异"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-347",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "可抵扣亏损和税款抵减在符合确认条件时，视同____暂时性差异。",
      "answer": "可抵扣",
      "explanation": "其作用是减少未来应纳税所得额。",
      "tags": [
        "第十七章",
        "暂时性差异"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-348",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "确认一般应纳税暂时性差异产生的递延所得税负债：借：{{0}}；贷：{{1}}。",
      "answer": [
        "所得税费用",
        "递延所得税负债"
      ],
      "explanation": "直接计入所有者权益的交易或企业合并等情形除外。",
      "tags": [
        "第十七章",
        "递延所得税负债"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-349",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "非同一控制下免税合并中，商誉初始确认形成的应纳税暂时性差异____确认递延所得税负债。",
      "answer": "不",
      "explanation": "这是商誉初始确认的例外。",
      "tags": [
        "第十七章",
        "递延所得税负债"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-350",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "递延所得税负债应按暂时性差异转回期间适用的____计量。",
      "answer": "所得税税率",
      "explanation": "不以当前税率机械计量。",
      "tags": [
        "第十七章",
        "递延所得税负债"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-351",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "无论暂时性差异何时转回，递延所得税负债均____折现。",
      "answer": "不",
      "explanation": "递延所得税资产同样不折现。",
      "tags": [
        "第十七章",
        "递延所得税负债"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-352",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "确认递延所得税资产：借：{{0}}；贷：{{1}}。",
      "answer": [
        "递延所得税资产",
        "所得税费用"
      ],
      "explanation": "一般情形下贷方计入所得税费用。",
      "tags": [
        "第十七章",
        "递延所得税资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-353",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "递延所得税资产的确认应以未来期间很可能取得足够的____为限。",
      "answer": "应纳税所得额",
      "explanation": "并非所有可抵扣差异都能确认。",
      "tags": [
        "第十七章",
        "递延所得税资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-354",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "对长期投资相关的可抵扣暂时性差异，确认递延所得税资产需同时满足：差异在可预见未来{{0}}转回，且未来{{1}}取得可抵扣的应纳税所得额。",
      "answer": [
        "很可能",
        "很可能"
      ],
      "explanation": "两项“很可能”条件缺一不可。",
      "tags": [
        "第十七章",
        "递延所得税资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-355",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "递延所得税资产减记时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "所得税费用",
        "递延所得税资产"
      ],
      "explanation": "以后有足够应纳税所得额时可恢复。",
      "tags": [
        "第十七章",
        "递延所得税资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-356",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "所得税费用＝当期所得税±____（或收益）。",
      "answer": "递延所得税费用",
      "explanation": "递延所得税收益应从所得税费用中扣减。",
      "tags": [
        "第十七章",
        "所得税费用"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-357",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "选择记账本位币时，应考虑主要影响销售价格的货币以及主要影响{{0}}、{{1}}等成本的货币。",
      "answer": [
        "人工",
        "材料"
      ],
      "explanation": "还应考虑融资和保存经营活动收款所使用的货币。",
      "tags": [
        "第十八章",
        "记账本位币"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-358",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业记账本位币一经确定不得随意变更，除非主要经济环境发生____变化。",
      "answer": "重大",
      "explanation": "记账本位币变更属于会计政策变更。",
      "tags": [
        "第十八章",
        "记账本位币"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-359",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "变更记账本位币时，应按变更日{{0}}将所有项目折算；折算后金额作为新的{{1}}。",
      "answer": [
        "即期汇率",
        "历史成本"
      ],
      "explanation": "使用同一汇率折算不会产生汇兑差额。",
      "tags": [
        "第十八章",
        "记账本位币变更"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-360",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "外币货币性项目在期末应按____折算。",
      "answer": "期末即期汇率",
      "explanation": "如应收账款、应付账款和借款。",
      "tags": [
        "第十八章",
        "外币交易"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-361",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "外币货币性项目期末折算产生的汇兑差额通常计入____。",
      "answer": "财务费用",
      "explanation": "接受外币资本投资等特殊情形除外。",
      "tags": [
        "第十八章",
        "外币交易"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-362",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "以公允价值计量的外币交易性金融资产，期末按{{0}}折算，汇兑差额计入{{1}}。",
      "answer": [
        "期末即期汇率",
        "公允价值变动损益"
      ],
      "explanation": "其他权益工具投资的相关差额通常计入其他综合收益。",
      "tags": [
        "第十八章",
        "外币交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-363",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "以历史成本计量的外币非货币性项目，期末仍按____折算。",
      "answer": "交易日即期汇率",
      "explanation": "通常不因期末汇率变动产生汇兑差额。",
      "tags": [
        "第十八章",
        "外币交易"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-364",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "外币账户期末汇兑差额＝按期末汇率调整后的记账本位币余额－{{0}}。",
      "answer": [
        "调整前记账本位币余额"
      ],
      "explanation": "先计算外币期末余额再折算。",
      "tags": [
        "第十八章",
        "外币报表折算"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-365",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "合同构成租赁须同时具备：一定期间、{{0}}和客户对该资产使用权的{{1}}。",
      "answer": [
        "已识别资产",
        "控制"
      ],
      "explanation": "三个要素缺一不可。",
      "tags": [
        "第十九章",
        "租赁识别"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-366",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "供应方拥有实质性替换权，应同时具有替换的{{0}}，且行使替换权能获得{{1}}。",
      "answer": [
        "实际能力",
        "经济利益"
      ],
      "explanation": "两条件同时满足时，指定资产不属于已识别资产。",
      "tags": [
        "第十九章",
        "已识别资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-367",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "物理不可区分的部分产能通常不属于已识别资产，除非其代表资产的____产能。",
      "answer": "全部",
      "explanation": "还须使客户获得几乎全部经济利益。",
      "tags": [
        "第十九章",
        "已识别资产"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-368",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "客户控制使用权，须有权获得几乎全部经济利益，并有权{{0}}资产的使用目的和方式。",
      "answer": [
        "主导"
      ],
      "explanation": "目的和方式预先确定时，客户运营或设计资产也可满足条件。",
      "tags": [
        "第十九章",
        "使用权控制"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-369",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "构成单独租赁的使用权，应使承租人能够单独获利，且与其他资产不存在高度{{0}}或高度{{1}}。",
      "answer": [
        "依赖",
        "关联"
      ],
      "explanation": "两项条件均应满足。",
      "tags": [
        "第十九章",
        "租赁分拆"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-370",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "租赁期开始日是出租人提供租赁资产使其可供承租人____的起始日。",
      "answer": "使用",
      "explanation": "不以合同约定的起租日或租金支付日为唯一判断。",
      "tags": [
        "第十九章",
        "租赁期"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-371",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "租赁负债初始金额为尚未支付的租赁付款额的____。",
      "answer": "现值",
      "explanation": "折现率依次使用租赁内含利率、增量借款利率。",
      "tags": [
        "第十九章",
        "租赁负债"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-372",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "使用权资产初始成本包括租赁付款额现值、已付租金、初始直接费用、拆卸费用现值，减{{0}}。",
      "answer": [
        "租赁激励"
      ],
      "explanation": "拆卸复原义务按预计负债现值计入。",
      "tags": [
        "第十九章",
        "使用权资产"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-373",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "租赁期开始日租赁期不超过____个月的租赁，可构成短期租赁。",
      "answer": "12",
      "explanation": "包含购买选择权的租赁不属于短期租赁。",
      "tags": [
        "第十九章",
        "短期租赁"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-374",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "转租赁应基于____资产而非标的租赁资产进行分类。",
      "answer": "使用权",
      "explanation": "短期租赁简化处理下的转租赁只能分类为经营租赁。",
      "tags": [
        "第十九章",
        "转租赁"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-375",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "售后租回中售价低于公允价值的差额作为____处理。",
      "answer": "预付租金",
      "explanation": "售价高于公允价值的差额作为单独融资业务处理。",
      "tags": [
        "第十九章",
        "售后租回"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-376",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "划分持有待售类别需满足可立即出售、出售{{0}}发生及预计在{{1}}内完成。",
      "answer": [
        "极可能",
        "一年"
      ],
      "explanation": "出售计划通常还应有确定的购买承诺。",
      "tags": [
        "第二十章",
        "持有待售"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-377",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "关联方交易涉及的持有待售出售，____放松一年期限条件。",
      "answer": "不允许",
      "explanation": "非关联方满足例外条件时可以放松。",
      "tags": [
        "第二十章",
        "持有待售"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-378",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "拟结束使用而非出售的非流动资产或处置组，____划分为持有待售类别。",
      "answer": "不",
      "explanation": "例如期满报废。",
      "tags": [
        "第二十章",
        "持有待售"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-379",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "终止经营须为能够单独区分的组成部分，已处置或划为待售，且代表{{0}}或{{1}}。",
      "answer": [
        "独立的主要业务",
        "单独的主要经营地区"
      ],
      "explanation": "专为转售而取得的子公司也可构成终止经营。",
      "tags": [
        "第二十章",
        "终止经营"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-380",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "终止经营损益应在利润表中与____损益区分列报。",
      "answer": "持续经营",
      "explanation": "当期终止经营还应重述可比期间信息。",
      "tags": [
        "第二十章",
        "终止经营"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-381",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "企业合并与合并财务报表的核心判断是投资方是否取得对被投资方的____。",
      "answer": "控制",
      "explanation": "控制是纳入合并范围的基础。",
      "tags": [
        "第二十一章",
        "合并财务报表"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-382",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "集团内部将存货销售给其他企业作为固定资产使用，属于内部____交易。",
      "answer": "存货转固定资产",
      "explanation": "合并报表中应抵销未实现内部损益。",
      "tags": [
        "第二十一章",
        "内部交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-383",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "集团内部固定资产出售给其他企业继续使用，合并报表中应抵销内部处置形成的____。",
      "answer": "未实现损益",
      "explanation": "并按剩余使用年限调整折旧影响。",
      "tags": [
        "第二十一章",
        "内部交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-384",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "重要前期差错通常采用____法更正。",
      "answer": "追溯重述",
      "explanation": "累积影响数不切实可行的除外。",
      "tags": [
        "第二十二章",
        "前期差错"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-385",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "不重要的前期差错通常采用____法处理。",
      "answer": "未来适用",
      "explanation": "重要性决定更正方法。",
      "tags": [
        "第二十二章",
        "前期差错"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-386",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "税会处理一致且在汇算清缴前、税法允许调整时：借：以前年度损益调整；贷：{{0}}。",
      "answer": [
        "应交税费——应交所得税"
      ],
      "explanation": "调减利润时作相反分录。",
      "tags": [
        "第二十二章",
        "前期差错"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-387",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "税会处理不一致引起所得税影响时，应调整{{0}}。",
      "answer": [
        "递延所得税资产或递延所得税负债"
      ],
      "explanation": "相应通过以前年度损益调整核算。",
      "tags": [
        "第二十二章",
        "前期差错"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-388",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资产负债表日后事项发生在资产负债表日与财务报告{{0}}之间，包括有利或不利事项。",
      "answer": [
        "批准报出日"
      ],
      "explanation": "资产负债表日不特指12月31日。",
      "tags": [
        "第二十三章",
        "日后事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-389",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "资产负债表日后调整事项涉及损益的，应通过____科目核算。",
      "answer": "以前年度损益调整",
      "explanation": "结转后损益类科目已无余额。",
      "tags": [
        "第二十三章",
        "调整事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-390",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "调整事项中以前年度损益调整余额应转入{{0}}。",
      "answer": [
        "利润分配——未分配利润"
      ],
      "explanation": "借贷方向按余额方向确定。",
      "tags": [
        "第二十三章",
        "调整事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-391",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "不涉及损益及利润分配的日后调整事项，应直接调整____。",
      "answer": "相关科目",
      "explanation": "还应调整财务报表相关项目数字。",
      "tags": [
        "第二十三章",
        "调整事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-392",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "日后调整事项发生在报告年度所得税汇算清缴前的，应调整报告年度____。",
      "answer": "应纳所得税税额",
      "explanation": "清缴后通常调整报告年度次年的税额。",
      "tags": [
        "第二十三章",
        "所得税"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-393",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "政府会计由{{0}}和{{1}}构成。",
      "answer": [
        "预算会计",
        "财务会计"
      ],
      "explanation": "实行“双功能、双基础、双报告”模式。",
      "tags": [
        "第二十四章",
        "政府会计"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-394",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "政府会计实行“{{0}}、{{1}}、双报告”的核算模式。",
      "answer": [
        "双功能",
        "双基础"
      ],
      "explanation": "预算会计通常采用收付实现制，财务会计通常采用权责发生制。",
      "tags": [
        "第二十四章",
        "政府会计"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-395",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "纳入部门预算管理的现金收支业务，应在财务会计核算同时进行____核算。",
      "answer": "预算会计",
      "explanation": "其他业务一般仅需财务会计核算。",
      "tags": [
        "第二十四章",
        "平行记账"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-396",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "委托方提供凭据时，受托代理资产通常按凭据标明的____入账。",
      "answer": "金额",
      "explanation": "若该金额与公允价值相差较大，应按公允价值。",
      "tags": [
        "第二十五章",
        "民间非营利组织"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-397",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "委托方未提供凭据的受托代理资产，应按其____入账。",
      "answer": "公允价值",
      "explanation": "避免缺少凭据导致资产不确认。",
      "tags": [
        "第二十五章",
        "民间非营利组织"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-398",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "受托代理资产凭据金额与公允价值相差较大时，应以____作为入账价值。",
      "answer": "公允价值",
      "explanation": "公允价值优先于明显失真的凭据金额。",
      "tags": [
        "第二十五章",
        "民间非营利组织"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-399",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "通过分步交易取得控制时，合并成本＝原持有投资的{{0}}＋新增投资成本的{{1}}。",
      "answer": [
        "购买日公允价值",
        "购买日公允价值"
      ],
      "explanation": "原投资在合并报表中以购买日公允价值重新计量。",
      "tags": [
        "第二十一章",
        "企业合并"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-400",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "原持有交易性金融资产增资取得控制，在个别报表中：借：长期股权投资；贷：{{0}}、投资收益和新对价。",
      "answer": [
        "交易性金融资产"
      ],
      "explanation": "长期股权投资初始成本以原金融资产公允价值和新增对价公允价值为基础。",
      "tags": [
        "第二十一章",
        "分步取得控制"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-401",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "原持有其他权益工具投资增资取得控制时，原累计其他综合收益通常转入{{0}}和{{1}}。",
      "answer": [
        "盈余公积",
        "利润分配——未分配利润"
      ],
      "explanation": "权益工具投资处置或转换时不计入当期损益。",
      "tags": [
        "第二十一章",
        "分步取得控制"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-402",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "购买日合并报表中，资产评估增值通常确认相关资产、递延所得税负债并计入____。",
      "answer": "资本公积",
      "explanation": "递延所得税负债按评估增值乘适用所得税税率计算。",
      "tags": [
        "第二十一章",
        "购买日合并"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-403",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "商誉＝合并成本－被购买方可辨认净资产{{0}}×{{1}}。",
      "answer": [
        "公允价值",
        "持股比例"
      ],
      "explanation": "如果只给出净资产账面价值，需考虑评估增值的所得税影响。",
      "tags": [
        "第二十一章",
        "合并商誉"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-404",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "购买日抵销长期股权投资时：借：股本、资本公积、其他综合收益、盈余公积、未分配利润、商誉；贷：{{0}}、{{1}}。",
      "answer": [
        "长期股权投资",
        "少数股东权益"
      ],
      "explanation": "少数股东权益按子公司可辨认净资产公允价值份额计算。",
      "tags": [
        "第二十一章",
        "抵销长期股权投资"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-405",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "购买日资产评估增值在以后期间，应将本年多计的折旧或摊销计入{{0}}，并相应调减{{1}}或无形资产。",
      "answer": [
        "管理费用",
        "固定资产"
      ],
      "explanation": "存货评估增值对外出售时调整营业成本。",
      "tags": [
        "第二十一章",
        "购买日公允价值调整"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-406",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "合并报表中对子公司权益法调整常称“三补一调”：按调整后净利润确认{{0}}，按其他综合收益确认{{1}}。",
      "answer": [
        "投资收益",
        "其他综合收益"
      ],
      "explanation": "还包括其他权益变动调整及现金股利调整。",
      "tags": [
        "第二十一章",
        "权益法调整"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-407",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "子公司宣告现金股利时，合并调整：借：{{0}}；贷：{{1}}。",
      "answer": [
        "投资收益",
        "长期股权投资"
      ],
      "explanation": "金额按母公司享有份额计算。",
      "tags": [
        "第二十一章",
        "权益法调整"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-408",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "年末编制合并报表时，抵销子公司利润分配：借：投资收益、少数股东损益、未分配利润——年初；贷：{{0}}、{{1}}。",
      "answer": [
        "提取盈余公积",
        "年末未分配利润"
      ],
      "explanation": "还应按题目列示对股东分配项目。",
      "tags": [
        "第二十一章",
        "投资收益抵销"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-409",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "本期内部存货交易且期末未对外出售时，抵销未实现利润：借：{{0}}；贷：{{1}}。",
      "answer": [
        "营业成本",
        "存货"
      ],
      "explanation": "先抵销全部内部销售，再抵销留存存货虚增价值。",
      "tags": [
        "第二十一章",
        "内部存货交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-410",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "抵销内部存货未实现利润的所得税影响：借：{{0}}；贷：{{1}}。",
      "answer": [
        "递延所得税资产",
        "所得税费用"
      ],
      "explanation": "金额为未实现利润乘所得税税率。",
      "tags": [
        "第二十一章",
        "内部存货交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-411",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "本期内部固定资产交易未实现利润的抵销：借：营业收入；贷：{{0}}、{{1}}。",
      "answer": [
        "营业成本",
        "固定资产"
      ],
      "explanation": "固定资产中保留内部销售形成的未实现利润。",
      "tags": [
        "第二十一章",
        "内部固定资产交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-412",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "抵销本期因内部固定资产交易多计提的折旧：借：{{0}}；贷：{{1}}。",
      "answer": [
        "固定资产",
        "管理费用"
      ],
      "explanation": "以后期间对上期影响通过未分配利润——年初抵销。",
      "tags": [
        "第二十一章",
        "内部固定资产交易"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-413",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "内部应收应付款抵销：借：{{0}}；贷：{{1}}。",
      "answer": [
        "应付账款",
        "应收账款"
      ],
      "explanation": "通常按含税金额抵销。",
      "tags": [
        "第二十一章",
        "内部债权债务"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-414",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "抵销内部应收账款计提的坏账准备：借：{{0}}；贷：{{1}}。",
      "answer": [
        "应收账款",
        "信用减值损失"
      ],
      "explanation": "同时需考虑递延所得税影响。",
      "tags": [
        "第二十一章",
        "内部债权债务"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-415",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计政策变更通常采用____法进行会计处理。",
      "answer": "追溯调整",
      "explanation": "不切实可行时采用未来适用法。",
      "tags": [
        "第二十二章",
        "会计政策变更"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-416",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计估计变更通常采用____法进行会计处理。",
      "answer": "未来适用",
      "explanation": "不调整以前期间的比较报表。",
      "tags": [
        "第二十二章",
        "会计估计变更"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-417",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "发出存货计价方法的变更属于{{0}}变更；固定资产折旧年限的变更属于{{1}}变更。",
      "answer": [
        "会计政策",
        "会计估计"
      ],
      "explanation": "二者处理方法不同。",
      "tags": [
        "第二十二章",
        "政策与估计"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-418",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "投资性房地产后续计量由成本模式变更为公允价值模式，属于____变更。",
      "answer": "会计政策",
      "explanation": "该变更通常采用追溯调整法。",
      "tags": [
        "第二十二章",
        "会计政策变更"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-419",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "坏账准备计提比例、存货可变现净值估计和预计负债最佳估计数的变更，均属于____变更。",
      "answer": "会计估计",
      "explanation": "反映新信息或新情况，不是前期差错。",
      "tags": [
        "第二十二章",
        "会计估计变更"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-420",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "前期差错导致增加利润时：借：有关科目；贷：{{0}}。",
      "answer": [
        "以前年度损益调整"
      ],
      "explanation": "减少利润或增加亏损时作相反分录。",
      "tags": [
        "第二十二章",
        "差错更正"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-421",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "前期差错导致净利润增加并调增盈余公积：借：{{0}}；贷：{{1}}。",
      "answer": [
        "利润分配——未分配利润",
        "盈余公积"
      ],
      "explanation": "净利润减少时方向相反。",
      "tags": [
        "第二十二章",
        "差错更正"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-422",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "会计政策变更涉及损益项目时通常直接替换为____。",
      "answer": "留存收益",
      "explanation": "前期差错更正则先通过以前年度损益调整。",
      "tags": [
        "第二十二章",
        "比较"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-423",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "对资产负债表日已经存在的情况提供新证据的，属于{{0}}事项；日后才新发生的情况，属于{{1}}事项。",
      "answer": [
        "调整",
        "非调整"
      ],
      "explanation": "判断关键是事项所反映的情况在资产负债表日是否已存在。",
      "tags": [
        "第二十三章",
        "日后事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-424",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "资产负债表日后发现财务报表舞弊或差错，通常属于____事项。",
      "answer": "调整",
      "explanation": "说明错报在报告日已经存在。",
      "tags": [
        "第二十三章",
        "调整事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-425",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "资产负债表日后发生重大自然灾害导致资产重大损失，通常属于____事项。",
      "answer": "非调整",
      "explanation": "一般只披露、不调整报表金额。",
      "tags": [
        "第二十三章",
        "非调整事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-426",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "资产负债表日后董事会拟定或股东大会批准的利润分配方案，属于____事项。",
      "answer": "非调整",
      "explanation": "通常在附注中披露。",
      "tags": [
        "第二十三章",
        "非调整事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-427",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "前期差错更正与日后调整事项涉及损益时，均先通过{{0}}核算，再转入{{1}}。",
      "answer": [
        "以前年度损益调整",
        "留存收益"
      ],
      "explanation": "会计政策变更通常直接调整留存收益。",
      "tags": [
        "第二十三章",
        "日后事项"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-428",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "资产负债表日后调整事项导致增加所得税费用：借：{{0}}；贷：{{1}}。",
      "answer": [
        "以前年度损益调整",
        "应交税费——应交所得税"
      ],
      "explanation": "减少所得税费用时作相反分录。",
      "tags": [
        "第二十三章",
        "日后事项"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-429",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "资产负债表日后非调整事项的基本处理是____而不调整。",
      "answer": "披露",
      "explanation": "但若事项影响重大，应充分说明性质和财务影响。",
      "tags": [
        "第二十三章",
        "日后事项"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-430",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "预算会计以{{0}}、预算支出和预算结余为会计要素；财务会计以资产、负债、净资产、收入和{{1}}为要素。",
      "answer": [
        "预算收入",
        "费用"
      ],
      "explanation": "二者分别反映预算执行和财务运行。",
      "tags": [
        "第二十四章",
        "政府会计"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-431",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "预算会计以{{0}}为基础；财务会计以{{1}}为基础。",
      "answer": [
        "收付实现制",
        "权责发生制"
      ],
      "explanation": "对应“双基础”要求。",
      "tags": [
        "第二十四章",
        "政府会计"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-432",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "决算报告以{{0}}核算生成的数据为准；财务报告以{{1}}核算生成的数据为准。",
      "answer": [
        "预算会计",
        "财务会计"
      ],
      "explanation": "对应“双报告”要求。",
      "tags": [
        "第二十四章",
        "政府会计"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-433",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "财政直接支付收到通知时，预算会计：借：行政支出或事业支出；贷：{{0}}。",
      "answer": [
        "财政拨款预算收入"
      ],
      "explanation": "财务会计同时确认财政拨款收入。",
      "tags": [
        "第二十四章",
        "财政直接支付"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-434",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "财政直接支付收到通知时，财务会计：借：库存物品、固定资产等；贷：{{0}}。",
      "answer": [
        "财政拨款收入"
      ],
      "explanation": "按取得资产或发生费用确认借方科目。",
      "tags": [
        "第二十四章",
        "财政直接支付"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-435",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "年末财政直接支付预算指标与实际支出差额，预算会计：借：资金结存——财政应返还额度；贷：{{0}}。",
      "answer": [
        "财政拨款预算收入"
      ],
      "explanation": "财务会计相应确认财政应返还额度——财政直接支付。",
      "tags": [
        "第二十四章",
        "财政直接支付"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-436",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "财政授权支付收到通知时，预算会计：借：资金结存——零余额账户用款额度；贷：{{0}}。",
      "answer": [
        "财政拨款预算收入"
      ],
      "explanation": "财务会计借记零余额账户用款额度，贷记财政拨款收入。",
      "tags": [
        "第二十四章",
        "财政授权支付"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-437",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "财政授权支付支用额度时，预算会计：借：行政支出或事业支出；贷：{{0}}。",
      "answer": [
        "资金结存——零余额账户用款额度"
      ],
      "explanation": "财务会计同时贷记零余额账户用款额度。",
      "tags": [
        "第二十四章",
        "财政授权支付"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-438",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "财政授权支付年末注销未用额度时，预算会计：借：资金结存——财政应返还额度；贷：{{0}}。",
      "answer": [
        "资金结存——零余额账户用款额度"
      ],
      "explanation": "下年恢复额度时作相反分录。",
      "tags": [
        "第二十四章",
        "财政授权支付"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-439",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "下年恢复零余额账户用款额度，财务会计：借：{{0}}；贷：财政应返还额度——财政授权支付。",
      "answer": [
        "零余额账户用款额度"
      ],
      "explanation": "与上年末注销处理相衔接。",
      "tags": [
        "第二十四章",
        "财政授权支付"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-440",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "部门（单位）合并报表通常不纳入所属____及其下属单位。",
      "answer": "企业",
      "explanation": "执行企业会计准则制度的事业单位等也不纳入。",
      "tags": [
        "第二十四章",
        "合并报表"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-441",
      "section": "中级会计实务",
      "type": "blank",
      "prompt": "与行政机关脱钩的行业协会、商会通常____纳入部门（单位）合并范围。",
      "answer": "不",
      "explanation": "无财政拨款关系的社会组织一般也不纳入。",
      "tags": [
        "第二十四章",
        "合并报表"
      ],
      "difficulty": 2
    },
    {
      "id": "zjkj-442",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "收到非现金受托代理资产时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "受托代理资产",
        "受托代理负债"
      ],
      "explanation": "转赠或转出时作相反分录。",
      "tags": [
        "第二十五章",
        "受托代理业务"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-443",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "转赠非现金受托代理资产时：借：{{0}}；贷：{{1}}。",
      "answer": [
        "受托代理负债",
        "受托代理资产"
      ],
      "explanation": "受托代理资产并非组织自身资产。",
      "tags": [
        "第二十五章",
        "受托代理业务"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-444",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "收到现金、银行存款等受托代理资产时，贷方确认{{0}}。",
      "answer": [
        "受托代理负债"
      ],
      "explanation": "借方在现金、银行存款或其他货币资金下设置受托代理资产明细。",
      "tags": [
        "第二十五章",
        "受托代理业务"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-445",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "接受捐赠资产时：借：现金、存货、固定资产等；贷：{{0}}或{{1}}。",
      "answer": [
        "捐赠收入——限定性收入",
        "捐赠收入——非限定性收入"
      ],
      "explanation": "按捐赠限制性质确认收入明细。",
      "tags": [
        "第二十五章",
        "捐赠收入"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-446",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "附条件捐赠存在需返还的现时义务时，按需偿还金额：借：管理费用；贷：{{0}}。",
      "answer": [
        "其他应付款"
      ],
      "explanation": "反映组织承担的返还义务。",
      "tags": [
        "第二十五章",
        "附条件捐赠"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-447",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "限定性捐赠收入的限制在当期解除时：借：捐赠收入——限定性收入；贷：{{0}}。",
      "answer": [
        "捐赠收入——非限定性收入"
      ],
      "explanation": "当期解除限制才可转列非限定性收入。",
      "tags": [
        "第二十五章",
        "限定性捐赠"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-448",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "期末结转限定性捐赠收入：借：捐赠收入——限定性收入；贷：{{0}}。",
      "answer": [
        "限定性净资产"
      ],
      "explanation": "结转后捐赠收入科目应无余额。",
      "tags": [
        "第二十五章",
        "期末结转"
      ],
      "difficulty": 3
    },
    {
      "id": "zjkj-449",
      "section": "中级会计实务",
      "type": "cloze_subjective",
      "prompt": "期末结转非限定性捐赠收入：借：捐赠收入——非限定性收入；贷：{{0}}。",
      "answer": [
        "非限定性净资产"
      ],
      "explanation": "可类比一般企业将本年利润结转留存收益。",
      "tags": [
        "第二十五章",
        "期末结转"
      ],
      "difficulty": 3
    }
  ]
};


