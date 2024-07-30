function NavBar(){
    return(
        <>
        <div className="bg-teal-600">
            <div className="flex justify-between mx-auto items-center max-w-screen-lg ">
                <a href="#">
                    <span className="text-white text-lg">MyPortortfolio</span>
                </a>
                <nav>
                    <ul className="flex">
                        <li>
                            <a href="about.html" className="block text-white text-center px-5 py-3 hover:text-orange-500">About</a>
                        </li>
                        <li>
                            <a href="projects.html" className="block text-white text-center px-5 py-3 hover:text-orange-500">Projects</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavBar