/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");

$(document).ready(function(){
  
  $('#fullpage').fullpage({
    anchors: ['initial', 'about', 'cursos', 'gallery','testimonios', 'contacto'],
    menu: '#myMenu',
    autoScrolling: false,
    bigSectionsDestination : 'top',
    // fixedElements: '.nave',
    // paddingTop: '100px',
    // verticalCentered: true,
    slidesNavigation: true,
		slidesNavPosition: 'bottom',
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

/*parallax*/

$(window).scroll(function() {
  var windowscroll = $(this).scrollTop();
  
  $(".header__bg").css({
    "transform" : "translate(0%," + windowscroll /15 + "%"
  });
  
});