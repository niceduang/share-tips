### 组件开发

- 什么是组件？
  - 对面向对象的深入应用（UI 组件，功能组件）
  - 将 `配置参数、方法、事件`，三者进行分离
- 创建自定义事件
  - 有利于多人协作开发代码
  - 如何去挂载自定义事件与事件函数
- 例如：
  - 基于 JQ 的选项卡的组件开发模式
    - Trigger() extend()等方法的使用

* 挂载与暴露

```js
;(function(w) {
  var Tab = function() {
    //
  }
  Tab.prototype = {
    //
  }
  w.Tab = Tab
})(window)
```

- 注册到 jQuery 方法

```js
;(function(w, $) {
  var Tab = function() {
    //
  }
  Tab.prototype = {
    //
  }
  w.Tab = Tab

  // 注册成JQ方法
  $.fn.extend({
    tab: function() {
      new Tab()
      return this // 返回出this，可以实现jQuery的链式调用
    }
  })
})(window, jQuery)
// $('.j-tab').tab().css('color', '#f00');
```

#### 命名空间

```js
var roles = (function() {
  function bindHandle() {
    // handle
  }
  function init() {
    bindHandle()
  }
  return {
    init: init
  }
})()
```

### Todo

- JD-fire 触发自定义事件
- 火影重构对话打字自定义事件

- [ ] [datePicker](https://www.imooc.com/learn/820)

#### js 写法

```js
let abc = (function() {
  let Handle = function(obj, status) {
    this.obj = obj
    this.status = status || 1
  }
  Handle.prototype = {
    setInfo() {
      // ...
      return this
    },
    setStatus() {
      // ...
      return this
    }
  }
  // 暴露构造函数接口
  return function(obj) {
    return new Handle(obj)
  }
})()
```
