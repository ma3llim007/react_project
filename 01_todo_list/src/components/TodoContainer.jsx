import TodoContextProvider from "../context/TodoContextProvider";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const TodoContainer = ({ activeState }) => {
  return (
    <TodoContextProvider>
      {activeState == "add" ? <TodoAdd /> : <TodoList />}
    </TodoContextProvider>
  );
};

export default TodoContainer;