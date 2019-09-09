import React from 'react';

const Grocerylist = ({ id, name, complete }) => (
  <li
    style={ () => grocerylistClick(id) }
  >
   { name }
  </li>
);

const styles = {
  todo: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Grocerylist;