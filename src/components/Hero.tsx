// /src/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export function Hero(){
  return (
    <section className="relative">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="badge">Pontal do Paranapanema</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
              Venha descobrir o oeste paulista
            </h1>
            <p className="mt-3 text-lg text-zinc-600">
              Rios, balneários, turismo rural e religioso — organize sua visita com fotos, descrições e agenda.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/galeria" className="btn btn-primary">Ver fotos</Link>
              <Link href="/eventos" className="btn border border-zinc-200">Próximos eventos</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              "/photos/por-do-sol.jpg",
              "/photos/cachoeira.jpg",
              "/photos/ponte.jpg",
              "/photos/igreja.jpg",
              "/photos/rio.jpg",
              "/photos/lavoura.jpg",
            ].map((src, i) => (
              <Image key={i} src={src} alt="Foto destaque" width={800} height={800} className="rounded-2xl h-28 md:h-40 w-full object-cover"/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
