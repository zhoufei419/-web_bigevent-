// 导入express
const express = require('express')
// 创建服务器的实例对象
const app = express()
const cors = require('cors')
// 导入并配置cors中间件
app.use(cors())
// 配置解析数据的中间件
app.use(express.urlencoded({extended: false}))
// 启动服务器
app.listen(3007, () => {
    console.log('api server running at http:127.0.0.1')
})