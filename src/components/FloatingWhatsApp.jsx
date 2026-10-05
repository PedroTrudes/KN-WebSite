export default function FloatingWhatsApp({ onOpenQuote }) {
  return (
    <button
      type="button"
      className="floating-whatsapp"
      onClick={onOpenQuote}
      aria-label="Montar orçamento para enviar pelo WhatsApp"
      aria-haspopup="dialog"
      aria-controls="quote-dialog"
      style={{ border: 0, cursor: "pointer", font: "inherit" }}
    >
      <span>Vamos conversar?</span>
      <svg className="icon" aria-hidden="true">
        <use href="#i-wa" />
      </svg>
    </button>
  );
}
