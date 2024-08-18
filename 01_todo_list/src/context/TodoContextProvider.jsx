import { useEffect, useState } from "react";
import TodoContext from "./TodoContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedTodoEdit, setSelectedTodoEdit] = useState(null);
  const [isOpenViewModel, setIsOpenViewModel] = useState(false);
  const [isOpenEditModel, setIsOpenEditModel] = useState(false);

  // Add New Todo
  const addTodo = (todo) => {
    let newTodo = {
      id: uuidv4().slice(0, 8),
      ...todo,
      status: "pending",
      date: new Date().toLocaleDateString(),
    };
    setTodos((prev) => [...prev, newTodo]);
    toast.success("New Todo Added Successfully !", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    document.querySelector("input").value = "";
    document.querySelector("textarea").value = "";
  };

  // Update Todo
  const updateTodo = (todo, id) => {
    setTodos((preTodos) => preTodos.map((preTodo) => preTodo.id === id ? todo : preTodo));
    setIsOpenEditModel(false);
    toast.success("Todo Update Successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // View Todo
  const viewTodo = (todo) => {
    setIsOpenViewModel(true);
    setSelectedTodo(todo);
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.info("Todo Deleted Successfully !", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // Toggle Todo
  const toggleTodo = (id) => {
    setTodos((preValue) =>
      preValue.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "pending" ? "completed" : "pending",
            }
          : todo
      )
    );
  };

  // Loading Data From Local Storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && Array.isArray(storedTodos) && storedTodos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // Saving Data In Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Closed Model
  const closeViewModel = () => {
    setIsOpenViewModel(false);
  };

  // Open Edit Todo
  const editTodo = (todo) => {
    setIsOpenEditModel(true);
    setSelectedTodoEdit(todo);
  };

  // Closed Model Edit
  const closeEditModel = () => {
    setIsOpenEditModel(false);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        selectedTodo,
        selectedTodoEdit,
        isOpenViewModel,
        isOpenEditModel,
        addTodo,
        deleteTodo,
        updateTodo,
        viewTodo,
        toggleTodo,
        editTodo,
        closeEditModel,
        closeViewModel
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
