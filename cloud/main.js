require('cloud/functions/addSubs.js');
require('cloud/functions/contacts.js');
require('cloud/functions/addPosts.js');
require('cloud/functions/addLikes.js');

// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
/*Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});*/

/*Parse.Cloud.run('addSubs', {}, {
	success: function(result) {
	},		
	error: function(error){
	}
});
*/


/*var dynamicFunctions = Parse.Object.extend("Dynamic");

Parse.Cloud.define("", function(request, response) {
	response.success("This is a test.");
});*/

/*
//var test = require ('cloud/newUserTest.js');
//var Parse = require('parse').Parse;

//Parse.initialize("urIJ5UoMthoDlBkkvIPfan77uqxRxzKPlCEnO4E8", "7Pb0K4gf5zIoqNbzaorZfB8Voxq7WTWYwkBa36IK");
//require ('/CloudTest/cloud/newUserTest.js');
/*var Parse = require ('/cloud/newUserTest');


function test (a, b) {
	alert(a + b);
	Parse.Cloud.run("createNewSubscribers", Firstname, b);
	//alert(a + b);
}
	*/