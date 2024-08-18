import { useState } from "react";
import { Header, TodoContainer } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("add");

  const handleOnSectionSwitch = (e) => {
    setActiveSection(e);
  };

  return (
    <>
      <div className="bg-gray-500 w-screen h-screen select-none overflow-scroll">
        <div className="relative">
          <Header
            activeState={activeSection}
            SectionSwitch={handleOnSectionSwitch}
          />
          <div className="container mx-auto mt-4">
            <TodoContainer activeState={activeSection} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
