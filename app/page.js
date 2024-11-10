import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Topbar from "./components/Products/Topbar/Topbar";
import NewProductCards from "./components/Products/ProductCards/NewProductCards";
import DealOfTheWeek from "./components/DealOfTheWeek/DealOfTheWeek";
import BestSellers from "./components/BestSellers/BestSellers";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

/*  */
const cardsData = [
  [
    {
      icon: "/Products/1.webp",
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      cost: "$520.00",
    },
    {
      icon: "/Products/2.webp",
      name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
      cost: "$610.00",
    },
    {
      icon: "/Products/3.webp",
      name: "Blue Yeti USB Microphone Blackout Edition",
      cost: "$120.00",
    },
    {
      icon: "/Products/4.webp",
      name: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
      cost: "$410.00",
    },
    {
      icon: "/Products/5.webp",
      name: "Pryma Headphones, Rose Gold Wite & Grey",
      cost: "$180.00",
    },
    {
      icon: "/Products/6.webp",
      name: "Sony WH-1000XM4 Wireless Headphones",
      cost: "$350.00",
    },
    {
      icon: "/Products/7.webp",
      name: "Pryma Headphones, Rose Gold & Grey",
      cost: "$999.00",
    },
    {
      icon: "/Products/8.webp",
      name: "Nikon D5600 E567 Digital SLR Camera",
      cost: "$700.00",
    },
    {
      icon: "/Products/9.webp",
      name: "Razer Blade 15 I5 12400 Gaming Laptop",
      cost: "$1799.00",
    },
    {
      icon: "/Products/10.webp",
      name: "Logitech MX 100NC 3-120 Wireless Mouse",
      cost: "$99.00",
    },
  ],
  [
    {
      icon: "/Products/10.webp",
      name: "Logitech MX 100NC 3-120 Wireless Mouse",
      cost: "$99.00",
    },
    {
      icon: "/Products/8.webp",
      name: "Nikon D5600 E567 Digital SLR Camera",
      cost: "$700.00",
    },
    {
      icon: "/Products/6.webp",
      name: "Sony WH-1000XM4 Wireless Headphones",
      cost: "$350.00",
    },
    {
      icon: "/Products/4.webp",
      name: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
      cost: "$410.00",
    },
    {
      icon: "/Products/9.webp",
      name: "Razer Blade 15 I5 12400 Gaming Laptop",
      cost: "$1799.00",
    },
  ],
];

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Cards />
      <Topbar />
      <div className="flex flex-wrap">
        {cardsData[0].map((card, index) => (
          <>
            {/* აკეთებს NewProductCards-ის რენდერინგს */}
            <NewProductCards
              key={index}
              name={card.name}
              cost={card.cost}
              icon={card.icon}
            />
            {/* იწყებს შემდეგ სვეტს ჰორიზონტალურად */}
            {(index + 1) % 5 === 0 && <div className="w-full"></div>}
          </>
        ))}
      </div>
      <DealOfTheWeek />
      <BestSellers />
      <div className="flex flex-wrap mt-10">
        {cardsData[1].map((card, index) => (
          <>
            {/* აკეთებს NewProductCards-ის რენდერინგს */}
            <NewProductCards
              key={index}
              name={card.name}
              cost={card.cost}
              icon={card.icon}
            />
          </>
        ))}
      </div>
      <ServiceInfo />
      <LatestBlogs />
      <Newsletter />
      <Footer />
    </div>
  );
}
