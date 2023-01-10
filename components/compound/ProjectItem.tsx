import { useContext } from "react";
import { ProjectContext } from "../../context/Project.context";

function ProjectItem({
	item,
}: {
	item: { id: number; name: string; coverImage: string; images: string[] };
}) {
	const { showProject } = useContext(ProjectContext);
	return (
		<div className="group cursor-pointer" onClick={() => showProject(item)}>
			<div className="relative h-72 w-72 rounded-3xl border overflow-hidden">
				<img
					src={item.coverImage}
					alt={item.name}
					className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] group-hover:scale-105 transition-all duration-500"
				/>
				<div className="z-[1] absolute text-center bottom-0 right-0 left-0 text-white md:h-0 h-20 group-hover:h-20 transition-all duration-500 bg-gradient-to-b from-black/0 via-black/10 to-black/50 flex flex-col">
					<div className="mt-auto pb-2">{item.name}</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectItem;
