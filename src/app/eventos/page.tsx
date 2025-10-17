// /src/app/eventos/page.tsx
import { destinations } from "@/lib/data";

export const metadata = { title: "Eventos" };

export default function EventosPage(){
  const events = destinations.flatMap(d => d.events?.map(e => ({...e, from: d.name})) ?? []);
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold">Agenda de Eventos</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {events.length ? events.map((e, i) => (
          <article className="card p-5" key={i}>
            <h2 className="font-semibold">{e.title}</h2>
            <p className="text-sm text-zinc-600">{e.date} · {e.location} · {e.from}</p>
            <p className="mt-2 text-sm">{e.description}</p>
          </article>
        )) : <p>Sem eventos cadastrados.</p>}
      </div>
    </section>
  );
}
