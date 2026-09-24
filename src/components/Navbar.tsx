import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/FinlandLogo.webp";
import { useCart } from "../context/CartContext";

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
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    openCart,
    closeCart,
    totalItems,
    formattedTotalPrice,
  } = useCart();

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
              <img className="w-55" src={Logo} alt="Finland TV Logo" />
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
                  `text-[1rem] transition-colors ${
                    isActive
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
                className="text-[1rem] flex items-center gap-1 text-gray-800 transition-colors hover:text-blue-700 cursor-pointer"
              >
                Install IPTV
                <svg
                  className={`h-4 w-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
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
                className={`absolute left-0 top-full z-50 w-44 border border-gray-200 bg-white shadow-lg ${
                  dropdownOpen
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
                      `block border-b border-gray-100 px-5 py-3 text-sm transition-colors last:border-b-0 ${
                        isActive
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

            {/* Contact Us */}
            <Link
              to="/contact"
              className="text-gray-800 transition-colors hover:text-blue-700 text-[1rem]"
            >
              Contact Us
            </Link>
          </div>

          {/* Cart Button: Displays dynamic total price & badge count */}
          <button
            type="button"
            onClick={openCart}
            className="flex items-center gap-2 rounded-md border-2 border-transparent bg-blue-900 px-4 py-2.5 text-sm font-bold text-white transition hover:border-blue-900 hover:bg-amber-50 hover:text-blue-900 cursor-pointer"
          >
            {formattedTotalPrice}
            <span>🛒</span>
            <span className="rounded-full bg-red-500 px-1.5 text-xs">
              {totalItems}
            </span>
          </button>
        </nav>

        {/* Cart Sidebar */}
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
            isCartOpen ? "visible" : "invisible pointer-events-none"
          }`}
          aria-hidden={!isCartOpen}
        >
          {/* Dark Background Overlay */}
          <div
            aria-label="Close cart"
            onClick={closeCart}
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out cursor-pointer ${
              isCartOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Right Sidebar */}
          <aside
            className={`fixed right-0 top-0 h-screen w-97.5 max-w-[90vw] bg-white shadow-2xl flex flex-col
              transition-transform duration-300 ease-in-out
              ${isCartOpen ? "translate-x-0" : "translate-x-full"}
            `}
            aria-label="Shopping cart"
          >
            {/* Sidebar Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h2 className="text-lg font-bold text-gray-900">
                Shopping Cart {totalItems > 0 && `(${totalItems})`}
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="text-3xl leading-none text-gray-500 transition-colors duration-300 hover:text-black cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Empty Cart Message */}
            {cart.length === 0 ? (
              <div className="px-8 pt-6">
                <p className="text-base font-semibold text-gray-900">
                  No Item is added.
                </p>
              </div>
            ) : (
              <>
                {/* Scrollable Items List */}
                <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-gray-100">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 py-4 first:pt-0 last:pb-0"
                    >
                      {/* Product Thumbnail */}
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded border border-gray-200 bg-[#dedcdc] p-1 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <p className="text-xs text-blue-700 font-medium mt-0.5">
                          {item.price}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-1.5">
                          <div className="flex items-center border border-gray-200 rounded text-xs">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 py-0.5 hover:bg-gray-100 text-gray-600 font-bold cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="px-2 py-0.5 font-medium text-gray-800">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 py-0.5 hover:bg-gray-100 text-gray-600 font-bold cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-xs text-gray-500 font-medium">
                            = {(item.numericPrice * item.quantity).toFixed(2)} €
                          </span>
                        </div>
                      </div>

                      {/* "X" Remove Button */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="shrink-0 p-1 text-gray-400 hover:text-red-600 transition-colors text-xl font-bold cursor-pointer leading-none"
                        title="Remove item"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>

                {/* Cart Total Summary */}
                <div className="border-t border-gray-200 p-5 bg-gray-50">
                  <div className="flex items-center justify-between text-base font-bold text-gray-900 mb-4">
                    <span>Total:</span>
                    <span className="text-blue-900 text-lg">
                      {formattedTotalPrice}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded bg-blue-900 py-3 text-sm font-bold text-white transition hover:bg-blue-800 cursor-pointer"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      </header>
    </>
  );
}