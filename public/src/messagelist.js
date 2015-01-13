var MessageList = React.createClass({
  render: function() {
    var messageNodes = this.props.messages.map(function (message, index) {
      return (
        <Message user={message.user} text={message.text} key={index} />
      );
    });
    return (
      <div className="messageList">
        {messageNodes}
      </div>
    );
  }
});