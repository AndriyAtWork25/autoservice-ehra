import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-20 w-full">
      <div className="flex items-center px-6 py-6 md:px-10">

        {/* Logo + Call Bereich */}
        <div className="flex items-center gap-8">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Autoservice Ehra Logo"
              width={180}
              height={60}
              className="w-[150px] md:w-[180px]"
              priority
            />
          </Link>

          {/* Text + Telefonnummer */}
          <div className="relative top-8 flex flex-col items-start">
  <span className="text-2xl font-semibold tracking-wide text-white md:text-3xl">
    Jetzt anrufen
  </span>

  <a
  href="tel:+4905377800205"
  className="relative overflow-hidden inline-flex items-center justify-center min-w-[180px] rounded-full border border-white px-7 py-3 text-lg font-bold text-black bg-white group"
>
  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
    05377 / 800205
  </span>

  <span className="absolute inset-0 bg-black transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
</a>

          </div>
        </div>
         {/* Navigation Buttons rechts */}
    <div className="absolute right-10 top-8 flex gap-8 text-white text-xl font-semibold">
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