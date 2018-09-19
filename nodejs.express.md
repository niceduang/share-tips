### express
```
搭建本地服务器
|-server/
    |-app.js
```
1. 安装 `express`
2. 后端代码
```
// app.js
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('hello word');
});

app.listen(3000);
```

3. 启`node app`