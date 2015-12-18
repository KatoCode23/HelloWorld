$('.katopic').click(function(event){
	console.log('YOU SIR JUST CLICKED ', event);
	$('.full-size-image').css('display', 'block');

	var image = $(event.target).css('background-image');
	$('.full-size-image').css('display', 'block');
	$('.full-size-image').css('background-image', image);
});


$('.close-button').click(function(event){
	$('.full-size-image').css('display', 'none');
});

$('.bio-button').click(function(){

	if($('.bio-text').hasClass("hide")){
		
		$('.bio-text').removeClass("hide");
		$('.bio-text').addClass('show');

	}else if($('.bio-text').hasClass("show")){

		$('.bio-text').removeClass("show");
		$('.bio-text').addClass('hide');

	}
});

$('.gallery-button').click(function(){
	console.log('kato just clicked me!!!');
})