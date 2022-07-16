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
        margin: 15,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateIn:'flipInX',
        animateOut:'slideOutDown'
    })

}
)