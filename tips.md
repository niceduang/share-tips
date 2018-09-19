### 关于可扩展星，健壮性，容错性的小技巧

#### 默认值
```
// 给函数赋值的类似操作很常见：
function getInfoError(ops) {
    var name = ops.name || '默认laowang';
    var age = ops.age || '默认9000';
    console.log(name, age);
}
// 但是如果遇到下面这种情况就会有问题。
// 比如，age 就是 0，且这个值就是合法的，如果按照上面的逻辑，这里还是会显示 默认值，很显然，这不是我们想要的结果。
// 所以这里，正确且安全的做法是使用 typeof 进行参数的类型检查
function getInfo(ops) {
    var name = (ops.name != 'undefined') ? ops.name : '默认laowang';
    var age = (ops.age != 'undefined') ? ops.age : '默认9000';
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
```

- 时间转换
```
new Date().toLocaleString();
```

- 时间格式化
```
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}
```

- URL参数携带信息
```
function getUrlName(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```

- 获取当月天数
```
var total = new Date(year,month,0).getDate();
```


- 运动公式
- 弹性
```
速度 += (目标点 - 当前值)/系数;  //6 , 7 , 8
速度 *= 摩擦系数;   // 0.7 0.75
```

- 缓冲
```
速度 = (目标点 - 当前值)/系数
```

- 