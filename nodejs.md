### nodejs
- 模块化
```js
let str = `str....`;
let say = (str) => {
    console.log(`say ${str}`);
}
// exports.str = str; // 只能通过 . 向外暴露
// exports.say = say; // 既能通过 . 向外暴露，也能通过对象形式向外暴露
module.exports = {
    str,
    say
}
```

### express
```
搭建本地服务器
|-server/
    |-app.js
```
1. 安装 `express`
2. 后端代码
```js
// app.js
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('hello word');
});

app.listen(3000);
```

3. 启`node app`