import Head from "next/head";
import { ReactNode } from "react";

function PageLayout({ children }: { children: ReactNode }) {
	return (
		<main>
			<Head>
				<title>Don Daniel | Software Engineer</title>
				<meta name="description" content="A Software artist." />
			</Head>

			<div className="flex flex-col">{children}</div>
		</main>
	);
}

export default PageLayout;
