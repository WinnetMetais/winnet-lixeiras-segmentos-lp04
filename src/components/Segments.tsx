import { useState, useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { Hotel, Building2, Palmtree, HeartPulse, Briefcase, Landmark } from "lucide-react";
import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";
import lixeiraBasculanteImg from "@/assets/lixeira-basculante-lobby.png";
import bituqueiraImg from "@/assets/bituqueira-hotel-externa.png";
import lixeiraPedalImg from "@/assets/lixeira-pedal-banheiro.png";
import lixeiraRedondaImg from "@/assets/lixeira-redonda-lobby.png";
import ensacadorImg from "@/assets/ensacador-guarda-chuvas.png";

const segments = [
  {
    id: "hoteis", icon: Hotel, label: "Hotéis",
    title: "Hotéis & Pousadas", image: lixeiraBasculanteImg,
    description: "Eleve a experiência dos hóspedes com soluções que refletem o padrão do seu estabelecimento. Durabilidade em áreas de alto tráfego, design que valoriza cada ambiente.",
    highlights: ["Lobbies e recepções", "Banheiros e suítes", "Áreas de serviço", "Entradas e corredores"],
  },
  {
    id: "condominios", icon: Building2, label: "Condomínios",
    title: "Condomínios Residenciais", image: coletaSeletivaImg,
    description: "Padronização visual e resistência que agregam valor ao empreendimento. Soluções duráveis que reduzem custos de manutenção e elevam a satisfação dos moradores.",
    highlights: ["Áreas comuns", "Coleta seletiva", "Hall de entrada", "Áreas de lazer"],
  },
  {
    id: "resorts", icon: Palmtree, label: "Resorts",
    title: "Resorts & Clubes", image: bituqueiraImg,
    description: "Resistência ao clima litorâneo com acabamento premium. Produtos que mantêm a estética impecável mesmo em áreas externas e de alto fluxo.",
    highlights: ["Áreas externas", "Piscinas e deck", "Restaurantes", "Spa e wellness"],
  },
  {
    id: "hospitais", icon: HeartPulse, label: "Hospitais",
    title: "Hospitais & Clínicas", image: lixeiraPedalImg,
    description: "Higiene e resistência para ambientes que exigem máxima assepsia. Soluções com acionamento higiênico e fácil limpeza profunda.",
    highlights: ["Quartos e enfermarias", "Recepções", "Áreas de espera", "Centros cirúrgicos"],
  },
  {
    id: "empresas", icon: Briefcase, label: "Empresas",
    title: "Empresas & Escritórios", image: lixeiraRedondaImg,
    description: "Imagem corporativa elevada com soluções discretas e funcionais. Padronização que reforça a identidade visual do ambiente de trabalho.",
    highlights: ["Recepções corporativas", "Copas e refeitórios", "Andares e corredores", "Áreas comuns"],
  },
  {
    id: "instituicoes", icon: Landmark, label: "Instituições",
    title: "Instituições & Espaços Públicos", image: ensacadorImg,
    description: "Robustez e praticidade para ambientes de grande fluxo. Soluções que combinam resistência com apresentação adequada ao espaço.",
    highlights: ["Universidades", "Centros culturais", "Espaços de eventos", "Áreas de circulação"],
  },
];

export const Segments = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".seg-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } });
      gsap.fromTo(".seg-tabs", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 78%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate image change
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { opacity: 0, scale: 1.05, rotateY: 3 }, { opacity: 1, scale: 1, rotateY: 0, duration: 0.7, ease: "power3.out" });
    }
    // Animate content change
    if (contentRef.current) {
      const children = contentRef.current.children;
      gsap.fromTo(children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: "power3.out" });
    }
  }, [active]);

  const current = segments[active];

  return (
    <section ref={ref} id="segmentos" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute top-20 left-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="seg-header text-sm font-body font-semibold text-accent uppercase tracking-[0.2em] mb-4 opacity-0">
            Segmentos Atendidos
          </p>
          <h2 className="seg-header text-3xl lg:text-5xl mb-6 opacity-0">
            Soluções sob medida para cada segmento
          </h2>
          <p className="seg-header text-lg text-muted-foreground font-body opacity-0">
            Atendemos hotéis, condomínios, resorts, hospitais, empresas e espaços corporativos que exigem organização, durabilidade e apresentação premium.
          </p>
        </div>

        {/* Tabs */}
        <div className="seg-tabs flex flex-wrap justify-center gap-2 mb-12 opacity-0">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <button
                key={seg.id}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-body font-medium transition-all duration-400 overflow-hidden ${
                  active === i
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-md"
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${active === i ? "scale-110" : ""}`} />
                {seg.label}
                {active === i && (
                  <span className="absolute inset-0 bg-accent inox-shine pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
            <img
              ref={imageRef}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent" />
            {/* Floating label */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <p className="text-xs font-body font-semibold text-accent uppercase tracking-wider">{current.label}</p>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h3 className="text-2xl lg:text-4xl text-foreground">{current.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">{current.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-body text-foreground group/h cursor-default">
                  <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover/h:scale-150 transition-transform duration-300" />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
