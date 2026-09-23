import { useState, type FormEvent, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import heroSection from "../assets/heroSection.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      topic: "",
      message: "",
    });
  };

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative flex h-52 items-center justify-center bg-cover bg-top md:h-100"
        style={{
           backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="mb-2 text-2xl font-bold md:text-3xl">Contact us</h1>

          <p className="text-xs">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Contact Us</span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Left Column */}
          <div>
            <div className="border-l-2 border-blue-900 pl-3">
              <h2 className="text-sm font-semibold text-gray-900">
                Contact Finland TV
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-700">
                Do you have any questions about our IPTV services, subscription
                options, device setup or activation account? Contact the Finland
                TV team. We will be happy to help you find the most suitable
                solution, guide you through the setup and provide support for
                general questions about using our services.
              </p>
            </div>

            {/* Contact of the Day */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Contact of the day
              </h2>

              <div className="mt-4 flex items-center gap-3">
                {/* Live Support Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-900 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 13v-2a8 8 0 0 1 16 0v2"
                    />
                    <rect x="3" y="12" width="5" height="7" rx="2" />
                    <rect x="16" y="12" width="5" height="7" rx="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 19c-1 2-3 2-6 2"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Live-support
                  </h3>

                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="mt-1 inline-block text-sm text-gray-900 hover:text-blue-900"
                  >
                    Click here for live support
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="border-l-2 border-blue-900 pl-3">
              <h2 className="text-sm font-semibold text-gray-900">
                ONLINE STREAMING
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-700">
                Do you have a question? Fill out the contact form below and our
                Finland TV support team will get back to you as soon as possible
                with the help you need.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              {/* Name and Email */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="h-10 w-full rounded-sm border border-blue-300 bg-gray-100 px-3 text-sm outline-none transition focus:border-blue-900 focus:bg-white"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="From email"
                  required
                  className="h-10 w-full rounded-sm border border-blue-300 bg-gray-100 px-3 text-sm outline-none transition focus:border-blue-900 focus:bg-white"
                />
              </div>

              {/* Topic */}
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                placeholder="Your topic"
                required
                className="h-10 w-full rounded-sm border border-blue-300 bg-gray-100 px-3 text-sm outline-none transition focus:border-blue-900 focus:bg-white"
              />

              {/* Message */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={5}
                className="w-full resize-y rounded-sm border border-blue-300 bg-gray-100 px-3 py-2 text-sm outline-none transition focus:border-blue-900 focus:bg-white"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="cursor-pointer bg-blue-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-800"
              >
                Send a request
              </button>

              {success && (
                <p className="mt-2 text-sm font-medium text-green-700">
                  Your request has been submitted successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;