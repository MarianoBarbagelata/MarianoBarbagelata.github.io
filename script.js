$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		} else {
			$('.navbar').removeClass("sticky");
		}
		if(this.scroll > 500){
			$('.scroll-up-btn').addClass("show");
		} else {
			$('.scroll-up-btn').removeClass("show");
		}
	});

	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});

	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	var typed = new Typed(".typing", {
		strings: ["Developer", "Designer", "Freelancer"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		autoplay: true,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}
	});
	$('.scrollup').hide();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').click(function(){
		$('body, hmtl').animate({
			scrollTop: 0
		});
	});

	const sr = ScrollReveal({
    	distance: '60px',
    	duration: 2500,
    	delay: 400,
    // reset: true
	});

	sr.reveal(`.left`,{origin: 'left'})
	sr.reveal(`.right`,{origin: 'right'})
	sr.reveal(`.title, .icons, .carousel, .scroll-down`,{origin: 'top'})
	sr.reveal(`.home-content`,{origin: 'bottom'})
});