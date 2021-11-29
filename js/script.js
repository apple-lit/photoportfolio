$(document).ready(function () {
      $('body').fadeIn(2000);
      $('.slideshow').bxSlider({
        pager: false,
        controls: false,
        auto: true,
        mode: 'fade',
        speed: 2000,
        pause: 6000,
        randomStart: true
      });

  $('#container').flexgal();

    });
