var menu = document.querySelector('.hamburger');

// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

var nav = document.getElementById('nav');
window.onscroll = function() {
  if (window.pageYOffset > 100) {
    nav.style.background = "rgba(0, 0, 0, 0.30)";
  } else {
    nav.style.background = "transparent";
    nav.style.boxShadow = "none";
  }
}

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/