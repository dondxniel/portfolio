import { useState } from "react";
import { projects } from "../../constants/projects";
import ProjectItem from "../compound/ProjectItem";
import Tabs from "../compound/Tabs";
import HomeSectionHeader from "../simple/HomeSectionHeader";

function Projects() {
	const [activeTab, setActiveTab] = useState(Object.keys(projects)[0]);
	return (
		<div className="pb-20">
			<div className="px-3 py-10 flex flex-row justify-center">
				<div className="md:w-auto w-full">
					<HomeSectionHeader text="Projects" />
				</div>
			</div>
			<div className="text-center">
				<Tabs
					tabs={Object.keys(projects)}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				{Object.keys(projects).map(
					(item: string) =>
						activeTab === item && (
							<div
								key={item}
								className="flex flex-row justify-center flex-wrap md:space-x-10 space-x-0 md:space-y-0 space-y-10 p-10"
							>
								{projects[item].length > 0 ? (
									projects[item].map((item: any) => (
										<ProjectItem
											key={item.id}
											item={item}
										/>
									))
								) : (
									<div>
										Still compiling projects and their
										images...
									</div>
								)}
							</div>
						)
				)}
			</div>
		</div>
	);
}

export default Projects;
