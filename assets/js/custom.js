(function($){

	$(document).on('ready',function() {

	    moreInfo();
	 

	    function moreInfo(){
	        $('.view-more-btn').each(function(){
	            var btn = $(this),
	                info = $(this).siblings('.more-info');
	            btn.on('click',function(){
	                info.slideToggle('active');
	                if ($(this).hasClass('active')) {
	                    $(this).removeClass('active').text('Vis mer');
	                } else {
	                    $(this).addClass('active').text('Vis færre');
	                }
	            });
	        });
	    } //more-info in category page

	});
})(jQuery);