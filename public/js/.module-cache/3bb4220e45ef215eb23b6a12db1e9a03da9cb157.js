var Message = React.createClass({displayName: "Message",  
  render: function() {
  	var rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      React.createElement("div", {className: "message"}, 
        React.createElement("strong", null, this.props.user), 
        React.createElement("span", {className: "messageContent"}, this.props.text)
      )
    );
  }
});