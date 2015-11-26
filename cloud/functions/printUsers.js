var Parse = require('parse/node').Parse;

Parse.initialize("urIJ5UoMthoDlBkkvIPfan77uqxRxzKPlCEnO4E8", "7Pb0K4gf5zIoqNbzaorZfB8Voxq7WTWYwkBa36IK");

var query = new Parse.Query(Parse.User);
query.find({
  success: function(users) {
    for (var i = 0; i < users.length; ++i) {
      console.log(users[i].get('username'));
    }
  }
});