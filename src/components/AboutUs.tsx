import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="section bg-white scroll-m-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl text-[#1D2F4E] font-semibold mb-4">¿Quiénes somos?</h2>
            <p className="mb-4 text-[#333333]">
              Con más de 15 años de experiencia en el mercado argentino, Mobike se especializa en la importación, desarrollo y distribución mayorista de guantes de motaje de alta calidad.
            </p>
            <p className="mb-4 text-[#333333]">
              Nuestra trayectoria está respaldada por relaciones sólidas con fabricantes internacionales selectos, lo que nos permite ofrecer productos confiables y precios competitivos ofrecen soluciones que combinan durabilidad, seguridad y rendimiento excepcional de cada cliente.
            </p>
            <p className="text-[#333333]">
              En Mobike creemos en la transparencia y la confianza como pilares fundamentales de nuestras relaciones comerciales. Nuestro compromiso constante con la excelencia en el servicio y la calidad de nuestros productos demuestra nuestra dedicación excepcional de cada cliente.
            </p>
          </div>
          <div className="bg-[#F5F5F5] h-full rounded-md flex items-center justify-center">
            <Image src="/about-img.jpg" alt="Sobre nosotros" width={500} height={350} className="rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
} 