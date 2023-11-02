import { createSlice } from "@reduxjs/toolkit"
import { createTodoThunk, deleteTodoThunk, fetchAllTodosThunk, updateTodoThunk } from "./actions"
import { handleFulfilled, handlePending, handleRejected } from "./helpers"


const initialState = {
    todos: [
        { id: 0, title: 'Make todo list', body: "Complete homework №43", isDone: true },
    ],
    isLoading: false,
    err: ''
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        toggleTodo: (state, {payload}) => {
            //Решил сделать сортировку по времени добавления
            const togled = state.todos.map(e => e.id === payload.id ? {...e, isDone: !e.isDone} : e)
            const done = togled.filter(e => e.isDone === true).sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime())
            const notDone = togled.filter(e => e.isDone === false).sort((a, b) => (new Date(b.createdAt)).getTime() - (new Date(a.createdAt)).getTime())
            state.todos = [...done, ...notDone]
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllTodosThunk.fulfilled, (state, {payload}) => {
            state.todos = payload
        })
        .addCase(createTodoThunk.fulfilled, (state, {payload}) => {
            state.todos = [...state.todos, payload]
        })
        .addCase(updateTodoThunk.fulfilled, (state, {payload}) => {
            state.todos = state.todos.map(e => e.id === payload.id ? payload : e)
        })
        .addCase(deleteTodoThunk.fulfilled, (state, {payload}) => {
            state.todos = state.todos.filter(e => e.id !== payload.id)
        })
        .addMatcher(action => action.type.endsWith('/pending'), handlePending)
        .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
        .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
    }
})

export const todoReducer = todoSlice.reducer
export const {addTodo, toggleTodo} = todoSlice.actions