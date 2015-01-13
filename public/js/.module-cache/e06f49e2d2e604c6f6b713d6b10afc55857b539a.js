var ChangeNameForm = React.createClass({displayName: "ChangeNameForm",
  getInitialState: function() {
    return {newName: ''};
  },

  handleChange: function(e) {
    this.setState({newName: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newName = this.state.newName;
    if (!newName) {
      return;
    }
    this.props.onChangeName(newName);
    this.setState({newName: ''});
    return;
  },

  render: function() {
    return (
      React.createElement("form", {class: "changeNameForm", onSubmit: this.handleSubmit}, 
        React.createElement("h3", null, "Change Name"), 
        React.createElement("input", {
          onChange: this.handleChange, 
          value: this.state.newName}
        )
      )
    );
  }
});