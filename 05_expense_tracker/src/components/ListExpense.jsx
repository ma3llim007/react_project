import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteExpense } from "../features/ExpenseSlice";
import EditExpenseModel from "./EditExpenseModel";

const ListExpense = () => {
    const expenses = useSelector((state) => state.expenses.values);
    const dispatch = useDispatch();
    const totalExpense = expenses.reduce((acc, expense) => acc + Number(expense.amount), 0);
    const [isOpenEditModel, setIsOpenEditModel] = useState(false);
    const [editExpense, setEditExpense] = useState(null);

    const closeEditModel = () => {
        setIsOpenEditModel(false);
        setEditExpense(null);
    };

    const editModelOpen = (expense) => {
        setIsOpenEditModel(true);
        setEditExpense(expense);
    };
    return (
        <>
            <div className="container mx-auto mt-5">
                {expenses.length > 0 ? (
                    <div className="flex flex-col bg-gray-900 rounded-lg text-white">
                        <div className="overflow-y-scroll">
                            <div className="p-1 5 min-w-full inline-block align-middle">
                                <div className="overflow-y-scroll">
                                    <table className="min-w-full divide-y divide-gray-200 cursor-grabbing">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                                                    Amount
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start text-balance uppercase">
                                                    DateTime
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center text-balance uppercase">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 overflow-y-scroll">
                                            {expenses.map((expense, index) => {
                                                return (
                                                    <tr key={expense?.id}>
                                                        <td className="px-6 py-4 text-sm font-medium text-white">{index + 1}</td>
                                                        <td className="px-6 py-4 text-sm font-medium text-white">{expense?.title}</td>
                                                        <td className="px-6 py-4 text-sm text-white text-wrap">
                                                            <span className="text-sm px-3 py-1 rounded font-bold bg-purple-800 text-white">{expense?.category}</span>
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-white text-wrap">{Number(expense?.amount).toFixed(2)}</td>
                                                        <td className="px-6 py-4 text-sm text-white text-wrap">{expense?.date}</td>
                                                        <td className="px-6 py-4 text-end text-sm font-medium flex justify-center items-center">
                                                            <button type="button" onClick={() => editModelOpen(expense)} className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2">
                                                                Edit
                                                            </button>{" "}
                                                            |
                                                            <button type="button" onClick={() => dispatch(DeleteExpense(expense?.id))} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-2">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                            <tr>
                                                <td colSpan={7} className="px-6 py-4 text-xl font-bold text-white">
                                                    Total Expense Amount: {totalExpense.toFixed(2)}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col bg-gray-900 rounded-lg text-white cursor-pointer">
                        <div className="overflow-y-scroll">
                            <div className="p-1 5 min-w-full align-middle h-32 flex justify-center items-center">
                                <h1 className="text-4xl font-bold underline">Expense List Is Empty</h1>
                            </div>
                        </div>
                    </div>
                )}
                {isOpenEditModel && <EditExpenseModel editExpense={editExpense} setEditExpense={setEditExpense} closeEditModel={closeEditModel} />}
            </div>
        </>
    );
};

export default ListExpense;
