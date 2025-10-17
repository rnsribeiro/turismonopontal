// /src/components/Footer.tsx
export function Footer(){
  return (
    <footer className="border-t border-zinc-200 mt-12">
      <div className="container py-8 text-sm text-zinc-600 flex flex-col md:flex-row items-center gap-2 md:justify-between">
        <p>© {new Date().getFullYear()} turismonopontal.com.br</p>
        <p>Feito com Next.js + Tailwind</p>
      </div>
    </footer>
  )
}
