// Swiper

$(function(){
	
	var swiperN11 = $('.swiper-n11').swiper({
	        pagination: '.pagination-n11',
	        loop: true,
	        preventLinks : true,	        
	        slidesPerSlide: 1
	    });
	    
	    
	$('.js-open-popup-link').magnificPopup({
	  type:'inline',
	  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});
	
})
