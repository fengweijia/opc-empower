# OPC赚钱军师 (opc001) 🐾

OPC赚钱军师是一个AI驱动的赚钱助手，帮助OPC（一人公司）创业者生成营销文案、制定赚钱策略、设计成交流程。

> 💡 **OPC** = One Person Company，一人公司

## 🎯 项目特点

### 核心设计理念
- **用户数据自主**：用户数据存储在用户自己的飞书多维表格中
- **AI成本可控**：用户使用自己的大模型API Key，成本完全透明
- **直复式营销**：基于AITDA模型的直复式营销方法论
- **苹果式极简设计**：深色模式 + 赛博工匠感UI

### 四大赚钱Agent
1. **赚钱文案Agent** - 朋友圈卖货文案、私聊话术、小红书种草等
2. **赚钱策略Agent** - 定位、定价、获客、竞品分析
3. **赚钱流程Agent** - 成交漏斗、发售脚本、自动化流程
4. **成交转化Agent** - 价格锚定、异议处理、社会证明

## 🚀 快速开始

### 前置要求
- Node.js >= 18.0.0
- npm 或 yarn

### 安装步骤

```bash
# 1. 克隆项目
cd /root/.openclaw/workspace/opc001

# 2. 安装前端依赖
cd frontend
npm install

# 3. 启动开发服务器
npm run dev:weapp

# 4. 在微信开发者工具中打开
# 导入 frontend/dist 目录
```

### 配置飞书

1. 打开 https://open.feishu.cn/app
2. 创建应用或使用现有应用
3. 添加权限：
   - `contact:contact.base:readonly`
   - `bitable:app`
   - `sheets:spreadsheet`
4. 获取App ID和App Secret

### 配置AI

支持的AI提供商：
- OpenAI (GPT-4/GPT-3.5)
- Anthropic (Claude)
- DeepSeek
- 硅基流动 (SiliconFlow)

---

## 📖 使用流程

### 第一次使用
1. 打开小程序 → 进入"我的" → "设置"
2. 配置飞书信息（App ID、App Secret、多维表格App Token、表格ID）
3. 连接测试通过后保存
4. （可选）配置AI API Key
5. 开始生成文案！

### 生成文案
1. 首页点击"赚钱文案"
2. 选择文案类型（如"朋友圈卖货文案"）
3. 填写产品信息和目标客户
4. 点击"生成文案"
5. 复制使用或保存到飞书

---

## 🔧 开发指南

### 后端API测试
```bash
cd backend

# 启动测试服务器
node test-server.js

# 运行端到端测试
node test-simple-e2e.js
```

### API端点
- 健康检查：`POST / { action: 'health' }`
- 获取Agent列表：`POST / { action: 'getAgents' }`
- 执行Agent：`POST / { action: 'executeAgent' }`
- 测试飞书连接：`POST / { action: 'testLark' }`
- 获取历史记录：`POST / { action: 'getHistory' }`

### 技术栈
- 前端：Taro 4.0.0 + React 18 + Zustand + SCSS
- 后端：Node.js Serverless (Express / 云函数兼容)
- 数据：飞书多维表格 API (支持单表多类型隔离)
- AI：OpenAI / Claude / DeepSeek / SiliconFlow (内建重试退避与降级解析)

## 🚀 技术架构

### 前端 (微信小程序)
- **框架**：Taro 4.0.0 + React 18
- **状态管理**：Zustand
- **样式**：SCSS + 自定义设计系统
- **跨端**：支持微信小程序，未来可扩展H5

### 后端 (Serverless)
- **运行时**：Node.js Serverless函数
- **AI服务**：支持OpenAI/Claude/DeepSeek/SiliconFlow
- **数据存储**：飞书多维表格API
- **部署**：阿里云/腾讯云函数计算

### 设计系统
- **主色调**：`#0D0D0D` (纯黑背景) + `#00E5A0` (赚钱绿)
- **字体**：苹方/SF Pro Display系统字体
- **圆角**：8px/12px/16px/24px渐进式
- **动画**：0.15s/0.3s/0.5s三级时长

## 📁 项目结构

```
opc001/
├── frontend/                    # 微信小程序前端
│   ├── src/
│   │   ├── pages/              # 页面组件
│   │   │   ├── home/           # 首页
│   │   │   ├── copywriting/    # 赚钱文案
│   │   │   ├── strategy/       # 赚钱策略
│   │   │   ├── process/        # 赚钱流程
│   │   │   ├── conversion/     # 成交转化
│   │   │   ├── history/        # 历史记录
│   │   │   ├── profile/        # 我的页面
│   │   │   └── settings/       # 设置页面
│   │   ├── components/         # 公共组件
│   │   ├── services/           # API服务
│   │   ├── store/              # 状态管理
│   │   ├── styles/             # 全局样式
│   │   └── utils/              # 工具函数
│   ├── config/                 # Taro配置
│   └── package.json
│
├── backend/                    # Serverless后端
│   ├── src/
│   │   ├── agents/            # Agent管理器
│   │   ├── services/          # AI/飞书服务
│   │   ├── utils/             # 工具函数
│   │   └── handlers/          # API处理器
│   └── index.js               # 主入口
│
└── docs/                      # 项目文档
    ├── 前端设计规范.md
    ├── AI功能开发规范.md
    └── 并行开发计划.md
```

## 🔧 开发环境搭建

### 前端开发
```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev:weapp

# 构建生产版本
npm run build:weapp
```

### 后端开发
```bash
# 进入后端目录
cd backend

# 安装依赖
npm install

# 本地测试
node index.js
```

## 📱 页面功能

### 首页 (Home)
- 今日赚钱洞察
- 四大Agent快速入口
- 用户档案概览

### 赚钱文案 (Copywriting)
- 朋友圈卖货文案生成
- 私聊成交话术
- 小红书种草文案
- 公众号销售长文
- 社群发售脚本
- 文案诊断优化

### 赚钱策略 (Strategy)
- 赚钱定位分析
- 定价策略建议
- 获客渠道规划
- 竞品分析报告

### 赚钱流程 (Process)
- 成交漏斗设计
- 发售脚本生成
- 自动化流程规划
- 转介绍系统设计

### 成交转化 (Conversion)
- 价格锚定技巧
- 异议处理话术
- 社会证明应用
- 稀缺紧迫制造
- 追加销售策略

### 设置 (Settings)
- 飞书API配置
- 大模型API配置
- 用户信息配置
- 连接测试功能

## 🔗 API集成

### 飞书多维表格
- 用户自行创建飞书应用
- 获取App ID和App Secret
- 创建多维表格存储数据
- 数据完全由用户控制

### 大模型API
- 支持OpenAI GPT-4/3.5
- 支持Claude 3系列
- 支持DeepSeek国内模型
- 支持SiliconFlow代理
- 用户自行配置API Key

## 🎨 设计规范

### 颜色系统
```scss
--color-bg-primary: #0D0D0D      // 纯黑背景
--color-bg-card: #1A1A2E         // 深灰蓝卡片
--color-accent: #00E5A0          // 赚钱绿强调
--color-text-primary: #F5F5F7    // 主要文字
```

### 间距系统
```scss
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
```

### 字体系统
```scss
--font-size-xs: 12px
--font-size-sm: 14px
--font-size-base: 16px
--font-size-lg: 18px
--font-size-xl: 20px
```

## 📊 开发进度

### 已完成 (v1.0 - MVP 闭环)
- ✅ 项目架构设计与前端基础框架
- ✅ 前端交互状态矩阵（骨架屏、状态安抚跑马灯、空/错误态）
- ✅ 定制化 UI 打破 AI Slop（雷达图、30天地铁线路图、7天发售横向 Tab 与手机壳预览）
- ✅ AI服务契约化：强制 JSON Schema 输出与前端兜底解析
- ✅ AI服务高可用：超时控制与 429/5xx 退避重试机制
- ✅ 知识底座与数据闭环：飞书单表多类型存储（history / prompt_version / playbook）

### 进行中 (v1.1 - 进化系统与向量增强)
- 🔄 自动化 PromptOptimizer 与 A/B 测试闭环
- 🔄 用户反馈（Feedback）的结构化收集与分析
- 🔄 RAG 向量数据库选型与集成准备

### 待完成
- ⏳ Serverless 函数的云端生产环境一键部署脚本
- ⏳ 性能优化与更深度的微信小程序审核适配
- ⏳ 新手引导（赚钱档案初始化引导流程）

## 🤝 团队协作

### 三线并行开发
1. **产品页面线** (云飞负责) - 前端UI实现
2. **核心AI线** (智源负责) - Agent功能开发
3. **配置集成线** (梁枫+皓宇负责) - 后端集成

### 每日站会
- 时间：每天9:00
- 内容：进度同步、问题解决、任务分配

### 进度汇报
- 频率：每2小时自动汇报
- 渠道：QQ/飞书消息推送
- 内容：开发进展、问题风险、下一步计划

## 🚨 注意事项

### 飞书API权限
- 需要管理员授权`contact:contact.base:readonly`权限
- 授权链接：`https://open.feishu.cn/app/cli_xxxxxxxxxxxxxxxx/auth`

### 微信小程序审核
- 名称可能需要调整（OPC赚钱军师可能受限）
- 功能描述需要清晰明确
- 需要提供隐私政策

### 成本控制
- 用户自行承担AI API调用成本
- 建议使用DeepSeek等成本较低模型
- 提供用量统计和成本预估

## 📞 联系方式

- **项目负责人**：JJ 🐾
- **技术架构师**：梁枫
- **AI工程师**：智源
- **前端工程师**：云飞
- **后端工程师**：皓宇
- **测试工程师**：严谨
- **产品设计师**：雅芯

---

**让每个OPC都能用AI赚到钱！** 🚀💰
