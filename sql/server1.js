const url = require('url')
const express = require('express')
const config = require('./config')
const app = express()
app.listen(config.port, (err) => {
  if (err) {
    throw new Error(err)
  }
  console.log(`listen ${config.port}`)
})

app.use('/add', (req, res) => {
  console.log(req)
  res.end('hi ~')
})
