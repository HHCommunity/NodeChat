var Message = React.createClass({displayName: "Message",  
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.text);
    return (
      React.createElement("div", {className: "message"}, 
        React.createElement("strong", {className: "messageAuthor"}, 
          this.props.user
        ), 
        React.createElement("span", {className: "messageContent"}, this.props.text)
      )
    );
  }
});