/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm saveTodo={console.log} />
      <TodoList todos={todos} />
    </div>
  );
};

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
