var MessageForm = React.createClass({displayName: "MessageForm",
  getInitialState: function() {
    return {text: ''};
  },

  changeHandler: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var message = {
      user: this.props.user.trim(),
      text: this.state.text.trim()
    };
    if (!message.user || !message.text) {
      return;
    }
    this.props.onMessageSubmit(message);
    this.setState({text: ''});
    return;
  },

  render: function() {
    return (
      React.createElement("form", {className: "messageForm", onSubmit: this.handleSubmit}, 
        React.createElement("input", {
          onChange: this.changeHandler, 
          value: this.state.text, 
          autofocus: "true", 
          placeholder: "Your thoughts go here"}
        )
      )
    );
  }
});