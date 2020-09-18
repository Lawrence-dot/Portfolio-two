let openNav = document.getElementById("side");
let nav = document.getElementById("side-navigation");
let close = document.getElementById("opened");

openNav.onclick = function(){
	openNav.setAttribute("id", "opened");
	close.style.display = "block";
	close.style.left = "0";
	nav.style.display = "block";
}

close.onclick = function () {
	openNav.setAttribute("id", "side");
	close.style.display = "none";
	nav.style.display = "none";
}

console.log(openNav.innerHTML);

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");

	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}

	slideIndex++

	if(slideIndex > slides.length)
	(slideIndex = 1)


	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 5000);
}

var submit = document.getElementById("f-submit");
var input = document.getElementById("f-text");

submit.onclick = function () {
	if(!submit.value){
		alert("Please Input Something");
	} else {
		alert("Subscribtion Successful");
	}
};







	




