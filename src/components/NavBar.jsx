import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

function NavBar(){
    return(
        <>
        <div className="py-4">
            <div className="flex justify-between mx-auto items-center max-w-screen-lg px-4">
                <Link to="/">
                    <span className="text-black text-3xl">SonwabileIT</span>
                </Link>
                <nav>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink to="/" 
                            className={({isActive}) => 
                            isActive 
                                ? "block text-white text-center px-5 py-2 bg-orange-500 rounded-md"
                                : "block text-black text-center px-5 py-2 hover:bg-slate-300 rounded-md"}>
                            About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" 
                            className={({isActive}) => 
                                isActive 
                                    ? "block text-white text-center px-5 py-2 bg-orange-500 rounded-md"
                                    : "block text-black text-center px-5 py-2 hover:bg-slate-300 rounded-md"}>Projects</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavBar