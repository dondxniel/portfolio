import { useEffect, useState } from "react";

function Hero() {
	const [divAnimClass, setDivAnimClass] = useState(
		"h-0 w-0 border-y-4 border-white rounded-full duration-1000"
	);
	const [circleAnimClass, setCircleAnimClass] = useState("scale-0");
	const [imgBorderAnimClass, setImgBorderAnimClass] = useState(
		"border-4 border-transparent rounded-full"
	);
	useEffect(() => {
		setTimeout(() => {
			setDivAnimClass(
				"md:w-4/5 lg:w-3/5 xl:w-2/5  w-full h-0 border-y-4 border-white duration-1000"
			);
			setTimeout(() => {
				setCircleAnimClass("scale-100");
				setDivAnimClass(
					"md:h-[170px] h-[350px] md:w-4/5 lg:w-3/5 xl:w-2/5  w-full duration-1000 border-y-4 border-white"
				);
				setTimeout(() => {
					setCircleAnimClass("scale-0");
					setDivAnimClass(
						"md:h-[170px] h-[350px] md:w-4/5 lg:w-3/5 xl:w-2/5  w-full border-y-4 border-transparent duration-200"
					);
					setTimeout(() => {
						setImgBorderAnimClass(
							"border-4 border-white rounded-full"
						);
					}, 500);
				}, 1000);
			}, 1000);
		}, 1500);
	}, []);

	return (
		<div className="h-screen bg-[url('/assets/bg.jpeg')] bg-center bg-cover bg-no-repeat text-white flex flex-col justify-center items-center">
			<div
				className={`h-5 w-5 flex flex-row justify-center items-center border-4 border-white rounded-full duration-100 ${circleAnimClass}`}
			/>
			<div
				className={`flex md:flex-row flex-col items-center justify-center md:space-x-7 space-x-0 md:space-y-0 space-y-5 overflow-hidden ${divAnimClass}`}
			>
				<div
					className={`${imgBorderAnimClass} h-36 w-36 p-2 transition-all duration-500`}
				>
					<img
						src="/assets/circular-portrait.svg"
						alt="My Face"
						className="h-full w-full"
					/>
				</div>
				<div className="flex-1 flex flex-col md:text-start text-center">
					<h1 className="head">Hi, I&apos;m Daniel;</h1>
					<div className="font-fira-code mt-2">
						A Frontend and Mobile Engineer.
					</div>
				</div>
			</div>
			<div
				className={`h-5 w-5 flex flex-row justify-center items-center border-4 border-white rounded-full duration-100 ${circleAnimClass}`}
			/>
		</div>
	);
}

export default Hero;

/*
    variants={{
					hidden: {
						height: 0,
						opacity: 0,
					},
					show: {
						height: 150,
						opacity: 1,
					},
				}}
				initial={"hidden"}
				animate={"show"}
				transition={{
					delay: 0.5,
					type: "spring",
					stiffness: 560,
				}}*/
