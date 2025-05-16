import Image from "next/image";
import Link from "next/link";

export default function Distributor() {
  return (
    <section id="distribuidor" className="section bg-light-gray scroll-m-16 bg-[#F5F5F5]">
      <div className="container text-center">
        <h2 className="text-center text-4xl font-semibold text-[#1D2F4E] mb-4">¿Querés sumarte como distribuidor?</h2>
        <p className="mx-auto max-w-2xl mb-8">
          Convertite en distribuidor mayorista de nuestros productos y accedé a beneficios exclusivos, soporte comercial y condiciones preferenciales para hacer crecer tu negocio.
        </p>
        <Link href="https://wa.me/+541134943796" className="group w-fit mx-auto bg-[#1D2F4E] text-white py-3 px-4 rounded font-medium hover:bg-[#1D2F4E]/90 transition flex items-center justify-center text-lg">
        Contactanos por WhatsApp
          <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
} 