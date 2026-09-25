import heroSection from "../assets/heroSection.jpg";

// Sample blog data
// Replace these titles with the actual blog content later.
const blogPosts = [
  {
    id: 1,
    title: "Navigating Simplicity and Support in IPTV Streaming",
  },
  {
    id: 2,
    title: "IPTV Tips for Beginners",
  },
  {
    id: 3,
    title: "Navigating Finland's IPTV Streaming Solutions",
  },
  {
    id: 4,
    title: "How to Choose the Right IPTV Subscription",
  },
  {
    id: 5,
    title: "The Benefits of IPTV Streaming",
  },
  {
    id: 6,
    title: "Understanding IPTV and How It Works",
  },
  {
    id: 7,
    title: "Navigating the Future of IPTV Technology",
  },
  {
    id: 8,
    title: "A Beginner's Guide to IPTV Setup",
  },
  {
    id: 9,
    title: "Choosing the Right IPTV Device",
  },
  {
    id: 10,
    title: "Smooth IPTV Streaming: Tips and Tricks",
  },
  {
    id: 11,
    title: "IPTV Subscription Options Explained",
  },
  {
    id: 12,
    title: "What to Know Before Choosing an IPTV Service",
  },
  {
    id: 13,
    title: "Finland IPTV: A Complete Beginner's Guide",
  },
  {
    id: 14,
    title: "How to Improve Your IPTV Experience",
  },
  {
    id: 15,
    title: "IPTV Streaming on Smart TVs",
  },
  {
    id: 16,
    title: "The Ultimate Guide to IPTV Devices",
  },
  {
    id: 17,
    title: "Stay Updated with the Latest IPTV Trends",
  },
  {
    id: 18,
    title: "IPTV Setup Guide for Beginners",
  },
];

const Blog = () => {
  return (
    <main className="w-full bg-white">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative flex h-50 items-center justify-center bg-cover bg-top md:h-100"
        style={{
          backgroundImage: `linear-gradient(rgba(5,25,45,0.72), rgba(5,25,45,0.72)), url(${heroSection})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold md:text-3xl">
            Blog
          </h1>

          <p className="mt-2 text-xs">
            <a href="/" className="hover:underline">
              Home
            </a>

            <span className="mx-2">/</span>

            <span>Blog</span>
          </p>
        </div>
      </section>

      {/* ================= BLOG CARDS SECTION ================= */}
      <section className=" px-5 py-10 md:py-14 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex min-h-46.25 items-center justify-center rounded-md border border-gray-200 bg-[#0b2d5c] p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-md"
              >
                <h2 className="text-ml  font-semibold leading-4 text-white">
                  {post.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;