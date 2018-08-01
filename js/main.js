jQuery(document).ready(function(){
	/*----------------------------
        01. SCROLL TO TOP JQUERY
    ------------------------------ */
	jQuery(window).scroll(function() {
		"use strict";
	    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
	        jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	jQuery('#return-to-top').click(function() {      // When arrow is clicked
	    jQuery('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});

	/*----------------------------
        02. COUNTUP JQUERY
    ------------------------------ */
    jQuery('.counting_number').countUp({
        'time': 2000,
        'delay': 10,
	});

	/*----------------------------
        03. LOAD MORE JQUERY
    ------------------------------ */
	jQuery(function () {
        "use strict";
        jQuery('.mix .item').slice(0, 6).show();
        jQuery('#loadmore').on('click', function (e) {
            e.preventDefault();
            jQuery('.mix .item:hidden').slice(0, 8).slideDown();
            if (jQuery('.mix .item:hidden').length === 0) {
                jQuery('#loadmore').fadeOut('slow/400/fast');
            }
        });
	});

	jQuery(".blog_slider").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a>'+(i+1)+'</a>';
            },
        responsive: [
            {
                breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
	});

	jQuery(".testimonial_slider").slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a>'+(i+1)+'</a>';
            },
        responsive: [
            {
                breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                } 
            },
        ]
});

	/*----------------------------
        04. MIXITUP JQUERY
    ------------------------------ */
    var mixer = mixitup('.portfolio_items');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
	    selectors: {
	        target: '.blog-item',
	    },
	    animation: {
	        duration: 300,
	    }
	});

});