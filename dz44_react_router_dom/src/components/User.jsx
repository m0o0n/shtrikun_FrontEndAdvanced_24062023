import { NavLink } from "react-router-dom"

export const User = ({id, name, email, username, phone}) => {
    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <span>Email: {email}</span>
            <span className="user_login">User name: @{username}</span>
            <span>Phone: {phone}</span>
            <NavLink to={`/user/${id}/albums`}><button>See user albums</button></NavLink>
        </div>
    )
}
