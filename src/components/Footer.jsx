import { messages, whatsappUrl } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a
            className="brand"
            href="#inicio"
            aria-label="KN — voltar ao início"
          >
            <span className="brand-mark">
              KN<span className="brand-line"></span>
            </span>
            <span className="brand-name">
              SERRALHERIA
              <br />
              &amp; VIDRAÇARIA
            </span>
          </a>
          <div>
            <p className="footer-label">ENCONTRE A KN</p>
            <p>
              Estr. do Icapara, 269
              <br />
              Iguape – SP, 11920-000
            </p>
          </div>
          <div>
            <p className="footer-label">VAMOS CONVERSAR</p>
            <a
              data-whatsapp="geral"
              href={whatsappUrl(messages["geral"])}
              target="_blank"
              rel="noopener noreferrer"
            >
              (13) 99669-9621 ↗
            </a>
            <a
              href="https://www.facebook.com/serralheriakn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
          </div>
          <nav aria-label="Navegação do rodapé">
            <a href="#servicos">Serviços</a>
            <a href="#catalogo">Catálogo</a>
            <a href="#sobre">A KN</a>
            <a href="#localizacao">Localização</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © <span id="year">{new Date().getFullYear()}</span> KN Serralheria e
            Vidraçaria.
          </p>
          <span>Ferro. Vidro. Possibilidades.</span>
          <a href="#inicio">VOLTAR AO TOPO ↑</a>
        </div>
      </div>
    </footer>
  );
}
