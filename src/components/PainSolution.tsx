import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { X, Check } from "lucide-react";

const pains = [
  "Ambientes sem padronização visual",
  "Produtos frágeis que precisam de reposição constante",
  "Aparência visual inferior que deprecia o espaço",
  "Dificuldade em justificar a compra para a diretoria",
  "Falta de fornecedor confiável e consultivo",
];

const solutions = [
  "Estética premium que eleva a percepção do ambiente",
  "Durabilidade em aço inox — investimento de longo prazo",
  "Padronização visual que reforça a imagem corporativa",
  "Argumentos claros de custo-benefício e valorização",
  "Atendimento consultivo do orçamento à entrega",
];

export const PainSolution = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ps-title", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".ps-pain", { x: -20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", scrollTrigger: { trigger: ".ps-grid", start: "top 85%" } });
      gsap.fromTo(".ps-sol", { x: 20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", scrollTrigger: { trigger: ".ps-grid", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="ps-title text-sm font-body font-semibold text-accent uppercase tracking-wider mb-4 opacity-0">
            Por que escolher a Winnet?
          </p>
          <h2 className="ps-title text-3xl lg:text-5xl mb-6 opacity-0">
            Seu ambiente precisa de mais do que um item funcional
          </h2>
          <p className="ps-title text-lg text-muted-foreground font-body leading-relaxed opacity-0">
            Compradores corporativos buscam padronização, durabilidade e fornecedores que entendam a importância da imagem profissional do espaço.
          </p>
        </div>

        <div className="ps-grid grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pains */}
          <div className="bg-muted rounded-xl p-8 lg:p-10">
            <h3 className="font-display text-xl font-bold mb-6 text-foreground">O cenário sem a Winnet</h3>
            <ul className="space-y-4">
              {pains.map((pain, i) => (
                <li key={i} className="ps-pain flex items-start gap-3 opacity-0">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-body text-muted-foreground leading-relaxed">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-primary/[0.03] border border-accent/20 rounded-xl p-8 lg:p-10">
            <h3 className="font-display text-xl font-bold mb-6 text-foreground">Com a Winnet Metais</h3>
            <ul className="space-y-4">
              {solutions.map((sol, i) => (
                <li key={i} className="ps-sol flex items-start gap-3 opacity-0">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-body text-foreground leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
