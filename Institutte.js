$(document).ready(function(){
  $("body").mouseenter(function(){
    $(".carousel-caption").fadeIn("slow");
  });
});


$(document).ready(function(){
  $(".navbar .navbar-nav .nav-item .nav-link").mouseenter(function(){
    $(".dropdown").show("fast");
  });
});


$(document).ready(function(){
  $(".navbar-brand").click(function(){
    $("img").before("<div class="">Before</div>");
  });
});
	
$(".wal").click(function(){
  $(".wal").slideUp(1000);
});
	