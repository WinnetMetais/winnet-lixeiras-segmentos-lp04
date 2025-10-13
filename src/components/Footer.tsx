import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const whatsappLink = "https://wa.me/5511978791851";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Winnet Metais</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Líderes em soluções premium de aço inox para hotéis, condomínios e resorts.
            </p>
            <div className="flex gap-4">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-foreground p-3 rounded-lg transition-all hover-scale"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Produtos</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#produtos" className="hover:text-accent transition-colors">Coleta Seletiva</a></li>
              <li><a href="#produtos" className="hover:text-accent transition-colors">Lixeiras com Pedal</a></li>
              <li><a href="#produtos" className="hover:text-accent transition-colors">Lixeiras Inox</a></li>
              <li><a href="#produtos" className="hover:text-accent transition-colors">Utilitários</a></li>
            </ul>
          </div>

          {/* Segments */}
          <div>
            <h4 className="font-bold text-lg mb-4">Segmentos</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-accent transition-colors">Hotéis e Pousadas</li>
              <li className="hover:text-accent transition-colors">Condomínios</li>
              <li className="hover:text-accent transition-colors">Resorts e Clubes</li>
              <li className="hover:text-accent transition-colors">Projetos Customizados</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">(11) 97879-1851</p>
                  <p className="text-xs">Seg a Sex, 9h às 18h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="break-all">atendimento@winnetmetais.com.br</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p>São Paulo - SP</p>
                  <p className="text-xs">Atendemos todo Brasil</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
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
