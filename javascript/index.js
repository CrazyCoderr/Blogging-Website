
"use strict";

const mobi_nav = document.querySelector(".mob-nav")
const head = document.querySelector(".header")

const toggleNavbar = () =>{
    head.classList.toggle("active");
}

    mobi_nav.addEventListener('click', () => toggleNavbar());
