import { useState } from "react";
import Icon from "./Icon.jsx";
import Reveal from "./Reveal.jsx";
import { filters, products, messages, whatsappUrl } from "../data/site.js";

export default function Catalog({ onSelect }) {
  const [activeFilter, setActiveFilter] = useState("todos");
  const visibleProducts = products.filter(
    (product) =>
      activeFilter === "todos" || product.categories.includes(activeFilter),
  );
  return (
    <section
      className="catalog section"
      id="catalogo"
      aria-labelledby="catalog-title"
    >
      <div className="container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow">02 / CATÁLOGO DE INSPIRAÇÕES</p>
            <h2 id="catalog-title">
              Possibilidades que
              <br />
              ganham <em>forma.</em>
            </h2>
          </div>
          <div className="catalog-intro">
            <p className="section-intro">
              Explore referências para começar a conversa.
              <br />
              Modelos, materiais e disponibilidade são
              <br />
              confirmados com a equipe no orçamento.
            </p>
            <span className="small-note">
              Imagens ilustrativas, não são obras da KN.
            </span>
          </div>
        </Reveal>
        <div
          className="catalog-filters"
          role="group"
          aria-label="Filtrar referências do catálogo"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter${activeFilter === filter.id ? " active" : ""}`}
              data-filter={filter.id}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              {filter.id === "todos" && (
                <span>{String(products.length).padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {visibleProducts.length}{" "}
          {visibleProducts.length === 1
            ? "referência disponível"
            : "referências disponíveis"}{" "}
          no filtro {filters.find((filter) => filter.id === activeFilter).label}
          .
        </p>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <Reveal
              key={product.id}
              as="article"
              className="product-card"
              data-product={product.id}
            >
              <button
                className={`product-image ${product.image}`}
                data-open-product={product.id}
                aria-label={`Ver detalhes da referência ${product.title}`}
                onClick={(event) => onSelect(product, event.currentTarget)}
              >
                <span className="image-label">REFERÊNCIA ILUSTRATIVA</span>
                <span className="image-open">
                  <Icon name="plus" />
                </span>
              </button>
              <div className="product-info">
                <div>
                  <p className="product-category">{product.category}</p>
                  <h3>{product.headline}</h3>
                  <p>{product.title} · sob consulta</p>
                </div>
                <button
                  className="round-button"
                  data-open-product={product.id}
                  aria-label={`Consultar ${product.title}`}
                  onClick={(event) => onSelect(product, event.currentTarget)}
                >
                  <Icon name="up" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="catalog-bottom">
          <p>Tem outra ideia em mente? Vamos conversar.</p>
          <a
            className="text-link"
            href={whatsappUrl(messages["sob-medida"])}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar um projeto sob medida <Icon name="up" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
