import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import DealOfTheWeek from "./components/DealOfTheWeek/DealOfTheWeek";
import ServiceInfo from "./components/ServiceInfo/ServiceInfo";
import LatestBlogs from "./components/LatestBlogs/LatestBlogs";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import CardCarousel from "./components/Products/ProductsCarousel/Carousel";
import Scrolling from "./components/Scrolling/ScrollingSystem";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardCarousel />
      <DealOfTheWeek />
      <Cards />
      <ServiceInfo />
      <LatestBlogs />
      <Newsletter />
      <Footer />
      <Scrolling />
    </div>
  );
}
