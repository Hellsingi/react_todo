/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { setLocalStorage } from '../utils/localStorage';
import { Todo } from '../types/todo';
import { sortByTime } from '../utils/sortTodo';

export default (initialValue: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initialValue);
  useEffect(() => {
    setLocalStorage(todos);
  }, [todos]);
  return {
    todos,
    addTodo: (todoText: string) => {
      const newTodo: Todo = {
        id: nanoid(), text: todoText, date: Date.now(), editable: false,
      };
      setTodos([newTodo, ...todos]);
    },
    deleteTodo: (id: string) => {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    },
    changeEditMode: (id: string) => {
      const editsTodo = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.editable = !todo.editable;
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
      setTodos(sortByTime(editsTodo));
    },
  };
};
