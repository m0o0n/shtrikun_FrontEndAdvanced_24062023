import { createAsyncThunk } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fetchAllTodos, updateTodo } from "../../api";

export const fetchAllTodosThunk = createAsyncThunk(
    'todo/fetchAll',
    async (_, thunkApi) => {
        try {
            const data = await fetchAllTodos()
            return data
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)

export const createTodoThunk = createAsyncThunk(
    'todo/create',
    async (formData, thunkApi) => {
        try {
            const data = await createTodo(formData)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)

export const updateTodoThunk = createAsyncThunk(
    'todo/update',
    async (formData, thunkApi) => {
        try {
            const data = await updateTodo(formData)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)

export const deleteTodoThunk = createAsyncThunk(
    'todo/delete',
    async (id, thunkApi) => {
        try {
            const data = await deleteTodo(id)
            return data
        } catch (err) {
            return thunkApi.rejectWithValue(err.message)
        }
    }
)