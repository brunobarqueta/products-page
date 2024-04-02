import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  return (
    <div className="w-full font-inconsolata text-white">
      <div className="bg-gray-800 p-5 flex justify-between items-center">
        <p>Welcome to Needus &amp; Get the best product</p>
        <div className="flex items-center">
          <div className="flex items-center mr-5">
            <p className="mr-1">ENG</p>
            <img
              src="https://file.rendit.io/n/uGJ9AHO2AoGQtLvMcfkI.svg"
              alt="dropdown"
              className="h-4 w-4"
            />
          </div>
          <div className="border-r border-white h-4"></div>
          <div className="flex items-center ml-5">
            <p className="mr-1">USD</p>
            <img
              src="https://file.rendit.io/n/umtvMC0fdbmCd8KsyKhe.svg"
              alt="dropdown"
              className="h-4 w-4"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-5">
        <h1 className="text-5xl text-black font-bold">
          Needus<span className="text-red-600">.</span>
        </h1>
        <div className="flex flex-1 justify-center items-center">
          <div className="border-2 border-gray-200 rounded flex-1 flex items-center px-4 py-2 mx-10">
            <input
              type="text"
              placeholder="Search Products"
              className="flex-1 bg-transparent outline-none text-gray-400 text-xl"
            />
            <button className="bg-gray-800 p-2">
              <img
                src="https://file.rendit.io/n/ruj7JSNZzE6S7q2zOnJY.svg"
                alt="search"
                className="h-5 w-5"
              />
            </button>
            <button className="flex items-center ml-5">
              <p className="text-black text-xl mr-1">All Categories</p>
              <img
                src="https://file.rendit.io/n/9HbXJ3Pd1meiDFvj7Zx9.svg"
                alt="dropdown"
                className="h-5 w-5"
              />
            </button>
          </div>
          <div className="text-black text-xl ml-10">
            Login | Signup
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://file.rendit.io/n/UCYfTfaQvwDGhAg2mmeE.svg"
            alt="heart"
            className="h-5 w-5 mr-5"
          />
          <div className="relative mr-5">
            <img
              src="https://file.rendit.io/n/J0xjauFvC6FbaG3ERAEk.svg"
              alt="cart"
              className="h-6 w-6"
            />
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-1 text-xs font-semibold">6</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 flex justify-between items-start py-5 px-20">
        <div className="flex items-center bg-red-600 py-3 px-5">
          <img
            src="https://file.rendit.io/n/vnHMrekTUdL5xGmEWpCP.svg"
            alt="menu"
            className="h-6 w-6"
          />
          <button className="text-2xl font-medium ml-3">
            All Categories
            <img
              src="https://file.rendit.io/n/FYUvYqWJBLsjevjgLTeX.svg"
              alt="dropdown"
              className="h-6 w-6 inline ml-3"
            />
          </button>
        </div>
        <div className="flex items-center text-base">
          <button className="text-white uppercase mr-8">Home</button>
          <button className="text-white uppercase mr-8">About</button>
          <button className="text-red-600 uppercase mr-8">Product</button>
          <button className="text-white uppercase mr-8">Pages</button>
          <button className="text-white uppercase">Contact</button>
        </div>
        <div className="flex items-center">
          <img
            src="https://file.rendit.io/n/GpG3LuPBCVEKQ2SbHw6K.png"
            alt="phone"
            className="h-5 w-5 mr-3"
          />
          <div className="text-sm">
            <p>Contact Us 24/7</p>
            <p className="font-medium">+12012987481</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col justify-center items-center py-20 px-64">
        <h2 className="text-4xl font-medium uppercase text-black mb-2">TV Collection</h2>
        <p className="text-base text-gray-600 tracking-widest uppercase">
          Home / Product / TV Collection
        </p>
      </div>
    </div>
  );
}

export default NavBar