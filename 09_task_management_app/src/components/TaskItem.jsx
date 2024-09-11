import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { removeTask } from "../app/reducer/taskSlice";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    // Remove The Task
    const handleRemoveTask = (taskId) => {
        const id = dispatch(removeTask(taskId));
        if (id) {
            toast.error("Task Successfully Deleted!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    // Handle dragging of the task Between Colums
    const [{ isDragging }, dragRef] = useDrag({
        type: "TASK",
        item: { id: task.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <>
            <div ref={dragRef} className="w-full border flex bg-yellow-500 border-white p-4 rounded-md shadow">
                <div className="w-full">
                    <h5 className="text-xl text-black flex-shrink">{task?.title}</h5>
                </div>
                <div className="w-6">
                    <button className="text-xl text-red-500" onClick={() => handleRemoveTask(task?.id)}>
                        <FaTrash />
                    </button>
                </div>
            </div>
        </>
    );
};

export default TaskItem;
