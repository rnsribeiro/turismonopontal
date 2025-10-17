// /src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const nav = [
  { href: "/", label: "Início" },
  { href: "/eventos", label: "Eventos" },
  { href: "/galeria", label: "Galeria" },
];

export function Navbar(){
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" className="font-extrabold text-3xl text-[#a16207]">Turismo no Pontal</Link>
        <nav className="flex gap-2">
          {nav.map(i => (
            <Link key={i.href} href={i.href}
              className={clsx("px-3 py-1.5 rounded-full text-sm",
                pathname === i.href ? "bg-brand text-white" : "hover:bg-zinc-100 hover:text-brand")}>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
