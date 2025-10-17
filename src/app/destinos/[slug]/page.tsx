// /src/app/destinos/[slug]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/data";

export async function generateStaticParams(){
  return destinations.map(d => ({ slug: d.slug }));
}

export default function DestinationPage({ params }: { params: { slug: string } }){
  const dest = destinations.find(d => d.slug === params.slug);
  if(!dest) return notFound();

  return (
    <article className="container py-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="badge">{dest.type}</span>
          <h1 className="text-3xl font-bold mt-2">{dest.name}</h1>
          <p className="text-zinc-600">{dest.city}</p>
        </div>
      </div>

      <div className="mt-6 card">
        <Image src={dest.cover} alt={dest.name} width={1600} height={900} className="w-full h-72 object-cover"/>
      </div>

      <div className="prose prose-zinc max-w-none mt-6">
        <p>{dest.description}</p>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-3">Galeria</h2>
      <div className="grid grid-auto-fill gap-3">
        {dest.gallery.map((g, i) => (
          <Image key={i} src={g} alt={`${dest.name} foto ${i+1}`} width={1200} height={800} className="h-52 w-full object-cover rounded-xl"/>
        ))}
      </div>

      {dest.events?.length ? (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Eventos</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {dest.events.map((e, i) => (
              <li key={i} className="card p-4">
                <h3 className="font-bold">{e.title}</h3>
                <p className="text-sm text-zinc-600">{e.date} · {e.location}</p>
                <p className="mt-2 text-sm">{e.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
