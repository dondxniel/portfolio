import { useEffect, useState } from "react";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function ProjectDetails({
	project,
}: {
	project: {
		name: string;
		coverImage: string;
		images: string[];
	};
}) {
	const [opacityClass, setOpacityClass] = useState("opacity-0");
	useEffect(() => {
		setOpacityClass("opacity-1");
	}, []);
	return (
		<div
			className={`bg-white h-[80vh] w-[80vw] rounded-3xl transition-all duration-500 ${opacityClass}`}
			onClick={(e: any) => e.stopPropagation()}
		>
			<div className="w-full h-10 px-7 flex flex-row items-center justify-center">
				{project.name}
			</div>
			<div className="p-7 flex flex-row justify-center items-center h-[calc(80vh-2.5rem)]">
				<div className="h-full w-full flex flex-col justify-center">
					<Swiper
						effect={"cards"}
						grabCursor={true}
						modules={[EffectCards]}
						className="mySwiper"
					>
						{project.images.map((item: any) => (
							<SwiperSlide key={item}>
								<img src={item} alt={project.name + item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
