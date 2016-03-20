$(document).ready(function(){

	$(".hover").hide();

	$(".style").hover(

		function(){
			$(this).find(".hover").show();
		}

		,

		function(){
			$(this).find(".hover").hide();
		}

		);
	//syntaxe : $("selecteur").hover(hover,out);

});