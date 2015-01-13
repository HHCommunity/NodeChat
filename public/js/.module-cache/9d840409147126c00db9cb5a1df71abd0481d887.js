var ChatApp = React.createClass({displayName: "ChatApp",
  getInitialState: function() {
    socket.on('init', this.initialize);
    socket.on('send:message', this.messageRecieve);
    socket.on('user:join', this.userJoined);
    socket.on('user:left', this.userLeft);
    socket.on('change:name', this.userChangeName);

    return {users: [], messages: [], text: ''};
  },

  initialize: function(data) {
    Users = data.users;
    this.setState({users: Users, user: data.name});
  },

  messageRecieve: function(message) {
    Messages.push(message);
    this.setState({messages: Messages});
  },

  userJoined: function(data) {
    Users.push(data.name);
    Messages.push({
      user: 'HackBot',
      text: data.name + ' Joined'
    });
    this.setState({users: Users, messages: Messages});
  },

  userLeft: function(data) {
    var index = Users.indexOf(data.name);
    Users.splice(index, 1);
    Messages.push({
      user: 'HackBot',
      text: data.name + ' Left'
    });
    this.setState({users: Users, messages: Messages});
  },

  userChangeName: function(data) {
    var oldName = data.oldName;
    var newName = data.newName;

    Users.splice(Users.indexOf(oldName), 1, newName);
    Messages.push({
      user: 'HackBot',
      text: 'Changed Name: ' + oldname + ' ==> ' + newName
    });
    this.setState({users: Users, messages: Messages});
  },

  handleMessageSubmit: function(message) {
    Messages.push(message);
    this.setState({messages: Messages});
    socket.emit('send:message', message);
  },

  handleChangeName: function(newName) {
    var that = this;
    var oldName = this.state.user;

    socket.emit('change:name', {name: newName}, function(result) {
      if (!result) {
        alert('There was an error changing your name');
      } else {
        var index = Users.indexOf(oldName);
        Users.splice(index, 1, newName);
        that.setState({users: Users});
      }
    });
  },

  render: function() {
    return (
      React.createElement("div", {id: "chatApp"}, 
        React.createElement(UsersList, {users: this.state.users}), 
        React.createElement(ChangeNameForm, {onChangeName: this.handleChangeName}), 
        React.createElement(MessageList, {messages: this.state.messages}), 
        React.createElement(MessageForm, {onMessageSubmit: this.handleMessageSubmit, user: this.state.user})
      )
    );
  }
});

React.render(React.createElement(ChatApp, null), document.body);