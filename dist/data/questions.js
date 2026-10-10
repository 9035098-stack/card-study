/*
 * 题库格式：每题均含 id、section、type、prompt、answer、explanation、tags、difficulty。
 * type 可为 blank、cloze_subjective、free_response。
 * cloze_subjective 的 prompt 中用 {{0}}、{{1}}… 标记挖空位置，answer 为对应答案数组。
 */
globalThis.QUESTION_BANK = {
  version: "1.1.0",
  updatedAt: "2026-10-10",
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
    }
  ]
};

