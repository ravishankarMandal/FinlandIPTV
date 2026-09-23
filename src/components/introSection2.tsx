export default function introSection2() {
  return (
    <section className="w-full bg-[#ffff] px-5 py-14 sm:px-8 ">
      <div className="mx-auto max-w-7xl px-10 text-center">

        {/* Section Heading */}
        <h2 className="mx-auto max-w-[60%] text-3xl font-bold leading-tight tracking-wide text-[#303030] sm:text-4xl">
          We have the latest movies and a wide selection of classics in our
          VOD section.
        </h2>

        {/* First Paragraph */}
        <p className="mt-5 text-base leading-7 text-[#292929] sm:text-lg sm:leading-7">
          <strong>Finland Streaming</strong> offers affordable{" "}
          <em>OTT subscriptions</em> and a wide selection of channels for all
          users. The selection includes sports, movies, news and much more
          entertainment. You can choose a flexible monthly or annual
          subscription and watch content easily on your smart TV, computer,
          tablet or mobile device.
        </p>

        {/* Second Paragraph */}
        <p className="mt-5 text-base leading-7 text-[#292929] sm:text-lg sm:leading-7">
          The service has over 10,000 channels and thousands of movies and
          series in the on-demand library. Fast setup, stable operation and
          high-quality picture quality ensure a pleasant viewing experience.
          Choose <strong>Finland OTT Streaming</strong> and enjoy entertainment
          at an affordable price.
        </p>

        {/* Buy A TV Button */}
        <div className="mt-7 flex justify-center">
          <a
            href="#buy"
            className="inline-flex items-center gap-3 rounded-md bg-[#3b70c4] px-8 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#285ba8]"
          >
            Buy A TV

            {/* Shopping Cart Icon */}
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 4h-2l-1 2v1h2l3.6 7.59-1.35 2.44A2 2 0 0010 20h9v-2h-9l1.1-2h6.45a2 2 0 001.8-1.11L21 8H6.21l-.94-2H2v0z" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}