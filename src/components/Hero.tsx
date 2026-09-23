import { Link } from "react-router-dom";
import hero from "../assets/heroSection.jpg"


export default function Hero() {
  return (
    <section
      className="relative flex min-h-130 items-center overflow-hidden bg-slate-900 bg-cover bg-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-950/80 via-slate-900/65 to-slate-900/40" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-start px-6 py-16 sm:px-10 lg:px-16">
        <div className="w-full max-w-lg text-white">

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Finnish TV: Your gateway to unlimited entertainment
          </h1>

          {/* Description */}
          <p className="mt-6 text-sm leading-relaxed text-gray-100 sm:text-base">
            Are you looking for an affordable and reliable way to watch your
            favorite shows and sports broadcasts live? Suomen TV offers a wide
            range of high-quality TV channels and premium content at competitive
            prices. Enjoy a smooth viewing experience without interruptions
            and stay up to date with the most important events.
          </p>

          {/* Order Now Button */}
          <Link
            to="/trade"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
          >
            Order Now
            <span aria-hidden="true">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}