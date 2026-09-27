import { useState } from "react";
import { faqData } from "../data/faqData";
import heroSection from "../assets/heroSection.jpg";

const FAQ = () => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        setOpenIndexes((currentIndexes) => {
            if (currentIndexes.includes(index)) {
                return currentIndexes.filter((item) => item !== index);
            }

            return [...currentIndexes, index];
        });
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Hero / Banner */}
            <section
                className="relative flex h-45 items-center justify-center bg-cover bg-top md:h-100"
                style={{
                    backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`
                }}
            >
                <div className="absolute inset-0" />

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

                        {faqData.map((faq, index) => {
                            const isOpen = openIndexes.includes(index);

                            return (
                                <div
                                    key={index}
                                    className="border-b border-gray-200 last:border-b-0"
                                >

                                    {/* Question */}
                                    <button
                                        type="button"
                                        onClick={() => handleToggle(index)}
                                        aria-expanded={isOpen}
                                        className="
                                            flex w-full cursor-pointer
                                            items-center justify-between gap-4
                                            px-4 py-4
                                            text-left
                                            text-sm font-semibold text-[#1769aa]
                                            transition-colors
                                            hover:bg-gray-50
                                            md:px-6 md:text-base
                                        "
                                    >
                                        <span>{faq.question}</span>

                                        {/* Arrow */}
                                        <span
                                            className={`
                                                ml-3
                                                shrink-0
                                                text-gray-400
                                                transition-transform
                                                duration-300
                                                ease-in-out
                                                ${isOpen ? "rotate-180" : "rotate-0"}
                                            `}
                                        >
                                            ▼
                                        </span>
                                    </button>

                                    {/* Answer Animation */}
                                    <div
                                        className={`
                                            grid
                                            transition-[grid-template-rows]
                                            duration-500
                                            ease-in-out
                                            ${isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                            }
                                        `}
                                    >
                                        <div className="min-h-0 overflow-hidden">
                                            <div
                                                className="
                                                    px-4 pb-4
                                                    text-sm
                                                    leading-6
                                                    text-gray-600
                                                    md:px-6
                                                "
                                            >
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </main>

        </div>
    );
};

export default FAQ;