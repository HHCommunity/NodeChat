var Message = React.createClass({  
  render: function() {
    var rawMarkup = converter.makeHtml(this.props.text);
    var d = new Date();
    d = d.toLocaleTimeString();
    return (
      <div className="message">
        <strong className="messageAuthor">
          {this.props.user}
        </strong>
        <span className="messageTime">
          {d}
        </span>
        <span className="messageContent" dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});