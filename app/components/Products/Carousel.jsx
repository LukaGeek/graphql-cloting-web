"use client";

import { useQuery } from "@apollo/client";
import Card from "./Card";
import { GET_PRODUCTS } from "@/graphql/queries";
import ErrorToast from "../Toasts/ErrorToast";

export default function CardCarousel() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <CardSkeleton />;
  if (error)
    return <ErrorToast message={`Error loading products: ${error.message}`} />;

  const products = data?.products || [];

  return (
    <section className="w-full py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
          Product List
        </h2>
        <span className="block w-24 h-[5px] bg-[#ff5a5a]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} card={product} />
        ))}
      </div>
    </section>
  );
}

const CardSkeleton = () => {
  const skeletonCards = Array.from({ length: 8 });

  return (
    <section className="w-full py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="group relative w-full bg-white rounded-lg shadow-lg transition duration-500 cursor-pointer animate-pulse"
          >
            <div className="relative w-full h-72 bg-gray-200 rounded-t-lg" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-1/2 bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
            </div>
            <div className="absolute top-0 inset-x-0 h-72 p-4 flex items-end justify-end overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
              />
              <div className="h-6 w-16 bg-gray-300 rounded z-10 mb-2 mr-2" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
