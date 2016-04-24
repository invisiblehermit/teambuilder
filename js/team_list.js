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


$( ".btn_backtotactics" ).click(function() {
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

$( ".add_btn" ).click(function() {
	
	if( activated !=true){$( "#dropDown_bar" ).slideDown(300);
		$( ".add_btn" ).removeClass( "glyphicon-plus" );
		$( ".add_btn" ).addClass( "glyphicon-arrow-up" );
  
		activated =true;

	}else{$( "#dropDown_bar" ).slideUp(300);
		$( ".add_btn" ).removeClass( "glyphicon-arrow-up" );
		$( ".add_btn" ).addClass( "glyphicon-plus" );


		activated =false;

	};
   
   
});


$(".btn_like").click(function(){

	$(this).toggleClass( "glyphicon-star glyphicon-star-empty" );


});


$(".team_to_apply li").click(function(){

  $(this).toggleClass( "team_to_apply_actived" );


});



$(".teamConfirm_btn" ).click(function(){
        var input = document.getElementById('new_team')

        $("#team_list").prepend("<li class='list-group-item'></li>"); 

        // $("#team_list").prepend("<li class='list-group-item'><ul class='list-group-submenu'><li class='list-group-submenu-item success'><span class='glyphicon glyphicon-star-empty btn_like'></span></li>
        //             <li class='list-group-submenu-item danger'><span class='glyphicon glyphicon-ok btn_applytt'></span></li></ul></li>");        
        var div = $('.list-group-item').eq(0);
        console.log(div);
        div.innerHTML = div.innerHTML + input.value;

        $( "#droppDown_bar" ).slideUp(300);
        $( ".add_btn" ).removeClass( "glyphicon-arrow-up" );
        $( ".add_btn" ).addClass( "glyphicon-plus" );
});
























