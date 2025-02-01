"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AdminPageMain from "../components/AdminPage";
import Link from "next/link";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");

  const router = useRouter();

  const handleAddColor = () => {
    if (newColor.trim() !== "" && !color.includes(newColor)) {
      setColor([...color, newColor.trim()]);
      setNewColor("");
    }
  };

  const handleRemoveColor = (clr) => {
    setColor(color.filter((c) => c !== clr));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || (!image1 && image2 && image3 && image4)) {
      alert("Name and image are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          color,
          type,
          brand,
          image1,
          image2,
          image3,
          image4,
          description,
          details,
        }),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminPageMain>
      <div className="mt-10 max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center">Add New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Product Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              id="name"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Product Name"
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
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="number"
              name="price"
              id="price"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="1"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="color"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Product Color
            </label>
            <input
              onChange={(e) => setNewColor(e.target.value)}
              value={newColor}
              type="text"
              name="color"
              id="color"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Product Color"
            />
            <button
              type="button"
              onClick={handleAddColor}
              className="px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow hover:bg-indigo-700"
            >
              Add
            </button>
            <div className="flex gap-2 flex-wrap">
              {color.map((clr, index) => (
                <div
                  key={index}
                  className="inline-flex items-center bg-gray-200 px-2 py-1 rounded-md text-sm"
                >
                  {clr}
                  <button
                    type="button"
                    onClick={() => handleRemoveColor(clr)}
                    className="ml-2 text-red-500"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="type"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Product Type
            </label>
            <input
              onChange={(e) => setType(e.target.value)}
              value={type}
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
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              type="text"
              name="brand"
              id="brand"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Product Brand"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="image1"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Product Image 1
            </label>
            <input
              onChange={(e) => setImage1(e.target.value)}
              value={image1}
              type="text"
              name="image1"
              id="image1"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="/images/1.jpg"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="image2"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Product Image 2
            </label>
            <input
              onChange={(e) => setImage2(e.target.value)}
              value={image2}
              type="text"
              name="image2"
              id="image2"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="/images/2.jpg"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="image3"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Product Image 3
            </label>
            <input
              onChange={(e) => setImage3(e.target.value)}
              value={image3}
              type="text"
              name="image3"
              id="image3"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="/images/3.jpg"
            />
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label
              htmlFor="image4"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
            >
              Product Image 4
            </label>
            <input
              onChange={(e) => setImage4(e.target.value)}
              value={image4}
              type="text"
              name="image4"
              id="image4"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="/images/4.jpg"
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
              onChange={(e) => setDescription(e.target.value)}
              value={description}
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
              onChange={(e) => setDetails(e.target.value)}
              value={details}
              type="text"
              name="details"
              id="details"
              className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
              placeholder="Product Details"
            />
          </div>

          <div className="flex space-x-2">
            <button
              type="submit"
              className="w-[25rem] bg-indigo-600 text-white text-sm font-medium py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Add Product
            </button>
            <button
              type="submit"
              className="w-[4rem] bg-indigo-600 text-white text-sm font-medium py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Link href="/admin">Back</Link>
            </button>
          </div>
        </form>
      </div>
    </AdminPageMain>
  );
}
