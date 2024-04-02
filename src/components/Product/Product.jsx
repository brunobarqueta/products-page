import ImageGallery from "./ImageGallery";
import PriceAndActions from "./PriceAndActions";
import ProductDetails from "./ProductDetails";
import SizeOptions from "./SizeOptions";
import bigTv from "../../assets/big-tv.png";

const Product = () => {
	return (
		<div className="flex flex-col gap-8 w-full font-['Inter'] items-center mt-16 px-6">
			<div className="flex flex-col md:flex-row gap-8 w-full items-start">
				<div className="flex flex-col gap-6 md:w-1/2 items-center w-full">
					<div className="flex flex-col md:flex-row gap-3 w-full justify-center">
						<ImageGallery />
						<div className="flex justify-center items-center md:w-3/4 md:bg-gray-100 order-1 md:order-2">
							<img src={bigTv} alt="Main TV" className="object-contain h-auto" />
						</div>
					</div>
					<div className="text-sm font-light text-gray-500">*LG C2 42 (106cm) 4K Smart OLED evo TV</div>
				</div>
				<div className="flex flex-col gap-8 w-full md:w-2/5 items-start">
					<ProductDetails />
					<SizeOptions />
					<hr className="border-t border-gray-300 w-full hidden md:block" />
					<PriceAndActions />
				</div>
			</div>
		</div>
	);
};

export default Product;
