export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  fullText?: string;
  thumbnail: string;
  images?: string[];
  youtube?: string;
  video?: string;
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
      "Novi videospot je zunaj! Vabljeni k ogledu!",
    youtube: "2Y-ZYdAuKdQ",
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
  {
    id: "nastop-divana",
    date: "2024-08-25",
    title: "Nastop z Majo Marinčič - Divana",
    description: "Ko da dotaknem nebo i anđele vse.",
    fullText:
      "Ko da dotaknem nebo i anđele vse. Nastop z Majo Marinčič - Divana.",
    video:
      "https://res.cloudinary.com/dewf3zos0/video/upload/v1771237056/AQPBTB3SpCScaLwxgFyM_Sh8FUtO8xeigcjN7TNiNi7sc3p-2OKd0emKMWXKRr74as8zKAz23wnaETXjkUTc8-4NlSDSklE0PVdpbsQRsv0XXQ_qa5ej6.mp4",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/video/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto,so_1/v1771237056/AQPBTB3SpCScaLwxgFyM_Sh8FUtO8xeigcjN7TNiNi7sc3p-2OKd0emKMWXKRr74as8zKAz23wnaETXjkUTc8-4NlSDSklE0PVdpbsQRsv0XXQ_qa5ej6.jpg",
    type: "nastop",
  },
  {
    id: "poroka-benedikt",
    date: "2024-07-21",
    title: "Za vse življenje",
    description: "Ena lepa skladbica iz sobotne poroke v Benediktu.",
    fullText:
      "Ena lepa skladbica iz sobotne poroke v Benediktu in naj bo res za vse življenje.",
    video:
      "https://res.cloudinary.com/dewf3zos0/video/upload/v1771237543/AQMgs28fMTo4H9rexyGlCImnm7IcXJ2i4Y7ckuURVO2qqsqcglHue66hnhunXBHUZ8byL4enMwtm2-EV79r6Pt3H_jsleqs.mp4",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/video/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto,so_1/v1771237543/AQMgs28fMTo4H9rexyGlCImnm7IcXJ2i4Y7ckuURVO2qqsqcglHue66hnhunXBHUZ8byL4enMwtm2-EV79r6Pt3H_jsleqs.jpg",
    type: "nastop",
  },
  {
    id: "nastop-poroka-urska",
    date: "2024-07-06",
    title: "Nastop na poroki z Urško Videnšek",
    description: "Nastop na poroki z Urško Videnšek.",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771237622/485731066_2161787524239686_1055416382522176688_n_uqa39p.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771237622/485731066_2161787524239686_1055416382522176688_n_uqa39p.jpg",
    ],
    type: "nastop",
  },
  {
    id: "moto-party-krizevci",
    date: "2024-07-02",
    title: "Moto Party - Križevci",
    description: "MK Crusanders - Blue Star Band.",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771237749/469041781_18026901236570840_6039278375481299996_n_rqtcen.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771237749/469041781_18026901236570840_6039278375481299996_n_rqtcen.jpg",
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771237748/468976968_18026901248570840_1218242488231084477_n_hj1bbc.jpg",
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771237748/469329916_18026901227570840_2992529472455280538_n_gs8vfa.jpg",
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771237747/469083312_18026901149570840_2034380886262010850_n_kzh2mf.jpg",
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
