import Reveal from "./Reveal.jsx";
import { messages, whatsappUrl } from "../data/site.js";

export default function FAQ() {
  return (
    <section className="faq section" aria-labelledby="faq-title">
      <div className="container faq-grid">
        <Reveal as="div" className="">
          <p className="eyebrow">06 / ANTES DE COMEÇAR</p>
          <h2 id="faq-title">
            Sua dúvida pode
            <br />
            estar <em>aqui.</em>
          </h2>
          <p>Prefere falar com a equipe?</p>
          <a
            className="text-link"
            data-whatsapp="duvida"
            href={whatsappUrl(messages["duvida"])}
            target="_blank"
            rel="noopener noreferrer"
          >
            Chame no WhatsApp{" "}
            <svg className="icon">
              <use href="#i-up"></use>
            </svg>
          </a>
        </Reveal>
        <Reveal as="div" className="faq-list">
          <details>
            <summary>
              Como solicito um orçamento?
              <svg className="icon">
                <use href="#i-plus"></use>
              </svg>
            </summary>
            <p>
              Clique em qualquer botão de orçamento para conversar com a KN pelo
              WhatsApp. Conte o que você precisa e a localização do projeto.
            </p>
          </details>
          <details>
            <summary>
              O que devo enviar pelo WhatsApp?
              <svg className="icon">
                <use href="#i-plus"></use>
              </svg>
            </summary>
            <p>
              Fotos do local, referências do que você deseja e medidas
              aproximadas ajudam no primeiro contato. As medidas e os detalhes
              técnicos precisam ser confirmados com a equipe.
            </p>
          </details>
          <details>
            <summary>
              Posso consultar um projeto sob medida?
              <svg className="icon">
                <use href="#i-plus"></use>
              </svg>
            </summary>
            <p>
              Sim. Compartilhe sua ideia para consultar possibilidades em ferro
              e vidro. A equipe confirma a viabilidade, os materiais e as
              condições do projeto.
            </p>
          </details>
          <details>
            <summary>
              Vocês atendem a minha localização?
              <svg className="icon">
                <use href="#i-plus"></use>
              </svg>
            </summary>
            <p>
              A loja fica em Iguape. Se seu projeto está em Iguape, Ilha
              Comprida, Jureia, Icapara, Rocio ou outra localidade, informe o
              endereço pelo WhatsApp para confirmar o atendimento.
            </p>
          </details>
          <details>
            <summary>
              Os modelos do catálogo estão disponíveis?
              <svg className="icon">
                <use href="#i-plus"></use>
              </svg>
            </summary>
            <p>
              O catálogo apresenta referências ilustrativas para inspirar sua
              consulta. Modelos, materiais, preços, prazos e disponibilidade
              devem ser confirmados diretamente com a equipe da KN.
            </p>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
