"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [revealed, setRevealed] = useState(false);
  useEffect(() => {
  setTimeout(() => {
    setRevealed(true);
  }, 50);

  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
   <nav
  className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
    scrolled
      ? "bg-black/35 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.22)]"
      : "bg-transparent"
  }`}
>
    <div className="absolute inset-0 -z-0 overflow-hidden">
    <div
  className={`h-full w-full bg-black/80 transition-transform duration-700 ease-out ${
    revealed ? "translate-x-0" : "-translate-x-full"
  }`}
></div>
  </div>

      <div className="relative z-10 flex items-center px-6 py-6 md:px-10">

        {/* Logo + Call Bereich */}
        <div className="flex items-center gap-8 ml-10">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Autoservice Ehra Logo"
              width={180}
              height={60}
              className="w-[120px] md:w-[140px] relative left-6"
              priority
            />
          </Link>

          {/* Text + Telefonnummer */}
          <div className="relative top-6 flex flex-col items-start relative left-4">
  <span className="text-2xl font-semibold tracking-wide text-white md:text-3xl">
    Jetzt anrufen
  </span>

  <a
  href="tel:+4905377800205"
  className="relative overflow-hidden inline-flex items-center justify-center min-w-[180px] rounded-[30px_10px_30px_10px] border border-white px-7 py-3 text-lg font-bold text-black bg-white group"
>
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    05377 / 800205
  </span>

  <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
</a>

          </div>
        </div>
         {/* Navigation Buttons rechts */}
    <div className="absolute right-10 top-8 flex gap-8 text-white text-2xl font-semibold">
       <a href="#services" className="relative group">
    Service
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#about" className="relative group">
    Über uns
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#address" className="relative group">
    Adresse
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </a>

  <a href="#contact" className="relative group">
    Kontakt
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
  </a>
    </div>
      </div>
    </nav>
  );
}