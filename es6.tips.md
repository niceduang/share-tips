### es6简便tips

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