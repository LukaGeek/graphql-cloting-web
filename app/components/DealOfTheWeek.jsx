"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DealOfTheWeek() {
  const [mounted, setMounted] = useState(false);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 14);

  const calculateTimeRemaining = () => {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gray-100 min-h-[60vh]">
      <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
        <Image
          src="/deal.webp"
          alt="Deal Of The Week"
          width={600}
          height={800}
          quality={100}
          priority
          draggable="false"
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center text-center max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Deal Of The Week
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-300 bg-white shadow-md">
            <span className="text-2xl md:text-3xl font-bold text-red-500">
              {timeRemaining.days}
            </span>
            <span className="text-sm text-gray-600">
              Day{timeRemaining.days !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-300 bg-white shadow-md">
            <span className="text-2xl md:text-3xl font-bold text-red-500">
              {timeRemaining.hours}
            </span>
            <span className="text-sm text-gray-600">
              Hour{timeRemaining.hours !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-300 bg-white shadow-md">
            <span className="text-2xl md:text-3xl font-bold text-red-500">
              {timeRemaining.minutes}
            </span>
            <span className="text-sm text-gray-600">
              Min{timeRemaining.minutes !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-gray-300 bg-white shadow-md">
            <span className="text-2xl md:text-3xl font-bold text-red-500">
              {timeRemaining.seconds}
            </span>
            <span className="text-sm text-gray-600">
              Sec{timeRemaining.seconds !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
        <Link
          href="/products"
          className="inline-block px-6 py-3 rounded-md bg-red-600 text-white font-semibold uppercase tracking-wide hover:bg-red-700 transition duration-300 shadow-md"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
