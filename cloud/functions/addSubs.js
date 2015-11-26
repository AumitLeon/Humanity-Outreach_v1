
/*Will funnel through names in names.txt and create objects in subs.txt.

var Parse = require('parse/node').Parse;
var rl = require('readline').createInterface({
  input: require('fs').createReadStream("names.txt")
});
Parse.initialize("urIJ5UoMthoDlBkkvIPfan77uqxRxzKPlCEnO4E8", "7Pb0K4gf5zIoqNbzaorZfB8Voxq7WTWYwkBa36IK");

rl.on('line', function (line) {

var DOB = "March 10th 1990";
var Name = line;

	var Subscribers = Parse.Object.extend("Subscribers");
	var subscribers = new Subscribers();

	subscribers.set("Name", line);
	subscribers.set("DOB", "October 28th 1990");
	//console.log("Success");
	//alert("lol");

	subscribers.save(null, {
  success: function(subscribers) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + subscribers.id);
  },
  error: function(subscribers, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
})});*/

/*var Parse = require('parse').Parse;
Parse.initialize("urIJ5UoMthoDlBkkvIPfan77uqxRxzKPlCEnO4E8", "7Pb0K4gf5zIoqNbzaorZfB8Voxq7WTWYwkBa36IK");

//var DOB = "March 10th 1990";
//var Name = line;
function test_ (a, b) {
  alert(a + ' ' + b);
  /*var Subscribers = Parse.Object.extend("Subscribers");
  var subscribers = new Subscribers();
  alert(a + ' ' + b);
  subscribers.set("Name", a);
  subscribers.set("DOB", b);
  //console.log("Success");
  //alert("lol");

  subscribers.save(null, {
  success: function(subscribers) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + subscribers.id);
  },
  error: function(subscribers, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
};
alert("Success!");
};*/


//Will funnel through names in names.txt and create objects in subs.txt.




/*var Parse = require('parse/node').Parse;
/*var rl = require('readline').createInterface({
  input: require('fs').createReadStream("names.txt")
});*/
//Parse.initialize("urIJ5UoMthoDlBkkvIPfan77uqxRxzKPlCEnO4E8", "7Pb0K4gf5zIoqNbzaorZfB8Voxq7WTWYwkBa36IK");

// POST

Parse.Cloud.define('addSubs', function (request, response)
{

  console.log('Params:');
  console.log(request.params);
  console.log('Body:');
  console.log(request.body);

  // params / body
  var name = request.params.name;
  var dob = request.params.dob;

    if (!name || !dob) {
        response.error('Need both name and DOB');
        return;
    }
    else
    {
      response.success("Thanks!");
    }


// works-- function error, did not call success/error?
  var Subscribers = Parse.Object.extend("Subscribers");
  var subscribers = new Subscribers();

  subscribers.set("Name", name);
  subscribers.set("DOB", dob);


  //console.log("Success");
  //alert("lol");

  subscribers.save(null, {
  success: function(subscribers) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + subscribers.id);
  },
  error: function(subscribers, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});

});
