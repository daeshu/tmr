$(document).ready(function() {
// Send to Formspree
$('.contact-form').on('submit', function(e) {
		e.preventDefault();

		//get the name field value
		var name = $('#name').val();
		//get the name field value
		var email = $('#email').val();
		//get the comments
		var comments = $('#comments').val();

		$.ajax({
				url:'https://formspree.io/lathebra@gmail.com',
				method:'POST',
				data:{
						name:name,
						_replyto:email,
						comments:comments,
						_subject:'Contact Form',
				},
				dataType:"json",
				success:function() {
						console.log('success');
						$('.formBlock').hide();
						$('.thankyouBlock').show();
				}

		});

});

});
