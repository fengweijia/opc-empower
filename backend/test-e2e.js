/**
 * OPC赚钱军师 - 端到端测试脚本
 * 模拟用户从配置到生成到保存的完整流程
 */

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000'

async function postJSON(pathname, data) {
  const response = await fetch(`${API_BASE_URL}${pathname}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  const json = await response.json()
  if (!json.success) {
    throw new Error(json.message || 'API请求失败')
  }
  return json.data
}

async function runE2E() {
  const testUserId = `e2e_test_${Date.now()}`
  console.log('🚀 开始OPC赚钱军师端到端测试')
  console.log('API:', API_BASE_URL)
  console.log('用户ID:', testUserId)
  console.log()

  const larkEnv = {
    appId: process.env.LARK_APP_ID,
    appSecret: process.env.LARK_APP_SECRET,
    appToken: process.env.LARK_APP_TOKEN,
    tableId: process.env.LARK_TABLE_ID
  }

  const aiEnv = {
    provider: process.env.AI_PROVIDER || 'openai',
    apiKey: process.env.AI_API_KEY || 'test_key_for_simulation',
    model: process.env.AI_MODEL || 'gpt-4',
    apiEndpoint: process.env.AI_API_ENDPOINT
  }

  const health = await postJSON('/', { action: 'health' })
  console.log('✅ 健康检查:', health.status, health.version)

  const agents = await postJSON('/', { action: 'getAgents' })
  console.log('✅ Agent数量:', agents.length)

  if (larkEnv.appId && larkEnv.appSecret && larkEnv.appToken && larkEnv.tableId) {
    const lark = await postJSON('/', { action: 'testLark', params: larkEnv })
    console.log('✅ 飞书连接:', lark.connected)
  } else {
    console.log('⚠️ 跳过飞书连接测试（缺少 LARK_* 环境变量）')
  }

  try {
    const ai = await postJSON('/', { action: 'testAI', params: aiEnv })
    console.log('✅ AI连接:', ai.connected)
  } catch (e) {
    console.log('⚠️ AI连接测试失败（继续执行生成流程）')
  }

  const generation = await postJSON('/', {
    action: 'executeAgent',
    params: {
      agentType: 'copywriting',
      skillType: 'friendship_ads',
      config: {
        aiConfig: aiEnv,
        larkConfig: larkEnv.appId ? larkEnv : null
      },
      userParams: {
        userId: testUserId,
        product: 'Python自动化课程',
        targetAudience: '想提效的运营人员',
        price: '100-499',
        objective: 'direct_sale',
        style: '口语化自然'
      }
    }
  })

  const generatedList = generation?.data?.data || generation?.data
  if (Array.isArray(generatedList)) {
    console.log('✅ 文案生成条数:', generatedList.length)
    console.log('首条标题:', generatedList[0]?.title)
  } else {
    console.log('✅ 文案生成完成')
  }

  if (larkEnv.appId && larkEnv.appSecret && larkEnv.appToken && larkEnv.tableId) {
    const history = await postJSON('/', {
      action: 'getHistory',
      params: {
        larkConfig: larkEnv,
        userId: testUserId,
        pageSize: 5
      }
    })
    console.log('✅ 历史查询条数:', history?.items?.length || 0)
  } else {
    console.log('⚠️ 跳过历史查询（缺少 LARK_* 环境变量）')
  }

  console.log()
  console.log('🎉 E2E 完成')
}

if (require.main === module) {
  runE2E()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('❌ E2E失败:', err.message)
      process.exit(1)
    })
}

module.exports = { runE2E }
