import { technicalSkills } from "../../constants/skills";
import HomeSectionHeader from "../simple/HomeSectionHeader";

function TechnicalSkills() {
	return (
		<div className="py-3 pb-5 flex flex-col justify-center">
			<div className="mb-10 flex flex-row justify-center">
				<div className="md:w-auto w-full">
					<HomeSectionHeader text="Technical Skills" />
				</div>
			</div>
			<div className="flex- flex flex-row items-start justify-center flex-wrap">
				{technicalSkills.map((item: any) => (
					<div
						key={item.id}
						className="flex flex-col items-center mx-2 my-1"
					>
						<img src={item.icon} alt={item.name} className="h-16" />
						<div className="font-fira-code text-sm mt-2">
							{item.name}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default TechnicalSkills;
