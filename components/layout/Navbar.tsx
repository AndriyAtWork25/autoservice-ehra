"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [revealed, setRevealed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealed(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/5 backdrop-blur-xl">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        <div
          className={`h-full w-full bg-black/80 transition-transform duration-700 ease-out ${
            revealed ? "translate-x-0" : "-translate-x-full"
          }`}
        ></div>
      </div>

      {/* MOBILE / TABLET */}
      <div className="relative z-10 flex items-center justify-between px-4 py-4 lg:hidden">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo1.png"
            alt="Autoservice Ehra Logo"
            width={120}
            height={50}
            className="w-[90px] object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="tel:+4905377800205"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-bold text-black"
          >
            Anrufen
          </a>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white"
            aria-label="Menü öffnen"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-[2px] w-5 bg-white transition ${
                  menuOpen ? "translate-y-[8px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-white transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-white transition ${
                  menuOpen ? "-translate-y-[8px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="relative z-10 border-t border-white/10 bg-black/95 px-4 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-4 text-white">
            <button
              onClick={() => {
                window.location.href = "/";
                closeMenu();
              }}
              className="text-left text-lg font-semibold"
            >
              Home
            </button>

            <a
              href="#services"
              onClick={closeMenu}
              className="text-lg font-semibold"
            >
              Service
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="text-lg font-semibold"
            >
              Über uns
            </a>

            <a
              href="#address"
              onClick={closeMenu}
              className="text-lg font-semibold"
            >
              Adresse
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="text-lg font-semibold"
            >
              Kontakt
            </a>

            <a
              href="tel:+4905377800205"
              className="mt-2 inline-flex w-full items-center justify-center rounded-[30px_10px_30px_10px] border border-white bg-white px-6 py-3 text-base font-bold text-black"
            >
              05377 / 800205
            </a>
          </div>
        </div>
      )}

      {/* DESKTOP */}
      <div className="relative z-10 hidden lg:flex items-center px-6 py-6 md:px-10">
        {/* Logo + Call Bereich */}
        <div className="ml-10 flex items-center gap-8">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Autoservice Ehra Logo"
              width={180}
              height={60}
              className="relative left-6 w-[120px] md:w-[140px]"
              priority
            />
          </Link>

          <div className="relative left-4 top-6 flex flex-col items-start">
            <span className="text-2xl font-semibold tracking-wide text-white md:text-3xl">
              Jetzt anrufen
            </span>

            <a
              href="tel:+4905377800205"
              className="group relative inline-flex min-w-[180px] items-center justify-center overflow-hidden rounded-[30px_10px_30px_10px] border border-white bg-white px-7 py-3 text-lg font-bold text-black"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                05377 / 800205
              </span>

              <span className="absolute inset-0 -translate-x-full transform bg-black transition-transform duration-300 group-hover:translate-x-0"></span>
            </a>
          </div>
        </div>

        {/* Navigation Buttons rechts */}
        <div className="absolute right-10 top-8 flex gap-8 text-2xl font-semibold text-white">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="group relative text-white"
          >
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>

          <a href="#services" className="group relative">
            Service
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#about" className="group relative">
            Über uns
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#address" className="group relative">
            Adresse
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a href="#contact" className="group relative">
            Kontakt
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}