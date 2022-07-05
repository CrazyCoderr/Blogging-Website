
"use strict";

const mobi_nav = document.querySelector(".mob-nav")
const head = document.querySelector(".header")

const toggleNavbar = () => {
    head.classList.toggle("active");
}

mobi_nav.addEventListener('click', () => toggleNavbar());


$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1
    })

}
)