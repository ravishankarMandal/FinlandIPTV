import { NavLink } from "react-router-dom";
import heroSection from "../assets/heroSection.jpg";
// import Footer from "../components/Footer";

export default function ChannelList() {
  return (
    <main className="w-full bg-white">
      {/* =========================
          HERO BANNER
      ========================== */}
      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-top sm:h-100"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 25, 45, 0.72), rgba(5, 25, 45, 0.72)), url(${heroSection})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Channel list
          </h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>

            <span>/</span>

            <span>Channel List</span>
          </div>
        </div>
      </section>

      {/* =========================
          CHANNEL LIST CONTENT
      ========================== */}
      <section className="bg-white px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-4xl text-center text-gray-900">

          {/* Heading */}
          <h2 className="mb-3 text-xl font-semibold sm:text-2xl">
            Here is a complete list of all TV streaming channels!
          </h2>

          {/* Introduction */}
          <p className="mb-5 text-sm leading-6 sm:text-base">
            We offer a wide range of channels from around the world,
            with a particular focus on the Nordic market offering.
            Our service includes all popular FHD channels to ensure
            almost 100% availability for a reliable and high-quality
            experience. Here are some highlights of our unbeatable selection:
          </p>

          {/* Sports Channels */}
          <div className="space-y-1 text-sm leading-5 sm:text-base">

            <p>
              – Discovery+ Sport (Sweden – Denmark – Norway – Finland)
            </p>

            <p>
              – Allsvenskan &amp; Superettan
            </p>

            <p>
              – Viaplay Sport Ultra HD (Sweden – Denmark – Norway – Finland)
              and other Viaplay sports channels in high definition,
              including events such as UFC
            </p>

            <p>
              – TV4 Play Sweden
            </p>

            <p>
              – EttanPlay SE, Telia Play Events SE, DAZN SE, Innebandy SE,
              Handbollsligan SE, Prime Sports SE, Disney Plus SE,
              SportExpressen/Aftonbladet SE, Elitserien Live SE, Svensk Hockey SE
            </p>

            <p>
              – UFC, MMA, boxing
            </p>

            <p>
              – N1 Play PPV – our own channels that we are particularly proud of
              (Sweden – Denmark – Norway)
            </p>

            <p>
              – Champions League, Europa League, Premier League
            </p>

          </div>

          {/* Additional Information */}
          <div className="mt-5 space-y-3 text-sm leading-6 sm:text-base">

            <p>
              In addition, the library of movies and series is updated
              several times a day to offer the latest and most popular
              titles. Of course, everything is available with subtitles
              in all Nordic languages.
            </p>

            <p>
              If you're looking for the best TV streaming service provider
              with the most comprehensive and high-quality offerings,
              you've come to the right place!
            </p>

          </div>

          {/* Finland Channel List */}
          <div className="mx-auto mt-6 max-w-2xl text-left text-sm leading-5">

            <ul className="list-disc pl-5">
              <li>
                <strong>Finland</strong>

                <ul className="mt-1 space-y-0.5 pl-3">
                  <li>MTV Urheilu Events FI</li>
                  <li>Ruutu Events FI</li>
                  <li>Max Sports FI</li>
                  <li>Viaplay Sport FI</li>
                  <li>Telia Play Events FI</li>
                  <li>Sweden</li>
                  <li>World Football Events</li>
                  <li>Max Sports SE</li>
                  <li>Max Sports SE [B]</li>
                  <li>Prime Sports SE</li>
                  <li>Disney Plus SE</li>
                  <li>Discovery+ Sport SE</li>
                </ul>
              </li>
            </ul>

          </div>

        </div>
      </section>

      {/* <Footer/> */}
    </main>
  );
}