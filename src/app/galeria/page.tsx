// /src/app/galeria/page.tsx
import Image from "next/image";
import { featuredPhotos } from "@/lib/data";

export const metadata = { title: "Galeria de Fotos" };

export default function GaleriaPage(){
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold mb-4">Galeria</h1>
      <div className="grid grid-auto-fill gap-3">
        {featuredPhotos.map(photo => (
          <figure key={photo.id} className="card overflow-hidden">
            <Image src={photo.src} alt={photo.alt} width={1600} height={900} className="w-full h-60 object-cover"/>
            <figcaption className="p-3 text-sm">{photo.title} — {photo.subtitle}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
