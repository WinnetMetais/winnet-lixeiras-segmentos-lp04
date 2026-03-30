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
    id: "hoteis",
    icon: Hotel,
    label: "Hotéis",
    title: "Hotéis & Pousadas",
    image: lixeiraBasculanteImg,
    description: "Eleve a experiência dos hóspedes com soluções que refletem o padrão do seu estabelecimento. Durabilidade em áreas de alto tráfego, design que valoriza cada ambiente — do lobby aos corredores.",
    highlights: ["Lobbies e recepções", "Banheiros e suítes", "Áreas de serviço", "Entradas e corredores"],
  },
  {
    id: "condominios",
    icon: Building2,
    label: "Condomínios",
    title: "Condomínios Residenciais",
    image: coletaSeletivaImg,
    description: "Padronização visual e resistência que agregam valor ao empreendimento. Soluções duráveis que reduzem custos de manutenção e elevam a satisfação dos moradores.",
    highlights: ["Áreas comuns", "Coleta seletiva", "Hall de entrada", "Áreas de lazer"],
  },
  {
    id: "resorts",
    icon: Palmtree,
    label: "Resorts",
    title: "Resorts & Clubes",
    image: bituqueiraImg,
    description: "Resistência ao clima litorâneo com acabamento premium. Produtos que mantêm a estética impecável mesmo em áreas externas e de alto fluxo.",
    highlights: ["Áreas externas", "Piscinas e deck", "Restaurantes", "Spa e wellness"],
  },
  {
    id: "hospitais",
    icon: HeartPulse,
    label: "Hospitais",
    title: "Hospitais & Clínicas",
    image: lixeiraPedalImg,
    description: "Higiene e resistência para ambientes que exigem máxima assepsia. Soluções com acionamento higiênico e fácil limpeza profunda.",
    highlights: ["Quartos e enfermarias", "Recepções", "Áreas de espera", "Centros cirúrgicos"],
  },
  {
    id: "empresas",
    icon: Briefcase,
    label: "Empresas",
    title: "Empresas & Escritórios",
    image: lixeiraRedondaImg,
    description: "Imagem corporativa elevada com soluções discretas e funcionais. Padronização que reforça a identidade visual do ambiente de trabalho.",
    highlights: ["Recepções corporativas", "Copas e refeitórios", "Andares e corredores", "Áreas comuns"],
  },
  {
    id: "instituicoes",
    icon: Landmark,
    label: "Instituições",
    title: "Instituições & Espaços Públicos",
    image: ensacadorImg,
    description: "Robustez e praticidade para ambientes de grande fluxo. Soluções que combinam resistência com apresentação adequada ao espaço.",
    highlights: ["Universidades", "Centros culturais", "Espaços de eventos", "Áreas de circulação"],
  },
];

export const Segments = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".seg-header", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { opacity: 0, scale: 1.02 }, { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" });
    }
  }, [active]);

  const current = segments[active];

  return (
    <section ref={ref} id="segmentos" className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="seg-header text-sm font-body font-semibold text-accent uppercase tracking-wider mb-4 opacity-0">
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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <button
                key={seg.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-body font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-background/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                {seg.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              ref={imageRef}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl lg:text-4xl text-foreground">{current.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">{current.description}</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-body text-foreground">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
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
