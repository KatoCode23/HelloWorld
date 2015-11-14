	console.log("Hello From External File")

	$('.bio-button').click(function(){

		if($('.bio-text').hasClass("hide")){
			
			$('.bio-text').removeClass("hide");
			$('.bio-text').addClass('show');

		}else if($('.bio-text').hasClass("show")){

			$('.bio-text').removeClass("show");
			$('.bio-text').addClass('hide');

		}
	});