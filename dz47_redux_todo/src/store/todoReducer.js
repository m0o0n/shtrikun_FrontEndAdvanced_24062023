import { createSlice } from "@reduxjs/toolkit"

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
        addTodo: (state, {payload}) => {
            state.todos = [...state.todos, {id: (new Date()).getTime(), ...payload, isDone: false}]
        },
        toggleTodo: (state, {payload}) => {
            //Решил сделать сортировку по времени добавления по сути id это время в милисекунах
            const togled = state.todos.map(e => e.id === payload.id ? {...e, isDone: !e.isDone} : e)
            const done = togled.filter(e => e.isDone === true).sort((a, b) => a.id - b.id)
            const notDone = togled.filter(e => e.isDone === false).sort((a, b) => a.id - b.id)
            state.todos = [...done, ...notDone]
        }
    }
})

export const todoReducer = todoSlice.reducer
export const {addTodo, toggleTodo} = todoSlice.actions