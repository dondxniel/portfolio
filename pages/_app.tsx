import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/effect-cards";
import ProjectContextContainer from "../context/Project.context";
import "../styles/globals.css";

// eslint-disable-next-line
import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ProjectContextContainer>
			<Component {...pageProps} />
		</ProjectContextContainer>
	);
}

export default MyApp;
