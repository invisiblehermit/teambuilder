$(function(){

  $( ".tactics_btn" ).click(function(){
    event.preventDefault();
    upcomingAddTransition();
    $('#upcoming_games').hide();
    $('#player_list').addClass("form_fadeOut").hide();
    $('#team_profile').addClass("form_fadeOut").hide();
    $('#tactics_list').removeClass("form_fadeOut").show();
    $('.apply_tactics').removeClass("form_fadeOut").show();
  });


  $( ".player_btn" ).click(function(){
    event.preventDefault();
    upcomingAddTransition();
    $('#upcoming_games').hide();
    $('#tactics_list').addClass("form_fadeOut").hide();
    $('#team_profile').addClass("form_fadeOut").hide();
    $('.apply_tactics').addClass("form_fadeOut").hide();
    $('#player_list').removeClass("form_fadeOut").show();
    
  });

  $( ".team_btn" ).click(function(){
    event.preventDefault();
    upcomingAddTransition();
    $('#upcoming_games').hide();
    $('#tactics_list').addClass("form_fadeOut").hide();
    $('#player_list').addClass("form_fadeOut").hide();
    $('.apply_tactics').addClass("form_fadeOut").hide();
    $('#team_profile').removeClass("form_fadeOut").show();
    
  });

  function upcomingAddTransition(){
     $('#team_profile').css('animation','animationFromRight .6s cubic-bezier(0.7,0,0.3,1) both');
  }


    $( ".back_to_team_info" ).click(function(){
    event.preventDefault();
    $('#team_profile').css('animation','animationFromTop .6s cubic-bezier(0.7,0,0.3,1) both');
    $('#upcoming_games').hide();
    $('#team_profile').show();
    
  });


    $( ".upcoming_games_btn" ).click(function(){
    event.preventDefault();
    $('#team_profile').hide();
    $('#upcoming_games').show();
  });



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
        $( "#ttt_selection" ).hide();
    });
  });




    $( ".btn_invite" ).click(function() {
        console.log($(".invite_email").children().length);

        if($(".invite_email").children().length < 3){
          $(".invite_email").append("<input type='email' class='button-input' id='email' placeholder='email' data-empty=''>").children().not(':first').css("marginTop","20px");
          $("#ttt_selection").height($("#ttt_selection").height()+40);
        }else{
          $(".btn_invite" ).hide();
          $(".invite_email").append("<p>Invite Them Later</p>");
          // return false;
        }      
    });



//  function getTeamInfo(){


//     $.getJSON('./js/json/teamData.json',function(jd){

//       $('#team_name').html( jd.team_name );
//       $('#member_num').html( jd.member_num );
//       $('#cpt_name').html( jd.cpt_name );
//       $('#allence_name').html( jd.allence_name );

//     })

//  };

// getTeamInfo();


})





















