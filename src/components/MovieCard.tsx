import type { Movie } from "../data/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div
      className="relative shrink-0 w-47.5 sm:w-55 aspect-2/3 rounded-lg overflow-hidden border border-gray-200 shadow-sm snap-start"
      aria-label={movie.title}
    >
      <div
        className={`absolute inset-0 bg-linear-to-br ${movie.gradient}`}
      />
      <div className="absolute inset-x-0 top-0 p-3">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
          {movie.tag}
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-white font-extrabold text-xl leading-tight drop-shadow">
          {movie.title}
        </p>
        <p className="mt-1 text-xs text-white/70">{movie.meta}</p>
      </div>
    </div>
  );
}