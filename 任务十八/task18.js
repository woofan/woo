var input = document.getElementById("getnum");//id不能用input
var main_div = document.getElementById("d");
var num_list = [];
function rightin(){
	var text ="";
	if(isnumber(input.value))
		num_list.push(input.value);
	else
		alert("输入非法!");
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\">"+num_list[i]+"</div>";
	}
	main_div.innerHTML = text;
	input.value = "";

}
function leftin(){
	var text ="";
	if(isnumber(input.value))
		num_list.unshift(input.value);
	else
		alert("输入非法!");
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\">"+num_list[i]+"</div>";
	}
	main_div.innerHTML = text;
	input.value = "";

}
function rightout(){
	var text ="";
	var lastnum = num_list.pop();
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\">"+num_list[i]+"</div>";
	}
	main_div.innerHTML = text;
	alert(lastnum);
}
function leftout(){
	var text ="";
	var firstnum = num_list.shift();
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\">"+num_list[i]+"</div>";
	}
	main_div.innerHTML = text;
	alert(firstnum);
}
function isnumber(n){
	var check = /^\d+$/;
	if(check.test(n))
		return true;
	else
		return false;
}
var btn1 = document.getElementById("leftin");
btn1.addEventListener("click", function() {
    leftin();
});
var btn2 = document.getElementById("rightin");
btn2.addEventListener("click", function() {
    rightin();
});
var btn3 = document.getElementById("leftout");
btn3.addEventListener("click", function() {
    leftout();
});
var btn4 = document.getElementById("rightout");
btn4.addEventListener("click", function() {
    rightout();
});
