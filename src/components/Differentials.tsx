import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { Shield, Palette, Layers, Headphones, Settings, BarChart3 } from "lucide-react";

const diffs = [
  { icon: Shield, title: "Aço Inox Premium", desc: "Fabricação em AISI 430 e 304, com resistência superior e acabamento duradouro." },
  { icon: Palette, title: "Design Sofisticado", desc: "Linhas atemporais que harmonizam com qualquer projeto arquitetônico." },
  { icon: Layers, title: "Padronização Visual", desc: "Soluções que criam identidade visual consistente em todos os ambientes." },
  { icon: Headphones, title: "Atendimento Consultivo", desc: "Equipe especializada que entende as demandas do comprador corporativo." },
  { icon: Settings, title: "Variedade de Modelos", desc: "Diferentes capacidades, formatos e acabamentos para cada aplicação." },
  { icon: BarChart3, title: "Facilidade de Orçamento", desc: "Processo ágil e assertivo, do primeiro contato à entrega." },
];

export const Differentials = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".diff-header", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".diff-card", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", scrollTrigger: { trigger: ".diff-grid", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="diff-header text-sm font-body font-semibold text-accent uppercase tracking-wider mb-4 opacity-0">Diferenciais</p>
          <h2 className="diff-header text-3xl lg:text-5xl mb-6 opacity-0">
            Por que grandes operações escolhem a Winnet
          </h2>
        </div>

        <div className="diff-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {diffs.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={i} className="diff-card bg-background border border-border rounded-xl p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 opacity-0 group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
