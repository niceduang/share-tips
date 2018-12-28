var path = require('path')
var express = require('express')
// 代理
var proxy = require('http-proxy-middleware')
// 跨域
// var cors = require('cors')

var app = express()
// app.use(cors())

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(express.static(path.join(__dirname, 'www')))

// // 设置代理

// // http://localhost:3000/v2/music/search?q=张杰 -> https://api.douban.com/v2/music/search?q=张杰
// app.use('/v2', proxy({
//   target: 'https://api.douban.com',
//   changeOrigin: true
// }))

// // http://localhost:3000/getPlayerGloryRank?appid=10005&seasonid=KPL2018S1 -> https://api.tgatv.qq.com/app/match/getPlayerGloryRank?appid=10005&seasonid=KPL2018S1
// app.use('/getPlayerGloryRank', proxy({
//   target: 'https://api.tgatv.qq.com/app/match',
//   changeOrigin: true
// }))

// app.use('/api', proxy({
//   target: 'https://www.tuling123.com/openapi/',
//   changeOrigin: true
// }))

// 设置代理

app.middleware = [
  proxy(['/v2'], {target: 'https://api.douban.com', changeOrigin: true}),
  proxy(['/getPlayerGloryRank'], {target: 'https://api.tgatv.qq.com/app/match', changeOrigin: true}),
  proxy(['/api'], {target: 'https://www.tuling123.com/openapi/', changeOrigin: true})
]

app.use(app.middleware)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
