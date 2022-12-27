import { blogUrl } from "../../constants/general";

function BlogItem({
	item,
}: {
	item: { title: string; coverImage: string; slug: string };
}) {
	return (
		<a
			href={blogUrl + item.slug}
			target="_blank"
			rel="noreferrer"
			className="text-inherit no-underline"
		>
			<div className="group cursor-pointer">
				<div className="h-56 w-full relative overflow-hidden bg-black rounded-2xl">
					<img
						src={item.coverImage}
						alt={item.title + " cover image"}
						className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] group-hover:scale-110 transition-all duration-200"
					/>
				</div>
				<div className="pt-3 group-hover:text-blue-300 transition-all duration-400">
					{item.title}
				</div>
			</div>
		</a>
	);
}

export default BlogItem;
