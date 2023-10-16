import { NavLink, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <header>
                <nav>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/'>Home</NavLink>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/users'>Users</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </div>
    )

}