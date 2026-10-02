import Reveal from "./Reveal.jsx";
import { messages, whatsappUrl } from "../data/site.js";

export default function Services() {
  return (
    <section
      className="services section"
      id="servicos"
      aria-labelledby="services-title"
    >
      <div className="container">
        <Reveal as="div" className="section-heading">
          <div>
            <p className="eyebrow">01 / O QUE FAZEMOS</p>
            <h2 id="services-title">
              A forma certa para
              <br />
              cada <em>ideia.</em>
            </h2>
          </div>
          <p className="section-intro">
            Do primeiro desenho aos detalhes do projeto.
            <br />
            Conheça nossas soluções em ferro e vidro
            <br />e converse com a equipe sobre o que você precisa.
          </p>
        </Reveal>
        <div className="service-grid">
          <Reveal as="article" className="service-card">
            <div className="service-top">
              <svg className="service-icon icon">
                <use href="#i-door"></use>
              </svg>
              <span>01</span>
            </div>
            <h3>Portas</h3>
            <p>
              Uma entrada que faz parte da arquitetura. Consulte possibilidades
              em ferro e vidro para o seu imóvel.
            </p>
            <a
              className="text-link"
              data-whatsapp="portas"
              href={whatsappUrl(messages["portas"])}
              target="_blank"
              rel="noopener noreferrer"
            >
              Orçar minha porta{" "}
              <svg className="icon">
                <use href="#i-up"></use>
              </svg>
            </a>
          </Reveal>
          <Reveal as="article" className="service-card">
            <div className="service-top">
              <svg className="service-icon icon">
                <use href="#i-window"></use>
              </svg>
              <span>02</span>
            </div>
            <h3>Janelas</h3>
            <p>
              Luz, linhas e novas perspectivas. Converse sobre formatos e opções
              que combinam com o seu projeto.
            </p>
            <a
              className="text-link"
              data-whatsapp="janelas"
              href={whatsappUrl(messages["janelas"])}
              target="_blank"
              rel="noopener noreferrer"
            >
              Orçar minha janela{" "}
              <svg className="icon">
                <use href="#i-up"></use>
              </svg>
            </a>
          </Reveal>
          <Reveal as="article" className="service-card">
            <div className="service-top">
              <svg className="service-icon icon">
                <use href="#i-glass"></use>
              </svg>
              <span>03</span>
            </div>
            <h3>Ferro &amp; vidro</h3>
            <p>
              Cada necessidade abre uma possibilidade. Apresente sua ideia e
              consulte nossos serviços sob medida.
            </p>
            <a
              className="text-link"
              data-whatsapp="sob-medida"
              href={whatsappUrl(messages["sob-medida"])}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar sobre minha ideia{" "}
              <svg className="icon">
                <use href="#i-up"></use>
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
