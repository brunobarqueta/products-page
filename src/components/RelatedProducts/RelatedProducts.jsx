import ProductCard from "./ProductCard";
import tv1 from "../../assets/tv1.png";
import tv2 from "../../assets/tv2.png";
import tv3 from "../../assets/tv3.png";
import tv4 from "../../assets/tv4.png";

const RelatedProducts = () => {
	return (
		<div className="container mx-auto md:py-12 px-4 md:px-6 lg:px-8 font-inter">
			<div className="mb-10">
				<h2 className="text-3xl font-medium text-[#191919] my-16 text-center">Related Products</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					<ProductCard isNew imageUrl={tv1} productName="Sony BRAVIA XR Android Tv" price="800.22" oldPrice="1000.66" />
					<ProductCard discount="10" imageUrl={tv2} productName="Mi P1 Smart Android HD TV" price="400.00" />
					<div className="hidden md:flex">
						<ProductCard hot imageUrl={tv3} productName="Konka OLED Android Tv" price="700.00" />
					</div>
					<div className="hidden md:flex">
						<ProductCard warranty="2 Years Warranty" imageUrl={tv4} productName="TCL Roku Android Tv" price="800.00" />
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-6 mb-8 gap-4 md:gap-0">
				<span className="h-3 w-3 bg-red-600 rounded-full mx-1"></span>
				<span className="h-3 w-3 bg-gray-200 rounded-full mx-1"></span>
				<span className="h-3 w-3 bg-gray-200 rounded-full mx-1"></span>
				<span className="h-3 w-3 bg-gray-200 rounded-full mx-1"></span>
			</div>
		</div>
	);
};

export default RelatedProducts;
