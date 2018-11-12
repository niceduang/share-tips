// 创建一个index.html文件
// 下面直接写WebSocket
// 只需要new一下就可以创建一个websocket的实例
// 我们要去连接ws协议
// 这里对应的端口就是服务端设置的端口号9999
let ws = new WebSocket('ws://localhost:9999')
// onopen是客户端与服务端建立连接后触发
ws.onopen = () => {
  ws.send('哎呦，不错哦')
}
// onmessage是当服务端给客户端发来消息的时候触发
ws.onmessage = res => {
  console.log('++++服务端发给客户端++')
  console.log(res) // 打印的是MessageEvent对象
  console.log('++++服务端发给客户端++')
  // 真正的消息数据是 res.data
  console.log(res.data)
}
