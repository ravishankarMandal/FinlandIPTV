import Footer from "../components/Footer";
import { faqData } from "../data/faqData";
import heroSection from "../assets/heroSection.jpg";

const FAQ = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero / Banner */}
            <section
                className="relative flex h-45 items-center justify-center bg-cover bg-top md:h-100"
                style={{
                    backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 " />

                {/* Banner Content */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-2xl font-bold md:text-3xl">
                        FAQ
                    </h1>

                    <p className="mt-2 text-sm">
                        Home / FAQ
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <main className="bg-white px-4 py-12 md:py-16">

                <div className="mx-auto w-full max-w-4xl">

                    {/* Heading */}
                    <h2 className="mb-6 text-center text-xl font-bold text-gray-800 md:text-2xl">
                        IPTV - General Questions
                    </h2>

                    {/* FAQ Accordion */}
                    <div className="overflow-hidden rounded-md border border-gray-200">

                        {faqData.map((faq, index) => (
                            <details
                                key={index}
                                className="group border-b border-gray-200 last:border-b-0"
                            >

                                {/* Question */}
                                <summary
                                    className="
                    flex cursor-pointer list-none
                    items-center justify-between gap-4
                    px-4 py-4
                    text-sm font-semibold text-[#1769aa]
                    transition-colors
                    hover:bg-gray-50
                    [&::-webkit-details-marker]:hidden
                    md:px-6 md:text-base
                  "
                                >
                                    <span>{faq.question}</span>

                                    {/* Arrow */}
                                    <span
                                        className="
    ml-3
    shrink-0
    text-gray-400
    transition-transform
    duration-300
    ease-in-out
    group-open:rotate-180
  "
                                    >
                                        ▼
                                    </span>
                                </summary>

                                {/* Answer */}
                                <div className="
    flex
    cursor-pointer
    items-center
    justify-between
    px-4
    py-4
    text-sm
    font-semibold
    text-[#1769aa]
    transition-all
    duration-300
    ease-in-out
    hover:bg-gray-50
    hover:translate-x-1
  ">
                                    {faq.answer}
                                </div>

                            </details>
                        ))}

                    </div>

                </div>

            </main>

            <Footer/>

        </div>
    );
};

export default FAQ;