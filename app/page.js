import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DealOfTheWeek from "./components/DealOfTheWeek";
import ServiceInfo from "./components/ServiceInfo";
import LatestBlogs from "./components/LatestBlogs";
import Newsletter from "./components/Newsletter";
import CardCarousel from "./components/Products/Carousel";
import Footer from "./components/Footer";

export const metadata = {
  title: "Home - COLOSHOP",
  description: "Browse our awesome product selection.",
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardCarousel />
      <DealOfTheWeek />
      <ServiceInfo />
      <LatestBlogs />
      <Newsletter />
      <Footer />
    </div>
  );
}
