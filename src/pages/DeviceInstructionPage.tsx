import { Link, useParams } from "react-router-dom";
import { deviceInstructions } from "../data/deviceInstructions";
import heroSection from "../assets/heroSection.jpg";

const DeviceInstructionPage = () => {
  const { deviceSlug } = useParams();

  const device = deviceSlug
    ? deviceInstructions[deviceSlug]
    : undefined;

  // Show an error if the device does not exist
  if (!device) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">
          Device Not Found
        </h1>

        <Link
          to="/instructions"
          className="rounded-md bg-blue-900 px-6 py-3 text-white transition hover:bg-blue-800"
        >
          Back to Instructions
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}

      <section
        className="relative flex min-h-100 items-center justify-center bg-cover bg-top px-4 py-12 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`,
        }}
      >
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            {device.title}
          </h1>

          {/* ================= BREADCRUMB ================= */}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">

            <Link to="/" className="hover:underline">
              Home
            </Link>

            <span>/</span>

            <Link to="/instructions" className="hover:underline">
              Instructions
            </Link>

            <span>/</span>

            {Array.isArray(device.breadcrumb) ? (
              device.breadcrumb.map((item, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2"
                >
                  <Link
                    to={item.path}
                    className="hover:underline"
                  >
                    {item.name}
                  </Link>

                  {index < device.breadcrumb.length - 1 && (
                    <span>/</span>
                  )}
                </span>
              ))
            ) : (
              <span>{device.breadcrumb}</span>
            )}

          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <main className="mx-auto max-w-6xl px-4 py-10">

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,750px)_240px] lg:justify-center">

          {/* LEFT CONTENT */}

          <div className="min-w-0">

            {/* Device Image */}

            <div className="mb-5 flex justify-center">
              <img
                src={device.deviceImage}
                alt={device.title}
                className="max-h-87.5 w-full object-contain"
              />
            </div>

            {/* Installation Steps */}

            <h2 className="mb-5 text-2xl font-semibold">
              The following steps should be followed:
            </h2>

            <div className="space-y-8">

              {device.steps.map((step, index) => (
                <section
                  key={index}
                  id={`step-${index + 1}`}
                  className="scroll-mt-24"
                >

                  <h3 className="mb-3 text-xl font-semibold">
                    {step.title}
                  </h3>

                  {step.description.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="mb-3 text-sm leading-7 text-gray-700"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {/* Optional Bullet Points */}

                  {step.bullets && (
                    <ul className="mb-4 list-disc space-y-2 pl-6 text-sm text-gray-700">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Optional Step Image */}

                  {step.image && (
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="mt-4 w-full rounded-md object-contain"
                    />
                  )}

                </section>
              ))}

            </div>

            {/* ================= RECOMMENDED APPS ================= */}

            <section className="mt-10">

              <h2 className="mb-4 text-2xl font-semibold">
                Recommended apps
              </h2>

              <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">

                {device.recommendedApps.map((app, index) => (
                  <div
                    key={index}
                    className="group text-center"
                  >

                    <div className="mb-5 flex h-24 items-center justify-center rounded-md bg-gray-100 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                      <img
                        src={app.image}
                        alt={app.name}
                        loading="lazy"
                        className="h-full w-full object-contain"
                      />

                    </div>

                    {/* App Name */}

                    <p className="text-sm font-medium">
                      {app.name}
                    </p>

                  </div>
                ))}

              </div>

            </section>

            {/* ================= HELP SECTION ================= */}

            <section className="mt-12 border border-gray-300 p-6">

              <h2 className="mb-3 text-xl font-semibold">
                {device.helpTitle}
              </h2>

              <p className="text-sm leading-7 text-gray-700">
                {device.helpDescription}
              </p>

            </section>

            {/* ================= MORE INSTRUCTIONS ================= */}

            <section className="mt-10">

              <h2 className="mb-5 text-2xl font-semibold">
                More instructions
              </h2>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

                {device.relatedInstructions.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex min-h-20 items-center justify-center border border-gray-300 p-3 text-center text-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 hover:shadow-md"
                  >
                    {item.title}
                  </Link>
                ))}

              </div>

            </section>

            {/* ================= PREVIOUS / NEXT ================= */}

            <div className="mt-10 flex items-center justify-between border-t border-gray-300 pt-5 text-sm">

              <Link
                to="/instructions"
                className="transition-colors hover:text-blue-700"
              >
                ← Previous
              </Link>

              <Link
                to="/install-iptv/smart-tv"
                className="text-right transition-colors hover:text-blue-700"
              >
                Next →
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE - TABLE OF CONTENTS */}

          <aside className="h-fit border border-gray-300 p-4 lg:sticky lg:top-24">

            <h2 className="mb-4 border-b border-gray-300 pb-3 text-lg font-semibold">
              Table of Contents
            </h2>

            <ul className="space-y-3 text-sm">

              {device.steps.map((step, index) => (
                <li key={index}>

                  <a
                    href={`#step-${index + 1}`}
                    className="transition-colors hover:text-blue-700"
                  >
                    {step.title}
                  </a>

                </li>
              ))}

            </ul>

          </aside>

        </div>

      </main>

    </div>
  );
};

export default DeviceInstructionPage;