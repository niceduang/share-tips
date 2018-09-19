#### Egoo小技巧
- 整理于平时需求
- 更新小技巧，旨在提升效率
***
##### html相关

- 被坑一次
> 正常的代码在360浏览器上样式乱了，
> 搜索发现360是双核，分为极速模式和兼容模式，
> 极速模式是用webkit内核，兼容模式是用trident内核（IE内核）
```html
    <meta name="renderer" content = "webkit"/>
```

- 了解国内常用浏览器内核
> 1. 搜狗、QQ：IE内核（兼容模式）
> 2. 360、遨游：Webkit内核（极速模式）

- 扩展几个常见meta标签

```html
    优先使用IE最新版本和Chrome
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>

    浏览器内核控制：（国内很多是双内核（webkit，trident）添加以下meta可以控制浏览器使用何种内核渲染）
    <meta name="renderer" content = "webkit | ie-comp| ie-stand"/>
    content的取值为 webkit   ie-comp  ie-stand, （是区分大小写的，使用的时候要注意）,分别代表webkit 内核，IE 兼容内核，IE 标准内核。

    如：若页面需默认用极速核，增加标签：
    <meta name="renderer" content="webkit">
```

- 缓存设置
```html
    <!-- 禁止浏览器从本地计算机的缓存中访问页面内容： -->
    <meta http-equiv="Pragma" content="no-cache">
```

- 手机端
```html
    <!-- 忽略将页面中的数字识别为电话号码 -->
    <meta name="format-detection" content="telephone=no" />
    <!-- 忽略Android平台中对邮箱地址的识别 -->
    <meta name="format-detection" content="email=no" />
```


##### css相关
- 此处分页布局实现
```html
    <div class="pagtion">
        <span class="cur">一</span>
        <span>二</span>
        <span>三</span>
        <span>四</span>
        <span>五</span>
        <span>六</span>
    </div>
    <style type="text/css">
        /*这个得注意编码html和css文件编码统一*/
        .pagtion span{
            width: 0.34rem;
            background-color: #6c1b0d;
        }
        .pagtion span.cur{
            width: 1.08rem;
            background-color: #df4429;
        }
        .pagtion span.cur::before{
            content: "第";
        }
        .pagtion span.cur::after{
            content: "天";
        }
    </style>
```
##### js相关
- 缩放
```javascript
    
```

##### 编写技巧相关



- 进程到11月份



- 实现自定义原生控件的样式
> 由于select移动端原生样式很丑，但是原生弹出样式是符合我们设计的原则
> 解决方法：将原本select 设置为透明，z-index设置高～再用一个比较好看的样式‘假装’在表面

- iphone动态生成html元素click失效
> 解决方法：  为绑定click的元素增加css样式   cursor: pointer;

- jQuery 插件扩展
```javascript
// 给jQuery全局对象扩展一个方法
$.logDate = function(){
    console.log(new Date());
}
$.logDate();// 类似 $.each()


// 扩展一个普通jQuery对象的方法
$.fn.logText = function(){// 类似在jQuery对象原型上新增一个方法，即所有jQuery对象都有这个方法
    console.log($(this).text());
}
$('.text').logText();
```