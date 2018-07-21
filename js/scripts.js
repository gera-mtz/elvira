/* When your mouse cursor enter the background, the fading won't pause and keep playing */ 
$('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});

$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('nav').css('background','#000');
	} else {
		$('nav').css('background','transparent');
	}
});