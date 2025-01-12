"use client";

import Image from "next/image";
import Link from "next/link";
import RemoveBtn from "../RemoveBtn";
import { useEffect, useState } from "react";

export default function ProductLists() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/products", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (!products) {
    <div>Product not found.</div>;
  }

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Listed Products</h1>
        <Link
          href="/addProduct"
          className="inline-flex items-center px-6 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Add Product
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image 1
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image 2
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image 3
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image 4
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Brand
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="px-6 py-4 text-center text-gray-500 text-sm"
                >
                  No products available
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4">
                    {product.image1 && (
                      <div className="flex flex-col items-center">
                        <Image
                          src={product.image1}
                          width={50}
                          height={50}
                          alt="Image 1"
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {product.image2 && (
                      <div className="flex flex-col items-center">
                        <Image
                          src={product.image2}
                          width={50}
                          height={50}
                          alt="Image 2"
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {product.image3 && (
                      <div className="flex flex-col items-center">
                        <Image
                          src={product.image3}
                          width={50}
                          height={50}
                          alt="Image 3"
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {product.image4 && (
                      <div className="flex flex-col items-center">
                        <Image
                          src={product.image4}
                          width={50}
                          height={50}
                          alt="Image 4"
                          className="w-12 h-12 object-cover rounded-md"
                        />
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.type || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.brand || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Link
                      href={`/editProduct/${product._id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </Link>
                    <RemoveBtn id={product._id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
