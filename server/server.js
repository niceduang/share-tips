const express = require('express')
const proxy = require('http-proxy-middleware')

const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true')
})

app.middleware = [
  proxy(['/getInfo'], {target: 'http://www.tuling123.com/openapi/api', changeOrigin: true}),
  // proxy(['/sendData'], {target: '', changeOrigin: true})
]

app.use(app.middleware)

app.listen(3000)
