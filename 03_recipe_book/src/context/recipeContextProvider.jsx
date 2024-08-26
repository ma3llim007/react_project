import { useEffect, useState } from "react";
import RecipeContext from "./recipeContext";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const RecipeContextProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const [selectRecipe, setSelectRecipe] = useState(null);

    // Loading Data From localStorage to State
    useEffect(() => {
        try {
            const getLocalStorage = JSON.parse(localStorage.getItem("recipes"));
            if (Array.isArray(getLocalStorage) && getLocalStorage.length > 0) {
                setRecipes(getLocalStorage);
            }
        } catch (error) {
            console.error("Error loading recipes from local storage", error);
        }
    }, []);

    // Adding New Recipe
    const AddRecipe = (recipe, reset) => {
        let newRecipe = {
            id: uuidv4(),
            ...recipe,
        };
        setRecipes((pre) => [...pre, newRecipe]);
        if (reset && typeof reset === "function") {
            reset();
        }
        toast.success("Recipe Successfully Added!", {
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

    // Opening View Model
    const viewRecipe = (recipe) => {
        setIsModelOpen(true);
        setSelectRecipe(recipe);
    };

    // Closing View Model
    const closeModel = () => {
        setIsModelOpen(false);
        setSelectRecipe(null);
    };

    // Deleting Recipe
    const deleteRecipe = (id) => {
        setRecipes(recipes.filter((recipe) => recipe.id !== id));
        setIsModelOpen(false);
        setSelectRecipe(null);
        toast.info("Recipe Successfully Deleted!", {
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

    // Saving Recipe To localStorage
    useEffect(() => {
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }, [recipes]);

    return <RecipeContext.Provider value={{ recipes, selectRecipe, isModelOpen, AddRecipe, viewRecipe, closeModel, deleteRecipe }}>{children}</RecipeContext.Provider>;
};
export default RecipeContextProvider;
