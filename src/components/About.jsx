import Reveal from "./Reveal.jsx";
import { messages, whatsappUrl } from "../data/site.js";

export default function About() {
  return (
    <section className="about section" id="sobre" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal as="div" className="about-image-wrap">
          <img
            src="/assets/arquitetura.webp"
            alt="Referência ilustrativa de fachada com esquadrias escuras e vidro"
            width="1780"
            height="883"
            loading="lazy"
          />
          <div className="about-image-brand">
            KN
            <span>
              SERRALHERIA
              <br />
              &amp; VIDRAÇARIA
            </span>
          </div>
          <span className="about-image-caption">Referência ilustrativa</span>
        </Reveal>
        <Reveal as="div" className="about-content">
          <p className="eyebrow">03 / CONHEÇA A KN</p>
          <h2 id="about-title">
            Seu projeto.
            <br />
            Uma nova
            <br />
            <em>possibilidade.</em>
          </h2>
          <p>
            Em Iguape, a KN Serralheria e Vidraçaria trabalha com portas,
            janelas e diferentes soluções em alumínio e vidro.
          </p>
          <p>
            Seja para construir, renovar ou dar forma a uma ideia, o primeiro
            passo é uma boa conversa. Conte o que você imagina, compartilhe
            referências e consulte as possibilidades para o seu imóvel.
          </p>
          <div className="about-details">
            <span>ALUMÍNIO &amp; VIDRO</span>
            <span>PROJETOS SOB MEDIDA</span>
            <span>IGUAPE &amp; REGIÃO</span>
          </div>
          <a
            className="text-link"
            data-whatsapp="geral"
            href={whatsappUrl(messages["geral"])}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça a equipe pelo WhatsApp{" "}
            <svg className="icon">
              <use href="#i-up"></use>
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
