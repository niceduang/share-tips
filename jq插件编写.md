### [插件编写规范](https://my.oschina.net/blogshi/blog/225443)

> - 有些随不是规范但确实约定俗成，也可以称作规范
> - 注意需要 `return this` 进而保证链式调用

- jquery 插件的开发包括两种：
  > - 一种是类级别的插件开发，即给 jquery 添加新的全局函数，相当于给 jquery 类本身添加方法.jquery 的全局函数就是属于 jquery 命名空间的函数。
  > - 一种是对象级别的插件开发，即给 jquery 对象添加方法

1. 类级别的插件开发
   > 类级别的插件开发最直接的理解就是给 jquery 类添加类方法，可以理解为添加静态方法。典型的例子就是\$.ajax() 这个函数，将函数定义于 jquery 的命名空间中。关于类级别的插件开发可以采用如下几种形式进行扩展

```js
;(function($) {
  $.fn.extend({
    check: function() {
      return this.each(function() {
        this.checked = true
      })
      // return this;
    },
    uncheck: function() {
      return this.each(function() {
        this.checked = false
      })
      // return this;
    }
  })
})(jQuery)
// 调用 .check() 方法
$('.input-item').check()
```

2. 对象级别的插件开发

```js
;(function($, window, document) {
  // our plugin constructor
  var Run = function(el, ops) {
    this.ops = ops
  }
  // the plugin prototype
  Run.prototype = {
    init: function() {
      // THIS
      return this
    },
    setInterval: function() {
      //
    },
    handleClick: function(e) {
      //
    },
    clearInterval: function() {
      //
    }
  }
  $.fn.Run = function(ops) {
    return this.each(function() {
      new Run(this, ops).init()
    })
  }
})(jQuery, window, document)
```
