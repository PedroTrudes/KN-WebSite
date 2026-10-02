import Reveal from "./Reveal.jsx";
import { messages, whatsappUrl } from "../data/site.js";

export default function Process() {
  return (
    <section className="process section" aria-labelledby="process-title">
      <div className="container">
        <Reveal as="div" className="section-heading">
          <div>
            <p className="eyebrow">04 / DA IDEIA AO ORÇAMENTO</p>
            <h2 id="process-title">
              Começa com uma
              <br />
              <em>conversa.</em>
            </h2>
          </div>
          <a
            className="button button-outline-light"
            data-whatsapp="geral"
            href={whatsappUrl(messages["geral"])}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar sobre meu projeto{" "}
            <svg className="icon">
              <use href="#i-up"></use>
            </svg>
          </a>
        </Reveal>
        <div className="process-grid">
          <Reveal as="article" className="process-step">
            <span className="step-number">01</span>
            <h3>Conte sua ideia</h3>
            <p>
              Uma porta, uma janela ou outra solução. Diga o que você procura e
              onde será o projeto.
            </p>
          </Reveal>
          <Reveal as="article" className="process-step">
            <span className="step-number">02</span>
            <h3>Compartilhe referências</h3>
            <p>
              Envie fotos, inspirações e medidas aproximadas. Elas ajudam a
              começar a conversa.
            </p>
          </Reveal>
          <Reveal as="article" className="process-step">
            <span className="step-number">03</span>
            <h3>Consulte as possibilidades</h3>
            <p>
              A equipe confirma detalhes, materiais e condições para preparar o
              orçamento do seu projeto.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
