import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";

const steps = [
  { num: "01", title: "Informe sua necessidade", desc: "Descreva seu ambiente, quantidade e tipo de solução desejada." },
  { num: "02", title: "Indicamos os modelos ideais", desc: "Nossa equipe analisa e recomenda os produtos mais adequados." },
  { num: "03", title: "Receba orçamento consultivo", desc: "Orçamento detalhado com especificações técnicas e prazos." },
  { num: "04", title: "Escolha a solução adequada", desc: "Sua empresa decide com segurança e informação completa." },
];

export const ProcessSteps = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proc-header", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".proc-step", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 0.5, ease: "power3.out", scrollTrigger: { trigger: ".proc-grid", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="proc-header text-sm font-body font-semibold text-accent uppercase tracking-wider mb-4 opacity-0">
            Como Funciona
          </p>
          <h2 className="proc-header text-3xl lg:text-5xl mb-6 opacity-0">
            Orçamento sem atrito, em poucos passos
          </h2>
        </div>

        <div className="proc-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="proc-step text-center space-y-4 opacity-0">
              <span className="text-5xl font-display font-bold text-accent/60">{s.num}</span>
              <h3 className="font-display text-lg font-bold">{s.title}</h3>
              <p className="text-sm font-body text-primary-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
