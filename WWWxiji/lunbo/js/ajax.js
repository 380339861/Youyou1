function ajax(url,fnup,fndow){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open("GET",url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				if(typeof fnup == "function"){
					fnup(xhr.responseText);
				}
			}else{
				if(typeof fndow == "function"){
					fndow();
				}
			}
		}
	}
}

































