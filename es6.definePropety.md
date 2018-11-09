## [definePropety & proxy](https://juejin.im/post/5be4f7cfe51d453339084530?utm_source=gold_browser_extension)
### definePropety
- 语法
> Object.defineProperty(obj, prop, descriptor)
```js
var obj = {}
Object.defineProperty(obj, 'num', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
})

//  对象 obj 拥有属性 num，值为 1
```
- 参数
> descriptor: 将被定义或修改的属性的描述符。
- 参数:第三个参数 descriptor 所表示的属性描述符有两种形式：**数据描述符和存取描述符**
  - configurable
  - enumerable
  - value
  - writable
  - get
  - set
- 注意:**属性描述符必须是数据描述符或者存取描述符两种形式之一，不能同时是两者。**
```js
// 可以
Object.defineProperty({}, 'num', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: true
})
```
```js
// 也可以：
var value = 1
Object.defineProperty({}, 'num', {
  get: function () {
    return value
  },
  set: function (newValue) {
    value = newValue
  },
  enumerable: true,
  configurable: true
})
```
```js
// 但是不可以：
// 报错
Object.defineProperty({}, 'num', {
  value: 1,
  get: function () {
    return 1
  }
})
```
### proxy
- 语法
> var proxy = new Proxy(target, handler);
> proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为。
```js
var proxy = new Proxy({}, {
  get: function (obj, prop) {
    console.log('设置 get 操作')
    return obj[prop]
  },
  set: function (obj, prop, value) {
    console.log('设置 set 操作')
    obj[prop] = value
  }
})

proxy.time = 35 // 设置 set 操作

console.log(proxy.time) // 设置 get 操作 // 35
```