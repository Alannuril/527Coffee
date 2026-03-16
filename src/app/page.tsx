import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Facilities from "@/components/sections/Facilities";
import MenuHighlight from "@/components/sections/MenuHighlight";
import SpecialOffers from "@/components/sections/SpecialOffers";
import PromoBanner from "@/components/sections/PromoBanner";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />
      <Hero />
      <Facilities />
      <MenuHighlight />
      <SpecialOffers />
      <PromoBanner />
      <Events />
      <Gallery />
      <Location />
      <Footer />
    </main>
  );
}
