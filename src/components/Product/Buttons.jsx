import { Minus, Plus } from "lucide-react";

import { useState } from "react";

const Buttons = () => {
    const [counter, setCounter] = useState(1);

    return (
        <div className="flex flex-row md:flex-col gap-3 w-full justify-center items-center md:px-16">
            <div className="border border-gray-300 flex gap-2 py-2 px-2 md:gap-8 md:py-4 md:px-6 items-center">
                <button className="focus:outline-none" onClick={() => setCounter(prevCounter => Math.max(1, prevCounter - 1))}>
                    <Minus className="w-4 h-4 md:w-6 md:h-6" />
                </button>
                <span className="md:text-3xl uppercase text-gray-900">{counter}</span>
                <button className="focus:outline-none" onClick={() => setCounter(prevCounter => prevCounter + 1)}>
                    <Plus className="w-4 h-4 md:w-6 md:h-6" />
                </button>
            </div>
            <button className="md:hidden bg-red-600 hover:bg-red-700 transition-colors duration-300 text-white text-lg py-2 md:py-4 px-6 w-full">Buy Now</button>
            <button className="border border-red-600 text-red-600 transition-colors duration-300 hover:bg-gray-100 text-lg py-2 md:py-4 w-full">Add to Cart</button>
        </div>
    );
};

export default Buttons;
