# share-tips
> - 分享在工作中遇到的问题与解决方案
> - 提炼测试，有效避坑节约时间与精力
> - 及时总结归纳避免再次踩坑
> - 关乎自己也利于他人



### Todos
- [ ] 项目从0到1，项目设计重构打包上线发布,玩Nginx
* [不仅仅是前端er——折腾服务器武装自己](https://segmentfault.com/a/1190000013242438)
- [ ] 
- [ ] vue项目部署发布
- [ ] react全家桶
- [ ] [Hybrid](https://www.imooc.com/learn/850)
```
1. 什么是Hybrid
2. H5如何与Native通信
3. Hybrid核心交互
4. Hybrid中的账号体系
5. Native能力在Hybrid中的应用
6. 离线更新
7. 如何落地一个Hybrid项目
```

- [ ] [datePicker](https://www.imooc.com/learn/820)
```
- 学到什么？
1. 使用HTML和CSS编写组件的静态UI
2. 使用原生javascript完成日历数据的获取
3. 使用原生javascript实现静态UI和动态数据的结合，完成日历数据的渲染
4. 事件绑定处理
5. 前端组件的基本构成和编写模式
```

* 音乐
    * [腾讯](http://vii.qq.com/cp/a20160128stsy/media-music.shtml)
    * 音乐倒计时
    * 音乐进度条
    * 音乐随机上一首下一首


- [ ] [如何用node开发自己的cli工具并发布到NPM ](https://github.com/pkwenda/blog/issues/7)
- [ ] [laravel](https://laravel.com/)
```
// 需要考虑请求发送成功与否
// 成功：但是状态不是200的情况
// 成功：状态是200，但是没有数据的情况
$.ajax({
        url: 'http://wiki.xyzphp.com/t.php',
        type: 'POST',
        data: {
            time: 2
        },
    })
    .done(function(res) {
        console.log("success");
        console.log(res);
        // 处理返回的数据，因为有的时候返回的数据可能是字符串，而非json格式
        res = typeof(res) === 'string' ? JSON.parse(res) : res;
        if (res.status == 200) {
            // 如果返回的数据data为空
            if (res.data.length === 0) {
                console.log('没有数据');
            } else {
                // 如果返回的数据data不为空
                console.log('继续相关操作');
            }
        }
        // 如果返回的数据状态不是200
        else {
            alert('error');
        }
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
```

- [ ] 



### 近期基础汇总

- 什么情况下会碰到跨域问题？有哪些解决方法？
```
跨域问题是这是浏览器为了安全实施的同源策略导致的，同源策略限制了来自不同源的document、脚本，同源的意思就是两个URL的域名、协议、端口要完全相同。
script标签jsonp跨域、nginx反向代理、node.js中间件代理跨域、后端在头部信息设置安全域名、后端在服务器上设置cors。
```

- 翻转一个字符串
```
// 思路就是先将字符串转成一个数组，然后用数组的reverse()+join()方法
let a="hello word";
let b=[...str].reverse().join("");//drow olleh
```


- 原型链、作用域、继承
- 基础的问题大部分都是数组的操作，排序怎么写，map和forEach的区别，object的属性和方法有哪些等等
- vue被问的比较多，vue的响应原理，父子组件通信，vue-router的应用，vueX的核心api，
- 还有就是部分关于小程序、ES6、webpack等问题
- 另外会问一些状态码、jsonp、同于跨域、动画性能、前端优化方面的问题
- 怎么用node去解决实际工作中的问题，比如联调转发、mock数据、接口校验等等
- 








### 便捷资源
* [移动端抓包](http://www.telerik.com/fiddler)
* [找背景图](https://alpha.wallhaven.cc/)
* [搜狐智能社](http://my.tv.sohu.com/user/299736457#t0)
* [找设计](https://dribbble.com/)