"use client";

import { FaExclamation } from "react-icons/fa";

export default function ErrorToast({ message }) {
  return (
    <div className="fixed bottom-5 right-5 bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg max-w-xs animate-slide-in-out z-50">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-xl">
          <FaExclamation />
        </div>
        <div>
          <h2 className="font-bold text-lg mb-1">Error</h2>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}
