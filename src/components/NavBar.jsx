import { Link } from "react-router-dom"

function NavBar(){
    return(
        <>
        <div className="bg-teal-600">
            <div className="flex justify-between mx-auto items-center max-w-screen-lg px-4">
                <Link to="/">
                    <span className="text-white text-3xl">MyPortfolio</span>
                </Link>
                <nav>
                    <ul className="flex">
                        <li>
                            <Link to="/" className="block text-white text-center px-5 py-3 hover:text-orange-500">About</Link>
                        </li>
                        <li>
                            <Link to="/projects" className="block text-white text-center px-5 py-3 hover:text-orange-500">Projects</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavBar