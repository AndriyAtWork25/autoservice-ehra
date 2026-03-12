import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen">

      <Image
        src="/hero-bg9.jpg"
        alt="background"
        fill
        className="object-cover"
      />

    </section>
  );
}