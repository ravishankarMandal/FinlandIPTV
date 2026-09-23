import { useNavigate } from "react-router-dom";

const plans = [
  {
    duration: "1 month",
    price: "€29.99",
  },
  {
    duration: "3 months",
    price: "€49.99",
  },
  {
    duration: "6 months",
    price: "€89.99",
  },
];

const features = [
  "Over 45,000 channels",
  "Movies and TV series (VOD)",
  "Excellent resolution (SD, HD, FHD, 4K)",
  "Fast delivery",
  "Free updates",
  "Excellent customer support",
];

export default function SubscriptionPlans() {
  const navigate = useNavigate();

  const handleBuyNow = (plan: (typeof plans)[0]) => {
    // Navigate to FinlandPages and pass the selected plan data
    navigate("/finland", { state: { selectedPlan: plan } });
  };

  return (
    <section className="min-h-screen w-full bg-[#193b60] px-4 py-14 text-white sm:px-6 sm:py-16">
      {/* Heading */}
      <div className="mx-auto mb-9 max-w-4xl text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Choose the right TV subscription for your needs
        </h1>

        <p className="mt-3 text-sm text-gray-200 sm:text-base">
          Find the Stream package that's right for you and enjoy top-notch
          entertainment without restrictions.
        </p>
      </div>

      {/* Subscription Cards */}
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.duration}
            className="flex flex-col items-center rounded-xl bg-[#202833] px-4 py-7 text-center"
          >
            {/* Duration */}
            <h2 className="text-xl font-semibold">{plan.duration}</h2>

            {/* TV Icon */}
            <svg
              className="mt-5 h-9 w-9 text-[#70a5f5]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="13" rx="1" />
              <path d="M8 21h8M12 17v4" />
            </svg>

            {/* Price */}
            <p className="mt-4 text-2xl font-bold">{plan.price}</p>

            {/* Features */}
            <ul className="mt-5 flex w-full flex-col items-center">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex w-full items-start justify-center gap-2 border-b border-gray-700/70 py-3 text-xs leading-5 text-gray-100 sm:text-[13px]"
                >
                  <span className="shrink-0 font-bold text-[#70a5f5]">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Buy Now Button */}
            <button
              type="button"
              onClick={() => handleBuyNow(plan)}
              className="mt-5 inline-flex items-center justify-center gap-3 rounded-sm bg-[#3b70c4] px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#285ba8] cursor-pointer"
            >
              Buy now
              <span className="text-base" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}