import { createContext, ReactNode, useState } from "react";
import ProjectDetails from "../components/complex/ProjectDetails";

export const ProjectContext = createContext<any>({
	project: null,
	showProject: () => null,
	removeProject: () => null,
});

function ProjectContextContainer({ children }: { children: ReactNode }) {
	const [project, setProject] = useState(null);

	const showProject = (passedProject: any) => {
		setProject(passedProject);
	};

	const removeProject = () => {
		setProject(null);
	};

	const contextValue = {
		project,
		showProject,
		removeProject,
	};
	return (
		<ProjectContext.Provider value={contextValue}>
			<div>
				{project && (
					<div
						className="fixed z-[99999] top-0 left-0 right-0 bottom-0 bg-black/50 flex flex-col justify-center items-center"
						onClick={removeProject}
					>
						<ProjectDetails project={project} />
					</div>
				)}
				{children}
			</div>
		</ProjectContext.Provider>
	);
}

export default ProjectContextContainer;
