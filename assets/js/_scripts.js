// Swiper

$(function(){
	
	var swiperN11 = $('.swiper-n11').swiper({
	        pagination: '.pagination-n11',
	        createPagination: false,
	        loop: true,
	        slidesPerSlide: 1
	    });
	var swiperN22 = $('.swiper-n22').swiper({
	        pagination: '.pagination-n22',
	        createPagination: false,
	        slidesPerSlide: 1,
	        mode: 'vertical'
	    });
})

$("#reveal").click(function() {
      $("#order").reveal();
    });
