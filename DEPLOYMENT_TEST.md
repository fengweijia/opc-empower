# OPC赚钱军师 (opc001) 部署测试文档

> 适用于单位本机测试的完整指南

---

## 📋 环境要求

| 项目 | 最低版本 | 推荐版本 |
|------|----------|----------|
| Node.js | 18.x | 18.20.x |
| npm | 8.x | 9.x/10.x |
| 微信开发者工具 | 1.06.x | 最新稳定版 |

---

## 🚀 部署步骤

### 第一步：获取项目代码

```bash
# 方式1：如果有Git仓库
git clone <opc001仓库地址> /path/to/opc001

# 方式2：直接复制（当前项目位置）
cp -r /root/.openclaw/workspace/opc001 ~/opc001
```

---

### 第二步：配置Node.js环境

```bash
# 检查Node版本
node -v
# 预期输出: v18.x.x 或更高

# 如果没有Node 18，使用nvm安装（可选）
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# source ~/.bashrc
# nvm install 18
# nvm use 18
```

---

### 第三步：安装前端依赖

```bash
cd ~/opc001/frontend

# 设置Node兼容
export NODE_OPTIONS=--openssl-legacy-provider

# 安装依赖
npm install
```

**可能的问题：**
- 如果报错 `ERR_OSSL_EVP_UNSUPPORTED`，确保设置 `NODE_OPTIONS=--openssl-legacy-provider`

---

### 第四步：配置API Key

本项目不在代码仓库内保存任何密钥。

- 小程序端：在「我的 → 设置 → AI大模型配置」里填写 `provider/apiKey/model`，点击「测试API」验证。
- 飞书端：在「我的 → 设置 → 飞书配置」里填写 `App ID/App Secret/多维表格App Token/表格ID`，点击「测试连接」验证。

如需跑后端脚本测试（可选），使用环境变量传入：

```bash
export AI_PROVIDER="deepseek"
export AI_API_KEY="sk-xxxxxxxx"
export AI_MODEL="deepseek-chat"
export LARK_APP_ID="cli_xxx"
export LARK_APP_SECRET="xxx"
export LARK_APP_TOKEN="bxxx"
export LARK_TABLE_ID="tbl_xxx"
```

---

### 第五步：启动开发服务器

```bash
cd ~/opc001/frontend

# 方式1：Windows PowerShell
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm run dev:weapp

# 方式2：Mac/Linux 终端
NODE_OPTIONS=--openssl-legacy-provider npm run dev:weapp
```

**预期输出：**
```
> opc-money-agent-weapp@1.0.0 dev:weapp
> taro build --type weapp --watch

👀  watching weapp...
✅  编译成功
```

---

### 第六步：导入微信开发者工具

1. **下载微信开发者工具**
   - https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

2. **导入项目**
   - 打开微信开发者工具
   - 点击「导入项目」
   - 选择目录：`~/opc001/frontend/dist`
   - AppID：使用测试号（无需AppID可测试）

3. **配置详情**
   - 项目名称：OPC赚钱军师
   - 目录：选择 `frontend/dist`

---

## 🔧 后端服务部署（可选）

如果需要完整的API服务：

### 方式1：本地运行

```bash
cd ~/opc001/backend
npm install
npm start
```

服务地址：`http://localhost:3000`

### 方式2：Serverless部署（阿里云）

```bash
# 安装Serverless CLI
npm install -g @serverless/cli

# 部署
cd ~/opc001/backend
serverless deploy
```

---

## 🧪 测试清单

### 功能测试

| 序号 | 测试项 | 预期结果 |
|------|--------|----------|
| 1 | 启动小程序 | 看到登录页/首页 |
| 2 | 输入API Key | 显示配置成功 |
| 3 | 选择Agent | 显示4个赚钱Agent |
| 4 | 生成文案 | 返回营销文案 |
| 5 | 查看历史 | 显示历史记录 |
| 6 | 飞书绑定 | 可关联飞书多维表格 |

### 测试命令（命令行）

```bash
# 后端健康检查
curl http://localhost:3000/api/health

# 测试生成文案
curl -X POST http://localhost:3000/api/generate \
  -H "Content-Type: application/json" \
  -d '{"agent":"copywriter","prompt":"帮我写一条朋友圈卖货文案"}'
```

---

## ⚠️ 常见问题

### 1. 编译报错 `ERR_OSSL_EVP_UNSUPPORTED`

```bash
# 解决：设置Node兼容模式
export NODE_OPTIONS=--openssl-legacy-provider
```

### 2. 微信开发者工具导入失败

- 确保选择的是 `frontend/dist` 目录（不是frontend根目录）
- 确保已运行 `npm run dev:weapp` 生成了dist目录

### 3. API调用失败

- 检查API Key是否正确
- 检查网络是否能访问API服务商

### 4. 页面空白

- 微信开发者工具需要开启「ES6转ES5」
- 设置 → 详情 → 本地设置 → 勾选「启用ES6转ES5」

---

## 📁 项目结构

```
opc001/
├── frontend/           # 微信小程序前端
│   ├── dist/          # 编译输出（导入微信工具用）
│   ├── src/           # 源代码
│   ├── config/        # 配置文件
│   └── package.json
├── backend/           # 后端API服务
│   ├── src/           # 源代码
│   ├── config/        # 配置
│   └── package.json
├── README.md          # 项目说明
└── DEPLOYMENT.md      # 部署文档
```

---

## 📞 支持

- 项目位置：`~/opc001`
- 测试端口（后端）：`3000`
- 小程序端口：`10080`（默认）

---

**祝测试顺利！** 🐾
