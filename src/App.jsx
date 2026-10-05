import { useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Catalog from "./components/Catalog.jsx";
import About from "./components/About.jsx";
import Process from "./components/Process.jsx";
import Location from "./components/Location.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import ProductModal from "./components/ProductModal.jsx";
import IconDefinitions from "./components/IconDefinitions.jsx";
import QuoteSection from "./components/QuoteSection.jsx";
import QuoteModal from "./components/QuoteModal.jsx";
import "./styles/quote.scss";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const triggerRef = useRef(null);

  function selectProduct(product, trigger) {
    triggerRef.current = trigger;
    setSelectedProduct(product);
  }

  function openQuote() {
    setQuoteOpen(true);
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <IconDefinitions />
      <Header />
      <main id="conteudo">
        <Hero />
        <Services />
        <Catalog onSelect={selectProduct} />
        <QuoteSection onOpenQuote={openQuote} />
        <About />
        <Process />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp onOpenQuote={openQuote} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} triggerRef={triggerRef} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
}
