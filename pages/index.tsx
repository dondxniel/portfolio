import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
import type { NextPage } from "next";
import ExperienceAndBlog from "../components/complex/ExperienceAndBlog";
import Hero from "../components/complex/Hero";
// import Projects from "../components/complex/Projects";
import SoftSkills from "../components/complex/SoftSkills";
import TechnicalSkills from "../components/complex/TechnicalSkills";
import PageLayout from "../components/layouts/PageLayout";
import { hashnodeUsername } from "../constants/general";

const Home: NextPage<{ blogPosts: any[] }> = ({ blogPosts }) => {
	return (
		<PageLayout>
			<Hero />
			<TechnicalSkills />
			<SoftSkills />
			<ExperienceAndBlog blogPosts={blogPosts} />
			{/* <Projects /> */}
		</PageLayout>
	);
};

export default Home;

export async function getServerSideProps() {
	const client = new ApolloClient({
		uri: "https://api.hashnode.com",
		cache: new InMemoryCache(),
	});
	const { data } = await client.query({
		query: gql`
			query {
				user(username: "${hashnodeUsername}") {
					publication {
						posts(page: 0) {
							title
							coverImage
							slug
						}
					}
				}
			}
		`,
	});
	return {
		props: {
			blogPosts: data.user.publication.posts,
		},
	};
}
