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
    id: "nastop-kino-siska",
    date: "2026-03-15",
    title: "Nastop v Kinu Šiška",
    description: "Akustični večer z gosti. Vstopnice kmalu v prodaji.",
    fullText:
      "Vabljeni na poseben akustični večer v Kinu Šiška, kjer bom prvič nastopil s celotnim repertoarjem avtorskih pesmi. Na odru se mi bodo pridružili posebni gostje. Večer obljublja intimno atmosfero, kakršno poznamo iz najboljših singer-songwriter koncertov. Vstopnice bodo kmalu na voljo!",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771190903/Screenshot_2026-02-15_at_21.49_copy_z3lroc.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771190903/Screenshot_2026-02-15_at_21.49_copy_z3lroc.jpg",
    ],
    type: "nastop",
    upcoming: true,
  },
  {
    id: "nova-pesem",
    date: "2026-02-10",
    title: "Nova pesem na poti",
    description: "Tretja avtorska pesem je v zaključni fazi snemanja.",
    fullText:
      "Tretja avtorska pesem je v zaključni fazi snemanja in miksanja. Pesem prinaša novo poglavje v moji glasbeni zgodbi -- bolj zrel zvok, a še vedno zvest akustičnim koreninam. Komaj čakam, da jo delim z vami!",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771190900/Screenshot_2026-02-15_at_22.10_copy_pp9xdw.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771190900/Screenshot_2026-02-15_at_22.10_copy_pp9xdw.jpg",
    ],
    type: "novica",
  },
  {
    id: "bozicni-koncert",
    date: "2025-12-20",
    title: "Božični koncert",
    description: "Intimen akustični nastop v Cankarjevem domu.",
    fullText:
      "Hvala vsem, ki ste bili z nami na božičnem koncertu v Cankarjevem domu. Bil je čaroben večer poln toplih melodij in skupnih trenutkov. Energija občinstva je bila nepozabna.",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771190895/Screenshot_2026-02-15_at_21.50_copy_kzoc8n.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771190891/Screenshot_2026-02-15_at_21.52_copy_tnadik.jpg",
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771190889/Screenshot_2026-02-15_at_21.50_copy2_qks0df.jpg",
    ],
    type: "nastop",
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
    id: "videospot-ne-vidm-ure",
    date: "2025-10-05",
    title: "Izšel videospot Ne vid'm ure",
    description: "Drugi avtorski videospot je ugledal luč sveta.",
    fullText:
      "Ponosen sem, da lahko z vami delim svoj drugi avtorski videospot za pesem Ne vid'm ure. Posnetek je nastal v čudoviti naravni kulisi, ki popolnoma ujame vzdušje pesmi. Poglejte si ga v sekciji Videospoti!",
    thumbnail:
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_400,h_250,c_fill,g_auto,q_auto,f_auto/v1771190897/Screenshot_2026-02-15_at_21.52_copy3_e2ff8v.jpg",
    images: [
      "https://res.cloudinary.com/dewf3zos0/image/upload/w_900,q_auto,f_auto/v1771190897/Screenshot_2026-02-15_at_21.52_copy3_e2ff8v.jpg",
    ],
    type: "novica",
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
