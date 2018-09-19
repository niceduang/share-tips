##### 面向对象
- [miaov](D:\IT\01-妙味机构前端视频教程\妙味远程套餐6：面向对象、正则、组件开发视频教程【D】\妙味云课堂-第1章 面向对象基础)
- [oop](https://segmentfault.com/a/1190000002550104)



###### 笔记
- 即oop
    - 抽象（共性）
    - 封装（暴露）
    - 继承（复用）
    - 多态（js-弱类型语言，故用的较少）
- 对象组成
    - 属性--状态：静态的
    - 方法--状态：动态的
      ```javascript
        // 声明
        var arr = {};
        arr.name = "Array";
        arr.check = function(){
            console.log("is checking……");
        }
        // 调用
        console.log(arr.name);
        arr.check();
      ```
- 一步一步学
    - 复杂与简单的面向对象程序，区别只是属性多一点，方法多一点
    - 复杂不在于上述，而在于this指向
- 工厂函数，即封装函数
    ```javascript
        // 封装函数
        function createPerson(name) {
            // 1、原料
            var obj = new Object();
            // 2、加工
            obj.name = name;
            obj.showName = function(){
                alert(this.name);
            };
            // 3、成品出厂
            return obj;
        }
        // 调用
        var person1 = createPerson("duang");
        person1.showName();
        var person2 = createPerson("dj");
        person2.showName();
    ```
- 构造函数(new-创建)
```javascript
    // 通过new来创建的：此时函数中的this就是创建出来的对象，
    // 而且函数的返回值直接就是this（隐式返回）
    
    // new来创建
    function createPerson(name) {
        this.name = name;
        this.showName = function(){
            alert(this.name);
        };
    }
    // 调用
    var person1 = new createPerson("duang");
    person1.showName();
    var person2 = new createPerson("dj");
    person2.showName();
```
- js基础回顾
    - 基本类型：赋值的时候只是值的复制
    ```javascript
        var a = 10;
        var b = a;
        b = b + 10;
        console.log(a);// 10
        console.log(b);// 20
    ```
    - 对象类型：赋值不仅是值的复制，而且也是引用的传递
    ```javascript
        var a = [1,2,3];
        var b = a;
        b.push(4);
        console.log(a); // [1, 2, 3, 4]
        console.log(b); // [1, 2, 3, 4]
        // 原因是内存中注入,引用关系
    ```
    - 对象类型的另一种形式
    ```javascript
        var a = [1,2,3];
        var b = a;
        // b.push(4);
        b = [1,2,3,4];
        console.log(a); // [1, 2, 3]
        console.log(b); // [1, 2, 3, 4]
        // 这种方式属于赋值，内存中断开了引用关系，故 a 的值并没有受影响
    ```
    - 关于比较
        - 基本类型：只要值相等就是相等关系
        - 对象类型：不仅是值相等，内存中的引用必须是同一指向
    - 关于上面通过new来创建的对象说明
        - 上面写着是创建了两个对象，即内存中占了两块地方
        - 如果声明了200/2000个对象，那便是内存中占用200/2000块
        - 极大的消耗了内存，尽管内容是完全相同的
- 原型
    - 用来去改写对象下面公用的方法或者属性
    - 让公用的方法或者属性在内存中只存在一份
    - 好处：提高性能
    - 类比理解
        - 原型:html中的class
        - 普通方法：html中的行间style
    - 普通方法的局限
    ```javascript
        var arr1 = [1,2,3];
        arr1.sum = function(){
            var result = 0;
            for (var i = 0; i < this.length; i++) {
                result += this[i];
            }
            return result;
        }
        console.log(arr1.sum());
        var arr2 = [1,2,3,4,5,6,7,8];
        arr2.sum = function(){
            var result = 0;
            for (var i = 0; i < this.length; i++) {
                result += this[i];
            }
            return result;
        }
        console.log(arr2.sum());
    ```
    - 原型的优势
    ```javascript
        // prototype 要写在构造函数下面
        // 写在构造函数下面，数组的构造函数是 Array
        Array.prototype.sum = function(){
            var result = 0;
            for (var i = 0; i < this.length; i++) {
                result += this[i];
            }
            return result;
        }
        var arr1 = [1,2,3];
        console.log(arr1.sum());
        var arr2 = [1,2,3,4,5,6,7,8];
        console.log(arr2.sum());
    ```
- 代码实践
    1. 思路即为普通方法思路
    2. 需要对普通方法变形
        - 原则
            - 尽量不要函数嵌套函数
            - 可以有全局变量
            - 把onload中不是赋值的语句放到单独的函数中
    3. 改成面向对象
        - 原则
            - 全局变量就是属性
            - 函数就是方法
            - onload中创建对象
            - 注意this指向问题
                - 事件或则定时器的时候，this指向容易发生改变
                - 尽量让面向对象中的this指向对象
- 实现拖拽的面向对象js组件
- 注意：关于event对象的问题，event对象只出现在事件里面，所以写方法的时候要注意一下！
