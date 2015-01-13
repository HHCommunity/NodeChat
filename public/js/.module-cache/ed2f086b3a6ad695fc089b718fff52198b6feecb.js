var UsersList = React.createClass({displayName: "UsersList",
  render: function() {
    var renderUser = function(user, index) {
      return React.createElement("li", {key: index}, user)
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