var input = document.getElementById("getnum");//id不能用input
var main_div = document.getElementById("d");
function leftin(){
	var check = /^\d+$/;
	if(check.test(getnum.value)){
		var d = document.createElement("div");
		d.style.background="red";
		d.style.color="white";
		d.style.width="40px";
		d.style.height="30px";
		d.style.cssFloat="left";//ie:obj.style.styleFloat;firefox,chrome：obj.style.cssFloat；
		d.style.marginLeft="10px";
		d.style.marginTop="10px";
		d.style.textAlign="center";
		d.style.paddingTop="10px";
		d.innerHTML=getnum.value;
		document.body.appendChild(d);
		getnum.value="";
	}
	else{
		alert("请输入数字");
	}
}
var btn1 = document.getElementById("leftin");
btn1.addEventListener("click", function() {
    leftin();
});