$(".dropdown-menu .label").click(function(){
	var open = $(".dropdown-container").hasClass("open");

	if(open){
		$(".dropdown-container").removeClass("open");
	}else{
		$(".dropdown-container").addClass("open");
	}
});

$(".full-size-image-master").click(function(){
	var open = $(".dropdown-container").hasClass("open");

	if(open){
		$(".dropdown-container").removeClass("open");
	}
});

$(".full-size-image-collection").click(function(){
	var open = $(".dropdown-container").hasClass("open");

	if(open){
		$(".dropdown-container").removeClass("open");
	}
});

$(".press-pic-container").click(function(){
	var open = $(".dropdown-container").hasClass("open");

	if(open){
		$(".dropdown-container").removeClass("open");
	}
});