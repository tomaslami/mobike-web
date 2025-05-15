"use client"

import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import { handleSubmit } from "@/actions/contact-action";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("message", message);

    const response = await handleSubmit(formData);

    if (response.status === 200) {
      toast.success(response.message);
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } else {
      toast.error(response.message);
    }

    setIsLoading(false);
  }

  return (
    <section id="contacto" className="section bg-white scroll-m-16">
      <div className="container">
        <h2 className="text-center text-4xl font-semibold text-[#1D2F4E]">Contacto</h2>
        <p className="text-center mx-auto max-w-2xl mb-12">
          Estamos a tu disposición para responder cualquier consulta que necesites sobre nuestros productos y condiciones comerciales.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contact-form">
            <form onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm">Nombre</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Nombre" 
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D2F4E]"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1 text-sm">Número de teléfono</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    placeholder="Número de teléfono" 
                    required
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D2F4E]"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block mb-1 text-sm">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="tucorreo@ejemplo.com" 
                  required
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D2F4E]"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block mb-1 text-sm">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  placeholder="En qué podemos ayudarte?" 
                  className="w-full px-3 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#1D2F4E]"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="mt-4 w-full bg-[#1D2F4E] text-white py-3 px-4 rounded-md hover:bg-[#1D2F4E]/90 transition-colors disabled:opacity-50 text-md disabled:cursor-not-allowed"
              >
                {isLoading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </form>
          </div>
          
          <div className="contact-info p-2 md:p-6 bg-light-gray rounded-md">
            <h3 className="text-xl font-semibold mb-4 text-[#1D2F4E]">Información de contacto</h3>
            
            <div className="flex items-start gap-3 mb-4">
              <Image src="/icons/phone.svg" alt="Teléfono" width={20} height={20} />
              <div>
                <h4 className="font-medium text-[#1D2F4E]">Teléfono</h4>
                <p className="text-sm">+54 9 11 3494-3796</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Image src="/icons/email.svg" alt="Email" width={20} height={20} />
              <div>
                <h4 className="font-medium text-[#1D2F4E]">Email</h4>
                <p className="text-sm">info@mobike.com.ar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 