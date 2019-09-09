import React, { Component } from 'react';
import List from "./List";
import './App.css';

class App extends Component() {
  state = {
    grocerylist: [
      {id: 1, name: "Milk", complete: false, },
      {id: 2, name: "Bread", complete: false, },
      {id: 3, name: "Eggs", complete: false, },
    ]
  };
  renderGrocerylist = () => {
    render() {
      const { todos } = this.state;
   
      return (
        <List name="Todo List" items={todos} />
      );
    }
  }
  render() {
    return (
      <div>
        <GrocerylistForm />
        <List />
      </div>
    );
  };

  

export default App;
