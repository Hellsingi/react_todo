import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';
import TodoForm from './components/TodoForm';
import useTodoState from './hooks/useTodoState';
import TodoList from './components/TodoList';
import { getLocalStorage } from './utils/localStorage';
import './App.css';

const initialStorage = getLocalStorage();

const App = () => {
  const {
    todos, addTodo, changeEditMode, deleteTodo, editTodo,
  } = useTodoState(initialStorage);

  const saveTodo = (todoText: string) => {
    const trimmedText = todoText.trim();
    if (trimmedText) {
      addTodo(trimmedText);
    }
  };

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm
        saveTodo={saveTodo}
      />
      <TodoList
        todos={todos}
        changeEditMode={changeEditMode}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
