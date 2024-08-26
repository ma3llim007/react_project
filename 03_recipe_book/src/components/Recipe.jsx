import { useContext } from "react";
import RecipeContext from "../context/recipeContext";
import { FaEye, FaTrash } from "react-icons/fa";
import ViewModel from "./ViewModel";

const Recipe = () => {
    const { recipes, viewRecipe } = useContext(RecipeContext);
    return (
        <>
            <section className="container mx-auto mt-10">
                {recipes.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-5 p-5 content-center items-center">
                        {recipes.map((recipe) => (
                            <div key={recipe?.id} className="bg-gray-100 rounded-lg p-4 w-full place-self-center max-w-sm Mybackdrop-filter">
                                <h1 className="sm:text-2xl text-xl font-bold text-center text-gray-950 my-2 leading-normal">{recipe?.title}</h1>
                                <div className="flex justify-center gap-2">
                                    <button onClick={() => viewRecipe(recipe)} className="text-white bg-indigo-500 border-0 py-1 px-2 focus:outline-none hover:bg-indigo-600 rounded-lg flex justify-center items-center text-sm">
                                        <FaEye className="mr-2" /> View Recipe
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col bg-gray-900 rounded-lg text-white">
                        <div className="overflow-y-scroll">
                            <div className="p-1 5 min-w-full align-middle h-32 flex justify-center items-center">
                                <h1 className="text-4xl font-bold underline">Recipe Is Empty</h1>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <ViewModel />
        </>
    );
};
export default Recipe;
