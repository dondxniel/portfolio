import Head from "next/head";
import { ReactNode } from "react";

function PageLayout({ children }: { children: ReactNode }) {
	return (
		<main>
			<Head>
				<title>Don Daniel | Software Engineer</title>
				<meta
					name="description"
					content="Here lies a software engineer that's genuinely passionate about building great stuff."
				/>
			</Head>
			<div className="flex flex-row">
				<div className="flex flex-column"></div>
				<div className="flex flex-column">{children}</div>
			</div>
		</main>
	);
}

export default PageLayout;
