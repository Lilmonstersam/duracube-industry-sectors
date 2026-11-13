jQuery(function($){
	var email_to_download_btn = $('.email-to-download');
	var email_wrapper = $('#email-to-download');
	var email_bg = $('#email-to-download-bg');
	var email_form_close = $('.email-to-download-close');
		
	email_to_download_btn.on('click', function(e){	

		if($(this).hasClass('not-active')){
			e.preventDefault();
			e.stopPropagation();
			email_wrapper.addClass('active');
			email_bg.addClass('active');
			return false;
		}
	});
	email_form_close.on('click', function(e){	
		e.preventDefault();
		e.stopPropagation();

		email_wrapper.removeClass('active');
		email_bg.removeClass('active');
		return false;
	});
	email_bg.on('click', function(e){	
		e.preventDefault();
		e.stopPropagation();

		email_wrapper.removeClass('active');
		email_bg.removeClass('active');
		return false;
	});

	$(window).load(function(){
		if(email_wrapper.hasClass('ty')) {
			email_wrapper.addClass('active');
			email_bg.addClass('active');
		}
	});
});