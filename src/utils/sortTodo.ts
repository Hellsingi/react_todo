import { Todo } from "../types/todo";

export const sortByTime = (todos: Todo[]) => todos.sort((a, b) => b.date - a.date);
