import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { messages, whatsappUrl } from "../data/site.js";
export default function Location() {
  const [mapLoaded, setMapLoaded] = useState(false);
  return (
    <section
      className="location section"
      id="localizacao"
      aria-labelledby="location-title"
    >
      <div className="container">
        <Reveal as="div" className="section-heading">
          <div>
            <p className="eyebrow">05 / PERTO DO SEU PROJETO</p>
            <h2 id="location-title">
              No Vale do Ribeira.
              <br />
              De portas <em>abertas.</em>
            </h2>
          </div>
          <p className="section-intro">
            Nossa loja fica em Iguape, na Estrada do Icapara.
            <br />
            Fale com a equipe para confirmar o atendimento
            <br />
            na localização do seu projeto.
          </p>
        </Reveal>
        <Reveal as="div" className="region-list">
          <span>Iguape</span>
          <span>Ilha Comprida</span>
          <span>Jureia</span>
          <span>Icapara</span>
          <span>Rocio</span>
        </Reveal>
        <Reveal as="div" className="location-grid">
          <div className="address-card">
            <svg className="location-pin icon">
              <use href="#i-pin"></use>
            </svg>
            <p className="eyebrow">VISITE A KN</p>
            <h3>
              Vamos conversar
              <br />
              pessoalmente?
            </h3>
            <address>
              Estr. do Icapara, 269
              <br />
              Iguape – SP, 11920-000
            </address>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&amp;query=Estrada%20do%20Icapara%2C%20269%2C%20Iguape%20SP%2011920-000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Traçar rota no Google Maps{" "}
              <svg className="icon">
                <use href="#i-up"></use>
              </svg>
            </a>
            <a
              className="address-phone"
              data-whatsapp="geral"
              href={whatsappUrl(messages["geral"])}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="icon">
                <use href="#i-wa"></use>
              </svg>{" "}
              (13) 99669-9621
            </a>
          </div>
          <div className="map-area" id="map-area">
            {mapLoaded ? (
              <iframe
                src="https://maps.google.com/maps?q=Estrada%20do%20Icapara%20269%20Iguape%20SP%2011920-000&output=embed"
                title="Localização da KN Serralheria e Vidraçaria em Iguape"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <>
                <div className="map-placeholder">
                  <div className="map-crosshair"></div>
                  <div className="map-marker">
                    <span>KN</span>
                    <svg className="icon">
                      <use href="#i-pin"></use>
                    </svg>
                  </div>
                  <p>Iguape · Estrada do Icapara</p>
                  <button
                    className="button button-dark"
                    id="load-map"
                    onClick={() => setMapLoaded(true)}
                  >
                    Explorar localização{" "}
                    <svg className="icon">
                      <use href="#i-up"></use>
                    </svg>
                  </button>
                  <span>Carregar mapa do Google</span>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
