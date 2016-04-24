$(function(){

	function showDates() {
		var myhtml = '';
		for (var daycounter = 0; daycounter < 30; daycounter++ ) {
			var mydate = Date.today().add(daycounter).days();
			myhtml += '<div class="item"><span>' + mydate.toString('MMM') + '</span>' + mydate.toString('dd') + '</div>';
		}
		document.getElementById('date_picker').innerHTML = myhtml;
	}

	showDates();

	$("#date_picker").owlCarousel({
		items : 5,
		itemsMobile : [479,5],
		navigation : false,
		pagination : false,
		addClassActive : true,
		afterMove: callBack
	});

	$('.owl-carousel .owl-item.active:first').addClass('date_active');


	function callBack(e){
		console.log( $('.owl-carousel .owl-item.active .date_active').length );
		if($('.owl-carousel .owl-item.active .date_active').length > 0){
			return false;
			console.log("did this run?")
			
		}else{
			$('.owl-carousel .owl-item').removeClass("date_active");
			$('.owl-carousel .owl-item.active').first().addClass("date_active");
		}
		
		
	}

		


	$( "#join_btn" ).click(function() {
	  // location.href = 'tactics_to_team.html';
	    $( "#mid_cover" ).show();
	    $( "#ttt_selection" ).show();
	    $( "#ttt_selection" ).animate({
	        opacity: "1",
	        marginTop: "10%",
	      }, 250, function() {
	    });
  	});

  	$( ".btn_cancel" ).click(function() {
	    $( "#mid_cover" ).hide();
	    $( "#ttt_selection" ).hide();
	    $( "#ttt_selection" ).animate({
	        opacity: 0,
	        marginTop: "-10%",
	      }, 250, function() {
	    });
	  });

	$( ".findGames_btn" ).click(function(){
		event.preventDefault();
		$('#quick_match').addClass("form_fadeOut").hide();
		$('#myEvent_list').addClass("form_fadeOut").hide();
		$('#qm_results').addClass("form_fadeOut").hide();
		$('#game_list').removeClass("form_fadeOut").show();
	});


	$( ".quickMatch_btn" ).click(function(){
		event.preventDefault();
		$('#game_list').addClass("form_fadeOut").hide();
		$('#myEvent_list').addClass("form_fadeOut").hide();
		$('#qm_results').addClass("form_fadeOut").hide();
		$('#quick_match').removeClass("form_fadeOut").show();
		
	});


	$( ".myGames_btn" ).click(function(){
		event.preventDefault();
		$('#game_list').addClass("form_fadeOut").hide();
		$('#quick_match').addClass("form_fadeOut").hide();
		$('#qm_results').addClass("form_fadeOut").hide();
		$('#myEvent_list').removeClass("form_fadeOut").show();
		
	});

	$( ".start_match" ).click(function(){
		event.preventDefault();
		$('#game_list').addClass("form_fadeOut").hide();
		$('#quick_match').addClass("form_fadeOut").hide();
		$('#myEvent_list').addClass("form_fadeOut").hide();
		$('#qm_results').removeClass("form_fadeOut").show();
		
	});


	$( "#date_picker .item" ).click(function(){
		event.preventDefault();
		$("#date_picker .item").removeClass("date_active");
		$('.owl-carousel .owl-item').removeClass("date_active");
		$(this).addClass("date_active");
		
	});


	$( ".qm_time_selection .button-style-s" ).click(function(){
		event.preventDefault();
		$(".qm_time_selection .button-style-s").removeClass("button-style-2");
		$(this).addClass("button-style-2");
		
	});


	$( ".position_selection .player_position" ).click(function(){
		event.preventDefault();
		$(".position_selection .player_position").removeClass("position-style-1");
		$(this).addClass("position-style-1");
		
	});



	


// function getEvents() {
// 	var Events = Parse.Object.extend("Events");
// 	var query = new Parse.Query(Events);
	
// 	query.include("teamA");
// 	query.include("teamB");
// 	query.include("gameType");

// 	console.log(query);
	
// 	query.find({
// 		success: function(results){
// 			var displayTeamAAvatar = "";
// 			var displayTeamBAvatar = "";
// 			var displayTeamA = "";
// 			var displayTeamB = "";
// 			var displayTeamARate = "";
// 			var displayTeamBRate = "";	
// 			var displayGameType = "";
// 			var displayTeamASum = "";
// 			var displayTeamBSum = "";
// 			var displayDate = "";

// 			for (var i in results) {
// 				var event  = results[i];

// 				var id = event.id;
				
// 				var teamA = event.get("teamA");
// 				var teamAName = teamA.get("name");
// 				var teamARate = teamA.get("rate");
// 				var teamAAvatar = teamA.get("avatar");

// 				var teamB = event.get("teamB");
// 				var teamBName = teamB.get("name");
// 				var teamBRate = teamB.get("rate");
// 				var teamBAvatar = teamB.get("avatar");

// 				var gameType = event.get("gameType"); 
// 				var gameTypeNum = gameType.get("playerNumber");	
// 				var backupPlayer = gameType.get("backupPlayer");			
// 				var teamASum = event.get("teamASum");
// 				var teamBSum = event.get("teamBSum");
				
// 				var teamAFileURL = "default.png";
// 				var teamBFileURL = "default.png";

// 				if (teamAAvatar) {
// 					teamAFileURL = teamAAvatar.url();
// 				}
// 				if (teamBAvatar) {
// 					teamBFileURL = teamBAvatar.url();
// 				}

// 				displayTeamAAvatar = "<img src='"+teamAFileURL+"'>";
// 				displayTeamBAvatar = "<img src='"+teamBFileURL+"'>";
// 				displayTeamA = teamAName;
// 				displayTeamB = teamBName;
// 				displayTeamARate = teamARate;
// 				displayTeamBRate = teamBRate;
// 				displayTeamASum = gameTypeNum-teamASum+backupPlayer;
// 				displayTeamBSum = gameTypeNum-teamBSum+backupPlayer;
// 				displayGameType = gameTypeNum;
// 			}

		
			
// 			$(".team_game_info_a .team_name").html(displayTeamA);
// 			$(".team_game_info_b .team_name").html(displayTeamB);
// 			$(".team_avatar_a").html(displayTeamAAvatar);
// 			$(".team_avatar_b").html(displayTeamBAvatar);
// 			$(".game_type").html(displayGameType);
// 			$(".team_game_info_a .player_require").html(displayTeamASum);
// 			$(".team_game_info_b .player_require").html(displayTeamBSum);
		
// 			 // print html
// 		}, error:function(error){
// 			console.log("Get Events Error: "+error.message);
// 		}
// 	});
// }


// getEvents();



$("#game_list").owlCarousel({
		items : 1,
		itemsMobile : [479,1],
		navigation : false,
		pagination : true
});








// ===========================================================================
// var source   = $("#entry-template").html();
// var eventTemplate = Handlebars.compile(source);

// function displayEvents(events) {
// 	var str = "";
// 	for (var i in events) {
// 		var obj = {}
// 		obj.id = events[id].id;
// 		obj.gameType = events[id].get("gameType");
// 		obj.gameTypeNum = events[id].get("gameType").get("playerNumber");
// 		obj.backupPlayer = events[id].get("gameType").get("backupPlayer");
// 		obj.teamA = events[id].get("teamA");
// 		obj.teamAName = events[id].get("teamA").get("name");
// 		obj.teamAAvatar = events[id].get("teamA").get("avatar");
// 		obj.teamB = events[id].get("teamB");
// 		obj.teamBName = events[id].get("teamB").get("name");
// 		obj.teamBAvatar = events[id].get("teamB").get("avatar");
// 		obj.gameTime = events[id].get("gameTime");
// 		obj.gameTimeEnd = events[id].get("gameTimeEnd");
// 		obj.teamASum = events[id].get("teamASum");
// 		obj.teamBSum = events[id].get("teamBSum");

// 		str += eventTemplate(obj);
// 	}

// 	$("#game_list").html( str );
// }

// function loadEvents() {
// 	// Events
// 	// query for event
// 	// query.include("teamA")
// 	var Events = Parse.Object.extend("Events");
// 	var query = new Parse.Query(Events);
	
// 	query.include("teamA");
// 	query.include("teamB");
// 	query.include("gameType");

// 	console.log(query);
	
// 	query.find({
// 		success: function(results){
// 			var displayTeamAAvatar = "";
// 			var displayTeamBAvatar = "";
// 			var displayTeamA = "";
// 			var displayTeamB = "";
// 			var displayTeamARate = "";
// 			var displayTeamBRate = "";	
// 			var displayGameType = "";
// 			var displayTeamASum = "";
// 			var displayTeamBSum = "";
// 			var displayDate = "";

// 			for (var i in results) {
// 				var event  = results[i];

// 				var id = event.id;
				
// 				var teamA = event.get("teamA");
// 				var teamAName = teamA.get("name");
// 				var teamARate = teamA.get("rate");
// 				var teamAAvatar = teamA.get("avatar");

// 				var teamB = event.get("teamB");
// 				var teamBName = teamB.get("name");
// 				var teamBRate = teamB.get("rate");
// 				var teamBAvatar = teamB.get("avatar");

// 				var gameType = event.get("gameType"); 
// 				var gameTypeNum = gameType.get("playerNumber");	
// 				var backupPlayer = gameType.get("backupPlayer");			
// 				var teamASum = event.get("teamASum");
// 				var teamBSum = event.get("teamBSum");
				
// 				var teamAFileURL = "default.png";
// 				var teamBFileURL = "default.png";

// 				if (teamAAvatar) {
// 					teamAFileURL = teamAAvatar.url();
// 				}
// 				if (teamBAvatar) {
// 					teamBFileURL = teamBAvatar.url();
// 				}

// 				displayTeamAAvatar = "<img src='"+teamAFileURL+"'>";
// 				displayTeamBAvatar = "<img src='"+teamBFileURL+"'>";
// 				displayTeamA = teamAName;
// 				displayTeamB = teamBName;
// 				displayTeamARate = teamARate;
// 				displayTeamBRate = teamBRate;
// 				displayTeamASum = gameTypeNum-teamASum+backupPlayer;
// 				displayTeamBSum = gameTypeNum-teamBSum+backupPlayer;
// 				displayGameType = gameTypeNum;
// 			}
// 	query.find({
// 		success: function(results){
// 			console.log(results);
// 			displayEvents(results);
// 		}, error: function(error){
// 			console.log("load events error:"+error.message);
// 		}
// 	}); 
// }

// loadEvents();







});










