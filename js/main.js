$(document).ready(function(){
	$(function(){
		//initiate MixItUp
		$('#all-work').mixItUp();
	});
	$("li a").click(function(){
		$("html, body").animate({
			scrollTop: $("#about").offset().top
		}, 2000);
	});
	$("footer a").click(function(){
		$("html, body").animate({
			scrollTop: $("#home").offset().top
		}, 2000);
	});
})