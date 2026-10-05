import { messages, whatsappUrl } from "../data/site.js";

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="/assets/arquitetura.webp"
        alt="Referência ilustrativa de arquitetura contemporânea com portas e janelas em metal escuro e vidro"
        width="1780"
        height="883"
        fetchPriority="high"
      />
      <div className="hero-shade"></div>
      <div className="container hero-content">
        <p className="eyebrow hero-entrance">
          <span className="small-line"></span> ALUMÍNIO &amp; VIDRO. FEITOS PARA O
          SEU PROJETO.
        </p>
        <h1 id="hero-title" className="hero-entrance">
          Alumínio, vidro
          <br />e novas <em>possibilidades.</em>
        </h1>
        <p className="hero-description hero-entrance">
          Portas, janelas e soluções sob medida para
          <br className="desktop-break" /> transformar a sua ideia em parte do
          seu imóvel.
        </p>
        <div className="hero-actions hero-entrance">
          <a
            className="button button-light"
            data-whatsapp="geral"
            href={whatsappUrl(messages["geral"])}
            target="_blank"
            rel="noopener noreferrer"
          >
            Vamos falar do seu projeto{" "}
            <svg className="icon">
              <use href="#i-up"></use>
            </svg>
          </a>
          <a className="hero-secondary" href="#catalogo">
            Conheça as possibilidades{" "}
            <svg className="icon">
              <use href="#i-arrow"></use>
            </svg>
          </a>
        </div>
      </div>
      <div className="container hero-bottom">
        <p>
          <svg className="icon">
            <use href="#i-pin"></use>
          </svg>{" "}
          IGUAPE, SP · VALE DO RIBEIRA
        </p>
        <a href="#servicos" className="scroll-link">
          EXPLORE <span>↓</span>
        </a>
        {
          /*
          <span className="image-caption">
            Imagem conceitual · referência ilustrativa
          </span>
          */
        }
      </div>
    </section>
  );
}
