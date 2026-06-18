export default function Footer() {
  return (
    <footer className="border-t border-noir/10 bg-surface py-10 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-serif italic text-xl text-noir tracking-wide">NELLIANA BEX</span>
        <p className="text-gris-sombre text-sm font-body">
          © {new Date().getFullYear()} Nelliana BEX · Tous droits réservés
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://instagram.com/n3lliana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gris-sombre hover:text-fluo transition-colors duration-200 text-sm font-body"
            aria-label="Instagram de Nelliana BEX"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com/in/nelliana-bex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gris-sombre hover:text-fluo transition-colors duration-200 text-sm font-body"
            aria-label="LinkedIn de Nelliana BEX"
          >
            LinkedIn
          </a>
          <a
            href="https://behance.net/nellianabex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gris-sombre hover:text-fluo transition-colors duration-200 text-sm font-body"
            aria-label="Behance de Nelliana BEX"
          >
            Behance
          </a>
        </div>
      </div>
    </footer>
  );
}
