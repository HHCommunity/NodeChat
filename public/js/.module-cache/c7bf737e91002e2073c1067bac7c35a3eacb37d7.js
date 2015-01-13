var Message = React.createClass({displayName: "Message",  
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.text);
    var d = new Date();
    d = d.toLocaleTimeString();
    return (
      React.createElement("div", {className: "message"}, 
        React.createElement("strong", {className: "messageAuthor"}, 
          this.props.user
        ), 
        React.createElement("span", {className: "messageContent", dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});