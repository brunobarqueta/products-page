import React, { useState } from "react";

const InfoProduct = () => {
	const loremIpsum =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit ultricies turpis, ut blandit velit. Integer malesuada purus nec tincidunt fringilla. Aliquam erat volutpat. Morbi ultricies purus nec nunc iaculis, id consequat tortor accumsan. Sed dapibus vitae ex et interdum. Proin aliquam euismod mauris, in consectetur urna congue et.";
	const descriptionContent = (
		<>
			<span>
				The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because
				it has many gaming oriented features that are great for gamers.
			</span>
			<br />
			<br />
			<span>*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.</span>
			<br />
			<br />
			<span>
				**65C2 Stand model is at a minimum 39% lighter than the C1 series. <span className="text-red-700">More...</span>
			</span>
		</>
	);

	const tabsData = [
		{ id: 1, title: "Description", content: descriptionContent },
		{ id: 2, title: "Specification", content: loremIpsum },
		{ id: 3, title: "Reviews", content: loremIpsum },
	];

	const [activeTab, setActiveTab] = useState(1);

	return (
		<div className="flex flex-col items-center font-inter w-full gap-8 mt-16">
			<div className="w-full md:px-8">
				<div className="mb-4">
					<div className="flex flex-row justify-center gap-4 md:justify-between border-b border-[#d9d9d9] md:px-48">
						{tabsData.map((tab) => (
							<a
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={
									"text-xl font-medium pb-2 border-b-2 hover:border-red-600 focus:text-red-600 cursor-pointer " +
									(activeTab === tab.id ? "text-[#191919] border-b-2 border-red-600" : "text-[#191919] border-transparent")
								}
							>
								{tab.title}
							</a>
						))}
					</div>
				</div>
				<div className="text-md font-light text-[#191919] space-y-4 px-4 md:px-40">
					{tabsData.map((tab) => (
						<div key={tab.id} className={`px-4 sm:px-6 lg:px-8 ${activeTab === tab.id ? "" : "hidden"}`}>
							<p>{tab.content}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default InfoProduct;
