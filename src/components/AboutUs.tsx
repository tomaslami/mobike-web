import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-20 scroll-m-16">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-8 items-center">
        {/* Columna izquierda */}
        <div className="flex flex-col items-start w-full md:w-[60%]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D2F4E] mb-4 leading-tight text-center md:text-start w-full">
            El mercado necesita protección confiable. Mobike responde<br className="hidden md:block" />
            con experiencia y calidad.
          </h2>
          <p className="text-[#1D2F4E]/80 text-base sm:text-lg lg:text-xl mb-6 max-w-xl text-center md:text-start w-full">
            El sector laboral exige soluciones resistentes y seguras. Con más de 15 años de trayectoria en Argentina, Mobike se posiciona como líder en la importación y distribución mayorista de guantes de trabajo de alto rendimiento.
          </p>
          {/* Botón solo visible en md+ */}
          <Link href="https://wa.me/+541134943796" className="hidden group bg-[#1D2F4E] text-white py-3 px-4 rounded font-medium hover:bg-[#1D2F4E]/90 transition md:flex items-center justify-center text-lg ml-0">
            Contactanos
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        {/* Columna derecha */}
        <div className="flex flex-col gap-6 w-full md:w-[40%]">
          <div className="flex items-start gap-4">
            <Image src="/icons/aboutus_icon.png" alt="Distribución" width={36} height={36} className="mt-1 min-w-[36px]" />
            <div>
              <h3 className="text-[#1D2F4E] font-bold text-lg sm:text-xl leading-tight">Distribución Mayorista Especializada</h3>
              <p className="text-[#1D2F4E]/80 text-base sm:text-lg">Aseguramos productos de calidad superior y constante disponibilidad.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/icons/aboutus_icon.png" alt="Seguridad y confort" width={36} height={36} className="mt-1 min-w-[36px]" />
            <div>
              <h3 className="text-[#1D2F4E] font-bold text-lg sm:text-xl leading-tight">Combinamos seguridad y confort</h3>
              <p className="text-[#1D2F4E]/80 text-base sm:text-lg">Ofrecemos productos diseñados para resistir condiciones exigentes sin sacrificar la comodidad en el uso diario.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/icons/aboutus_icon.png" alt="Confianza" width={36} height={36} className="mt-1 min-w-[36px]" />
            <div>
              <h3 className="text-[#1D2F4E] font-bold text-lg sm:text-xl leading-tight">Relaciones basadas en confianza</h3>
              <p className="text-[#1D2F4E]/80 text-base sm:text-lg">Nos enfocamos en brindar atención personalizada, asesoramiento directo y un servicio logístico eficiente adaptado a cada negocio.</p>
            </div>
          </div>
          {/* Botón solo visible en mobile (sm y menores) */}
          <Link href="https://wa.me/+541134943796" className=" md:hidden group w-fit mx-auto bg-[#1D2F4E] text-white py-3 px-4 rounded font-medium hover:bg-[#1D2F4E]/90 transition flex items-center justify-center text-lg">
        Contactanos por WhatsApp
          <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
        </Link>
        </div>
      </div>
    </section>
  );
} 