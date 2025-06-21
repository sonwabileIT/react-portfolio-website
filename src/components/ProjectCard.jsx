function ProjectCard({ projects }) {

	return (
		<>
			<div className="max-w-sm flex flex-col flex-grow border-2 border-gray-600 rounded-lg shadow-md">
				<img src={`${projects.image}`}
					className="h-auto border-b-2 border-gray-600 rounded-t-lg"
					width="400px"></img>
				<div className="p-5 flex flex-col flex-grow justify-between">
					<h2 className="text-3xl mb-2">{projects.title}</h2>
					<div className="flex flex-col flex-grow justify-between ">
						<p className="mb-2">

							{projects.description}
						</p>
						<div className="flex-none">
							<a href={`${projects.link}`}
								className="bg-orange-600 text-white px-4 py-3 inline-flex justify-center items-center text-center rounded-md shrink-0 ">
								Go to Github
							</a>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default ProjectCard;
