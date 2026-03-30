import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";
import lixeiraRedondaImg from "@/assets/lixeira-redonda-lobby.png";
import lixeiraPedalCozinhaImg from "@/assets/lixeira-pedal-cozinha.png";
import lixeiraPedalSpaImg from "@/assets/lixeira-pedal-spa.png";
import lixeiraQuadradaImg from "@/assets/lixeira-quadrada-restaurante.png";
import ensacadorImg from "@/assets/ensacador-guarda-chuvas.png";
import bituqueiraImg from "@/assets/bituqueira-hotel-externa.png";
import portaGuardaChuvaImg from "@/assets/porta-guarda-chuva-hotel.png";

const solutions = [
  {
    name: "Lixeiras Aro",
    image: lixeiraRedondaImg,
    application: "Lobbies, recepções e áreas nobres",
    benefitVisual: "Design clean que integra sem poluir",
    benefitFunc: "Tampa basculante e fácil higienização",
  },
  {
    name: "Coleta Seletiva",
    image: coletaSeletivaImg,
    application: "Áreas comuns, corredores e refeitórios",
    benefitVisual: "Padronização com identificação por cores",
    benefitFunc: "Organização e conformidade ambiental",
  },
  {
    name: "Lixeiras com Pedal",
    image: lixeiraPedalCozinhaImg,
    application: "Cozinhas, copas e áreas de serviço",
    benefitVisual: "Acabamento profissional e discreto",
    benefitFunc: "Acionamento higiênico sem contato",
  },
  {
    name: "Lixeira Inox com Tampa",
    image: lixeiraQuadradaImg,
    application: "Banheiros, suítes e spas",
    benefitVisual: "Elegância compacta para ambientes íntimos",
    benefitFunc: "Resistente à umidade e fácil limpeza",
  },
  {
    name: "Bituqueiras",
    image: bituqueiraImg,
    application: "Entradas, áreas externas e varandas",
    benefitVisual: "Solução elegante sem poluição visual",
    benefitFunc: "Resistência às intempéries",
  },
  {
    name: "Utilitários Corporativos",
    image: portaGuardaChuvaImg,
    application: "Lobbies, entradas e recepções",
    benefitVisual: "Complementam a estética do ambiente",
    benefitFunc: "Porta guarda-chuvas e ensacadores",
  },
];

export const Solutions = () => {
  const ref = useRef<HTMLElement>(null);
  const whatsappLink = "https://wa.me/5511959105205?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20soluções%20Winnet.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sol-header", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".sol-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out", scrollTrigger: { trigger: ".sol-grid", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="solucoes" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="sol-header text-sm font-body font-semibold text-accent uppercase tracking-wider mb-4 opacity-0">
            Linhas de Soluções
          </p>
          <h2 className="sol-header text-3xl lg:text-5xl mb-6 opacity-0">
            Cada ambiente exige uma solução adequada
          </h2>
          <p className="sol-header text-lg text-muted-foreground font-body opacity-0">
            Conheça nossas linhas de produtos desenvolvidas para diferentes aplicações corporativas
          </p>
        </div>

        <div className="sol-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="sol-card group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 opacity-0"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={sol.image}
                  alt={sol.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-lg font-bold text-foreground">{sol.name}</h3>
                <p className="text-xs font-body font-semibold text-accent uppercase tracking-wide">{sol.application}</p>
                <div className="space-y-1.5 pt-1">
                  <p className="text-sm font-body text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />{sol.benefitVisual}
                  </p>
                  <p className="text-sm font-body text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0" />{sol.benefitFunc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-8 py-6 rounded-lg"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};
