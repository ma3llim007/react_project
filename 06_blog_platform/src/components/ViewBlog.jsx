import DOMPurify from "dompurify";
import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import parse from "html-react-parser";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeBlog } from "../app/blog/blogSlice";
import { toast } from "react-toastify";

const ViewBlog = ({ blogsData, closeViewModel }) => {
    const purifyDescription = DOMPurify.sanitize(blogsData.description);
    const dispatch = useDispatch();
    const handleRemoveBlog = (id) => {
        const remove = dispatch(removeBlog(id));
        if (remove) {
            toast.error("Blog Remove Successfully!", {
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
    }
    
    return (
        <>
            <section className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                <div className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-10/12 mx-auto max-h-screen mt-8 overflow-y-scroll">
                    <div className="flex justify-between items-center border-b border-white">
                        <h1 className="font-bold text-center text-3xl uppercase mb-2">View Blog</h1>
                        <IoIosCloseCircle className="text-3xl cursor-pointer" onClick={() => closeViewModel()} />
                    </div>
                    <main className="pt-8 pb-16 lg:pt-8 lg:pb-10 bg-white dark:bg-gray-900 overflow-y-scroll text-wrap w-full">
                        <div className="flex justify-between px-4 mx-auto">
                            <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                                <header className="mb-4 lg:mb-6 not-format">
                                    <address className="flex items-center mb-6 not-italic">
                                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                            <img
                                                className="mr-4 w-16 h-16 rounded-full"
                                                src={blogsData.authorDetail?.authorImageUrl}
                                                alt={blogsData.authorDetail?.authorName}
                                            />
                                            <div>
                                                <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {blogsData.authorDetail?.authorName}
                                                </a>
                                                <p className="text-base text-gray-500 dark:text-gray-400">{blogsData.authorDetail?.date}</p>
                                            </div>
                                        </div>
                                    </address>
                                    <div className="rounded-lg h-[1000px] overflow-hidden">
                                        <img
                                            className="object-cover object-center h-full w-full"
                                            src={blogsData?.blogImage?.coverImageUrl}
                                            alt={blogsData?.blogImage?.title}
                                        />
                                    </div>
                                </header>

                                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                    {blogsData?.title}
                                </h1>
                                <div className="prose lg:prose-xl prose-invert">{parse(purifyDescription)}</div>
                                <div className="flex justify-end items-end mt-5">
                                    <button
                                        onClick={() => handleRemoveBlog(blogsData?.id)}
                                        className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded-lg text-lg flex justify-center items-center"
                                    >
                                        <FaTrash className="mr-2" /> Remove Blog
                                    </button>
                                </div>
                            </article>
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
};

export default ViewBlog;
