import Image from "next/image";

export default function Card({ card }) {
  return (
    <div className="group relative bg-white rounded-lg shadow-sm transition .5s cursor-pointer">
      <div className="relative w-full h-72 rounded-lg overflow-hidden">
        <Image
          width={1000}
          height={1000}
          src={card.icon}
          alt={card.alt}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="relative mt-4">
        <h3 className="text-sm font-medium text-gray-900 cursor-pointer">
          {card.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{card.color}</p>
      </div>
      <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
        />
        <p className="relative text-lg font-semibold text-white">{card.cost}</p>
      </div>
      <div className="mt-6">
        <a
          href={card.href}
          className=" flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
        >
          Add to bag<span className="sr-only">, {card.name}</span>
        </a>
      </div>
    </div>
  );
}
