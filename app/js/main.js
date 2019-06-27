$(function(){
    var mixer = mixitup('.portfolio__content');

    $('.slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        dots: true
    });
});