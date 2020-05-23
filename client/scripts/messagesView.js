var MessagesView = {

  $chats: $('#chats'),
//.append(MessageView.render(username, text));
  initialize: function() {
    // console.log(Messages.result[0].text);

  },

  render: function() {
    console.log(Messages);
    console.log(Messages[0].username);
    // var user = Messages[0].username;
    // var input = MessageView.render({name: user});
    // var user = Messages[0].username;
    // var obj = {name : user} // <-----
    // var html = MessageView.render(obj); // <--- this makes html
    // $('#chats').append(html);


    for (let i = 0; i < Messages.length; i++) {
      var user = Messages[i].username;
      var obj = {name : user}
      var html = MessageView.render(obj);
      // console.log(html);
       $('#chats').append(html);
      //console.log(Messages[i].username);
    }



    // for (var i = 0; i < Messages.length; i++) {
    //   // console.log(Messages[i].username); //this works
    //   var user = Messages[i].username;
    //   var input = MessageView.render({name: user});
    //   $('#chats').append(input);
    // }

    // $('#chats').append(input);
    // $('#chats').append("<p>" + Messages[0].username + "</p>");
    // $('#chats').append("<p>" + Messages[0].text + "</p>");
    // var testUser = Messages.results[0].username;
    // var testText = Messages.results[0].text;
    // console.log(testUser + " " + testText);
    // var input = {username: "testtesttest"};
    // var newMessage = MessageView.render(input);
    // $('#chats').append(newMessage);


  }
  // render: function(messages) {
  //   // console.log(messages);

  // }


};




