let global_first_input = document.getElementById("first_input");
let global_first_div = document.getElementById("first_div");
let global_second_div = document.getElementById("second_div");
let global_first_textarea = document.getElementById("first_textarea");
let global_my_button = document.getElementById("my_button");
let input_value_list = new Array();//所有合法输入的内容存在这个数组里
let all_hobby_list = new Array();//所有合法的兴趣爱好输入内容存在这个数组里

function main(){//主函数
	global_first_input.addEventListener("keydown",getHobby,false);
	global_my_button.addEventListener("click",getHobbies,false);
}
function getHobby(event){//按下回车,逗号,空格后返回值
	let keycode = event.keyCode;
	let input_value = global_first_input.value;	
	if(keycode == "13" || keycode == "32" || keycode =="188"){//判断是否按下回车,逗号或空格
		event.preventDefault();//alert(input_value_list[0]);
		global_first_input.value ="";
		if(input_value == ""){//输入空值时提示
			alert("请输入内容!");
			global_first_input.value = "";
		}
		else{//非空值
			input_value_list.push(input_value.trim());
			removeRepeatItem(input_value_list);//消除重复数据
			keepUpperLimit(input_value_list,10);//将有效数据控制在10个以内
			deleteOldInput("my_input1");//删除上一批input
			createNewInput(input_value_list,global_first_div,"my_input1");//以input_value_list数据为基础,在global_first_div尾部生成input
			bindingMouseOverEvent("my_input1");//给所有生成的input元素绑定鼠标悬停事件
			bindingMouseOutEvent("my_input1");//给所有生成的input元素绑定鼠标移走事件
			bindingMouseClickEvent("my_input1");//给所有生成的input元素绑定鼠标点击事件
		}				
	} 
}

function getHobbies(){
	all_hobby = global_first_textarea.value.trim();//console.log(all_hobby);
	global_first_textarea.value = "";
	if(all_hobby == ""){
		alert("请输入兴趣爱好!");
	}
	else{
		new_hobby_list = all_hobby.split(/[\r\n,，、 ]/);//console.log("长度:"+all_hobby_list.length);
		all_hobby_list.push.apply(all_hobby_list,new_hobby_list);//将新数据添加到原数组中去
		removeRepeatItem(all_hobby_list);//消除重复数据
		deleteOldInput("my_input2");//删除上一批input
		keepUpperLimit(all_hobby_list,10);//将有效数据控制在10个以内
		createNewInput(all_hobby_list,global_second_div,"my_input2");////以all_hobby_list数据为基础,在global_second_div尾部生成input
		bindingMouseOverEvent("my_input2");//给所有生成的input元素绑定鼠标悬停事件
		bindingMouseOutEvent("my_input2");//给所有生成的input元素绑定鼠标移走事件
		bindingMouseClickEvent("my_input2");//给所有生成的input元素绑定鼠标点击事件
		}
	
}

function designInput(className){//定义动态生成的按钮的各种属性
	let input = document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("class",className);//console.log(typeof(input));
	return input;
}
function bindingMouseOverEvent(className){//给所有生成的input元素绑定鼠标悬停事件
	let all_input = document.getElementsByClassName(className);
	for(let i=0;i<all_input.length;i++){
		all_input[i].addEventListener("mouseover",mover,false);
	}
}
function bindingMouseOutEvent(className){//给所有生成的input元素绑定鼠标移走事件
	let all_input = document.getElementsByClassName(className);
	for(let i=0;i<all_input.length;i++){
		all_input[i].addEventListener("mouseout",mout,false);
	}
}
function bindingMouseClickEvent(className){//给所有生成的input元素绑定鼠标移走事件
	let all_input = document.getElementsByClassName(className);
	for(let i=0;i<all_input.length;i++){
		all_input[i].addEventListener("click",mclick,false);
	}
} 
function mover(){//悬停事件,左边多出"点击删除"四个字,底色变红
	this.value = "点击删除 " + this.value;
	this.style.backgroundColor = "red"; 
}
function mout(){//鼠标移走事件,恢复原样
	let length = this.value.length;
	this.value = this.value.substr(5);//删去"点击删除 "这5个字符;substr(a,b)函数返回截取字符串,a为起始下标,b为截取长度,不填表示到末尾
	this.style.backgroundColor = "#58ACFA";
}
function mclick(){//鼠标点击事件,点击后删除该元素
	let value = this.value.substr(5);//删去"点击删除 "这5个字符
	for(let i=0;i<input_value_list.length;i++){//同时删去数组中该成员
		if(input_value_list[i] == value){
			input_value_list.splice(i,1);//splice(a,b,c)从a的位置开始向后删除b个元素,c为可选输入,表示替代的元素

		}
	}
	this.parentNode.removeChild(this);//alert(input_value_list);
}
function deleteOldInput(className){//每次生成前都用该函数删除之前的已存在的input
	let all_input = document.getElementsByClassName(className);
		for(let j=all_input.length-1;j>=0;j--){
			all_input[j].parentNode.removeChild(all_input[j]);
		}
}
function createNewInput(value_list,create_place_element,className){
	for(let i=0;i<value_list.length;i++){
		let input = designInput(className);
		input.value = value_list[i].trim();//console.log(input_value_list[i]);
		create_place_element.appendChild(input);
	}
}
function removeRepeatItem(value_list){
	for(let i=0;i<value_list.length;i++){
		for(let j=i+1;j<value_list.length;j++){
			if(value_list[j] == value_list[i]||value_list[j] =="")
				value_list.splice(j,1);//如果有相同项,删除一个
		}
	}
}
function keepUpperLimit(value_list,length){
	if(value_list.length<=length){
		return true;
	}
	else{
		for(let i=0;i<value_list.length-length;i++){
			value_list.splice(0,1);
		}
	}
}
 
main();