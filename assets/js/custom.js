jQuery(document).ready(function() {
	
		/*	jQuery('a.icon-bg, a .list-box').mouseenter(function() {
		jQuery('.menulist .list-box').removeClass('list-box-show');
		jQuery(this).closest(".menulist").find(".list-box").addClass('list-box-show');

		jQuery('a.icon-bg, .list-box').removeClass('icon-zindex');
		jQuery(this).closest(".menulist").find("a.icon-bg").addClass('icon-zindex');
	});

	jQuery('a.icon-bg, a .list-box').mouseleave(function() {
		jQuery('.menulist').removeClass('list-box-show');
		jQuery(this).closest(".menulist").find(".list-box").removeClass('list-box-show');
	});*/
			jQuery('a.icon-bg, .list-box').mouseenter(function() {
		jQuery('.menulist .list-box').removeClass('list-box-show');
		jQuery(this).closest(".menulist").find(".list-box").addClass('list-box-show');

		jQuery('a.icon-bg, .list-box').removeClass('icon-zindex');
		jQuery(this).closest(".menulist").find("a.icon-bg").addClass('icon-zindex');
	});
	
	
	jQuery('a.icon-bg, .list-box').mouseleave(function() {
		jQuery('.menulist').removeClass('list-box-show');
		jQuery(this).closest(".menulist").find(".list-box").removeClass('list-box-show');
	});



	/* ------------- Popup Video code ---------------*/
	autoPlayYouTubeModal();

	function autoPlayYouTubeModal() {
		var trigger = jQuery("body").find('[data-toggle="modal"]');
		trigger.click(function () {
			var theModal = jQuery(this).data("target"),
				videoSRC = jQuery(this).attr("data-theVideo"),
				videoSRCauto = videoSRC + "?rel=0&showinfo=0&autoplay=1";
			jQuery(theModal + ' iframe').attr('src', videoSRCauto);
			jQuery(theModal + ' button.close').click(function () {
				jQuery(theModal + ' iframe').attr('src', videoSRC);
			});
			jQuery('.modal').click(function () {
				jQuery(theModal + ' iframe').attr('src', videoSRC);
			});
		});
	}
	
	
	jQuery("#vertical-accordion").easyResponsiveTabs({
    type: 'accordion',      
    width: 'auto',
    fit: true,
    closed: true, 
    activate: function() {}, 
    tabidentify: 'tab_identifier_child',
    activetab_bg: '#B5AC5F', 
    inactive_bg: '#E0D78C',
    active_border_color: '#9C905C', 
    active_content_border_color: '#9C905C',
});	
	

	
	
	
jQuery('#horizontalTab').easyResponsiveTabs({
	type: 'default',      
	width: 'auto', 
	fit: true,  
	closed: 'accordion', 
	activate: function(event) { 
	var jQuerytab = jQuery(this);
	var jQueryinfo = jQuery('#tabInfo');
	var jQueryname = jQuery('span', jQueryinfo);
	jQueryname.text(jQuerytab.text());
	jQueryinfo.show();
	}
});	
	
	
	

	

jQuery('.citizen_speak').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		loop:false,
  responsive: [
    {
		breakpoint: 1024,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
		loop:false,
      }
    },
    {
		breakpoint: 600,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1
      }
    },
    {
		breakpoint: 480,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1
      }
    }
  ]
});		
	
	
	
		
$('.blue-stroke').percentcircle({
	animate : true,
	coverBg: '#fff',
	bgColor: '#efefef',
	fillColor: '#5881b6',
	percentSize: '18px',
	percentWeight: 'normal'
});		
$('.green-stroke').percentcircle({
	animate : true,
	coverBg: '#fff',
	bgColor: '#efefef',
	fillColor: '#8fb960',
	percentSize: '18px',
	percentWeight: '20px'
});	
$('.yellow-stroke').percentcircle({
	animate : true,
	coverBg: '#fff',
	bgColor: '#efefef',
	fillColor: '#fdca4f',
	percentSize: '18px',
	percentWeight: 'normal'
});	
$('.gray-stroke').percentcircle({
	animate : true,
	coverBg: '#fff',
	bgColor: '#efefef',
	fillColor: '#9a9089',
	percentSize: '18px',
	percentWeight: 'normal'
});
	



});


