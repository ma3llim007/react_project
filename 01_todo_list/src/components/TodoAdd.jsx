import { FaRegEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoAdd = () => {
  const { addTodo } = useContext(TodoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { title: "", description: "" } });
  
  return (
    <>
      <section className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-2/4 mx-auto">
        <div className="w-full">
          <h1 className="font-bold text-center text-3xl uppercase underline">
            Add To-Do
          </h1>
          <form
            action="#"
            onSubmit={handleSubmit(addTodo)}
            className="p-3"
            noValidate
          >
            <div className="mb-4 w-full space-y-3">
              <label className="leading-7 text-base font-bold" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter The To-Do Title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Title Is Required",
                  },
                  maxLength: {
                    value: 50,
                    message: "Title Should Be Less Then 50 Character",
                  },
                  minLength: {
                    value: 3,
                    message: "Title Should Be Atleast 3 Character",
                  },
                })}
              />
              <p className="font-semibold text-red-600">
                {errors.title?.message}
              </p>
            </div>
            <div className="mb-4 w-full space-y-3">
              <label className="leading-7 text-base font-bold" htmlFor="title">
                Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter The To-Do Description"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description Is Required",
                  },
                  minLength: {
                    value: 3,
                    message: "Title Should Be Atleast 3 Character",
                  },
                })}
              />
              <p className="font-semibold text-red-600">
                {errors.description?.message}
              </p>
            </div>
            <div className="flex justify-center">
              <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg flex justify-center items-center">
                <FaRegEdit className="mr-2" /> Add To-Do
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default TodoAdd;
