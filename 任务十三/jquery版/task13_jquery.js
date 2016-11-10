$().ready(function(){
	$("#b1").bind("click",function(){
		$("#a2").val($("#a1").val());
		$("#a1").val("");
	});
	
});


