$( ".dropDown_btn" ).click(function() {
	  // location.href = 'tactics_to_team.html';
	  $( "#mid_cover" ).show();
	  $( "#ttt_selection" ).show();
	  $( "#ttt_selection" ).animate({
	    opacity: "1",
	    marginTop: "10%",
	  }, 250, function() {
	    // Animation complete.
	  });

	});


	$( ".btn_cancel" ).click(function() {
	  // location.href = 'tactics_to_team.html';
	  $( "#mid_cover" ).hide();
	  // $( "#ttt_selection" ).hide();
	  $( "#ttt_selection" ).animate({
	    opacity: 0,
	    marginTop: "-10%",
	  }, 250, function() {
	    // Animation complete.
	  });


	});


//parse get player info goes below



Parse.initialize("KI6TXcPlWwBFfNMuxnxiqkOVFgzsd2MtZVRQmTFu", "0luYqtrOZizEzmEDKVWAtrmiH1oZwvefwWHbyBFJ");



function getPlayer() {
	var UserInfo = Parse.Object.extend("UserInfo");
	var query = new Parse.Query(UserInfo);
	query.include("user");
	query.include("team");
	query.equalTo("user", Parse.User.current());
	query.find({
		success: function(results){
			var displayAvatar = "";
			var displayPlayerNum = "";
			var displayFirstName = "";
			var displayLastName = "";
			var displayPosition01 = "";
			var displayPosition02 = "";
			var displayTeam = "";
			var displayEmail = "";
			var displayPhone = "";

			for (var i in results) {
				var profile  = results[i];

				var id = profile.id;
				var firstName = profile.get("firstName");
				var lastName = profile.get("lastName");
				var user = profile.get("user");
				var username = user.get("username");
				var playerNum = profile.get("playerNum");
				var avatar = profile.get("avatar");
				var team = profile.get("team");
				var teamName = team.get("name");
				var position01 = profile.get("position01");
				var position02 = profile.get("position02");
				var email = profile.get("email");
				var phone = profile.get("phone");
				
				var fileURL = "default.png";

				if (avatar) {
					fileURL = avatar.url();
				}

				displayAvatar = "<img src='"+fileURL+"'>";
				displayPlayerNum = playerNum;
				displayFirstName = firstName;
				displayLastName = lastName;
				displayPosition01 = position01;
				displayPosition02 = position02;
				displayTeam = teamName;
				displayEmail= email;
				displayPhone = phone;
			}

			// output += "<li><img src='"+fileURL+"'>"+ "<span>" + description +"</span>" + "</li>";
			// console.log(image.url())
			// output += "<small>"+username+"</small>";
			// output += "<p><img src='"+fileURL+"'></p>";
			
			$(".player_picture").html(displayAvatar);
			$(".player_number").html(displayPlayerNum);
			$(".first_name").html(displayFirstName);
			$(".last_name").html(displayLastName);
			$(".position01").html(displayPosition01);
			$(".position02").html(displayPosition02);
			$(".team_name").html(displayTeam);
			$(".email span").html(displayEmail);
			$(".phone span").html(displayPhone);




			 // print html
		}, 
		error:function(){
			
		}
	});
}



getPlayer();