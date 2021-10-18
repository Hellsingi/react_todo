/* eslint-disable no-unused-vars */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';

const TodoForm = ({ saveTodo }: { saveTodo: (todoText: string) => void}) => {
  const { value, reset, onChange } = useInputState();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add task"
        margin="normal"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
