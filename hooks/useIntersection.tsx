import { RefObject, useEffect, useState } from "react";

const useIntersection = (element: RefObject<any>) => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			setIsVisible(entries[entries.length - 1].isIntersecting);
		});

		element.current && observer.observe(element.current);

		const elementsCurrent = element.current;

		return () => elementsCurrent && observer.unobserve(elementsCurrent);
	});
	return isVisible;
};

export default useIntersection;
