function Hero(){
    return(
        <>
        <section>
            <div className="max-w-screen-xl mx-auto p-5 mt-6">
                <div className="flex flex-col-reverse gap-5 md:gap-10  md:flex-row md:mx-12">
                    <div className="md:mr-12 ">
                        <h2 className="text-4xl mt-4 text-center md:text-left">About Me</h2>
                        <p className="text-left md:text-left my-4 md:mb-4">
                            I aim to be a Junior Software Developer that designs and develops the backend and frontend of Software and Web Applications, with the goal of being a Full Stack developer.
                            I mainly work in Web develoment and work alot in the Angular Framework + TailwindCSS and Typescript.
                            I also have experience in designing Frontends User Interfaces with design tools like Figma and Penpot.
                        </p>

                        <div className=" text-center my-6 md:text-left ">
                            <a href="https://github.com/sonwabileIT" target="_blank" rel="noopener noreferrer" 
                            className="bg-orange-500 px-4 py-3 inline-flex justify-center items-center text-center rounded-lg ">
                            <img className="w-6 h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            <span className="text-white ml-2">Go to my GitHub</span>
                            </a>

                            <a href="public/documents/Resume of Sonwabile Gxoyiya 2024.pdf" download 
                            className="bg-orange-500 px-4 py-3 inline-flex justify-center items-center text-center rounded-lg">
                            <img className="w-6 h-6" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                            <span className="text-white ml-2">Download my CV</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center shrink-0">
                        <img className="size-80 rounded-lg"  src="src/assets/Soso.jpg" alt="Soso" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;