Parse.Cloud.define('addPosts', function (request, response)
{

  console.log('Params:');
  console.log(request.params);
  console.log('Body:');
  console.log(request.body);

  // params / body
  var name = request.params.name;
  var message = request.params.message;

    if (!name || !message) {
        response.error('Need both name and DOB');
        return;
    }
    else
    {
      response.success("Thanks for the message!");
    }


// works-- function error, did not call success/error?
  var Posts = Parse.Object.extend("Posts");
  var post = new Posts();

  post.set("Pseudonym", name);
  post.set("Message", message);
  post.set("Likes", 0);


  //console.log("Success");
  //alert("lol");

  post.save(null, {
  success: function(contacts) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + post.id);
  },
  error: function(contacts, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});

});