$(function() {

	$("#fname_error").hide();
	$("#email_error").hide();
	$("#phone_error").hide();
	$("#linkedin_error").hide();
	$("#uploadField_error").hide();
	$("#captcha_error").hide();
	

	var error_fname = false;
	var error_email = false;
	var error_phone = false;
	var error_linkedin = false;
	var error_uploadField = false;
	var error_captcha = false;

	$("#fname").focusout(function() {

		check_fname();
		
	});

	$("#email").focusout(function() {

		check_email();
		
	});

	$("#phone").focusout(function() {

		check_phone();
		
	});

	$("#linkedin").focusout(function() {

		check_linkedin();
		
	});
	$("#uploadField").focusout(function() {

		check_uploadField();
		
	});
	
	$("#captcha").focusout(function() {

		check_captcha();
		
	});

	function check_fname() {
	
		var fname_length = $("#fname").val().length;
		
		if(fname_length < 5 || fname_length > 20) {
			$("#fname_error").html("Should be between 5-20 characters");
			$("#fname_error").show();
			error_fname = true;
		} else {
			$("#fname_error").hide();
		}
	
	}
	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#email").val())) {
			$("#email_error").hide();
		} else {
			$("#email_error").html("Invalid email address");
			$("#email_error").show();
			error_email = true;
		}
	
	}
	function check_phone() {

		var pattern = new RegExp(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/i);
	
		if(pattern.test($("#phone").val())) {
			$("#phone_error").hide();
		} else {
			$("#phone_error").html("Invalid phone no.");
			$("#phone_error").show();
			error_email = true;
		}
	
	}
	function check_linkedin() {
	
		var linkedin_length = $("#linkedin").val().length;
		
		if(linkedin_length < 10 || linkedin_length > 50) {
			$("#linkedin_error").html("Should be between 10-50 characters");
			$("#linkedin_error").show();
			error_linkedin = true;
		} else {
			$("#linkedin_error").hide();
		}
	
	}
	function check_uploadField() {
	
		
		var upload_length = $("#uploadField").val().length;
		
		if(upload_length < 1) {
			$("#uploadField_error").html("Please insert the resume");
			$("#uploadField_error").show();
			error_uploadField = true;
		} else {
			$("#uploadField_error").hide();
		}
	
	}

	function check_captcha() {
	
		var captcha_length = $("#captcha").val();
		
		if(captcha_length != "gGphJ") {
			$("#captcha_error").html("please re-enter the captcha");
			$("#captcha_error").show();
			error_captcha = true;
		} else {
			$("#captcha_error").hide();
		}
	
	}



	$("#myForm").submit(function() {
											
		error_fname = false;
		error_email = false;
		error_phone = false;
		error_linkedin = false;
		error_uploadField = false;
		error_captcha = false;
		
											
		check_fname();
		check_email();
		check_phone();
		check_linkedin();
		check_uploadField();
		check_captcha();
		
		if(error_fname == false && error_email == false && error_phone == false && error_linkedin == false  && error_uploadField == false && error_captcha == false) {
			return true;
		} else {
			return false;	
		}

	});

});

//date piceker function

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
