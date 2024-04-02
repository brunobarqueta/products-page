import React, { useState } from 'react';

const NewsletterSection = () => {
    const [subscribed, setSubscribed] = useState(false);

    return (
        <div className="flex flex-col lg:flex-row justify-between items-start w-full bg-opacity-50 bg-black pl-4 lg:px-20">
            <div className="flex flex-col py-6">
                <h2 className="text-xl md:text-2xl font-medium text-white">Join our newsletter and get offers</h2>
                <p className="text-md md:text-lg text-white">Sign up our newsletter</p>
            </div>
            <div className="flex items-center justify-center pr-12 pb-8 md:py-6">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full text-sm md:text-md lg:w-96 py-3 md:py-4 px-4 border border-gray-300 focus:outline-none"
                />
                <button
                    className={`transition-colors duration-300 w-48 text-white py-3 md:py-4 px-4 uppercase ${subscribed ? 'bg-black' : 'bg-red-600 hover:bg-red-700'}`}
                    onClick={() => setSubscribed(!subscribed)}
                >
                    {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
            </div>
        </div>
    );
};

export default NewsletterSection;
