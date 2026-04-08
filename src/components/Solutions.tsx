import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import lixeiraAroImg from "@/assets/lixeira-aro-redonda-grande-porte-100l.png";
import coletaSeletivaImg from "@/assets/lixeira-pedal-redonda-coleta-seletiva-grande-porte.png";
import lixeiraPedalImg from "@/assets/lixeira-pedal-redonda-75l.png";
import lixeiraTampaImg from "@/assets/lixeira-com-tampa-pequena.jpeg";
import bituqueiraImg from "@/assets/bituqueira-space-fixa.jpeg";
import portaGuardaChuvaImg from "@/assets/porta-guarda-chuvas-em-uso.png";

const solutions = [
  { name: "Lixeiras Aro", image: lixeiraAroImg, application: "Lobbies, recepções e áreas nobres", benefitVisual: "Design clean que integra sem poluir", benefitFunc: "Tampa basculante e fácil higienização" },
  { name: "Coleta Seletiva", image: coletaSeletivaImg, application: "Áreas comuns, corredores e refeitórios", benefitVisual: "Padronização com identificação por cores", benefitFunc: "Organização e conformidade ambiental" },
  { name: "Lixeiras com Pedal", image: lixeiraPedalImg, application: "Cozinhas, copas e áreas de serviço", benefitVisual: "Acabamento profissional e discreto", benefitFunc: "Acionamento higiênico sem contato" },
  { name: "Lixeira Inox com Tampa", image: lixeiraTampaImg, application: "Banheiros, suítes e spas", benefitVisual: "Elegância compacta para ambientes íntimos", benefitFunc: "Resistente à umidade e fácil limpeza" },
  { name: "Bituqueiras", image: bituqueiraImg, application: "Entradas, áreas externas e varandas", benefitVisual: "Solução elegante sem poluição visual", benefitFunc: "Resistência às intempéries" },
  { name: "Utilitários Corporativos", image: portaGuardaChuvaImg, application: "Lobbies, entradas e recepções", benefitVisual: "Complementam a estética do ambiente", benefitFunc: "Porta guarda-chuvas e ensacadores" },
];

export const Solutions = () => {
  const ref = useRef<HTMLElement>(null);
  const whatsappLink = "https://wa.me/5511959105205?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20as%20soluções%20Winnet.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sol-header", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="solucoes" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="sol-header text-sm font-body font-semibold text-accent uppercase tracking-[0.2em] mb-4 opacity-0">
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
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0, rotateX: 5 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 17 } }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-accent/10 transition-shadow duration-500"
              style={{ perspective: "1000px" }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <motion.img
                  src={sol.image}
                  alt={sol.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-white/10 group-hover:to-transparent transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating tag */}
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-body font-semibold text-accent uppercase tracking-wider opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                  {sol.application}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">{sol.name}</h3>
                <p className="text-xs font-body font-semibold text-accent uppercase tracking-wider">{sol.application}</p>
                <div className="space-y-2 pt-1">
                  <p className="text-sm font-body text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />{sol.benefitVisual}
                  </p>
                  <p className="text-sm font-body text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />{sol.benefitFunc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-10 py-6 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 group"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Ver Catálogo Completo
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
