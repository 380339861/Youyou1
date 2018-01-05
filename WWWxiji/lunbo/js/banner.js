class Slider{
	constructor (id){
		//实例属性
		//外层div
		this.ele = byId(id);
		//所有大图
		this.ullis = byTagName((byTagName(id,"ul")[0]),"li");
		this.num = this.ullis.length; //大图数量
		this.ollis = this.createEle();
		this.indexA = 0; //记录当前显示图片的下标
		this.oDiv = byId("msg");
		this.sport();
		this.ltBtn = byId("ltBtn");
		this.rtBtn = byId("rtBtn");
		this.mouseover();
		this.timer = null;
		this.aotoPlay();
	}
	//原型方法
	//添加页面所缺元素
	createEle(){
		//创建ol
		let oL = $create("ol");
		//创建空数组，用于存入li
		let arr = [];
		//创建li
		for(let i = 0;i < this.num;i ++){
			let oLi = $create("li");
			oLi.innerHTML = i+1
			oL.appendChild(oLi);
			arr.push(oLi);
		}
		//oL放到div中
		this.ele.appendChild(oL);
		//创建放文字的div
		let oDiv = $create("div");
		oDiv.id = "msg";
		this.ele.appendChild(oDiv);
		
		//返回数组
		return arr;
	}
	//设置图片轮播
	sport(){
		//将所有的ul中的li隐藏，且将ol中所有的li颜色为红色
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = "none";
			this.ollis[i].style.background = "#e8e7e7";
		}
		//当前大图显示
		this.ullis[this.indexA].style.display = "block";
		//当前圆点为蓝色
		this.ollis[this.indexA].style.background = "#333";
		//给div中设置文字信息
		this.oDiv.innerHTML = this.ullis[this.indexA].firstChild.firstChild.alt;
	}
	mouseover(){
		var that = this;
		//给小圆点添加移入事件
		for(var i = 0;i < this.num;i ++){
			this.ollis[i].index = i;
			this.ollis[i].onmouseenter = function(){
				that.indexA = this.index;
				that.sport();
			};
		}
		
	}
	//自动轮播
	aotoPlay(){
		let that = this;
		this.timer = setInterval(function(){
			that.indexA ++;
			that.indexA %= that.num;
			that.sport();
		},3000)
		this.ele.onmouseenter = function(){
			clearInterval(that.timer);
		}
		this.ele.onmouseleave = function(){
			that.aotoPlay();
		}
	}
}