$(function(){
    // 모달팝업
    $('.modal').click(function(){
      $('#pop_up').fadeIn();
    })
    $('#pop_up button').click(function(){
      $('#pop_up').fadeOut();
    })
  // 네비게이션 아코디언
    $('.accordion').each(function(){
          var allDD = $(this).find('dd') // 현재 .accordion 안에 있는 모든 dd태그를 찾아 기억함. 초기 화면에서 dd태그의 컨텐츠를 모두 안보이게 하기 위함  
          //this는 .accordion 만 선택하게 하기 위해서 사용했음
          var allDT = $(this).find('dt') //현재 .accordion 안에 있는 모든 dt를 기억함
          $('active').next().show();
          
          $(allDT).click(function(){
              // $(allDD).slideUp();
              $(allDD).slideUp();
              $(this).next().slideDown();
              $(allDT).removeClass('active'); //css의 dt.active에 있는 디자인이 클릭을 하지 않으면 실행되지 않음.
              $(this).addClass('active'); //css의 dt.active에서 있는 디자인이 alldt에 실행됨. 
              //아코디언은 처음부터 하나는 열려있어야함. 
              
           })//click
         })//each 1단계 끝! 
 })  