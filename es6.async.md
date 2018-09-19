### [es6-简书](https://www.jianshu.com/p/1f66aca680cb)
### promise

> - 异步解决方案
> - 我们都知道，在传统的ajax请求中，当异步请求之间的数据存在依赖关系的时候，就可能产生很难看的多层回调，俗称'回调地狱'（callback hell），这却让人望而生畏
> - Promise的出现让我们告别回调函数，写出更优雅的异步代码
> - 实践过程中，却发现Promise并不完美，Async/Await是近年来JavaScript添加的最革命性的的特性之一
> - Async/Await提供了一种使得异步代码看起来像同步代码的替代方法

- then 默认返回本身实例，也可以继续 return 下一个 promise 对象，如下
- then 返回出 promise 对象=>链式调用
- 并行执行异步任务
> - 如获取东部新闻列表和获取西部新闻列表，这两个任务互不影响是可以并行执行的
> - Promise.all 接受一个promise对象的数组，待全部完成之后，统一执行success

- 优先返回即可
> - 获取直播视频地址，有主要地址和备用地址，其中一个返回即可，有时多个异步任务是为了容错
> - Promise.race 接受一个包含多个promise对象的数组，只要有一个完成，就执行success


### Async&Await
- 使用await，函数必须用async标识
- await后面跟的是一个Promise实例
> 当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。

- 错误处理
- await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中
- try..catch错误处理也比较符合我们平常编写同步代码时候处理的逻辑
