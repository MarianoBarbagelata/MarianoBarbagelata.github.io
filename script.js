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
		autoplayTimeOut: 5000,
		autoplayHoverPause: true,
		autoplay: true,
		autoplayTimeout: 5000,
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

	const sr = ScrollReveal({
    	distance: '50px',
    	duration: 2500,
    	delay: 400,
    // reset: true
	});

	sr.reveal(`.left`,{origin: 'left'})
	sr.reveal(`.right`,{origin: 'right'})
	sr.reveal(`.title, .icons, .carousel`,{origin: 'top'})
	sr.reveal(`.home-content, .scroll-down`,{origin: 'bottom'})

	const $form = document.querySelector('#form')

	$form.addEventListener('submit', handleSubmit)

	async function handleSubmit(event) {
		event.preventDefault()
		const form = new FormData(this)
		const response = await fetch(this.action, {
			method: this.method,
			body: form,
			headers: {
				'Accept': 'application/json'
			}
		})
		if (response.ok) {
			this.reset()
			alert('Thank you for contacting me, I will respond as soon as possible. :)')
		}
	}
});