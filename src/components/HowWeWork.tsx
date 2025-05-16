import Link from "next/link";
import WorkCard from "./WorkCard";


const cardData = [
  {
    iconSrc: "/icons/import.svg",
    iconAlt: "Importación planificada",
    title: "Importación planificada",
    description: "Planificamos estratégicamente nuestras importaciones para asegurar stock disponible todo el año, analizando tendencias y necesidades del mercado."
  },
  {
    iconSrc: "/icons/quality.svg",
    iconAlt: "Control de calidad",
    title: "Control de calidad",
    description: "Cada producto se somete a rigurosos controles de calidad para garantizar que cumple con nuestros estándares y las expectativas de nuestros clientes."
  },
  {
    iconSrc: "/icons/people.svg",
    iconAlt: "Atención personalizada",
    title: "Atención personalizada",
    description: "Entendemos las necesidades específicas de cada cliente y ofrecemos asesoramiento personalizado para maximizar resultados de compra."
  },
  {
    iconSrc: "/icons/logistic.svg",
    iconAlt: "Logística eficiente",
    title: "Logística eficiente",
    description: "Contamos con una logística optimizada que garantiza entregas rápidas y seguras en cualquier punto del país, con precios competitivos."
  },
  {
    iconSrc: "/icons/support.svg",
    iconAlt: "Soporte a distribuidores",
    title: "Soporte a distribuidores",
    description: "Ofrecemos herramientas y recursos para que nuestros distribuidores puedan desarrollar su negocio, incluyendo material técnico y apoyo continuo post-producto."
  }
];

export default function HowWeWork() {
  return (
    <section id="como-trabajamos" className="section bg-[#F5F5F5] scroll-m-16">
      <div className="container">
        <h2 className="text-center mb-4 text-4xl text-[#1D2F4E] font-semibold">¿Cómo trabajamos?</h2>
        <p className="text-center mx-auto max-w-2xl mb-12 text-[#333333]">
          Nuestro proceso está diseñado para garantizar eficiencia, calidad y satisfacción en cada etapa de la cadena de suministro.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {cardData.slice(0, 3).map((card, index) => (
            <WorkCard key={index} {...card} />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.slice(3).map((card, index) => (
            <WorkCard key={index + 3} {...card} />
          ))}
        </div>
        
        <div className="text-center mt-10">
        <Link href="#contacto" className="group w-fit mx-auto bg-[#1D2F4E] text-white py-3 px-4 rounded font-medium hover:bg-[#1D2F4E]/90 transition flex items-center justify-center text-lg">
        Contactanos
          <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
        </Link>
        </div>
      </div>
    </section>
  );
} 