var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages = Object.assign(data.results);
      // console.log(Messages);
      console.log(data);
      // MessagesView.render();
      RoomsView.initialize();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};





// fetch: function(callback = ()=>{}) {
// Parse.readAll((data) => {
// if (!data.results || !data.results.length){
// return;
// }

// Messages.update(data.results, MessagesView.render);

// Rooms.update(data.results, RoomsView.render);

// callback();
// });
// },

