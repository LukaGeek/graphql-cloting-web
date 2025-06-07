import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-[650px] w-full overflow-hidden">
      <div className="absolute top-0 left-0 w-auto h-full z-[2] bg-black/30"></div>
      <Image
        draggable="false"
        src="/heroImg.webp"
        alt="Main"
        fill
        priority
        className="object-cover w-auto h-full absolute z-[1]"
      />
      <div className="relative left-[-30%] z-[3] text-[#2a2a2a] text-center">
        <h6 className="text-[1.2rem] uppercase font-semibold mb-[10px] tracking-[2px] after:content-['spring_/_summer_collection_2017']"></h6>
        <h1 className="text-[3rem] font-bold my-[10px] after:content-['Get_up_to_30%']"></h1>
        <h1 className="text-[3rem] font-bold mb-[20px] after:content-['New_Arrivals']"></h1>
        <Link
          href="/products"
          className="inline-block bg-red-600 py-[12px] px-[30px] uppercase text-white font-semibold text-[1rem] rounded-[5px] transition-all duration-300 hover:bg-[#d32f2f] hover:scale-110 after:content-['shop_now']"
        ></Link>
      </div>
    </div>
  );
}
