import { useEffect, useRef, useState } from "react";
import { gsap } from "@/hooks/useGsap";

const metrics = [
  { value: 3, suffix: "+", label: "Anos de Mercado", duration: 1.5 },
  { value: 1000, suffix: "+", label: "Projetos Entregues", duration: 2 },
  { value: 98, suffix: "%", label: "Satisfação dos Clientes", duration: 1.8 },
  { value: 100, suffix: "%", label: "Aço Inox Premium", duration: 1.6 },
];

const AnimatedCounter = ({ target, suffix, duration, trigger }: { target: number; suffix: string; duration: number; trigger: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration,
      ease: "power2.out",
      onUpdate: () => setCount(Math.round(obj.val)),
    });
  }, [trigger, target, duration]);

  return (
    <span>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

export const SocialProof = () => {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".sp-item",
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.1, duration: 0.7, ease: "back.out(1.3)",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            onEnter: () => setStarted(true),
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 inox-shine pointer-events-none opacity-20" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="sp-item text-center opacity-0 group cursor-default">
              <p className="text-4xl lg:text-5xl font-display font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                <AnimatedCounter target={m.value} suffix={m.suffix} duration={m.duration} trigger={started} />
              </p>
              <div className="w-8 h-[1px] bg-primary-foreground/20 mx-auto mb-2" />
              <p className="text-sm font-body font-medium text-primary-foreground/80 tracking-wide uppercase">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
