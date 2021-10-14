import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@material-ui/core';
import './styles/main.css';
import TodoForm from './TodoForm';

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="App">
    <Typography component="h1" variant="h2">
      Todos
    </Typography>
    <TodoForm saveTodo={console.log} />
  </div>
);

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
