$(function() {
	
	// Wow Animation
	var wow = new WOW({
			mobile: true,
		}
	);
	wow.init();
	
	// ѕри клике на €корную ссылку, происходит плавный переход к нужной секции
	$("#topmenu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	$("#services .info").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	$("body").on("click",".angle-down", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 500);
	});
	
	$(".right-info").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	
	// slick Portfolio
	$('.wrap-slider').slick({
		arrows: false,
		centerMode: true,
		centerPadding: '295px',
		slidesToShow: 2,
		responsive: [{
			breakpoint: 1440, settings: {
				centerMode: true,
				centerPadding: '200px',
			}
		},{
			breakpoint: 1026, settings: {
				centerMode: true,
				centerPadding: '120px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 993, settings: {
				centerMode: true,
				centerPadding: '80px',
				slidesToShow: 1,
				rows: 4
			}
		},{
			breakpoint: 962, settings: {
				centerMode: true,
				centerPadding: '80px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 802, settings: {
				centerMode: true,
				centerPadding: '80px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 769, settings: {
				centerMode: true,
				centerPadding: '80px',
				slidesToShow: 1,
				rows: 4
			}
		},{
			breakpoint: 737, settings: {
				centerMode: true,
				centerPadding: '100px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 721, settings: {
				centerMode: true,
				centerPadding: '200px',
				slidesToShow: 1,
				rows: 4
			}
		},{
			breakpoint: 668, settings: {
				centerMode: true,
				centerPadding: '100px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 685, settings: {
				centerMode: true,
				centerPadding: '100px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 641, settings: {
				centerMode: true,
				centerPadding: '100px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 577, settings: {
				centerMode: true,
				centerPadding: '80px',
				slidesToShow: 1,
				rows: 4
			}
		},{
			breakpoint: 569, settings: {
				centerMode: true,
				centerPadding: '50px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 568, settings: {
				centerMode: false,
				slidesToShow: 1,
				rows: 4
			}
		},{
			breakpoint: 482, settings: {
				centerMode: true,
				centerPadding: '50px',
				slidesToShow: 2,
			}
		},{
			breakpoint: 362, settings: {
				centerMode: true,
				centerPadding: '60px',
				slidesToShow: 1,
				rows: 4
			}
		},{
			breakpoint: 322, settings: {
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
				rows: 4
			}
		}]
	});
});

$(document).ready(function() {
	$("html,body").css("overflow","hidden");
	setTimeout(function() {
		$('#preloader').hide();
		$("html,body").css("overflow-y","auto");
	},9800)
});