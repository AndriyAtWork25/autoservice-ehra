import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Impressum() {
  return (
    <>
      <main className="relative overflow-hidden text-white">
        <Navbar />

        {/* Background Bild */}
        <img
          src="/service-bg2.jpg"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />

        {/* dunkler Overlay */}
        <div className="absolute inset-0 bg-black/70 -z-10"></div>

        {/* MOBILE / TABLET */}
        <div className="block lg:hidden px-4 pb-16 pt-32">
          <div className="flex flex-col gap-10">
            {/* Titel */}
            <div className="relative h-[78px]">
              <span className="absolute top-0 left-0 text-4xl font-bold text-white/10 select-none">
                IMPRESSUM
              </span>

              <h1 className="absolute top-7 left-0 text-2xl font-bold text-white">
                Impressum
              </h1>

              <span className="absolute top-[62px] left-0 h-[2px] w-32 bg-white"></span>
            </div>

            {/* Angaben */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Angaben gemäß § 5 TMG
              </h3>
              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Autoservice Ehra
                <br />
                Musterstraße 12
                <br />
                38468 Ehra-Lessien
                <br />
                Deutschland
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Kontakt
              </h3>
              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80 break-words">
                Telefon: 05377 / 800205
                <br />
                E-Mail: info@autoservice-ehra.de
              </p>
            </div>

            {/* Haftung */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Haftung für Inhalte
              </h3>
              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen.
              </p>
            </div>

            {/* Verantwortlich */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h3>
              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Autoservice Ehra
                <br />
                Musterstraße 12
                <br />
                38468 Ehra-Lessien
                <br />
                Deutschland
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="relative min-h-screen px-20 py-40">
            {/* großes Hintergrund Wort */}
            <span className="absolute top-[110px] left-[35px] text-[100px] font-bold text-white/10 select-none">
              IMPRESSUM
            </span>

            {/* Content */}
            <div className="relative max-w-[800px]">
              <h1 className="relative left-100 top-50 mb-16 text-5xl font-bold">
                Impressum
                <span className="absolute left-0 -bottom-3 h-[3px] w-[45%] bg-white"></span>
              </h1>

              <div className="relative left-230 top-40 flex w-[520px] flex-col gap-20 text-white">
                {/* Angaben */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Angaben gemäß § 5 TMG
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Autoservice Ehra
                    <br />
                    Musterstraße 12
                    <br />
                    38468 Ehra-Lessien
                    <br />
                    Deutschland
                  </p>
                </div>

                {/* Haftung */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Haftung für Inhalte
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                    erstellt. Für die Richtigkeit, Vollständigkeit und
                    Aktualität der Inhalte können wir jedoch keine Gewähr
                    übernehmen.
                  </p>
                </div>

                {/* Verantwortlicher */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Autoservice Ehra
                    <br />
                    Musterstraße 12
                    <br />
                    38468 Ehra-Lessien
                    <br />
                    Deutschland
                  </p>
                </div>

                {/* Kontakt */}
                <div className="relative -left-210 -top-60">
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Kontakt
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Telefon: 05377 / 800205
                    <br />
                    E-Mail: info@autoservice-ehra.de
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}