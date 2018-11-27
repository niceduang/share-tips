# 关于可扩展，健壮，容错的小技巧

## 业务相关判断
- 属性检测
```js
// 《编写可维护的JavaScript》
// 不推荐的写法：使用undefined和null来检测一个属性是否存在
if (obj['name'] !== undefined) {
  console.log('name属性存在'); // 若obj.name为undefined时则会导致判断出错
}

if (obj['name'] !== null) {
  console.log('name属性存在'); // 若obj.name为null时则会导致判断出错
}


// 推荐的写法：使用in运算符来检测对象属性是否存在，使用hasOwnProperty方法来检测不包含原型链上的对象属性是否存在
if ('name' in obj) {
  console.log('name属性存在');
}

if (obj.hasOwnProperty('name')) {
  console.log('name属性存在');
}
```
- 判断数组的
```js
function isArray(a) {
  Array.isArray ? Array.isArray(a) : Object.prototype.toString.call(a) === '[object Array]';
}
```

- 默认值
```js
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
```js
new Date().toLocaleString();
```

- 时间格式化
```js
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
```js
function getUrlName(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```

- 获取当月天数
```js
var total = new Date(year,month,0).getDate();
```

- 可视区
  - 入场动画、出场动画
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
				if (st >= (offsetTop - screenHeight) && st < (offsetTop + height)) {
					$this.addClass('ani')
				} else {
					$this.removeClass('ani')
				}
			})
		}
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

- 伪数组转数组
```js
// 常用如下
let lis = [].slice.call(document.querySelectorAll('li'));
```
  - 原理
    ```js
    Array.prototype.newSlice = function () {
        let start = 0;
        let end = this.length;
        if (arguments.length == 1) {
            start = arguments[0];
        } else if (arguments.length == 2) {
            start = arguments[0];
            end = arguments[1];
        }
        let arr = [];
        for (let i = start; i < end; i++) {
            arr.push(this[i]);
        }
        return arr;
    }
    ```

- 回调函数
```js
const getRandom = (maxNum, callback) => {
  try {
    let num = Math.random() * maxNum
    callback(null, num)// 约定俗成第一个参数谣传err
  } catch (err) {
    callback(err)// 第二个参数mull此时可以省去
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
### 移动端video的坑
- 关于自动播放
> - video的autoplay在移动端浏览器上基本失效
> - 移动端要有用户交互才能触发事件，如click、touch；
> - ios协议蜂窝数据下不得开启音视频的自动播放

- 如上，所以只能加一个引导点击播放

- poster
> - 可能因为内核不同，在微信浏览器/safari/chrome上默认展示的poster各有不同
> - chrome应用了默认行为截取了视频第一帧作为显示
> - 微信浏览器和safari显示空白，效果就是孤零零的播放图放在一张白纸上

- 如上，通过canvas截取视频第一帧作为默认显示的图片
```js
let video
const cut = function () {
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