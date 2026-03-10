import Link from "next/link";
import Button from "../ui/Button";

/*
  Navbar = obere Hauptnavigation.
  Sie bleibt oben sichtbar und hilft dem Nutzer,
  schnell zu wichtigen Bereichen zu springen.
*/
export default function Navbar() {
  return (
    /*
      header ist semantisch der obere Bereich der Seite.
      sticky = bleibt oben "kleben", wenn man scrollt.
      top-0 = ganz oben am Bildschirm.
      z-50 = sorgt dafür, dass die Navbar über anderen Elementen liegt.
    */
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="container flex h-20 items-center justify-between">
        {/* 
          Link zur Startseite.
          Später können wir hier auch das echte Logo einbauen.
        */}
        <Link href="/" className="flex items-center gap-3">
          {/* Kleiner visueller Logo-Platzhalter */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-sm font-bold text-orange-400">
            AE
          </div>

          <div>
            <p className="text-base font-bold tracking-wide text-white md:text-lg">
              Autoservice Ehra
            </p>
            <p className="text-xs text-slate-400 md:text-sm">
              KFZ & Motorrad Service
            </p>
          </div>
        </Link>

        {/* 
          Desktop-Navigation:
          Auf kleinen Bildschirmen wird sie erstmal ausgeblendet.
          Mobile Menü bauen wir im nächsten Schritt/der nächsten Phase sauber.
        */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#leistungen"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Leistungen
          </Link>

          <Link
            href="#warum-wir"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Warum wir
          </Link>

          <Link
            href="#kontakt"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Kontakt
          </Link>

          <Button href="#kontakt">Termin anfragen</Button>
        </div>
      </nav>
    </header>
  );
}