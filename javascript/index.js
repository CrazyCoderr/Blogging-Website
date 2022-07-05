$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut:'fadeOut'
    })

}
)


"use strict";

const mobi_nav = document.querySelector(".mob-nav")
const head = document.querySelector(".header")

const toggleNavbar = () => {
    head.classList.toggle("active");
}

mobi_nav.addEventListener('click', () => toggleNavbar());
