(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;

	/*
	function mainSlider() {
		$('.bxslider').bxSlider({
			pagerCustom: '#bx-pager',
			mode: 'fade',
			nextText: '',
			prevText: ''
		});
	}

	mainSlider(); */



	var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
	$links.click(function(){
	   $(".slider-caption").removeClass('animated fadeInLeft');
	   $(".slider-caption").addClass('animated fadeInLeft');
	});

	$(".bx-controls").addClass('container');
	$(".bx-next").addClass('fa fa-angle-right');
	$(".bx-prev").addClass('fa fa-angle-left');


	$('a.toggle-menu').click(function(){
        $('.responsive .main-menu').toggle();
        return false;
    });

    $('.responsive .main-menu a').click(function(){
        $('.responsive .main-menu').hide();

    });

    /* $('.main-menu').singlePageNav(); */
})(window, jQuery);

var map = '';

function initialize() {
	var myLatLng = {lat: 33.729998, lng: 73.037313};
	var mapOptions = {
      zoom: 14,
      center: myLatLng
    };
    map = new google.maps.Map(document.getElementById('map'),  mapOptions);
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'Shah Faisal Masjid Islamabad'
	});

}

// load google map
/* var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script); */