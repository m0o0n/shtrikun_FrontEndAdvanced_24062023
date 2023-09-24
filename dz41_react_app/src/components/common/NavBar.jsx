import { NavLink } from "react-router-dom"

export const NavBar =()=>{
    return (
        <nav className="navigation">
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/catalog'>Catalog</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
            </ul>
        </nav>
    )
}