import { NavLink } from "react-router-dom";
import heroSection from "../assets/heroSection.jpg";
// import Footer from "../components/Footer";

type Instruction = {
  title: string;
  image: string;
  path: string;
};

const instructions: Instruction[] = [
  {
    title: "TVIP S-Box",
    image: "/images/iptvSmart.png",
    path: "/install-iptv/tvip-box",
  },
  {
    title: "IPTV smart",
    image: "/images/iptvSmart.png",
    path: "/install-iptv/smart-tv",
  },
  {
    title: "Apple TV",
    image: "/images/AppleTV.png",
    path: "/install-iptv/apple-tv",
  },
  {
    title: "TVIP S-Box",
    image: "/images/LG.png",
    path: "/install-iptv/tvip-box",
  },
  {
    title: "Smart TV",
    image: "/images/LG.png",
    path: "/install-iptv/smart-tv",
  },
  {
    title: "Net IPTV",
    image: "/images/LG.png",
    path: "/install-iptv/smart-tv",
  },
  {
    title: "Nvidia Shield",
    image: "/images/nVidia.png",
    path: "/install-iptv/android-box",
  },
  {
    title: "Formuler",
    image: "/images/tvBox-1.png",
    path: "/install-iptv/formuler-box",
  },
  {
    title: "Home",
    image: "/images/tvsip.png",
    path: "/install-iptv",
  },
];

export default function Instructions() {
  return (
    <main className="w-full bg-white">

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
            Instructions
          </h1>

          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>

            <span>/</span>

            <span>Instructions</span>
          </div>
        </div>
      </section>

      {/* =========================
          DEVICE INSTRUCTIONS
      ========================== */}
      <section className="relative overflow-hidden bg-white px-4 pb-100 pt-12 sm:px-6">

        {/* Device Grid */}
        <div className=" relative z-10 mx-auto grid px-30 grid-cols-2 gap-5 sm:grid-cols-3 mb-30">

          {instructions.map((item, index) => (
            <NavLink
              to={item.path}
              key={`${item.title}-${index}`}
              className="group flex h-70 flex-col items-center justify-center rounded-md bg-[#f5f5f5] p-3 transition duration-300  hover:-translate-y-1 hover:shadow-md"
            >
              {/* Device Image */}
              <div className="flex h-55 w-full items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Device Title */}
              <h2 className="mt-2 text-center text-xl font-medium text-gray-900 transition-colors group-hover:text-blue-700">
                {item.title}
              </h2>
            </NavLink>
          ))}

        </div>

        {/* =========================
            BOTTOM WAVE SVG
        ========================== */}
        <div className="pointer-events-none absolute bottom-0  left-0 w-full flex flex-col gap-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="none"
            className="block h-36 w-full transform-[scaleY(-1)]"
          >
            <path
              fill="#f5f7f8"
              d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
            />

            <path
              fill="#f5f7f8"
              d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3C267.7,18.8,269.7,18,269.6,18z"
            />

            <path
              fill="#f5f7f8"
              d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2S227.6,9.9,227.4,9.8z"
            />
          </svg>


          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.5 27.8"
            preserveAspectRatio="none"
            className="block h-26 w-full transform-[scaleY(-1)]"
          >
            <path
              fill="#f5f7f8"
              d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z"
            />

            <path
              fill="#f5f7f8"
              d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3C267.7,18.8,269.7,18,269.6,18z"
            />

            <path
              fill="#f5f7f8"
              d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2S227.6,9.9,227.4,9.8z"
            />
          </svg>
        </div>

      </section>

      {/* <Footer/> */}
    </main>
  );
}