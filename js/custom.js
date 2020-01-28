/* Copyright (c) 2017 Himanshu Softtech.
------------------------------------------------------------------
[Master Javascript]

Project: Fittness First
Version: 1.0.0
-------------------------------------------------------------------*/

(function($){
  "use strict";
	
	// Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
	
	// ready function
	jQuery(document).ready(function($) {
   		var $this = $(window);
	
	// Banner Slider js
	var revapi1078 = jQuery("#rev_slider_1078_1").show().revolution({
		sliderType:"standard",
		jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
		sliderLayout:"fullwidth",
		dottedOverlay:"none",
		delay:9000,
		navigation: {
			keyboardNavigation:"off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation:"off",
			mouseScrollReverse:"default",
			onHoverStop:"off",
			touch:{
				touchenabled:"on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			}
			,
			arrows: {
				style:"zeus",
				enable:true,
				hide_onmobile:true,
				hide_under:600,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				tmp:'<div class="tp-title-wrap"></div>',
				left: {
					h_align:"left",
					v_align:"center",
					h_offset:30,
					v_offset:0
				},
				right: {
					h_align:"right",
					v_align:"center",
					h_offset:30,
					v_offset:0
				}
			}
			,
			bullets: {
				enable:false,
				hide_onmobile:true,
				hide_under:600,
				style:"metis",
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				direction:"horizontal",
				h_align:"center",
				v_align:"bottom",
				h_offset:0,
				v_offset:30,
				space:5,
				tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
			}
		},
		viewPort: {
			enable:true,
			outof:"pause",
			visible_area:"100%",
			presize:false
		},
		responsiveLevels:[1240,1024,778,480],
		visibilityLevels:[1240,1024,778,480],
		gridwidth:[1240,1024,778,480],
		gridheight:[750,650,500,400],
		lazyType:"none",
		parallax: {
			type:"mouse",
			origo:"slidercenter",
			speed:2000,
			levels:[2,3,4,5,6,7,12,16,10,50,47,48,49,50,51,55],
			type:"mouse",
		},
		shadow:0,
		spinner:"off",
		stopLoop:"off",
		stopAfterLoops:-1,
		stopAtSlide:-1,
		shuffle:"off",
		autoHeight:"off",
		hideThumbsOnMobile:"off",
		hideSliderAtLimit:0,
		hideCaptionAtLimit:0,
		hideAllCaptionAtLilmit:0,
		debugMode:false,
		fallbacks: {
			simplifyAll:"off",
			nextSlideOnWindowFocus:"off",
			disableFocusListener:false,
		}
	});
	
	// On focus Placeholder css
	var place = '';
		$('input,textarea').focus(function(){
			place = $(this).attr('placeholder');
		$(this).attr('placeholder','');
		}).blur(function(){
		$(this).attr('placeholder',place);
		});
	
	// for counter 
		$('.timer').appear(function() {
			$(this).countTo();
		});
	
	// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 400) {
			$('.gm_header_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.gm_header_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});
	
	// Menu show Hide
	var counter = 0;
	$('.gm_menu_btn').on("click", function(){
		if( counter == '0') {
			$('.gm_main_menu_wrapper').addClass('gm_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-close');
			counter++;
		}
		else {
			$('.gm_main_menu_wrapper').removeClass('gm_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-bars');
			counter--;
		}		
	});
	
	// Testimonial Slider	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		autoplay:true,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	// Magnific Popup js
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});
	
	// Contact Form Submition
	$("#ed_submit").on("click", function() {
        var e = $("#uname").val();
        var t = $("#umail").val();
        var s = $("#sub").val();
        var r = $("#msg").val();
        $.ajax({
            type: "POST",
            url: "ajaxmail.php",
            data: {
                username: e,
                useremail: t,
                useresubject: s,
                mesg: r
            },
            success: function(n) {
                var i = n.split("#");
                if (i[0] == "1") {
                    $("#uname").val("");
                    $("#umail").val("");
                    $("#sub").val("");
                    $("#msg").val("");
                    $("#err").html(i[1]);
                } else {
                    $("#uname").val(e);
                    $("#umail").val(t);
                    $("#sub").val(s);
                    $("#msg").val(r);
                    $("#err").html(i[1]);
                }
            }
        });
	});
	
	
	// Single page scroll menu
	var pluginName = 'ScrollIt',
		pluginVersion = '1.0.3';

	/*
	 * OPTIONS
	 */
	var defaults = {
		upKey: 38,
		downKey: 40,
		easing: 'linear',
		scrollTime: 600,
		activeClass: 'active',
		onPageChange: null,
		topOffset : -70
	};

	$.scrollIt = function(options) {

		/*
		 * DECLARATIONS
		 */
		var settings = $.extend(defaults, options),
			active = 0,
			lastIndex = $('[data-scroll-index]:last').attr('data-scroll-index');

		/*
		 * METHODS
		 */

		/**
		 * navigate
		 *
		 * sets up navigation animation
		 */
		var navigate = function(ndx) {
			if(ndx < 0 || ndx > lastIndex){ return; }

			var targetTop = $('[data-scroll-index=' + ndx + ']').offset().top + settings.topOffset + 1;
			$('html,body').animate({
				scrollTop: targetTop,
				easing: settings.easing
			}, settings.scrollTime);
		};

		/**
		 * doScroll
		 *
		 * runs navigation() when criteria are met
		 */
		var doScroll = function (e) {
			var target = $(e.target).closest("[href]").attr('href') ||
			$(e.target).closest("[data-scroll-goto]").attr('data-scroll-goto');
			navigate(parseInt(target,10));
		};

		/**
		 * keyNavigation
		 *
		 * sets up keyboard navigation behavior
		 */
		var keyNavigation = function (e) {
			var key = e.which;
			if($('html,body').is(':animated') && (key == settings.upKey || key == settings.downKey)) {
				return false;
			}
			if(key == settings.upKey && active > 0) {
				navigate(parseInt(active,10) - 1);
				return false;
			} else if(key == settings.downKey && active < lastIndex) {
				navigate(parseInt(active,10) + 1);
				return false;
			}
			return true;
		};

		/**
		 * updateActive
		 *
		 * sets the currently active item
		 */
		var updateActive = function(ndx) {
			if(settings.onPageChange && ndx && (active != ndx)) {settings.onPageChange(ndx); }

			active = ndx;
			$('[href]').removeClass(settings.activeClass);
			$('[href=' + ndx + ']').addClass(settings.activeClass);
		};

		/**
		 * watchActive
		 *
		 * watches currently active item and updates accordingly
		 */
		var watchActive = function() {
			var winTop = $(window).scrollTop();

			var visible = $('[data-scroll-index]').filter(function(ndx, div) {
				return winTop >= $(div).offset().top + settings.topOffset &&
				winTop < $(div).offset().top + (settings.topOffset) + $(div).outerHeight();
			});
			var newActive = visible.first().attr('data-scroll-index');
			updateActive(newActive);
		};

		/*
		 * runs methods
		 */
		$(window).on('scroll',watchActive).scroll();

		$(window).on('keydown', keyNavigation);

		$('.gm_single_index_menu').on('click','[href], [data-scroll-goto]', function(e){
			e.preventDefault();
			doScroll(e);
		});

	};

	
	});
	
})(); 