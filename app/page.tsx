"use client";

import Reveal from "@/components/ui/Reveal";
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

<section id="services" className="relative overflow-hidden">
  <img
    src="/service-bg2.jpg"
    alt="Services background"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />
  <div className="absolute inset-0 bg-black/40 -z-10"></div>

 {/* MOBILE / TABLET */}
<div className="block lg:hidden min-h-[450px] px-3 pt-14 pb-4">

  <div className="relative mb-6 h-[70px]">
    <span className="absolute top-0 left-0 text-4xl font-bold text-white/10 select-none">
      SERVICE
    </span>

    <h2 className="absolute top-6 left-0 text-base font-bold leading-tight text-white">
      Fahrzeugservice
      <br />
      für Auto & Motorrad
    </h2>

    <span className="absolute top-[62px] left-0 h-[2px] w-48 bg-white"></span>
  </div>

  <div className="mt-4 flex flex-col gap-1.5">
    <div className="flex items-center gap-4 rounded-[10px] bg-[#2b2b2b]/95 px-2 py-1.5">
      <img
        src="/service-oil.jpg"
        alt="Ölwechsel"
        className="h-[42px] w-[62px] shrink-0 rounded object-cover"
      />
      <p className="text-[12px] font-semibold leading-tight text-white">
        Ölwechsel
      </p>
    </div>

    <div className="flex items-center gap-4 rounded-[10px] bg-[#2b2b2b]/95 px-2 py-1.5">
      <img
        src="/service-inspection.png"
        alt="Inspektion"
        className="h-[42px] w-[62px] shrink-0 rounded object-cover"
      />
      <p className="text-[12px] font-semibold leading-tight text-white">
        Inspektion
      </p>
    </div>

    <div className="flex items-center gap-4 rounded-[10px] bg-[#2b2b2b]/95 px-2 py-1.5">
      <img
        src="/service-brakes.png"
        alt="Bremsen Service"
        className="h-[42px] w-[62px] shrink-0 rounded object-cover"
      />
      <p className="text-[12px] font-semibold leading-tight text-white">
        Bremsen Service
      </p>
    </div>

    <div className="flex items-center gap-4 rounded-[10px] bg-[#2b2b2b]/95 px-2 py-1.5">
      <img
        src="/service-tyres.png"
        alt="Reifenwechsel"
        className="h-[42px] w-[62px] shrink-0 rounded object-cover"
      />
      <p className="text-[12px] font-semibold leading-tight text-white">
        Reifenwechsel
      </p>
    </div>

    <div className="flex items-center gap-4 rounded-[10px] bg-[#2b2b2b]/95 px-2 py-1.5">
      <img
        src="/service-diagnostic.png"
        alt="Diagnose"
        className="h-[42px] w-[62px] shrink-0 rounded object-cover"
      />
      <p className="text-[12px] font-semibold leading-tight text-white">
        Diagnose
      </p>
    </div>

    <div className="flex items-center gap-4 rounded-[10px] bg-[#2b2b2b]/95 px-2 py-1.5">
      <img
        src="/service-other.png"
        alt="Weitere Services"
        className="h-[42px] w-[62px] shrink-0 rounded object-cover"
      />
      <p className="text-[12px] font-semibold leading-tight text-white">
        Weitere Services
      </p>
    </div>
  </div>
</div>

  {/* DESKTOP */}
  <div className="hidden lg:block">
    <section className="relative min-h-screen px-10 pt-40 py-20">
      <Reveal className="relative top-22 left-5">
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
      </Reveal>

      <Reveal className="absolute top-[250px] left-[120px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
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
      </Reveal>

      <Reveal className="absolute top-[250px] left-[400px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
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
      </Reveal>

      <Reveal className="absolute top-[250px] left-[680px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
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
      </Reveal>

      <Reveal className="absolute top-[450px] left-[120px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <img
          src="/service-tyres.png"
          alt="Reifenwechsel"
          className="h-[80px] w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold text-white">
            Reifenwechsel & <br />
            Reifenservice
          </h3>
        </div>
      </Reveal>

      <Reveal className="absolute top-[450px] left-[400px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <img
          src="/service-diagnostic.png"
          alt="Diagnose"
          className="h-[80px] w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold text-white">
            Diagnose & <br />
            Fehlerauslesen
          </h3>
        </div>
      </Reveal>

      <Reveal className="absolute top-[450px] left-[680px] w-[200px] overflow-hidden rounded-[28px] bg-[#2b2b2b]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <img
          src="/service-other.png"
          alt="Weitere Services"
          className="h-[80px] w-full object-cover"
        />
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold text-white">
            Und vieles mehr für <br />
            Ihr Auto und Motorrad
          </h3>
        </div>
      </Reveal>
    </section>
  </div>
</section>

<section id="about" className="relative overflow-hidden">
  <img
    src="/service-bg2.jpg"
    alt="Über uns Hintergrund"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  <div className="absolute inset-0 bg-black/55 -z-10"></div>

 {/* MOBILE / TABLET */}
<div className="block lg:hidden min-h-[450px] px-3 pt-20 pb-20">

  <div className="flex flex-col gap-8">

    {/* Titel */}
    <div className="relative h-[70px]">

      <span className="absolute top-0 left-0 text-4xl font-bold text-white/10 select-none">
        ABOUT
      </span>

      <h2 className="absolute top-6 left-0 text-xl font-bold text-white">
        Über uns
      </h2>

      <span className="absolute top-12 left-0 h-[2px] w-32 bg-white"></span>

    </div>

    {/* Beschreibung */}
    <p className="text-[12px] leading-6 text-white/85">
      Wir stehen für zuverlässigen Fahrzeugservice, saubere Arbeit und
      persönliche Betreuung. Ob Auto oder Motorrad, bei uns bekommen
      Sie Service, Wartung und Reparatur aus einer Hand.
    </p>

    {/* Statistik */}
    <div className="grid grid-cols-2 gap-6">

      <div className="border-b border-white/30 pb-3">
        <h3 className="text-xl font-bold text-white">10+</h3>
        <p className="text-[11px] uppercase text-white/60">
          Jahre Erfahrung
        </p>
      </div>

      <div className="border-b border-white/30 pb-3">
        <h3 className="text-xl font-bold text-white">100%</h3>
        <p className="text-[11px] uppercase text-white/60">
          Einsatz für Qualität
        </p>
      </div>

      <div className="border-b border-white/30 pb-3">
        <h3 className="text-base font-bold text-white">
          Auto & Motorrad
        </h3>
        <p className="text-[11px] uppercase text-white/60">
          Service aus einer Hand
        </p>
      </div>

      <div className="border-b border-white/30 pb-3">
        <h3 className="text-base font-bold text-white">
          Persönlich & Privat
        </h3>
        <p className="text-[11px] uppercase text-white/60">
          Direkt, ehrlich, nah
        </p>
      </div>

    </div>

  </div>

</div>

  {/* DESKTOP */}
  <div className="hidden lg:block">
    <div className="relative min-h-screen px-10 pt-40 py-20">
      {/* ABOUT Hintergrund */}
      <span className="absolute top-[60px] left-[35px] text-[120px] font-bold text-white/10 select-none">
        ABOUT
      </span>

      {/* linker Bereich */}
      <Reveal className="absolute left-[120px] top-[150px]">
        <h2 className="relative text-5xl font-bold text-white">
          Über uns
          <span className="absolute left-0 -bottom-1 h-[3px] w-[70%] bg-white"></span>
        </h2>

        <p className="mt-12 max-w-[520px] text-2xl leading-10 text-white/85">
          Wir stehen für zuverlässigen Fahrzeugservice, saubere Arbeit und
          persönliche Betreuung. Ob Auto oder Motorrad, bei uns bekommen
          Sie Service, Wartung und Reparatur aus einer Hand.
        </p>
      </Reveal>

      {/* rechter Statistik-Bereich */}
      <Reveal className="absolute right-[120px] top-[180px] grid grid-cols-2 gap-x-20 gap-y-16">
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
      </Reveal>
    </div>
  </div>
</section>

<section id="address" className="relative overflow-hidden">
  <img
    src="/service-bg2.jpg"
    alt="Über uns Hintergrund"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  <div className="absolute inset-0 bg-black/55 -z-10"></div>

   {/* MOBILE / TABLET */}
  <div className="block lg:hidden px-3 pt-14 pb-14">
    <div className="flex flex-col gap-8">
      {/* Titel */}
      <div className="mt-4">
       <div className="relative h-[70px]">
  <span className="absolute top-0 left-0 text-4xl font-bold text-white/10 select-none">
    Adresse
  </span>

  <h2 className="absolute top-6 left-0 text-2xl font-bold text-white">
    Hier sind wir
  </h2>

  <span className="absolute top-14 left-0 h-[2px] w-42 bg-white"></span>
</div>
      </div>

      {/* Maps Bild */}
      <div className="rounded-[36px_14px_36px_14px] border border-white/40 p-2">
        <img
          src="/maps-preview2.jpg"
          alt="Standort Karte"
          className="h-[180px] w-full object-cover rounded-[30px_10px_30px_10px] shadow-xl"
        />
      </div>

      {/* Adresse */}
      <div>
        <a
          href="https://maps.app.goo.gl/ToEY8ZMsyJshBgJA9?g_st=it"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-2xl font-bold leading-tight text-white"
        >
          Musterstraße 12, 38468
          <br />
          Ehra-Lessien
        </a>

        <p className="mt-4 text-sm leading-6 text-white/80">
          Besuchen Sie unseren Standort direkt vor Ort oder öffnen Sie die Route
          bequem in Google Maps.
        </p>
      </div>

      {/* Werkstatt Slider Bild */}
      <div>
        <div className="rounded-[36px_14px_36px_14px] border border-white/40 p-2">
          <img
            src={addressImages[currentAddressImage]}
            alt="Werkstatt Bild"
            className="h-[240px] w-full object-cover rounded-[30px_10px_30px_10px] shadow-xl"
          />
        </div>

        <div className="mt-5 flex justify-center gap-3">
          {addressImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAddressImage(index)}
              className={`h-3 w-3 rounded-full transition ${
                currentAddressImage === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* DESKTOP */}
  <div className="hidden lg:block">
    <div className="relative min-h-screen px-10 pt-40 py-20">
      {/* Hintergrund Titel */}
      <span className="absolute top-[40px] left-[35px] text-[120px] font-bold text-white/10 select-none">
        Adresse
      </span>

      {/* linker Bereich */}
      <Reveal className="absolute left-[120px] top-[140px]">
        <h2 className="relative text-5xl font-bold text-white">
          Hier sind wir
          <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-white"></span>
        </h2>
      </Reveal>

      {/* Maps Bild Box */}
      <Reveal className="absolute left-[120px] top-[250px] w-[520px] h-[280px]">
        <div className="absolute -top-5 -left-5 w-full h-full border border-white/60 rounded-[70px_20px_70px_20px]"></div>

        <img
          src="/maps-preview2.jpg"
          alt="Standort Karte"
          className="relative w-full h-full object-cover rounded-[70px_20px_70px_20px] shadow-2xl transition duration-300 hover:[transform:perspective(1000px)_rotateY(-6deg)_rotateX(3deg)_scale(1.03)]"
        />
      </Reveal>

      {/* Adresse + Text darunter */}
      <Reveal className="absolute left-[120px] top-[540px] max-w-[520px]">
        <a
          href="https://maps.app.goo.gl/ToEY8ZMsyJshBgJA9?g_st=it"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-10 inline-block text-4xl text-white transition hover:text-white"
        >
          Musterstraße 12, 38468 Ehra-Lessien
          <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>

        <p className="relative top-6 text-lg leading-8 text-white/80">
          Besuchen Sie unseren Standort direkt vor Ort oder öffnen Sie die Route
          bequem in Google Maps.
        </p>
      </Reveal>

      {/* Rechter Slider */}
      <Reveal className="absolute top-[140px] right-[180px] w-[340px] h-[430px]">
        <div className="absolute -top-5 -left-5 w-full h-full border border-white/60 rounded-[70px_20px_70px_20px]"></div>

        <img
          src={addressImages[currentAddressImage]}
          alt="Werkstatt Bild"
          className="relative w-full h-full object-cover rounded-[70px_20px_70px_20px] shadow-2xl transition duration-500 hover:[transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)_scale(1.03)]"
        />

        <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-3">
          {addressImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentAddressImage(index)}
              className={`h-3 w-3 rounded-full transition ${
                currentAddressImage === index ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </div>
      </Reveal>
    </div>
  </div>
</section>
<section id="contact" className="relative overflow-hidden">
  <img
    src="/service-bg2.jpg"
    alt="Kontakt Hintergrund"
    className="absolute inset-0 w-full h-full object-cover -z-10"
  />

  <div className="absolute inset-0 bg-black/60 -z-10"></div>

  {/* MOBILE / TABLET */}
  <div className="block lg:hidden px-3 pt-14 pb-14">
    <div className="flex flex-col gap-10">

      {/* Logo + Socials */}
      <div className="flex flex-col items-center">
        <img
          src="/logo1.png"
          alt="Autoservice Ehra Logo"
          className="w-[220px] object-contain"
        />

        <div className="mt-6 flex items-center gap-6">
          <a
            href="https://www.instagram.com/autoservice_ehra?igsh=aTh2NHY1ZWtrdnc2"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
            aria-label="Instagram"
          >
            <img
              src="/instagram-icon2.png"
              alt="Instagram"
              className="h-[38px] w-[38px] object-contain"
            />
          </a>

          <a
            href="https://maps.app.goo.gl/ToEY8ZMsyJshBgJA9?g_st=it"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:scale-110"
            aria-label="Google Maps"
          >
            <img
              src="/googlemaps-icon2.png"
              alt="Google Maps"
              className="h-[38px] w-[38px] object-contain"
            />
          </a>
        </div>
      </div>

      {/* Kontaktinfos */}
      <div className="flex flex-col gap-8 text-white">

        {/* Adresse */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider">
            Adresse:
          </h3>

          <div className="mt-2 h-[2px] w-full bg-white/40"></div>

          <a
            href="https://maps.app.goo.gl/ToEY8ZMsyJshBgJA9?g_st=it"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-base leading-7 text-white/80 transition hover:text-white"
          >
            Musterstraße 12 <br />
            38468 Ehra-Lessien
          </a>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider">
            Öffnungszeiten:
          </h3>

          <div className="mt-2 h-[2px] w-full bg-white/40"></div>

          <p className="mt-4 text-base leading-7 text-white/80">
            Mo – Fr: 08:00 – 17:00 <br />
            Sa: 08:00 – 14:00
          </p>
        </div>

        {/* Telefon */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider">
            Telefon:
          </h3>

          <div className="mt-2 h-[2px] w-full bg-white/40"></div>

          <a
            href="tel:+4905377800205"
            className="mt-4 inline-block text-base text-white/80 transition hover:text-white"
          >
            05377 / 800205
          </a>
        </div>
      </div>

    </div>
  </div>

  {/* DESKTOP */}
  <div className="hidden lg:block">
    <div className="relative min-h-screen px-10 pt-40 py-20">

      {/* linker Block */}
      <Reveal className="absolute left-[120px] top-[160px] flex flex-col items-start">
        <img
          src="/logo1.png"
          alt="Autoservice Ehra Logo"
          className="w-[260px] object-contain"
        />

        <div className="relative left-[75px] mt-10 flex items-center gap-6">
          <a
            href="https://www.instagram.com/autoservice_ehra?igsh=aTh2NHY1ZWtrdnc2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:scale-110 hover:text-white/80"
            aria-label="Instagram"
          >
            <img
              src="/instagram-icon2.png"
              alt="Instagram"
              className="w-[42px] h-[42px] object-contain"
            />
          </a>

          <a
            href="https://maps.app.goo.gl/ToEY8ZMsyJshBgJA9?g_st=it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition hover:scale-110 hover:text-white/80"
            aria-label="Google Maps"
          >
            <img
              src="/googlemaps-icon2.png"
              alt="Google Maps"
              className="w-[42px] h-[42px] object-contain"
            />
          </a>
        </div>
      </Reveal>

      {/* rechter Kontakt Bereich */}
      <Reveal className="absolute right-[220px] top-[160px] w-[420px] text-white flex flex-col gap-16">

        {/* Adresse */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold tracking-wider uppercase">
            Adresse:
          </h3>

          <div className="mt-3 h-[2px] w-full bg-white/40"></div>

          <a
            href="https://maps.app.goo.gl/ToEY8ZMsyJshBgJA9?g_st=it"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block text-xl leading-8 text-white/80 transition hover:text-white"
          >
            Musterstraße 12 <br />
            38468 Ehra-Lessien
          </a>
        </div>

        {/* Öffnungszeiten */}
        <div className="mb-14">
          <h3 className="text-2xl font-bold tracking-wider uppercase">
            Öffnungszeiten:
          </h3>

          <div className="mt-3 h-[2px] w-full bg-white/40"></div>

          <p className="mt-6 text-xl leading-8 text-white/80">
            Mo – Fr: 08:00 – 17:00 <br />
            Sa: 08:00 – 14:00
          </p>
        </div>

        {/* Telefonnummer */}
        <div>
          <h3 className="text-2xl font-bold tracking-wider uppercase">
            Telefon:
          </h3>

          <div className="mt-3 h-[2px] w-full bg-white/40"></div>

          <a
            href="tel:+4905377800205"
            className="mt-6 inline-block text-xl text-white/80 transition hover:text-white"
          >
            05377 / 800205
          </a>
        </div>

      </Reveal>
    </div>
  </div>
</section>

  <Footer />
    </>
  );
}