import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Shield, Leaf, Zap, Sparkles } from "lucide-react";
import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";

export const Hero = () => {
  const whatsappLink = "https://wa.me/5511959105205?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20hotel/condomínio/resort.";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-secondary">
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-accent rounded-full animate-particle-float opacity-60"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-white rounded-full animate-particle-float opacity-40" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-secondary rounded-full animate-particle-float opacity-50" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-particle-float opacity-70" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white rounded-full animate-particle-float opacity-50" style={{ animationDelay: "3s" }}></div>
      </div>

      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-slide-up-down" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-secondary rounded-full blur-3xl animate-spin-slow"></div>
      </div>
      
      {/* Rotating Tech Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent/30 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-white/20 rounded-full animate-rotate-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 neon-border">
              <Zap className="w-5 h-5 text-accent animate-pulse" />
              <span className="text-sm font-semibold">Líderes em Soluções em Aço Inox</span>
              <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transforme Seu
              <span className="block glow-text mt-2">Hotel, Condomínio ou Resort</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
              Lixeiras e utilitários premium em aço inox que elevam a experiência dos seus hóspedes e valorizam seu empreendimento.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:border-accent/50 transition-all hover-lift group">
                <Shield className="w-7 h-7 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold">Durabilidade</p>
                  <p className="text-sm text-white/90">Garantia estendida</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:border-accent/50 transition-all hover-lift group animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Leaf className="w-7 h-7 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold">Sustentável</p>
                  <p className="text-sm text-white/90">100% reciclável</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:border-accent/50 transition-all hover-lift group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Award className="w-7 h-7 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-bold">Design Premium</p>
                  <p className="text-sm text-white/90">Estética exclusiva</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground font-bold text-lg px-10 py-7 rounded-xl shadow-strong hover-lift group neon-border relative overflow-hidden"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                <MessageCircle className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Solicitar Orçamento Agora</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary font-bold text-lg px-10 py-7 rounded-xl backdrop-blur-md hover-lift transition-all"
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
            {/* Glowing Ring Around Image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent via-white to-secondary rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-strong neon-border">
              <img 
                src={coletaSeletivaImg} 
                alt="Conjunto de Lixeiras para Coleta Seletiva Premium em Aço Inox - Winnet Metais" 
                className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
              />
              {/* Animated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating Badge with Animation */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-white to-accent/20 text-primary p-7 rounded-2xl shadow-strong animate-float neon-border">
              <p className="text-4xl font-bold glow-text">3+</p>
              <p className="text-sm font-bold">Anos de</p>
              <p className="text-sm font-bold">Excelência</p>
            </div>
            
            {/* Orbiting Elements */}
            <div className="absolute top-10 -left-5 w-12 h-12 border-2 border-accent/50 rounded-full animate-orbit"></div>
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
