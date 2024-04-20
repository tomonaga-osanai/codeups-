
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    $('.js-hamburger').on('click', function () {
        if ($('.js-hamburger').hasClass('is-open')) {
          $('.js-drawer-menu').fadeOut();
          $(this).removeClass('is-open');
        } else {
          $('.js-drawer-menu').fadeIn();
          $(this).addClass('is-open');
        }
      });


});
