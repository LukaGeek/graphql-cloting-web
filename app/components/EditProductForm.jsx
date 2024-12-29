"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminPageMain from "./AdminPage/AdminPage";

export default function EditProductForm({ id, name, image, price, category }) {
  const [newName, setNewName] = useState(name);
  const [newImage, setNewImage] = useState(image);
  const [newPrice, setNewPrice] = useState(price);
  const [newCategory, setNewCategory] = useState(category);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName, newImage, newPrice, newCategory }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Product");
      }

      router.refresh();
      router.push("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminPageMain>
      <div className="flex items-center justify-center min-h-screen mt-[-200px]">
        <div className="w-full max-w-md rounded-lg p-6">
          <h1 className="font-bold text-2xl text-center mb-6">
            Update Product {id}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="name"
                className="absolute -top-2 left-2 -mt-50px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Name
              </label>
              <input
                onChange={(e) => setNewName(e.target.value)}
                value={newName}
                type="text"
                name="name"
                id="name"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Product Name"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="image"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Image
              </label>
              <input
                onChange={(e) => setNewImage(e.target.value)}
                value={newImage}
                type="text"
                name="image"
                id="image"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="/images/1.jpg"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="price"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Price
              </label>
              <input
                onChange={(e) => setNewPrice(e.target.value)}
                value={newPrice}
                type="number"
                name="price"
                id="price"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="1"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="category"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Category
              </label>
              <input
                onChange={(e) => setNewCategory(e.target.value)}
                value={newCategory}
                type="text"
                name="category"
                id="category"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Product Category"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </AdminPageMain>
  );
}
