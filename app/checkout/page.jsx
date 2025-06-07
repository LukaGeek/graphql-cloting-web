"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../components/Cart/CartContext";
import { FaPaypal } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import SuccessToast from "../components/Toasts/SuccessToast";

export default function CheckoutPage() {
  const { items } = useCart();
  const router = useRouter();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePay = (method) => {
    if (method === "Debit/Credit Card") {
      router.push("/checkout/creditcard");
    } else {
      <SuccessToast
        message={`Paying $${totalPrice.toFixed(2)} with ${method}!`}
      />;
      router.push("/checkout/success");
    }
  };

  useEffect(() => {
    if (items.length === 0) {
      router.push("/");
    }
  }, [items, router]);

  return (
    <main className="max-w-5xl mx-auto p-6 py-10 flex flex-col gap-8">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center">
        Checkout
      </h1>

      {items.length === 0 ? null : (
        <>
          <div className="border rounded-lg shadow p-6 bg-gray-50">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>
            <div className="max-h-96 overflow-y-auto pr-2 flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4 last:border-b-0"
                >
                  <Image
                    src={item.image1 || "/placeholder.jpg"}
                    width={80}
                    height={80}
                    alt={item.name}
                    className="rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sticky bottom-0 bg-white pt-6 border-t flex flex-col gap-6">
            <div className="flex justify-between items-center text-2xl font-bold text-gray-900">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <button
                onClick={() => handlePay("PayPal")}
                className="flex-1 flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-black py-4 rounded-lg text-lg font-bold shadow hover:scale-105 active:scale-95 transition-transform"
              >
                <FaPaypal size={24} />
                Pay with PayPal
              </button>

              <button
                onClick={() => handlePay("Debit/Credit Card")}
                className="flex-1 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg text-lg font-bold shadow hover:scale-105 active:scale-95 transition-transform"
              >
                <FaRegCreditCard size={24} />
                Pay with Debit / Credit Card
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
