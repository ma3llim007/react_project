import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircle } from "react-icons/io";
import RecipeContext from "../context/recipeContext";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { FaTrash } from "react-icons/fa";

const ViewModel = () => {
    const { isModelOpen, selectRecipe, closeModel, deleteRecipe } = useContext(RecipeContext);

    // Sanitize the HTML content
    const sanitizedHtml = DOMPurify.sanitize(selectRecipe?.description);

    // useEffect Function Closing The Model By Keybroad Esc Button
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                if (isModelOpen) {
                    closeModel();
                }
            }
        };

        if (isModelOpen) {
            document.addEventListener("keydown", handleEscape);
        }

        // Clean Up Function
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isModelOpen, closeModel]);

    return createPortal(
        <>
            {isModelOpen ? (
                <section className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 ">
                    <div className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-2/3 mx-auto max-h-[800px] overflow-y-scroll">
                        <div className="w-full">
                            <div className="flex justify-between items-center border-b border-white">
                                <h1 className="font-bold text-center text-3xl uppercase mb-2">View Recipe</h1>
                                <IoIosCloseCircle className="text-3xl cursor-pointer" onClick={() => closeModel()} />
                            </div>
                            <div className="p-3">
                                <div className="mb-4 w-full space-y-3">
                                    <label className="leading-7 text-base font-bold" htmlFor="title">
                                        Title
                                    </label>
                                    <input defaultValue={selectRecipe?.title} type="text" id="title" name="title" readOnly disabled className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-pointer" placeholder="View The Recipe Title" />
                                </div>
                                <div className="mb-4 w-full space-y-3">
                                    <label className="leading-7 text-base font-bold" htmlFor="description">
                                        Description
                                    </label>
                                    <div className="w-full min-h-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2  focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-pointer">{parse(sanitizedHtml)}</div>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button onClick={() => deleteRecipe(selectRecipe?.id)} className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded-lg text-xl flex justify-center items-center">
                                    <FaTrash className="mr-2" /> Delete Recipe
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </>,
        document.getElementById("model-root")
    );
};
export default ViewModel;
