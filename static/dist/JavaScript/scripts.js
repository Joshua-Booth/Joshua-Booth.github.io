function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 1000);         
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}


/* Animations */
$(document).ready(function(){
    $('#animate-jello').each(function() {
        animationHover(this, 'jello');
    });
});

$(document).ready(function(){
    $('#animate-bounce').each(function() {
        animationHover(this, 'bounce');
    });
});

$(document).ready(function(){
    $('#animate-tada').each(function() {
        animationHover(this, 'tada');
    });
});

$(document).ready(function(){
    $('#animate-rubberBand').each(function() {
        animationHover(this, 'rubberBand');
    });
});


/* Smooth scroll
	Code from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
*/
$(function() {
	$('a[href*="#"]')
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
})


/* Menu highlighting through scroll */
$(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos + 2 >= $("#home").offset().top) $(switchHeader("#homeLink"));
        if (scrollPos + 2 >= $("#about").offset().top) $(switchHeader("#aboutLink"));
		if (scrollPos + 2 >= $("#portfolio").offset().top) $(switchHeader("#portfolioLink"));
		if (scrollPos + 25 >= $("#contact").offset().top) $(switchHeader("#contactLink"));

});

function switchHeader(header) {
        if (header === "#homeLink") {
                $("#aboutLink").removeClass("active");
                $("#homeLink").addClass("active");
        } if (header === "#aboutLink") {
                $("#homeLink").removeClass("active");
				$("#portfolioLink").removeClass("active");
				$("#contactLink").removeClass("active");
                $("#aboutLink").addClass("active");
        } if (header === "#portfolioLink") {
				$("#homeLink").removeClass("active");
				$("#aboutLink").removeClass("active");
                $("#contactLink").removeClass("active");
                $("#portfolioLink").addClass("active");
        } if (header === "#contactLink") {
				$("#homeLink").removeClass("active");
				$("#aboutLink").removeClass("active");
                $("#portfolioLink").removeClass("active");
                $("#contactLink").addClass("active");
        }
}


/* Change profile picture alignment if the screen size is mobile. */
$(window).resize(function(){
       if ($(window).width() < 768) {  
             $("#profile").removeClass("right floated");
			 $("#profile-pic").addClass("centered");
			 $("#profile-padding").css("padding-left", "0px");
			 $("#profile-pic").addClass("medium");
       } if ($(window).width() >= 768) {
             $("#profile").addClass("right floated");
			 $("#profile-pic").removeClass("centered");
			 $("#profile-padding").css("padding-left", "50px");
			 $("#profile-pic").removeClass("medium");
       }
});


/* Close form success message */
$('.message .close')
  .on('click', function() {
	$(this)
	  .closest('.message')
	  .transition('fade')
	;
  })
;