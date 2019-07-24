document.addEventListener("DOMContentLoaded", function() {
	var triangle = document.querySelectorAll(".triangle");
	var triangleIn = document.querySelectorAll(".triangle-in");
	var hoverIn = document.querySelectorAll(".sub-sub-sub-menu");
	var hover1 = document.querySelectorAll(".list__style-sub-menu");
	var close = document.getElementById("menu__close");
	var btnMenu = document.getElementsByClassName("fa-bars");
	var widgetMenu = document.getElementById("widget-menu");
	// var html = document.getElementsByTagName("html");
	var status = 1;
	
	for (let i = 0; i < triangle.length; i++) {
		triangle[i].addEventListener("click", function() {
			triangle[i].classList.toggle("rotate");
			hover1[i].classList.toggle("display");		
		});
	}

	for (let j = 0; j < triangleIn.length; j++) {
		triangleIn[j].addEventListener("click", function() {
			triangleIn[j].classList.toggle("rotate");
			hoverIn[j].classList.toggle("display");		
		});
	}

	btnMenu[0].onclick = function() {
		if (status == 1) {
			status = 2;
			widgetMenu.classList.remove("animation-none");
			widgetMenu.classList.add("display", "widget-menu-1");
			document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
			btnMenu[0].style.zIndex = "9999";
		} else if (status == 2) {
			status = 1;
			widgetMenu.classList.remove("widget-menu-1");
			widgetMenu.classList.add("widget-menu-2");
			
			document.body.style.backgroundColor = "transparent";
		}
	}

	close.onclick = function() {
		widgetMenu.classList.remove("widget-menu-1", "widget-menu-2");
		widgetMenu.classList.add("widget-close");
			
		document.body.style.backgroundColor = "transparent";
	}
	
});

// ---------Button Back to Top-------------

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
	if (window.pageYOffset > 450) {
		document.getElementById("back-to-top").style.display = "block";
	} else {
		document.getElementById("back-to-top").style.display = "none";
	}
};

document.getElementById("back-to-top").addEventListener("click", backToTop);
function backToTop() {
	window.scrollTo(0, 0);
};