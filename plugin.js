
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

	filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


