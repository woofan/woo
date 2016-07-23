/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = new Array();

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input");
	var value = document.getElementById("aqi-value-input");
	var city_re = /^[\u4e00-\u9fa5|a-zA-Z]*$/;
	var value_re = /^\d+$/;
	if(city.value==""||!(city_re.test(city.value))){	//错误信息：判定用单等于；少个右括号;左括号中文输入法
		alert("城市名输入非法！");//错误信息:分号用中文输入法
		city.value = "";
		return -1;
		}
	else{
		if(value.value==""||isNaN(value.value)||!(value_re.test(value.value))){
			alert("指数输入非法!");
			value.value = "";
			return -1;
		}
		else{
			aqiData.push([city.value,value.value]);
			city.value = "";
			value.value = "";
			return 1;
		}
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
		var table = document.getElementById("aqi-table");
		if(table.childNodes.length == 3){
			var tr = document.createElement("tr");
        	tr.innerHTML =  "<td>城市</td><td>空气质量</td><td>操作</td>";
        	table.appendChild(tr);
	        var n = aqiData.length-1;
	        var trn = document.createElement("tr");
		    trn.innerHTML =  "<td>"+aqiData[n][0]+"</td><td>"+aqiData[n][1]+"</td><td><button class=\"bt\">删除</button></td>";
		    table.appendChild(trn);
	        
		}
		else{
			var n = aqiData.length-1;
	        var trn = document.createElement("tr");
		    trn.innerHTML =  "<td>"+aqiData[n][0]+"</td><td>"+aqiData[n][1]+"</td><td><button class=\"bt\">删除</button></td>";
		    table.appendChild(trn);
		}
        
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  t = addAqiData();
  if(t==1){
  	renderAqiList();  
  	var a = document.getElementsByTagName("button");
	for(var i =0;i<a.length;i++){
  		if(a[i].getAttribute("class")=="bt"){
    		a[i].onclick = delBtnHandle;
 		}
	}
  }

}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  //renderAqiList();
}

function init() {
	
	document.getElementById("add-btn").onclick = addBtnHandle;
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
