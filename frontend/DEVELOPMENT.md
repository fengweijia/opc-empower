# OPC赚钱军师 - 前端开发指南

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0（推荐 18.x）
- npm >= 8.0.0
- 微信开发者工具（用于小程序预览）

如遇到 `ERR_OSSL_EVP_UNSUPPORTED`（常见于 Node 17+ / 20+ / 22+），请切换到 Node 18，或确保构建命令带上 `NODE_OPTIONS=--openssl-legacy-provider`。

### 安装依赖
```bash
cd frontend
npm install
```

### 开发模式
```bash
# 启动微信小程序开发服务器
npm run dev:weapp
```

### 本地联调（后端在本机）
微信小程序对网络请求有“合法域名”限制，默认不允许 `http://localhost` 请求，也不允许本机 IP。开发阶段有两种做法：

1) 微信开发者工具 → 详情 → 本地设置 → 勾选「不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书」

2) 使用同一局域网内的非本机 IP（例如把后端部署到另一台机器或容器），并将其加入小程序后台的 request 合法域名列表。

如需在开发者工具里临时切换 API 地址，可在控制台执行：

```js
wx.setStorageSync('opc_api_base_url', 'http://192.168.x.x:3000')
```

如遇到 `net::ERR_CONNECTION_REFUSED`，通常是后端未启动或端口不对。请先在 `backend/` 启动本地测试服务器：

```bash
cd ../backend
node test-server.js
```

### 构建生产版本
```bash
# 构建微信小程序
npm run build:weapp

# 构建H5版本
npm run build:h5
```

## 📁 项目结构

```
frontend/
├── src/
│   ├── app.tsx                 # 应用入口
│   ├── app.config.ts           # 小程序全局配置
│   ├── styles/
│   │   └── global.scss         # 全局样式（设计系统）
│   ├── pages/                  # 页面组件
│   │   ├── home/              # 首页
│   │   ├── copywriting/       # 赚钱文案
│   │   ├── strategy/          # 赚钱策略
│   │   ├── process/           # 赚钱流程
│   │   ├── conversion/        # 成交转化
│   │   ├── history/           # 历史记录
│   │   ├── profile/           # 我的页面
│   │   └── settings/          # 设置页面
│   ├── components/            # 公共组件
│   ├── services/              # API服务
│   │   └── api.ts             # API服务封装
│   ├── store/                 # 状态管理
│   │   └── index.ts           # Zustand store
│   └── utils/                 # 工具函数
├── config/                    # Taro配置
│   └── index.js
├── public/                    # 静态资源
│   └── icons/                 # 图标资源
└── package.json
```

## 🎨 设计系统

### 颜色系统
```scss
// 主色调
--color-bg-primary: #0D0D0D      // 纯黑背景
--color-bg-card: #1A1A2E         // 深灰蓝卡片
--color-accent: #00E5A0          // 赚钱绿强调
--color-text-primary: #F5F5F7    // 主要文字

// 完整颜色系统见 global.scss
```

### 间距系统
使用CSS变量定义标准间距：
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
--font-size-xxl: 24px
```

### 组件规范
所有组件应遵循以下规范：
1. 使用CSS变量定义样式
2. 遵循8px网格系统
3. 使用标准圆角（8px/12px/16px）
4. 包含适当的交互状态（hover/active）

## 🔧 开发规范

### 组件开发
```tsx
// 示例：标准组件结构
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  title: string
  onPress?: () => void
}

export default function MyComponent({ title, onPress }: Props) {
  return (
    <View className="my-component" onClick={onPress}>
      <Text className="title">{title}</Text>
    </View>
  )
}
```

### 状态管理
使用Zustand进行状态管理：
```tsx
import useAppStore from '../../store'

function MyPage() {
  const { config, updateConfig, loading } = useAppStore()
  
  const handleSave = () => {
    updateConfig('ai', 'apiKey', 'new-api-key')
  }
  
  return (
    <View>
      <Text>API Key: {config.ai.apiKey}</Text>
      <Button onClick={handleSave} loading={loading}>
        保存
      </Button>
    </View>
  )
}
```

### API调用
使用统一的API服务：
```tsx
import apiService from '../../services/api'

async function generateCopy() {
  try {
    const result = await apiService.executeAgent({
      agentType: 'copywriting',
      skillType: 'friendship_ads',
      config: { /* AI配置 */ },
      userParams: { /* 用户参数 */ }
    })
    
    // 处理结果
  } catch (error) {
    // 错误处理
  }
}
```

## 📱 页面开发指南

### 首页 (Home)
**功能**：
- 展示今日赚钱洞察
- 四大Agent快速入口
- 用户档案概览

**开发要点**：
- 使用卡片式布局
- 添加呼吸灯动画效果
- 确保快速加载

### 赚钱文案 (Copywriting)
**功能**：
- 6种文案类型选择
- 三步生成流程（选择→填写→生成）
- 文案策略解析
- 复制和分享功能

**开发要点**：
- 清晰的步骤指示器
- 实时预览效果
- 友好的错误提示

### 设置页面 (Settings)
**功能**：
- 飞书API配置
- 大模型API配置
- 用户信息配置
- 连接测试功能

**开发要点**：
- 安全的密码输入
- 实时连接测试
- 配置保存状态提示

## 🔌 API集成

### 后端API配置
在 `src/services/api.ts` 中配置API端点：
```typescript
const API_BASE_URL = 'https://your-serverless-endpoint.com'
```

### 请求格式
所有API请求使用以下格式：
```typescript
{
  action: 'executeAgent' | 'testLark' | 'testAI' | 'getHistory' | 'health',
  params: { /* 具体参数 */ }
}
```

### 响应格式
```typescript
{
  success: boolean,
  message: string,
  data: any,
  timestamp: number
}
```

## 🎯 性能优化

### 图片优化
- 使用WebP格式图片
- 实现懒加载
- 压缩图片大小

### 代码分割
- 按页面分割代码
- 使用动态导入
- 减少首屏加载时间

### 缓存策略
- 使用Zustand持久化存储配置
- 缓存API响应
- 实现离线功能

## 🐛 调试指南

### 开发工具
```bash
# 开启调试模式
npm run dev:weapp -- --debug

# 查看构建分析
npm run build:weapp -- --analyzer
```

### 常见问题

#### 1. 样式不生效
- 检查SCSS文件是否正确导入
- 确认CSS变量已定义
- 查看微信开发者工具控制台

#### 2. API请求失败
- 检查API端点配置
- 查看网络请求日志
- 验证CORS配置

#### 3. 状态管理问题
- 检查store初始化
- 验证状态更新逻辑
- 查看控制台日志

## 📦 构建部署

### 微信小程序
1. 构建生产版本：`npm run build:weapp`
2. 使用微信开发者工具上传
3. 提交审核
4. 发布版本

### H5版本（未来）
1. 构建H5版本：`npm run build:h5`
2. 部署到静态服务器
3. 配置域名和SSL

## 🧪 测试

### 单元测试
```bash
npm test
```

### E2E测试
```bash
# 安装测试工具
npm install -g miniprogram-automator

# 运行测试
npm run test:e2e
```

### 测试覆盖
- 组件渲染测试
- 状态管理测试
- API集成测试
- 用户交互测试

## 🔄 更新日志

### v1.0.0 (2026-03-04)
- ✅ 基础框架搭建完成
- ✅ 8个核心页面实现
- ✅ 设计系统建立
- ✅ 状态管理集成
- ✅ API服务封装
- ✅ 模拟数据支持

### 下一步计划
- 🔄 真实API集成测试
- 🔄 性能优化
- 🔄 用户体验完善
- 🔄 生产环境部署

---

**开发团队**：
- **前端负责人**：云飞
- **UI设计**：雅芯（JJ暂代）
- **测试**：严谨

**更新频率**：每日更新  
**最后更新**：2026-03-04 12:45
