### 理解js执行机制
- [详见博文](https://juejin.im/post/59e85eebf265da430d571f89)

- 上代码
```js
setTimeout(function(){
    console.log('定时器开始啦')
});

new Promise(function(resolve){
    console.log('马上执行for循环啦');
    for(var i = 0; i < 10000; i++){
        i == 99 && resolve();
    }
}).then(function(){
    console.log('执行then函数啦')
});

console.log('代码执行结束');

// 执行顺序，详细描述内部动作
```

- 事件循环
    - 同步任务
    - 异步任务
- 除了广义的同步任务和异步任务，我们对任务有更精细的定义
    - macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
    - micro-task(微任务)：Promise，process.nextTick
- 观战代码
```js
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```
- 仔细分析上述代码执行过程，画表格分析透彻
