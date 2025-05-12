"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

type Product = {
  id: string
  name: string
  category: string
  imageUrl: string
}


const defaultProducts: Product[] = [
  {
    id: "termico-polar-1",
    name: "Softshell puño tejido",
    category: "Guantes de Frío",
    imageUrl: "/images/Kombi-9.png",
  },
  {
    id: "criogenico-1",
    name: "Liner puño tejido",
    category: "Guantes de Frío",
    imageUrl: "/images/Kombi-10.png",
  },
  {
    id: "refrigeracion-1",
    name: "Polar fleece con patch",
    category: "Guantes de Frío",
    imageUrl: "/images/Kombi-11.png",
  },
  {
    id: "termico-polar-2",
    name: "Guante Ski Reforzado",
    category: "Guantes de Frío",
    imageUrl: "/images/Kombi-12.png",
  },
  {
    id: "seguridad-1",
    name: "Guante Ski Rental",
    category: "Guantes de SKI",
    imageUrl: "/images/Kombi-13.png",
  },
  {
    id: "seguridad-2",
    name: "Guante Ski Reforzado",
    category: "Guantes de SKI",
    imageUrl: "/images/Kombi-14.png",
  },
  {
    id: "seguridad-3",
    name: "Guante Ski Reforzado",
    category: "Guantes de SKI",
    imageUrl: "/images/Kombi-15.png",
  },
  {
    id: "seguridad-4",
    name: "Mitón Infantil",
    category: "Guantes de SKI",
    imageUrl: "/images/Kombi-16.png",
  },
]


export default function ProductCatalog({
}) {

  const [activeCategory, setActiveCategory] = useState<string>("Todos")

  const categories = ["Todos", "Guantes de Frío", "Guantes de SKI"]

  const filteredProducts =
    activeCategory === "Todos" ? defaultProducts : defaultProducts.filter((product) => product.category === activeCategory)

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Nuestro catálogo</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestros productos y encuentra el que mejor se adapte a tus necesidades.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors",
              activeCategory === category
                ? "bg-[#1a4b8e] text-white"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
            )}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto max-w-[1200px]">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard
              name={product.name}
              imageUrl={product.imageUrl}
              category={product.category}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
