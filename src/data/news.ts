export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  fullText?: string;
  thumbnail: string;
  images?: string[];
  type: "nastop" | "novica";
  upcoming?: boolean;
}

export const allNews: NewsItem[] = [
  {
    id: "videospot-zunaj",
    date: "2025-08-28",
    title: "Novi videospot je zunaj!",
    description: "Vabljeni k ogledu novega videospota Ne vid'm ure.",
    fullText:
      "Novi videospot je zunaj! Vabljeni k ogledu! Poglejte si ga na YouTube: https://youtu.be/2Y-ZYdAuKdQ",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771190897/Screenshot_2026-02-15_at_21.52_copy3_e2ff8v.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771190897/Screenshot_2026-02-15_at_21.52_copy3_e2ff8v.jpg",
    ],
    type: "novica",
  },
  {
    id: "snemanje-videospota",
    date: "2025-08-22",
    title: "Snemanje novega videospota",
    description:
      "Pred kratkim smo snemali videospot za novo pesem. Nova pesem, kmalu...",
    fullText:
      "Pred kratkim smo snemali videospot za novo pesem in kmalu vam pokažem, kaj smo ustvarili. Nova pesem, kmalu...",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771236353/538169364_18055416626570840_1165842393453746104_n_xkvnep.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771236353/538169364_18055416626570840_1165842393453746104_n_xkvnep.jpg",
    ],
    type: "novica",
  },
  {
    id: "violina",
    date: "2025-08-20",
    title: "Včasih morata tud dva prijet za violino",
    description: "Včasih morata tud dva prijet za violino.",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771236870/535306998_18055190240570840_8429912899550077614_n_lyjkwi.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771236870/535306998_18055190240570840_8429912899550077614_n_lyjkwi.jpg",
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771236870/535786481_18055190249570840_7274322420301118193_n_tgiezt.jpg",
    ],
    type: "novica",
  },
  {
    id: "nastop-novo-mesto",
    date: "2025-06-12",
    title: "Nastop v Kulturnem centru Janez Trdina",
    description: "Nastop v Kulturnem centru Janez Trdina v Novem mestu.",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771236947/504046645_18047778170570840_4408957813491103299_n_arxmdx.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771236947/504046645_18047778170570840_4408957813491103299_n_arxmdx.jpg",
    ],
    type: "nastop",
  },
];

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
