import { useState } from 'react';

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
  };
};
