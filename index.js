const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

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

// $(window).scroll(function(){
//     if($(window).scrollTop()){
//         $("header")
//     }
// }
//     )

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // console.log(window.scrollY);

    console.log(header.offsetHeight);

    if(window.scrollY > header.offsetHeight + 70){
        header.classList.add('stuck')
    } else{
        header.classList.remove('stuck')  
    }
})



var menubtn = document.getElementById("menubutton");
var menupop = document.getElementById("menulist");


// menubtn.onclick = function(){
// menupop.classList.toggle("show")
// }

menubtn.onclick = function(){
    menupop.classList.toggle("fade")
    }

