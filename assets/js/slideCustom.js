$(function () {

    var swiper01 = new Swiper(".main_banner01", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        autoplay: {
            delay: 3000,
        },
    });

    var swiper02 = new Swiper(".main_banner02", {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });

    var swiper03 = new Swiper(".section_slide01", {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
}) // document ready