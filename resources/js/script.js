$(document).ready(function() {
  
    /* Sticky navigation */
    $('.js--section-gallery').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset:  '350px;'
    });
    
    
    /* Scroll to Join */
    $('.js--scroll-to-join').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-join').offset().top},1000);
    });
    
    /* Scroll to About */
    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top},1000);
    });
    
    /* Navigation Scroll */
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    /* Mobile Nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(500);
        
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        }
        else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }

    });

    
    /* Your Club */
    var quotes = new Array();

    quotes[0] = "UB Car Club";
    quotes[1] = "Cycling Club";
    quotes[2] = "Gardening Club";
    quotes[3] = "FASA";
    quotes[4] = "HBO";
    console.log(quotes);
    var counter = 0;

    function loop() {
        if (counter > 4) counter = 0;
        document.getElementById('textslide').firstElementChild.innerHTML = quotes[counter];
        counter++;
        console.log(counter);
        setTimeout(loop, 1000);
    }
    loop();
    
});