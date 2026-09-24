import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Hero from "./components/Hero";
import IntroSection from "./components/introSection";
import IntroSection2 from "./components/introSection2";
import MovieCarousel from "./components/MoviesCarousel";
import SubscriptionPlans from "./components/SubscriptionPlans";
import { FinlandPages } from "./pages/FinlandPages";
import EntertainmentPage from "./components/EntertainmentPage";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Trade from "./pages/Trade";
import ChannelList from "./pages/ChannelList";
import Instructions from "./pages/Instructions";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { CartProvider } from "./context/CartContext";

function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <MovieCarousel />
      <IntroSection2 />
      <SubscriptionPlans />
      <EntertainmentPage />
    </>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2 text-gray-600">This page is under development.</p>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/channel-list" element={<ChannelList />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/finland" element={<FinlandPages />} />

          {/* Invalid URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}