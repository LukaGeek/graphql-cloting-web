"use client";

import { IoSearchSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import SignInSession from "./SignInSession";
import Link from "next/link";
import { useCart } from "./Cart/CartContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const navLinks = [
    { name: "home", href: "/" },
    { name: "products", href: "/products" },
    { name: "promotion", href: "/" },
    { name: "blog", href: "/" },
    { name: "contact", href: "/" },
  ];

  const { toggleCart, items } = useCart();
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      router.push(`/products?search=${encodeURIComponent(searchValue.trim())}`);
      setShowSearch(false);
      setSearchValue("");
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    toggleCart();
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-10 py-3 bg-white border-b border-gray-300 shadow-sm relative">
      <Link
        href="/"
        className="text-2xl md:text-3xl font-bold uppercase text-gray-800 my-2 md:my-0"
      >
        <span>COLO</span>
        <span className="text-red-500">SHOP</span>
      </Link>

      {showSearch && (
        <form
          onSubmit={handleSearchSubmit}
          className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[80%] md:w-[50%] bg-white shadow-lg rounded-lg p-2 flex items-center z-50 transition-all"
        >
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for products..."
            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-red-500 focus:border-red-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600 transition"
          >
            Search
          </button>
        </form>
      )}

      <div className="flex items-center justify-center gap-6 md:gap-10 text-sm md:text-base font-bold uppercase text-gray-600 cursor-pointer">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            prefetch={false}
            className="relative group transition-transform duration-200 hover:text-red-500 hover:scale-105"
          >
            {link.name}
            <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300"></span>
          </Link>
        ))}

        <div className="flex items-center justify-center gap-4 md:gap-5 ml-4">
          <div
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 text-[20px] md:text-[24px] text-gray-600 rounded-full cursor-pointer hover:text-red-500 hover:scale-105 transition-all"
          >
            <IoSearchSharp />
          </div>

          <div
            className="relative p-2 text-[20px] md:text-[24px] text-gray-600 rounded-full cursor-pointer hover:text-red-500 hover:scale-105 transition-all"
            onClick={handleAddToCart}
          >
            <FaCartShopping />
            {hasMounted && totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full leading-none font-bold">
                {totalQuantity}
              </span>
            )}
          </div>

          <div className="p-2 text-[20px] md:text-[24px] text-gray-600 rounded-full cursor-pointer hover:text-red-500 hover:scale-105 transition-all">
            <SignInSession />
          </div>
        </div>
      </div>
    </div>
  );
}
