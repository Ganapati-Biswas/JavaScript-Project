console.log("hello");

let brgr=document.querySelector(".burger");
let navLink=document.querySelector(".nav-links");
let navLinks = document.querySelectorAll(".nav-links li");

brgr.addEventListener("click", function()
{
    console.log("hello");
    navLink.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 20 + 0.1}s`;
        }
    });
    //Burger Animation
    brgr.classList.toggle("toggle");
});