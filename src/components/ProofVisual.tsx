import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { motion } from "framer-motion";

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
      </div>
    </section>
  );
};
