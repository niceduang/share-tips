# 类Window便签
项目需求来源：[webkit](https://webkit.org/demos/sticky-notes/)
### 基础功能
1. 包含
2. 实现
3. 增删改，本地存储
### 基础思路
1. 拖拽实现[(拖拽基本思路)](http://github.com/niceduang/egoodev)
2. 生成位置随机不重复处理
3. 模块化开发
4. 
### 经验积累
1. 无法remove掉,因为`bind(this)`返回的是新函数,所以绑定的函数通过`removeEventListener`无法移除
```
;(function(utils){
    var noteTpl = `<div>
                        tpl
                        <div class="close">close</div>
                   </div>`;
    var $ = utils.$;
    function Note(ops){
        var note = document.createElement('div');
        note.innerHTML = noteTpl;
        document.body.appendChild(note);
        this.note = note;
        this.init();
        this.bindEvent();
    }
    Note.prototype.init = function(){
        // 
    }
    Note.prototype.close = function (e){
        console.log(this,'close');
        // 无法remove掉,因为`bind(this)`返回的是新函数,所以绑定的函数通过`removeEventListener`无法移除
        $('.close',this.note).removeEventListener('click',this.close.bind(this));
    }
    Note.prototype.bindEvent = function (e){
        $('.close',this.note).addEventListener('click',this.close.bind(this));
    }
    window.Note = Note;
})(app.utils);
```
解决办法：1、移除元素；2、优化写法
```
;(function(utils){
    var noteTpl = `<div>
                        tpl
                        <div class="close">close</div>
                   </div>`;
    var $ = utils.$;
    function Note(ops){
        var note = document.createElement('div');
        note.innerHTML = noteTpl;
        document.body.appendChild(note);
        this.note = note;
        this.init();
        this.bindEvent();
    }
    Note.prototype.init = function(){
        // 
    }
    Note.prototype.close = function (e){
        console.log(this,'close');
    }
    Note.prototype.bindEvent = function (e){
        // 关闭处理事件
        var closeHandler = function(e){
            this.close(e);
            $('.close',this.note).removeEventListener('click',closeHandler);
        }.bind(this);
        $('.close',this.note).addEventListener('click',closeHandler);
    }
    window.Note = Note;
})(app.utils);
```
2. 