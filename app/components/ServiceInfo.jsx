"use client";

import { PiTruckTrailerFill } from "react-icons/pi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { LuClock3 } from "react-icons/lu";

export default function ServiceInfo() {
  const services = [
    {
      icon: <PiTruckTrailerFill />,
      title: "Free Shipping",
      description: "Suffered Alteration in Some Form",
    },
    {
      icon: <FaMoneyBillAlt />,
      title: "Cash on Delivery",
      description: "The Internet Tend To Repeat",
    },
    {
      icon: <BsArrowRepeat />,
      title: "45 Days Return",
      description: "Making it Look Like Readable",
    },
    {
      icon: <LuClock3 />,
      title: "Opening All Week",
      description: "8AM - 09PM",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between items-start gap-6 bg-gray-100 p-6 w-full">
      {services.map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-6 w-full sm:w-[48%] lg:w-[23%] shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          <div className="text-5xl text-red-500 mb-4">{service.icon}</div>
          <div className="flex flex-col gap-1">
            <span className="uppercase text-gray-800 font-bold text-base md:text-lg">
              {service.title}
            </span>
            <span className="text-gray-600 text-sm md:text-base">
              {service.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
