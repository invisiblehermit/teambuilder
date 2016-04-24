$( ".btn_applytt" ).click(function() {
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


var activated = false;

$( ".search_btn" ).click(function() {
	
	if( activated !=true){$( "#dropDown_bar" ).slideDown(300);
		$( ".search_btn" ).removeClass( "glyphicon-search" );
		$( ".search_btn" ).addClass( "glyphicon-arrow-up" );
  
		activated =true;

	}else{$( "#dropDown_bar" ).slideUp(300);
		$( ".search_btn" ).removeClass( "glyphicon-arrow-up" );
		$( ".search_btn" ).addClass( "glyphicon-search" );


		activated =false;

	};
   
   
});


$(".btn_like").click(function(){

	$(this).toggleClass( "glyphicon-star glyphicon-star-empty" );


});


$(".team_to_apply li").click(function(){

  $(this).toggleClass( "team_to_apply_actived" );


});
























