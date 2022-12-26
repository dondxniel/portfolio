import { useRef } from "react";
import useIntersection from "../../hooks/useIntersection";

function HomeSectionHeader({
	text,
	white,
	left,
	full,
}: {
	text: string;
	white?: boolean;
	left?: boolean;
	full?: boolean;
}) {
	const headerRef = useRef(null);
	const headerInView = useIntersection(headerRef);

	return (
		<div
			className={`head pb-4 border-b-4 md:px-5 px-2 ${
				white ? "border-white" : "border-black"
			} ${
				left ? "text-start" : "text-center"
			} overflow-hidden whitespace-nowrap transition-all duration-[2000ms]  ${
				headerInView ? (full ? "w-full" : " w-full") : "w-0"
			}`}
			ref={headerRef}
		>
			{text}
		</div>
	);
}

export default HomeSectionHeader;
