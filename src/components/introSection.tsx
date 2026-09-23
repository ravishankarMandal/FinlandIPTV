export default function IntroSection() {
  return (
    <section className="bg-surface-light py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Finnish TV – Modern entertainment at an affordable price.
        </h2>

        <p className="mt-8 text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Welcome to the Finland TV service! You get access to a wide
          selection of live entertainment, sports, movies and series from
          Finland and international entertainment platforms. Enjoy
          high-quality streaming with a stable connection and a modern
          viewing experience at a competitive price.
        </p>

        <p className="mt-6 text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Suomen TV works easily on multiple devices, including Smart TVs,
          tablets, and smartphones. Choose a flexible streaming package with
          monthly or annual options and start streaming digital entertainment
          quickly and effortlessly.
        </p>


        <a
      href="https://finlandiptv.com/kauppa/"
      className="inline-flex items-center justify-center gap-2
                 rounded-md bg-[#4073BD] px-5.5 py-2.5
                 text-[1.1rem] font-semibold text-white
                 transition-all duration-300
                 hover:bg-blue-800 hover:shadow-lg
                 focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:ring-offset-2 mt-5">
      {/* Shopping Cart Icon */}
      <svg
        aria-hidden="true"
        className="h-4 w-4 shrink-0 fill-current"
        viewBox="0 0 576 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z" />
      </svg>

      {/* Button Text */}
      <span>Buy a TV</span>
    </a>

      </div>

      {/* soft wave divider, matches the reference */}
      <svg
        className="max-w-content mx-auto mt-12 h-10 w-full text-white"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 30 C 200 60, 400 0, 600 30 S 1000 60, 1200 30"
          stroke="currentColor"
          strokeWidth="2"
          className="opacity-60"
        />
      </svg>
    </section>
  );
}
