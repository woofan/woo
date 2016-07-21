/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city = document.getElementById("aqi-city-input");
	var value = document.getElementById("aqi-value-input");
	var city_re = /^[\u4e00-\u9fa5|a-zA-Z]*$/;
	if(city.value==null||!（city_re.test(city.value))){	//错误信息：判定用单等于；少个右括号
		alert("城市名输入非法！");//错误信息:分号用中文输入法
		else{
			if(value.value==null||isNaN(value.value)){	
				alert("指数输入非法!");
				else{
					aqiData.push([city.value,value.value]);
				}
			}
		}
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  wf();
  //renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {
	document.getElementById("add-btn").onclick = delBtnHandle;
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
