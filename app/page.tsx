import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

/*
  HomePage ist die Startseite.
  Wir setzen die Seite modular aus einzelnen Komponenten zusammen.
*/
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}