
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.js-hamburger').on('click', function () {
        if ($('.js-hamburger').hasClass('is-active')) {
          // $('.js-drawer-menu').fadeOut();
          $('.js-hamburger').removeClass('is-active');
          $('.js-sp-nav').fadeOut(300);

        } else {
          $('.js-hamburger').addClass('is-active');
          $('.js-sp-nav').fadeIn(300);
        }
      });
});

$(function() {
  $('.mv__title').addClass('is-active');

});

$(function(){
  if(window.matchMedia('(min-width: 768px)').matches) {
    $(window).scroll(function (){
        $('.section-header').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100){
              $(this).addClass('is-active');
            }
        });

        // $('.mv__title').each(function(){
        //     var position = $(this).offset().top;
        //     var scroll = $(window).scrollTop();
        //     var windowHeight = $(window).height();
        //     if (scroll > position - windowHeight + 100){
        //       $(this).addClass('is-active');
        //     }
        // });
    });

  }

});



var swiper = new Swiper(".js-pick-up-swiper", {
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".js-pick-up-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 60,
    }
  },
});

var swiper = new Swiper(".js-location-swiper", {
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".js-location-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  },
});
