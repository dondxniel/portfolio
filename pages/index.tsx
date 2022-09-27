import type { NextPage } from "next";
import Image from "next/image";
import PageLayout from "../components/layouts/PageLayout";

const Home: NextPage = () => {
	return (
		<PageLayout>
			<div className="flex flex-col h-screen w-screen justify-center align-center text-center">
				<h1 className="text-5xl">Hi, Daniel Here.</h1>
				<p>
					This portfolio site is currently undergoing a redesign,{" "}
					<br />
					so please bear with me for a week or two. 🤲
				</p>
				<br />
				<br />
				<p className="flex flex-col justify-center align-center text-center">
					Meanwhile, you can check me out on LinkedIn
					<a
						className="mt-3"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/don-daniel-748414190"
					>
						<Image
							src={"/assets/LinkedIn_logo.png"}
							width={30}
							height={30}
						/>
					</a>
				</p>
				<p className="flex flex-col justify-center align-center text-center mt-5">
					Or Github
					<a
						className="mt-3"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/dondxniel"
					>
						<Image
							src={"/assets/Github-logo.png"}
							width={30}
							height={30}
						/>
					</a>
				</p>
			</div>
		</PageLayout>
	);
};

export default Home;
