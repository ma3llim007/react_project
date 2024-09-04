import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "./BlogCard";

const BlogList = () => {
    const blogs = useSelector((state) => state.blogs.posts);
    return (
        <>
            {blogs.length > 0 ? (
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {blogs.map((blog) => (
                                <BlogCard key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                <div className="flex flex-col bg-gray-900 rounded-lg text-white">
                    <div className="overflow-y-scroll">
                        <div className="p-1 5 min-w-full align-middle h-32 flex justify-center items-center">
                            <h1 className="text-4xl font-bold underline">Blog Is Empty</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BlogList;
