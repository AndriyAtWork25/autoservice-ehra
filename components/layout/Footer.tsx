/*
  Footer = unterer Bereich der Seite.
  Dort sammeln wir grundlegende Informationen und Branding.
*/
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/40">
      <div className="container flex flex-col gap-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">Autoservice Ehra</p>
          <p>KFZ & Motorrad Service</p>
        </div>

        <p>© 2026 Autoservice Ehra. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}