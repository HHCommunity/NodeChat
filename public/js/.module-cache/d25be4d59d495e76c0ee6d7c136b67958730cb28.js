/**
 * @jsx React.DOM
 */
var UsersList = React.createClass({displayName: "UsersList",
  render: function() {
    var renderUser = function(user) {
      return React.createElement("li", {key: user}, user)
    };
    return (
      React.createElement("div", {className: "users"}, 
        React.createElement("h3", null, "Online Users"), 
        React.createElement("ul", null, 
          this.props.users.map(renderUser)
        )
      )
    );
  }
});