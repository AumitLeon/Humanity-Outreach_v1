Parse.Cloud.define('addLikes', function (request, response)
{

  console.log('Params:');
  console.log(request.params);
  console.log('Body:');
  console.log(request.body);

  // params / body
  var joke = request.params.joke;


    if (!joke) {
        response.error('Error!');
        return;
    }
    else
    {
      response.success("Thanks!");
    }


// works-- function error, did not call success/error?
  var Posts = Parse.Object.extend("Posts");
  var subscribers = new Subscribers();

  var query = new Parse.Query(Posts);
  query.equalTo("Message", joke);
  query.first({
  success: function(object) {
    // Successfully retrieved the object.
    object.increment("Likes");
    object.save();
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});

  //console.log("Success");
  //alert("lol");

});