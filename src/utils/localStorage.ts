import { Todo } from '../types/todo';

const LOCAL_STORAGE_KEY = 'todos';

export const setLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

export const getLocalStorage = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
