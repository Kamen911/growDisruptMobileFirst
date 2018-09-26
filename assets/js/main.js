(function ($) {

	$(document).on('ready', function () {

		moreInfo();

		// Load More button
		// more info toggle 3 more boxes
		function moreInfo() {
			$('.load-more').each(function () {
				var btn = $(this),
					info = $(this).siblings('.more-info');

				btn.on('click', function () {
					info.slideToggle('active');

					if ($(this).hasClass('active')) {
						$(this).removeClass('active').text('View Less');
						info.removeClass('flex');
					} else {
						$(this).addClass('active').text('View More');
						info.addClass('flex');
						btn.hide();
					}
				});
			});
		}

		// scroll indicator
		$(function () {
			$('a[href*=#library]').on('click', function (e) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top
				}, 500, 'linear');
			});
		});

		// toggle class on hamburgegr to overflow:hidden on body
		$('.navbar-toggler').on('click', function () {
			$('body').toggleClass('hamburger-on');
		});

		// NOTE TO ME!
		// rewrite the button custom to change the hamburger to X icon

	});


})(jQuery);