$(document).ready(function () {

    'use strict';
    
    var wal = $("#wal");
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 500) {
            wal.show();
        } else {
            wal.hide();
        }
        console.log($(this).scrollTop());
    });

    wal.click(function () {
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

$(window).load(function(){
$(".loading-overlay").fadeOut(2000);
});	
	