import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import logoWinnet from "@/assets/logo-winnet.png";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Como Funciona", href: "#processo" },
  { label: "Orçamento", href: "#orcamento" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const whatsappLink =
    "https://wa.me/5511959105205?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 bg-transparent"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <img
              src={logoWinnet}
              alt="Winnet Metais"
              className="h-9 lg:h-10 w-auto transition-all duration-300 brightness-0 invert"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-body font-medium rounded-lg transition-all duration-300 hover:bg-white/10 text-primary-foreground/80 hover:text-primary-foreground"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-5 rounded-lg"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              Orçamento
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-primary-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-background/98 backdrop-blur-lg border-b border-border ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-body font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3">
            <Button
              size="sm"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold rounded-lg"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
