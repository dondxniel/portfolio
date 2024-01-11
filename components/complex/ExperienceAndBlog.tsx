import experience from "../../constants/experience";
import { blogUrl } from "../../constants/general";
import BlogItem from "../compound/BlogItem";
import HomeSectionHeader from "../simple/HomeSectionHeader";

const reversedExperience = experience.reverse();

function ExperienceAndBlog({ blogPosts }: { blogPosts: any[] }) {
	return (
		<div className='flex md:flex-row flex-col bg-gray-800 text-white pb-20 md:space-x-5'>
			<div className='pt-10 overflow-hidden rounded-r-[50px] md:w-[450px] w-full bg-white text-black'>
				<div className='px-3 flex flex-row justify-center'>
					<div className='md:w-auto w-full'>
						<HomeSectionHeader text='Experience' full />
					</div>
				</div>
				<div className='p-10 flex flex-col mt-5 font-light'>
					{reversedExperience.map((item: any) => {
						let present: boolean =
							item.duration.split('-')[1].trim().toLowerCase() ===
							'present';

						// const first = experience.reverse()[0].id === item.id;
						return (
							<div key={item.id} className='my-3'>
								<div
									className={`font-bold ${
										present
											? 'text-3xl'
											: 'text-gray-400 text-xl'
									}`}
								>
									{item.company}
									{present && '🔥'}
								</div>
								<div
									className={
										present
											? 'text-black text-sm'
											: 'text-gray-400 text-xs'
									}
								>
									<div>
										{item.type} {item.position} from{' '}
										{item.duration}
									</div>
									<div>{item.location}</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className='flex-1 pt-10'>
				<div className='px-5 flex flex-row justify-center'>
					<div className='md:w-auto w-full'>
						<HomeSectionHeader text='Blog' white />
					</div>
				</div>
				<div className='text-center py-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 px-3'>
					{blogPosts.map((item: any) => (
						<BlogItem key={item.coverImage} item={item} />
					))}
				</div>
				<div className='text-center'>
					<a
						href={blogUrl}
						target='_blank'
						rel='noreferrer'
						className='link hover:text-blue-300 transition-all duration-200 '
					>
						TAP HERE TO SEE ALL POSTS
					</a>
				</div>
			</div>
		</div>
	);
}

export default ExperienceAndBlog;
