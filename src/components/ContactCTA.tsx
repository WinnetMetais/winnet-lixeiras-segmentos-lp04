import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ContactCTA = () => {
  const whatsappLink = "https://wa.me/5511978791851?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20empreendimento.";
  const phoneNumber = "(11) 97879-1851";
  const email = "comercial@winnetmetais.com.br";

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Main CTA Card */}
        <Card className="overflow-hidden border-2 border-primary/20 shadow-strong">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - CTA */}
            <div className="p-12 lg:p-16 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white">
              <div className="max-w-xl">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Pronto para Elevar a Qualidade do Seu Empreendimento?
                </h2>
                <p className="text-xl mb-8 text-white/90 leading-relaxed">
                  Receba um orçamento personalizado em até 24 horas. 
                  Nossa equipe está pronta para atender seu projeto.
                </p>

                {/* WhatsApp CTA - Primary */}
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-strong hover-lift mb-6 w-full sm:w-auto group animate-pulse-glow"
                  onClick={() => window.open(whatsappLink, "_blank")}
                >
                  <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Solicitar Orçamento Via WhatsApp
                </Button>

                {/* Trust Indicators */}
                <div className="space-y-3 mt-8 text-white/90">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Resposta em até 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Orçamento sem compromisso</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Consultoria especializada gratuita</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="p-12 lg:p-16 bg-card">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Outras Formas de Contato</h3>
              
              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group"
                     onClick={() => window.open(whatsappLink, "_blank")}>
                  <div className="bg-primary/10 text-primary p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">WhatsApp</p>
                    <p className="text-primary font-bold">{phoneNumber}</p>
                    <p className="text-sm text-muted-foreground">Atendimento rápido e direto</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Telefone</p>
                    <p className="text-secondary font-bold">{phoneNumber}</p>
                    <p className="text-sm text-muted-foreground">Seg a Sex, 9h às 17h</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                  <div className="bg-accent/10 text-accent p-3 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">E-mail</p>
                    <p className="text-accent font-bold break-all">{email}</p>
                    <p className="text-sm text-muted-foreground">Envie sua solicitação</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="bg-primary/10 text-primary p-3 rounded-lg">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Horário de Atendimento</p>
                    <p className="text-sm text-muted-foreground">
                      Segunda a Sexta: 9h às 17h
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50">
                  <div className="bg-secondary/10 text-secondary p-3 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Localização</p>
                    <p className="text-sm text-muted-foreground">
                      Av. Wallace Simonsen, 435 - Nova Petropolis<br />
                      São Bernardo do Campo - SP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Trust Bar */}
        <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-xl bg-primary/5">
            <p className="text-3xl font-bold text-primary mb-2">24h</p>
            <p className="text-sm text-muted-foreground">Resposta ao orçamento</p>
          </div>
          <div className="p-6 rounded-xl bg-secondary/5">
            <p className="text-3xl font-bold text-secondary mb-2">3+</p>
            <p className="text-sm text-muted-foreground">Anos de experiência</p>
          </div>
          <div className="p-6 rounded-xl bg-accent/5">
            <p className="text-3xl font-bold text-accent mb-2">1000+</p>
            <p className="text-sm text-muted-foreground">Projetos entregues</p>
          </div>
          <div className="p-6 rounded-xl bg-primary/5">
            <p className="text-3xl font-bold text-primary mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Aço inox premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};
