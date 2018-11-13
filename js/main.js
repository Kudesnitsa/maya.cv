
function adaptImgPartners() {
    var partnersImg = jQuery('.partner img');
    for (var i = 0; i < partnersImg.length; i++) {
        if (partnersImg[i].clientWidth > jQuery('.partner:first').width() - 20) {
            partnersImg[i].style.width = '75%'
        }
    }
}

jQuery(document).ready(function () {

    jQuery('.other').click(function () {
        jQuery(this).parent().find(".hide-block").slideToggle("slow");
        jQuery(this).toggleClass('open');
    });

    jQuery('.target').click(function () {
        jQuery('.list_manufacturers').slideToggle("slow");
        jQuery(this).toggleClass('open');
    });

    jQuery('.product-page .btn_goold').click(function () {
        jQuery('body').toggleClass('open_modal');
    });

    jQuery('.close_modal').click(function () {
        jQuery('body').removeClass('open_modal');
        jQuery('.modal').removeClass('confirmation');
    });

    jQuery('.modal .send_modal').click(function () {
        jQuery('.modal').toggleClass('confirmation');
        setTimeout(function(){
            jQuery('.modal').removeClass('confirmation');
        }, 30000);
    });


    adaptImgPartners();

    jQuery('.search_ico').on('click', function () {
        jQuery('.search_field').toggleClass('nav_active_search');
        jQuery('.nav_search').toggleClass('nav_active_search_wrap');
    });
    jQuery('.nav_open_menu').click(function () {
        jQuery('.nav_bottom').slideToggle("slow");
    });
    jQuery('.scrolltotop').click(function () {
        jQuery('html,body').animate({scrollTop: 0}, 1000);
    });
    jQuery('.btn_mob_menu').click(function () {
        jQuery('.menu_mob_wrap').slideToggle('slow');
    });

    jQuery('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // slick
    jQuery('.partners_cont_imgs').slick({
        arrows: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '.partner_arrow_prev',
        nextArrow: '.partner_arrow_next',
        responsive: [
            {
                breakpoint: 1620,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
})

jQuery(window).resize(function () {
    adaptImgPartners();
})

jQuery(window).scroll(function () {
    if (jQuery(document).scrollTop() > jQuery(window).height()) {
        jQuery('.scrolltotop').show();
    } else {
        jQuery('.scrolltotop').hide();
    }
});

