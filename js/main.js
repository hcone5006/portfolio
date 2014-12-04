$(document).ready(function(){
	$(function(){
		//initiate MixItUp
		$('#all-work').mixItUp();
	});

	$("#about-link").click(function(){
		// e.preventDefault();
		$("#about").velocity('scroll',{
			duration:1000,
			easing: 'easeInOutQuad', offset: -60
		});

	});

	$("#portfolio-link").click(function(){
		// e.preventDefault();
		$("#portfolio").velocity('scroll',{
			duration:1000,
			easing: 'easeInOutQuad', offset: -60
		});

	});

	$("header h1").click(function(e){
		e.preventDefault();
		$("#about").velocity('scroll',{
			duration:1000,
			easing: 'easeInOutQuad', offset: -60
		});

	});

	$("#top").click(function(e){
		e.preventDefault();
		$(".title").velocity('scroll',{
			duration:1000,
			easing: 'easeInOutQuad', offset: -80
		});
	});

	$('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
    
    $('.fancybox').fancybox({
            padding : 0,
            openEffect  : 'elastic'
        });
})