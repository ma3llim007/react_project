import React, { lazy, Suspense, useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { AuthorDetails } from "../AuthorDetails";
import { BlogImageData } from "../BlogImageData";
import Input from "./Forms/Input";
import Select from "./Forms/Select";
import { addNewBlog } from "../app/blog/blogSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
const LazyTinyMce = lazy(() => import("./TinyMce"));

const AddBlog = () => {
    const {
        register,
        control,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm();
    const memoBlogDetails = useMemo(() => BlogImageData, []);
    const memoAuthorDetails = useMemo(() => AuthorDetails, []);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const newData = {
            id: uuidv4(),
            ...data,
        };
        const newBLog = dispatch(addNewBlog(newData));
        if (newBLog) {
            reset();
            toast.success("New Blog Successfully Added!", {
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

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <>
            <section className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-4/5 mx-auto">
                <div className="w-full">
                    <h1 className="font-bold text-center text-3xl uppercase underline">Add Blog</h1>
                    <form action="#" onSubmit={handleSubmit(onSubmit)} className="p-3" noValidate>
                        <div className="mb-4 space-y-3 w-full">
                            <Input
                                label="Title"
                                placeholder="Enter The Title"
                                register={register("title", {
                                    required: {
                                        value: true,
                                        message: "Title Is Required",
                                    },
                                    maxLength: {
                                        value: 150,
                                        message: "Title Should Be Less Then 50 Character",
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "Title Should Be Atleast 3 Character",
                                    },
                                })}
                                error={errors.title?.message}
                            />
                        </div>
                        <div className="w-full mb-4 space-y-3">
                            <Input
                                onInput={(e) => {
                                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                                }}
                                register={register("slug", { required: true })}
                                label="Slug"
                                readOnly
                                placeholder="Blog Slug"
                            />
                        </div>
                        <div className="w-full flex justify-center items-center gap-4">
                            <div className="mb-4 w-2/4 space-y-3">
                                <Select
                                    options={memoBlogDetails}
                                    label="Featured And Cover Image"
                                    title="Select The Featured And Cover Image"
                                    placeholder="Select The Featured And Cover Image"
                                    register={register("image", {
                                        required: {
                                            value: true,
                                            message: "Featured And Cover Image Is Required",
                                        },
                                    })}
                                    error={errors.image?.message}
                                />
                            </div>
                            <div className="mb-4 w-2/4 space-y-3">
                                <Select
                                    options={memoAuthorDetails}
                                    label="Author"
                                    title="Select The Author"
                                    placeholder="Select The Author"
                                    register={register("author", {
                                        required: {
                                            value: true,
                                            message: "Author Is Required",
                                        },
                                    })}
                                    error={errors.author?.message}
                                />
                            </div>
                        </div>
                        <div className="mb-4 space-y-3 w-2/4"></div>
                        <div className="mb-4 w-full space-y-3">
                            <Input
                                label="Short Description"
                                placeholder="Enter The Short Description"
                                register={register("shortDescription", {
                                    required: {
                                        value: true,
                                        message: "Short Description Is Required",
                                    },
                                })}
                                error={errors.shortDescription?.message}
                            />
                        </div>
                        <div className="mb-4 w-full space-y-3">
                            <label className="leading-7 text-base font-bold" htmlFor="title">
                                Description
                            </label>
                            <Suspense
                                fallback={
                                    <div className="p-1 5 min-w-full align-middle h-32 flex justify-center items-center">
                                        <h1 className="text-4xl font-bold underline">Loading Editor</h1>
                                    </div>
                                }
                            >
                                <LazyTinyMce
                                    name="description"
                                    control={control}
                                    rules={{
                                        required: "Blog Description Is Required",
                                    }}
                                />
                            </Suspense>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg flex justify-center items-center">
                                <FaRegEdit className="mr-2" /> Add To-Do
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default AddBlog;
