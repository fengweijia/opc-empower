# TODOS

## Backend

### 统一结构化输出契约（JSON schema + 解析兜底）

**What:** 为方案二相关skills定义稳定JSON输出结构，并在后端做强健解析与兜底返回。

**Why:** 解决“模型输出格式飘导致前端空白/不可渲染”，让生成结果可预测、可测试、可回放。

**Context:** 当前prompt要求“输出JSON”，但模型可能返回code fence或夹杂解释文本；AgentManager对不同Agent的返回结构也不一致，策略Agent仍为占位实现；需要统一每个skill的输出字段、解析规则、失败降级与错误提示。

**Effort:** M
**Priority:** P0
**Depends on:** None

### AIService 网络可靠性增强（超时/重试/429退避/日志脱敏）

**What:** 给AI请求加超时、可控重试、速率限制退避，并把错误分型成可给用户看的信息，避免敏感信息落日志。

**Why:** 提升稳定性，减少“连通测试OK但生成偶发失败/超时”的体验断点，降低线上排障成本。

**Context:** 目前fetch无超时与退避；错误处理主要靠抛出文本；需要引入AbortController、重试策略（仅对幂等/可重试错误）、以及对返回/日志的脱敏策略。

**Effort:** M
**Priority:** P1
**Depends on:** 统一结构化输出契约（JSON schema + 解析兜底）

## Data & Evolution

### 飞书单表多类型（知识底座+版本管理+缓存+回滚）

**What:** 用一张飞书表承载 playbook / prompt_version / history / feedback 四类记录，并提供运行时缓存与版本回滚能力。

**Why:** 在“配置最少”的前提下，把知识底座与prompt版本管理做成可运营、可回放、可迭代的系统能力。

**Context:** 当前LarkService只支持单tableId；可通过RecordType字段区分记录类型，并用字段映射保证不同类型记录可共存；运行时需要拉取“当前稳定prompt + 相关playbook片段”注入生成，同时要避免每次都打飞书（缓存/TTL/失败降级）。

**Effort:** L
**Priority:** P0
**Depends on:** None

### 进化闭环接入（反馈→分析→A/B→人工发布稳定版）

**What:** 接入反馈事件与分析链路：生成记录写入prompt_version；反馈写入；EffectAnalyzer产出洞察；PromptOptimizer生成候选prompt并支持A/B；提供“发布稳定版/回滚”入口。

**Why:** 让“自我学习进化”从口号变成可验证流程，并且可控（可回滚、可审计）。

**Context:** 仓库已有 EffectAnalyzer 与 PromptOptimizer/PromptVersionManager，但尚未接入主流程；需要定义反馈事件契约、版本选择策略（stable优先、实验分流）、以及发布流程（人工确认后切换stable）。

**Effort:** L
**Priority:** P1
**Depends on:** 飞书单表多类型（知识底座+版本管理+缓存+回滚）

## Frontend UI & Design

### [Design] 补齐交互状态矩阵与定制化组件
**What:** 实现AI Loading跑马灯、骨架屏、Error温和提示、空状态引导，以及雷达图和时间轴组件。
**Why:** 避免前端长耗时白屏焦虑，消除“纯文本堆砌”的套壳ChatGPT感（AI Slop）。
**Context:** 当前设计规范中已补充了《交互状态矩阵》和《核心闭环定制化UI（雷达图/地铁线路图）》。需要在前端代码中将其落地为通用或专用组件。
**Effort:** M
**Priority:** P1
**Depends on:** None

## Completed

