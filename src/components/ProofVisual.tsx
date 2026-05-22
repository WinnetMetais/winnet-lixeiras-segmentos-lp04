import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import lixeiraAroImg from "@/assets/lixeira-aro-redonda-grande-porte-100l.png";
import lixeiraPedalImg from "@/assets/lixeira-pedal-e-alca-grande-porte-60l.png";
import portaExtintorImg from "@/assets/porta-extintor-kit-01.png";

const proofs = [
  { image: lixeiraAroImg, quote: "Design que organiza sem poluir o ambiente" },
  { image: portaExtintorImg, quote: "Soluções que reforçam a imagem profissional do espaço" },
  { image: lixeiraPedalImg, quote: "Durabilidade e apresentação para ambientes exigentes" },
];

export const ProofVisual = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".proof-item",
        { y: 80, opacity: 0, scale: 0.92 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.2, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );

      const items = ref.current?.querySelectorAll(".proof-img");
      items?.forEach((img) => {
        gsap.to(img, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest(".proof-item"),
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {proofs.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="proof-item relative group rounded-2xl overflow-hidden aspect-[3/4] opacity-0 cursor-default"
            >
              <img src={p.image} alt={p.quote} className="proof-img w-full h-[110%] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent group-hover:from-primary/95 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-8 h-[2px] bg-accent mb-4 group-hover:w-12 transition-all duration-500" />
                <p className="text-primary-foreground font-display text-xl lg:text-2xl leading-snug">"{p.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            onClick={() => window.open("https://wa.me/5511978791851?text=Olá!%20Vi%20os%20cases%20reais%20no%20site%20e%20quero%20levar%20o%20mesmo%20padrão%20Winnet%20para%20o%20meu%20espaço.%20-%20LP01", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            Quero conhecer as soluções
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
