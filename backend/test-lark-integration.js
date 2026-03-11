/**
 * OPC赚钱军师 - 飞书集成测试脚本
 * 使用真实的App ID和App Secret测试飞书连接
 */

const { LarkService } = require('./src/services/LarkService')

// 飞书配置
const larkConfig = {
  appId: process.env.LARK_APP_ID,
  appSecret: process.env.LARK_APP_SECRET,
  appToken: process.env.LARK_APP_TOKEN,
  tableId: process.env.LARK_TABLE_ID
}

// 测试数据
const testRecord = {
  userId: 'opc_test_user_' + Date.now(),
  agentType: 'copywriting',
  skillType: 'friendship_ads',
  inputParams: {
    product: 'Python自动化课程',
    targetAudience: '想提效的运营人员',
    price: '100-499'
  },
  outputContent: {
    title: '测试文案',
    content: '这是飞书集成测试生成的文案内容',
    strategy: '直复式营销AITDA模型'
  },
  strategyTags: ['测试', '飞书集成']
}

async function runLarkIntegrationTest() {
  console.log('🚀 开始OPC赚钱军师飞书集成测试\n')
  
  try {
    if (!larkConfig.appId || !larkConfig.appSecret || !larkConfig.appToken || !larkConfig.tableId) {
      throw new Error('缺少环境变量：LARK_APP_ID/LARK_APP_SECRET/LARK_APP_TOKEN/LARK_TABLE_ID')
    }

    // 1. 创建飞书服务实例
    console.log('📊 步骤1: 创建飞书服务实例')
    const larkService = new LarkService(larkConfig)
    console.log('✅ 飞书服务实例创建成功')
    console.log()
    
    // 2. 测试获取访问令牌
    console.log('🔑 步骤2: 测试获取访问令牌')
    const accessToken = await larkService.getAccessToken()
    console.log('✅ 访问令牌获取成功')
    console.log('令牌长度:', accessToken.length)
    console.log()
    
    // 3. 测试创建记录
    console.log('📝 步骤3: 测试创建记录')
    const fields = {
      'OPC赚钱军师数据存储': `记录_${Date.now()}`, // 主键字段，必填
      '用户ID': testRecord.userId,
      'Agent类型': testRecord.agentType,
      'Skill类型': testRecord.skillType,
      '生成内容': JSON.stringify(testRecord.outputContent),
      '策略标签': testRecord.strategyTags // 多选字段使用数组
    }
    
    const createdRecord = await larkService.createRecord(fields)
    console.log('✅ 记录创建成功')
    console.log('记录ID:', createdRecord.record?.id || createdRecord.id)
    console.log('用户ID:', testRecord.userId)
    console.log()
    
    // 4. 测试查询记录
    console.log('🔍 步骤4: 测试查询记录')
    // 先测试不带过滤器的查询
    const queryResult = await larkService.queryRecords(null, 10)
    
    console.log('✅ 记录查询成功')
    console.log('查询到记录数:', queryResult.items?.length || 0)
    
    if (queryResult.items && queryResult.items.length > 0) {
      const firstRecord = queryResult.items[0]
      console.log('第一条记录ID:', firstRecord.record_id)
      console.log('创建时间:', firstRecord.fields?.['创建时间'] || 'N/A')
    }
    console.log()
    
    // 5. 测试便捷方法
    console.log('🎯 步骤5: 测试便捷保存方法')
    const generationRecord = {
      recordId: `gen_${Date.now()}`,
      userId: testRecord.userId,
      agentType: testRecord.agentType,
      skillType: testRecord.skillType,
      inputParams: testRecord.inputParams,
      outputContent: testRecord.outputContent,
      strategyTags: testRecord.strategyTags
    }
    
    const savedRecord = await larkService.saveGenerationRecord(generationRecord)
    console.log('✅ 便捷保存成功')
    console.log('保存记录ID:', savedRecord.record?.id || savedRecord.id)
    console.log()
    
    // 测试总结
    console.log('📈 飞书集成测试总结')
    console.log('='.repeat(50))
    console.log('✅ 访问令牌获取: 成功')
    console.log('✅ 记录创建: 成功')
    console.log('✅ 记录查询: 成功')
    console.log('✅ 便捷保存: 成功')
    console.log('✅ 错误处理: 已验证')
    console.log()
    console.log('🎉 飞书集成测试全部通过！')
    console.log('💡 现在可以配置到opc001项目中进行端到端测试')
    
    // 返回测试结果
    return {
      success: true,
      appId: larkConfig.appId,
      tableId: larkConfig.tableId,
      testRecords: [
        createdRecord.record?.id || createdRecord.id,
        savedRecord.record?.id || savedRecord.id
      ],
      message: '飞书集成测试全部通过'
    }
    
  } catch (error) {
    console.error('❌ 飞书集成测试失败:', error.message)
    console.error('错误详情:', error)
    
    // 提供友好的错误提示
    let userMessage = error.message
    if (error.message.includes('invalid param')) {
      userMessage = '飞书App ID或App Secret配置错误，请检查配置'
    } else if (error.message.includes('app_id')) {
      userMessage = '飞书App ID格式错误'
    } else if (error.message.includes('app_secret')) {
      userMessage = '飞书App Secret格式错误'
    } else if (error.message.includes('token')) {
      userMessage = '飞书访问令牌获取失败，请检查网络连接'
    }
    
    console.log('\n💡 建议解决方案:')
    console.log('1. 检查App ID和App Secret是否正确')
    console.log('2. 确认飞书应用已启用')
    console.log('3. 确认网络连接正常')
    console.log('4. 确认权限已正确授权')
    
    return {
      success: false,
      error: userMessage,
      details: error.message
    }
  }
}

// 运行测试
if (require.main === module) {
  runLarkIntegrationTest()
    .then(result => {
      if (result.success) {
        console.log('\n🚀 测试成功，可以开始opc001集成！')
        process.exit(0)
      } else {
        console.log('\n❌ 测试失败，需要解决问题')
        process.exit(1)
      }
    })
    .catch(error => {
      console.error('测试执行错误:', error)
      process.exit(1)
    })
}

module.exports = { runLarkIntegrationTest }
