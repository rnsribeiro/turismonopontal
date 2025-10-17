// /src/app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { destinations, categories, featuredPhotos } from "@/lib/data";
import { SectionGrid } from "@/components/SectionGrid";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Categorias</h2>
          <Link href="/galeria" className="btn btn-primary">Ver Galeria</Link>
        </div>
        <SectionGrid items={categories.map(c => ({
          title: c.title,
          subtitle: `${c.count} locais`,
          href: c.href,
          image: c.image,
          badge: c.badge
        }))} />
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-4">Destaques</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredPhotos.slice(0,3).map((p) => (
            <div key={p.id} className="card">
              <Image src={p.src} alt={p.alt} width={1200} height={800} className="h-56 w-full object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-600">{p.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-4">Cidades e Pontos Turísticos</h2>
        <SectionGrid items={destinations.map(d => ({
          title: d.name, subtitle: d.city, image: d.cover, href: `/destinos/${d.slug}`, badge: d.type
        }))} />
      </section>
    </>
  )
}
