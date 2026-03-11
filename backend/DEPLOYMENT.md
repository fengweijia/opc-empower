# OPC赚钱军师 - Serverless部署配置
# 支持阿里云函数计算和腾讯云云函数

## 部署选项

### 1. 阿里云函数计算 (推荐)
**优势**：
- 国内访问速度快
- 与微信小程序生态集成好
- 有免费额度

**部署步骤**：
```bash
# 安装Fun工具
npm install @alicloud/fun -g

# 配置阿里云凭证
fun config

# 部署函数
fun deploy
```

**配置文件** (`template.yml`):
```yaml
ROSTemplateFormatVersion: '2015-09-01'
Transform: 'Aliyun::Serverless-2018-04-03'
Resources:
  opc-money-agent:
    Type: 'Aliyun::Serverless::Service'
    Properties:
      Description: 'OPC赚钱军师后端API服务'
    opc-api:
      Type: 'Aliyun::Serverless::Function'
      Properties:
        Handler: index.main
        Runtime: nodejs18
        CodeUri: ./
        Timeout: 30
        MemorySize: 512
        EnvironmentVariables:
          NODE_ENV: production
      Events:
        http:
          Type: HTTP
          Properties:
            AuthType: ANONYMOUS
            Methods: ['POST']
```

### 2. 腾讯云云函数
**优势**：
- 与微信小程序原生集成
- 有丰富的免费资源包

**部署步骤**：
```bash
# 安装Serverless Framework
npm install -g serverless

# 部署
sls deploy
```

**配置文件** (`serverless.yml`):
```yaml
component: scf
name: opc-money-agent
inputs:
  name: opc-money-agent
  src: ./
  handler: index.main
  runtime: Nodejs18.15
  region: ap-guangzhou
  memorySize: 512
  timeout: 30
  environment:
    variables:
      NODE_ENV: production
  events:
    - apigw:
        parameters:
          protocols:
            - http
            - https
          environment: release
          endpoints:
            - path: /
              method: POST
```

## 环境变量配置

### 必需环境变量
```bash
# 日志配置
LOG_LEVEL=info

# 安全配置（可选）
API_KEY=your_api_key_here  # 用于API访问控制

# 监控配置
SENTRY_DSN=your_sentry_dsn  # 错误监控
```

### 可选环境变量
```bash
# 缓存配置
REDIS_URL=redis://localhost:6379

# 数据库配置（如果未来需要）
DATABASE_URL=postgresql://user:pass@localhost:5432/db
```

## 本地开发

### 安装依赖
```bash
cd backend
npm install
```

### 本地测试
```bash
# 直接运行
node index.js

# 使用nodemon热重载
npm install -g nodemon
nodemon index.js
```

### 本地API测试
```bash
# 使用curl测试
curl -X POST http://localhost:3000/api/main \
  -H "Content-Type: application/json" \
  -d '{"action":"health"}'

# 预期响应
{
  "success": true,
  "message": "success",
  "data": {
    "status": "ok",
    "version": "1.0.0",
    "timestamp": "2026-03-04T04:41:00.000Z"
  },
  "timestamp": 1772599316320
}
```

## 生产部署检查清单

### 部署前检查
- [ ] 代码已通过ESLint检查
- [ ] 所有依赖已正确安装
- [ ] 环境变量已配置
- [ ] 数据库连接已测试
- [ ] API密钥已安全存储

### 部署后验证
- [ ] API端点可访问
- [ ] 健康检查通过
- [ ] 飞书API连接测试通过
- [ ] AI API连接测试通过
- [ ] 错误日志可查看

## 监控和运维

### 日志查看
```bash
# 阿里云
fun logs -t

# 腾讯云
sls logs -t
```

### 性能监控
- **API响应时间**：应<100ms
- **错误率**：应<1%
- **并发数**：监控峰值并发
- **资源使用**：内存和CPU使用率

### 警报设置
- **P0警报**：API完全不可用
- **P1警报**：错误率>5%
- **P2警报**：响应时间>500ms
- **P3警报**：资源使用率>80%

## 安全配置

### API访问控制
```javascript
// 在index.js中添加API密钥验证
const API_KEY = process.env.API_KEY

exports.main = async (event, context) => {
  // 验证API密钥
  if (API_KEY && event.headers['x-api-key'] !== API_KEY) {
    return {
      success: false,
      message: '无效的API密钥',
      code: 401
    }
  }
  
  // ... 原有逻辑
}
```

### 数据安全
- 用户API密钥不存储，仅临时使用
- 飞书密钥由用户自行管理
- 所有敏感数据加密传输

## 成本估算

### 阿里云函数计算
- **免费额度**：每月100万次调用
- **超出费用**：0.000013元/次
- **内存费用**：0.000111元/GB-秒
- **预估月成本**：< 10元（1000用户）

### 腾讯云云函数
- **免费额度**：每月100万次调用
- **超出费用**：0.000013元/次
- **内存费用**：0.000111元/GB-秒
- **预估月成本**：< 10元（1000用户）

## 故障恢复

### 常见问题处理
1. **API不可用**：检查函数状态，重启函数
2. **飞书API失败**：检查token是否过期，重新获取
3. **AI API失败**：检查API密钥，切换备用模型
4. **内存不足**：增加内存配置，优化代码

### 备份策略
- 代码使用Git版本控制
- 配置使用环境变量
- 用户数据在飞书中，用户自行备份

## 更新部署

### 小版本更新
```bash
# 更新代码
git pull

# 重新部署
fun deploy  # 或 sls deploy
```

### 大版本更新
1. 创建新版本函数
2. 测试新版本
3. 切换流量到新版本
4. 监控新版本稳定性
5. 删除旧版本

---

**部署负责人**：梁枫 + 皓宇  
**监控负责人**：智源  
**运维负责人**：JJ

**最后更新**：2026-03-04 12:41