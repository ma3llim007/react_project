import { AddRecipe, Header, Recipe } from "./components";
import RecipeContextProvider from "./context/recipeContextProvider";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
    const [activeStatus, setActiveStatus] = useState("list");

    const handleActiveStatus = (e) => {
        setActiveStatus(e);
    };

    return (
        <>
            <div className="min-w-screen min-h-screen bg-[url('/img/bg-image.jpg')] bg-cover bg-no-repeat">
                <div className="bg-black bg-opacity-70 w-screen h-screen z-50 overflow-scroll">
                    <RecipeContextProvider>
                        <Header activeStatus={activeStatus} handleActiveStatus={handleActiveStatus} />
                        {activeStatus === "list" ? <Recipe /> : <AddRecipe />}
                    </RecipeContextProvider>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default App;
