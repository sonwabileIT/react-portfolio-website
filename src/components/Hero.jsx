function Hero(){
    return(
        <>
        <section>
            <div className="bg-slate-200">
                <div className="max-w-screen-xl mx-auto px-5 py-10 ">
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
                                <svg width="22" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" />
                                </svg>
                                <span className="text-white ml-2">Go to my GitHub</span>
                                </a>

                                <a href="public/documents/Resume of Sonwabile Gxoyiya 2024.pdf" download 
                                className="bg-orange-500 px-4 py-3 inline-flex justify-center items-center text-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <span className="text-white ml-2">Download my CV</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center shrink-0">
                            <img className="size-80 rounded-lg"  src="src/assets/Soso.jpg" alt="Soso" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;