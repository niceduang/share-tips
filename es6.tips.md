### es6简便tips
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

// 复制数组。扩展符为浅复制！！！
const newArr = [...arr] // ...[1, 2, 3] => 相当于展开数组：1, 2, 3

// 合并数组
const conbineArr = [...arr, ...arr2]

// 结合求最大值函数
Math.max(...arr) // ...[1, 2, 3] => 相当于展开数组：1, 2, 3

// 结合 Set 实现数组去重。注意：json 等对象数组不可用
[...new Set(arr2)] // [4, 5, 6]

```
- 调试console.log
```js
const a = 5, b = 6, c = 7;
console.log({a, b, c});// 输出一个对象：
```


- 一行流
```js
// 找最大值
const max = (arr) => Math.max(...arr);
max([123, 321, 32]);  // 321

// 数组求和
const sum = (arr) => arr.reduce((a, b) => (a + b), 0);
sum([1, 2, 3, 4]); // 10
```


- 数组连接
```js
const one = ['a', 'b', 'c'];
const two = ['d', 'e', 'f'];
const three = ['g', 'h', 'i'];

// 旧方法#1
const result = one.concat(two, three);
// 旧方法#2
const result = [].concat(one, two, three);
// 新方法
const result = [...one, ...two, ...three];
```

- assign 会改变原对象
```js
let a = {
  a:"aa"
}
let b = {
  b:"bb"
}
let c = {
  c:"cc"
}
// let objTarget = Object.assign(a,b,c);
// console.log(objTarget,a,b,c);


// 正确做法
let objTarget = Object.assign({},a,b,c);

console.log(objTarget,a,b,c);
```