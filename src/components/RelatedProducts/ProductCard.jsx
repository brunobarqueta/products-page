import { ShoppingCart } from "lucide-react";
import grayHeart from "../../assets/gray-heart.svg";
import heart from "../../assets/heart.svg";

const ProductCard = ({ isNew, discount, hot, warranty, imageUrl, productName, price, oldPrice }) => {
    const badges = [
        { type: "NEW", color: "bg-green-500", show: isNew },
        { type: `-${discount}%`, color: "bg-red-500", show: discount },
        { type: "HOT", color: "bg-yellow-500", show: hot },
        { type: warranty, color: "bg-purple-500", show: warranty }
    ];

    return (
        <div>
            <div className="bg-gray-100 md:p-4 flex flex-col items-center justify-between">
                {badges.map((badge, index) => (
                    badge.show && (
                        <div key={index} className="w-full flex justify-between p-3 md:p-0">
                            <span className={`px-4 py-1 text-white text-xs rounded-full self-start ${badge.color}`}>{badge.type}</span>
                                <div className="flex items-center justify-center border border-gray-300 rounded-full p-2 md:p-4">
                                    <img src={badge.type === "NEW" ? heart : grayHeart } className="h-4 w-4 md:h-6 md:w-6" alt="Heart" />
                                </div>
                        </div>
                    )
                ))}
                <img className="w-60 h-60 mt-8 object-contain" src={imageUrl} alt={productName} />
                <button className="mt-4 mb-6 py-2 px-4 md:px-6 bg-white transition-colors duration-300 hover:bg-gray-100 text-gray-700 flex items-center">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to cart
                </button>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-lg mt-4">{productName}</div>
                <div className="flex items-baseline mt-1">
                    <span className="text-xl font-semibold">${price}</span>
                    {oldPrice && <span className="text-sm line-through text-gray-500 ml-2">${oldPrice}</span>}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
