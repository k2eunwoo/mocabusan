// 패럴렉스 스크립트

$(function(){
	$('.wrap').scroll(function(){
		/********FIRST SECTION**************/
		if ($(this).scrollTop() >= $('.first-section').position().top - 0) {
    		$('.first-section').removeClass('show-animation');
		    $('.first-section').addClass('show-animation');
		}
		else{
			$('.first-section').removeClass('show-animation');
		}


		/********SECOND SECTION**************/
		if ($(this).scrollTop() >= $('.second-section').position().top - 200) {
    		$('.second-section').removeClass('show-animation');
		    $('.second-section').addClass('show-animation');
		}
		else{
			$('.second-section').removeClass('show-animation');
		}


		/********THIRD SECTION**************/
		if ($(this).scrollTop() >= $('.third-section').position().top - 200) {
    		$('.third-section').removeClass('show-animation');
		    $('.third-section').addClass('show-animation');
		}

		else{
			$('.third-section').removeClass('show-animation');
		}


		/********FOURTH SECTION**************/
		if ($(this).scrollTop() >= $('.fourth-section').position().top - 400) {
    		$('.fourth-section').removeClass('show-animation');
		    $('.fourth-section').addClass('show-animation');
		}

		else{
			$('.fourth-section').removeClass('show-animation');
		}
	});
})
