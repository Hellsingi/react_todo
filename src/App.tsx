import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';
import TodoForm from './components/TodoForm';
import useTodoState from './components/useTodoState';
import TodoList from './components/TodoList';
import './styles/main.css';

const App = () => {
  const {
    todos, addTodo, editTodo, deleteTodo,
  } = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
        saveTodo={(todoText: string) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
