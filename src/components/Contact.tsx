import Image from "next/image";

export default function Contact() {
  return (
    <section id="contacto" className="section bg-white scroll-m-16">
      <div className="container">
        <h2 className="text-center text-4xl font-semibold text-[#1D2F4E]">Contacto</h2>
        <p className="text-center mx-auto max-w-2xl mb-12">
          Estamos a tu disposición para responder cualquier consulta que necesites sobre nuestros productos y condiciones comerciales.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contact-form">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block mb-1 text-sm">Nombre Completo</label>
                  <input type="text" id="nombre" placeholder="Escribe tu nombre completo" />
                </div>
                <div>
                  <label htmlFor="empresa" className="block mb-1 text-sm">Empresa</label>
                  <input type="text" id="empresa" placeholder="Nombre de tu empresa (si aplica)" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 text-sm">Correo Electrónico</label>
                <input type="email" id="email" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block mb-1 text-sm">Mensaje</label>
                <textarea id="mensaje" rows={4} placeholder="En qué podemos ayudarte?"></textarea>
              </div>
              <button type="submit" className="mt-2">Enviar Mensaje</button>
            </form>
          </div>
          
          <div className="contact-info p-6 bg-light-gray rounded-md">
            <h3 className="text-xl font-semibold mb-4 text-[#1D2F4E]">Información de contacto</h3>
            
            <div className="flex items-start gap-3 mb-4">
              <Image src="/icons/phone.svg" alt="Teléfono" width={20} height={20} />
              <div>
                <h4 className="font-medium text-[#1D2F4E]">Teléfono</h4>
                <p className="text-sm">+54 11 4567-8900</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Image src="/icons/email.svg" alt="Email" width={20} height={20} />
              <div>
                <h4 className="font-medium text-[#1D2F4E]">Email</h4>
                <p className="text-sm">contacto@mobike.com.ar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 