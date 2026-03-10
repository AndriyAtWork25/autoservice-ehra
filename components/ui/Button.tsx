import Link from "next/link";
import React from "react";

/*
  Das ist ein Typ für die Props der Komponente.
  Props sind die Eingaben einer Komponente.

  Beispiel:
  <Button href="#kontakt" variant="primary">Termin anfragen</Button>

  Dann sind:
  - href
  - variant
  - children

  die Props.
*/
type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

/*
  Button ist eine wiederverwendbare UI-Komponente.
  Wir verwenden Link statt <a>, weil Next.js dafür optimiert ist.
*/
export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  /*
    baseClasses:
    Klassen, die IMMER gelten, egal ob primary oder secondary.
  */
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300";

  /*
    variantClasses:
    Klassen, die abhängig von der Variante wechseln.
  */
  const variantClasses =
    variant === "primary"
      ? "bg-orange-500 text-white hover:bg-orange-600 shadow-[0_10px_30px_rgba(249,115,22,0.35)]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}