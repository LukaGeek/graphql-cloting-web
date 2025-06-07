"use client";

import { signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";

export default function FacebookLogin() {
  const handleProvider = (e, value) => {
    e.preventDefault();
    signIn(value, {
      callbackUrl: "/",
    });
  };

  return (
    <button
      onClick={(e) => handleProvider(e, "facebook")}
      className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
    >
      <span className="sr-only">Sign in with Facebook</span>
      <FaFacebook className="w-6 h-6" />
    </button>
  );
}
