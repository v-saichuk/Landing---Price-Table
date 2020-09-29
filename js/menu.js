$(function() {
	var link = $('.m-menu-link');
	var close = $('.close-menu');
	var menu = $('.m-menu');
	link.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu_activ');
	});
	close.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('m-menu_activ');
	});
});

$("#down").click(function() {
    $('html, body').animate({
        scrollTop: $(".price_section").offset().top}, 1000);
});