$(function(){
  $(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    fade:true ,  
    speed :3000,
    dots: true,
    autoplay:true,
    autoplaySpeed : 500,
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor:'.slider-for',
    dots: false,
    focusOnSelect: true
  });
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });


  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
// 더보기 버튼
  $(function(){
    /* 1단계 설명  : for
    var li_count = $('.thum_list li').length;
     // alert(li_count)
  
       for(var count=0;count < li_count;count++){
      $('.thum_list li').eq(count).text(count+1);
     }
        */
  
     var li_count = $('.thum_list li').length;
     var click_count = 1;
     //alert(li_count)
       /*for(var count=0;count < li_count;count++){
      $('.thum_list li a').eq(count).text(count+1);
     }*/
    
      for(var count = 0;count < click_count * 2;count++){
      $('.thum_list li').eq(count).show();
     }
          //클릭수만큼 li 보이기
      $('.more').click(function(){
      click_count += 1;
      //alert(Math.ceil(li_count/4));
      if(Math.ceil(li_count/2) > click_count){
        //alert(click_count);
        li_show(click_count)
      }else if(Math.ceil(li_count/2) == click_count) {
        li_show(click_count)
        $('.more').text('줄이기');     
      } else {
        $('.thum_list li').hide()
        click_count = 1;     
        $('.more').text('더보기');
        li_show(click_count)
        }
      })
    })//전체
    function li_show(click_count){
      for(var count = 0;count < click_count * 2;count++){
        $('.thum_list li').eq(count).show();
          } 
    }
  // 공지사항리스트
  $(".vertical-center").slick({
    vertical: true,
    centerMode: false,
    slidesToShow:1,
    autoplay: true, 
  });
  
// 팝업존
$(".lazy3").slick({
  lazyLoad: 'ondemand', // ondemand progressive anticipated
  infinite: true, 
  fade:true , 
  autoplay: true,
  speed :1000,
  dots:true,
});

  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 3.4,
    arrows: true,
    autoplay:false,
    spaceBetween: 50,
    delay: 5000, // 시간 설정
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
  });
  // 네이버지도
  var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};
var map = new naver.maps.Map('map', {
  center: new naver.maps.LatLng(37.3595704, 127.105399),
  zoom: 10
});
  var map = null;
function initMap() {
    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10
    });
}

var map = new naver.maps.Map('map', mapOptions);

$(document).ready(function(){
  $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
  
      $(window).scroll(function() {
          var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
          
          // Put together our final background position
          var coords = '50% '+ yPos + 'px';

          // Move the background
          $bgobj.css({ backgroundPosition: coords });
      }); 
  });    
});
$(document).ready(function() {
  var wd = $(window);
  $('.paral').each(function(){
    var bg = $(this);
    wd.scroll(function(){
      var yPos = -(bg.scrollTop() / 2); 
        //나눠지는 숫자가 작을 수록 속도가 빠름
      var coords = '0' + yPos + 'px';
      bg.css({backgroundPosition:coords});
    });
  });
});
})//ready

