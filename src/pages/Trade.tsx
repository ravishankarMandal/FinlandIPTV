import { NavLink } from "react-router-dom";
import heroSection from "../assets/heroSection.jpg";
// import Footer from "../components/Footer";


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
  return (
    <main className="w-full">

      {/* =========================
          HERO BANNER
      ========================== */}
      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-center sm:h-57.5"
        style={{
          backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Trade
          </h1>

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

                  <p className="mt-2 text-xs text-blue-700">
                    {product.price}
                  </p>

                  {/* Product Button */}
                  <button
                    type="button"
                    className="mt-4 rounded-sm bg-[#3b70c4] px-4 py-2 text-xs font-medium text-white transition hover:bg-[#285ba8]"
                  >
                    {product.button}
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* <Footer/> */}

    </main>
  );
}