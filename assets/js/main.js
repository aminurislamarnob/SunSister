(function ($) {
    "use strict";
    
    //collaboration slider
    $('#collaborationSlide').owlCarousel({
        loop: false,
        margin: 0,
        items: 1,
        dots: true
    });



    /**********************
     * Start Home Page Card Slider Code
     * ****************/

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
    
    $("#cardIndicators .card-item").click(function() {
      var target = $(this).index();
      slide(target);
    
      //Stopped auto slide when user clicked
      clearInterval(timer);
      //Then started auto slide again
      timer = setInterval(function() {
        $('#cardNnext').trigger('click');
      }, 2500);
    
    });

    //stop slider on mouse hover
    $("#cardSlider").hover(function() {
      
        //Stopped auto slide for 5 sec when user hover
        clearInterval(timer);
        
        //Then started auto slide again
        timer = setInterval(function() {
          $('#cardNnext').trigger('click');
        }, 100000);
      
    },
    function() {
      
        //start auto slide again on mouse hover out
        clearInterval(timer);
        
        //Then started auto slide again
        timer = setInterval(function() {
          $('#cardNnext').trigger('click');
        }, 2500);
      
    });
    
    $("#cardNnext").click(function() {
      var target = $("#cardIndicators .card-item.active").index();
      if (target === $("#cardIndicators .card-item").length - 1) {
        target = -1;
      }
      target = target + 1
      slide(target);
    
      //Stopped auto slide when user clicked
      clearInterval(timer);
      //Then started auto slide again
      timer = setInterval(function() {
        $('#cardNnext').trigger('click');
      }, 2500);
    
    });
    
    $("#cardPrev").click(function() {
      var target = $("#cardIndicators .card-item.active").index();
      if (target === 0) {
        target = $("#cardIndicators .card-item").length;
      }
      target = target - 1;
      slide(target);
    
      //Stopped auto slide when user clicked
      clearInterval(timer);
      //Then started auto slide again
      timer = setInterval(function() {
        $('#cardNnext').trigger('click');
      }, 2500);
    
    });
    
    //Auto slide
    var timer = null;
    timer = setInterval(function() {
      $('#cardNnext').trigger('click');
    }, 2500);

    /**********************
     * End Home Page Card Slider Code
     * ****************/

}(jQuery));	