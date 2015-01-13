var MessageList = React.createClass({displayName: "MessageList",
  render: function() {
    var messageNodes = this.props.messages.map(function (message, index) {
      return (
        React.createElement(Message, {user: message.user, text: message.text, key: index})
      );
    });
    return (
      React.createElement("div", {className: "messageList"}, 
        messageNodes
      )
    );
  }
});