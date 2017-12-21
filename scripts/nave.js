$(document).ready(function(){
    
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.logo').addClass('on');
            $('.header__menu').addClass('on');
        } else {
            $('.logo').removeClass('on');
            $('.header__menu').removeClass('on');
        }
    });

    $('.menu__item').click(function(){
        
            if ( $('.menu__trigger').is(':visible')){
              $('.menu__trigger').click();
            };
          });
        
          $('.menu__trigger').click(function(){
            var that = $(this);
            
            $('.menu').slideToggle(500);
            $('.menu').css('display', 'grid');
            $('.nave').css('height','100vh');
            
            if (that.hasClass('closed')) {
              $(".menu__trigger span").css({background: '#FFED4A'});
              that.removeClass('closed');
              that.addClass('open');
            }
            else {
              $(".menu__trigger span").css({background: '#ffffff'});
              that.removeClass('open');
              that.addClass('closed');
              $('.nave').removeAttr('style'); //removing height
            }
            return false;
          });
          
          $(window).resize(function(){
            if($(window).width() > 768) {
              $('.menu').removeAttr('style');
            }
          });

});