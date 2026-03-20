# gstack 详细使用说明文档（OPC 项目专用版 · TRAE/OpenClaw 适配）

> 📅 创建日期：2026-03-19
> 🎯 目标：用 gstack 接手管理 OPC 项目，从 demo 到产品级别
> 🔧 环境：TRAE（OpenClaw）
> 📚 参考来源：https://github.com/garrytan/gstack

---

## 一、gstack 简介

### 1.1 什么是 gstack？

**gstack** 是 Garry Tan（YC 总裁 & CEO）的开源软件工厂。它将 Claude Code 变成一个你真正管理的虚拟工程团队。

**核心特点：**
- 🎯 **15 个专家角色** - CEO、工程经理、设计师、QA 等
- 🔄 **完整 sprint 工作流** - Think → Plan → Build → Review → Test → Ship → Reflect
- 🚀 **并行开发** - 10-15 个 sprint 同时进行，一个人 = 20 人团队
- ✅ **生产级验证** - Garry Tan 本人 60 天写 60 万行代码（35% 测试）

**Garry Tan 的成果：**
- 60 天：60 万行生产代码（35% 测试）
- 每天：10,000-20,000 行可用代码
- 最近 7 天：140,751 行新增，362 次提交

---

## 二、前置检查（你已完成）

### 2.1 安装要求确认（TRAE/OpenClaw 环境）

✅ **TRAE/OpenClaw** - 已安装（你正在使用）
✅ **Git** - 已安装
✅ **Bun v1.0+** - 需确认
✅ **gstack** - 你说已安装

### 2.2 验证 gstack 安装（TRAE 环境）

**检查安装：**

```bash
# 检查 gstack 目录是否存在
ls -la ~/.claude/skills/gstack/

# 如果不存在，重新安装：
git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack
./setup
```

### 2.3 配置 TRAE/OpenClaw 使用 gstack

**在 TRAE 中配置 gstack 有两种方式：**

#### 方式 A：在 OpenClaw workspace 的 `.agent/config.json` 中配置

**编辑 `/root/.openclaw/workspace/.agent/config.json`，添加 gstack skills 路径：**

```json
{
  "skills": {
    "directories": [
      "~/.claude/skills/gstack",
      "./skills"
    ]
  }
}
```

#### 方式 B：将 gstack 复制到 OpenClaw 的 skills 目录

```bash
# 复制 gstack 到 OpenClaw workspace
cp -Rf ~/.claude/skills/gstack /root/.openclaw/workspace/skills/gstack

# 或者创建软链接（更方便更新）
ln -s ~/.claude/skills/gstack /root/.openclaw/workspace/skills/gstack
```

### 2.4 在 TRAE 会话中激活 gstack

**每次在 TRAE 中开始新会话时，告诉 AI：**

```
请加载并使用 gstack 技能。gstack skills 位于：
- ~/.claude/skills/gstack/
- 或 /root/.openclaw/workspace/skills/gstack/

gstack 可用技能：
- /office-hours（YC 办公时间，重新定义产品）
- /plan-ceo-review（CEO 视角评审）
- /plan-eng-review（工程经理，锁定架构）
- /plan-design-review（高级设计师）
- /design-consultation（设计合伙人）
- /review（资深工程师代码审查）
- /debug（调试专家）
- /design-review（会写代码的设计师）
- /qa（QA 负责人，真实浏览器测试）
- /qa-only（QA 报告员）
- /ship（发布工程师）
- /document-release（技术文档工程师）
- /retro（工程经理每周回顾）
- /browse（QA 工程师，真实浏览器）
- /setup-browser-cookies（会话管理器）

gstack 工作流：Think → Plan → Build → Review → Test → Ship → Reflect
```

---

## 三、gstack 15 个技能详解（OPC 项目适配）

### 3.1 完整技能列表

| 技能 | 角色 | OPC 项目用途 |
|:---|:---|:---|
| **/office-hours** | YC 办公时间 | 🔴 **第一步：重新定义 OPC 产品** |
| **/plan-ceo-review** | CEO/创始人 | 🔴 第二步：CEO 视角评审 |
| **/plan-eng-review** | 工程经理 | 🔴 第三步：架构锁定 |
| **/plan-design-review** | 高级设计师 | 🔴 第四步：设计评审 |
| **/design-consultation** | 设计合伙人 | 构建设计系统 |
| **/review** | 资深工程师 | 🔴 第五步：代码审查 |
| **/debug** | 调试专家 | 系统性调试 |
| **/design-review** | 会写代码的设计师 | 修复设计问题 |
| **/qa** | QA 负责人 | 🔴 第六步：QA 测试 |
| **/qa-only** | QA 报告员 | 纯 bug 报告 |
| **/ship** | 发布工程师 | 🔴 第七步：发布 |
| **/document-release** | 技术文档工程师 | 🔴 第八步：更新文档 |
| **/retro** | 工程经理 | 🔴 第九步：回顾总结 |
| **/browse** | QA 工程师 | 真实浏览器测试 |
| **/setup-browser-cookies** | 会话管理器 | 导入 cookie 测试认证页面 |

---

## 四、OPC 项目完整使用流程

### 4.1 一个 sprint 的完整流程（约 30 分钟）

```
Think → Plan → Build → Review → Test → Ship → Reflect

  ↓         ↓        ↓        ↓       ↓       ↓        ↓
/office-  /plan-   实现功能 /review  /qa     /ship    /retro
 hours    ceo-               (自动)   (自动)  (自动)   (每周)
          review
          /plan-
          eng-
          review
          /plan-
          design-
          review
```

### 4.2 详细步骤说明

#### 第一步：/office-hours（YC 办公时间）

**这是最重要的一步！在写任何代码前运行。**

**在 TRAE（OpenClaw）中输入：**

```
请使用 gstack 的 /office-hours 技能。

我要描述我的 OPC 项目：

项目定位：OPC创业者的AI赚钱军师
目标用户：独立开发者/独立创作者/自由职业者/副业创业者
核心价值：帮OPC一人公司快速跑通"文案→策略→流程→成交"的赚钱闭环
理论框架：直复式营销（AITDA模型）
当前状态：demo 阶段，有完整设计文档（OPCV2.0.md）
项目位置：/root/.openclaw/workspace/project/OPC/
我的目标：从 demo 开发到产品级别，并持续迭代

请按照 gstack 的 /office-hours 流程：
1. 问 6 个强制性问题（关于痛点，具体例子，不是假设）
2. 挑战我的框架
3. 提取出我没意识到的 5 个能力
4. 挑战 4 个前提（我同意、不同意或调整）
5. 生成 3 种实现方案，带工作量估算
6. 写设计文档

注意：项目文档在 /root/.openclaw/workspace/project/OPC/OPCV2.0.md，请先阅读。
```

**/office-hours 会做什么：**
1. 问 6 个强制性问题（关于痛点，具体例子，不是假设）
2. 挑战你的框架（你说"OPC 赋能平台"，它可能说"你实际在做一人公司的赚钱操作系统"）
3. 提取出你没意识到的 5 个能力
4. 挑战 4 个前提（你同意、不同意或调整）
5. 生成 3 种实现方案，带工作量估算
6. 写设计文档 → 自动输入到下游技能

**关键：** 不要跳过这一步！它会在写代码前重新定义产品。

---

#### 第二步：/plan-ceo-review（CEO/创始人视角）

**在 /office-hours 生成设计文档后运行：**

```
/plan-ceo-review
```

**/plan-ceo-review 会做什么：**
1. 读取 /office-hours 写的设计文档
2. 重新思考问题
3. 找到隐藏在需求里的 10 星产品
4. 4 种模式：
   - **Expansion** - 扩展
   - **Selective Expansion** - 选择性扩展
   - **Hold Scope** - 保持范围
   - **Reduction** - 缩减

---

#### 第三步：/plan-eng-review（工程经理视角）

**在 /plan-ceo-review 后运行：**

```
/plan-eng-review
```

**/plan-eng-review 会做什么：**
1. 锁定架构
2. 数据流图（ASCII 图）
3. 状态机
4. 错误路径
5. 测试矩阵
6. 失败模式
7. 安全关注点
8. 强制隐藏假设公开

---

#### 第四步：/plan-design-review（高级设计师视角）

**在 /plan-eng-review 后运行：**

```
/plan-design-review
```

**/plan-design-review 会做什么：**
1. 对每个设计维度评分 0-10
2. 解释什么是 10 分
3. 编辑计划以达到 10 分
4. AI Slop 检测
5. 交互式 - 每个设计选择一个 AskUserQuestion

---

#### 第五步：实现功能（Build）

**批准计划后，退出 plan mode，开始实现：**

```
批准计划。退出 plan mode。
```

**Claude 会做什么：**
- 自动写代码（Garry Tan 的例子：8 分钟写 2,400 行，11 个文件）
- 不需要你一步一步指挥

---

#### 第六步：/review（资深工程师代码审查）

**实现完成后运行：**

```
/review
```

**/review 会做什么：**
1. 发现通过 CI 但在生产中爆炸的 bug
2. 自动修复明显的问题
3. 标记完整性缺口
4. [AUTO-FIXED] - 自动修复了 2 个问题
5. [ASK] - 竞争条件 → 你批准修复

---

#### 第七步：/qa（QA 负责人测试）

**/review 后运行（如果有 staging URL）：**

```
/qa https://staging.youropcproject.com
```

**/qa 会做什么：**
1. 打开真实浏览器
2. 点击流程
3. 发现 bug
4. 原子提交修复
5. 重新验证
6. 为每个修复自动生成回归测试

**Garry Tan 说：** "/qa 让我从 6 个并行 worker 增加到 12 个。Claude Code 说'我看到问题'然后真的修复它，生成回归测试，验证修复——这改变了我的工作方式。"

---

#### 第八步：/ship（发布工程师发布）

**/qa 后运行：**

```
/ship
```

**/ship 会做什么：**
1. 同步 main
2. 运行测试
3. 审计覆盖率
4. 推送
5. 开 PR
6. 如果你没有测试框架，自动引导建立

**示例输出：**
```
Tests: 42 → 51 (+9 new)
PR: github.com/you/oppc/pull/42
```

---

#### 第九步：/document-release（技术文档工程师更新文档）

**/ship 后运行：**

```
/document-release
```

**/document-release 会做什么：**
1. 读取项目中的每个文档文件
2. 交叉引用 diff
3. 更新所有过时的内容
4. README、ARCHITECTURE、CONTRIBUTING、CLAUDE.md、TODOS — 全部自动保持最新

---

#### 第十步：/retro（工程经理每周回顾）

**每周运行一次：**

```
/retro
```

**/retro 会做什么：**
1. 团队感知的每周回顾
2. 个人分解
3. 发布 streak
4. 测试健康趋势
5. 增长机会

---

## 五、OPC 项目具体实施计划

### 5.1 第一个 sprint（今天）

**目标：** 试用 gstack 完整工作流在一个小功能上

**步骤：**

```
1. /office-hours
   - 描述 OPC 项目现状
   - 让它重新定义产品
   - 接受 3 种方案中的推荐

2. /plan-ceo-review
   - CEO 视角评审
   - 决定范围模式（Expansion/Hold/Reduction）

3. /plan-eng-review
   - 锁定架构
   - 确认数据流、错误路径、测试矩阵

4. /plan-design-review
   - 设计评审
   - AI Slop 检测

5. 批准计划，退出 plan mode
   - 看 Claude 自动写代码

6. /review
   - 代码审查
   - 自动修复明显问题

7. /qa（如果有 staging）
   - 真实浏览器测试
   - 自动生成回归测试

8. /ship
   - 发布
   - 开 PR

9. /document-release
   - 自动更新文档
```

### 5.2 并行开发（10-15 个 sprints 同时进行）

**一旦你熟悉了单个 sprint，就可以并行运行多个：**

| Sprint | 分支 | 功能 | 状态 |
|:---|:---|:---|:---|
| Sprint 1 | feature/copywriting-agent | Agent 1：赚钱文案智能体 | /office-hours |
| Sprint 2 | feature/strategy-agent | Agent 2：赚钱策略智能体 | /plan-eng-review |
| Sprint 3 | feature/funnel-agent | Agent 3：赚钱流程智能体 | Build |
| Sprint 4 | feature/conversion-agent | Agent 4：成交转化智能体 | /review |
| Sprint 5 | feature/dashboard | 数据面板 | /qa |
| Sprint 6 | feature/landing-page | 营销落地页 | /ship |
| ... | ... | ... | ... |
| Sprint 15 | ... | ... | ... |

**工具：** [Conductor](https://conductor.build) - 运行多个 Claude Code 会话并行

---

## 六、OPC 项目关键技能深度应用

### 6.1 /office-hours 在 OPC 项目中的应用

**输入提示模板：**

```
/office-hours

我要描述我的 OPC 项目：

【项目背景】
- 定位：OPC创业者的AI赚钱军师
- 目标用户：独立开发者/独立创作者/自由职业者/副业创业者
- 核心痛点：产品能力>营销能力，卡在"赚钱最后一公里"
- 核心价值："你负责打造好产品，我负责帮你卖出去"

【理论框架】
- 直复式营销（Direct Response Marketing）
- AITDA 模型：Attention → Interest → Trust → Desire → Action

【当前状态】
- 阶段：demo 阶段
- 文档：完整的 OPCV2.0.md 设计文档
- 代码：有 demo 代码（backend + frontend）

【4 个核心 Agent】
1. Agent 1：赚钱文案智能体
2. Agent 2：赚钱策略智能体
3. Agent 3：赚钱流程智能体
4. Agent 4：成交转化智能体

【我的目标】
- 从 demo 开发到产品级别
- 建立完整的测试体系（100% 覆盖目标）
- 建立 CI/CD 流程
- 持续迭代开发

请重新定义这个产品，挑战我的前提，生成 3 种实现方案。
```

### 6.2 /qa 在 OPC 项目中的应用

**测试重点：**
1. 微信小程序前端流程
2. 后端 API 端点
3. Agent 输出质量
4. 数据追踪完整性
5. 飞书集成

**运行 QA：**

```
/qa https://staging.youropcproject.com

请重点测试：
1. 用户赚钱档案创建流程
2. Agent 1 文案生成质量
3. 数据追踪埋点
4. 响应速度（< 3秒）
5. 移动端适配
```

### 6.3 /retro 在 OPC 项目中的应用

**每周一运行：**

```
/retro

请重点分析：
1. 上周发布的功能
2. 测试覆盖率趋势
3. 代码质量指标
4. 本周改进机会
```

---

## 七、故障排除

### 7.1 常见问题

| 问题 | 解决方案 |
|:---|:---|
| **技能不显示？** | `cd ~/.claude/skills/gstack && ./setup` |
| **/browse 失败？** | `cd ~/.claude/skills/gstack && bun install && bun run build` |
| **安装过时？** | 运行 `/gstack-upgrade` 或在 `~/.gstack/config.yaml` 设置 `auto_upgrade: true` |
| **Claude 说看不到技能？** | 确保项目的 `CLAUDE.md` 有 gstack section（见 2.3）|

### 7.2 验证安装

```bash
# 检查 gstack 目录
ls -la ~/.claude/skills/gstack/

# 检查 setup 是否运行过
ls -la ~/.claude/skills/gstack/dist/

# 测试一个技能（在 Claude Code 中）
/browse https://github.com/garrytan/gstack
```

---

## 八、最佳实践（Garry Tan 的经验）

### 8.1 关键原则

1. **设计是核心** - `/design-consultation` 不只是选字体，它研究你的领域，提出安全选择和创意风险，生成产品原型，写 DESIGN.md
2. **测试一切** - `/ship` 从零引导建立测试框架，每次 `/ship` 产生覆盖率审计，每个 `/qa` bug 修复生成回归测试，100% 测试覆盖是目标
3. **智能审查路由** - CEO 不需要看基础设施 bug 修复，后端更改不需要设计审查
4. **10-15 个并行 sprints** - 这是改变一切的地方，一个 sprint 强大，10 个并行是变革性的

### 8.2 Garry Tan 的建议

> "不要只 dabble（涉猎），要真正 work with（与之协作）。现在就搞清楚如何与它们一起工作的人将拥有巨大优势。这就是那个窗口。"

> "模型每周都在变得更好。一个人以过去需要 20 人团队的规模发布——我们正处在真实事物的黎明。"

---

## 九、下一步行动（立即执行）

### 9.1 今天要做的

1. ✅ **验证 gstack 安装**
   ```bash
   ls -la ~/.claude/skills/gstack/
   ```

2. ✅ **配置 OPC 项目的 CLAUDE.md**
   - 添加 gstack section（见 2.3）

3. ✅ **运行第一个 /office-hours**
   - 在 Claude Code 中打开 OPC 项目
   - 运行 /office-hours（用 6.1 的模板）
   - 让它重新定义 OPC 产品

4. ✅ **完整试用一个 sprint**
   - /office-hours → /plan-ceo-review → /plan-eng-review → /plan-design-review → Build → /review → /qa → /ship → /document-release

### 9.2 本周要做的

1. ✅ **3-5 个并行 sprints**
   - 不同功能，不同分支
   - 同时进行

2. ✅ **建立测试文化**
   - 100% 测试覆盖目标
   - 每个 bug 修复生成回归测试

3. ✅ **每周 /retro**
   - 每周一运行
   - 持续改进

---

## 十、参考资源

### 10.1 gstack 官方文档

- **GitHub**: https://github.com/garrytan/gstack
- **Skill Deep Dives**: https://github.com/garrytan/gstack/blob/main/docs/skills.md
- **Architecture**: https://github.com/garrytan/gstack/blob/main/ARCHITECTURE.md
- **Browser Reference**: https://github.com/garrytan/gstack/blob/main/BROWSER.md
- **Contributing**: https://github.com/garrytan/gstack/blob/main/CONTRIBUTING.md
- **Changelog**: https://github.com/garrytan/gstack/blob/main/CHANGELOG.md

### 10.2 OPC 项目文档

- **OPCV2.0.md**: /root/.openclaw/workspace/project/OPC/OPCV2.0.md
- **项目代码**: /root/.openclaw/workspace/project/OPC/opc-empower-platform-master/

---

## 十一、TRAE（OpenClaw）环境专门说明

### 11.1 TRAE 与 Claude Code 的区别

| 特性 | Claude Code | TRAE（OpenClaw）|
|:---|:---:|:---:|
| **技能调用方式** | `/skill-name` 斜杠命令 | 通过自然语言调用技能 |
| **技能目录** | `~/.claude/skills/` | `~/.openclaw/workspace/skills/` |
| **配置文件** | `CLAUDE.md` | `AGENTS.md` + `SOUL.md` + `USER.md` |

### 11.2 在 TRAE 中使用 gstack 的关键要点

**在 TRAE 中，没有 `/` 斜杠命令，所以要这样说：**

| gstack 技能 | TRAE 中怎么说 |
|:---|:---|
| `/office-hours` | "请使用 gstack 的 office-hours 技能" |
| `/plan-ceo-review` | "请使用 gstack 的 plan-ceo-review 技能" |
| `/plan-eng-review` | "请使用 gstack 的 plan-eng-review 技能" |
| `/review` | "请使用 gstack 的 review 技能进行代码审查" |
| `/qa` | "请使用 gstack 的 qa 技能进行测试" |
| `/ship` | "请使用 gstack 的 ship 技能发布" |

### 11.3 TRAE 会话启动模板（每次都用）

**每次在 TRAE 中开始新会话时，先发送这个：**

```
你好，请先确认：

1. 你知道 gstack 技能吗？gstack 是 Garry Tan（YC 总裁）的开源软件工厂。
2. gstack skills 位于：~/.claude/skills/gstack/ 或 /root/.openclaw/workspace/skills/gstack/
3. gstack 完整工作流：Think → Plan → Build → Review → Test → Ship → Reflect
4. gstack 15 个技能：
   - office-hours（YC 办公时间，重新定义产品）
   - plan-ceo-review（CEO 视角评审）
   - plan-eng-review（工程经理，锁定架构）
   - plan-design-review（高级设计师）
   - design-consultation（设计合伙人）
   - review（资深工程师代码审查）
   - debug（调试专家）
   - design-review（会写代码的设计师）
   - qa（QA 负责人，真实浏览器测试）
   - qa-only（QA 报告员）
   - ship（发布工程师）
   - document-release（技术文档工程师）
   - retro（工程经理每周回顾）
   - browse（QA 工程师，真实浏览器）
   - setup-browser-cookies（会话管理器）

我的 OPC 项目位于：/root/.openclaw/workspace/project/OPC/
项目设计文档：/root/.openclaw/workspace/project/OPC/OPCV2.0.md

请确认你理解 gstack，并准备好按照 gstack 流程工作。
```

### 11.4 TRAE 中 /office-hours 的完整输入模板

```
好的，请使用 gstack 的 office-hours 技能。

首先，请阅读 OPC 项目设计文档：/root/.openclaw/workspace/project/OPC/OPCV2.0.md

然后按照 gstack office-hours 流程：

【我的 OPC 项目描述】

项目定位：OPC创业者的AI赚钱军师
目标用户：独立开发者/独立创作者/自由职业者/副业创业者
核心痛点：产品能力>营销能力，卡在"赚钱最后一公里"
核心价值："你负责打造好产品，我负责帮你卖出去"

【理论框架】
- 直复式营销（Direct Response Marketing）
- AITDA 模型：Attention → Interest → Trust → Desire → Action

【当前状态】
- 阶段：demo 阶段
- 文档：完整的 OPCV2.0.md 设计文档
- 代码：有 demo 代码（backend + frontend），位置：/root/.openclaw/workspace/project/OPC/opc-empower-platform-master/

【4 个核心 Agent】
1. Agent 1：赚钱文案智能体
2. Agent 2：赚钱策略智能体
3. Agent 3：赚钱流程智能体
4. Agent 4：成交转化智能体

【我的目标】
- 从 demo 开发到产品级别
- 建立完整的测试体系（100% 覆盖目标）
- 建立 CI/CD 流程
- 持续迭代开发

现在，请执行 gstack office-hours 的 6 个强制性问题，挑战我的前提，生成 3 种实现方案。
```

---

## 十二、TRAE 中完整 sprint 示例对话

### 12.1 完整流程示例

```
你（老板）：
[发送 11.3 的 TRAE 会话启动模板]

AI（小白）：
确认理解 gstack，准备好按照流程工作。

你（老板）：
[发送 11.4 的 /office-hours 完整输入模板]

AI（小白）：
[执行 office-hours，问 6 个问题，挑战前提，生成 3 种方案]

你（老板）：
好的，请继续，使用 gstack 的 plan-ceo-review 技能。

AI（小白）：
[执行 plan-ceo-review，CEO 视角评审]

你（老板）：
继续，使用 gstack 的 plan-eng-review 技能。

AI（小白）：
[执行 plan-eng-review，锁定架构，数据流图]

你（老板）：
继续，使用 gstack 的 plan-design-review 技能。

AI（小白）：
[执行 plan-design-review，设计评审]

你（老板）：
批准计划。现在开始实现功能（Build 阶段）。

AI（小白）：
[自动写代码]

你（老板）：
使用 gstack 的 review 技能进行代码审查。

AI（小白）：
[执行 review，自动修复问题]

你（老板）：
如果有 staging，使用 gstack 的 qa 技能测试。

AI（小白）：
[执行 qa，真实浏览器测试，生成回归测试]

你（老板）：
使用 gstack 的 ship 技能发布。

AI（小白）：
[执行 ship，同步 main，运行测试，开 PR]

你（老板）：
使用 gstack 的 document-release 技能更新文档。

AI（小白）：
[执行 document-release，自动更新所有文档]

你（老板）：
每周一使用 gstack 的 retro 技能回顾。

AI（小白）：
[执行 retro，每周回顾]
```

---

**老板，准备好开始了吗？我们现在就可以在 TRAE 中运行第一个 gstack office-hours！** 🐾
