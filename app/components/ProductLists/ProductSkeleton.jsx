export default function ProductSkeleton() {
  const skeletonRows = Array.from({ length: 15 });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-between items-center mb-6">
        <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-300 rounded animate-pulse"></div>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg border border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Image 1",
                "Image 2",
                "Image 3",
                "Image 4",
                "Name",
                "Type",
                "Brand",
                "Price",
                "Actions",
              ].map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {skeletonRows.map((_, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-200"
              >
                {[...Array(8)].map((_, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    <div className="h-8 w-full bg-gray-300 rounded animate-pulse"></div>
                  </td>
                ))}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <div className="flex gap-2">
                    <div className="h-8 w-16 bg-gray-300 rounded animate-pulse"></div>
                    <div className="h-8 w-16 bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
