import axios from 'axios'

export const baseIstance = axios.create({
    baseURL: 'https://65325302d80bd20280f5578e.mockapi.io/todo/api/'
})


export const fetchAllTodos = async () => {
    const {data} = await baseIstance.get('todo')
    return data
}

export const createTodo = async (formData) => {
    const {data} = await baseIstance.post('todo', formData)
    return data
}

export const updateTodo = async (formData) => {
    console.log(formData)
    const {data} = await baseIstance.put(`todo/${formData.id}`, formData)
    return data
}

export const deleteTodo = async (id) => {
    const {data} = await baseIstance.delete(`todo/${id}`)
    return data
}