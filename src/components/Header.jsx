import { useEffect, useRef, useState } from "react";
import { messages, whatsappUrl } from "../data/site.js";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 25);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuRef.current?.focus();
      }
    };
    const onOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const query = window.matchMedia("(min-width: 801px)");
    const onResize = (event) => {
      if (event.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onOutside);
    query.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onOutside);
      query.removeEventListener("change", onResize);
    };
  }, [menuOpen]);
  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}
      ref={headerRef}
      id="header"
    >
      <div className="container header-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="KN Serralheria e Vidraçaria — início"
        >
          <span className="brand-mark">
            KN<span className="brand-line"></span>
          </span>
          <span className="brand-name">
            SERRALHERIA
            <br />
            &amp; VIDRAÇARIA
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#sobre">A KN</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a
          className="button button-small button-outline-light header-cta"
          data-whatsapp="geral"
          href={whatsappUrl(messages["geral"])}
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicitar orçamento{" "}
          <svg className="icon">
            <use href="#i-up"></use>
          </svg>
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          ref={menuRef}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="icon">
            <use href={menuOpen ? "#i-close" : "#i-menu"}></use>
          </svg>
        </button>
      </div>
      <nav
        className="mobile-nav"
        id="mobile-nav"
        aria-label="Navegação mobile"
        hidden={!menuOpen}
      >
        <a href="#servicos" onClick={() => setMenuOpen(false)}>
          Serviços
        </a>
        <a href="#catalogo" onClick={() => setMenuOpen(false)}>
          Catálogo
        </a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>
          A KN
        </a>
        <a href="#localizacao" onClick={() => setMenuOpen(false)}>
          Localização
        </a>
        <a
          data-whatsapp="geral"
          href={whatsappUrl(messages["geral"])}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Solicitar orçamento ↗
        </a>
      </nav>
    </header>
  );
}
