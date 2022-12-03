$(function () {

   // Preloader Start
   $(window).on('load', function () {
      $('#preloader').fadeOut(1000);
   })
   // Preloader End

   // Menu Toggle
   $('#navbarToggler').on('click', function () {
      $('#siteLogo, #mainMenu ul, #navbarToggler').toggleClass('menuActive')
   })

   //Banner Slick Activate
   $('.bannerSlider').slick({
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      autoplay: true,
      autoplaySpeed: (1500),
  });

   // Our Blog Slick Activation
   $('.blog_slider_container').slick({
      prevArrow: $('.blog_icon_prev'),
      nextArrow: $('.blog_icon_next'),
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0px',
      autoplay: true,
      autoplaySpeed: (1500),
   });

   // Testimonial Slick active
   $('.slider_item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider_nav',
      arrows: false,
      draggable:false,
    });
    $('.slider_nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider_item',

      prevArrow: $('.testimonial_slider_icon_prev'),
      nextArrow: $('.testimonial_slider_icon_next'),
      centerMode: true,
      centerPadding:'0px',
      focusOnSelect: true
    });

   // Brand Slider Slick Activation
   $('.brand_slider_item').slick({
      prevArrow: $('.brand_icon_prev'),
      nextArrow: $('.brand_icon_next'),
      centerMode: true,
      slidesToShow: 5,
      centerPadding: '0px',
      autoplay: true,
      autoplaySpeed: (1500),
   });

   // Abot Page Our Team Slick Initialize
   $('.pfSlider_container').slick({
      prevArrow: $('.blogteam_icon_prev'),
      nextArrow: $('.blogteam_icon_next'),
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0px',
   });

    // Counter Up Activate
   $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

   // Back To Top
   $(window).on('scroll', function () {
      var scrollSize = $(window).scrollTop();
      if (scrollSize > 1000) {
          $('#backtotop').show(500);
      } else {
          $('#backtotop').hide(500);
      }



      if (scrollSize > 100) {
         $('#nav').addClass('menuActive');
      } else {
         $('#nav').removeClass('menuActive');
      }
   })
   $('#backtotop').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      })
   })

})