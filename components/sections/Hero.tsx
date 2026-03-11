import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen">

      <Image
        src="/hero-bg6.jpg"
        alt="background"
        fill
        className="object-cover"
      />

    </section>
  );
}