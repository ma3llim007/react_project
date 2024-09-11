import { useSelector } from "react-redux";
import TodoIcon from "/direct-hit.png";
import DoingIcon from "/glowing-star.png";
import DoneIcon from "/check-mark-button.png";
import AddTodo from "./AddTodo";
import TaskColums from "./TaskColums";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { MultiBackend, TouchTransition } from "dnd-multi-backend";
import { TouchBackend } from "react-dnd-touch-backend";

// Configure MultiBackend with both HTML5 and Touch
const backendOptions = {
    backends: [
        {
            id: "html5",
            backend: HTML5Backend,
        },
        {
            id: "touch",
            backend: TouchBackend,
            options: {
                enableMouseEvents: true,
            },
            transition: TouchTransition,
        },
    ],
};

const BodyContainer = () => {
    const Tasks = useSelector((state) => state.task.tasks);
    return (
        <>
            <section className="bg-gray-500 h-[90vh]">
                <div className="container mx-auto p-5 flex flex-col gap-5">
                    <div className="bg-gray-800 py-5 px-3 border-2 rounded-lg">
                        <AddTodo />
                    </div>
                    <hr />
                    <div className="grid sm:grid-cols-1 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 bg-gray-800 text-white gap-5 border-2 rounded-lg py-5 px-3">
                        <DndProvider backend={MultiBackend} options={backendOptions}>
                            <TaskColums title={"Todo"} icon={TodoIcon} tasks={Tasks} bgColor="bg-red-600" status={"Todo"} />
                            <TaskColums title={"Doing"} icon={DoingIcon} tasks={Tasks} bgColor="bg-indigo-950" status={"Doing"} />
                            <TaskColums title={"Done"} icon={DoneIcon} tasks={Tasks} bgColor="bg-green-600" status={"Done"} />
                        </DndProvider>
                    </div>
                </div>
            </section>
        </>
    );
};
export default BodyContainer;
