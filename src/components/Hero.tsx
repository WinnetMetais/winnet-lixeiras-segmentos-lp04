import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { gsap } from "@/hooks/useGsap";
import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const whatsappLink =
    "https://wa.me/5511959105205?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20corporativo.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo(".hero-headline", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.3")
        .fromTo(".hero-sub", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .fromTo(".hero-proof > *", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-cta > *", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-image", { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, "-=0.6");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      {/* Inox shine line */}
      <div className="absolute inset-0 inox-shine pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 border border-primary-foreground/20 rounded-full text-sm font-body font-medium tracking-wide uppercase opacity-0">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Soluções Corporativas em Aço Inox
            </div>

            <h1 className="hero-headline text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] opacity-0">
              Soluções em Inox para Ambientes Corporativos de{" "}
              <span className="text-accent">Alto Padrão</span>
            </h1>

            <p className="hero-sub text-lg lg:text-xl text-primary-foreground/80 max-w-xl font-body leading-relaxed opacity-0">
              Lixeiras e utilitários com acabamento premium, padronização visual e atendimento consultivo para hotéis, condomínios, resorts, hospitais e empresas.
            </p>

            {/* Micro proof */}
            <div className="hero-proof flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/70 font-body">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Atendimento consultivo</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Modelos para diferentes aplicações</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full" />Soluções para ambientes profissionais</span>
            </div>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base px-8 py-6 rounded-lg group"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Solicitar Orçamento Corporativo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-body font-semibold text-base px-8 py-6 rounded-lg group"
                onClick={() => document.getElementById("segmentos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Falar com Especialista
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image relative opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={coletaSeletivaImg}
                alt="Conjunto de Coleta Seletiva Premium em Aço Inox – Winnet Metais"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-background text-foreground px-6 py-4 rounded-xl shadow-lg font-body">
              <p className="text-3xl font-bold text-accent">3+</p>
              <p className="text-xs font-semibold text-muted-foreground">Anos de Excelência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
