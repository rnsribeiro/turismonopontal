// /src/components/SectionGrid.tsx
import Image from "next/image";
import Link from "next/link";

type Item = {
  title: string;
  subtitle?: string;
  href: string;
  image: string;
  badge?: string;
};

export function SectionGrid({ items }: { items: Item[] }){
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <Link key={i.href} href={i.href} className="card hover:shadow-md transition">
          <Image src={i.image} alt={i.title} width={1200} height={800} className="h-48 w-full object-cover"/>
          <div className="p-4">
            <div className="flex items-center gap-2">
              {i.badge ? <span className="badge">{i.badge}</span> : null}
              <h3 className="font-semibold">{i.title}</h3>
            </div>
            {i.subtitle ? <p className="text-sm text-zinc-600 mt-1">{i.subtitle}</p> : null}
          </div>
        </Link>
      ))}
    </div>
  )
}
