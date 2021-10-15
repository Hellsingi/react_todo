import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default (initialValue: any) => {
  const [todos, setTodos] = useState(initialValue);
  return {
    todos,
    addTodo: (todoText: string) => {
      setTodos([...todos, todoText]);
    },
    deleteTodo: (todoIndex: string) => {
      const newTodos = todos.filter((_: any, index: string) => index !== todoIndex);
      setTodos(newTodos);
    },
    editTodo: (index: number, todo: string) => {
      console.log('todoIndex:', index);
      console.log('todo:', todo);
        <TextField
          variant="outlined"
          placeholder="Add task"
          margin="normal"
          value={todo}
        />;
    },
  };
};
