import { useContext, useEffect, useState } from "react";
import TodoContext from "../context/TodoContext";
import ViewTodoModel from "./ViewTodoModel";
import { FaRegEdit } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

const TodoList = () => {
  const {
    todos,
    selectedTodo,
    selectedTodoEdit,
    isOpenViewModel,
    isOpenEditModel,
    deleteTodo,
    updateTodo,
    viewTodo,
    toggleTodo,
    editTodo,
    closeEditModel,
    closeViewModel,
  } = useContext(TodoContext);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    setEditData({
      id: selectedTodoEdit?.id || "",
      title: selectedTodoEdit?.title || "",
      description: selectedTodoEdit?.description || "",
      status: selectedTodoEdit?.status || "",
    });
  }, [editTodo]);

  // useEffect Function Closing The Model By Keybroad Esc Button
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (isOpenEditModel) {
          closeEditModel();
        }
        if (isOpenViewModel) {
          closeViewModel();
        }
      }
    };

    if (isOpenEditModel || isOpenViewModel) {
      document.addEventListener("keydown", handleEscape);
    }

    // Clean Up Function
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpenEditModel, isOpenViewModel, closeEditModel, closeViewModel]);

  // Getting Edit Data
  const handleEditData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      id: formData.get("id"),
      title: formData.get("title"),
      description: formData.get("description"),
      status: formData.get("status"),
      date: new Date().toLocaleDateString(),
    };
    const id = formData.get("id");
    updateTodo(data, id);
  };
  // Change Input State
  const handleChangeEdit = (e) => {
    const { name, value } = e.target;
    setEditData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {todos.length > 0 ? (
        <div className="flex flex-col bg-gray-900 rounded-lg text-white">
          <div className="overflow-y-scroll">
            <div className="p-1 5 min-w-full inline-block align-middle">
              <div className="overflow-y-scroll">
                <table className="min-w-full divide-y divide-gray-200 cursor-grabbing">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                        S.No
                      </th>
                      <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                        DateTime
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-balance uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 overflow-y-scroll">
                    {todos.map((todo, index) => {
                      return (
                        <tr key={todo.id}>
                          <td className="px-6 py-4 text-sm font-medium text-white">{index + 1}</td>
                          <td className="px-6 py-4 text-sm font-medium text-white">{todo.title}</td>
                          <td className="px-6 py-4 text-sm text-white text-wrap">{todo?.description}</td>
                          <td className="px-6 py-4 text-sm text-white">
                            {todo?.status === "pending" ? (
                              <span className="text-sm px-3 py-1 rounded font-bold bg-red-800 text-white">Pending</span>
                            ) : (
                              <span className="text-sm px-3 py-1 rounded font-bold bg-green-400 text-green-950">
                                Completed
                              </span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-white text-wrap">{todo?.date}</td>
                          <td className="px-6 py-4 text-end text-sm font-medium flex justify-center items-center">
                            <button
                              type="button"
                              onClick={() => editTodo(todo)}
                              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2"
                            >
                              Edit
                            </button>{" "}
                            |
                            <button
                              type="button"
                              onClick={() => viewTodo(todo)}
                              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2"
                            >
                              View
                            </button>
                            |
                            <button
                              type="button"
                              onClick={() => toggleTodo(todo?.id)}
                              className="focus:outline-none text-white bg-cyan-700 hover:bg-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2"
                            >
                              {todo?.status === "pending" ? "Mark As Completed" : "Mark As InCompleted"}
                            </button>
                            |
                            <button
                              type="button"
                              onClick={() => deleteTodo(todo.id)}
                              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col bg-gray-900 rounded-lg text-white">
          <div className="overflow-y-scroll">
            <div className="p-1 5 min-w-full align-middle h-32 flex justify-center items-center">
              <h1 className="text-4xl font-bold underline">To-Do List Is Empty</h1>
            </div>
          </div>
        </div>
      )}
      {isOpenViewModel ? (
        <ViewTodoModel>
          <section className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-2/4 mx-auto">
              <div className="w-full">
                <div className="flex justify-between items-center border-b border-white">
                  <h1 className="font-bold text-center text-3xl uppercase mb-2">View To-Do</h1>
                  <IoIosCloseCircle className="text-3xl cursor-pointer" onClick={() => closeViewModel()} />
                </div>
                <form action="#" className="p-3" noValidate>
                  <div className="mb-4 w-full space-y-3">
                    <label className="leading-7 text-base font-bold" htmlFor="title">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={selectedTodo?.title}
                      readOnly
                      disabled
                      className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-pointer"
                      placeholder="Enter The To-Do Title"
                    />
                  </div>
                  <div className="mb-4 w-full space-y-3">
                    <label className="leading-7 text-base font-bold" htmlFor="title">
                      Description
                    </label>
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-pointer"
                      readOnly
                      disabled
                      value={selectedTodo?.description}
                      placeholder="Enter The To-Do Description"
                    />
                    <div className="mb-4 w-full space-y-3">
                      <label className="leading-7 text-base font-bold" htmlFor="status">
                        Status
                      </label>
                      br
                      <input
                        type="text"
                        id="status"
                        name="status"
                        value={selectedTodo?.status}
                        readOnly
                        disabled
                        className={`w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out capitalize ${
                          selectedTodo?.status === "pending" ? "border-red-500" : "border-green-500"
                        }`}
                        placeholder="Enter The To-Do Status"
                      />
                    </div>
                    <div className="mb-4 w-full space-y-3">
                      <label className="leading-7 text-base font-bold" htmlFor="date">
                        Date
                      </label>
                      <input
                        type="text"
                        id="date"
                        name="date"
                        value={selectedTodo?.date}
                        readOnly
                        disabled
                        className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        placeholder="Enter The To-Do Title"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </ViewTodoModel>
      ) : (
        ""
      )}
      {isOpenEditModel ? (
        <ViewTodoModel>
          <section className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-2/4 mx-auto">
              <div className="w-full">
                <div className="flex justify-between items-center border-b border-white">
                  <h1 className="font-bold text-center text-3xl uppercase mb-2">Edit To-Do</h1>
                  <IoIosCloseCircle className="text-3xl cursor-pointer" onClick={() => closeEditModel()} />
                </div>
                <form action="#" onSubmit={handleEditData} className="p-3" noValidate>
                  <div className="mb-4 w-full space-y-3">
                    <label className="leading-7 text-base font-bold" htmlFor="title">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={editData.title || ""}
                      onChange={handleChangeEdit}
                      className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      placeholder="Enter The To-Do Title"
                    />
                    <input type="hidden" id="id" name="id" value={selectedTodoEdit?.id || ""} />
                    <input type="hidden" id="status" name="status" value={selectedTodoEdit?.status || ""} />
                  </div>
                  <div className="mb-4 w-full space-y-3">
                    <label className="leading-7 text-base font-bold" htmlFor="title">
                      Description
                    </label>
                    <textarea
                      type="text"
                      id="description"
                      name="description"
                      className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={editData.description || ""}
                      onChange={handleChangeEdit}
                      placeholder="Enter The To-Do Description"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg flex justify-center items-center">
                      <FaRegEdit className="mr-2" /> Update To-Do
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </ViewTodoModel>
      ) : (
        ""
      )}
    </>
  );
};

export default TodoList;
