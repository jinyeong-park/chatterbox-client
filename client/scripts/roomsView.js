var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // RoomsView.$select.empty();
    RoomsView.checkRooms();
    RoomsView.render();
  },

  //does something for submit event -> we should send message to server -> Parse.create(message);
  handleSelect: function(event) {
    // event.preventDefault();
    var selectVal = document.getElementById("mySelect").value;

    console.log('Hey I changed select! And the value is ' + selectVal);
    MessagesView.render(selectVal);
  },

  render: function() {
    //choice 1
      //make this function render a new #chats list of message
    //choice 2
      //run MessagesView( argument) with argument as room
    for (let key in Rooms) {
      RoomsView.renderRoom(key)
    }
  },

  renderRoom: function(roomname) {

    var addSelection = `<option value=${roomname}>${roomname}</option>`;
    RoomsView.$select.append(addSelection);

  },



  checkRooms: function() {
    //loop through messages
    for (let i = 0 ; i < Messages.length; i++) {
      //check if room {} has roomname
      var nameOfRoom = Messages[i].roomname
      if (!Rooms[nameOfRoom]) {
        Rooms[nameOfRoom] = nameOfRoom; //we can check this data structure later
      };
    };
    //loop through rooms
    // for (key in Rooms) {
    //   //make html template for a new option
    //   var testHtml = `<option value=${Rooms[key]}>${Rooms[key]}</option>`
    //   //append/add new option to html file
    //   RoomsView.$select.append(testHtml);
    // }
  }

};

