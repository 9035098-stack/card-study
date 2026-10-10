/*
 * 题库格式：每题均含 id、section、type、prompt、answer、explanation、tags、difficulty。
 * type 可为 blank、cloze_subjective、free_response。
 * cloze_subjective 的 prompt 中用 {{0}}、{{1}}… 标记挖空位置，answer 为对应答案数组。
 */
globalThis.QUESTION_BANK = {
  version: "1.0.0",
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

