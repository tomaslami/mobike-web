import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="quienes-somos" className="section bg-white scroll-m-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl text-[#1D2F4E] font-semibold mb-4">¿Quiénes somos?</h2>
            <p className="mb-4 text-[#333333]">
              Somos Mobike, una empresa con más de 10 años de trayectoria en la fabricación de guantes de alta calidad. Nos destacamos por crear productos diseñados para la vida urbana y deportes de invierno, como esquí o snowboard.
            </p>
            <p className="mb-4 text-[#333333]">
              Nuestros guantes son reconocidos por su impermeabilidad y compatibilidad con pantallas táctiles, ofreciendo comodidad y funcionalidad en cualquier situación.
            </p>
            <p className="text-[#333333]">
              Ahora, nos complace anunciar nuestro nuevo desafío: la comercialización de guantes de trabajo para el hogar y la industria minera y petrolera, cumpliendo con los más altos estándares internacionales.
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