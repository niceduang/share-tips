// const socket = io('http://localhost:3000')
// const socket = io('/')
const socket = io()
// 监听与服务器连接成功的事件
socket.on('connect', () => {
  console.log('连接成功')
  socket.send('周杰伦')
})
// 监听服务端发来的消息
socket.on('message', msg => {
  // 这个msg就是传过来的真消息了，不用再msg.data取值了
  console.log(`客户端接收到的消息： ${msg}`)
})
// 监听与服务器连接断开事件
socket.on('disconnect', () => {
  console.log('连接断开成功')
})
