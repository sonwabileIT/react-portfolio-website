import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useState } from "react"

function NavBar(){

    const [trigger, setTrigger] = useState(false);

    const toggleNavbar = () => {
        setTrigger(!trigger)
    }

    

    return(
        <>
        <div className="py-4">
            <div className="  mx-auto items-center max-w-screen-lg px-4">
                
               
                <nav className="flex flex-wrap justify-between items-center ">
                    <Link to="/">
                        <span className="text-black text-3xl">SonwabileIT</span>
                    </Link>
                    <button type="button" 
                        data-collapse-toggle="default-navbar"  
                        className=" items-center hover:bg-gray-100 p-2 rounded-lg  md:hidden" 
                        onClick={toggleNavbar}>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className= {trigger ? " w-full md:w-fit " : "hidden md:block md:w-auto"} id="default-navbar">
                        <ul className="flex flex-col p-4 gap-2 mt-4 md:flex-row md:gap-4 md:p-0 md:mt-0">
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
                    </div>
                </nav>
                
            </div>
        </div>
        </>
    )
}

export default NavBar