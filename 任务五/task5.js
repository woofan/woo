// window.onload = function(){
// 	var l = document.getElementById("loading");
// 	if(l != null){
// 		l.style.display = "none";
// 	}
// }
window.onload = loading;//这里有括和没括号的区别!!!!有括号表示获取函数执行结果,没括号表示获取该函数.
function loading(){
	var l = document.getElementById("loading");
	if(l != null){
		l.style.display = "none";
	}
}