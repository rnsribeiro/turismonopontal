// /src/lib/data.ts
export type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
};
export type Destination = {
  slug: string;
  name: string;
  city: string;
  type: "Turismo Ecológico" | "Turismo Religioso" | "Turismo de Eventos" | "Turismo Radical" | "Turismo Rural";
  cover: string;
  description: string;
  gallery: string[];
  events?: Event[];
};

export const categories = [
  { title: "Turismo Ecológico", count: 12, href: "/galeria#ecologico", image: "/photos/cachoeira.jpg", badge: "Natureza" },
  { title: "Turismo Religioso", count: 8, href: "/galeria#religioso", image: "/photos/igreja.jpg", badge: "Fé" },
  { title: "Turismo de Eventos", count: 15, href: "/eventos", image: "/photos/festa.jpg", badge: "Agenda" },
  { title: "Turismo Radical", count: 6, href: "/galeria#radical", image: "/photos/tirolesa.jpg", badge: "Aventura" },
  { title: "Turismo Rural", count: 10, href: "/galeria#rural", image: "/photos/lavoura.jpg", badge: "Campo" },
  { title: "Rios & Balneários", count: 9, href: "/galeria#rios", image: "/photos/rio.jpg", badge: "Água" },
];

export const destinations: Destination[] = [
  {
    slug: "rio-parana",
    name: "Rio Paraná - Pôr do Sol",
    city: "Presidente Epitácio",
    type: "Turismo Ecológico",
    cover: "/photos/por-do-sol.jpg",
    description: "Um dos pores do sol mais belos do estado, às margens do Rio Paraná. Espaços para caminhada, pesca e passeios de barco.",
    gallery: ["/photos/por-do-sol.jpg", "/photos/rio.jpg", "/photos/ponte.jpg"],
    events: [
      { title: "Festival de Verão", date: "2025-12-15", location: "Orla de Epitácio", description: "Shows, feiras e esportes aquáticos." }
    ]
  },
  {
    slug: "santo-expedito-santuario",
    name: "Santuário de Santo Expedito",
    city: "Santo Expedito",
    type: "Turismo Religioso",
    cover: "/photos/igreja.jpg",
    description: "Tradicional destino de romaria com celebrações periódicas e festas do padroeiro.",
    gallery: ["/photos/igreja.jpg", "/photos/festa.jpg"],
    events: [
      { title: "Festa do Padroeiro", date: "2025-04-19", location: "Santuário", description: "Procissões e quermesse." }
    ]
  },
  {
    slug: "balneario-da-ponte",
    name: "Balneário da Ponte",
    city: "Presidente Epitácio",
    type: "Turismo de Eventos",
    cover: "/photos/ponte.jpg",
    description: "Área de lazer próxima à ponte, com quiosques, ciclovia e espaço para eventos regionais.",
    gallery: ["/photos/ponte.jpg", "/photos/rio.jpg", "/photos/cachoeira.jpg"],
  }
];

export const featuredPhotos = [
  { id: "1", src: "/photos/por-do-sol.jpg", alt: "Pôr do sol no Rio Paraná", title: "Pôr do Sol", subtitle: "Orla de Epitácio" },
  { id: "2", src: "/photos/cachoeira.jpg", alt: "Cachoeira na região", title: "Cachoeira", subtitle: "Trilha ecológica" },
  { id: "3", src: "/photos/ponte.jpg", alt: "Ponte sobre o rio", title: "Ponte", subtitle: "Cartão postal" },
  { id: "4", src: "/photos/igreja.jpg", alt: "Santuário religioso", title: "Santuário", subtitle: "Turismo de fé" },
  { id: "5", src: "/photos/rio.jpg", alt: "Margens do rio", title: "Margens do Rio", subtitle: "Passeios e pesca" },
  { id: "6", src: "/photos/lavoura.jpg", alt: "Paisagem rural", title: "Paisagem Rural", subtitle: "Turismo no campo" },
];
