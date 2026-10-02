import { useEffect, useRef } from "react";
import Icon from "./Icon.jsx";
import { whatsappUrl } from "../data/site.js";

export default function ProductModal({ product, onClose, triggerRef }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (product) {
      if (!dialog.open) dialog.showModal();
      dialog.scrollTop = 0;
      document.body.classList.add("dialog-open");
    } else {
      if (dialog.open) dialog.close();
      document.body.classList.remove("dialog-open");
    }
    return () => document.body.classList.remove("dialog-open");
  }, [product]);
  function handleClose() {
    document.body.classList.remove("dialog-open");
    onClose();
    triggerRef.current?.focus({ preventScroll: true });
  }
  function closeBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialogRef.current.close();
  }
  return (
    <dialog
      ref={dialogRef}
      id="product-dialog"
      className="product-dialog"
      aria-labelledby="dialog-title"
      onClose={handleClose}
      onClick={closeBackdrop}
    >
      <button
        className="dialog-close"
        aria-label="Fechar detalhes"
        onClick={() => dialogRef.current.close()}
      >
        <Icon name="close" />
      </button>
      {product && (
        <>
          <div
            className={`dialog-image ${product.image}`}
            role="img"
            aria-label={`Referência ilustrativa: ${product.title}`}
          />
          <div className="dialog-content">
            <p className="eyebrow">{product.category}</p>
            <h2 id="dialog-title">{product.title}</h2>
            <p>{product.description}</p>
            <div className="dialog-note">
              <strong>Referência ilustrativa · sob consulta</strong>
              <p>
                Esta imagem é uma inspiração, não uma obra executada pela KN.
                Consulte modelos, materiais e disponibilidade com a equipe.
              </p>
            </div>
            <a
              id="dialog-whatsapp"
              className="button button-dark"
              href={whatsappUrl(
                `Olá! Vi a referência "${product.title}" no site da KN e gostaria de consultar opções e solicitar um orçamento.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Orçar esta referência <Icon name="up" />
            </a>
          </div>
        </>
      )}
    </dialog>
  );
}
