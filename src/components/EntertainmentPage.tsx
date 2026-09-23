import AppleImg from "../assets/Apple-devices.png"
import FinlandImg from "../assets/finland-iptv-.png"
import SmartImg from "../assets/smart.png"

const devices = [
  {
    title: "Apple devices",
    image: AppleImg,
    description:
      "Watch Finnish TV content easily on all your devices and enjoy your favorite shows wherever you are.",
  },
  {
    title: "Computers and Android devices",
    image: FinlandImg,
    description:
      "The channels work smoothly on computers and Android devices, so you can watch them on the go.",
  },
  {
    title: "Smart TV",
    image: SmartImg,
    description:
      "Smart TV makes watching especially hassle-free. For more information, visit our website, where you can access all channels in one place.",
  },
];

const benefits = [
  {
    icon: "☺",
    title: "Easy Installation",
    description:
      "We provide clear instructions to help you install the IPTV package on all devices. You can also get help via chat if you need support with the implementation.",
  },
  {
    icon: "♧",
    title: "Live Broadcasts",
    description:
      "Watch your favorite channels and shows live on TV, with over 45,000 live channels to choose from. You'll always be up to date with the most important shows and events from around the world.",
  },
  {
    icon: "▣",
    title: "Video On Demand (VOD)",
    description:
      "Regardless of your preferences, you can easily find movies and series that suit your taste in our VOD service – there is a selection of different genres available.",
  },
  {
    icon: "◎",
    title: "Top sports channels",
    description:
      "Enjoy high-quality sports broadcasts from around the world and follow the most important sporting events without interruptions.",
  },
  {
    icon: "▤",
    title: "Fast Servers",
    description:
      "Experience a smooth viewing experience without buffering, with stable and unlimited bandwidth.",
  },
  {
    icon: "♧",
    title: "Committed Support Team",
    description:
      "Our team ensures that the service runs smoothly and that your viewing experience remains uninterrupted.",
  },
];

export default function EntertainmentPage() {
  return (
    <main className="min-h-screen bg-[#f4f8fa] px-4 py-10 text-[#30343b] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl">

        {/* ==============================
            1. GATEWAY SECTION
        ============================== */}

        <section>
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-2.5xl font-bold sm:text-3xl">
              Your Gateway to Finnish Entertainment
            </h1>

            <p className="mt-5 text-ml text-gray-600">
              Watch Finnish TV on all your devices and enjoy your
              favorite content anywhere!
            </p>
          </div>

          {/* Device Cards */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
            {devices.map((device) => (
              <div
                key={device.title}
                className="flex flex-col items-center text-center"
              >
                {/* Device Image */}
                <div className="flex h-44 w-full items-center justify-center">
                  <img
                    src={device.image}
                    alt={device.title}
                    className="h-full max-w-full object-contain"
                  />
                </div>

                {/* Device Title */}
                <h2 className="mt-3 text-base font-semibold">
                  {device.title}
                </h2>

                {/* Device Description */}
                <p className="mt-3 text-xs leading-5 text-gray-600">
                  {device.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==============================
            2. ENTERTAINMENT INFORMATION
        ============================== */}

        <section className="mt-10 rounded-lg bg-white p-15 text-center shadow-sm sm:px-8 flex flex-col gap-5 ">

          <p className="text-[1.1rem] leading-5 text-gray-600">
            TV Streaming Finland offers a diverse entertainment package
            for the whole family. You get access to a wide selection
            of live channels, sports, movies, series and children's
            programs from Finland and international entertainment
            services. You can easily find something to watch from
            different areas of interest every day of the year.
          </p>

          {/* Sports */}
          <div className="mt-5">
            <h3 className="text-[1.4rem] pb-5 font-semibold">
              Sports, Movies and Series
            </h3>

            <p className="mt-2 text-[1.1rem] leading-5 text-gray-600">
              Follow live sports broadcasts such as football, hockey
              and tennis, and discover a wide selection of movies
              and series. The on-demand library includes both the
              latest releases and timeless classics.
            </p>
          </div>

          {/* Entertainment */}
          <div className="mt-4">
            <h3 className="text-[1.4rem] pb-5 font-semibold">
              Entertainment for Everyone
            </h3>

            <p className="mt-2 text-[1.1rem] leading-5 text-gray-600">
              Suomi TV brings news, children's programs, music
              channels and much more to your home. The easy-to-use
              and reliable service offers a high-quality entertainment
              experience for the whole family.
            </p>
          </div>
        </section>

        {/* ==============================
            3. WHY CHOOSE FINNISH TV
        ============================== */}

        <section className="mt-15">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[2rem] font-bold">
              Why Choose Finnish TV
            </h2>

            <p className="mt-3 text-[1.1rem] leading-5 text-gray-600">
              Suomi OTT Player offers a smooth, affordable, and
              high-quality streaming experience that allows you
              to enjoy your favorite content effortlessly.
            </p>

            <p className="mt-2 text-ml text-gray-600">
              No commitments, no cancellation fees – you watch
              what you want, when you want.
            </p>
          </div>

          {/* Benefit Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex min-h-55  flex-col items-center rounded-lg bg-white px-4 py-5 text-center  shadow-sm transition-shadow hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex h-8 items-center justify-center text-4xl font-bold text-[#3975d1]">
                  {benefit.icon}
                </div>

                {/* Title */}
                <h3 className="mt-3 text-xl font-semibold">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xl leading-5 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}

          </div>
        </section>

      </div>
    </main>
  );
}