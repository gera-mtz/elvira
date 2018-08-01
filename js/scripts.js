$('.slider-nav').slick({
	dots: true,
  	infinite: false,
  	speed: 300,
  	slidesToShow: 4,
  	slidesToScroll: 4,
  	asNavFor: '.slider-for',
  	centerMode: true,
  	focusOnSelect: true
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});

/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
$('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('nav').css('background','#000');
	} else {
		$('nav').css('background','transparent');
	}
});

$(window).resize(function(){     
	if ($('#buttonResponsive').css('display') != 'none'){
		$('#navbarSidebar').css('display', 'none');
	} else{
		$('#navbarSidebar').css('display', 'block');
	}
});

$('#buttonResponsive').on('click', function(){
	if ($('#navbarSidebar').css('display') != 'none'){
		$('#navbarSidebar').css('display', 'none');
	} else{
		$('#navbarSidebar').css('display', 'block');
	}
});