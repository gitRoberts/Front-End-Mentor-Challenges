var author = document.getElementById("author");
var hidden = document.getElementById("hidden");

var openMenuIcon = document.getElementById("openIcon");
var closeMenuIcon = document.getElementById("closeIcon");

var backgroundCircle = document.getElementById("circle");

openMenuIcon.addEventListener("click", showMobileMenu);
closeMenuIcon.addEventListener("click", closeMobileMenu);

function showMobileMenu() {
    author.style.height = "0px";
    author.style.overflow = "hidden";
    hidden.style.height = "50px";
    backgroundCircle.style.background = "hsl(214, 17%, 51%)";
}

function closeMobileMenu() {
    hidden.style.height = "0px";
    author.style.height = "50px";
    backgroundCircle.style.background = "white";
}