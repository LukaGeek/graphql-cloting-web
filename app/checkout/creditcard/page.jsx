"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCart } from "@/app/components/Cart/CartContext";
import SuccessToast from "@/app/components/Toasts/SuccessToast";
import CardInformation from "@/app/components/Checkout/CardInformation";
import OrderSummary from "@/app/components/Checkout/OrderSummary";

export default function CardPaymentPage() {
  const router = useRouter();
  const { items } = useCart();

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    <SuccessToast message="Payment processed!" />;
    router.push("/checkout/success");
  };

  useEffect(() => {
    if (items.length === 0) {
      router.push("/");
    }
  }, [items, router]);

  return (
    <main className="max-w-6xl mx-auto p-6 py-10 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 text-center">
        Pay with Credit / Debit Card
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <OrderSummary items={items} totalPrice={totalPrice} />
        <CardInformation onSubmit={handlePayment} />
      </div>
    </main>
  );
}
