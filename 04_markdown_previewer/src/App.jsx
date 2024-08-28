import { useState } from "react";
import MarkDownEditor from "./components/MarkDownEditor";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import MarkDownPreview from "./components/MarkDownPreview";

const App = () => {
    const [markDown, setMarkDown] = useState("# Welcome To Markdown Preview");

    return (
        <>
            <section className="w-screen h-screen bg-gray-950 overflow-y-scroll">
                <div className="container pt-5 mx-auto">
                    <div className="rounded-2xl p-10 bg-gray-900">
                        <div className="flex gap-4 w-full mb-4">
                            <div className="w-2/4">
                                <h1 className="text-3xl uppercase text-center text-white underline font-bold">MarkDown</h1>
                            </div>
                            <div className="w-2/4">
                                <h1 className="text-3xl uppercase text-center text-white underline font-bold">Preview MarkDown</h1>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <div className="flex gap-4">
                            <div className="w-2/4">
                                <MarkDownEditor markDown={markDown} setMarkDown={setMarkDown} />
                            </div>
                            <div className="w-2/4">
                                <MarkDownPreview markDown={markDown} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default App;
