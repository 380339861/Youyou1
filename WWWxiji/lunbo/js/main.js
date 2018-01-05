//设置配置文件
require.config({
	paths : {
		
		"banner" : "banner",
	}
})
require(["banner"],function(banner){
	//代码
//	alert($);
//		alert("hehe");
//		$("body").append("<h2>ksks</h2>");
//		$.cookie("aaa","bbb",{expires:7,path:"/"});
//		alert($.cookie("aaa"));
//		alert(mod1.fn());
//		alert(mod2.fn());
//		drag.drag("box");
	
	banner();
	new Slider("slide1")
	
})
