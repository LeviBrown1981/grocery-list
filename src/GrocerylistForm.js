import React from 'react';

class GrocerylistForm extends React.Component {

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name)
  }

  render() {
    return (
      <form>
        <input required placeholder="Add An Item" />
      </form>
    )
  }
}

export default GrocerylistForm;