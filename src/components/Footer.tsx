import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logoWinnet from "@/assets/logo-winnet.png";

export const Footer = () => {
  const whatsappLink = "https://wa.me/5511959105205";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img src={logoWinnet} alt="Winnet Metais" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed mb-6">
              Soluções premium em aço inox para ambientes corporativos de alto padrão.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-body font-semibold hover:bg-accent/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Soluções</h4>
            <ul className="space-y-2 text-primary-foreground/70 font-body text-sm">
              <li>Lixeiras Aro</li>
              <li>Coleta Seletiva</li>
              <li>Lixeiras com Pedal</li>
              <li>Utilitários Corporativos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Segmentos</h4>
            <ul className="space-y-2 text-primary-foreground/70 font-body text-sm">
              <li>Hotéis e Pousadas</li>
              <li>Condomínios</li>
              <li>Resorts e Clubes</li>
              <li>Hospitais e Clínicas</li>
              <li>Empresas e Escritórios</li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70 font-body text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-primary-foreground">(11) 95910-5205</p>
                  <p className="text-xs">Seg a Sex, 9h às 17h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="break-all">comercial@winnetmetais.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p>Av. Wallace Simonsen, 435</p>
                  <p className="text-xs">Nova Petropolis – São Bernardo do Campo – SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50 font-body">
            <p>© {currentYear} Winnet Metais. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
