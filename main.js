var numberOfImages= 22;
var currentImage= null;

for (var i=1; i <= numberOfImages; i++){
	var element= $('<span id='+i+' style="background-image: url(assets/img/modeling/' + i + '.jpg)" class="katopic"></span>')
	$(".picture-container").append(element);
}

openImage= function(id){
	console.log('I was asked to open '+ id);
	console.log("I am about to open ", imagePath);

	var imagePath = 'url(assets/img/modeling/'+id+'.jpg)';

	$('.full-size-image').css('background-image', imagePath);
	$('.full-size-image').css('display', 'block');
	$('.gallery-button').addClass('turned-on');
};

$('.katopic').click(function(event){
	console.log('YOU SIR JUST CLICKED ', event);
	currentImage= event.currentTarget.id;
	openImage(currentImage);
});


$('.close-button').click(function(event){
	$('.full-size-image').css('display', 'none');
	$('.gallery-button').removeClass('turned-on');
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

$('#next-button').click(function(){
	console.log('kato just clicked next!!!');
	currentImage = parseInt(currentImage) + 1;
	openImage(currentImage);
})

$('#prev-button').click(function(){
	console.log('kato just clicked prev!!!');
	currentImage = parseInt(currentImage) - 1;
	openImage(currentImage);
})