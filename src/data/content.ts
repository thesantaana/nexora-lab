export const projects = [
  {
    id: '01', slug: 'civion', title: 'CIVION',
    zh: '城市井盖智能识别系统', en: 'Urban Manhole Intelligence System',
    summaryZh: '融合目标检测、开集可信认证、地图监控与人工复核的智慧城市桌面系统。',
    summaryEn: 'A smart-city desktop system combining object detection, open-set verification, map monitoring and human review.',
    stack: ['Qt / QML', 'C++17', 'YOLO', 'TensorFlow Lite', 'ModelArts'],
    images: ['/assets/projects/civion-login.png']
  },
  {
    id: '02', slug: 'carenexus', title: 'CareNexus',
    zh: '颐联护理培训平台', en: 'Intelligent Care Training Platform',
    summaryZh: '贯通资源发布、在线学习、题库考试、错题反馈与 AI 辅助解析的培训闭环。',
    summaryEn: 'A complete training loop across content, learning, exams, feedback and AI-assisted explanation.',
    stack: ['React', 'Vue 3', 'Spring Boot', 'MySQL', 'AI Assistant'],
    images: ['/assets/projects/carenexus-hero.png']
  },
  {
    id: '03', slug: 'solar', title: 'GUANGFU',
    zh: '光伏预测与分析大数据平台', en: 'Solar Forecasting & Analytics Platform',
    summaryZh: '覆盖电站、设备、发电数据、预测任务、模型管理和智能报告的一体化平台。',
    summaryEn: 'An integrated platform for plants, devices, generation data, forecasts, models and intelligent reporting.',
    stack: ['Spring Boot', 'MyBatis-Plus', 'MySQL', 'Nginx', 'ReAct Agent', 'SSE'],
    images: ['/assets/projects/solar-hero.png', '/assets/projects/solar-center.png', '/assets/projects/solar-dashboard.png', '/assets/projects/solar-station.png']
  },
  {
    id: '04', slug: 'legal', title: 'LAW AGENTS',
    zh: '多 Agent 法律教育系统', en: 'Multi-Agent Legal Education System',
    summaryZh: '将知识检索、案例分析、结果校验与教学反馈拆解为多 Agent 协作流程。',
    summaryEn: 'A multi-agent workflow for retrieval, case analysis, validation and instructional feedback.',
    stack: ['LLM', 'Multi-Agent', 'RAG', 'Context Orchestration', 'Streaming UI'],
    images: ['/assets/projects/legal-hero.jpg', '/assets/projects/legal-court.jpg', '/assets/projects/legal-learn.jpg']
  }
] as const;

export const services = [
  { no: '01', zh: '企业网站与宣传站', en: 'Websites & Landing Pages', detailZh: '品牌官网、产品落地页、作品集与活动页面。', detailEn: 'Brand sites, product landing pages, portfolios and campaign experiences.' },
  { no: '02', zh: '管理系统与软件', en: 'Systems & Software', detailZh: '业务后台、桌面软件、数据平台与旧系统升级。', detailEn: 'Admin systems, desktop software, data platforms and legacy modernization.' },
  { no: '03', zh: '小程序与移动应用', en: 'Mini Programs & Apps', detailZh: '面向用户的轻量产品、微信小程序与移动端应用。', detailEn: 'User-facing products, WeChat mini programs and mobile applications.' },
  { no: '04', zh: 'AI 与智能自动化', en: 'AI & Intelligent Automation', detailZh: '知识库、智能体、视觉识别、内容生成与业务自动化。', detailEn: 'Knowledge bases, agents, computer vision, generation and workflow automation.' },
  { no: '05', zh: '部署与持续支持', en: 'Delivery & Support', detailZh: '源码、文档、部署上线以及验收后 60 天原需求范围售后。', detailEn: 'Source, documentation, deployment and 60-day post-acceptance support within scope.' }
] as const;
