import { lazy, Suspense, useContext } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import RecipeContext from "../context/recipeContext";
const TinyMce = lazy(() => import("./TinyMce"));

const AddRecipe = () => {
    const { AddRecipe } = useContext(RecipeContext);

    const {
        control,
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
        },
    });

    const onSubmit = (data) => {
        AddRecipe(data, reset);
    };

    return (
        <section className="h-screen w-screen">
            <div className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-2/4 mx-auto mt-10">
                <h1 className="font-bold text-center text-3xl uppercase underline">Add New Recipe</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="p-3" noValidate>
                    <div className="mb-4 w-full space-y-3">
                        <label className="leading-7 text-base font-bold" htmlFor="title">
                            Recipe Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            placeholder="Enter The Recipe Title"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Recipe Title Is Required",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Recipe Title Should Be Less Than 50 Characters",
                                },
                                minLength: {
                                    value: 3,
                                    message: "Recipe Title Should Be At Least 3 Characters",
                                },
                            })}
                        />
                        <p className="font-semibold text-red-600">{errors.title?.message}</p>
                    </div>
                    <div className="mb-4 w-full space-y-3">
                        <label className="leading-7 text-base font-bold" htmlFor="description">
                            Recipe Description
                        </label>
                        <Suspense
                            fallback={
                                <div className="p-1 5 min-w-full align-middle h-32 flex justify-center items-center">
                                    <h1 className="text-4xl font-bold underline">Loading Editor</h1>
                                </div>
                            }
                        >
                            <TinyMce name="description" control={control} rules={{ required: "Recipe Description Is Required" }} />
                        </Suspense>
                    </div>
                    <div className="flex justify-center">
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg flex justify-center items-center">
                            <FaRegEdit className="mr-2" /> Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddRecipe;
