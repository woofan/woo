let global_first_input = document.getElementById("first_input");
let global_first_div = document.getElementById("first_div");
let global_second_div = document.getElementById("second_div");
let global_first_textarea = document.getElementById("first_textarea");
let global_my_button = document.getElementById("my_button");
let input_value_list = new Array();

function main(){//主函数
	global_first_input.addEventListener("keydown",getInput,false);
}
function getInput(event){//按下回车,逗号,空格后返回值
	let keycode = event.keyCode;
	let input_value = global_first_input.value;
	if(keycode == "13" || keycode == "32" || keycode =="188"){//判断是否按下回车,逗号或空格
		event.preventDefault();//alert(input_value_list[0]);
		if(input_value == ""){//输入空值时提示
			alert("请输入内容!");
			global_first_input.value = "";
		}
		else{//非空值
			for(let i=0;i<input_value_list.length;i++){//判断输入的值是否已存在
				if(input_value == input_value_list[i]){//若存在,则提示并退出
					alert("该数据已存在,请输入其它数据!");
					global_first_input.value = "";
					return false;
				}
			}
			if(input_value_list.length<10){//如果数组长度小于10,直接插入队尾
				input_value_list.push(input_value.trim());//alert(input_value_list);
				global_first_input.value = "";
				createInput();
				
			}
			else{//如果数字长度>=10,去掉第一个
				for(let i=0;i<input_value_list.length-1;i++){//去掉数组第一个
					input_value_list[i] = input_value_list[i+1];
				}
				input_value_list.push(input_value.trim());
				global_first_input.value = "";
				createInput();
				
			}
		}				
	} 
}
function createInput(){
	let all_input = document.getElementsByClassName("my_input");//console.log("长度:"+all_input.length);
	for(let j=all_input.length-1;j>=0;j--){
		all_input[j].parentNode.removeChild(all_input[j]);//console.log("删除了第"+j+"个input");
	}
	for(let i=0;i<input_value_list.length;i++){
		let input = designInput();
		input.value = input_value_list[i];//console.log(input_value_list[i]);
		global_first_div.appendChild(input);
	}
	bindingMouseOverEvent();//给所有生成的input元素绑定鼠标悬停事件
	bindingMouseOutEvent();//给所有生成的input元素绑定鼠标移走事件
	bindingMouseClickEvent();//给所有生成的input元素绑定鼠标点击事件
}
function designInput(){//定义动态生成的按钮的各种属性
	let input = document.createElement("input");
	input.setAttribute("type","button");
	input.setAttribute("class","my_input");//console.log(typeof(input));
	return input;
}
function bindingMouseOverEvent(){//给所有生成的input元素绑定鼠标悬停事件
	let all_input = document.getElementsByClassName("my_input");
	for(let i=0;i<all_input.length;i++){
		all_input[i].addEventListener("mouseover",mover,false);
	}
}
function bindingMouseOutEvent(){//给所有生成的input元素绑定鼠标移走事件
	let all_input = document.getElementsByClassName("my_input");
	for(let i=0;i<all_input.length;i++){
		all_input[i].addEventListener("mouseout",mout,false);
	}
}
function bindingMouseClickEvent(){//给所有生成的input元素绑定鼠标移走事件
	let all_input = document.getElementsByClassName("my_input");
	for(let i=0;i<all_input.length;i++){
		all_input[i].addEventListener("click",mclick,false);
	}
} 
function mover(){//悬停事件,左边多出"点击删除"四个字,底色变红
	this.style.width = "80px";
	this.value = "点击删除 " + this.value;
	this.style.backgroundColor = "red"; 
}
function mout(){//鼠标移走事件,恢复原样
	let length = this.value.length;
	this.value = this.value.substr(5);//substr(a,b)函数返回截取字符串,a为起始下标,b为截取长度,不填表示到末尾
	this.style.width = "40px";
	this.style.backgroundColor = "#58ACFA";
}
function mclick(){//鼠标点击事件,点击后删除该元素
	let value = this.value.substr(5);
	for(let i=0;i<input_value_list.length;i++){
		if(input_value_list[i] == value){
			input_value_list.splice(i,1);//splice(a,b,c)从a的位置开始向后删除b个元素,c为可选输入,表示替代的元素

		}
	}
	this.parentNode.removeChild(this);alert(input_value_list);
} 
main();