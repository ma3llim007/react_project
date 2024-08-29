import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { IoIosCloseCircle } from "react-icons/io";
import { Categorys } from "./Categorys";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateExpense } from "../features/ExpenseSlice";
import { toast } from "react-toastify";

const EditExpenseModel = ({ closeEditModel, editExpense }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            id: editExpense?.id || "",
            title: editExpense?.title || "",
            category: editExpense?.category || "",
            amount: editExpense?.amount || "",
        },
    });
    const dispatch = useDispatch();

    const handleEditData = (data) => {
        let newData = {
            ...data,
            date: new Date().toLocaleString(),
        };
        dispatch(updateExpense(newData));

        closeEditModel();
    };

    const memoCategorys = useMemo(() => Categorys, []);
    return (
        <>
            <section className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
                <div className="text-white bg-gray-900 rounded-lg flex flex-col px-4 py-4 w-2/4 mx-auto">
                    <div className="w-full">
                        <div className="flex justify-between items-center border-b border-white">
                            <h1 className="font-bold text-center text-3xl uppercase mb-2">Edit Expense</h1>
                            <IoIosCloseCircle className="text-3xl cursor-pointer" onClick={() => closeEditModel()} />
                        </div>
                        <form action="#" onSubmit={handleSubmit(handleEditData)} className="p-3" noValidate>
                            <div className="mb-4 w-full space-y-3">
                                <label className="leading-7 text-base font-bold" htmlFor="title">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    placeholder="Enter The To-Do Title"
                                    {...register("title", {
                                        required: {
                                            value: true,
                                            message: "Title Is Required",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Title Should Be Less Than 50 Characters",
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Title Should Be At Least 3 Characters",
                                        },
                                    })}
                                />
                                <input type="hidden" id="id" name="id" value={editExpense?.id || ""} />
                            </div>

                            <div className="mb-4 w-full space-y-3">
                                <label className="leading-7 text-base font-bold" htmlFor="category">
                                    Category
                                </label>
                                <select
                                    name="category"
                                    id="category"
                                    className="w-full appearance-none bg-opacity-20 border text-base text-white rounded-lg focus:outline-none py-2 px-3 leading-8 transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-slate-800"
                                    {...register("category", {
                                        required: {
                                            value: true,
                                            message: "Category Is Required",
                                        },
                                    })}
                                >
                                    <option value="">Select A Category</option>
                                    {memoCategorys.map((category) => (
                                        <option key={category?.id} value={category?.name}>
                                            {category?.name}
                                        </option>
                                    ))}
                                </select>
                                <p className="font-semibold text-red-600">{errors.category?.message}</p>
                            </div>

                            <div className="mb-4 w-full space-y-3">
                                <label className="leading-7 text-base font-bold" htmlFor="amount">
                                    Amount
                                </label>
                                <input
                                    type="text"
                                    id="amount"
                                    name="amount"
                                    className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    placeholder="Enter The Expense Amount"
                                    {...register("amount", {
                                        required: {
                                            value: true,
                                            message: "Amount Is Required",
                                        },
                                        pattern: {
                                            value: /^\d+(\.\d{1,2})?$/,
                                            message: "Invalid Amount Format, This Access Only Numeric Value",
                                        },
                                    })}
                                />
                                <p className="font-semibold text-red-600">{errors.amount?.message}</p>
                            </div>
                            <div className="flex justify-center">
                                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg flex justify-center items-center">
                                    <FaRegEdit className="mr-2" /> Update Expense
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EditExpenseModel;
