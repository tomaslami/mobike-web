import Image from "next/image"
import Link from "next/link"

export type Catalog = {
  id: string
  title: string
  description: string
  imageUrl: string
  pdfUrl: string
}

// CatalogCard component for each catalog
function CatalogCard({ title, description, imageUrl, pdfUrl }: Omit<Catalog, "id">) {
  return (
    <div className="relative overflow-hidden shadow-md bg-[#0e223a] flex flex-col justify-end min-h-[320px] aspect-[16/9] max-w-[600px] w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover w-full h-full absolute inset-0 z-0 opacity-80"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="relative z-10 p-5 flex flex-col justify-end h-full bg-gradient-to-t from-[#1D2F4E]/80 to-transparent border border-[#1D2F4E]">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-xl font-bold mb-1 drop-shadow-lg">{title}</h3>
          <Link href={pdfUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-[#1D2F4E] font-semibold px-4 py-2  shadow hover:bg-gray-100 transition text-sm cursor-pointer">
              Ver PDF
          </Link>
        </div>
        <p className="text-white text-sm drop-shadow-lg pt-2">{description}</p>
      </div>
    </div>
  )
}

const defaultCatalogs: Catalog[] = [
  {
    id: "kombi",
    title: "Catálogo Kombi",
    description: "Catálogo de Guantes (Ski - Abrigo - Softshell) Ventas por Mayor",
    imageUrl: "/images/catalogo/catalogo_2.png",
    pdfUrl: "/docs/catalogo_KOMBI_2025.pdf",
  },
  {
    id: "jgb",
    title: "Catálogo JGB",
    description: "Catálogo General de Seguridad. Ventas por Mayor",
    imageUrl: "/images/catalogo/catalogo_1.png",
    pdfUrl: "/docs/catalogo_JGBI_2025.pdf",
  },
]

export default function ProductCatalog({ catalogs = defaultCatalogs }: { catalogs?: Catalog[] }) {
  return (
    <section id="catalogo" className="py-12 px-4 max-w-7xl mx-auto bg-white scroll-m-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 text-[#1D2F4E]">Nuestros Catálogos</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base">
          Importamos productos de la más alta calidad para satisfacer las necesidades de su industria.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {catalogs.map((catalog) => (
          <CatalogCard key={catalog.id} {...catalog} />
        ))}
      </div>
    </section>
  )
}
