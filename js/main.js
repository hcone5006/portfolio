$(document).ready(function(){
	$(function(){
		//initiate MixItUp
		$('#all-work').mixItUp();
	});

	$("li a").click(function(e){
		e.preventDefault();
		$("#about").velocity('scroll',{
			duration:1000,
			easing: 'easeInOutQuad'
		});

	});

	$("footer a").click(function(e){
		e.preventDefault();
		$("#home").velocity('scroll',{
			duration:1000,
			easing: 'easeInOutQuad'
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