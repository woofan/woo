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
			input_value = "";
		}
		else{//非空值
			for(let i=0;i<input_value_list.length;i++){//判断输入的值是否已存在
				if(input_value == input_value_list[i]){//若存在,则提示并退出
					alert("该数据已存在,请输入其它数据!");
					input_value = "";
					return false;
				}
			}
			if(input_value_list.length<10){//如果数组长度小于10,直接插入队尾
				input_value_list.push(input_value.trim());
				createInput();alert("a");//这里有问题!!!!!!!!!!!!!!1!!!!!!!!!
				input_value = "";
			}
			else{//如果数字长度>=10,去掉第一个
				for(let i=0;i<input_value_list.length-1;i++){//去掉数组第一个
					input_value_list[i] = input_value_list[i+1];
				}
				input_value_list.push(input_value.trim());
				createButton();
				input_value = "";
			}
		}				
	} 
}
function createInput(){
	for(let i=0;i<input_value_list.length;i++){
		let input = designInput();
		input.value = input_value_list[i];//console.log(input.value);
		insertAfter(global_first_div,input);//每次生成的按钮都插入到first_div的末尾
	}
}
function designInput(){//定义动态生成的按钮的各种属性
	let input = document.createElement("input");
	input.setAttribute("class","my_input");//console.log(typeof(input));
	return input;
}
function insertAfter(targetElement,newElement){ // newElement是要追加的元素 targetElement 是指定元素的位置 
	var parent = targetElement.parentNode; // 找到指定元素的父节点 
	if( parent.lastChild == targetElement ){ // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法 
		parent.appendChild( newElement, targetElement ); 
	}
	else{ 
		parent.insertBefore( newElement, targetElement.nextSibling ); 
	}
} 
main();