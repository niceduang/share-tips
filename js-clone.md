### 浅拷贝
- 扩展运算符
```js
const obj = {...oldObj};
const arr = [...oldArr];
```
- JSON.stringify
```js
let movie = {
  name:"金刚",
  poster:{
    small:"small.jpg",
    normal:"normal.jpg",
    large:"large.jpg"
  }
}
let obj = JSON.parse(JSON.stringify(movie));// 注意原对象里面不能有 函数 ,和 undefined ,否则拷贝不下来
obj.name = "金刚狼";
obj.poster.small = "min-small.jpg";
console.log(movie,obj);
```

#### 深拷贝
```js
const clone = (obj) => {
  let _obj = null;
  if (typeof obj == 'object' && obj !== null) {
    _obj = obj instanceof Array ? [] : {};
    for (let key in obj) {
      _obj[key] = clone(obj[key]);
    }
  } else {
    _obj = obj;
  }
  return _obj;
}
let movie = {
  "name": "金刚",
  "pics": {
    "small": "small.jpg",
    "normal": "normal.jpg"
  },
  authors: ["laowang", "laoli", "laotian"],
  getInfo: function() {
    console.log(this);
  }
}
let iMovie = clone(movie);
iMovie.name = "金刚狼";
iMovie.authors.push("duang");
console.log(movie, iMovie);
```