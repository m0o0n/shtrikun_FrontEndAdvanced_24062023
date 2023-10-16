import { baseInstance } from "."

export const fetchUsers = async () => {
    const data = await baseInstance.get('users')
    return data
}