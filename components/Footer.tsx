import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot-top">
        <div>
          <span className="small">WhatsApp</span>
          <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">{site.phoneDisplay}</a>
        </div>
        <div>
          <span className="small">Instagram</span>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">{site.instagramHandle}</a>
        </div>
        <div>
          <span className="small">Base</span>
          <a href="/atendimento/">Luís Eduardo Magalhães (BA)</a>
        </div>
      </div>
      <div className="logo foot-logo" aria-hidden="true" />
      <div className="endbar">
        <span className="small">© {new Date().getFullYear()} Vitor Eduardo</span>
        <a className="small" href="#conteudo">Voltar ao topo</a>
      </div>
    </footer>
  );
}
