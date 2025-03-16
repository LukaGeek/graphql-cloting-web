export default function CardSkeleton() {
  const skeletonCards = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-[150px] p-10">
      {skeletonCards.map((_, index) => (
        <div
          key={index}
          className="group relative w-[280px] bg-white rounded-lg shadow-sm transition .5s cursor-pointer"
        >
          <div className="relative w-[280px] h-[290px] bg-gray-300 rounded-lg overflow-hidden animate-pulse"></div>
          <div className="relative mt-4">
            <div className="h-4 w-[100px] bg-gray-300 rounded animate-pulse"></div>
            <div className="mt-1 h-3 w-1/2 bg-gray-300 rounded animate-pulse"></div>
            <div className="mt-1 h-3 w-5/6 bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="absolute top-0 inset-x-0 h-[290px] rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            />
            <div className="h-6 w-16 bg-gray-400 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
