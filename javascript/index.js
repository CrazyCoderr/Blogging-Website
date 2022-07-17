"use strict";


const mobi_nav = document.querySelector(".mob-nav")
const head = document.querySelector(".header")

const toggleNavbar = () => {
    head.classList.toggle("active");
}

mobi_nav.addEventListener('click', () => toggleNavbar());





$(document).ready(function () {

    $('.owl-one').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX'
        
    });

    $('.owl-two').owlCarousel({
        loop: true,
        items:1,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        Responsive:
        {
            0:{
                items: 1
            },
            480:{
                items: 2
            },
            769:{
                items: 3
            }
        }
    });

}
);