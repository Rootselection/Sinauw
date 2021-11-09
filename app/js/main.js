$(function () {
  $('.classes__item').hover(function(){
    $(this).children('.classes__item-link').toggleClass('classes__item-link--active')
  });
});

$(function(){
  $('.video__inner').slick({
    centerMode: true,
    infinite: false,
    slidesToShow: 3,
    initialSlide: 2,
    arrows: false,
    touchThreshold: 1000,
    variableWidth: true
  });
  $('.slick-slide').on('mousemove', function(){
    $('.slick-center').removeClass('slick-next-slide'),
    $('.slick-center').next().removeClass('slick-next-slide'),
    $('.slick-center').next().addClass('slick-next-slide'),
    $('.slick-center').next().attr('slick-next-slide'),
    $('.slick-center').removeClass('slick-prev-slide'),
    $('.slick-center').prev().removeClass('slick-prev-slide'),
    $('.slick-center').prev().addClass('slick-prev-slide')
  });
  $('.slick-slide').keyup( function(){
    // $('.slick-center').next().children('div').children('video')[0].muted ^= 1,
    // $('.slick-center').prev().children('div').children('video')[0].muted ^= 1,
    $('.slick-center').removeClass('slick-next-slide'),
    $('.slick-center').next().removeClass('slick-next-slide'),
    $('.slick-center').next().addClass('slick-next-slide'),
    $('.slick-center').next().attr('slick-next-slide'),
    $('.slick-center').removeClass('slick-prev-slide'),
    $('.slick-center').prev().removeClass('slick-prev-slide'),
    $('.slick-center').prev().addClass('slick-prev-slide')
  });
});

$(function(){
  $('.mobile').hover(function(){
    $('.mobile__box-img').addClass('mobile__box-img--animate')
    $('.mobile__box-img--main').addClass('mobile__box-img--main-animate')
  });
});

$(function(){
    $('.js-example-basic-single').select2();
});

$(function(){
  $('.menu-btn').on('click',function(){
    $('.menu-btn').toggleClass('menu-btn--active');
    $('.nav').toggleClass('nav--active');
  });
});
