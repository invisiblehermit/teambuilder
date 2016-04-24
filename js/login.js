$(function(){
	
Parse.initialize("KI6TXcPlWwBFfNMuxnxiqkOVFgzsd2MtZVRQmTFu", "0luYqtrOZizEzmEDKVWAtrmiH1oZwvefwWHbyBFJ");

	$( ".new_user_btn" ).click(function(){
		event.preventDefault();
		$('.form-signin').addClass("form_fadeOut").hide();
		$('.form-register').removeClass("form_fadeOut").show();
	});


	$( ".register_back_btn" ).click(function(){
		event.preventDefault();
		$('.form-register').addClass("form_fadeOut").hide();
		$('.form-signin').removeClass("form_fadeOut").show();
		
	});

	$( "#sub_nav ul li" ).click(function(){
		event.preventDefault();
		$("#sub_nav ul li").removeClass("active");
		$(this).addClass("active");
		
	});



	Parse.$ = jQuery;

	

	// var TestObject = Parse.Object.extend("TestObject");

	// var testObject = new TestObject();

	// testObject.save({foo:"bar"}).then(function(object){
	// 	// alert("yay!");
	// });

	$('.form-signin').on('submit', function(e) {

		e.preventDefault();
		// Get data from the form and put them into variables
	    var data = $(this).serializeArray(),
	    username = data[0].value,
	    password = data[1].value;

		    Parse.User.logIn(username, password, {
	            // If the username and password matches
	            success: function(user) {
	                window.location.href = "events.html";
	            },
	            // If there is an error
	            error: function(user, error) {
	                console.log(error);
	            }
	        });


	}); 


	$('.form-register').on('submit', function(e) {

		e.preventDefault();
		// Get data from the form and put them into variables
	    var data = $(this).serializeArray(),
	    username = data[0].value,
	    password = data[1].value;
	    repassword = data[2].value;

		

			if(password==repassword){

				var user = new Parse.User();
				user.set("username", username);
				user.set("password", password);
				
				user.signUp(null, {
					success: function(){
						console.log("New user sign up successful");
						checkUserStatus();
					}, 
					error: function(user, error){
						console.log("Sign up error:"+error.message);
						checkUserStatus();
					} 
				});

			}else{
				alert("Your password is not match!");
			}
				    

	});


	//check user status
	function checkUserStatus(){
		if(Parse.User.current()){
			//user is logged in
			var username= Parse.User.current().get("username");
			$("#current_user").html(username);
		}else{
			//not logged in
			$("#current_user").html("Not logged in");
		}
	}

	checkUserStatus();


	$("input").focus(function() {
		$(this).data('placeholder', $(this).attr("placeholder"));
		$(this).parent().addClass("curFocus");
		$(this).attr("placeholder",$(this).attr("data-empty"));
	}).blur(function() {
		$(this).attr("placeholder",$(this).data("placeholder"));
		$(this).parent().removeClass("curFocus")
	});

});