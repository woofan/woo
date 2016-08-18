var input = document.getElementById("getnum");//id不能用input
var main_div = document.getElementById("d");
var num_list = [];
function rightin(){
	var text ="";
	if(num_list.length>60){
		alert("超出队列长度上限！");
		return;
	}
	else{
		if(check(input.value))
		num_list.push(input.value);
	else
		alert("请输入10-100之内的数!");
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\" style=\"height:"+num_list[i]+"px;\"></div>";
	}
	main_div.innerHTML = text;
	input.value = "";
	}	
}
function leftin(){
	var text ="";
	if(num_list.length>60){
		alert("超出队列长度上限！");
		return;
	}
	else{
		if(check(input.value))
		num_list.unshift(input.value);
	else
		alert("请输入10-100之内的数!");
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\" style=\"height:"+num_list[i]+"px;\"></div>";
	}
	main_div.innerHTML = text;
	input.value = "";
	}	
}
function rightout(){
	var text ="";
	var lastnum = num_list.pop();
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\" style=\"height:"+num_list[i]+"px;\"></div>";
	}
	main_div.innerHTML = text;
	alert(lastnum);
}
function leftout(){
	var text ="";
	var firstnum = num_list.shift();
	for(var i=0;i<num_list.length;i++){
		text += "<div class=\"bt\" style=\"height:"+num_list[i]+"px;\"></div>";
	}
	main_div.innerHTML = text;
	alert(firstnum);
}
function check(n){
	if(10<=n&&n<=100)
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
