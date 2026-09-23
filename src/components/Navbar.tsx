import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/FinlandLogo.webp"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Trade", path: "/trade" },
  { name: "Channel List", path: "/channel-list" },
  { name: "Instructions", path: "/instructions" },
  { name: "Blog", path: "/blog" },
];

const iptvOptions = [
  { name: "Apple TV", path: "/install-iptv/apple-tv" },
  { name: "Smart TV", path: "/install-iptv/smart-tv" },
  { name: "Mobile/Tablet", path: "/install-iptv/mobile-tablet" },
  { name: "The computer", path: "/install-iptv/computer" },
  { name: "Android Box", path: "/install-iptv/android-box" },
  { name: "Formuler Box", path: "/install-iptv/formuler-box" },
  { name: "TVIP Box", path: "/install-iptv/tvip-box" },
  { name: "Onyx Box", path: "/install-iptv/onyx-box" },
];


export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-blue-900 px-4 py-5.5 text-center text-xl text-white font-semibold">
        Welcome to our website! Explore and discover more.
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">

          {/* Logo */}
          <NavLink to="/" className="shrink-0">
            <span className="text-xl font-bold text-blue-900">
              <img className="w-55" src={Logo} alt="" />
            </span>
          </NavLink>

          {/* Navigation Links */}
          <div className="flex items-center gap-3 overflow-visible whitespace-nowrap text-sm">

            {/* Normal Links */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `
                text-[1rem]
                transition-colors ${isActive
                    ? "font-semibold text-blue-700"
                    : "text-gray-800 hover:text-blue-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Install IPTV Dropdown */}
            <div
              className="group relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen((prev) => !prev)}
                aria-expanded={dropdownOpen}
                className=" text-[1rem] flex items-center gap-1 text-gray-800 transition-colors hover:text-blue-700"
              >
                Install IPTV

                <svg
                  className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""
                    }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {/* Dropdown Options */}
              <div
                className={`absolute left-0 top-full z-50 w-44 border border-gray-200 bg-white shadow-lg ${dropdownOpen
                    ? "block"
                    : "hidden group-hover:block group-focus-within:block"
                  }`}
              >
                {iptvOptions.map((option) => (
                  <NavLink
                    key={option.path}
                    to={option.path}
                    onClick={() => setDropdownOpen(false)}
                    className={({ isActive }) =>
                      `block border-b border-gray-100 px-5 py-3 text-sm transition-colors last:border-b-0 ${isActive
                        ? "bg-gray-100 text-blue-700"
                        : "text-gray-800 hover:bg-gray-100 hover:text-blue-700"
                      }`
                    }
                  >
                    {option.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <NavLink
              to="/faq"
              className="text-gray-800 transition-colors hover:text-blue-700 text-[1rem]"
            >
              Faq's
            </NavLink>

            {/* Contact Us - Jivo Chat */}
            <a
              href="/contact"
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-gray-800 transition-colors hover:text-blue-700 text-[1rem]"
            >
              Contact Us
            </a>
          </div>
          {/* Cart Button */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 rounded-md border-2 border-transparent bg-blue-900 px-4 py-2.5 text-sm font-bold text-white transition hover:border-blue-900 hover:bg-amber-50 hover:text-blue-900 cursor-pointer"
          >
            0.00 €
            <span>🛒</span>
            <span className="rounded-full bg-red-500 px-1.5 text-xs">0</span>
          </button>
        </nav>


        {/* Cart Sidebar */}
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isCartOpen ? "visible" : "invisible pointer-events-none"
            }`}
          aria-hidden={!isCartOpen}
        >
          {/* Dark Background Overlay (fades in/out smoothly) */}
          <div
            aria-label="Close cart"
            onClick={() => setIsCartOpen(false)}
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out cursor-pointer ${isCartOpen ? "opacity-100" : "opacity-0"
              }`}
          />
          {/* Right Sidebar (slides in/out smoothly) */}
          <aside
            className={`fixed right-0 top-0 h-screen w-97.5 max-w-[90vw] bg-white shadow-2xl
      transition-transform duration-300 ease-in-out
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}
    `}
            aria-label="Shopping cart"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-end px-5 py-5">
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
                className="text-3xl leading-none text-gray-500 transition-colors duration-300 hover:text-black cursor-pointer"
              >
                &times;
              </button>
            </div>
            {/* Empty Cart Message */}
            <div className="px-8 pt-1">
              <p className="text-base font-semibold text-gray-900">
                No Item is added.
              </p>
            </div>
          </aside>
        </div>

      </header>
    </>
  );
}