$(function(){
  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/svg/prev.svg" alt="previus"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/svg/next.svg" alt="next"></button>',
    vertical: true
  });

  
  $('.product-list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.content-slider_wrapper',
    vertical: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="product-prev"><img src="img/svg/arrow_up.svg" alt="previus"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="img/svg/arrow_down.svg" alt="next"></button>',
  });

  $('.content-slider_wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product-list',
    arrows: false,
    fade: true
  });
  
    /* Меню */
    $('ul.header-menu a[href^="#"').click(function () {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800);
      $('ul.menu a[href^="#"').css({
          'color': '#212121'
      });
      $(this).css({
          'color': '#004bee'
      });
      return false;
  });

  /* Выпадающее меню */
  $('.menu-icon').click(function () {
      $('.nav-hide').slideToggle(500);
      $('.nav-hide').css({
          'display': 'flex',
          'justify-content': 'center'
      });
      $('ul.nav-list').css({
          'display': 'flex',
          'flex-direction': 'column',
          'justify-content': 'center',
          'background': 'transparent'
      });
      $('.nav-list li').css({
        'margin-left': '0',
        'margin-top': '5px',
        'margin-bottom': '5px'
      });
      $('.header_slideshow').css({
          'top': '250px',
      });

      $('.header_slideshow').css({
          'top': '250px',
      });
      if ($('.menu-icon').html() == '<img src="img/svg/bars.svg">') {
        $(this).html('<img src="img/svg/xmark.svg">');
      } else {
        $(this).html('<img src="img/svg/bars.svg">');
        $('.header_slideshow').css({
          'top': '0px',
      });
      }
  });

  /* Кнопка наверх */
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0)
        $('.user-icon__up').fadeIn();
    else
        $('.user-icon__up').fadeOut();
  });
  $('.user-icon__up').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
  });

});