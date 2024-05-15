
/*$(document).ready(function(){
$(".dropdown").click(function(){
    $(".dropdown-menu").toggle();
  });
});


$(document).ready(function(){
$(".dropdown").cli(function(){
    $(this).hide();
  });
});
*/

$(document).ready(function(){
  $("li").mouseenter(function(){
    $(").slideDown();
  });
});






$(document).ready(function(){
  $("#demo").mouseenter(function(){
    $(".carousel-caption").animate({
      height: 'toggle'
    });
  });
});




		
$(document).ready(function () {

    'use strict';
    
    var scrollButton = $("#scrollbut");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 500) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
        console.log($(this).scrollTop());
    });

    scrollButton.click(function () {
        $("html, body").animate({scrollTop: 0}, 800);
    });

    var am = $("#anm");

    am.click(function(){
        $("html, body").animate({scrollTop: 600}, 500)
    });

    $(".navbar-dark .navbar-collapse > .navbar-nav > li > a").click(function(){
        $(this).addClass("active")
    });

  
});


