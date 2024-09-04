import React, { useState } from "react";
import { BlogImageData } from "../BlogImageData";
import ViewBlog from "./ViewBlog";
import { AuthorDetails } from "../AuthorDetails";
const BlogCard = ({ blog }) => {
    const [viewBlogState, setViewBlogState] = useState(false);
    const [blogsData, setBlogsData] = useState(null);
    const blogImage = BlogImageData.filter((image) => image?.id == blog?.image);
    const authorDetail = AuthorDetails.filter((author) => author.id == blog?.author);
    const viewBlog = () => {
        setViewBlogState(true);
        const blogWithAuthorAndImages = {
            ...blog,
            blogImage:blogImage[0],
            authorDetail:authorDetail[0],
        };
        setBlogsData(blogWithAuthorAndImages);
    };
    const closeViewModel = () => {
        setViewBlogState(false);
        setBlogsData(null)
    };
    return (
        <>
            <div className="p-4 md:w-1/3 ">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-slate-900">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blogImage[0]?.coverImageUrl} alt="blog" />
                    <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-white mb-3">{blog?.title}</h1>
                        <p className="text-white leading-relaxed mb-3">{blog?.shortDescription}</p>
                        <div className="flex items-center flex-wrap">
                            <a onClick={viewBlog} className="text-indigo-300 font-bold cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {viewBlogState && <ViewBlog closeViewModel={closeViewModel} blogsData={blogsData} />}
        </>
    );
};

export default BlogCard;
