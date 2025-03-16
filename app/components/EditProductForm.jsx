"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminPageMain from "./AdminPage";
import { useMutation, useQuery } from "@apollo/client";
import Link from "next/link";
import { GET_PRODUCT } from "@/graphql/queries";
import { UPDATE_PRODUCT } from "@/graphql/mutations";

export default function EditProductForm({ id }) {
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newType, setNewType] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [newImage1, setNewImage1] = useState("");
  const [newImage2, setNewImage2] = useState("");
  const [newImage3, setNewImage3] = useState("");
  const [newImage4, setNewImage4] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDetails, setNewDetails] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (data && data.product) {
      const product = data.product;
      setNewName(product.name);
      setNewPrice(product.price);
      setNewType(product.type);
      setNewBrand(product.brand);
      setNewImage1(product.image1);
      setNewImage2(product.image2);
      setNewImage3(product.image3);
      setNewImage4(product.image4);
      setNewDescription(product.description);
      setNewDetails(product.details);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        variables: {
          id,
          name: newName,
          price: newPrice,
          type: newType,
          brand: newBrand,
          image1: newImage1,
          image2: newImage2,
          image3: newImage3,
          image4: newImage4,
          description: newDescription,
          details: newDetails,
        },
      });
      router.push("/admin");
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

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

            {/* <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
              <label
                htmlFor="color"
                className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
              >
                Product Color
              </label>
              <input
                onChange={(e) => setNewestColor(e.target.value)}
                value={newestColor}
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
                {newColor.map((clr, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center bg-gray-200 px-2 py-1 rounded-md text-sm"
                  >
                    {clr}
                    <button
                      name="color"
                      value={newColor}
                      type="button"
                      onClick={() => handleRemoveColor(clr)}
                      className="ml-2 text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div> */}

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
                value={newDetails}
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
                Update Product
              </button>
              <button
                type="button"
                className="w-[4rem] bg-indigo-600 text-white text-sm font-medium py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Link href="/admin">Back</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminPageMain>
  );
}
