import { ChevronDown } from "lucide-react";

const Welcome = () => {
	return (
		<div className="hidden md:flex bg-gray-800 p-5 justify-between items-center font-light">
			<p>Welcome to Needus &amp; Get the best product</p>
			<div className="flex items-center">
				<div className="flex items-center mr-5">
					<p className="mr-1">ENG</p>
					<ChevronDown className="h-4 w-4" />
				</div>
				<div className="border-r border-white h-4"></div>
				<div className="flex items-center ml-5">
					<p className="mr-1">USD</p>
					<ChevronDown className="h-4 w-4" />
				</div>
			</div>
		</div>
	);
};

export default Welcome;
