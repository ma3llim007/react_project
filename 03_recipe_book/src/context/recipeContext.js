import { createContext } from "react";

// Define initial state and context structure
const initialState = {
    recipes: [],
    AddRecipe: (recipe, reset) => { },
    viewRecipe: (recipe) => {},
    closeModel: () => {},
    deleteRecipe: (id) => {},
};

const RecipeContext = createContext(initialState);
export default RecipeContext;
