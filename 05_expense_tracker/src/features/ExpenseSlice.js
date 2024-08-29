import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const ExpenseSlice = createSlice({
    name: "expenses",
    initialState: {
        values: [],
    },
    reducers: {
        addNewExpense: (state, action) => {
            state.values.push(action.payload);
            toast.success("New Expense Added Successfully !", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        },
        updateExpense: (state, action) => {
            state.values = state.values.map((stat) => (stat.id === action.payload.id ? action.payload : stat));
            toast.success("Expense Update Successfully !", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        },
        DeleteExpense: (state, action) => {
            state.values = state.values.filter((expense) => expense.id != action.payload);
            toast.warning("Expense Deleted Successfully!", {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        },
    },
});

export const { addNewExpense, updateExpense, DeleteExpense } = ExpenseSlice.actions;

export default ExpenseSlice.reducer;
