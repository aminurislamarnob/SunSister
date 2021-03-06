(function ($) {
    "use strict";
    
    //collaboration slider
    if ($('#collaborationSlide').length > 0) {
      $('#collaborationSlide').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        dots: true,
        autoplay: true,
      });
    }
  
  
    /**********************
     * Card Slider
     * ****************/
  if ($('#cardSlider').length > 0) {
    var windowWidth = $(window).width();
    if (windowWidth < 991) {
      $('#cardSlider .card-slider-contanier').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        autoplay: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      });
    } else {
      /**********************
       * Active card custom slider
       * ****************/

      $('#cardSlider .card-slider-contanier').removeClass('owl-carousel');

      //set card slider container width
      var noOfSLide = $('#cardSlider .card-item').length;
      var containerWidth = noOfSLide * 404;
      $('.card-slider-contanier').css('width', containerWidth + 'px');

      //Set Start Slider
      // var startSliderRight = 3 * 404;
      // $('#cardSlider .card-item').css('right', startSliderRight + 'px');

      //CARDS SLIDER
      $("#cardIndicators .card-item:first-child").addClass("active");

      function slide(target) {
        $("#cardIndicators .card-item").removeClass("active").eq(target).addClass("active");
        $("#cardSlider .card-item").animate({
          'right': + 404 * target + 'px'
        }, 205);
      }
        
      $("#cardIndicators .card-item").click(function () {
        var target = $(this).index();
        slide(target);
        
        //Stopped auto slide when user clicked
        clearInterval(timer);
        //Then started auto slide again
        timer = setInterval(function () {
          $('#cardNnext').trigger('click');
        }, 2500);
        
      });

      //stop slider on mouse hover
      $("#cardSlider").hover(function () {
          
        //Stopped auto slide for 5 sec when user hover
        clearInterval(timer);
            
        //Then started auto slide again
        timer = setInterval(function () {
          $('#cardNnext').trigger('click');
        }, 100000);
          
      },
        function () {
          
          //start auto slide again on mouse hover out
          clearInterval(timer);
            
          //Then started auto slide again
          timer = setInterval(function () {
            $('#cardNnext').trigger('click');
          }, 2500);
          
        });
        
      $("#cardNnext").click(function () {
        var target = $("#cardIndicators .card-item.active").index();
        if (target === $("#cardIndicators .card-item").length - 1) {
          target = -1;
        }
        target = target + 1
        slide(target);
        
        //Stopped auto slide when user clicked
        clearInterval(timer);
        //Then started auto slide again
        timer = setInterval(function () {
          $('#cardNnext').trigger('click');
        }, 2500);
        
      });
        
      $("#cardPrev").click(function () {
        var target = $("#cardIndicators .card-item.active").index();
        if (target === 0) {
          target = $("#cardIndicators .card-item").length;
        }
        target = target - 1;
        slide(target);
        
        //Stopped auto slide when user clicked
        clearInterval(timer);
        //Then started auto slide again
        timer = setInterval(function () {
          $('#cardNnext').trigger('click');
        }, 2500);
        
      });
        
      //Auto slide
      var timer = null;
      timer = setInterval(function () {
        $('#cardNnext').trigger('click');
      }, 2500);
    }
  }

  
    //Mobile Menu
    $('.mobile-menu-trigger').click(function(){
        $('.main-menu-area, .mobile-menu-backdrop').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.mobile-menu-backdrop').click(function(){
        $('.main-menu-area, .mobile-menu-trigger').toggleClass('active');
        $(this).toggleClass('active');
    });
    

    if ($(window).width() < 991) {
      $('.main-menu li.has-submenu').append('<span class="sub-menu-trigger"><i class="fas fa-chevron-right"></i></span>');
    }
    $('.sub-menu-trigger').click(function () {
      $(this).parent().find('.sub-menu').toggle();
      $(this).toggleClass('active');
    });
}(jQuery));	