"use client";

import { FaCheck } from "react-icons/fa";

export default function SuccessToast({ message }) {
  return (
    <div className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg max-w-xs animate-slide-in-out z-50">
      <div className="flex items-center mb-2 space-x-2">
        <FaCheck className="text-white w-5 h-5" />
        <h2 className="font-bold text-lg">Success!</h2>
      </div>
      <p className="text-sm">{message}</p>
    </div>
  );
}
