import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 scroll-m-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-row gap-8 items-center">
        {/* Columna izquierda */}
        <div className="flex flex-col items-start w-[60%]">
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#1D2F4E] mb-4 leading-tight text-left">
            El mercado necesita protección confiable. Mobike responde<br className="hidden md:block" />
            con experiencia y calidad.
          </h2>
          <p className="text-[#1D2F4E]/80 text-base md:text-lg mb-6 max-w-xl text-left">
            El sector laboral exige soluciones resistentes y seguras. Con más de 15 años de trayectoria en Argentina, Mobike se posiciona como líder en la importación y distribución mayorista de guantes de trabajo de alto rendimiento.
          </p>
          <Link href="#contacto" className="group bg-[#1D2F4E] text-white py-3 px-4 rounded font-medium hover:bg-[#1D2F4E]/90 transition flex items-center justify-center text-md">
              Contactanos
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        {/* Columna derecha */}
        <div className="flex flex-col gap-7 w-[40%]">
          <div className="flex items-start gap-4">
            <Image src="/icons/aboutus_icon.png" alt="Distribución" width={32} height={32} className="mt-1" />
            <div>
              <h3 className="text-[#1D2F4E] font-bold text-lg leading-tight">Distribución Mayorista Especializada</h3>
              <p className="text-[#1D2F4E]/80 text-base">Aseguramos productos de calidad superior y constante disponibilidad.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/icons/aboutus_icon.png" alt="Seguridad y confort" width={32} height={32} className="mt-1" />
            <div>
              <h3 className="text-[#1D2F4E] font-bold text-lg leading-tight">Combinamos seguridad y confort</h3>
              <p className="text-[#1D2F4E]/80 text-base">Ofrecemos productos diseñados para resistir condiciones exigentes sin sacrificar la comodidad en el uso diario.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Image src="/icons/aboutus_icon.png" alt="Confianza" width={32} height={32} className="mt-1" />
            <div>
              <h3 className="text-[#1D2F4E] font-bold text-lg leading-tight">Relaciones basadas en confianza</h3>
              <p className="text-[#1D2F4E]/80 text-base">Nos enfocamos en brindar atención personalizada, asesoramiento directo y un servicio logístico eficiente adaptado a cada negocio.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 