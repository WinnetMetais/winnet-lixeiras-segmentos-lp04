import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const steps = [
  { num: "01", title: "Informe sua necessidade", desc: "Descreva seu ambiente, quantidade e tipo de solução desejada." },
  { num: "02", title: "Indicamos os modelos ideais", desc: "Nossa equipe analisa e recomenda os produtos mais adequados." },
  { num: "03", title: "Receba orçamento consultivo", desc: "Orçamento detalhado com especificações técnicas e prazos." },
  { num: "04", title: "Escolha a solução adequada", desc: "Sua empresa decide com segurança e informação completa." },
];

import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProcessSteps = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proc-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } });

      // Steps with line drawing effect
      gsap.fromTo(
        ".proc-step",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1,
          stagger: 0.15, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".proc-grid", start: "top 85%" },
        }
      );

      // Animate the connecting line
      gsap.fromTo(
        ".proc-line",
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.5, ease: "power2.inOut",
          scrollTrigger: { trigger: ".proc-grid", start: "top 82%" },
        }
      );

      // Number counter animation
      gsap.fromTo(
        ".proc-num",
        { scale: 0, rotateZ: -10 },
        {
          scale: 1, rotateZ: 0,
          stagger: 0.12, duration: 0.6, ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".proc-grid", start: "top 85%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="processo" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="proc-header text-sm font-body font-semibold text-accent uppercase tracking-[0.2em] mb-4 opacity-0">
            Como Funciona
          </p>
          <h2 className="proc-header text-3xl lg:text-5xl mb-6 opacity-0">
            Orçamento sem atrito, em poucos passos
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-primary-foreground/15">
            <div className="proc-line absolute inset-0 bg-accent/50 origin-left" />
          </div>

          <div className="proc-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="proc-step text-center space-y-5 opacity-0 group relative">
                <div className="proc-num w-24 h-24 mx-auto rounded-full border-2 border-primary-foreground/15 flex items-center justify-center relative group-hover:border-accent/50 transition-colors duration-500">
                  <span className="text-3xl font-display font-bold text-accent">{s.num}</span>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                </div>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="text-sm font-body text-primary-foreground/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-10 py-7 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            onClick={() => window.open("https://wa.me/5511978791851?text=Olá!%20Gostaria%20de%20iniciar%20meu%20orçamento%20com%20a%20Winnet.", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            Iniciar meu Orçamento
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
