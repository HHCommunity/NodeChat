/**
 * @jsx React.DOM
 */
var ChangeNameForm = React.createClass({displayName: "ChangeNameForm",
  getInitialState: function() {
    return {newName: ''};
  },

  changeHandler: function(e) {
    this.setState({newName: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newName = this.state.newName;
    this.props.onChangeName(newName);
    this.setState({newName: ''});
  },

  render: function() {
    return (
      React.createElement("div", {className: "change_name_form"}, 
        React.createElement("h3", null, "Change Name"), 
        React.createElement("form", {onSubmit: this.handleSubmit}, 
          React.createElement("input", {onChange: this.changeHandler, value: this.state.newName})
        )
      )
    );
  }
});