const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navitems");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navlink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    console.log(header.offsetHeight);

    if (window.scrollY > header.offsetHeight + 70) {
        header.classList.add('stuck')
    } else {
        header.classList.remove('stuck')
    }
})


var menubtn = document.getElementById("menubutton");
var menupop = document.getElementById("menulist");
var fourth = document.getElementById("themenu")

menubtn.onclick = function () {
    menupop.classList.toggle("fade")
    fourth.classList.toggle("shrink")
}