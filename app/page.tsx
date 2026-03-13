"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const addressImages = [
    "/address-1.jpg",
    "/address-2.jpg",
    "/address-3.jpg",
    "/address-4.jpg",
  ];

  const [currentAddressImage, setCurrentAddressImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAddressImage((prev) =>
        prev === addressImages.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [addressImages.length]);
  return (
    <>
      <Navbar />
  <Hero />

<section
  id="services"
  className="relative min-h-screen px-10 pt-40 py-20"
>
  <img
    src="/service-bg2.jpg"
    alt="Services background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <div className="absolute inset-0 bg-black/40 -z-10"></div>

  {/* HEADER BLOCK */}
  <div className="relative top-22 left-5">

    <span className="absolute -top-22 left-0 text-[120px] font-bold text-white/10 select-none">
      SERVICE
    </span>

    <h2 className="inline-block text-5xl font-bold text-white relative left-20">
      Kompletter Fahrzeugservice <br />
      für Auto und Motorrad
      <span className="absolute left-0 -bottom-3 h-[3px] w-[70%] bg-white"></span>
    </h2>

    <div className="absolute w-[350px] h-[450px] top-[20px] left-[1100px] transition duration-300 hover:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_scale(1.05)]">

      <div className="absolute -top-6 -left-6 w-full h-full border border-white/60 rounded-[80px_20px_80px_20px]"></div>

      <img
        src="/motor.png"
        alt="Motor"
        className="relative w-full h-full object-cover rounded-[80px_20px_80px_20px] shadow-2xl"
      />

    </div>

  </div>

  {/* HIER SERVICE BOX EINSETZEN */}
  <div className="absolute top-[250px] left-[120px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-4deg)]">

    <img
      src="/service-oil.jpg"
      alt="Ölwechsel und Motorservice"
      className="h-[80px] w-full object-cover"
    />

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-white">
        Ölwechsel & Motorservice
      </h3>

    </div>

  </div>

  
  {/* HIER SERVICE BOX EINSETZEN */}
  <div className="absolute top-[250px] left-[400px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-4deg)]">

    <img
      src="/service-inspection.png"
      alt="Inspektion und Wartung"
      className="h-[80px] w-full object-cover"
    />

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-white">
        Inspektion & Wartung
      </h3>

    </div>

  </div>

  {/* HIER SERVICE BOX EINSETZEN */}
  <div className="absolute top-[250px] left-[680px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-4deg)]">

    <img
      src="/service-brakes.png"
      alt="Bremsenservice"
      className="h-[80px] w-full object-cover"
    />

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-white">
        Bremsen wechseln <br />
          & Service
      </h3>

    </div>

  </div>

  {/* HIER SERVICE BOX EINSETZEN */}
  <div className="absolute top-[450px] left-[120px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-4deg)]">

    <img
      src="/service-tyres.png"
      alt="Reifenwechsel & Reifenservice"
      className="h-[80px] w-full object-cover"
    />

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-white">
        Reifenwechsel & <br />
        Reifenservice
      </h3>

    </div>

  </div>


  {/* HIER SERVICE BOX EINSETZEN */}
  <div className="absolute top-[450px] left-[400px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-4deg)]">

    <img
      src="/service-diagnostic.png"
      alt="Diagnose & Fehlerauslesen"
      className="h-[80px] w-full object-cover"
    />

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-white">
        Diagnose & <br />
        Fehlerauslesen
      </h3>

    </div>

  </div>


   {/* HIER SERVICE BOX EINSETZEN */}
  <div className="absolute top-[450px] left-[680px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-4deg)]">

    <img
      src="/service-other.png"
      alt="Und vieles mehr für Ihr Auto und Motorrad"
      className="h-[80px] w-full object-cover"
    />

    <div className="p-6 text-center">
      <h3 className="text-lg font-bold text-white">
        Und vieles mehr für  <br />
        Ihr Auto und Motorrad
      </h3>

    </div>

  </div>

</section>
<section id="about" className="relative min-h-screen px-10 pt-40 py-20">
  <img
    src="/service-bg2.jpg"
    alt="Über uns Hintergrund"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  <div className="absolute inset-0 bg-black/55 -z-10"></div>

  {/* ABOUT Hintergrund */}
<span className="absolute top-[60px] left-[35px] text-[120px] font-bold text-white/10 select-none">
  ABOUT
</span>

{/* linker Bereich */}
<div className="absolute left-[120px] top-[150px]">

  <h2 className="relative text-5xl font-bold text-white">
    Über uns
    <span className="absolute left-0 -bottom-1 h-[3px] w-[70%] bg-white"></span>
  </h2>

  <p className="mt-12 max-w-[520px] text-2xl leading-10 text-white/85">
    Wir stehen für zuverlässigen Fahrzeugservice, saubere Arbeit und
    persönliche Betreuung. Ob Auto oder Motorrad, bei uns bekommen
    Sie Service, Wartung und Reparatur aus einer Hand.
  </p>

</div>
  {/* rechter Statistik-Bereich */}
  <div className="absolute right-[120px] top-[180px] grid grid-cols-2 gap-x-20 gap-y-16">
    <div className="w-[320px] border-b border-white/40 pb-8">
      <h3 className="text-6xl font-bold text-white">10+</h3>
      <p className="mt-3 text-3xl uppercase text-white/60">
        Jahre Erfahrung
      </p>
    </div>

    <div className="w-[320px] border-b border-white/40 pb-8">
      <h3 className="text-6xl font-bold text-white">100%</h3>
      <p className="mt-3 text-3xl uppercase text-white/60">
        Einsatz für Qualität
      </p>
    </div>

    <div className="w-[320px] border-b border-white/40 pb-8">
      <h3 className="text-6xl font-bold text-white">Auto & Motorrad</h3>
      <p className="mt-3 text-3xl uppercase text-white/60">
        Service aus einer Hand
      </p>
    </div>

    <div className="w-[320px] border-b border-white/40 pb-8">
      <h3 className="text-6xl font-bold text-white">Persönlich & Privat</h3>
      <p className="mt-3 text-3xl uppercase text-white/60">
        Direkt, ehrlich, nah
      </p>
    </div>
  </div>
</section>
<section id="address" className="relative min-h-screen px-10 pt-40 py-20">
  <img
    src="/service-bg2.jpg"
    alt="Über uns Hintergrund"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

   <div className="absolute inset-0 bg-black/55 -z-10"></div>

  {/* ABOUT Hintergrund */}
<span className="absolute top-[40px] left-[35px] text-[120px] font-bold text-white/10 select-none">
  Adresse
</span>

{/* linker Bereich */}
<div className="absolute left-[120px] top-[140px]">

  <h2 className="relative text-5xl font-bold text-white">
    Hier sind wir
    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white"></span>
  </h2>
  </div>

 {/* Maps Bild Box */}
<div className="absolute left-[120px] top-[250px] w-[520px] h-[280px]">
  {/* weißer Rahmen */}
  <div className="absolute -top-5 -left-5 w-full h-full border border-white/60 rounded-[70px_20px_70px_20px]"></div>

  {/* Bild */}
  <img
    src="/maps-preview2.jpg"
    alt="Standort Karte"
    className="relative w-full h-full object-cover rounded-[70px_20px_70px_20px] shadow-2xl transition duration-300 hover:[transform:perspective(1000px)_rotateY(-6deg)_rotateX(3deg)_scale(1.03)]"
  />
</div>

{/* Adresse + Text darunter */}
<div className="absolute left-[120px] top-[540px] max-w-[520px]">
  <a
    href="https://maps.app.goo.gl/ToEY8ZMsyJshBgJA9?g_st=it"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-3xl font-bold text-white transition hover:text-white/80"
  >
    Musterstraße 12, 38468 Ehra-Lessien
  </a>

  <p className="mt-5 text-xl leading-8 text-white/80">
    Besuchen Sie unseren Standort direkt vor Ort oder öffnen Sie die Route
    bequem in Google Maps.
  </p>
</div>

   <div className="absolute top-[140px] right-[180px] w-[340px] h-[430px]">
    {/* weißer Rahmen */}
    <div className="absolute -top-5 -left-5 w-full h-full border border-white/60 rounded-[70px_20px_70px_20px]"></div>

    {/* Bild Slider */}
    <img
      src={addressImages[currentAddressImage]}
      alt="Werkstatt Bild"
      className="relative w-full h-full object-cover rounded-[70px_20px_70px_20px] shadow-2xl transition duration-500 hover:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_scale(1.03)]"
    />

    {/* Punkte */}
    <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
      {addressImages.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentAddressImage(index)}
          className={`h-3 w-3 rounded-full transition ${
            currentAddressImage === index ? "bg-white" : "bg-white/40"
          }`}
        />
      ))}
    </div>
  </div>

</section>
<section id="contact" className="min-h-screen"></section>

  <Footer />
    </>
  );
}