import { Render } from "acid-ui";
import type { NextPage } from "next";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Lottie from "react-lottie";
import PageLayout from "../components/layouts/PageLayout";
import construction from "../public/assets/lotties/construction.json";

const Home: NextPage = () => {
	return (
		<PageLayout>
			<div className="flex flex-col h-screen w-screen justify-center align-center text-center border border-1">
				<Container>
					<Row className="justify-content-center mb-5">
						<Col
							md={5}
							style={{
								height: "200px",
								position: "relative",
							}}
						>
							<Render type="block">
								<Lottie
									options={{
										loop: true,
										autoplay: true,
										animationData: construction,
									}}
									height={200}
								/>
							</Render>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Col md={5}>
							<Render type="inline">
								<h1 className="text-5xl">Hi, Daniel Here.</h1>
								<p>
									This portfolio site is currently undergoing
									a redesign, <br />
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

								<p className="flex flex-col justify-center align-center text-center mt-3">
									Or Github
									<a
										className="mt-1"
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
							</Render>
						</Col>
					</Row>
				</Container>
			</div>
		</PageLayout>
	);
};

export default Home;
