import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import TeamAndVentures from './components/TeamAndVentures';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#services"
        className="
          sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]
          focus:rounded-xl focus:bg-yellow-400 focus:px-5 focus:py-3
          focus:text-sm focus:font-bold focus:text-slate-950
          focus:outline-none focus:ring-4 focus:ring-yellow-600
        "
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <Testimonials />
        <TeamAndVentures />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
