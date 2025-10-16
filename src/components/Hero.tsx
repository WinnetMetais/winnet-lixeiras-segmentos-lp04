import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Shield, Leaf } from "lucide-react";
import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";

export const Hero = () => {
  const whatsappLink = "https://wa.me/5511959105205?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20hotel/condomínio/resort.";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Líderes em Soluções em Aço Inox</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transforme Seu
              <span className="block text-accent mt-2">Hotel, Condomínio ou Resort</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Lixeiras e utilitários premium em aço inox que elevam a experiência dos seus hóspedes e valorizam seu empreendimento.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Shield className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Durabilidade</p>
                  <p className="text-sm text-white/80">Garantia estendida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Leaf className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sustentável</p>
                  <p className="text-sm text-white/80">100% reciclável</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Award className="w-6 h-6 text-accent flex-shrink-0" />
                <div>
                  <p className="font-semibold">Design Premium</p>
                  <p className="text-sm text-white/80">Estética exclusiva</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-strong hover-lift group"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Solicitar Orçamento Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/20 text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Produtos Premium
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Entrega em todo Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Pronta entrega</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Consultoria especializada</span>
              </div>
            </div>
          </div>

          {/* Hero Image - Real Product Photo */}
          <div className="relative lg:block animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={coletaSeletivaImg} 
                alt="Conjunto de Lixeiras para Coleta Seletiva Premium em Aço Inox - Winnet Metais" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-primary p-6 rounded-2xl shadow-strong animate-pulse-glow">
              <p className="text-3xl font-bold">3+</p>
              <p className="text-sm font-medium">Anos de</p>
              <p className="text-sm font-medium">Excelência</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
