import { ChevronDown, CircleUserRound, Heart, Menu, Search, ShoppingCart } from "lucide-react";

import { useState } from "react";

const MidSection = () => {
	const [showCategories, setShowCategories] = useState(false);

	const toggleCategories = () => {
		setShowCategories(!showCategories);
	};

	const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

	return (
		<div className="flex justify-between items-end md:items-center px-4 pt-8 pb-4 md:py-12 md:pl-12 pr-2">
			<div className="md:hidden bg-red-600 text-white p-2">
				<Menu className="w-8 h-8" />
			</div>
			<h1 className="text-3xl md:text-5xl text-black font-bold md:mr-24 md:font-insconsolata">
				Needus<span className="text-red-600">.</span>
			</h1>
			<div className="hidden md:flex flex-1 justify-center items-center">
				<div className="border-2 border-gray-200 rounded flex-1 flex items-center px-4 py-0.5 mx-10">
					<input type="text" placeholder="Search Products" className="flex-1 font-light bg-transparent outline-none text-gray-400 text-xl pl-6 " />
					<button className="bg-gray-800 p-6">
						<Search className="h-5 w-5" />
					</button>

					<button className="flex items-center ml-6 mr-12" onClick={toggleCategories}>
						<p className="text-black text-xl font-light mr-1">All Categories</p>
						<ChevronDown className="text-black h-5 w-5" />
					</button>
					<div className="text-black text-xl ml-10 font-light">
						Login <span className="text-gray-200">|</span> Signup
					</div>
				</div>
			</div>
			<div className="flex items-center text-black">
				<Search className="md:hidden h-6 w-6 mr-2 cursor-pointer" />
				<CircleUserRound className="md:hidden h-6 w-6 mr-2 cursor-pointer" />
				<Heart className="h-6 w-6 mr-2 md:mr-5 cursor-pointer" />
				<div className="relative mr-4 md:mr-6 cursor-pointer">
					<ShoppingCart className="h-6 w-6" />
					<span className="absolute left-3 bottom-3 bg-red-600 text-white rounded-full px-2 py-1 text-xs font-semibold">6</span>
				</div>
			</div>

			{showCategories && (
				<div className="absolute right-64 top-32 w-64 bg-white mt-12 py-6 px-6 shadow-lg rounded-md">
					{categories.map((category, index) => (
						<div key={index}>
							<button className="block text-gray-800 text-xl font-light hover:text-black hover:bg-gray-200 py-1">{category}</button>
							{index !== categories.length - 1 && <hr className="my-3 border-gray-300" />}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default MidSection;
