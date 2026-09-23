import heroSection from "../assets/heroSection.jpg";
// import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <main className="w-full">

      {/* =========================
          1. HERO BANNER
      ========================== */}
      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-top sm:h-57.5"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 25, 45, 0.72), rgba(5, 25, 45, 0.72)), url(${heroSection})`,
        }}
      >
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl font-bold sm:text-4xl">
            About us
          </h1>

          {/* Breadcrumb */}
          <div className="mt-3 flex items-center justify-center gap-2 text-sm">
            <span>Home</span>
            <span>/</span>
            <span>About us</span>
          </div>
        </div>
      </section>

      {/* =========================
          2. ABOUT US CONTENT
      ========================== */}
      <section className="bg-[#f7fafc] px-5 py-10 sm:py-14">
        <div className="mx-auto w-full px-35">

          <div className="space-y-3 text-ml leading-[1.7] text-gray-800">

            <p>
              Welcome to <strong>Finland TV</strong>, a modern IPTV
              platform designed to provide users with an easy, flexible
              and high-quality way to enjoy television content broadcast
              over the internet. Our goal is to make watching your
              favorite channels, movies, series, sports broadcasts
              and on-demand content as simple as possible on a variety
              of compatible devices.
            </p>

            <p>
              <strong>Finland TV</strong> believes that modern television
              should adapt to the user's lifestyle. That's why we offer
              IPTV solutions that can be used on multiple devices, such
              as Smart TV, Android TV, smartphones, tablets, computers,
              iPhones, Apple TV and other devices that support IPTV
              applications.
            </p>

            <p>
              Our services include various IPTV packages, a wide
              selection of television channels, VOD content, as well
              as instructions for setting up your subscription and
              making basic device settings. We strive to make the
              entire experience as clear, simple and user-friendly
              as possible, from the first subscription stage to
              daily viewing.
            </p>

            <p>
              Finland TV aims to offer a flexible alternative to
              traditional television viewing. We focus on high-quality
              customer service, clear information, and support for
              users with all service-related questions before and
              after subscription.
            </p>

            <p>
              We are constantly improving the user experience,
              performance, and available instructions of our service
              to ensure that our customers can easily enjoy their
              favorite content at home, on the go, or on any
              compatible device.
            </p>

            <p>
              If you have any questions about our services, IPTV
              packages, or setup, you can contact us using the
              information below.
            </p>

          </div>

        </div>
      </section>


      {/* <Footer /> */}
    </main>
  );
}