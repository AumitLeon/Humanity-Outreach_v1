var Parse = require('parse/node').Parse;
Parse.initialize("urIJ5UoMthoDlBkkvIPfan77uqxRxzKPlCEnO4E8", "7Pb0K4gf5zIoqNbzaorZfB8Voxq7WTWYwkBa36IK");

var Posts = Parse.Object.extend("Posts");
var query = new Parse.Query(Posts);

query.equalTo({
	success: function(results) {
           
    for (var i in results) {
    	var temp = results[i];
       temp.set("Likes", 0);
        temp.save(null, {
  success: function(temp) {
    // Execute any logic that should take place after the object is saved.
   // console.log('New object created with objectId: ' + subscribers.id);
  },
  error: function(temp, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    //console.log('Failed to create new object, with error code: ' + error.message);
  }
});
     }     
  },
   error: function(error){
   		console.log("Query Error:"+error.message);
  }
});

