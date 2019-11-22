$(function () {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav',
        infinite: true

    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        asNavFor: '.slider__inner',
        dots: true,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 651,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]

    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu ul').slideToggle();
    });
});