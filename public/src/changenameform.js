var ChangeNameForm = React.createClass({
  getInitialState: function() {
    return {newName: ''};
  },

  handleChange: function(e) {
    this.setState({newName: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newName = this.state.newName.trim();
    if (!newName) {
      return;
    }
    this.props.onChangeName(newName);
    this.setState({newName: ''});
  },

  render: function() {
    return (
      <form className="changeNameForm" onSubmit={this.handleSubmit}>
        <h3>Change Name</h3>
        <input onChange={this.handleChange} value={this.state.newName} />
      </form>
    );
  }
});