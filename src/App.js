import React, { Component } from 'react';
import List from "./List";
import Grocerylistform from "./Grocerylist";
import Footer from "./Footer";
import './App.css';

class App extends Component {
  state = { grocerylist: [], filter: "All" }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
   return Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
  }

addItem = (name) => {
const { grocerylists } = this.state;
const grocerylist = { name, id: this.getUniqId() , complete: false }
this.setState({ grocerylists: [grocerylist, ...grocerylists] }); 
}

handleClick = (id) => {
  const { grocerylists } = this.state;
  this.setState({
    grocerylists: grocerylists.map( todo => {
      if (grocerylist.id === id) {
        return {
          ...grocerylist,
          complete: !grocerylist.complete
        }
      }
      return grocerylist
    })
  })
}

visibleItems = () => {
  const { grocerylists, filter } = this.state;
  switch(filter) {
    case 'Active':
      return grocerylists.filter( t => !t.complete )
    case 'Complete':
      return grocerylists.filter( t=> t.complete )
    default:
      return grocerylists;
  }
}

render() {
const { grocerylists, filter } = this.state;

return (
<div>
<GrocerylistForm addItem={this.addItem} />
<List name="Grocery List" items={this.visibleItems()} grocerylistClick={this.handleClick} />
<Footer filter={filter} setFilter={this.setFilter} />
</div>
);
}
}

export default App;