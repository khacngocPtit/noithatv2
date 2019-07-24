$(document).ready(function() {
    $('.slider').slick({
        dots: false,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        verticalSwiping: true,
        arrows: false,
        autoplay: true,	
        autoplaySpeed: 4000,
        infinite: true
    });
});