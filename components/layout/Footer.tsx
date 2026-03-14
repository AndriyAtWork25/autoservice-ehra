import Reveal from "../ui/Reveal"

export default function Footer() {
  return (
    <footer className="relative w-full bg-black h-[110px] px-10">

      {/* kleines Logo */}
      <div className="absolute left-[4%] bottom-14">
        <img
          src="/logo1.png"
          alt="Autoservice Ehra Logo"
          className="w-[40px] object-contain"
        />
      </div>

      {/* linker Text */}
      <span className="absolute left-10 bottom-6 text-white/80 text-base">
        © 2026 Autoservice Ehra | 
        <a href="/impressum" className="hover:text-white"> Impressum </a> | 
        <a href="/datenschutz" className="hover:text-white"> Datenschutz </a>
      </span>

      {/* rechter Text */}
      <span className="absolute right-10 bottom-6 text-white/80 text-base">
        Website by Andriy Tsar
      </span>

    </footer>
  );
}