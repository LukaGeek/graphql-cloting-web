"use client";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const date = new Date();
const currentYear = date.getFullYear();

export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full px-5 py-5 mt-[2%]">
      <div className="flex justify-between w-full max-w-[1200px] pb-5 border-b border-gray-300 flex-wrap md:flex-nowrap">
        <div className="flex flex-col md:items-start items-center">
          <ul className="flex gap-5 list-none p-0 m-0 md:flex-row flex-col text-gray-800 text-base">
            <li className="cursor-pointer transition duration-300 hover:text-[#fc2600] after:content-['FAQs']"></li>
            <li className="cursor-pointer transition duration-300 hover:text-[#fc2600] after:content-['Blog']"></li>
            <li className="cursor-pointer transition duration-300 hover:text-[#fc2600] after:content-['Contact_us']"></li>
          </ul>
        </div>
        <div className="flex gap-[15px] text-[20px] mt-[10px] justify-center md:justify-start">
          <FaFacebookF className="text-gray-800 cursor-pointer transition duration-500 hover:text-[#fc2600]" />
          <FaXTwitter className="text-gray-800 cursor-pointer transition duration-500 hover:text-[#fc2600]" />
          <IoLogoInstagram className="text-gray-800 cursor-pointer transition duration-500 hover:text-[#fc2600]" />
          <FaDiscord className="text-gray-800 cursor-pointer transition duration-500 hover:text-[#fc2600]" />
          <FaPinterest className="text-gray-800 cursor-pointer transition duration-500 hover:text-[#fc2600]" />
        </div>
      </div>
      <div className="pt-5 text-[14px] text-gray-500 text-center">
        <span>
          {"\u00A9"}
          {currentYear} All Rights Reserved. This website is made by Luka
          Linchiki
        </span>
      </div>
    </div>
  );
}
