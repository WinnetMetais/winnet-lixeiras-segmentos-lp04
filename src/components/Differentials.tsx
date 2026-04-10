import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { Shield, Palette, Layers, Headphones, Settings, BarChart3, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      gsap.fromTo(".diff-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } });

      gsap.fromTo(
        ".diff-card",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: { amount: 0.5, grid: [2, 3], from: "start" },
          duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ".diff-grid", start: "top 85%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="diferenciais" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="diff-header text-sm font-body font-semibold text-accent uppercase tracking-[0.2em] mb-4 opacity-0">Diferenciais</p>
          <h2 className="diff-header text-3xl lg:text-5xl mb-6 opacity-0">
            Por que grandes operações escolhem a Winnet
          </h2>
        </div>

        <div className="diff-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {diffs.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={i} className="diff-card bg-background border border-border rounded-2xl p-8 opacity-0 group cursor-default hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                {/* Hover shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent" />
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-400">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{d.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <Button
            variant="outline"
            size="lg"
            className="font-body font-semibold px-8 py-5 rounded-xl border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
            onClick={() => window.open("https://wa.me/5511959105205?text=Olá!%20Gostaria%20de%20conhecer%20melhor%20os%20diferenciais%20da%20Winnet.", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            Converse com nossa equipe
          </Button>
        </div>
      </div>
    </section>
  );
};
