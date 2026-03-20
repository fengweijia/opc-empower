# OPC 赚钱军师 (OPC-Empower) v2.0 Web-First

> 一个专为独立开发者、一人公司（OPC）打造的“无羞耻感” AI 营销辅助工具。

## 🌟 核心理念 (The Pivot)

在 v1.0 阶段，我们尝试用直复式营销框架（AITDA）去“教”独立开发者如何卖货。但实际测试发现，独立创作者普遍存在**“营销羞耻感”**和极高的**认知负担**。

因此，v2.0 进行了**全局重构**：
- **Web-First 架构**：放弃限制极多的小程序，全面转向 Next.js + SSE 流式输出的丝滑 Web 体验。
- **Zero-Form 极简交互**：没有繁琐的档案填报，上来就是一个像 Claude 一样的统一对话框。
- **SocialCard (社交卡片)**：把 AI 生成的“微商风”文案，转化为一张极具极客工匠感、带有深色光晕的高颜值分享卡片，一键保存图片，**用设计消解营销羞耻感**。
- **Vibe Check (氛围调教)**：通过点击按钮一键“去微商味”或“加极客梗”，建立自然的数据迭代飞轮。

## 🏗 技术栈

*   **前端**：Next.js 16 (App Router), React, Tailwind CSS, Framer Motion, html2canvas
*   **后端**：Node.js, Express, Server-Sent Events (SSE) 流式接口
*   **AI 引擎**：支持接入 SiliconFlow (DeepSeek-V3) / OpenAI 兼容接口，内置多重防呆正则清洗和重试机制。

## 🚀 本地快速启动

### 1. 启动后端 (API 服务)

进入 `backend` 目录，安装依赖并启动服务：

```bash
cd backend
npm install
node index.js
```
*服务将运行在 `http://localhost:3000`，提供 `/api/chat` 流式接口。*

### 2. 启动前端 (Web 界面)

打开一个新的终端，进入 `frontend` 目录：

```bash
cd frontend
npm install
npm run dev
```
*前端将运行在 `http://localhost:3001`。*

### 3. 配置 API Key
1. 在浏览器中打开 `http://localhost:3001`。
2. 点击右上角的 **"API 设置"**。
3. 输入你的大模型 API Key（默认配置为 SiliconFlow 的 DeepSeek 模型）。
4. 开始对话体验！

## 📁 目录结构

```
.
├── backend/                  # Node.js 后端服务
│   ├── src/
│   │   ├── agents/           # 核心 Agent 逻辑
│   │   └── services/         # AIService (含重试机制), LarkService
│   └── index.js              # 统一入口，包含 /api/chat SSE 路由
├── frontend/                 # Next.js 前端应用 (v2.0 新增)
│   ├── src/
│   │   ├── app/              # App Router 页面 (包含核心聊天 UI)
│   │   └── components/       # UI 组件 (SocialCard 社交卡片)
│   └── tailwind.config.js
├── frontend_taro_archive/    # (已归档) v1.0 Taro 小程序前端
└── docs/                     # 项目文档与评审报告
    ├── design/               # OPCv2.0 架构设计规范
    └── reviews/              # 工程审计与设计评审报告
```

## 🎯 10星产品特性演示

1. **零输入启动**：在对话框输入“我写了一个帮人自动回复微信的 Python 脚本”。
2. **洞察分离**：AI 会首先输出 `[军师洞察]` 帮你分析痛点，随后生成 `[SocialCard]`。
3. **氛围调教 (Vibe Check)**：点击卡片下方的“太像微商了，克制点”，AI 会自动重写卡片。
4. **一键导出**：点击“存为图片”，直接下载带有精美样式和水印的高清图片，发圈毫无压力。
