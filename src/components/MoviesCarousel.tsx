import { useEffect, useRef } from "react";
import { movies } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MovieCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Triple the list to provide buffers for infinite scrolling in both directions:
  // - Set 1 (0 to N-1): Left buffer when clicking <
  // - Set 2 (N to 2N-1): Active middle set
  // - Set 3 (2N to 3N-1): Right buffer when clicking >
  const loopedMovies = [...movies, ...movies, ...movies];

  // Dynamically calculate card stride (width + gap) for mobile (w-47.5) and desktop (sm:w-55)
  const getCardStride = (track: HTMLDivElement): number => {
    if (track.children.length >= 2) {
      const first = track.children[0] as HTMLElement;
      const second = track.children[1] as HTMLElement;
      const stride = second.offsetLeft - first.offsetLeft;
      if (stride > 0) return stride;
    }
    return window.innerWidth >= 640 ? 240 : 210;
  };

  // Center the scroll position on the middle set initially
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const centerMiddleSet = () => {
      const cardStride = getCardStride(track);
      const singleSetWidth = cardStride * movies.length;
      track.scrollLeft = singleSetWidth;
    };

    centerMiddleSet();
    const rafId = requestAnimationFrame(centerMiddleSet);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Invisible loop reset: silently snap back to the middle set once scroll finishes
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let debounceTimer: ReturnType<typeof setTimeout> | null = null;

    const handleLoopReset = () => {
      const cardStride = getCardStride(track);
      const singleSetWidth = cardStride * movies.length;

      // When scrolled into the 3rd set, silently jump back 1 set
      if (track.scrollLeft >= singleSetWidth * 2) {
        track.scrollLeft -= singleSetWidth;
      }
      // When scrolled into the 1st set, silently jump forward 1 set
      else if (track.scrollLeft < singleSetWidth) {
        track.scrollLeft += singleSetWidth;
      }
    };

    const onScroll = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(handleLoopReset, 150);
    };

    track.addEventListener("scrollend", handleLoopReset);
    track.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      track.removeEventListener("scrollend", handleLoopReset);
      track.removeEventListener("scroll", onScroll);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  // Scroll only on button clicks
  const scrollByCards = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const cardStride = getCardStride(track);
    const singleSetWidth = cardStride * movies.length;
    const scrollDistance = cardStride * 2; // scroll 2 cards per click

    // Boundary guard for rapid clicking: jump silently before scrolling if close to edges
    if (direction === -1 && track.scrollLeft <= cardStride * 2) {
      track.scrollLeft += singleSetWidth;
    } else if (
      direction === 1 &&
      track.scrollLeft >= singleSetWidth * 2 - cardStride * 2
    ) {
      track.scrollLeft -= singleSetWidth;
    }

    // Smooth scroll triggered ONLY by button clicks
    track.scrollBy({ left: direction * scrollDistance, behavior: "smooth" });
  };

  return (
    <section className="bg-surface-light pb-5 px-4 sm:px-6" id="movies">
      <div className="max-w-content mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          The Best Entertainment for Your Couch
        </h2>
        <p className="mt-4 text-gray-600">
          Enjoy top channels and the most popular movies on Finland TV.
        </p>
      </div>

      <div className="relative w-[87%] mx-auto mt-10">
        {/* Previous Button (<) */}
        <button
          type="button"
          aria-label="Previous movies"
          onClick={() => scrollByCards(-1)}
          className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-brand transition-colors cursor-pointer"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 010 1.06L8.56 10.5l4.23 4.23a.75.75 0 11-1.06 1.06l-4.75-4.75a.75.75 0 010-1.06l4.75-4.75a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Carousel Track: Scrollbar hidden across all browsers, smooth scroll on button click */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x px-1 py-1"
        >
          {loopedMovies.map((movie, i) => (
            <MovieCard key={`${movie.id}-${i}`} movie={movie} />
          ))}
        </div>

        {/* Next Button (>) */}
        <button
          type="button"
          aria-label="Next movies"
          onClick={() => scrollByCards(1)}
          className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 h-10 w-10 items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:text-brand transition-colors cursor-pointer"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 010-1.06L11.44 9.5 7.21 5.27a.75.75 0 011.06-1.06l4.75 4.75a.75.75 0 010 1.06l-4.75 4.75a.75.75 0 01-1.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}