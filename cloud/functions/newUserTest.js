var Parse = require('parse/node').Parse;
var rl = require('readline').createInterface({
  input: require('fs').createReadStream("names.txt")
});
Parse.initialize("urIJ5UoMthoDlBkkvIPfan77uqxRxzKPlCEnO4E8", "7Pb0K4gf5zIoqNbzaorZfB8Voxq7WTWYwkBa36IK");

/*var user = new Parse.User();
user.set("username", "leon");
user.set("password", "my pass");
user.set("email", "email@gmail.com");

// other fields can be set just like with Parse.Object
user.set("phone", "415-392-0202");

user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});*/

//var GameScore = Parse.Object.extend("GameScore");

// Create a new instance of that class.
//var gameScore = new GameScore();

// Alternatively, you can use the typical Backbone syntax.
/*var Achievement = Parse.Object.extend({
  className: "Achievement"
});*/

rl.on('line', function (line) {

var DOB = "March 10th 1990";
var Name, objName = line;

Parse.Cloud.run('createNewSubscribers', function (Name, DOB) {

	var Subscribers = Parse.Object.extend("Subscribers");
	var subs_ = new Subscribers();

	subs_.set("Name", "Mohammad");
	subs_.set("DOB", "October 28th 1990");
	//console.log("Success");
	//alert("lol");

	subs_.save(null, {
  success: function(subs_) {
    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + subs_.id);
  },
  error: function(subs_, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});
});});


///function createNewSubscribers ()


//function lol () {
	//alert("This works");



/*var query = new Parse.Query(Parse.User);
query.find({
  success: function(users) {
    for (var i = 0; i < users.length; ++i) {
      console.log(users[i].get('username'));
    }
  }
});*/