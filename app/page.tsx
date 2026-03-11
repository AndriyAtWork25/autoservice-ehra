import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
  <Hero />

<section id="services" className="min-h-screen"></section>
<section id="about" className="min-h-screen"></section>
<section id="address" className="min-h-screen"></section>
<section id="contact" className="min-h-screen"></section>

  <Footer />
    </>
  );
}