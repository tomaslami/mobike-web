import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer ">
      <div className="container w-full lg:max-w-[1250px] max-w-[95%]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/logo-mobike-white.png" alt="Mobike Logo" width={190} height={45} className="mb-4" />
            <p className="text-sm">Importador y distribuidor mayorista de guantes de motaje de alta calidad en más de 80 puntos.</p>
            <div className="flex gap-3 mt-4">
              <Link href="https://www.instagram.com/mobikeaccesorios/"><Image src="/icons/icon-instagram.png" alt="Instagram" width={24} height={24} /></Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#quienes-somos" className="hover:text-gray-300">Quiénes somos</Link></li>
              <li><Link href="#como-trabajamos" className="hover:text-gray-300">Cómo trabajamos</Link></li>
              <li><Link href="#marcas" className="hover:text-gray-300">Catálogo</Link></li>
              <li><Link href="#distribuidor" className="hover:text-gray-300">¿Quieres ser distribuidor?</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>+54 9 11 3494-3796</li>
              <li>info@mobike.com.ar</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">¿Querés ser distribuidor?</h4>
            <p className="text-sm mb-4">Contactanos para conocer todos los beneficios y condiciones para ser distribuidor oficial.</p>
            <Link href="https://wa.me/5491134943796" className="text-white border border-white px-3 py-2 rounded inline-block text-lg transition-colors">
              Contactanos
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center md:text-left">
          <p>©2025 Mobike. Todos los derechos reservados</p>
          <p className="text-xs ">Diseñado y desarrollado por <Link href="https://synera.com.ar" className="text-white hover:text-gray-300 font-bold">Synera</Link></p>
        </div>
      </div>
    </footer>
  );
} 