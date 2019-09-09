import React from "react";
import Grocerylist from "./Grocerylist";

const List = (props) => (
  <div>
    <h2>{name}</h2>
    <ul>
    { items.map( item => <Grocerylist key={item.id} {...item} grocerylistClick={grocerylistClick} /> )}
    </ul>
  </div>
);

export default List;