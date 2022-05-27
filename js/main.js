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
});