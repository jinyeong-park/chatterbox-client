var MessagesView = {

  $chats: $('#chats'),
//.append(MessageView.render(username, text));
  initialize: function() {
    // console.log(Messages.result[0].text);

  },

  render: function(roomName) {
    //first empty chat
    $('#chats').empty();
    for (let i = 0; i < Messages.length; i++) {
      var user = Messages[i].username;
      var msg = Messages[i].text;
      //if roomName && room !== undefined
      if (roomName)  {
        if (roomName === Messages[i].roomname) {
          MessagesView.renderMessage(msg, user);
        }
       //check if message.room matches roomname
          //if true call MessagesView
          //else do nothing
      //else no roomName argumnet
      } else {
        MessagesView.renderMessage(msg, user);
      }
        //just call MessagesView.render for all messages

      // MessagesView.renderMessage(msg, user);
      // move everything under here to renderMessage
      // var textString = (msg === undefined) ? "undefined" : JSON.stringify(msg);
      // var userText = Parse.sanitize(textString);
      // var obj = {name : user, text: userText}
      // var html = MessageView.render(obj);

      // $('#chats').append(html);
    }

  },

  renderMessage: function(message, user){
      var textString = (message === undefined) ? "undefined" : JSON.stringify(message);
      var userText = Parse.sanitize(textString);
      var obj = {name : user, text: userText}
      var html = MessageView.render(obj);

      $('#chats').append(html);
  }


};




