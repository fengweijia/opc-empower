# OPC赚钱军师 完整产品开发计划

> **使用技能**: writing-plans
> **目标**: 完整功能产品上线（非MVP）
> **创建时间**: 2026-03-10
> **分析者**: 小白（第四军团军团长）

---

## 一、代码Review总结

### 已Review的核心文件

| 文件 | 状态 | 说明 |
|:---|:---:|:---|
| `backend/src/agents/AgentManager.js` | ✅ 已完成 | Agent路由框架完整，支持4大Agent |
| `backend/src/services/AIService.js` | ✅ 已完成 | 多模型支持（OpenAI/Claude/DeepSeek） |
| `backend/src/services/LarkService.js` | ✅ 已完成 | 飞书多维表格集成 |
| `frontend/src/pages/*` | 🔄 基础 | 8个页面框架，API对接待完成 |
| `backend/index.js` | 🔄 基础 | Serverless函数入口 |

### 架构评价

**优点：**
- Agent设计合理，支持skill插件化
- 分离AI服务和飞书服务
- Mock数据机制便于前端开发

**待完善：**
- Agent的prompt需要基于OPCV2.0优化
- 前端状态管理需要与后端联调
- 数据追踪模块未开始
- Skills进化引擎未开始

---

## 二、完整功能开发计划

### 目标
- **不再追求MVP**
- **完整功能上线**：V2.0文档中的所有核心功能
- **上线时间**：适当延后，确保质量

---

## 三、开发阶段详细规划

### 阶段一：核心Agent完善（3.10-3.17）

#### Task 1: 完善赚钱文案Agent
**Files:**
- Modify: `backend/src/agents/AgentManager.js`
- Modify: `backend/src/services/AIService.js`
- Create: `backend/src/prompts/copywriting-prompts.js`

**Step 1: 补充朋友圈文案prompt细节**

```javascript
// 在 prompts/copywriting-prompts.js 中添加
module.exports = {
  friendship_ads: `你是一个精通直复式营销...
  // 需要补充：
  // 1. 更多钩子类型
  // 2. AITDA模型完整应用
  // 3. 策略解析格式化
  `,
  // 其他skill...
}
```

**Step 2: 测试Agent响应**
Run: `node test-simple-e2e.js`
Expected: 返回5条结构化文案

**Step 3: 添加日志记录**
```javascript
// 在 handleCopywritingRequest 中添加
console.log(`[${new Date().toISOString()}] Agent:${agentType}, Skill:${skillType}`)
```

**Step 4: Commit**
```bash
git add backend/src/agents/ backend/src/prompts/
git commit -m "feat: 完善赚钱文案Agent prompt模板"
```

---

#### Task 2: 增加私聊成交话术Skill
**Files:**
- Create: `backend/src/skills/private-chat.js`
- Modify: `backend/src/agents/AgentManager.js:15`

**Step 1: 创建私聊话术Skill模块**

```javascript
// backend/src/skills/private-chat.js
class PrivateChatSkill {
  generate(params) {
    // 生成开场白、需求挖掘、产品介绍、异议处理、促成、跟进
  }
  
  handleObjection(objectionType) {
    // "太贵了" / "考虑考虑" / "没时间" 等处理
  }
}
```

**Step 2: 在AgentManager注册**
```javascript
this.agents.get('copywriting').skills.push('private_chat')
```

**Step 3: 测试**
Run: `node test-server.js` with `action: 'executeAgent', agentType: 'copywriting', skillType: 'private_chat'`

**Step 4: Commit**
```bash
git add backend/src/skills/ backend/src/agents/
git commit -m "feat: 添加私聊成交话术Skill"
```

---

#### Task 3: 成交转化Agent实现
**Files:**
- Create: `backend/src/agents/ConversionAgent.js`
- Modify: `backend/src/agents/AgentManager.js:32`

**Step 1: 创建价格锚定Skill**
```javascript
// 价格锚定prompt模板
const priceAnchorPrompt = `根据产品${params.product}和价格${params.price}...
生成3种锚定策略方案...`
```

**Step 2: 创建异议处理Skill**
```javascript// 异议处理prompt
const objectionPrompt = `产品：${params.product}
列出常见异议：
1. "太贵了"
2. "我再考虑考虑"
3. "适合我吗"
4. "有没有效果保证"

每种给3种应对方案...`
```

**Step 3: 注册Agent**
```javascript
this.agents.set('conversion', new ConversionAgent())
```

**Step 4: 测试 + Commit**

---

### 阶段二：数据系统（3.18-3.25）

#### Task 4: 历史记录存储系统
**Files:**
- Create: `backend/src/services/HistoryService.js`
- Modify: `backend/src/services/LarkService.js`

**Step 1: 设计数据模型**
```javascript
const historyRecord = {
  record_id: String,
  user_id: String,
  agent_type: String,
  skill_type: String,
  input_params: Object,
  output_content: Object,
  created_at: DateTime,
  user_rating: Number, // 1-5
  used: Boolean
}
```

**Step 2: 实现保存方法**
```javascript
async saveHistory(record) { ... }
async getHistory(userId, options) { ... }
```

**Step 3: 前端历史页面对接**
Modify: `frontend/src/pages/history/index.tsx`

**Step 4: 测试 + Commit**

---

#### Task 5: 行为追踪系统
**Files:**
- Create: `backend/src/services/AnalyticsService.js`
- Create: `frontend/src/analytics/tracker.ts`

**Step 1: 设计埋点事件**
```javascript
const events = {
  feature_select: { agent, skill, from_page },
  param_select: { step, choice, time_spent },
  content_interact: { action, content_id, read_time },
  follow_up: { original_record, type, message },
  session_complete: { duration, steps, final_action }
}
```

**Step 2: 创建Tracker类（前端）**
```javascript
class AnalyticsTracker {
  track(eventType, data) {
    // 异步上报到后端
    api.post('/analytics/track', { event: eventType, data })
  }
}
```

**Step 3: 后端接收服务**
```javascript
// backend/src/services/AnalyticsService.js
async function handleTrackEvent(req, res) {
  const { event, data } = req.body
  // 存储到飞书
}
```

**Step 4: Commit**

---

### 阶段三：前端完善（3.20-3.28）

#### Task 6: 完整页面功能对接
**Files:**
- Modify: `frontend/src/pages/copywriting/index.tsx`
- Modify: `frontend/src/services/api.ts`

**Step 1: 实现文案生成完整流程**
1. 用户选择文案类型
2. 填写产品信息
3. 调用API获取结果
4. 展示结果（支持复制、收藏、反馈）
5. 保存到历史

**Step 2: 测试 + Commit**

---

#### Task 7: 数据面板页面
**Files:**
- Create: `frontend/src/pages/dashboard/index.tsx`
- Modify: `frontend/src/app.config.ts`

**Step 1: 设计仪表盘布局**
- 本月生成次数
- 实际使用率
- 追踪成交金额
- 效果最佳的文案类型

**Step 2: 实现 + 测试 + Commit**

---

### 阶段四：AI进化系统（3.26-4.5）

#### Task 8: Prompt优化系统
**Files:**
- Create: `backend/src/services/PromptOptimizer.js`
- Create: `backend/src/evolve/prompt-templater.js`

**Step 1: 设计反馈收集逻辑**
```javascript
// 收集用户反馈
{
  record_id,
  user_rating: 1-4,
  improvement_tags: ["不够接地气", "太长", ...],
  used_as_is: Boolean
}
```

**Step 2: 实现分析逻辑**
```javascript
analyzeFeedback(recordIds) {
  // 聚合improvement_tags
  // 对比高评分 vs 低评分内容特征
  // 生成prompt优化建议
}
```

**Step 3:Prompt版本管理**
```javascript
{
  skill: "copywriting_friendship",
  versions: [
    { version: 1, prompt: "...", avg_rating: 3.2 },
    { version: 2, prompt: "...", avg_rating: 4.1 }
  ]
}
```

**Step 4: Commit**

---

### 阶段五：完整测试与上线（4.1-4.10）

#### Task 9: 端到端测试
**Files:**
- Create: `tests/e2e/full-flow.test.js`

**Step 1: 编写完整流程测试**
```javascript
test('完整用户流程', async () => {
  // 1. 配置飞书
  // 2. 配置AI
  // 3. 生成文案
  // 4. 复制使用
  // 5. 提交反馈
  // 6. 查看历史
  // 7. 查看数据面板
})
```

**Step 2: 执行测试 + 修复问题**

**Step 3: Commit**

---

#### Task 10: 微信小程序审核
**Files:**
- Modify: `frontend/project.config.json`
- Create: `docs/隐私政策.md`

**Step 1: 准备审核材料**
- 隐私政策文档
- ICP备案（如需要）
- 小程序截图

**Step 2: 提交审核**

**Step 3: Commit**

---

## 四、任务优先级矩阵

| 优先级 | 任务 | 预计工时 | 负责人 |
|:---:|:---|:---:|:---|
| P0 | 完善文案Agent | 2天 | 智源 |
| P0 | 私聊话术Skill | 2天 | 智源 |
| P0 | 成交转化Agent | 2天 | 智源 |
| P1 | 历史记录系统 | 3天 | 皓宇 |
| P1 | 行为追踪系统 | 3天 | 皓宇 |
| P2 | 前端完整对接 | 5天 | 云飞 |
| P2 | 数据面板 | 3天 | 云飞 |
| P3 | Prompt进化系统 | 5天 | 智源 |
| P3 | 完整测试 | 5天 | 严谨 |
| P3 | 小程序审核 | 3天 | JJ |

---

## 五、技术依赖关系

```
Agent核心功能 ←AIService ← 大模型API
     ↓
历史记录 ← LarkService ← 飞书API
     ↓
行为追踪 ← AnalyticsService
     ↓
数据面板 ← 前端展示
     ↓
审核上线
```

---

## 六、风险与应对

| 风险 | 影响 | 应对方案 |
|:---|:---:|:---|
| AI生成质量不稳定 | P0 | 精心设计prompt +Few-shot |
| 飞书API配额限制 | P1 | 监控+预警+用户提示 |
| 小程序审核驳回 | P2 | 提前准备合规材料 |
| 团队进度delay | P0 | 每日站会+及时调整 |

---

## 七、下一步行动

**等待确认后开始执行阶段一：**

1. Task 1: 完善赚钱文案Agent（具体从prompt细化开始）
2. Task 2: 增加私聊成交话术Skill
3. Task 3: 成交转化Agent

---

**计划已保存，使用writing-plans技能编制**

**选择执行方式：**
1. **子任务驱动** - 我逐个dispatch子任务，快速迭代
2. **并行会话** - 开新会话批量执行

请指示如何开始执行？