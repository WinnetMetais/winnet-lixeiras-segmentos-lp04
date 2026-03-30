import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import lixeiraBasculanteImg from "@/assets/lixeira-basculante-lobby.png";
import bituqueiraTorreImg from "@/assets/bituqueira-torre-entrada.png";
import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";

const proofs = [
  { image: lixeiraBasculanteImg, quote: "Design que organiza sem poluir o ambiente" },
  { image: coletaSeletivaImg, quote: "Soluções que reforçam a imagem profissional do espaço" },
  { image: bituqueiraTorreImg, quote: "Durabilidade e apresentação para ambientes exigentes" },
];

export const ProofVisual = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".proof-item", { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 80%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {proofs.map((p, i) => (
            <div key={i} className="proof-item relative group rounded-2xl overflow-hidden aspect-[3/4] opacity-0">
              <img src={p.image} alt={p.quote} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary-foreground font-display text-xl lg:text-2xl leading-snug">"{p.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
