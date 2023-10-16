import { useState } from "react"
import { useEffect } from "react"
import { fetchUsers } from "../api/users"
import { User } from "../components/User"

const Users = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const { data } = await fetchUsers()
        setUsers(data)
    }
    useEffect(() => { getUsers() }, [])
    return (
        <div>
            {
                users.map(({ id, name, phone, username, email }) =>
                    <User
                        key={id}
                        id={id}
                        name={name}
                        phone={phone}
                        username={username}
                        email={email}
                    />
                )
            }
        </div>
    )
}

export default Users