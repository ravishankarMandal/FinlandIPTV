import { NavLink } from "react-router-dom";

const shortLinks = [
  { name: "Home", path: "/" },
  { name: "Trade", path: "/trade" },
  { name: "Channel list", path: "/channel-list" },
  { name: "Instructions", path: "/instructions" },
  { name: "Blog", path: "/blog" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact us", path: "/contact" },
];

const instructionLinks = [
  { name: "Apple TV", path: "/install-iptv/apple-tv" },
  { name: "Smart TV", path: "/install-iptv/smart-tv" },
  { name: "Mobile/Tablet", path: "/install-iptv/mobile-tablet" },
  { name: "Computer", path: "/install-iptv/computer" },
  { name: "Android Box", path: "/install-iptv/android-box" },
  { name: "Formula Box", path: "/install-iptv/formuler-box" },
  { name: "TVIP Box", path: "/install-iptv/tvip-box" },
  { name: "Onyx Box", path: "/install-iptv/onyx-box" },
];

const supportLinks = [
  { name: "DMCA", path: "/dmca" },
  { name: "Terms", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

export default function Footer() {
  return (
    <footer className="w-full text-white">

      {/* Main Footer */}
      <div className="bg-[#0c2d5c] px-6 py-14 sm:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">

          {/* Column 1 - Logo & Description */}
          <div>
            <NavLink to="/" className="inline-flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">
                📺
              </span>

              <span className="text-2xl font-bold">
                Finlandptv
              </span>
            </NavLink>

            <p className="mt-5 max-w-sm text-base leading-[1.65] text-gray-100">
              Want an affordable and reliable way to watch your
              favorite shows and live sports? Finland IPTV offers
              top-quality channels and on-demand content at
              competitive prices. Enjoy smooth streaming and
              stay in the moment!
            </p>
          </div>

          {/* Column 2 - Short Links */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Short links
            </h2>

            <ul className="space-y-3">
              {shortLinks.map((link) => (
                <li key={link.name}>
                  {link.name === "Contact us" ? (
                    <button
                      type="button"
                      onClick={() => window.jivo_api?.open()}
                      className="flex items-center gap-3 text-base transition hover:text-blue-300"
                    >
                      <span aria-hidden="true">›</span>
                      Contact us
                    </button>
                  ) : (
                    <NavLink
                      to={link.path}
                      className="flex items-center gap-3 text-base transition hover:text-blue-300"
                    >
                      <span aria-hidden="true">›</span>
                      {link.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Instructions */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Instructions
            </h2>

            <ul className="space-y-3">
              {instructionLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-3 text-base transition hover:text-blue-300"
                  >
                    <span aria-hidden="true">›</span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Support */}
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Support
            </h2>

            <div className="text-base leading-7">
              <p className="font-semibold">
                Opening hours:
              </p>

              <p>
                Every day: 11:00–23:00
              </p>
            </div>

            {/* Support Links */}
            <ul className="mt-8 space-y-3">
              {/* Live Chat */}
              <li>
                <button
                  type="button"
                  onClick={() => window.jivo_api?.open()}
                  className="flex items-center gap-3 text-base transition hover:text-blue-300"
                >
                  <span aria-hidden="true">›</span>
                  Live Chat
                </button>
              </li>

              {supportLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="flex items-center gap-3 text-base transition hover:text-blue-300"
                  >
                    <span aria-hidden="true">›</span>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#073b85] px-4 py-4 text-center">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Finland IPTV | All rights reserved
        </p>
      </div>

    </footer>
  );
}