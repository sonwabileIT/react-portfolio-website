function ProjectCard({projects}){
    
    return(
        <>
        <div className="max-w-sm border-2 border-gray-200 rounded-lg shadow-md">
            <img src={`${projects.image}`} 
            className="h-auto rounded-t-lg"
            width="400px"></img>
            <div className="p-4">
                <h2 className="text-3xl mb-2">{projects.title}</h2>
                <p className="mb-2 max-h-40">
                
                {projects.description}
                </p>
                <a href={`${projects.link}`}
                className="bg-orange-500 text-white px-4 py-3 inline-flex justify-center items-center text-center rounded-md shrink-0 ">
                    Go to Github
                </a>
            </div>
        </div>
        
        </>
    )
}

export default ProjectCard;