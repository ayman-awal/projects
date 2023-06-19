import React from 'react';

const TodoRow = ({ id, text, handleDeleteRow }) => {
  return (
    <tr>
      <td>Item Name {id}</td>
      <td>{text}</td>
      <td>
        <button onClick={() => handleDeleteRow(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoRow;
