$(".dropdown-menu .label").click(function(){
	var open = $(".dropdown-container").hasClass("open");

	if(open){
		$(".dropdown-container").removeClass("open");
	}else{
		$(".dropdown-container").addClass("open");
	}
});