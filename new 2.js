





var totalImages = 0;
var loadCounter = 0;

function incrementLoadCounter() {
   loadCounter++;
   if(loadCounter === totalImages) {
      $(document).trigger('everythingLoaded');
   }
}

function hideLoadingScreen() {
   $('#loadingScreen').hide();
   $('#divWithImages').show();
}

$(document).ready(function(e) {
    $('#loadingScreen').bind('everythingLoaded', function(e) {
        hideLoadingScreen();
    });
    var imagesToLoad = $('img.toLoad');
    totalImages = imagesToLoad.length;

    $.each(imagesToLoad, function(i, item) {
        $(item).load(function(e) {
           incrementLoadCounter();
        })
    });
	})
	
	
	 if(document.images)
        (new Image()).src="undergraduate_preparation_certificates_international_students.jpg";
	

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myhe");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script><script>
// Get the modal
var modal = document.getElementById("myModa");

// Get the button that opens the modal
var btn = document.getElementById("myhee");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(window).load(function(){
$(".loading-overlay").fadeOut(2000);
});
