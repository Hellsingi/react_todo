/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import { Todo } from '../types/todo';
import ModalComponent from './Modal';

const TodoList = ({
  todos, changeEditMode, deleteTodo, editTodo,
}: {
  todos: Todo[],
  changeEditMode: (id: string) => void,
  deleteTodo: (id: string) => void,
  editTodo: (id: string, todoText: string | undefined) => void,
}) => {
  const textFieldRef = useRef<HTMLInputElement>();

  const submitForm = (
    id: string,
    event?: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>,
  ) => {
    event?.preventDefault();
    editTodo(id, textFieldRef.current.value);
  };

  return (
    <List>
      {todos.map((todo) => (
        <div key={todo.id}>
          <ListItem dense button>
            <ListItemText primary={todo.text} />
            <form
              onSubmit={(e) => submitForm(todo.id, e)}
            >
              <ModalComponent
                onClick={() => {
                  changeEditMode(todo.id);
                }}
                submitForm={submitForm}
                todo={todo}
                deleteTodo={deleteTodo}
              >
                <TextField
                  fullWidth
                  multiline
                  variant="outlined"
                  placeholder="Edit task"
                  margin="normal"
                  defaultValue={todo.text}
                  inputRef={textFieldRef}
                />
              </ModalComponent>
            </form>
          </ListItem>
        </div>
      ))}
    </List>
  );
};

export default TodoList;
