"use client";
import Image from "next/image";
import Link from "next/link";
import CardSkeleton from "./CardSkeleton";
import { GET_PRODUCTS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export default function Card() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) {
    return <CardSkeleton />;
  }
  if (error) return <p>Error loading products: {error.message}</p>;

  const products = data?.products || [];

  return (
    <>
      {products.map((card) => (
        <Link key={card.id} href={`/products/${card.id}`} passHref>
          <div className="group relative bg-white rounded-lg shadow-sm transition .5s cursor-pointer">
            <div className="relative w-full h-72 rounded-lg overflow-hidden">
              <Image
                width={1000}
                height={1000}
                src={card.image1 || "/placeholder.jpg"}
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative mt-4">
              <h3 className="text-sm font-medium text-gray-900 cursor-pointer">
                {card.name}
              </h3>
              <div className="mt-1 text-sm font-semibold text-gray-500">
                {card.brand}
              </div>
              {/* <div className="mt-1 text-sm text-gray-500">
                {card.color?.map((color, index) => (
                  <span key={index} className="mr-2">
                    {color}
                    {index < card.color.length - 1 ? "," : ""}
                  </span>
                )) || <span>No colors available</span>}
              </div> */}
            </div>
            <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
              />
              <p className="relative text-lg font-semibold text-white">
                {card.price}$
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
