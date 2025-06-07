"use client";

import { useCart } from "./CartContext";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

export default function CartSidebar() {
  const {
    isOpen,
    toggleCart,
    items,
    removeItem,
    decreaseQuantity,
    increaseQuantity,
    clearCart,
  } = useCart();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button
          onClick={toggleCart}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
      </div>

      <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-200px)]">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 mt-10 gap-2">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center gap-3 border p-2 rounded"
            >
              <div className="absolute top-3 right-3 flex flex-col gap-1">
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 transition"
                >
                  <FaTrash size={14} />
                </button>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 transition"
                >
                  <FaPlus size={14} />
                </button>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500 transition"
                >
                  <FaMinus size={14} />
                </button>
              </div>

              <Image
                src={item.image1}
                width={60}
                height={60}
                alt={item.name}
                className="rounded object-cover"
              />
              <div className="flex-1 pr-8 flex flex-col justify-between h-full">
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Brand: {item.brand}
                </p>

                <div className="flex items-center mt-2 text-xs text-gray-600 font-medium">
                  <span>Qty: {item.quantity}</span>
                  <span className="ml-auto">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t flex flex-col gap-3">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <Link
          href={items.length > 0 ? "/checkout" : "/"}
          onClick={(e) => {
            if (items.length === 0) e.preventDefault();
          }}
          className={`${
            items.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          } text-white text-center py-1 rounded transition`}
        >
          Pay Now
        </Link>
        <button
          onClick={clearCart}
          disabled={items.length === 0}
          className={`${
            items.length === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          } text-white py-1 rounded transition`}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
