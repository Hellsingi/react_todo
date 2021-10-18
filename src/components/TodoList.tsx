/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { Todo } from '../types/todo';

const TodoList = ({
  todos, changeEditMode, deleteTodo, editTodo,
}: {
  todos: Todo[],
  changeEditMode: (id: string) => void,
  deleteTodo: (id: string) => void,
  editTodo: (id: string, todoText: string | undefined) => void,
}) => {
  const textFieldRef = useRef<HTMLInputElement>();

  return (
    <List>
      {todos.map((todo) => (
        <div key={todo.id}>

          <ListItem dense button>
            <ListItemText primary={todo.text} />
            {todo.editable && (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  editTodo(todo.id, textFieldRef.current.value);
                }}
              >
                <TextField
                  variant="outlined"
                  placeholder="Edit task"
                  margin="normal"
                  defaultValue={todo.text}
                  inputRef={textFieldRef}
                />
              </form>
            )}
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Edit"
                onClick={() => {
                  changeEditMode(todo.id);
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="Delete"
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </div>
      ))}
    </List>
  );
};

export default TodoList;
