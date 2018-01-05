//byId
function byId(id){
	return document.getElementById(id);
}
//byTagName
function byTagName(id,tagName){
	if(typeof id == "string" && byId(id)){
		return byId(id).getElementsByTagName(tagName);
	}else if(typeof id == "object"){
		return id.getElementsByTagName(tagName);
	}
}
//createElement
function $create(tagName){
	return document.createElement(tagName);
}
