import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
    },
    reducers: {
        addNewTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        dragAndDrop: (state, action) => {
            state.tasks = state.tasks.filter((task) => (task.id === action.payload.id ? (task.status = action.payload.status) : task.status));
        },
        reOrderTask: (state, action) => {
            state.tasks = action.payload;
        },
    },
});

export const { addNewTask, removeTask, dragAndDrop, reOrderTask } = taskSlice.actions;

export default taskSlice.reducer;
