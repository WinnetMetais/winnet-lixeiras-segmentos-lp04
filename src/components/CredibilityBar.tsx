import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { Building2, ShieldCheck, Palette, Headphones } from "lucide-react";

const items = [
  { icon: Building2, label: "Hotéis, Resorts e Condomínios" },
  { icon: ShieldCheck, label: "Aço Inox AISI 430 e 304" },
  { icon: Palette, label: "Design & Padronização" },
  { icon: Headphones, label: "Atendimento Consultivo" },
];

export const CredibilityBar = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cred-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 90%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="bg-secondary border-y border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="cred-item flex items-center gap-3 opacity-0">
                <Icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-body font-medium text-secondary-foreground">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
