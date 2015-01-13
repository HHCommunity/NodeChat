/**
 * @jsx React.DOM
 */
var MessageList = React.createClass({displayName: "MessageList",
  render: function() {
    var renderMessage = function(message) {
      return React.createElement(Message, {user: message.user, text: message.text})
    };
    return (
      React.createElement("div", {className: "messages"}, 
        React.createElement("h2", null, "Conversation"), 
        this.props.messages.map(renderMessage)
      )
    );
  }
});