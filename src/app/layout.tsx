// /src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://turismonopontal.com.br"),
  title: {
    default: "Turismo no Pontal",
    template: "%s · Turismo no Pontal",
  },
  description: "Explore as cidades, rios e atrações do Pontal do Paranapanema: fotos, eventos e guias.",
  openGraph: {
    title: "Turismo no Pontal",
    description: "Guias, eventos e fotos do Pontal do Paranapanema.",
    type: "website",
    url: "https://turismonopontal.com.br",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar/>
        <main className="min-h-[70vh]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
