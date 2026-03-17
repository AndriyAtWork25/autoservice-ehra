import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Datenschutz() {
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
                DATENSCHUTZ
              </span>

              <h1 className="absolute top-7 left-0 text-2xl font-bold text-white">
                Datenschutz
              </h1>

              <span className="absolute top-[62px] left-0 h-[2px] w-36 bg-white"></span>
            </div>

            {/* Allgemeine Hinweise */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Allgemeine Hinweise
              </h3>

              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges
                Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich
                und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                dieser Datenschutzerklärung.
              </p>
            </div>

            {/* Datenerfassung */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Datenerfassung auf dieser Website
              </h3>

              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Beim Besuch dieser Website werden automatisch Informationen durch
                den Webserver erfasst. Dazu gehören beispielsweise IP-Adresse,
                Browsertyp, Betriebssystem sowie Datum und Uhrzeit des Zugriffs.
                Diese Daten dienen ausschließlich zur Sicherstellung eines
                störungsfreien Betriebs der Website.
              </p>
            </div>

            {/* Google Maps */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Nutzung von Google Maps
              </h3>

              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Diese Website enthält Links zu Google Maps, um unseren Standort
                anzuzeigen. Beim Öffnen von Google Maps können Daten an Google
                übertragen werden. Weitere Informationen zum Umgang mit
                Nutzerdaten finden Sie in der Datenschutzerklärung von Google.
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider">
                Kontakt
              </h3>

              <div className="mt-2 h-[2px] w-full bg-white/40"></div>

              <p className="mt-4 text-sm leading-7 text-white/80">
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden Ihre
                Angaben zur Bearbeitung der Anfrage und für mögliche
                Anschlussfragen gespeichert.
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="relative min-h-screen px-20 py-40">
            {/* großes Hintergrund Wort */}
            <span className="absolute top-[110px] left-[35px] text-[100px] font-bold text-white/10 select-none">
              DATENSCHUTZ
            </span>

            {/* Content */}
            <div className="relative max-w-[800px]">
              <h1 className="relative top-[180px] left-[450px] mb-16 text-5xl font-bold">
                Datenschutz
                <span className="absolute left-0 -bottom-3 h-[3px] w-[60%] bg-white"></span>
              </h1>

              <div className="relative top-[160px] left-[950px] flex w-[520px] flex-col gap-20 text-white">
                {/* Allgemeine Hinweise */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Allgemeine Hinweise
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges
                    Anliegen. Wir behandeln Ihre personenbezogenen Daten
                    vertraulich und entsprechend der gesetzlichen
                    Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>

                {/* Datenerfassung */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Datenerfassung auf dieser Website
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Beim Besuch dieser Website werden automatisch Informationen
                    durch den Webserver erfasst. Dazu gehören beispielsweise
                    IP-Adresse, Browsertyp, Betriebssystem sowie Datum und
                    Uhrzeit des Zugriffs. Diese Daten dienen ausschließlich zur
                    Sicherstellung eines störungsfreien Betriebs der Website.
                  </p>
                </div>

                {/* Google Maps */}
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Nutzung von Google Maps
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Diese Website enthält Links zu Google Maps, um unseren
                    Standort anzuzeigen. Beim Öffnen von Google Maps können
                    Daten an Google übertragen werden. Weitere Informationen zum
                    Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
                    von Google.
                  </p>
                </div>

                {/* Kontakt */}
                <div className="relative -left-210 -top-74">
                  <h3 className="text-2xl font-bold uppercase tracking-wider">
                    Kontakt
                  </h3>

                  <div className="mt-3 h-[2px] w-full bg-white/40"></div>

                  <p className="mt-6 text-xl leading-8 text-white/80">
                    Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden
                    Ihre Angaben zur Bearbeitung der Anfrage und für mögliche
                    Anschlussfragen gespeichert.
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