import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface FloatingButtonProps {
  phoneNumber: string
  message?: string
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ phoneNumber, message = '' }) => {
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 shadow bg-white border-[1px] border-[#1D2F4E] p-[10px] rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
      aria-label="Chat on WhatsApp"
    >
      <Image src="/icons/icon_wpp.png" width={40} height={40} alt='Botón de contacto, WhatsApp'></Image>
    </Link>
  )
}

export default FloatingButton