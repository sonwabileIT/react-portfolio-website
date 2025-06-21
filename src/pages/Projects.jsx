import ProjectCard from "../components/ProjectCard";
import projects from "../projects.json";

function Projects() {

	return (
		<>
			<div className="max-w-screen-xl mx-auto my-5">

				<div className="text-center">
					<h2 className="text-6xl font-semibold my-16">Projects</h2>
				</div>
				<div className="flex flex-row flex-wrap justify-center md:justify-center md:gap-9 gap-y-10 lg:justify-center lg:mx-auto">
					{
						projects.map((project) => (
							<ProjectCard key={project.id} projects={project} />
						))


					}

				</div>
			</div>

		</>
	)
}

export default Projects
