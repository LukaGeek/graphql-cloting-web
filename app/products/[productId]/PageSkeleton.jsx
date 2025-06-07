export default function PageSkeleton() {
  return (
    <div className="animate-pulse bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li className="flex items-center">
              <div className="h-5 w-24 bg-gray-200 rounded"></div>
            </li>
            <li className="flex items-center">
              <svg
                fill="currentColor"
                width={16}
                height={20}
                viewBox="0 0 16 20"
                aria-hidden="true"
                className="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
              <div className="h-5 w-24 bg-gray-200 rounded ml-2"></div>
            </li>
            <li>
              <div className="h-5 w-32 bg-gray-200 rounded"></div>
            </li>
          </ol>
        </nav>
        <div className="mt-6 max-w-2xl sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="h-64 bg-gray-200 rounded-lg w-full lg:h-auto"></div>
          <div className="mt-6 lg:col-span-2">
            <div className="h-48 bg-gray-200 rounded-lg w-full mb-4"></div>
            <div className="h-48 bg-gray-200 rounded-lg w-full"></div>
          </div>
        </div>
        <div className="mt-6 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-2 lg:pr-8">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <button className="mt-6 flex items-center justify-center rounded-md bg-gray-200 w-full py-3">
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </button>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-sm font-medium text-gray-900">Description</h3>
          <div className="space-y-6 mt-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Details</h2>
          <div className="mt-4 space-y-6">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
