export default function QuoteSection({ onOpenQuote }) {
  return (
    <section className="kn-quote-section" id="orcamento" aria-labelledby="quote-section-title">
      <div className="kn-quote-section__inner">
        <div>
          <p className="kn-quote-section__eyebrow">SEU PROJETO COMEÇA AQUI</p>
          <h2 id="quote-section-title">Monte seu orçamento.</h2>
          <p>Conte o que você precisa, adicione portas, janelas ou vidros e envie tudo em uma única mensagem para a KN.</p>
          <p className="kn-quote-section__note">Ainda não sabe as medidas? Podemos ajudar você.</p>
        </div>

        <a
            className="text-link pointer"
            onClick={onOpenQuote}
            aria-controls="quote-dialog"
            aria-haspopup="dialog"
          >
            Do que você precisa?{" "}
            <svg className="icon">
              <use href="#i-up"></use>
            </svg>
          </a>
      </div>
    </section>
  );
}
