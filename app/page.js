import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import DealOfTheWeek from "./components/DealOfTheWeek/DealOfTheWeek";
import BestSellers from "./components/BestSellers/BestSellers";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import CardCarousel from "./components/Products/ProductsCarousel/Carousel";
import Scrolling from "./components/Scrolling/ScrollingSystem";

const options = { loop: false };
const maxSlides = 5;
const slides = Array.from(Array(maxSlides).keys());

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Cards />
      <DealOfTheWeek />
      <BestSellers />
      <CardCarousel slides={slides} options={options} />
      <ServiceInfo />
      <LatestBlogs />
      <Newsletter />
      <Footer />
      <Scrolling />
    </div>
  );
}
