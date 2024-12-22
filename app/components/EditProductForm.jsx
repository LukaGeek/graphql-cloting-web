export default async function EditProductForm({ id, name, image, price, category }) {
    return (
        <div className="flex justify-between items-center">
            <h1 className="font-bold py-10 text-2xl">Update Product {id}</h1>

            <form className="space-y-4">
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            htmlFor="name"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Product Name"
          />
        </div>

        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            htmlFor="image"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Product Image
          </label>
          <input
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
            type="number"
            name="price"
            id="price"
            className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="1"
          />
        </div>

        {/* Product Category */}
        <div className="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
          <label
            htmlFor="category"
            className="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
          >
            Product Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="w-full block border-0 p-1 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Product Category"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white text-sm font-medium py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Update Product
        </button>
      </form>
        </div>
    )
}