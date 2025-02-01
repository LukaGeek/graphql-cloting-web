import Image from "next/image";

export default function RegisterSkeleton() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24 animate-pulse">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <div className="h-8 bg-gray-300 rounded w-2/3"></div>
            <div className="flex gap-2 mt-2">
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-400 rounded"></div>
          </div>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="h-10 bg-gray-300 rounded"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          width={1000}
          height={1000}
          priority
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt="Background"
        />
      </div>
    </div>
  );
}
