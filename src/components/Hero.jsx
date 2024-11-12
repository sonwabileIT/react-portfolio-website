function Hero(){
    return(
        <>
        <section>
            <div className="bg-slate-200">
                <div className="max-w-screen-xl mx-auto px-5 py-10 ">
                    <div className="flex flex-col-reverse gap-5 justify-between  md:flex-row md:mx-24">
                        <div className="my-auto  md:mr-12 ">
                            <h2 className="invisible md:visible font-medium">Web Development | Software Development</h2>
                            <h2 className="text-6xl font-semibold mt-2 text-center md:text-left">Sonwabile Gxoyiya</h2>
                            <h2 className="text-center text-xl md:text-left my-2 md:mb-4">
                                Junior Software Developer interested in developing Web Applications.
                                Experience with HTML, CSS, JavaScript, TypeScript, Angular and learning React.js 
                            </h2>

                            <div className="flex flex-col max-w-sm gap-3 mx-auto text-center my-6 md:text-left md:flex-row md:gap-2 md:mx-0 ">
                                <a href="https://github.com/sonwabileIT" target="_blank" rel="noopener noreferrer" 
                                className="bg-orange-500 px-4 py-3 inline-flex justify-center items-center text-center rounded-md shrink-0 ">
                                <svg width="22" height="24" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" />
                                </svg>
                                <span className="text-white ml-2">Go to my GitHub</span>
                                </a>

                                <a href="./Sonwabile Gxoyiya Resume Website.pdf" 
                                target="_blank" rel="noopener noreferrer"
                                className="bg-orange-500 px-4 py-3 inline-flex justify-center items-center text-center rounded-md shrink-0">
                                <svg width="22" height="24" data-slot="icon" data-darkreader-inline-fill="" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"></path>
                                    <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z"></path>
                                </svg>
                                <span className="text-white ml-2">View my CV</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center shrink-0">
                            <img className="size-80 rounded-lg"  src="Soso.jpg" alt="Soso" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero;