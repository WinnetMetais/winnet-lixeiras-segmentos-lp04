import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { X, Check, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
      // Header reveal
      gsap.fromTo(
        ".ps-title",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, scrollTrigger: { trigger: ref.current, start: "top 82%" } }
      );

      // Pain cards - slide from left with rotation
      gsap.fromTo(
        ".ps-pain",
        { x: -40, opacity: 0, rotateY: -5 },
        {
          x: 0, opacity: 1, rotateY: 0,
          stagger: 0.1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: ".ps-grid", start: "top 82%" },
        }
      );

      // Solution cards - slide from right with rotation
      gsap.fromTo(
        ".ps-sol",
        { x: 40, opacity: 0, rotateY: 5 },
        {
          x: 0, opacity: 1, rotateY: 0,
          stagger: 0.1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: ".ps-grid", start: "top 82%" },
        }
      );

      // Container cards entrance
      gsap.fromTo(
        ".ps-card",
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.15, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".ps-grid", start: "top 85%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="ps-title text-sm font-body font-semibold text-accent uppercase tracking-[0.2em] mb-4 opacity-0">
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
          <div className="ps-card bg-muted rounded-2xl p-8 lg:p-10 opacity-0 relative overflow-hidden group hover:shadow-lg transition-shadow duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/60 to-destructive/0" />
            <h3 className="font-display text-xl font-bold mb-6 text-foreground flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-5 h-5 text-destructive" />
              </span>
              O cenário sem a Winnet
            </h3>
            <ul className="space-y-4">
              {pains.map((pain, i) => (
                <li key={i} className="ps-pain flex items-start gap-3 opacity-0 group/item">
                  <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-destructive/20 transition-colors">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </span>
                  <span className="text-sm font-body text-muted-foreground leading-relaxed">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow between */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          </div>

          {/* Solutions */}
          <div className="ps-card bg-accent/[0.04] border border-accent/20 rounded-2xl p-8 lg:p-10 opacity-0 relative overflow-hidden group hover:shadow-lg hover:border-accent/30 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/80 to-accent/0" />
            <h3 className="font-display text-xl font-bold mb-6 text-foreground flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" />
              </span>
              Com a Winnet Metais
            </h3>
            <ul className="space-y-4">
              {solutions.map((sol, i) => (
                <li key={i} className="ps-sol flex items-start gap-3 opacity-0 group/item">
                  <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-accent/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <span className="text-sm font-body text-foreground leading-relaxed">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground font-body mb-5">Transforme seus ambientes com soluções premium em aço inox</p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            onClick={() => window.open("https://wa.me/5511978791851?text=Olá!%20Quero%20resolver%20de%20vez%20os%20problemas%20com%20lixeiras%20comuns%20e%20conhecer%20as%20soluções%20em%20inox%20da%20Winnet.%20-%20LP01", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            Fale com um Especialista
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
