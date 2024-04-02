import Buttons from "./Buttons";

const PriceAndActions = () => {
	return (
		<div className="flex flex-col md:flex-row md:gap-8 w-full items-start">
			<div className="flex flex-col gap-3 w-full">
				<div className="uppercase text-sm text-gray-900">USD (incl. of all taxes)</div>
				<div className="flex">
					<div className="text-3xl uppercase text-gray-900 mr-3">$600.72</div>
					<div className="line-through text-2xl uppercase text-gray-300 mt-1">$800.00</div>
				</div>
				<div className="pr-8">
					<button className="hidden md:block bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white text-lg py-4 px-6 w-full">Buy Now</button>
				</div>
			</div>

			<Buttons />
		</div>
	);
};

export default PriceAndActions;
