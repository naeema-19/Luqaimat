/*
Theme : ESS Health Care
Author Name: Naveen Kumar Verma
Description: Healthcare - Responsive theme and desgin
Version: 1.0
license: https://euclidesoftwaresolutions.com/
Copyright 2021 ESS Authors
*/

/* bottom to top js */
$(document).ready(function() {
    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
        } else {
        $('#toTopBtn').fadeOut();
        }
    });
    $('#toTopBtn').on("click", function(){
        $("html, body").animate({
        scrollTop: 0
        }, 500);
        return false;
    });
});

/* Header sticky js */
$(window).scroll(function(){
    if ($(window).scrollTop() >= 150) {
        $('.header-area').addClass('fixed-header');
    }
    else {
        $('.header-area').removeClass('fixed-header');
    }
});


(function () {
    'use strict';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  /* Gallery lightbox js */
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


// disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function (e) {

	// disable F12 key
	if(e.keyCode == 123) {
		return false;
	}

	// disable I key
	if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
		return false;
	}

	// disable J key
	if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
		return false;
	}

	// disable U key
	if(e.ctrlKey && e.keyCode == 85) {
		return false;
	}
}
 