import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { nanoid } from 'nanoid';
import { setLocalStorage } from '../utils/localStoge';
import { Todo } from '../types/todo';

export default (initialValue: any) => {
  const [todos, setTodos] = useState<Todo[]>(initialValue);
  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);
  return {
    todos,
    addTodo: (todoText: string) => {
      const newTodo: Todo = { id: nanoid(), text: todoText, date: Date.now(), editable: false }
      setTodos([...todos, newTodo]);
    },
    deleteTodo: (id: string) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    changeEditMode: (id: string) => {
      const editsTodo = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.editable = !todo.editable;
          // todo.editable = true;
        }
        return todo;
      });
      setTodos(editsTodo);
    },
    editTodo: (id: string, todoText: string | undefined) => {
      const editsTodo = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = todoText;
          todo.date = Date.now();
          todo.editable = false;
        }
        return todo;
      });
      setTodos(editsTodo);
    },

  }
  // checkTodo:(index: string) => {

  // }
};
