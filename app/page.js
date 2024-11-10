import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import NewProductCards from "./components/Products/ProductCards/NewProductCards";
import DealOfTheWeek from "./components/DealOfTheWeek/DealOfTheWeek";
import BestSellers from "./components/BestSellers/BestSellers";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { cardsData } from "./cardsData";
import ProductsFilter from "./components/Products/ProductCards/ProductsFilter";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Cards />
      <ProductsFilter />
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
