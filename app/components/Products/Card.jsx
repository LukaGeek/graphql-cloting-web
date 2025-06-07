import Link from "next/link";
import Image from "next/image";
import { useCart } from "../Cart/CartContext";

export default function Card({ card }) {
  const { addItem, openCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(card);
    openCart();
  };

  return (
    <Link href={`/products/${card.id}`} passHref>
      <div className="group relative flex flex-col bg-white rounded-lg overflow-hidden shadow-sm transition-transform transform hover:scale-[1.02] hover:shadow-md cursor-pointer duration-300">
        <div className="relative w-full h-72 bg-gray-100 overflow-hidden">
          <Image
            width={1000}
            height={1000}
            src={card.image1 || "/placeholder.jpg"}
            alt={card.name}
            className="w-full h-full object-center object-cover transition-transform duration-300"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-end p-3 z-20">
            <p className="text-lg font-semibold text-white">${card.price}</p>
          </div>
          <div className="absolute inset-x-0 bottom-[-50px] flex justify-center transition-all duration-300 group-hover:bottom-5 z-30">
            <button
              onClick={handleAddToCart}
              className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-md shadow-md transition-transform transform group-hover:translate-y-0 translate-y-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between p-4 space-y-1">
          <h3 className="text-base font-medium text-gray-900 line-clamp-2 group-hover:text-[#ff5a5a] transition-colors duration-300">
            {card.name}
          </h3>
          <p className="text-sm text-gray-500 font-semibold">
            Brand: {card.brand}
          </p>
        </div>
      </div>
    </Link>
  );
}
