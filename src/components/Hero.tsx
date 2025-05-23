import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/banner-guantes.png" 
          alt="Guantes con nieve" 
          fill 
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white-/10 via-white/60 to-white"
          aria-hidden="true"
        />
      </div>
      
      {/* Content Box */}
      <div className="w-full h-full flex items-center justify-center px-4">
        <div className="bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-md max-w-2xl mx-auto border border-[#1D2F4E]">
          <h1 className="text-2xl md:text-3xl text-[#1D2F4E] font-semibold mb-2 text-center">
            Impulsando la protección y la moda en cada estación.
          </h1>
          <p className="text-[#333333] mb-6 text-center text-sm md:text-base">
          Con más de una década de experiencia, nuestra marca es sinónimo de seguridad, estilo y desempeño en cada producto.
          </p>
          <div className="flex flex-row gap-3 justify-center">
            <Link href="https://wa.me/5491134943796" className="group bg-[#1D2F4E] text-white py-3 px-4 rounded font-medium hover:bg-[#1D2F4E]/90 transition flex items-center justify-center text-md">
              Contactanos
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link href="#como-trabajamos" className="text-[#1D2F4E] py-3 px-4 rounded text-md font-medium transition border border-[#1D2F4E] ">Leer más</Link>
          </div>
        </div>
      </div>
    </section>
  );
} 