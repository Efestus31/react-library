import { NavLink } from "react-router-dom";


export default function MainMenu() {

    <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
        </nav>
    </>


}