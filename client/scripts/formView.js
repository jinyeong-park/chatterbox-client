var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  //does something for submit event -> we should send message to server -> Parse.create(message);
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
    username: App.username,
    text: $("#message").val(), //whatever we type in the text box
    roomname: document.getElementById("mySelect").value
    };

    //atempt to send a message to server
    Parse.create(message); //send "message" to server
    // var test1 = $("#message").val();
    // var test2 = document.getElementById("message").value;

    console.log('click!');
    App.fetch()
  },


  //temp ignored
  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
