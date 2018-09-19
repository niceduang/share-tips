#### 你真的了解js吗
- [地址](D:\IT\01-妙味机构前端视频教程\最新更新\01.js高级部分（重要）)
- 关于setTimeout
    ```javascript
        setTimeout(function(){
            alert(1);
        },1000);
        // 定时器的第三个参数是什么
        setTimeout(function(num){
            alert(num);//110
        },1000,110);
    ```

- 字符串拼接写法
    ```javascript
        // 字符串短
        window.onload = function(){
            var str = '<div>div</div><span>span</span>';
        }
        // 字符串长呢？
        // 拼接1
        window.onload = function(){
            var str = '<div>div</div>'+
                      '<span>span</span>'+
                      '<p>ppp</p>'+
                      '666';
        }
        // 拼接2
        window.onload = function(){
            var str = '<div>div</div>\
                       <span>span</span>\
                       <p>ppp</p>\
                       666';
        }
    ```

- console.log()
    ```javascript
        var s = 'aaa';
        console.log('%c'+s,'font-size:22px;color:#fff;background:red;');
        // 当然也可以插入图片什么的只是写法更另类，自行百度
    ```
- for循环嵌套
    ```javascript
        // 普通
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 1; j++) {
                alert(i);// 0,1,2,3,4
            }
        }
        // 增加判断
        for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 1; j++) {
                if (i==3) {
                    break
                }
                alert(i);// 0,1,2,4
            }
        }
        // 加入需求特定要跳出另外的某个循环呢？给个名字对应
        a : for (var i = 0; i < 5; i++) {
            for (var j = 0; j < 1; j++) {
                if (i==3) {
                    break a;
                }
                alert(i);// 0,1,2
            }
        }
    ```

- call
    ```javascript
        // call改变this指向
        var obj = {
            run:function(){
                alert(this);
            }
        };
        var arr = [1,2,3,4];
        obj.run();// obj
        obj.run.call(arr);// 1,2,3,4
        obj.run.call(window);// window
        // 如果不写参数，默认是指向window的
        obj.run.call();// window
    ```

- insertBefore
    ```javascript
        //
    ```
- 匿名函数自执行
    ```javascript
        // 匿名函数自执行
        // 加小括号
        (function(){
            alert(1);
        })();
        // 加位运算符,~、!、+
        ~function(){
            alert(11);
        }();
    ```

- 释放内存
    - 注意不用的变量要及时释放

- js-callback
- [公众号](https://mp.weixin.qq.com/s?__biz=MzI4OTc3NDgzNQ==&mid=2247484695&idx=1&sn=57b4e00a6929784ae9c5026cc71f46ef&chksm=ec2b488bdb5cc19d431d9fad465d7b0c2c0520919d6bf5124cd61bff4046f73af6aab08463b9&mpshare=1&scene=23&srcid=0430u8MCo6cKBMFbDoYo9MQC#rd)
- 如请求，node-readFile...
- JDGame-onePlus-接口：onSuccess,onFail,nextLevel,getTips
