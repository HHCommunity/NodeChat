/**
 * @jsx React.DOM
 */
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
      user: this.props.user,
      text: this.state.text
    };
    this.props.onMessageSubmit(message);
    this.setState({text: ''});
  },

  render: function() {
    return (
      React.createElement("div", {className: "message_form"}, 
        React.createElement("form", {onSubmit: this.handleSubmit}, 
          React.createElement("input", {
            onChange: this.changeHandler, 
            value: this.state.text, 
            id: "messageInput", 
            placeholder: "Your thoughts go here"}
          )
        )
      )
    );
  }
});