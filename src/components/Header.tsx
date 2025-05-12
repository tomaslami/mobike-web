"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"
import { Separator } from "@radix-ui/react-separator"
import { Button } from "./ui/button"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <nav
      className={`w-full lg:max-w-[1250px] max-w-[95%] h-[80px] flex items-center justify-center fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 backdrop-blur-lg rounded-lg bg-white/20 border border-[#1D2F4E]`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <div className="relative h-[45px] w-[190px]">
            <Image src="/images/logo-mobike.png" alt="MOBIKE Logo" width={190} height={45} className="object-contain" />
          </div>
        </Link>

        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#1D2F4E] hover:text-[#1D2F4E]/90"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="fixed z-50 flex flex-col items-start justify-start p-8 bg-white w-full"
            >
              <SheetTitle className="text-[#000] text-2xl font-semibold mt-8">
                Menú
              </SheetTitle>
              <Separator className="w-full my-2 bg-[#000] h-[2px]" />
              <ul className="flex flex-col gap-6 mt-2">
              <Link href="/#quienes-somos" className="text-[#1D2F4E] text-2xl font-semibold">
                Quienes somos
              </Link>
              <Link href="/#como-trabajamos" className="text-[#1D2F4E] text-2xl font-semibold">
                Como trabajamos
              </Link>
              <Link href="/#catalogo" className="text-[#1D2F4E] text-2xl font-semibold">
                Catálogo
              </Link>
              <Link href="/#distribuidor" className="text-[#1D2F4E] text-2xl font-semibold">
                ¿Quieres ser distribuidor?
              </Link>
              </ul>
              <Link href="https://wa.me/5491134943796" className="bg-[#1D2F4E] text-white px-4 py-2 mt-2 rounded-md hover:bg-[#1D2F4E]/90 text-xl">
                Contacto
              </Link>
              <SheetClose className="" asChild>
                    <Button
                      variant="ghost"
                      size={"lg"}
                      className="text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      ×
                    </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden lg:flex items-center space-x-6 text-[#1D2F4E]">
          <Link href="/#quienes-somos" className="text-[#1D2F4E] text-base font-semibold transition-colors">
            Quienes somos
          </Link>
          <Link href="/#como-trabajamos" className="text-[#1D2F4E] text-base font-semibold transition-colors">
            Como trabajamos
          </Link>
          <Link href="/#catalogo" className="text-[#1D2F4E] text-base font-semibold transition-colors">
            Catálogo
          </Link>
          <Link href="/#distribuidor" className="text-[#1D2F4E] text-base font-semibold transition-colors">
            ¿Quieres ser distribuidor?
          </Link>
          <Link
            href="https://wa.me/5491134943796"
            className="bg-[#1D2F4E] text-white px-4 py-2 rounded-md hover:bg-[#1D2F4E]/90"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  )
}
