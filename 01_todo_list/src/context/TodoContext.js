import { createContext } from "react";

const TodoContext = createContext({
  todos: [],
  isOpenViewModel: false,
  isOpenEditModel: false,
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  viewTodo: (todo) => {},
  editTodo: (todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
  closeViewModel: () => {},
  closeEditModel: () => {},
});

export default TodoContext;
