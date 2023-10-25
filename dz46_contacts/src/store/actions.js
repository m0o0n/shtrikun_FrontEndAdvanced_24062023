import { fetchUsers } from "../api"

export const getUsersThunk = () => {
    return async (dispatch) => {
        const data = await fetchUsers()
        // Тут данные не такого вида как предпологаються в начале ТЗ, 
        //по этому делаю преобразование под initialState в СontactReducer
        //теперь для данных из jsonplaceholder поле username будет эквивалентно lastname
        //поле phone будет эквивалентно number
        const parsedData = data.map(({ id, name, phone, username }) => ({ id, name, number: phone, lastname: username }))
        dispatch({ type: 'GET_USERS', payload: parsedData })
    }
}