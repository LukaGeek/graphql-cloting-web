"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center p-10 bg-white rounded-2xl shadow-xl">
        <FaCheckCircle className="mx-auto text-green-500 mb-6" size={80} />

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
          Payment Successful!
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Thank you for your purchase. You will be redirected to the home page
          shortly.
        </p>

        <div className="relative w-32 h-2 mx-auto bg-gray-200 rounded overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 animate-progress-bar"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>
      </div>
    </main>
  );
}
