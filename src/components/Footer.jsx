function Footer(){
    return(
        <>
        <footer className="bg-teal-600 text-white">
            <div className="max-w-screen-xl mx-auto p-5">
                <div className="md:mx-12">
                    <div className="flex flex-col md:flex-row md:gap-12">
                        <div className="flex flex-col ">
                            <h2 className="text-2xl mb-4">Links</h2>
                            <ul className="my-3">
                                <li>
                                    <a href="https://www.linkedin.com/in/sonwabile-gxoyiya-b005b123a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://github.com/sonwabileIT" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col">
                        <h2 className="text-2xl mb-4">Pages</h2>
                        <ul className="my-3">
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="projects.html">Projects</a>
                            </li>
                        </ul>
                        </div>

                        <div className="flex flex-col">
                            <h2 className="text-2xl mb-4">Emails</h2>
                            <ul className="my-3">
                                <li>
                                    <p>sonwabilegxoyiya@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex justify-between mt-5">
                        <p>Made by Sonwabile Gxoyiya 2024</p>
                        <a href="https://github.com/sonwabileIT" target="_blank" rel="noopener noreferrer">
                            <img className="w-6 h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        
        </>
    )
}

export default Footer