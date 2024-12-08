"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Scrolling() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-gray-300 text-gray-700 rounded-full shadow-lg "
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
