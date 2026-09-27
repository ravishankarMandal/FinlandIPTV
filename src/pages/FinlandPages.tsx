import { useEffect, useState } from "react";
import heroSection from "../assets/heroSection.jpg";
import { useCart } from "../context/CartContext";

const relatedProducts = [
  {
    id: 1,
    name: "Formuler Z11 Pro MAX + 12 Months",
    price: 129.99,
    image: "/images/iptv-1.png",
  },
  {
    id: 2,
    name: "Formuler Z11 Pro + 12 Months",
    price: 119.99,
    image: "/images/iptv-2.png",
  },
  {
    id: 3,
    name: "TVIP 705 + 12 Months",
    price: 99.99,
    image: "/images/iptv-3.png",
  },
  {
    id: 4,
    name: "TVIP 605",
    price: 69.99,
    image: "/images/tvBox-1.png",
  },
];

// NOTE: The project does not currently contain per-plan pricing for
// Finland IPTV anywhere — only the single displayed range
// "0.00 € – 29.99 €". Per-plan prices are NOT invented here; this is
// the existing displayed price reused as a shared placeholder for
// every plan until real per-plan pricing data is supplied.
const FINLAND_IPTV_PLACEHOLDER_PRICE = 29.99;

// Distinct synthetic id per plan so different Finland IPTV plans
// never collide with each other in the cart (CartContext keys items
// by id). Namespaced well above the related-product ids (1-4) so
// they can never collide with those either.
const PLAN_ID_OFFSETS: Record<string, number> = {
  "1 month": 1,
  "3 months": 2,
  "6 months": 3,
  "12 months": 4,
  "2*12 months": 5,
};
const FINLAND_IPTV_ID_BASE = 9000;

const FinlandPages = () => {
  const { addToCart } = useCart();

  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  // Changing the plan clears any stale success message and never
  // auto-adds anything to the cart by itself.
  useEffect(() => {
    setMessage("");
  }, [selectedOption]);

  const isPlanSelected = selectedOption !== "";

  const handleAddToCart = () => {
    if (!isPlanSelected) {
      // Defense in depth alongside the `disabled` attribute below.
      return;
    }

    const planOffset = PLAN_ID_OFFSETS[selectedOption] ?? 0;

    const product = {
      id: FINLAND_IPTV_ID_BASE + planOffset,
      name: `Finland IPTV - ${selectedOption}`,
      price: `${FINLAND_IPTV_PLACEHOLDER_PRICE.toFixed(2)} €`,
      image: "/images/iptv-5.png",
    };

    addToCart(product, quantity);
    setMessage("Product selected!");
  };

  const handleRelatedAddToCart = (product: (typeof relatedProducts)[number]) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: `${product.price.toFixed(2)} €`,
        image: product.image,
      },
      1
    );
    setMessage(`${product.name} selected`);
  };

  return (
    <main className="w-full bg-white">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-center md:h-60"
        style={{
          backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold md:text-3xl">
            Finland IPTV
          </h1>

          <p className="mt-2 text-xs">
            <span>Home</span>
            <span className="mx-2">/</span>
            <span>Finland IPTV</span>
          </p>
        </div>
      </section>

      {/* ================= PRODUCT SECTION ================= */}
      <section className="bg-[#f8fbfd] px-5 py-10 md:py-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {/* Product Image */}
          <div className="relative flex h-70 items-center justify-center bg-[#e5e5e5] md:h-130">
            <img
              src="/images/iptv-5.png"
              alt="Finland IPTV"
              className="h-full w-full "
            />

            {/* Image Zoom Icon */}
            <button
              type="button"
              aria-label="View product image"
              className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm"
            >
              ⌕
            </button>
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-gray-900">
              Finland IPTV
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-700">
              Enjoy premium IPTV services with a reliable and
              high-quality streaming experience. Access a wide
              range of entertainment and enjoy your favorite
              content.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-700">
              Finland IPTV offers a high-quality viewing
              experience with a wide selection of entertainment.
              Choose the subscription option that suits you and
              enjoy your favorite content.
            </p>

            {/* Price */}
            <p className="mt-4 text-lg font-semibold text-green-700">
              0.00 € – 29.99 €
            </p>

            {/* Subscription Selector */}
            <div className="mt-4 flex flex-col gap-2 border border-gray-200 bg-gray-100 p-3 sm:flex-row sm:items-center sm:justify-between">
              <label
                htmlFor="subscription"
                className="text-xs font-medium text-gray-800"
              >
                Select Subscription
              </label>

              <select
                id="subscription"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="h-9 w-full border border-gray-300 bg-white px-3 text-sm outline-none focus:border-blue-900 sm:w-48"
              >
                <option value="">No Plan Selected</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="12 months">12 months</option>
                <option value="2*12 months">2*12 months</option>
              </select>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, Number(e.target.value)))
                }
                aria-label="Quantity"
                className="h-10 w-12 border border-gray-300 bg-white text-center text-sm outline-none"
              />

              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!isPlanSelected}
                className="h-10 bg-blue-900 px-5 text-ml rounded-sm font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-900/40 disabled:hover:bg-blue-900/40"
              >
                Add to Cart
              </button>
            </div>

            {message && (
              <p className="mt-2 text-sm text-green-700">
                {message}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <section className="bg-[#e7f1f8] px-5 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            You May Also Like
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 rounded-t-2xl md:grid-cols-4">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col border rounded-t-2xl border-gray-200 overflow-hidden bg-white transition-all duration-300 hover:shadow-md hover:scale-105"
              >
                {/* Related Product Image */}
                <div className="flex h-28 items-center justify-center bg-[#e5e5e5]  sm:h-70">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full rounded-t-2xl object-contain"
                  />
                </div>

                {/* Related Product Details */}
                <div className="flex flex-1 flex-col items-center border-t border-gray-200 p-3 text-center">
                  <h3 className="min-h-10 text-ml font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-ml text-blue-900">
                    {product.price.toFixed(2)} €
                  </p>

                  <button
                    type="button"
                    onClick={() => handleRelatedAddToCart(product)}
                    className="mt-3 rounded-sm bg-blue-900 px-4 py-2 text-[1rem] text-white transition hover:bg-blue-800"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export { FinlandPages };