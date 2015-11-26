Parse.Cloud.define('contacts', function (request, response)
{

  console.log('Params:');
  console.log(request.params);
  console.log('Body:');
  console.log(request.body);

  // params / body
  var name = request.params.name;
  var email = request.params.email;
  var message = request.params.message;

    if (!name || !email || !message) {
        response.error('Need both name and DOB');
        return;
    }
    else
    {
      response.success("Thanks for contacting me. I will get back to you ASAP!");
    }


// works-- function error, did not call success/error?
  var Contact = Parse.Object.extend("Contact");
  var contacts = new Contact();

  contacts.set("Name", name);
  contacts.set("Email", email);
  contacts.set("Message", message);


  //console.log("Success");
  //alert("lol");

  contacts.save(null, {
  success: function(contacts) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + contacts.id);
  },
  error: function(contacts, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});

});
