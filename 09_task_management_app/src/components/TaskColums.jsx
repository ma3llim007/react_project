import TaskItem from "./TaskItem";
import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { dragAndDrop } from "../app/reducer/taskSlice";
const TaskColums = ({ title, icon, tasks, status, bgColor }) => {
    const dispatch = useDispatch();
    const filteredTasks = tasks.filter((task) => task.status === status);

    // Function to Handle Status Chanage When Tasks Are Dropped Between Colums
    const [, dropRef] = useDrop({
        accept: "TASK",
        drop: (item) => {
            dispatch(
                dragAndDrop({
                    id: item?.id,
                    status,
                })
            );
        },
    });

    return (
        <>
            <div className={`rounded-lg p-2 h-fit ${bgColor}`} ref={dropRef}>
                <div className="w-full flex justify-center items-center gap-2">
                    <img className="w-6 h-6 object-cover" src={icon} alt="Icon" />
                    <h1 className="text-2xl font-bold underline mb-1">{title}</h1>
                </div>
                <hr className="mb-4" />
                <div className="flex flex-col gap-2">
                    {filteredTasks.map((task) => (
                        <TaskItem key={task?.id} task={task} />
                    ))}
                </div>
            </div>
        </>
    );
};
export default TaskColums;
