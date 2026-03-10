import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

// Diese Datei rendert die Startseite.
// Wir setzen die Seite aus mehreren Komponenten zusammen.
// Das ist sauberer und besser wartbar als alles in eine Datei zu schreiben.
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}