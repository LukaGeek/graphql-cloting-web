"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminPageMain from "./AdminPage/AdminPage";

export default function EditProductForm({
  id,
  name,
  image1,
  image2,
  image3,
  image4,
  price,
  type,
  brand,
  description,
  details,
}) {
  const [newName, setNewName] = useState(name);
  const [newImage1, setNewImage1] = useState(image1);
  const [newImage2, setNewImage2] = useState(image2);
  const [newImage3, setNewImage3] = useState(image3);
  const [newImage4, setNewImage4] = useState(image4);
  const [newPrice, setNewPrice] = useState(price);
  const [newType, setNewType] = useState(type);
  const [newBrand, setNewBrand] = useState(brand);
  const [newDescription, setNewDescription] = useState(description);
  const [newDetails, setNewDetails] = useState(details);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newImage1,
          newImage2,
          newImage3,
          newImage4,
          newPrice,
          newType,
          newBrand,
          newDescription,
          newDetails,
        }),
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
      <div className="mt-10 max-w-md mx-auto space-y-6">
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
                htmlFor="image1"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Image 1
              </label>
              <input
                onChange={(e) => setNewImage1(e.target.value)}
                value={newImage1}
                type="text"
                name="image1"
                id="image1"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="/images/1.jpg"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="image2"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Image 2
              </label>
              <input
                onChange={(e) => setNewImage2(e.target.value)}
                value={newImage2}
                type="text"
                name="image2"
                id="image2"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="/images/2.jpg"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="image3"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Image 3
              </label>
              <input
                onChange={(e) => setNewImage3(e.target.value)}
                value={newImage3}
                type="text"
                name="image3"
                id="image3"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="/images/3.jpg"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="image4"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Image 4
              </label>
              <input
                onChange={(e) => setNewImage4(e.target.value)}
                value={newImage4}
                type="text"
                name="image4"
                id="image4"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="/images/4.jpg"
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
                htmlFor="type"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Type
              </label>
              <input
                onChange={(e) => setNewType(e.target.value)}
                value={newType}
                type="text"
                name="type"
                id="type"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Product Type"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="brand"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Brand
              </label>
              <input
                onChange={(e) => setNewBrand(e.target.value)}
                value={newBrand}
                type="text"
                name="brand"
                id="brand"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Product Brand"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="description"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Description
              </label>
              <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type="text"
                name="description"
                id="description"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Product Description"
              />
            </div>

            <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="details"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Details
              </label>
              <input
                onChange={(e) => setNewDetails(e.target.value)}
                value={newDescription}
                type="text"
                name="details"
                id="details"
                className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Product Details"
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
