var Message = React.createClass({displayName: "Message",  
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.text.toString());
    return (
      React.createElement("div", {className: "message"}, 
        React.createElement("strong", {className: "messageAuthor"}, 
          this.props.user
        ), 
        React.createElement("span", {
          className: "messageContent", 
          dangeourslySetInnerHTML: {__html: rawMarkup}}
        )
      )
    );
  }
});