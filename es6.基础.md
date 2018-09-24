### 扫盲贴

#### 结构赋值
```
let data = {
    name:"laowang",
    nameEnglish:"Lao.wang.wang",
    age:23,
    gender:"xy"
}
let {name,nameEnglish:nameEN,gender="xx",age:a=20,job="web developer"} = data;
// 剩余
let {a,b,c} = obj;
```

#### set
```
let s = new Set(["a","b","c"]);
console.log(s);
// add 返回的依然是set对象，可以继续执行他下面的方法，注意不能是相同
s.add(1).add(2).add(2);
// delete 返回删除成功与否
let res1 = s.delete("a");
let res2 = s.delete("z");
// has 返回查询成功与否
let res11 = s.has("a");
let res22 = s.has("z");
console.log(s,res1,res2,res11,res22);
// s.clear();
console.log(s);
// 项 和 索引 是一样的
s.forEach((item,i)=>{
    console.log(item,i);
});
// valus 也一样
let keys = s.keys();
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
console.log(keys.next());
```


### 字符串新增常用
```
let str = "duangnicewell";
console.log(str.indexOf("ll") != -1);
console.log(str.includes("ll"));
console.log(str.startsWith("duang"));
console.log(str.endsWith("well"));
// repeat 不改变原字符串 返回新的字符串
let _str = str.repeat(3);
console.log(_str);
```
### 数组新增常用
```
let arr1 = new Array(10,20,30);
// 注意传入一个为数字值的时候竟然 length 变成100了
let arr2 = new Array(100);
let _arr2 = new Array("100");
let arr3 = Array.of(10,20,30);
let arr4 = Array.of(100);
console.log(arr1,arr2,_arr2,arr3,arr4);
let isArr = Array.isArray(arr4);

let els = document.all;// document.getElementsByTagName("*")
console.log(Array.isArray(els));// false
let elsArr = Array.from(els);
console.log(Array.isArray(elsArr));// true

// find
// findIndex
```
### 对象新增常用
```
var name = "laowang";// laowang,laoli
let obj = {
    [name]:"name~"
}
console.log(obj);

// keys values entries
let obj = {
    "name":"laowang",
    "age":23
}
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
for(let attr of Object.entries(obj)){
    console.log(attr);// 可以用解构 如下
}
for(let [key,val] of Object.entries(obj)){
    console.log(key,val);
}
// 扩展运算符
let o1 = {
    a:"AA",
    b:"BB"
}
let o2 = {
    ...o1,
    c:"CCCC"
}
// 打散
let arr = [1,2,3,55,0,1002,3,55,0,100];
console.log(Math.max(1,2,3,55,0,100));
console.log(Math.max(...arr));
// let _arr = ...new Set(arr);// 其实打散后是这种(1, 2, 3, 55, 0, 1002, 100)，但是直接=赋值会报错，所以可以用 [] 括起来
let _arr = [...new Set(arr)];
console.log(_arr);
```