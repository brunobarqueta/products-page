import { ChevronDown, List } from "lucide-react";

import headset from "../../assets/headset.png";

const Navigation = () => {
	return (
		<div className="hidden md:flex bg-gray-800 justify-between items-center pr-20">
			<div className="flex items-center bg-red-600 py-5 px-16 cursor-pointer">
				<List className="h-6 w-6" />
				<button className="text-2xl ml-6">
					All Categories
					<ChevronDown className="h-6 w-6 inline ml-5" />
				</button>
			</div>
			<div className="flex items-center text-md font-light text-white">
				<button className="uppercase mr-2">Home</button>
				<ChevronDown className="h-4 w-4 mr-8 cursor-pointer" />
				<button className="uppercase mr-2">About</button>
				<ChevronDown className="h-4 w-4 mr-8 cursor-pointer" />
				<button className="uppercase text-red-600 mr-2">Product</button>
				<ChevronDown className="text-red-600 h-4 w-4 mr-8 cursor-pointer" />
				<button className="uppercase mr-2">Pages</button>
				<ChevronDown className="h-4 w-4 mr-8 cursor-pointer" />
				<button className="uppercase mr-2">Contact</button>
				<ChevronDown className="h-4 w-4 cursor-pointer" />
			</div>
			<div className="flex items-center">
				<img src={headset} alt="phone" className="h-8 w-8 mr-3" />
				<div className="text-sm uppercase">
					<p className="font-extralight m-1">Contact Us 24/7</p>
					<p className="text-lg ml-2 tracking-wide">+12012987481</p>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
