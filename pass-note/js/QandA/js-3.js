/**
 * 需求分析：
 * 1、题目以数据传入
 * 2、每一题有限时,秒为单位
 * 3、有数据记录每一关卡相关数据
 */
(function(w){
	function Game(ops) {
		this.ops = ops || {};
		this.data = this.ops.data;
		this.len = this.data.length;
		this.timeLimit = this.ops.timeLimit || 0;
		this.autoNext = this.ops.autoNext || false;
		this.container = document.querySelector('.question');
		this.userInfo = [];
		this.init();
	}
	Game.prototype = {
		// 初始话题目库
		init: function(){
			this.timer = null;
			this.index = 0;
			this.checked = -1;
		},
		start: function(){
			// 创建题目
			this.createQA(this.index);
			// 元素创建完成绑定相关事件
			this.bindClick();
		},
		createQA: function(m){
			if (!this.checkIndex(m)) {
				return;
			}
			this.checked = -1;
			var str = '<dl>';
			var data = this.data[m];
			str += '<dt>'+(this.index+1)+':'+data['q']+'</dt>'
			for (var i = 0; i < data['a'].length; i++) {
				str += '<dd>';
				str += data['a'][i];
				str += '</dd>';
			}
			str += '</dl>';
			this.container.innerHTML = str;
			// 答题对象一旦创建，也要创建时间监听器
			this.createTimer();
		},
		createTimer: function(){
			this.timeUsed = 0;
			var _this = this;
			this.upDataTime(this.timeLimit,this.timeUsed);
			this.clearTimer();
			this.timer = setInterval(function(){
				_this.timeUsed++;
				console.log("用时"+_this.timeUsed+"s");
				_this.upDataTime(_this.timeLimit,_this.timeUsed);
			},1000);
		},
		clearTimer: function(){
			this.timer && clearInterval(this.timer);
		},
		hasTime: function(){
			if (this.timeUsed>=this.timeLimit&&this.timeLimit>0) {
				return false;
			}else{
				return true;
			}
		},
		upDataTime: function(timeLimit,timeUsed){
			if(!this.hasTime()){
				alert("超时没答案~游戏结束~");
				this.clearTimer();
				// 每新开一局，不管答对与否，不管是否作答，都记录数据
				this.record(this.index);
				return;
			}
			console.log("剩余时间："+(timeLimit - timeUsed)+"s");
		},
		prev: function(){
			// 
		},
		next: function(){
			if (!this.checkIndex(this.index)) {
				return;
			}
			if (!this.hasTime()) {
				alert('游戏已经结束~');
				return;
			}
			if (this.checked == -1) {
				alert('请选择你的答案~');
				return;
			}
			// 有限时
			if (this.timeLimit>0) {
				// 先数据记录
				this.record(this.index);
			}
			// 再处理下一题
			this.index++;
			this.createQA(this.index);
		},
		checkIndex: function(m){
			if (m<0) {
				console.log('请从正确的题号开始');
				return false;
			}else if(m>=this.len){
				console.log('答题完毕~');
				this.clearTimer();
				return false;
			}else{
				return true;
			}
		},
		bindClick: function(){
			var _this = this;
			this.container.addEventListener('click',function(e){
				if (!_this.hasTime()) {
					alert('游戏已经结束~');
					return;
				}
				var target = e.target;
				var _dd = _this.container.querySelectorAll('dd');
				if (target.nodeName.toLowerCase() == 'dd') {
					for (var i = 0; i < _dd.length; i++) {
						if(_dd[i].classList.contains('checked')){
							alert('不可以再次更改答案！');
							return;
						}
					}
					delAllChecked(_dd);
					target.classList.add('checked');
					_this.checked = target.index;
					if (_this.checked === _this.data[_this.index].rigth - 1) {
						console.log('rigth');
					}else{
						console.log('error');
					}
					if (_this.timeLimit<=0) {
						console.log('不限时，点击就记录当前关卡用时~');
						_this.clearTimer();
						_this.record(_this.index);
					}
					if (_this.autoNext) {
						_this.next();
					}
				}
			},false);
			function delAllChecked(_dd){
				for (var i = 0; i < _dd.length; i++) {
					_dd[i].index = i;
					_dd[i].classList.remove('checked');
				}
			}
		},
		isRight: function(){
			// 
		},
		record: function(m){
			this.userInfo.push({
				"题号":m+1,
				"yourAnswer":this.checked+1,
				"rigthAnswer":this.data[m].rigth,
				"timeUsed":this.timeUsed
			});
		},
		reStart: function(){
			this.userInfo.length = 0;
			this.init();
			this.start();
		},
		stop: function(){
			// 
		},
		getDetails: function(){
			console.log(this.userInfo); 
		}
	}
	function createQuestion(ops){
		return new Game(ops);
	}
	w.createQuestion = createQuestion;
})(window);