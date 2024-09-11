import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { addNewTask } from "../app/reducer/taskSlice";

const AddTodo = () => {
    const inputTextRef = useRef(null);
    const selectInputRef = useRef(null);

    const dispatch = useDispatch();
    // Added New Task
    const handleAddNotes = () => {
        if (inputTextRef.current.value) {
            const newTodo = {
                id: uuidv4(),
                title: inputTextRef.current.value,
                status: selectInputRef.current.value,
            };
            if (dispatch(addNewTask(newTodo))) {
                toast.success("New Task Successfully Added!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                inputTextRef.current.value = "";
                inputTextRef.current.focus();
                selectInputRef.current.value = "Todo";
            }
        }
    };

    return (
        <>
            <div className="flex gap-5 flex-wrap">
                <input
                    ref={inputTextRef}
                    type="text"
                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter The Note"
                />
                <select
                    ref={selectInputRef}
                    name="status"
                    id="status"
                    className="w-44 bg-gray-600 focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                    <option value="Todo">Todo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <button
                    onClick={handleAddNotes}
                    className="w-36 text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg flex justify-center items-center"
                >
                    Add Task
                </button>
            </div>
        </>
    );
};
export default AddTodo;
