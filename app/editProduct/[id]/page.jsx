"use client";

import EditProductForm from "@/app/components/EditProductForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct({ params }) {
  const { id } = params;
  const { data: session, status } = useSession();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!session?.user && status !== "loading") {
      router.push("/login");
    }
  }, [session, status, router]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch product");

        const data = await res.json();
        setProduct(data.product);
      } catch (err) {
        setError(err.message);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!session?.user) return null;
  if (error)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-red-500 text-2xl font-semibold">
          Error Loading Product
        </h1>
        <p className="text-gray-600">{error}</p>
      </div>
    );

  if (!product) return <LoadingSkeleton />;

  return (
    <EditProductForm
      id={id}
      name={product.name}
      image1={product.image1}
      image2={product.image2}
      image3={product.image3}
      image4={product.image4}
      price={product.price}
      type={product.type}
      brand={product.brand}
      description={product.description}
      details={product.details}
    />
  );
}

function LoadingSkeleton() {
  return (
    <div className="p-6 max-w-md mx-auto animate-pulse space-y-6">
      <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto"></div>
      <div className="h-8 bg-gray-300 rounded w-[290px] mx-auto"></div>
      <form className="space-y-4">
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-16 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="flex space-x-2">
          <div className="h-10 bg-gray-300 rounded w-[25rem]"></div>
          <div className="h-10 bg-gray-300 rounded w-[4rem]"></div>
        </div>
      </form>
    </div>
  );
}
