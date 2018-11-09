function adaptImgPartners() {
  var partnersImg = jQuery('.partner img');
  for(var i = 0; i < partnersImg.length; i++) {
    if(partnersImg[i].clientWidth > jQuery('.partner:first').width() - 20) {
      partnersImg[i].style.width = '75%'
    }
  }
}

jQuery(document).ready(function() {

    jQuery('.other').click(function() {
        jQuery(this).parent().find(".hide-block").slideToggle("slow");
        jQuery(this).toggleClass('open');
    });
    jQuery('.title_list').click(function() {
        jQuery('.list_manufacturers').slideToggle("slow");
        jQuery(this).toggleClass('open');
    });

  adaptImgPartners();
  
  jQuery('.search_ico').on('click', function() {
    jQuery('.search_field').toggleClass('nav_active_search');
    jQuery('.nav_search').toggleClass('nav_active_search_wrap');
  })
  jQuery('.nav_open_menu').click(function() {
    jQuery('.nav_bottom').slideToggle("slow");
  })
  jQuery('.scrolltotop').click(function(){
    jQuery('html,body').animate({scrollTop: 0}, 1000);
  });
  jQuery('.btn_mob_menu').click(function(){
    jQuery('.menu_mob_wrap').slideToggle('slow');
  })


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

jQuery(window).resize(function() {
  adaptImgPartners();
})

jQuery(window).scroll(function(){
	if(jQuery(document).scrollTop() > jQuery(window).height()) {
  	jQuery('.scrolltotop').show();
  } else {
  	jQuery('.scrolltotop').hide();
  }
});

