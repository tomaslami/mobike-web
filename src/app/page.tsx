import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import HowWeWork from "@/components/HowWeWork";
import Distributor from "@/components/Distributor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <div className="font-montserrat">
      <Header />
      <Hero />
      <AboutUs />
      <HowWeWork />
      <Distributor />
      <ProductCatalog/>
      <Contact />
      <Footer />
    </div>
  );
} 