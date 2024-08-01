function ProjectCard(props){
    return(
        <>
        <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow-md">
            <img src="src/assets/ReactPortfolioWebsite.png" 
            className="rounded-t-lg"
            width="400px"></img>
            <div className="p-4">
                <h2 className="text-3xl mb-2">Project Name</h2>
                <p className="mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a className="bg-orange-500 text-white px-4 py-3 inline-flex justify-center items-center text-center rounded-md shrink-0 ">
                    Go to Github
                </a>
            </div>
        </div>
        
        </>
    )
}

export default ProjectCard;