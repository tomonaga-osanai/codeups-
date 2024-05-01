
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

var swiper = new Swiper(".js-location-swiper", {
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 15,
  breakpoints: {
    767: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  },
  pagination: {
    el: ".js-location-pagination",
    clickable: true,
  },
  loop: true,
});
