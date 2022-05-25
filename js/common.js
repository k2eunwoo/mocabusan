
$(function(){
// 모달팝업
$('.modal').click(function(){
    $('#pop_up').fadeIn();
  })
  $('#pop_up button').click(function(){
    $('#pop_up').fadeOut();
  });
  
   $(".modal").click(function(){
		$(".#pop_up .img").animate({left:0},500,"swing")
		});
			
	$(".btn").click(function(){
		$(".#pop_up .img").animate({left:-300},500,"swing")
		});
		
	$('#btn1 > li , #btn2 > li').each(function(){
      var submenu = $(this).find('.sub');
      var menu_link = $(this).children('a');
      $(menu_link).click(function(){
         $(submenu).stop().slideToggle();
       })
	});		
	
})//실행틀 끝

