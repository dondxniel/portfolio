function Tabs({
	tabs,
	activeTab,
	setActiveTab,
}: {
	tabs: string[];
	activeTab: string;
	setActiveTab: any;
}) {
	return (
		<div className="flex flex-row justify-center space-x-4">
			{tabs.map((item: any) => (
				<div
					key={item}
					className={`cursor-pointer transition-all duration-400 ${
						item === activeTab
							? "border-b-2 border-black"
							: "text-gray-400"
					}`}
					onClick={() => setActiveTab(item)}
				>
					{item}
				</div>
			))}
		</div>
	);
}

export default Tabs;
