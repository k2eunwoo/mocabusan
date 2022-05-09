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
  var swiper = new Swiper(".mySwiper", {
    loop:false,
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

   $(function() {
       //input을 datepicker로 선언
       $("#datepicker").datepicker({
           dateFormat: 'yy-mm-dd' //달력 날짜 형태
           ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
           ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
           ,changeYear: true //option값 년 선택 가능
           ,changeMonth: true //option값  월 선택 가능                
           ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
           ,buttonImage: "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" //버튼 이미지 경로
           ,buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함
           ,buttonText: "선택" //버튼 호버 텍스트              
           ,yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
           ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
           ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
           ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
           ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 Tooltip
           ,minDate: "-5Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
           ,maxDate: "+5y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)  
       });                    
       
       //초기값을 오늘 날짜로 설정해줘야 합니다.
       $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
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

// 카카오맵 지도 api
var map;
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(35.10921266857097, 128.94269556123893), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(35.10921266857097, 128.94269556123893); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

// 아래 코드는 지도 위의 마커를 제거하는 코드입니다
// marker.setMap(null);    

})//ready

