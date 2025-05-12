"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

type ProductCardProps = {
  name: string
  imageUrl: string
  temperature?: string
  category: string
}

export default function ProductCard({ name, imageUrl, temperature, category }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-full max-w-[350px] rounded-md overflow-hidden border border-[#1D2F4E]  bg-white "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container with fixed aspect ratio */}
      <div className="relative aspect-square overflow-hidden">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />

        {/* Category badge */}
        <div className="absolute top-2 right-2 bg-[#1a3a6b] text-white text-xs px-3 py-1 rounded-full font-medium z-10">
          {category === "Guantes de Frío" ? "FRÍO" : "SKI"}
        </div>

        <motion.div
          className="absolute inset-0 bg-black pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-x-0 bottom-0 flex flex-col bg-gradient-to-t from-[#1a3a6b] to-transparent p-3 text-white"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 100, opacity: isHovered ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {name === "Mitón Infantil" ? (
            <p className="text-sm mb-2">
              Hipora · Palma y costuras reforzadas<br />
              Cierre velcro<br />
              Exterior: Taslon 320D<br />
              Interior: Tricot + 120gr polyfiil<br />
              Cintas sujetadoras en el par
            </p>
          ) : name === "Guante Aislante" ? (
            <p className="text-sm mb-2">
              Hipora · Costuras reforzadas<br />
              Cierre velcro<br />
              Exterior: Taslon 320D<br />
              Interior: Tricot + 120gr polyfiil<br />
              Cintas sujetadoras en el par
            </p>
          ) : category === "Guantes de Frío" ? (
            <p className="text-sm mb-2">Touch screen</p>
          ) : (
            <p className="text-sm mb-2">
              Hipora · Palma y costuras reforzadas<br />
              Touch screen · Traba para viento<br />
              Exterior: Taslon 320D<br />
              Interior: Tricot + 120gr polyfiil<br />
              Cintas sujetadoras en el par
            </p>
          )}
          {temperature && <p className="text-sm mb-2">Resistente a temperaturas de hasta {temperature}</p>}
          <Link href="https://wa.me/5491134943796" className="w-full bg-[#1a4b8e] text-white py-2 text-sm font-medium hover:bg-[#0d3b7a] transition-colors cursor-pointer">
            Consultar por este producto
          </Link>
        </motion.div>
      </div>

      <div className="p-3 bg-white">
        <h3 className="font-medium text-gray-900">{name}</h3>
      </div>
    </motion.div>
  )
}
