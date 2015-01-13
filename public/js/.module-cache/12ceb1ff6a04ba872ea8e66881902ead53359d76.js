var MessageList = React.createClass({displayName: "MessageList",
  render: function() {
    var renderMessage = function(message, index) {
      return React.createElement(Message, {user: message.user, text: message.text, key: index})
    };
    return (
      React.createElement("div", {className: "messages"}, 
        React.createElement("h2", null, "Conversation"), 
        this.props.messages.map(renderMessage)
      )
    );
  }
});