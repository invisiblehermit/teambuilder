$( document ).ready(function() {
	var t442 = $(".c01 .row11,.c02 .row12,.c04 .row12,.c05 .row11,.c01 .row05,.c02 .row07,.c04 .row07,.c05 .row05,.c02 .row02,.c04 .row02");
	var t451 = $(".c01 .row12,.c02 .row12,.c04 .row12,.c05 .row12,.c01 .row05,.c02 .row08,.c03 .row05,.c04 .row08,.c05 .row05,.c03 .row02");
	var tactics = {"t442":t442,"t451":t451,};

	$(".tactics_list").owlCarousel({
			center: true,
			items :1,
			loop:true,
		    stagePadding:80,
		    margin:20,
		    onTranslated: callBack
	});

	function callBack(e){
		$(".field_col ul li").css('opacity',0);
		var currentTactics = tactics[$('.owl-item.active.center').find(".field_col").attr("tactics-data")];
		// console.log(currentTactics);
		$('.owl-item.active.center').find(currentTactics).css('opacity',1.0);
		// $('.owl-item.active.center').addClass();
	}

	// var activated=false;


	// $( ".442" ).click(function() {
		
	// 	if(activated==false){
	// 		$('.owl-item.active.center').find(t442).css('opacity',1.0);
	// 		activated=true;
	// 	}else{
	// 		$(".field_col ul li").css('opacity',0);
	// 		activated=false;
	// 	}
			
	// });


	// $( ".451" ).click(function() {
		
	// 	if(activated==false){
			
	// 		$(t451).css('opacity',1.0);
	// 		activated=true;
	// 	}else{
	// 		$(".field_col ul li").css('opacity',0);
	// 		activated=false;
	// 	}
			
	// });


	$( ".tinfo_btn" ).click(function() {
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

});