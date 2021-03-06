/**
 * http://www.punicatheme.com
 * Copyright (c) 2014 Punicatheme
 *
 **/

/**
 *   1- Main menu
 *   2- Mobile menu
 *   3- Owl Carousel
 *   4- FlexSlider
 *   5- EI Slider
 *   6- Video wrapper
 *	 7- Validate form
 *   8- Google Map
 *   9- Search Box
 *   10- Flickr
 *   11- Back To Top
 *   12- Accordion
 *   13- Toggle Boxes
 
 *-----------------------------------------------------------------
 **/
 
"use strict";
var punica_variable = {
    "contact": {
        "address": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "marker": "/url image"
    },
    "i18n": {
        "VIEW": "View",
        "VIEWS": "Views",
        "validate": {
            "form": {
                "SUBMIT": "Submit",
                "SENDING": "Sending..."
            },
            "name": {
                "REQUIRED": "Please enter your name",
                "MINLENGTH": "At least {0} characters required"
            },
            "email": {
                "REQUIRED": "Please enter your email",
                "EMAIL": "Please enter a valid email"
            },
            "url": {
                "REQUIRED": "Please enter your url",
                "URL": "Please enter a valid url"
            },
            "message": {
                "REQUIRED": "Please enter a message",
                "MINLENGTH": "At least {0} characters required"
            }
        }
    }
};
var map;

/* =========================================================
1. Main Menu
============================================================ */

Modernizr.load([
  {
    load: punica_params.theme_uri + 'js/superfish.js',
    complete: function () {

        //Main menu
        jQuery('#main-menu').superfish({
            delay: 400,
            speed: 'fast',
            cssArrows: false
        });

    }
  }
]);


/* =========================================================
2. Mobile Menu
============================================================ */
Modernizr.load([
  {
    load: punica_params.theme_uri +  'js/jquery.navgoco.js',
    complete: function () {

        jQuery('#mobile-menu').navgoco({accordion: true});
        jQuery( "#main-nav i" ).click(function(){
            jQuery( "#mobile-menu" ).slideToggle( "slow" );
        });


        jQuery('#secondary-mobile-menu').navgoco({accordion: true});
        jQuery( "#secondary-nav .secondary-mobile-label" ).click(function(){
            jQuery( "#secondary-mobile-menu" ).slideToggle( "slow" );
        });
    }
  }
]);


/* =========================================================
3. Owl Carousel
============================================================ */
if (jQuery('.punica-fullwidth-carousel').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-fullwidth-carousel').each(function () {
                var $this = jQuery(this),
                    auto = parseInt( $this.data('autoplay') );

                if ( '0' == auto ) {
                    auto = false;
                }

                $this.owlCarousel({
                    singleItem : true,
                    stopOnHover: true,
                    lazyLoad : true,
                    navigation : false,
                    pagination: false,
                    navigationText : false,
                    autoPlay: auto,
                    paginationSpeed: parseInt( $this.data('paginationspeed') ),
                    rewindSpeed: parseInt( $this.data('rewindspeed') )
                });
            });
        }
      }
    ]);
};

if (jQuery('.punica-hotnews-carousel').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-hotnews-carousel').each(function () {
                var $this = jQuery(this),
                    auto = $this.data('autoplay');

                if ( '0' == auto ) {
                    auto = false;
                }

                $this.owlCarousel({
                    items : parseInt( $this.data('columns') ),
                    autoPlay: auto,
                    slideSpeed: parseInt( $this.data('paginationspeed') ),
                    paginationSpeed: parseInt( $this.data('paginationspeed') ),
                    rewindSpeed: parseInt( $this.data('rewindspeed') ),
                    itemsDesktop : [979,3],
                    itemsDesktopSmall : [799,2],
                    itemsTablet : [639,1],
                    lazyLoad : true,
                    navigation : true,
                    pagination: false,
                    navigationText : false,
                    addClassActive: true,
                    afterAction: function(){
                        jQuery(".first-item-0").removeClass("first-item-0");
                        jQuery(".punica-hotnews-carousel").find(".active").eq(0).addClass("first-item-0");
                    }
                });
            });
        }
      }
    ]);
};

if (jQuery('.punica-daily-carousel').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-daily-carousel').owlCarousel({
                singleItem : true,
                autoHeight: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-1').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-1').each(function () {
                var $this = jQuery(this),
                    auto = $this.data('autoplay');

                if ( '0' == auto ) {
                    auto = false;
                }

                $this.owlCarousel({
                    singleItem : true,
                    lazyLoad : true,
                    navigation : true,
                    pagination: false,
                    navigationText : false,

                    // dynamic settings
                    autoPlay: auto,
                    slideSpeed: parseInt( $this.data('paginationspeed') ),
                    paginationSpeed: parseInt( $this.data('paginationspeed') ),
                    rewindSpeed: parseInt( $this.data('rewindspeed') ),
                });
            });
        }
      }
    ]);
};

if (jQuery('.punica-carousel-2').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-carousel-2').owlCarousel({
                items : 3,
                itemsDesktop : [1024,3],
                itemsDesktopSmall : [979,3],
                itemsTablet : [799,3],
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false,
                addClassActive: true,
                afterAction: function(){
                    jQuery(".center-item").removeClass("center-item");
                    jQuery(".punica-carousel-2").find(".active").eq(1).addClass("center-item");
                }
            });
        }
      }
    ]);
};

if (jQuery('.punica-single-post-carousel').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/owl.carousel.js',
        complete: function () {
            jQuery('.punica-single-post-carousel').owlCarousel({
                singleItem : true,
                stopOnHover: true,
                lazyLoad : true,
                navigation : true,
                pagination: false,
                navigationText : false,
                autoPlay: true
            });
        }
      }
    ]);
};


/* =========================================================
4. Flex slider
============================================================ */
if (jQuery('.punica-flex-1-widget').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/jquery.flexslider-min.js',
        complete: function () {
            jQuery( '.punica-flex-wrapper' ).each(function () {
                var $this   = jQuery(this),
                    $main   = $this.find('.punica-flexslider-1'),
                    $thumbs = $this.find('.punica-flex-carousel-1');

                $thumbs.flexslider({
                    animation: "slide",
                    controlNav: false,
                    directionNav: false,
                    animationLoop: false,
                    slideshow: false,
                    itemWidth: 90,
                    itemMargin: 0,
                    asNavFor: '#' + $main.attr('id')
                });

                $main.flexslider({
                    animation: "slide",
                    controlNav: false,
                    directionNav: false,
                    animationLoop: false,
                    slideshow: false,
                    prevText: "",
                    nextText: "",
                    sync: '#' + $thumbs.attr('id'),
                    start: function(slider){
                      jQuery('body').removeClass('loading');
                    }
                });
            });
            
        }
      }
    ]);
};

if (jQuery('.punica-flex-2-widget').length > 0) {

    Modernizr.load([
      {
        load: punica_params.theme_uri +  'js/jquery.flexslider-min.js',
        complete: function () {
            jQuery('.punica-flexslider-2').each( function () {
                var $this = jQuery(this),
                    auto = false;

                if ( '1' == $this.data('autoplay') ) {
                    auto = true;
                }

                $this.flexslider({
                    animation: $this.data('animation'), // animation
                    controlNav: true,
                    directionNav: false,
                    animationLoop: false,
                    slideshow: auto, // auto
                    slideshowSpeed: $this.data('autoplay-speed'), // auto speed
                    animationSpeed: $this.data('pagination-speed'), // pagination speed
                    prevText: "",
                    nextText: "",
                    start: function (slider) {
                        slider.removeClass('loading');
                    },
                    after: function(slider) {
                        slider.find('.flex-caption').animate({bottom:0}, 400)
                    },
                    before: function(slider) {
                        jQuery('.punica-flexslider-2 .flex-caption').animate({ bottom:-105}, 400)
                    }
                });
            } );
        }
      }
    ]);
};

/* =========================================================
5. EI slider
============================================================ */
if (jQuery('.ei-slider').length > 0) {

    Modernizr.load([
        {
        load: punica_params.theme_uri +  'js/jquery.eislideshow.js',
            complete: function () {
                jQuery('.ei-slider').each(function () {
                    var $this = jQuery(this),
                        auto = false;

                    if ( '1' == $this.data('autoplay') ) {
                        auto = true;
                    }
                    
                    $this.eislideshow({
                        animation           : $this.data('animation'),
                        autoplay            : auto,
                        slideshow_interval  : parseInt( $this.data('auto-speed') ),
                        speed               : parseInt( $this.data('pagination-speed') ),
                        titlesFactor        : 0
                    });  
                });
            }
        }
    ]);
};

/* =========================================================
6. Video wrapper
============================================================ */
if (jQuery(".video-wrapper").length > 0) {
    Modernizr.load([{
        load: punica_params.theme_uri +  'js/fitvids.js',
        complete: function () {
            jQuery(".video-wrapper").fitVids();
        }
    }]);
};


/* =========================================================
7. Validate form
============================================================ */

if (jQuery('.contact-form').length > 0) {
    Modernizr.load([{
        load: [punica_params.theme_uri + 'js/jquery.form.js', punica_params.theme_uri + 'js/jquery.validate.js'],
        complete: function () {
            jQuery('.contact-form').validate({
                // Add requirements to each of the fields
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                // Specify what error messages to display
                // when the user does something horrid
                messages: {
                    name: {
                        required: punica_variable.i18n.validate.name.REQUIRED,
                        minlength: jQuery.format(punica_variable.i18n.validate.name.MINLENGTH)
                    },
                    email: {
                        required: punica_variable.i18n.validate.email.REQUIRED,
                        email: punica_variable.i18n.validate.email.EMAIL
                    },
                    message: {
                        required: punica_variable.i18n.validate.message.REQUIRED,
                        minlength: jQuery.format(punica_variable.i18n.validate.message.MINLENGTH)
                    }
                },
                // Use Ajax to send everything to processForm.php
                submitHandler: function (form) {
                    jQuery(".contact-form .input-submit").attr("value", punica_variable.i18n.validate.form.SENDING);
                    jQuery(form).ajaxSubmit({
                        success: function (responseText, statusText, xhr, $form) {
                            jQuery("#response").html(responseText).hide().slideDown("fast");
                            jQuery(".contact-form .input-submit").attr("value", punica_variable.i18n.validate.form.SUBMIT);
                        }
                    });
                    return false;
                }
            });
        }
    }]);
}



/* =========================================================
8. Google Map
============================================================ */
var map;

if (jQuery('.punica-map').length > 0) {
        var id_map = jQuery('.punica-map').attr('id');
        var lat = parseFloat(jQuery('.punica-map').attr('data-latitude'));
        var lng = parseFloat(jQuery('.punica-map').attr('data-longitude'));
        var place = jQuery('.punica-map').attr('data-place');

    map = new GMaps({
        el: '#'+id_map,
        lat: lat,
        lng: lng,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
    });
    map.addMarker({
        lat: lat,
        lng: lng,
        title: place
    });
};


/* =========================================================
9. Search box
============================================================ */
if (jQuery('#sb-search').length > 0) {
    Modernizr.load([{
        load: [punica_params.theme_uri +  'js/uisearch.js', punica_params.theme_uri + 'js/classie.js'],
        complete: function() {
            new UISearch(document.getElementById('sb-search'));
        }
    }]);
};

/* =========================================================
10. Flickr
============================================================ */
if (jQuery('.punica-flickr-widget').length > 0) {

    Modernizr.load([{
        load: [punica_params.theme_uri + 'js/jflickrfeed.js', punica_params.theme_uri + 'js/imgliquid.js'],
        complete: function () {
            jQuery('.punica-flickr-widget ul').each(function () {
                var $this = jQuery(this),
                    $wrap = $this.parent('.flickr-wrap');

                $this.jflickrfeed({
                    limit: parseInt( $wrap.data('limit') ),
                    qstrings: {
                        id: $wrap.data('id')
                    },
                    itemTemplate: '<li class="flickr-badge-image">' + '<a target="blank" href="{{link}}" title="{{title}}" class="imgLiquid">' + '<img src="{{image_m}}" alt="{{title}}"  />' + '</a>' + '</li>'
                }, 
                function (data) {
                    jQuery('.punica-flickr-widget .imgLiquid').imgLiquid();
                });
            });
        }
    }]);
}



jQuery(document).ready(function(){

    /* =========================================================
    11. Back to top
    ============================================================ */

    // hide #back-top first
    jQuery("#back-top").hide();

    // fade in #back-top
    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > 200) {
                jQuery('#back-top').fadeIn();
            } else {
                jQuery('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        jQuery('#back-top a').click(function () {
            jQuery('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    /* =========================================================
    12. Accordion
    ========================================================= */
    var acc_wrapper=jQuery('.acc-wrapper');
    if (acc_wrapper.length >0) 
    {
        
        jQuery('.acc-wrapper .accordion-container').hide();
        jQuery.each(acc_wrapper, function(index, item){
            jQuery(this).find(jQuery('.accordion-title')).first().addClass('active').next().show();
            
        });
        
        jQuery('.accordion-title').on('click', function(e) {
            punica_accordion_click(jQuery(this));
            e.preventDefault();
        });
        
        var titles = jQuery('.accordion-title');
        
        jQuery.each(titles,function(){
            punica_accordion_click(jQuery(this));
        });
    } 

    function punica_accordion_click (obj) {
        if( obj.next().is(':hidden') ) {
            obj.parent().find(jQuery('.active')).removeClass('active').next().slideUp(300);
            obj.toggleClass('active').next().slideDown(300);
                                
        }
    jQuery('.accordion-title span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        if (obj.hasClass('active')) {
            obj.find('span').removeClass('fa-chevron-down');
            obj.find('span').addClass('fa-chevron-up');             
        }
    }


    /* =========================================================
    13. Toggle Boxes
    ============================================================ */
         
    jQuery('.toggle-view li').click(function (event) {
      
        var text = jQuery(this).children('.punica-panel');

        if (text.is(':hidden')) {
            jQuery(this).addClass('active');
            text.slideDown('300');
            jQuery(this).children('span').removeClass('fa-chevron-down');
            jQuery(this).children('span').addClass('fa-chevron-up');                 
        } else {
            jQuery(this).removeClass('active');
            text.slideUp('300');
            jQuery(this).children('span').removeClass('fa-chevron-up');
            jQuery(this).children('span').addClass('fa-chevron-down');               
        }
       
    });

});


/* =========================================================
14. Sticky menu
============================================================ */ 
if (jQuery('#header-middle').hasClass('sticky')) {
    Modernizr.load([{
    	load: [punica_params.theme_uri + 'js/waypoints.js', punica_params.theme_uri + 'js/waypoints-sticky.js'],
    	complete: function () {
    		jQuery('#header-middle').waypoint('sticky');
    	}
    }]);
}