 //this function will validate the data of the user....
  function validateForm() {
          
       var fname      = document.forms["myForm"]["fname"].value;
       var email     = document.forms["myForm"]["email"].value;
       var phone     = document.forms["myForm"]["phone"].value;
       var linkedin  = document.forms["myForm"]["linkedin"].value;
       var date      = document.forms["myForm"]["date"].value;
       var country   = document.forms["myForm"]["country"].value;
       var resume    = document.forms["myForm"]["resume"].value;
       var captcha   = document.forms["myForm"]["captcha"].value;

          if (fname == "" ) {
                    
           		document.getElementById("fname").style.border = '1px solid red';
           		document.getElementById("fname_error").innerHTML  = "Please enter name!!";
                return false;
              }
              else{
              	document.getElementById("fname").style.border = '1px solid green';
           		document.getElementById("fname_error").innerHTML  = "";
              }
          	if (email == "" ) {
                    
           		document.getElementById("email").style.border = '1px solid red';
           		document.getElementById("email_error").innerHTML  = "Please enter email!!";
                return false;
              }
              else{
              	document.getElementById("email").style.border = '1px solid green';
           		document.getElementById("email_error").innerHTML  = "";
              }
              if (phone == "" ) {
                    
           		document.getElementById("phone").style.border = '1px solid red';
           		document.getElementById("phone_error").innerHTML  = "Please enter Phone!!";
                return false;
              }
              else{
              	document.getElementById("phone").style.border = '1px solid green';
           		document.getElementById("phone_error").innerHTML  = "";
              }
               if (linkedin == "" ) {
                    
           		document.getElementById("linkedin").style.border = '1px solid red';
           		document.getElementById("linkedin_error").innerHTML  = "Please enter linkedin!!";
                return false;
              }
              else{
              	document.getElementById("linkedin").style.border = '1px solid green';
           		document.getElementById("linkedin_error").innerHTML  = "";
              }

          if (country == "Select Country" ) {
                    
           		document.getElementById("country").style.border = '1px solid red';
           		document.getElementById("country_error").innerHTML  = "please select country!!";
                return false;
              }
              else{
              	document.getElementById("country").style.border = '1px solid green';
           		document.getElementById("country_error").innerHTML  = "";
              }
          	if (captcha == "" || captcha!="gGphJ") {
                    
           		document.getElementById("captcha").style.border = '1px solid red';
           		document.getElementById("captcha_error").innerHTML  = "Please enter right captcha!!";
                return false;
              }
              else{
              	document.getElementById("captcha").style.border = '1px solid green';
           		document.getElementById("captcha_error").innerHTML  = "";
              }
     		
        }

   	  

