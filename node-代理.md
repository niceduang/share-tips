# node 搭建代理处理跨域

## 前端ajax场景
- 前端ajax
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
.done(function (res) {
  console.log({ res })
})
.fail(function () {
  console.log("error")
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
.done(function (res) {
  console.log({ res })
})
.fail(function () {
  console.log("error")
})

```
- node配置
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
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
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
    if (err) { throw new Error(err) }
    // console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    res.send(body)
  })
})

// 启动监听
app.listen(3000, (err) => {
  if (err) { throw new Error(err) }
  console.log('listen 3000...')
})

```
