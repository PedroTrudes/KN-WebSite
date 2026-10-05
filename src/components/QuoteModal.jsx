import { useEffect, useRef, useState } from "react";
import { whatsappUrl } from "../data/site.js";
import { buildQuoteMessage, createQuoteProduct } from "../data/quote.js";

export default function QuoteModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const nextId = useRef(2);
  const lastProductRef = useRef(null);
  const focusNewProduct = useRef(false);
  const [products, setProducts] = useState(() => [createQuoteProduct(1)]);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const trigger = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (trigger instanceof HTMLElement && trigger.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [open]);

  useEffect(() => {
    if (!focusNewProduct.current) return;
    focusNewProduct.current = false;
    const card = lastProductRef.current;
    card?.scrollIntoView({ behavior: "auto", block: "start" });
    card?.querySelector("select")?.focus({ preventScroll: true });
  }, [products.length]);

  function updateProduct(id, field, value) {
    setProducts((current) => current.map((product) => product.id === id ? { ...product, [field]: value } : product));
  }

  function addProduct() {
    focusNewProduct.current = true;
    const id = nextId.current++;
    setProducts((current) => [...current, createQuoteProduct(id)]);
    setAnnouncement("Produto adicionado. Preencha os dados do novo item.");
  }

  function removeProduct(id) {
    if (products.length <= 1) return;
    const index = products.findIndex((product) => product.id === id);
    const nextProduct = products[index + 1] || products[index - 1];
    setProducts((current) => current.filter((product) => product.id !== id));
    setAnnouncement("Produto removido do orçamento.");
    document.getElementById(`quote-category-${nextProduct.id}`)?.focus({ preventScroll: true });
  }

  function sendQuote(event) {
    event.preventDefault();
    // Executado diretamente no clique para permitir a abertura do WhatsApp.
    window.open(whatsappUrl(buildQuoteMessage(products)), "_blank", "noopener,noreferrer");
    setAnnouncement("O WhatsApp foi solicitado em outra aba. Confirme o envio por lá. Se não abriu, toque em enviar novamente.");
  }

  return (
    <dialog
      id="quote-dialog"
      ref={dialogRef}
      className="kn-quote-dialog"
      aria-labelledby="quote-dialog-title"
      aria-describedby="quote-dialog-description"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }}
    >
      <form className="kn-quote-form" onSubmit={sendQuote}>
        <header className="kn-quote-header">
          <div>
            <h2 id="quote-dialog-title">Seu orçamento</h2>
            <p id="quote-dialog-description">Adicione seus produtos e fale com a KN pelo WhatsApp.</p>
          </div>
          <button type="button" className="kn-quote-close" aria-label="Fechar formulário de orçamento" onClick={onClose}>×</button>
        </header>

        <div className="kn-quote-body">
          <p className="kn-quote-help">As medidas e a descrição são opcionais. Os campos com * são obrigatórios.</p>
          {products.map((product, index) => (
            <fieldset key={product.id} className="kn-quote-product" ref={index === products.length - 1 ? lastProductRef : null}>
              <legend>Produto {index + 1} · {product.category}</legend>
              <div className="kn-quote-product__actions">
                {products.length > 1 && <button type="button" className="kn-quote-remove" onClick={() => removeProduct(product.id)} aria-label={`Remover produto ${index + 1}`}>Remover produto</button>}
              </div>

              <div className="kn-quote-grid">
                <div className="kn-quote-field kn-quote-field--full">
                  <label htmlFor={`quote-category-${product.id}`}>Categoria *</label>
                  <select id={`quote-category-${product.id}`} value={product.category} onChange={(event) => updateProduct(product.id, "category", event.target.value)} required>
                    <option>Janela</option><option>Porta</option><option>Vidro</option>
                  </select>
                </div>

                <label className="kn-quote-check kn-quote-field--full">
                  <input type="checkbox" checked={product.unknownMeasurements} onChange={(event) => updateProduct(product.id, "unknownMeasurements", event.target.checked)} />
                  Ainda não sei as medidas
                </label>

                <div className="kn-quote-field">
                  <label htmlFor={`quote-width-${product.id}`}>Largura</label>
                  <input id={`quote-width-${product.id}`} type="text" value={product.width} onChange={(event) => updateProduct(product.id, "width", event.target.value)} placeholder="Ex.: 1,20 m ou 120 cm" maxLength={80} disabled={product.unknownMeasurements} />
                </div>
                <div className="kn-quote-field">
                  <label htmlFor={`quote-height-${product.id}`}>Altura</label>
                  <input id={`quote-height-${product.id}`} type="text" value={product.height} onChange={(event) => updateProduct(product.id, "height", event.target.value)} placeholder="Ex.: 1,00 m ou 100 cm" maxLength={80} disabled={product.unknownMeasurements} />
                </div>

                <div className="kn-quote-field kn-quote-field--full">
                  <label htmlFor={`quote-color-${product.id}`}>{product.category === "Vidro" ? "Cor / acabamento *" : "Cor do material *"}</label>
                  <select id={`quote-color-${product.id}`} value={product.color} onChange={(event) => updateProduct(product.id, "color", event.target.value)} required>
                    <option>Preto</option><option>Branco</option><option value="Outra">Outra opção — digitar</option>
                  </select>
                </div>
                {product.color === "Outra" && (
                  <div className="kn-quote-field kn-quote-field--full">
                    <label htmlFor={`quote-custom-color-${product.id}`}>{product.category === "Vidro" ? "Qual cor ou acabamento? *" : "Qual cor você deseja? *"}</label>
                    <input id={`quote-custom-color-${product.id}`} type="text" value={product.customColor} onChange={(event) => updateProduct(product.id, "customColor", event.target.value)} required pattern=".*\S.*" title="Informe uma cor ou acabamento." maxLength={100} placeholder={product.category === "Vidro" ? "Ex.: transparente, fumê, jateado" : "Ex.: cinza, bronze"} />
                  </div>
                )}

                <div className="kn-quote-field kn-quote-field--full">
                  <label htmlFor={`quote-details-${product.id}`}>Fale mais sobre o que você precisa</label>
                  <textarea id={`quote-details-${product.id}`} rows={3} value={product.details} onChange={(event) => updateProduct(product.id, "details", event.target.value)} maxLength={1500} placeholder="Ex.: Quero uma janela para a sala, com boa ventilação." />
                </div>
              </div>
            </fieldset>
          ))}

          <button type="button" className="kn-quote-button kn-quote-button--add" onClick={addProduct}>+ Adicionar outro produto</button>
          <p className="kn-quote-status" role="status" aria-live="polite">{announcement}</p>
        </div>

        <footer className="kn-quote-footer">
          <p><strong>{products.length} {products.length === 1 ? "produto" : "produtos"}</strong> no orçamento. Você confirma o envio no WhatsApp.</p>
          <button type="submit" className="kn-quote-button kn-quote-button--primary">
            <svg className="icon" aria-hidden="true"><use href="#i-wa" /></svg>
            Enviar pelo WhatsApp
          </button>
        </footer>
      </form>
    </dialog>
  );
}
