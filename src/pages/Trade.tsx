import { NavLink, useNavigate } from "react-router-dom";
import heroSection from "../assets/heroSection.jpg";
import { useCart } from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  button: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Formuler Z11 Pro + 12 months",
    image: "/images/iptv-1.png",
    price: "339.99 €",
    button: "Add to cart",
  },
  {
    id: 2,
    name: "Formuler Z11 Pro MAX + 12 months",
    image: "/images/iptv-2.png",
    price: "369.99 €",
    button: "Add to cart",
  },
  {
    id: 3,
    name: "TVIP 705 + 12 months",
    image: "/images/iptv-3.png",
    price: "289.99 €",
    button: "Add to cart",
  },
  {
    id: 4,
    name: "TV 605",
    image: "/images/iptv-4.jpg",
    price: "159.99 €",
    button: "Add to cart",
  },
  {
    id: 5,
    name: "Finland IPTV",
    image: "/images/iptv-5.png",
    price: "29.99 € – 259.99 €",
    button: "Choose from the options",
  },
];

export default function Trade() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductAction = (product: Product) => {
    // GOAL 2: "Choose from the options" navigates to /finland without adding to cart
    if (product.id === 5 || product.button.toLowerCase().includes("choose")) {
      navigate("/finland");
      return;
    }

    // GOAL 1: Add product to cart
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <main className="w-full">
      {/* =========================
          HERO BANNER
      ========================== */}
      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-top sm:h-100"
        style={{
          backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">Trade</h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>

            <span>/</span>

            <span>Shop</span>
          </div>
        </div>
      </section>

      {/* =========================
          SHOP / PRODUCT SECTION
      ========================== */}
      <section className="min-h-105 bg-white px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-5xl">
          {/* Product Grid */}
          <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex w-full max-w-75 flex-col overflow-hidden border border-gray-200 bg-white text-center transition-shadow hover:shadow-md"
              >
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden bg-[#dedcdc]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col items-center px-3 py-4">
                  <h2 className="text-sm font-semibold text-gray-900">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-xs text-blue-700">{product.price}</p>

                  {/* Product Button */}
                  <button
                    type="button"
                    onClick={() => handleProductAction(product)}
                    className="mt-4 rounded-sm bg-[#3b70c4] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#285ba8] cursor-pointer"
                  >
                    {product.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}import { useState } from "react";

const relatedProducts = [
  {
    id: 1,
    name: "Formuler Z11 Pro MAX + 12 kuukautta",
    price: 129.99,
    image: "/images/formuler-z11.png",
  },
  {
    id: 2,
    name: "Formuler Z11 Pro + 12 kuukautta",
    price: 119.99,
    image: "/images/formuler-z11-pro.png",
  },
  {
    id: 3,
    name: "TVIP 705 + 12 kuukautta",
    price: 99.99,
    image: "/images/tvip-705.png",
  },
  {
    id: 4,
    name: "Tvip 605",
    price: 69.99,
    image: "/images/tvip-605.png",
  },
];

const FinlandPages = () => {
  const [selectedOption, setSelectedOption] = useState("Vuosi");
  const [quantity, setQuantity] = useState(1);

  const [message, setMessage] = useState("");

  const handleAddToCart = () => {
    // Cart integration will be connected to your shared cart state.
    setMessage("Product selected!");
  };

  return (
    <main className="w-full bg-white">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-center md:h-60"
        style={{
          backgroundImage: `
            linear-gradient(rgba(4, 22, 40, 0.65), rgba(4, 22, 40, 0.65)),
            url("/images/contact-hero.jpg")
          `,
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
          <div className="relative flex h-70 items-center justify-center bg-[#e5e5e5] p-6 md:h-80">
            <img
              src="/images/finland-iptv.png"
              alt="Finland IPTV"
              className="h-full w-full object-contain"
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
              Saatavilla IPTV-vastaanotin premium-palveluilla,
              toimiva ja laadukas IPTV-ratkaisu. Nauti
              monipuolisesta viihteestä ja laadukkaasta
              katselukokemuksesta.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-700">
              Finland IPTV tarjoaa laadukkaan katselukokemuksen
              ja laajan viihdevalikoiman. Valitse itsellesi sopiva
              tilausvaihtoehto ja nauti suosikkisisällöistäsi.
            </p>

            {/* Price */}
            <p className="mt-4 text-lg font-semibold text-green-700">
              0.00 € – 29.99 €
            </p>

            {/* Variant Selector */}
            <div className="mt-4 flex flex-col gap-2 border border-gray-200 bg-gray-100 p-3 sm:flex-row sm:items-center sm:justify-between">
              <label
                htmlFor="subscription"
                className="text-xs font-medium text-gray-800"
              >
                Valitse tilaus
              </label>

              <select
                id="subscription"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="h-9 w-full border border-gray-300 bg-white px-3 text-sm outline-none focus:border-blue-900 sm:w-48"
              >
                <option value="Vuosi">Vuosi</option>
                <option value="6 kuukautta">6 kuukautta</option>
                <option value="3 kuukautta">3 kuukautta</option>
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
                className="h-10 bg-blue-900 px-5 text-xs font-medium text-white transition hover:bg-blue-800"
              >
                Lisää ostoskoriin
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
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            Tutustu myös
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col border border-gray-200 bg-white"
              >
                {/* Related Product Image */}
                <div className="flex h-28 items-center justify-center bg-[#e5e5e5] p-3 sm:h-36">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Related Product Details */}
                <div className="flex flex-1 flex-col items-center border-t border-gray-200 p-3 text-center">
                  <h3 className="min-h-10 text-xs font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-1 text-xs text-blue-900">
                    {product.price.toFixed(2)} €
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setMessage(`${product.name} selected`)
                    }
                    className="mt-3 bg-blue-900 px-4 py-2 text-[10px] text-white transition hover:bg-blue-800"
                  >
                    Lisää ostoskoriin
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