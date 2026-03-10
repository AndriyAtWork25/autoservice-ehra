import Button from "../ui/Button";

/*
  Hero = der erste sichtbare große Bereich der Startseite.
  Er soll sofort Eindruck machen und klar kommunizieren:
  Wer sind wir? Was machen wir? Was soll der Nutzer tun?
*/
export default function Hero() {
  return (
    /*
      section = inhaltlicher Bereich.
      relative = Basis für spätere absolute Elemente / Effekte.
      overflow-hidden = falls Deko-Elemente rausgehen, werden sie sauber abgeschnitten.
    */
    <section className="relative overflow-hidden">
      {/* 
        Weiche Hintergrund-Effekte für mehr Tiefe.
        Diese Elemente sind rein dekorativ.
      */}
      <div className="absolute left-0 top-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="container relative grid min-h-[calc(100vh-80px)] items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        {/* Linke Spalte: Textinhalt */}
        <div className="max-w-2xl">
          {/* Kleine Badge-Zeile */}
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
            Modern • Schnell • Zuverlässig
          </div>

          {/* Hauptüberschrift */}
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Professioneller
            <span className="block bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              KFZ & Motorrad Service
            </span>
            in Ehra-Lessien
          </h1>

          {/* Untertext */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
            Moderner Autoservice für Wartung, Reparatur und zuverlässige
            Betreuung. Schnell erreichbar, klar kommuniziert und mit Fokus auf
            saubere Arbeit.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#kontakt">Termin anfragen</Button>
            <Button href="#leistungen" variant="secondary">
              Leistungen ansehen
            </Button>
          </div>

          {/* Kleine Trust-Fakten */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">Schnell</p>
              <p className="mt-1 text-sm text-slate-400">
                Kurze Wege und direkte Anfrage
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">Klar</p>
              <p className="mt-1 text-sm text-slate-400">
                Verständliche Kommunikation
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">Modern</p>
              <p className="mt-1 text-sm text-slate-400">
                Zeitgemäßer Service-Auftritt
              </p>
            </div>
          </div>
        </div>

        {/* Rechte Spalte: visuelle Karte / Platzhalter */}
        <div className="relative">
          {/* Große Card als Design-Element */}
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            {/* Oberer Bereich */}
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                    Autoservice Ehra
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    Werkstatt mit modernem Auftritt
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-lg font-bold text-orange-400">
                  AE
                </div>
              </div>

              {/* Linien / Informationen */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Service-Fokus</p>
                  <p className="mt-1 font-semibold text-white">
                    Wartung, Reparatur, Diagnose
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Standort</p>
                  <p className="mt-1 font-semibold text-white">Ehra-Lessien</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Erreichbarkeit</p>
                  <p className="mt-1 font-semibold text-white">
                    Schnell anfragen per Telefon oder Formular
                  </p>
                </div>
              </div>
            </div>

            {/* Kleine untere Info-Box */}
            <div className="mt-5 rounded-[1.5rem] border border-blue-400/15 bg-blue-400/10 p-5">
              <p className="text-sm text-blue-100">
                Statische Website-Architektur für schnelle Ladezeiten und
                modernen Business-Auftritt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}