var MessageView = {

  render: _.template(`

  <div class="chat">
  <div class="username"><%= name %></div>
  <div><p>text is going to go here</p></div>
  </div>

    `)
};

/* <div class="chat">
<div class="username"><%= name %></div>
<div><p>text is going to go here</p></div>
</div> */

// <!--
// <div class="chat">
//   <div class="username"></div>
//   <div></div>
// </div>
// -->



// var compiled = _.template("hello: <%= name %>");
// compiled({name: 'moe'});
// => "hello: moe"