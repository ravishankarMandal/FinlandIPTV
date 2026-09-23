export interface Movie {
  id: string;
  title: string;
  tag: string;
  meta: string;
  gradient: string; // Tailwind gradient classes standing in for poster art
}

export const movies: Movie[] = [
  {
    id: "m1",
    title: "No Exit",
    tag: "Original Film",
    meta: "Streaming now",
    gradient: "from-amber-900 via-stone-900 to-black",
  },
  {
    id: "m2",
    title: "Afterlife",
    tag: "In cinemas",
    meta: "Now showing",
    gradient: "from-emerald-800 via-slate-900 to-black",
  },
  {
    id: "m3",
    title: "The Swindler",
    tag: "Documentary",
    meta: "Watch the trailer",
    gradient: "from-teal-500 via-slate-900 to-black",
  },
  {
    id: "m4",
    title: "Pro & Cons",
    tag: "Exclusive",
    meta: "Streaming now",
    gradient: "from-rose-900 via-neutral-900 to-black",
  },
  {
    id: "m5",
    title: "Web Runner",
    tag: "Coming soon",
    meta: "Only in cinemas",
    gradient: "from-orange-700 via-red-900 to-black",
  },
  {
    id: "m6",
    title: "Nightfall",
    tag: "Now streaming",
    meta: "New episodes weekly",
    gradient: "from-sky-900 via-slate-900 to-black",
  },
  {
    id: "m7",
    title: "Double Agent",
    tag: "Action",
    meta: "In theaters July",
    gradient: "from-red-800 via-neutral-900 to-black",
  },
  {
    id: "m8",
    title: "No Time Left",
    tag: "Thriller",
    meta: "In theaters",
    gradient: "from-cyan-900 via-slate-900 to-black",
  },
  {
    id: "m9",
    title: "Resurrection",
    tag: "Sci-Fi",
    meta: "Streaming this Christmas",
    gradient: "from-emerald-400 via-slate-900 to-black",
  },
  {
    id: "m10",
    title: "The Call",
    tag: "Horror",
    meta: "In theaters January",
    gradient: "from-slate-700 via-slate-900 to-black",
  },
];