# js 入门姿势

## 属性检测

```js
// 《编写可维护的JavaScript》
// 不推荐的写法：使用undefined和null来检测一个属性是否存在
if (obj['name'] !== undefined) {
  console.log('name属性存在') // 若obj.name为undefined时则会导致判断出错
}

if (obj['name'] !== null) {
  console.log('name属性存在') // 若obj.name为null时则会导致判断出错
}

// 推荐的写法：使用in运算符来检测对象属性是否存在，使用hasOwnProperty方法来检测不包含原型链上的对象属性是否存在
if ('name' in obj) {
  console.log('name属性存在')
}

if (obj.hasOwnProperty('name')) {
  console.log('name属性存在')
}
```

## 判断数组

```js
function isArray(a) {
  Array.isArray
    ? Array.isArray(a)
    : Object.prototype.toString.call(a) === '[object Array]'
}
```

## 业务判断

```js
var a = null
if (!a && typeof a === 'object') {
  console.log('null')
} else if (!a && typeof a === 'undefined') {
  console.log('undefined')
} else if (!a && typeof a === 'string') {
  console.log('空字符串')
} else {
  console.log('其它')
}
```

## 默认值

```js
// 给函数赋值的类似操作很常见：
function getInfoError(ops) {
  var name = ops.name || 'laowang';
  var age = ops.age || '9000';
  console.log(name, age);
}
// 但是如果遇到下面这种情况就会有问题。
// 比如，age 就是 0，且这个值就是合法的，如果按照上面的逻辑，这里还是会显示 默认值，很显然，这不是我们想要的结果。
// 所以这里，正确且安全的做法是使用 typeof 进行参数的类型检查
function getInfo(ops) {
  var name = (ops.name !== 'undefined') ? ops.name : 'laowang';
  var age = (ops.age !== 'undefined') ? ops.age : '9000';
  console.log(name, age);
}
var user1 = {
  "name": "laosan",
  "age": 22
};
var user2 = {
  "name": "laosi",
  "age": 0
};
getInfoError(user1);
getInfoError(user2);
getInfo(user1);
getInfo(user2);
// 其实这里容易出现问题不只是 0，还有 空字符串等 Falsy 值。
// Falsy包括：false、undefined、null、正负0、NaN、""

// ES6 对象解构
function getInfo({name: 'laowang', age: '9000'}){
  console.log(name, age)
}
function getInfo({name: 'laowang', age: '9000'} = {}){
  console.log(name, age)
}

```

## 条件语句的优化

```js
// 需求：根据颜色找出对应的水果

// bad,不论是if/esle或者switch/case代码都比较冗余
function test(color) {
  switch (color) {
    case 'red':
      return ['apple', 'strawberry']
    case 'yellow':
      return ['banana', 'pineapple']
    case 'purple':
      return ['grape', 'plum']
    default:
      return []
  }
}
test('yellow') // ['banana', 'pineapple']

// good
const fruitColor = {
  red: ['apple', 'strawberry'],
  yellow: ['banana', 'pineapple'],
  purple: ['grape', 'plum']
}

function test(color) {
  return fruitColor[color] || []
}

// better
const fruitColor = new Map()
  .set('red', ['apple', 'strawberry'])
  .set('yellow', ['banana', 'pineapple'])
  .set('purple', ['grape', 'plum'])

function test(color) {
  return fruitColor.get(color) || []
}
```

## 伪数组转数组

```js
// 常用如下
let lis = [].slice.call(document.querySelectorAll('li'))
// 原理
Array.prototype.newSlice = function() {
  let start = 0
  let end = this.length
  if (arguments.length == 1) {
    start = arguments[0]
  } else if (arguments.length == 2) {
    start = arguments[0]
    end = arguments[1]
  }
  let arr = []
  for (let i = start; i < end; i++) {
    arr.push(this[i])
  }
  return arr
}
```

## 回调函数

```js
const getRandom = (maxNum, callback) => {
  try {
    let num = Math.random() * maxNum
    callback(null, num) // 约定俗成第一个参数谣传err
  } catch (err) {
    callback(err) // 第二个参数mull此时可以省去
  }
}

let num1 = getRandom(4, (err, num) => {
  // if (err) {
  //   console.log(err)
  //   return null
  // }
  // return num
  if (err) {
    console.log('err')
  } else {
    console.log(num)
  }
})
let num2 = getRandom('abc', (err, num) => {
  // if (err) {
  //   console.log(err)
  //   return null
  // }
  // return num
  if (err) {
    console.log('err')
  } else {
    console.log(num)
  }
})
// console.log({ num1, num2 })
```

## 时间对象

```js
// 时间转换
new Date().toLocaleString() // 2010/11/11 上午12:32:18

// 时间戳
;+new Date()

// 获取当月天数
var total = new Date(year, month, 0).getDate()

// 时间格式化
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
```

## URL 参数携带信息

```js
function getUrlName(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return null
}
```

## 可视区：入场动画、出场动画

```js
/**
 * 什么时候在可视区：
 * window.scrollTop>e.offsetTop-screenHeight&&window.scrollTop<e.offsetTop+e.height
 * 1. 第一种情况，向上滚动(元素跑到可视区以上即为看不到了)
 * 2. 另一种情况，向下滚动(元素跑到可视区以下也为看不到了)
 */
var $window = $(window)
var screenHeight = $window.height()
var st = $window.scrollTop()
$window.on('scroll', function() {
  st = $(this).scrollTop()
  checkPos(st)
})
checkPos(st)
function checkPos(st) {
  $('.items').each(function() {
    var $this = $(this)
    var offsetTop = $this.offset().top
    var height = $this.height()
    if (st >= offsetTop - screenHeight && st < offsetTop + height) {
      $this.addClass('ani')
    } else {
      $this.removeClass('ani')
    }
  })
}
```

## 运动公式

- 弹性

```
速度 += (目标点 - 当前值)/系数;  //6 , 7 , 8
速度 *= 摩擦系数;   // 0.7 0.75
```

- 缓冲

```
速度 = (目标点 - 当前值)/系数
```

## 移动端 video 的坑

- 关于自动播放

  > - video 的 autoplay 在移动端浏览器上基本失效
  > - 移动端要有用户交互才能触发事件，如 click、touch；
  > - ios 协议蜂窝数据下不得开启音视频的自动播放

- 如上，所以只能加一个引导点击播放

- poster

  > - 可能因为内核不同，在微信浏览器/safari/chrome 上默认展示的 poster 各有不同
  > - chrome 应用了默认行为截取了视频第一帧作为显示
  > - 微信浏览器和 safari 显示空白，效果就是孤零零的播放图放在一张白纸上

- 如上，通过 canvas 截取视频第一帧作为默认显示的图片

```js
let video
const cut = function() {
  let Dom
  let scale
  let canvas = document.createElement('canvas')
  canvas.width = video.videoWidth * scale
  canvas.height = video.videoHeight * scale // 设定宽高比
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height) // 将视频此刻帧数画入画布
  let img = document.createElement('img')
  img.src = canvas.toDataURL('image/png')
  Dom.appendChild(img) // 写入到Dom
}
video.addEventListener('loadeddata', cut) // 在视频帧数已加载时执行截取
```

## Dom 处理

```js
let data = [
  { name: 'wang', age: 23 },
  { name: 'wang', age: 23 },
  { name: 'wang', age: 23 }
]
let _html = data
  .map(item => {
    return `<li>${item.name}-${item.age}</li>`
  })
  .join('')
```

## es6 扩展运算符与解构

- 扩展符的运用

```js
// - 在对象中的用法：

let obj = {
  name: 'guodada',
  age: 22,
  sex: 1
}

// 复制对象。扩展符为浅复制！！！
const copy = { ...obj }

// 修改对象属性值(生成新对象) 相当于 Object.assgin({}, obj, { age: 18 })
const newObj = { ...obj, age: 18 }

// 结合结构赋值
let { sex, ...z } = obj
// z // { name: 'guodada', age: 22 }

// - 在数组中的用法：

const arr = [1, 2, 3]
const arr2 = [4, 5, 6, 4]

// 复制数组=>扩展符为浅复制！！！
const newArr = [...arr] // ...[1, 2, 3] => 相当于展开数组：1, 2, 3

// 合并数组
const conbineArr = [...arr, ...arr2]

// 最大值函=>结合求最大值函数
Math.max(...arr) // ...[1, 2, 3] => 相当于展开数组：1, 2, 3

// 去重=>结合 Set 实现数组去重。注意：json 等对象数组不可用
[...new Set(arr2)] // [4, 5, 6]

```

- 调试 console.log

```js
const a = 5,
  b = 6,
  c = 7
console.log({ a, b, c }) // 输出一个对象：
```

- 一行流

```js
// 找最大值
const max = arr => Math.max(...arr)
max([123, 321, 32]) // 321

// 数组求和
const sum = arr => arr.reduce((a, b) => a + b, 0)
sum([1, 2, 3, 4]) // 10
```

- 数组连接

```js
const one = ['a', 'b', 'c']
const two = ['d', 'e', 'f']
const three = ['g', 'h', 'i']

// 旧方法#1
const result = one.concat(two, three)
// 旧方法#2
const result = [].concat(one, two, three)
// 新方法
const result = [...one, ...two, ...three]
```

- 数组新增常用

```js
let arr1 = new Array(10, 20, 30)
// 注意传入一个为数字值的时候竟然 length 变成100了
let arr2 = new Array(100)
let _arr2 = new Array('100')
let arr3 = Array.of(10, 20, 30)
let arr4 = Array.of(100)
console.log(arr1, arr2, _arr2, arr3, arr4)
let isArr = Array.isArray(arr4)

let els = document.all // document.getElementsByTagName("*")
console.log(Array.isArray(els)) // false
let elsArr = Array.from(els)
console.log(Array.isArray(elsArr)) // true

// find
// findIndex
```

- 对象新增常用

```js
var name = 'laowang' // laowang,laoli
let obj = {
  [name]: 'name~'
}
console.log(obj)

// keys values entries
let obj = {
  name: 'laowang',
  age: 23
}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))
for (let attr of Object.entries(obj)) {
  console.log(attr) // 可以用解构 如下
}
for (let [key, val] of Object.entries(obj)) {
  console.log(key, val)
}
// 扩展运算符
let o1 = {
  a: 'AA',
  b: 'BB'
}
let o2 = {
  ...o1,
  c: 'CCCC'
}
// 打散
let arr = [1, 2, 3, 55, 0, 1002, 3, 55, 0, 100]
console.log(Math.max(1, 2, 3, 55, 0, 100))
console.log(Math.max(...arr))
// let _arr = ...new Set(arr);// 其实打散后是这种(1, 2, 3, 55, 0, 1002, 100)，但是直接=赋值会报错，所以可以用 [] 括起来
let _arr = [...new Set(arr)]
console.log(_arr)
```

- assign 会改变原对象

```js
let a = {
  a: 'aa'
}
let b = {
  b: 'bb'
}
let c = {
  c: 'cc'
}
// let objTarget = Object.assign(a,b,c);
// console.log(objTarget,a,b,c);

// 正确做法
let objTarget = Object.assign({}, a, b, c)

console.log(objTarget, a, b, c)
```

- set

```js
let s = new Set(['a', 'b', 'c'])
console.log(s)
// add 返回的依然是set对象，可以继续执行他下面的方法，注意不能是相同
s.add(1)
  .add(2)
  .add(2)
// delete 返回删除成功与否
let res1 = s.delete('a')
let res2 = s.delete('z')
// has 返回查询成功与否
let res11 = s.has('a')
let res22 = s.has('z')
console.log(s, res1, res2, res11, res22)
// s.clear();
console.log(s)
// 项 和 索引 是一样的
s.forEach((item, i) => {
  console.log(item, i)
})
// valus 也一样
let keys = s.keys()
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
console.log(keys.next())
```

- 字符串新增常用

```js
let str = 'duangnicewell'
console.log(str.indexOf('ll') !== -1)
console.log(str.includes('ll'))
console.log(str.startsWith('duang'))
console.log(str.endsWith('well'))
// repeat 不改变原字符串 返回新的字符串
let _str = str.repeat(3)
console.log(_str)
```
