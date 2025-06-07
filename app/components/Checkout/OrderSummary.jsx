"use client";

import Image from "next/image";

export default function OrderSummary({ items, totalPrice }) {
  return (
    <div className="md:w-1/2 border rounded-lg shadow p-6 bg-gray-50 flex flex-col h-[600px]">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Order</h2>
      <div className="flex-1 flex flex-col gap-5 overflow-y-auto pr-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b pb-4 last:border-b-0"
          >
            <Image
              src={item.image1 || "/placeholder.jpg"}
              alt={item.name}
              width={70}
              height={70}
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
      <div className="mt-6 flex justify-between items-center text-xl font-bold text-gray-900 border-t pt-4">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}
