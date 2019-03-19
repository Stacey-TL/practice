new Vue({
	el:"#app",
	data:{
		msg:'信息',
		name:'之华',
		age:32,
		link:'https://vue.docschina.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3',
		href_link:'<a href="https://vue.docschina.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3">显示这个链接</a>',
		x:0,
		y:0
	
	},
	methods:{
		author:function(name){
			return name;
		},
		add:function(){
			this.age++;
		},
		subtract:function(){
			this.age--;
		},
		updateXY:function(event){
			this.x=event.offsetX;
			this.y=event.offsetY;
		},
		// js方法阻止冒泡
		stopMoing:function(event){
			event.stopPropagation();
		},
		alert:function(event){
			alert("弹出不跳转");
		},
		
	}
})