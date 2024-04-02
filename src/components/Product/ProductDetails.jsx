import Rating from "./Rating";

const ProductDetails = () => {
	const features = [
		"α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
		"Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
		"Hands-free Voice Control, Always Ready",
		"Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
		"Eye Comfort Display: Low-Blue Light, Flicker-Free",
	];

	return (
		<div className="flex flex-col gap-6 w-full items-start">
			<div className="flex flex-col justify-between gap-1 md:gap-3 w-full items-start">
				<div className="text-sm md:text-lg text-gray-900">
					Brand: <span className="font-light">LG</span>
				</div>
				<div className="text-sm md:text-lg text-gray-900">
					Model: <span className="font-light">OLED42C2PSA</span>
				</div>
				<div className="text-sm md:text-lg text-gray-900">
					Availability: <span className="font-light">Only 2 in Stock</span>
				</div>
				<div className="text-1xl md:text-3xl font-semibold uppercase text-gray-900 w-full">LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR</div>
				<Rating />
				<ul className="list-disc list-inside gap-4">
					{features.map((feature, index) => (
						<li key={index} className="text-sm font-light text-gray-900 mb-2">
							{feature}
						</li>
					))}
				</ul>
			</div>
			<hr className="border-t border-gray-300 w-full" />
		</div>
	);
};

export default ProductDetails;
