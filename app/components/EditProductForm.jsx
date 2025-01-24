"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminPageMain from "./AdminPage";
import Link from "next/link";

export default function EditProductForm({
  id,
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
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newColor, setNewColor] = useState(Array.isArray(color) ? color : []);
  const [newestColor, setNewestColor] = useState("");
  const [newType, setNewType] = useState(type);
  const [newBrand, setNewBrand] = useState(brand);
  const [newImage1, setNewImage1] = useState(image1);
  const [newImage2, setNewImage2] = useState(image2);
  const [newImage3, setNewImage3] = useState(image3);
  const [newImage4, setNewImage4] = useState(image4);
  const [newDescription, setNewDescription] = useState(description);
  const [newDetails, setNewDetails] = useState(details);

  const router = useRouter();

  const dbProduct = products.find((card) => card._id);

  const handleAddColor = () => {
    if (newestColor.trim() && !newColor.includes(newestColor)) {
      setNewColor([...newColor, newestColor.trim()]);
      setNewestColor("");
    }
  };

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
        setProducts(data.products);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    <div>Loading...</div>;
  }

  const handleRemoveColor = (clr) => {
    setNewColor(newColor.filter((color) => color !== clr));
  };

  useEffect(() => {
    if (dbProduct && dbProduct.color) {
      setNewColor(dbProduct.color);
    }
  }, [dbProduct]);

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
          newPrice,
          newColor,
          newType,
          newBrand,
          newImage1,
          newImage2,
          newImage3,
          newImage4,
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
                value={newDescription}
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
                type="submit"
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
