var MessageView = {

  render: _.template(`
      <!--
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
      -->

      //new stuff
    <div class="chat">
      <div class="username"></div>
      <div><title><%= username %></title></div>
      <div><p><%= text %></div>
    </div>
    `)

};


