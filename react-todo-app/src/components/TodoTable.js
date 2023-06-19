import React, { useState } from 'react';
import TodoRow from './TodoRow';


const TodoTable = () => {
  const [counter, setCounter] = useState(1);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (input) => {
    setInputValue(input.target.value);
  };

  const handleInsertRow = () => {
    const newTodo = {
      id: counter,
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue('');
    setCounter(counter + 1);
  };

  const handleClearRow = () => {
    setTodos([]);
    setCounter(1);
  };

  const handleDeleteRow = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleSubmit = (input) => {
    input.preventDefault();
    handleInsertRow();
  };

  return (
    <div>
      <div>
        <button onClick={handleInsertRow}>Insert Row</button>
        <button onClick={handleClearRow}>Clear Row</button>
      </div>
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoRow
                key={todo.id}
                id={todo.id}
                text={todo.text}
                handleDeleteRow={handleDeleteRow}
              />
            ))}
            <tr>
              <td>Item Name {counter}</td>
              <td>
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default TodoTable;
