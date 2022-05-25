$(function(){
    $(window).scroll(function(){
        /********SECTION1**************/
        if ($(document).scrollTop() >= $('#section1 .cont_box , #section1 h2 , #section1 .img_box').position().top - 700) {
            $('#section1 .cont_box , #section1 h2 , #section1 .img_box').removeClass('show-animation');
            $('#section1 .cont_box ,#section1 h2 , #section1 .img_box').addClass('show-animation');
        } 
        else{
            $('#section1 .cont_box , #section1 h2 , #section1 .img_box').removeClass('show-animation');
        }})
    $(window).scroll(function(){
            /********SECTION2**************/
            if ($(document).scrollTop() >= $('#section2 .cont_box , #section2 h2 , #section2 .img_box').position().top - 700) {
                $('#section2 .cont_box , #section2 h2 , #section2 .img_box').removeClass('show-animation');
                $('#section2 .cont_box , #section2 h2 , #section2 .img_box').addClass('show-animation');
            } 
            else{
                $('#section2 .cont_box , #section2 h2 , #section2 .img_box').removeClass('show-animation');
            }})
     $(window).scroll(function(){
                /********SECTION3**************/
                if ($(document).scrollTop() >= $('#section3 .cont_box , #section3 h2 , #section3 .img_box').position().top - 700) {
                    $('#section3 .cont_box , #section3 h2 , #section3 .img_box').removeClass('show-animation');
                    $('#section3 .cont_box , #section3 h2 , #section3 .img_box').addClass('show-animation');
                } 
                else{
                    $('#section3 .cont_box , #section3 h2 , #section3 .img_box').removeClass('show-animation');
                }})
         $(window).scroll(function(){
                    /********SECTION4**************/
                    if ($(document).scrollTop() >= $('#section4 .txt_box, #section4 h2 , #section4 .img_box').position().top - 700) {
                        $('#section4 .txt_box, #section4 h2 , #section4 .img_box').removeClass('show-animation');
                        $('#section4 .txt_box, #section4 h2 , #section4 .img_box').addClass('show-animation');
                    } 
                    else{
                        $('#section4 .txt_box, #section4 h2 , #section4 .img_box').removeClass('show-animation');
                    }})       

})//ready
