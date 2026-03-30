import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const FinalCTA = () => {
  const ref = useRef<HTMLElement>(null);
  const whatsappLink = "https://wa.me/5511959105205?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20Winnet.";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fcta-content > *", { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="fcta-content max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl text-foreground opacity-0">
            Eleve o padrão dos seus ambientes com soluções em inox que unem sofisticação, funcionalidade e presença profissional.
          </h2>
          <p className="text-lg text-muted-foreground font-body opacity-0">
            Mais de 3 anos atendendo os empreendimentos mais exigentes do Brasil.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base px-10 py-6 rounded-lg opacity-0"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};
