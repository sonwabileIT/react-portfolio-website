function WorkHistory(){
    return(
        <>
        <section>
            <div className="max-w-screen-xl mx-auto my-10">
                <div className="md:mx-12">
                    <h2 className="text-center text-4xl mb-10">My Work History</h2>
                    <ol className="relative space-y-5" >
                        <li className=" p-5 rounded-md">
                            <span className=" p-2 md:p-4 bg-orange-600 absolute flex items-center rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-7 h-7 md:w-10 md:h-10 shrink-0 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                            </span>
                            <div className=" pl-14 md:pl-24">
                                <h3 className="text-2xl">Kernet (Pty) Ltd</h3>
                                <h4 className="text-lg">16 January 2023 - Current</h4>
                                <h4 className="text-lg">Role <b>·</b> Software Developer Internship</h4>
                                <br/>
                                <h4 className="text-2xl">Projects under Kernet</h4>
                                <br/>
                                <ul className="space-y-5">
                                    <li>
                                        <h2 className="text-xl text-orange-600">Recruitment Web Application</h2>
                                        <p>An in-house web application in Angular used by recruiters to recruit newly graduates stored and verified on Kernet Database. I am tasked to help with bug fixes for the User interface and make visual changes where applicable.</p>
                                    </li>
                                    <li>
                                        <h2 className="text-xl text-orange-600">Kernet Landing page website</h2>
                                        <p>
                                            I was tasked to taking the desktop design and converting it to be viewed on mobile. I created a design draft on Figma.
                                        </p>
                                    </li>
                                    <li>
                                        <h2 className="text-xl text-orange-600">Thando Mgqolozana website</h2>
                                        <p>I was tasked with creating a design draft for the mobile User Interface for the website on Figma.</p>
                                    </li>
                                    <li>
                                        <h2 className="text-xl text-orange-600">Funeral Insurance Web Application</h2>
                                        <p>I am part of a team helping to develop the application for a client.</p>
                                    </li>
                                </ul>
                            </div>  
                        
                        </li>
                    
                    </ol>
                </div>
            </div>
        </section>
        </>
    )
}

export default WorkHistory