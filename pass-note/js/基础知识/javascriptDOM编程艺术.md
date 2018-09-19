##### javascriptDOM编程艺术笔记
- 续miaov的作用域讲解
    ```html
        <a href="" title="link">link</a>
        <a href="" title="link">link</a>
        <a href="" title="link">link</a>
        <script type="text/javascript">
            var aLink = document.getElementsByTagName('a');
            for (var i = 0; i < aLink.length; i++) {
                aLink[i].onclick = function(){
                    alert(i);//3
                    return false;// 阻止默认跳转
                }
            }
        </script>
    ```

- [href](javascriptDOM编程艺术)
    - [5.2-平稳退化](p65)
    ```javascript
        搜索机器人
            自动化的程序，他们浏览web把各网页添加的搜索引擎的数据库里
            如果你的javascript网页不能平稳退化，他们在搜索引擎上的排名就可能大受损害
    ```
    ```html
        <a href="./img/1.jpg" onclick="showPic();return false;">图片</a>
        <a href="./img/2.jpg" onclick="showPic();return false;">图片</a>
        <a href="./img/3.jpg" onclick="showPic();return false;">图片</a>
        <img src="./img/1.jpg" alt="">
        <!-- 
            - 平稳退化
                - 如果javascript功能被禁用会怎样？
                - 在没有禁用javascript的时候，浏览器会沿着href属性前进
                - 如果选用javascript:;**伪协议**<a href="showPic('./img/1.jpg');return false;">图片</a>
                - 如果禁用js就会出现访问链接图片出错
                - 类似的href里面写成 # 也会导致同样的问题
        -->
    ```
    - 普遍性测试到针对性测试
    ```html
        <a href="javascript:;" id="btn1">btn1</a>
        <script type="text/javascript">
            change();
            function change(){
                // 普遍性测试,如果不支持就不继续执行了
                if (!document.getElementById) {
                    return false;
                }
                // 针对性测试,如果没有这个dom就不进行了
                if (!document.getElementById('btn1')) {
                    return false;
                }
            }
            // - 现在网页有这个元素，但不代表将来依然有这个元素，
            // - 所以有了这个预防性措施，即是以后删了这个元素也用不着担心这个网页的javascript会突然出错
            // - **作为一条原则**如果想用javascript给网页添加一些行为，就不应该让javascript对这个网页结构有任何依赖
        </script>
    ```
    - 共享onload事件
    ```html
        // 原始
        window.onload = function(){
            fn1();
            fn2();
            fn3();
        }
        // 优化封装
        function addLoadEvent(fn){
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = fn;
            }else {
                window.onload = function(){
                    oldonload();
                    fn();
                }
            }
        }
        addLoadEvent(fn1);
        addLoadEvent(fn2);
        addLoadEvent(fn3);
    ```
- 进程
    - 2017-06-06-早上完成(46页-75页)
    - 2017-06-09-早上完成(75页-96页)
