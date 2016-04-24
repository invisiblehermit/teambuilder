function previewFile() {
       var preview = document.querySelector('#profile-img'); //selects the query named img
       var file    = document.querySelector('#input-file').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }




$('#button-player-save').click(function(){
	console.log("button clicked");
	ProfileSave();
	window.location.href='player_profile.html';
});

	// the function in line 27 runs WHEN the form is submitted
function ProfileSave(){

	event.preventDefault(); 
	var user = Parse.User.current();		
	var fileUploadElement = $("#input-file")[0]; 	
	var filepath = $("#input-file").val();			
	var filename = filepath.split('\\').pop();		
	var firstName = $("#first_name").val();
	var lastName = $("#last_name").val();
	var position01 = $("#select_position_01 select").val();
	var position02 = $("#select_position_02 select").val();
	var email = $("#email").val();
	var phone = $("#phone").val();

	if (fileUploadElement.files.length > 0) {
		
		var file = fileUploadElement.files[0];
		var parseFile = new Parse.File(filename, file);

		var UserInfo = Parse.Object.extend("UserInfo");
		var query = new Parse.Query(UserInfo); 
		query.include("user");
		query.equalTo("user", Parse.User.current());
		
		query.first({
			success: function(results){
				console.log(results);
				parseFile.save().then(function() {
				console.log("ParseFile Success");
				results.set("avatar", parseFile);
				results.set("firstName", firstName);
				results.set("lastName", lastName);
				results.set("position01", position01);
				results.set("position02", position02);
				results.set("email", email);
				results.set("phone", parseInt(phone));
				results.save({
					success:function(){
						console.log("ProfileSave saved successfully");
					}, 
					error:function(error){
						console.log("Error saving ProfileSave");
					}
				});
				/*
				var ProfileSave = new UserInfo();
				ProfileSave.set("avatar", parseFile);
				ProfileSave.set("firstName", firstName);
				ProfileSave.set("lastName", lastName);
				ProfileSave.set("position01", position01);
				ProfileSave.set("position02", position02);
				ProfileSave.set("email", email);
				ProfileSave.set("phone", parseInt(phone));
				
				console.log(ProfileSave);
				ProfileSave.save({
					success:function(){
						console.log("ProfileSave saved successfully");
					}, 
					error:function(error){
						console.log("Error saving ProfileSave");
					}
				});
				*/
			}, function(error) {
				console.log("ParseFile Error:"+error.message);
				// hideLoading();
			});
		}

	});

};

}



