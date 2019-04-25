# 借助 node 前端代理转发接口

```js
// server.js
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
  proxy(['/v2'], { target: 'https://api.douban.com', changeOrigin: true }),
  proxy(['/getPlayerGloryRank'], {
    target: 'https://api.tgatv.qq.com/app/match',
    changeOrigin: true
  }),
  proxy(['/api'], {
    target: 'https://www.tuling123.com/openapi/',
    changeOrigin: true
  })
]

app.use(app.middleware)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
```

```js
// GET
$.ajax({
  url: 'v2/music/search',
  type: 'GET',
  dataType: 'json',
  data: {
    q: '张杰'
  }
})
  .done(res => {
    console.log({ res })
  })
  .fail(err => {
    console.log(err)
  })

// POST
$.ajax({
  url: 'api',
  type: 'POST',
  dataType: 'json',
  data: {
    key: 'c9d1eb9811e648a49ece24b7cb1065e9',
    info: '武汉',
    userId: 1
  }
})
  .done(res => {
    console.log({ res })
  })
  .fail(err => {
    console.log(err)
  })
```

# node 搭建代理处理跨域

## 前端 ajax 场景

- 前端 ajax

```js
$.ajax({
  url: 'http://api.tgatv.qq.com/app/match/getPlayerGloryRank',
  type: 'GET',
  dataType: 'json',
  data: {
    appid: '10005',
    seasonid: 'KPL2018S1'
  }
})
  .done(function(res) {
    console.log({ res })
  })
  .fail(function() {
    console.log('error')
  })

// 代理
$.ajax({
  url: '/getPlayerGloryRank',
  type: 'GET',
  dataType: 'json',
  data: {
    appid: '10005',
    seasonid: 'KPL2018S1'
  }
})
  .done(res => {
    console.log({ res })
  })
  .fail(() => {
    console.log('error')
  })
```

- node 配置

```js
const path = require('path')
const express = require('express')
const request = require('request')
const app = express()

// 开放静态资源访问权限
app.use(express.static(path.join(__dirname, 'www')))

// 设置Node.js跨域请求
app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
  )
  res.header('Access-Content-Allow-Methods', 'POST, GET')
  next()
})

// 路由如此
app.get('/', (req, res) => {
  res.send('hi~')
})

// 通过node代理之后，就能直接访问豆瓣了
app.get('/getPlayerGloryRank', (req, res) => {
  // console.log(req.query)
  // const url = `http://api.tgatv.qq.com/app/match/getPlayerGloryRank?appid=${req.query.appid}&seasonid=${req.query.seasonid}`
  // console.log(url)
  const url = `http://api.tgatv.qq.com/app/match/getPlayerGloryRank`
  const qs = req.query
  const ops = {
    url,
    qs
  }
  request(ops, (err, response, body) => {
    if (err) {
      throw new Error(err)
    }
    // console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    res.send(body)
  })
})

// 启动监听
app.listen(3000, err => {
  if (err) {
    throw new Error(err)
  }
  console.log('listen 3000...')
})
```
