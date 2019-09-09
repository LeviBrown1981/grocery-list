import React from 'react';

class GrocerylistForm extends React.Component {

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "" })
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          name="name"
          noChange={this.handleChange}
         required
          placeholder="Add An Item" 
          />
      </form>
    )
  }
}

export default GrocerylistForm;