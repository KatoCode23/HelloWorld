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