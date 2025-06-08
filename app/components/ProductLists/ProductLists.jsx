"use client";

import Image from "next/image";
import Link from "next/link";
import ProductSkeleton from "./ProductSkeleton";
import { GET_PRODUCTS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { useState, useMemo } from "react";
import ErrorToast from "../Toasts/ErrorToast";
import DeleteProduct from "../Admin/ProductAction/DeleteProduct";

export default function ProductLists() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const products = useMemo(() => data?.products || [], [data]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (!search ||
          product.name.toLowerCase().includes(search.toLowerCase())) &&
        (!typeFilter || product.type === typeFilter) &&
        (!brandFilter || product.brand === brandFilter) &&
        (!priceFilter || product.price <= parseFloat(priceFilter))
      );
    });
  }, [products, search, typeFilter, brandFilter, priceFilter]);

  const uniqueTypes = [...new Set(products.map((p) => p.type))];
  const uniqueBrands = [...new Set(products.map((p) => p.brand))];

  if (loading) return <ProductSkeleton />;

  if (error)
    return <ErrorToast message={`Error loading products: ${error.message}`} />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Listed Products</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all shadow-md text-sm font-medium ${
              showFilters
                ? "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                showFilters ? "rotate-0" : "rotate-180"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <Link
            href="/admin/addProduct"
            className="inline-flex items-center px-6 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            prefetch={false}
          >
            Add Product
          </Link>
        </div>
      </div>

      {showFilters && (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all mb-3 duration-500 ease-in-out transform ${
            showFilters
              ? "max-h-[400px] opacity-100 scale-100 translate-y-0 mt-6"
              : "max-h-0 opacity-0 scale-95 -translate-y-4 pointer-events-none"
          } overflow-hidden`}
        >
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          >
            <option value="">All Types</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            value={brandFilter}
            onChange={(e) => setBrandFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          >
            <option value="">All Brands</option>
            {uniqueBrands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Max Price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
          />
        </div>
      )}

      <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image 1
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image 2
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image 3
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image 4
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Brand
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-9 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-right">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.length === 0 ? (
              <tr>
                <td
                  colSpan="9"
                  className="px-6 py-4 text-center text-gray-500 text-sm"
                >
                  No products found
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4">
                    {product.image1 && (
                      <Image
                        src={product.image1}
                        width={50}
                        height={50}
                        alt="Image 1"
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {product.image2 && (
                      <Image
                        src={product.image2}
                        width={50}
                        height={50}
                        alt="Image 2"
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {product.image3 && (
                      <Image
                        src={product.image3}
                        width={50}
                        height={50}
                        alt="Image 3"
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {product.image4 && (
                      <Image
                        src={product.image4}
                        width={50}
                        height={50}
                        alt="Image 4"
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.brand}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Link
                      href={`admin/editProduct/${product.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                      prefetch={false}
                    >
                      Edit
                    </Link>
                    <DeleteProduct id={product.id} />
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
