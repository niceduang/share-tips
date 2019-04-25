### 理解 js 执行机制

- [详见博文](https://juejin.im/post/59e85eebf265da430d571f89)

- 上代码

```js
setTimeout(function() {
  console.log('定时器开始啦')
})

new Promise(function(resolve) {
  console.log('马上执行for循环啦')
  for (var i = 0; i < 10000; i++) {
    i == 99 && resolve()
  }
}).then(function() {
  console.log('执行then函数啦')
})

console.log('代码执行结束')

// 执行顺序，详细描述内部动作
```

- 图解
- ![](https://user-gold-cdn.xitu.io/2017/11/21/15fdd88994142347?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
- 描述

  > 1. 首先明白是同步任务还是异步任务
  > 2. 同步任务->进主线程->遵循一行一行一步一步执行
  > 3. 异步任务->(事件列队)压子弹->后进先出，即后注册先执行

- 事件循环
  - 同步任务
  - 异步任务
- 除了广义的同步任务和异步任务，我们对任务有更精细的定义
  - macro-task(宏任务)：包括整体代码 script，setTimeout，setInterval
  - micro-task(微任务)：Promise，process.nextTick
- 观战代码

```js
console.log('1')

setTimeout(function() {
  console.log('2')
  process.nextTick(function() {
    console.log('3')
  })
  new Promise(function(resolve) {
    console.log('4')
    resolve()
  }).then(function() {
    console.log('5')
  })
})
process.nextTick(function() {
  console.log('6')
})
new Promise(function(resolve) {
  console.log('7')
  resolve()
}).then(function() {
  console.log('8')
})

setTimeout(function() {
  console.log('9')
  process.nextTick(function() {
    console.log('10')
  })
  new Promise(function(resolve) {
    console.log('11')
    resolve()
  }).then(function() {
    console.log('12')
  })
})
```

- 仔细分析上述代码执行过程，画表格分析透彻
