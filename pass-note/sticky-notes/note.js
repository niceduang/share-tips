/**
 * 命名空间与模块化
 */
// 命名空间
var app = {
	utils:{}
}
// 工具方法模块
app.utils = {
	$:function(selector,node){
		return (node || document).querySelector(selector);
	}
}
// 立即执行函数
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
/**
 * 事件回调应要抽象出来
 */