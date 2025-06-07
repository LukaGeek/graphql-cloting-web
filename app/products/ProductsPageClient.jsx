"use client";

import { useQuery } from "@apollo/client";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GET_PRODUCTS } from "@/graphql/queries";
import Card from "../components/Products/Card";
import ErrorToast from "../components/Toasts/ErrorToast";
import Navbar from "../components/Navbar";

export default function ProductsPageClient() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const products = data?.products || [];

  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [search, setSearch] = useState(initialSearch);
  const [typeFilter, setTypeFilter] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortOption, setSortOption] = useState("priceLowHigh");

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [search, typeFilter, brandFilter, minPrice, maxPrice, sortOption]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesType =
        typeFilter.length === 0 || typeFilter.includes(product.type);
      const matchesBrand =
        brandFilter.length === 0 || brandFilter.includes(product.brand);
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      return matchesSearch && matchesType && matchesBrand && matchesPrice;
    });

    if (sortOption === "priceLowHigh") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      result = result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "alphabetical") {
      result = result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [
    products,
    search,
    typeFilter,
    brandFilter,
    minPrice,
    maxPrice,
    sortOption,
  ]);

  const uniqueTypes = [...new Set(products.map((p) => p.type))];
  const uniqueBrands = [...new Set(products.map((p) => p.brand))];

  const toggleFilter = (filterValue, filterState, setFilterState) => {
    if (filterState.includes(filterValue)) {
      setFilterState(filterState.filter((value) => value !== filterValue));
    } else {
      setFilterState([...filterState, filterValue]);
    }
  };

  const clearFilters = () => {
    setSearch("");
    setTypeFilter([]);
    setBrandFilter([]);
    setMinPrice(0);
    setMaxPrice(10000);
  };

  if (loading) return;
  if (error)
    return <ErrorToast message={`Error loading products: ${error.message}`} />;

  return (
    <>
      <Navbar />
      <div className="flex max-w-7xl mx-auto px-4 py-8 gap-8">
        <aside className="w-full max-w-xs border border-gray-200 rounded-lg p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-blue-600">Filters</h2>
            <button
              onClick={clearFilters}
              className="text-sm text-indigo-600 hover:underline"
            >
              Clear
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search name..."
              />
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">Brand</h3>
              <div className="space-y-1 max-h-48 overflow-auto pr-1">
                {uniqueBrands.map((brand) => (
                  <label
                    key={brand}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      checked={brandFilter.includes(brand)}
                      onChange={() =>
                        toggleFilter(brand, brandFilter, setBrandFilter)
                      }
                      className="mr-2"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">Type</h3>
              <div className="space-y-1 max-h-48 overflow-auto pr-1">
                {uniqueTypes.map((type) => (
                  <label
                    key={type}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <input
                      type="checkbox"
                      checked={typeFilter.includes(type)}
                      onChange={() =>
                        toggleFilter(type, typeFilter, setTypeFilter)
                      }
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">
                Price Range
              </h3>
              <div className="flex space-x-2 mb-2">
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(parseFloat(e.target.value) || 0)}
                  className="w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  min="0"
                />
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(parseFloat(e.target.value) || 0)}
                  className="w-1/2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  min="0"
                />
              </div>
              <input
                type="range"
                min="0"
                max="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Products</h1>
            <div>
              <label className="mr-2 text-sm text-gray-600">Sort by:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-md text-sm px-2 py-1"
              >
                <option value="default">Default</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="alphabetical">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`transition-all duration-300 ease-out ${
                    animate
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <Card id={product.id} card={product} />
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
