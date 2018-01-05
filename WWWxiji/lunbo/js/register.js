window.onload = function(){
	//获取页面元素
	var oRegister = document.getElementById("register");
	var oGoLogin = document.getElementById("goLogin");
	var oUserName = document.getElementById("username");
	var oPass = document.getElementById("password");
	//给注册按钮加事件
	var userNAN = false;
	var pwdNAN = false;
		oUserName.onblur = function(){
			var re = /^(13|14|15|17|18)\d{9}$/g;
			if(re.test(oUserName.value)){
				userNAN = true;
			}else{
				alert("手机号不合法")
			}
		}
		oPass.onblur = function(){
			var re =/(?:\d.*_)|(?:_.*\d)|(?:[A-Za-z].*_)|(?:_.*[A-Za-z])|(?:[A-Za-z].*\d)|(?:\d.*[A-Za-z])/ ;
			if(re.test(oPass.value)){
				pwdNAN = true
			}else{
				alert("密码不合法")
			}
		}
		oRegister.onclick = function(){
			
			if(pwdNAN == true && userNAN == true){
			oRegister.onclick = function(){
				//获取用户名和密码
				var usn = oUserName.value;
				var pwd = oPass.value;
				
				//用户不能为空
				if(!usn){
					alert("用户名不能为空！");
					return;
				}

				var users = getCookie("douyongchao_registerUsers") ? getCookie("douyongchao_registerUsers") : "";
				
				users = convertStrToObj(users);
				if(usn in users){ //判断usn属性是否在users对象中。
					alert("用户名已经被注册");
					return;
				}else{
					users[usn] = pwd;
					userStr = convertObjToStr(users);
					setCookie("douyongchao_registerUsers",userStr,7);
					console.log(decodeURIComponent(document.cookie))
					alert("注册成功！");
				}
			};
		}else{
			alert("请检查用户名或密码是否合法")
		}
	}
	//给增登录按钮添加点击事件
	oGoLogin.onclick = function(){
		//转到登录页面
		location.href = "Login.html";
	};
};
//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	var users = str.split(":"); 
	var obj = {};
	for(var i = 0; i < users.length; i ++){
		var userData = users[i].split(",");
		obj[userData[0]] = userData[1];
	}
	return obj;
}

function convertObjToStr(obj){
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			str += ":";
		}
		str += usn + ',' + pwd;
	}
	return str;
}
