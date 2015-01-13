var UsersList = React.createClass({
  render: function() {
    var renderUser = function(user, index) {
      return <li key={index}>{user}</li>
    };
    return (
      <div className="userList">
        <h3>Online Users</h3>
        <ul>
          {this.props.users.map(renderUser)}
        </ul>
      </div>
    );
  }
});