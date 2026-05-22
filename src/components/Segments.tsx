import { useState, useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { Hotel, Building2, Palmtree, HeartPulse, Briefcase, Landmark, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

import lixeiraAroImg from "@/assets/lixeira-aro-redonda-grande-porte-100l.png";
import coletaSeletivaImg from "@/assets/lixeira-pedal-redonda-coleta-seletiva-grande-porte.png";
import pedalAlcaResortImg from "@/assets/pedal-alca-grande-100l-resort.png";
import coletaSeletivaInstImg from "@/assets/coleta-seletiva-instituicoes.png";
import pedalAlcaRodizioHospitalImg from "@/assets/pedal-alca-rodizio-hospital.png";
import empresasEscritorioImg from "@/assets/lixeira-empresas-escritorio.png";
import ensacadorImg from "@/assets/ensacador-guarda-chuvas-new.png";

const segments = [
  {
    id: "hoteis", icon: Hotel, label: "Hotéis",
    title: "Hotéis & Pousadas", image: lixeiraAroImg,
    description: "Eleve a experiência dos hóspedes com soluções que refletem o padrão do seu estabelecimento. Durabilidade em áreas de alto tráfego, design que valoriza cada ambiente.",
    highlights: ["Lobbies e recepções", "Banheiros e suítes", "Áreas de serviço", "Entradas e corredores"],
    objectPosition: "center 30%",
  },
  {
    id: "condominios", icon: Building2, label: "Condomínios",
    title: "Condomínios Residenciais", image: ensacadorImg,
    description: "Praticidade e organização para áreas comuns com soluções que agregam valor ao empreendimento. Ensacadores e porta guarda-chuvas que elevam a experiência dos moradores.",
    highlights: ["Hall de entrada", "Recepção", "Áreas comuns", "Espaços de convivência"],
    objectPosition: "center center",
  },
  {
    id: "resorts", icon: Palmtree, label: "Resorts",
    title: "Resorts & Clubes", image: pedalAlcaResortImg,
    description: "Resistência ao clima litorâneo com acabamento premium. Lixeiras com pedal e alça que mantêm a estética impecável em áreas externas, piscinas e espaços gourmet.",
    highlights: ["Áreas externas", "Piscinas e deck", "Espaços gourmet", "Spa e wellness"],
    objectPosition: "center 60%",
  },
  {
    id: "hospitais", icon: HeartPulse, label: "Hospitais",
    title: "Hospitais & Clínicas", image: pedalAlcaRodizioHospitalImg,
    description: "Higiene e mobilidade para ambientes que exigem máxima assepsia. Lixeiras com pedal, alça e rodízio para fácil transporte e acionamento higiênico sem contato.",
    highlights: ["Quartos e enfermarias", "Centros cirúrgicos", "Laboratórios", "Áreas de espera"],
    objectPosition: "center 50%",
  },
  {
    id: "empresas", icon: Briefcase, label: "Empresas",
    title: "Empresas & Escritórios", image: empresasEscritorioImg,
    description: "Imagem corporativa elevada com soluções discretas e funcionais. Padronização que reforça a identidade visual do ambiente de trabalho.",
    highlights: ["Recepções corporativas", "Copas e refeitórios", "Andares e corredores", "Áreas comuns"],
    objectPosition: "center center",
  },
  {
    id: "instituicoes", icon: Landmark, label: "Instituições",
    title: "Instituições & Espaços Públicos", image: coletaSeletivaInstImg,
    description: "Organização e conformidade ambiental para ambientes de grande fluxo. Coleta seletiva com identificação por cores que facilita a separação correta dos resíduos.",
    highlights: ["Universidades", "Centros culturais", "Refeitórios", "Áreas de circulação"],
    objectPosition: "center 30%",
  },
];

export const Segments = () => {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".seg-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } });
      gsap.fromTo(".seg-tabs", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 78%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

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
              <motion.button
                key={seg.id}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-body font-medium transition-all duration-400 overflow-hidden ${
                  active === i
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                    : "bg-background text-muted-foreground hover:text-foreground hover:bg-background/80 hover:shadow-md"
                }`}
              >
                <Icon className={`w-4 h-4 transition-transform duration-300 ${active === i ? "scale-110" : ""}`} />
                {seg.label}
                {active === i && (
                  <motion.span
                    layoutId="seg-active"
                    className="absolute inset-0 bg-accent rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.05, rotateY: 3 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group"
            >
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: current.objectPosition || "center center" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                <p className="text-xs font-body font-semibold text-accent uppercase tracking-wider">{current.label}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id + "-content"}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h3 className="text-2xl lg:text-4xl text-foreground">{current.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed text-lg">{current.description}</p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {current.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2 text-sm font-body text-foreground group/h cursor-default"
                  >
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 group-hover/h:scale-150 transition-transform duration-300" />
                    {h}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="pt-4"
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-7 py-5 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                  onClick={() => window.open(`https://wa.me/5511978791851?text=Olá!%20Tenho%20um%20projeto%20no%20segmento%20de%20${encodeURIComponent(current.label)}%20e%20quero%20um%20orçamento%20sob%20medida%20da%20Winnet.%20-%20LP01`, "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-1" />
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
