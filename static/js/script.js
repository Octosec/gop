/* Portfolio */
function port() {
    $('#grid li').removeClass('selected').addClass('not-selected');
    $('.portfolio-nav > li').removeClass('current-li');
}

function show(category) { 
    port();
    $('#' + category).addClass('current-li');
    $('.' + category).removeClass('not-selected');
    $('.' + category).addClass('selected');
    if (category == "all") { 
        $('.portfolio-nav > li').removeClass('current-li');
        $('#all').addClass('current-li');
        $('#grid li').removeClass('selected, not-selected');
    }
}

$(document).ready(function() {
	
	/* Fixed menu */
	var $menu = $(".index-page #header");
        $(window).scroll(function(){
        if ( $(this).scrollTop() > 60 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 60 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
       });
	
	/* Scroll Animate */
	$('.menu a[href^="#"], .up').click(function(){
			var target = $(this).attr('href');
			$("html, body").animate({
				scrollTop: $($(this).attr("href")).offset().top + -50 + "px"
			}, {
				duration: 500
			});
			return false; 
	   }); 

	/* Portfolio */
	$('#all').addClass('current-li');
		$(".portfolio-nav > li").click(function(){
			show(this.id);
		});

	/* Animations Effect Index Page */	
	AOS.init({
		easing: 'ease-out-back',
		disable: 'mobile',
		duration: 1000
	});
	

	/* Swiper Slider Home Page */
	var swiper = new Swiper('#slide', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		nextButton: '#swiper-top-next',
        prevButton: '#swiper-top-prev'
    });
	
	/* Carousel Index page */
	var swiper = new Swiper('#carousel', {
        slidesPerView: 5,
        paginationClickable: false,
        spaceBetween: 30,
        freeMode: true,
		loop: true,
		nextButton: '#swiper-button-next',
        prevButton: '#swiper-button-prev',
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

	var swiper = new Swiper('#carousel2', {
        slidesPerView: 5,
        paginationClickable: false,
        spaceBetween: 30,
        freeMode: true,
		loop: true,
		nextButton: '#swiper-button-next',
        prevButton: '#swiper-button-prev',
		breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

	/* Review index page */
	var swiper = new Swiper('#review', {
        pagination: '.swiper-pagination2',
		autoHeight: true,
        paginationClickable: true,
		direction: 'vertical'
		
    });
	
	// /* Scroll anchor animate */
	// $('.nav a[href^="#"]').click(function(){
   //      var target = $(this).attr('href');
   //      $("html, body").animate({
   //          scrollTop: $($(this).attr("href")).offset().top + -50 + "px"
   //      }, {
   //          duration: 500
   //      });
   //      return false;
   // });

});



