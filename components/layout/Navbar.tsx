"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.05 4.94A9.87 9.87 0 0 0 12.03 2C6.56 2 2.1 6.46 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.26-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.47 0 9.93-4.46 9.93-9.93a9.83 9.83 0 0 0-2.92-6.97ZM12.04 20.16h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.27-4.38c0-4.51 3.68-8.19 8.21-8.19 2.19 0 4.24.85 5.79 2.39a8.13 8.13 0 0 1 2.4 5.8c0 4.53-3.68 8.22-8.15 8.22Zm4.49-6.13c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.17-1.39-1.31-1.63-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.68 2.57 4.07 3.6.57.25 1.02.39 1.37.5.58.18 1.11.15 1.53.09.47-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

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
      className="w-[82px] object-contain"
      priority
    />
  </Link>

  <div className="flex items-center gap-2">
    <a
  href="tel:+4905377800205"
  className="inline-flex min-h-[40px] min-w-[95px] items-center justify-center rounded-full bg-white px-5 py-2 text-[13px] font-bold text-black"
>
  Anrufen
</a>

<a
  href="https://wa.me/495377800205"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex min-h-[40px] min-w-[90px] items-center justify-center gap-1.5 rounded-full border border-white bg-white px-5 py-2 text-[13px] font-bold text-black transition hover:bg-black hover:text-white"
>
  <WhatsAppIcon className="h-4 w-4" />
  WhatsApp
</a>

    <button
      onClick={() => setMenuOpen((prev) => !prev)}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
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
            <Link
  href="/"
  onClick={closeMenu}
  className="text-left text-lg font-semibold"
>
  Home
</Link>

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

            <a
              href="https://wa.me/495377800205"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-[30px_10px_30px_10px] border border-white bg-white px-6 py-3 text-base font-bold text-black transition hover:bg-black hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp schreiben
            </a>
          </div>
        </div>
      )}

      {/* DESKTOP */}
      <div className="relative z-10 hidden items-center px-6 py-5 md:px-8 lg:flex">
        <div className="ml-8 flex items-center gap-6">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Autoservice Ehra Logo"
              width={180}
              height={60}
              className="relative left-4 w-[100px] md:w-[120px]"
              priority
            />
          </Link>

          <div className="relative left-2 top-4 flex items-start gap-4">
            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold tracking-wide text-white md:text-2xl">
                Jetzt anrufen
              </span>

              <a
                href="tel:+4905377800205"
                className="group relative inline-flex min-w-[150px] items-center justify-center overflow-hidden rounded-[30px_10px_30px_10px] border border-white bg-white px-5 py-2.5 text-base font-bold text-black"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  05377 / 800205
                </span>
                <span className="absolute inset-0 -translate-x-full transform bg-black transition-transform duration-300 group-hover:translate-x-0"></span>
              </a>
            </div>

            <div className="flex flex-col items-start">
              <span className="text-xl font-semibold tracking-wide text-white md:text-2xl">
                Jetzt schreiben
              </span>

              <a
                href="https://wa.me/495377800205"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex min-w-[180px] items-center justify-center gap-2 overflow-hidden rounded-[30px_10px_30px_10px] border border-white bg-white px-5 py-2.5 text-base font-bold text-black"
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  <WhatsAppIcon className="h-4 w-4" />
                  05377 / 800205
                </span>
                <span className="absolute inset-0 -translate-x-full transform bg-black transition-transform duration-300 group-hover:translate-x-0"></span>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute right-8 top-8 flex gap-6 text-lg font-semibold text-white xl:text-xl">
          <Link href="/" className="group relative text-white">
  Home
  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
</Link>

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