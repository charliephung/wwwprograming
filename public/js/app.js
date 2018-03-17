$(document).ready(function(){
    
    /*$('h1').click(function(){
        $(this).css('background-color', '#ff0000');
    })*/
    
    
    /* for the sticky navigation */
    $('.js--section-feature').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
            
        }
        else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });
    
    
    /* scroll on button */
    $('.js--scroll-to-plan').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    }); 
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-feature').offset().top}, 1000); 
    }); 

    
    
    /* navigation roll */
    
    // Select all links with hashes
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

    
    
    /* Animation on scroll */
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeInDown');
        
    },{
        offset: '60%'
    })
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
        
    },{
        offset: '60%'
    })
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated rollIn');
        
    },{
        offset: '60%'
    })
        
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated wobble');
        
    },{
        offset: '60%'
    })
    
    /* mobile navigation */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200); /* hiện ra, số: thời gian hiện */
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        }
        else{
             icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')
        }     
    })
    
    
   /* $('.test').click(function(){
         var opened = window.open("");
        opened.document.write("<html><head><title>Comment Food</title><link rel=\"stylesheet\" type = \"text/css\" href=\"css/grid.css\"><link rel=\"stylesheet\" type = \"text/css\" href= \"css/style2.css\"></head><body><h1>The Comment Food</h1><div class= \"row comment\"><figure class =\"user\"><img src=\"img/user.jpg\" alt=\"the image of user\" class=\"icon-small\"></figure><p class= \"user-message\">Mr.hahaha</p><textarea name=\"message\" placeholder=\"Your Comment about food\" class=\"text\"></textarea></div></body></html>");
    })*/

    /* Map */
    var map = new GMaps({
        div: '.map',
        lat: 60.4621132,
        lng: 22.2861996
      });

    map.addMarker({
      lat: 60.4621132,
      lng: 22.2861996,
      title: 'Yo-kylla',
      infoWindow: {
          content: '<p>Our is in Yo-kylla</p>'
        }
    });
   
    
}); 

