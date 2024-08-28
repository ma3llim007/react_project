import React, { useRef } from "react";
import Markdown from "react-markdown";
import { toast } from "react-toastify";

const MarkDownPreview = ({ markDown }) => {
    const markDownRef = useRef(null);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(markDownRef);
            toast.success("Copy To ClipBoard!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (err) {
            toast.error("Something Went Wrong!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };
    return (
        <>
            <div className="relative">
                <div className="absolute top-2 right-0 h-8 flex items-center pr-4">
                    <div className="relative flex -mr-2">
                        <button type="button"  aria-label="Copy to clipboard" onClick={copyToClipboard} className="text-slate-500 hover:text-slate-400">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="w-8 h-8">
                                <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                                <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="w-full min-h-[700px] p-5 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ref={markDownRef}>
                    <Markdown>{markDown}</Markdown>
                </div>
            </div>
        </>
    );
};

export default MarkDownPreview;
