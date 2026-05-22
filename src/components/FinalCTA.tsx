import { useEffect, useRef } from "react";
import { gsap } from "@/hooks/useGsap";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export const FinalCTA = () => {
  const ref = useRef<HTMLElement>(null);
  const whatsappLink = "https://wa.me/5511978791851?text=Olá!%20Decidi%20elevar%20o%20padrão%20do%20meu%20empreendimento%20e%20quero%20falar%20agora%20com%20um%20especialista%20Winnet.%20-%20LP01";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fcta-content > *",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 82%" } }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 inox-shine pointer-events-none opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="fcta-content max-w-3xl mx-auto text-center space-y-8">
          <div className="w-16 h-[2px] bg-accent mx-auto opacity-0" />
          <h2 className="text-3xl lg:text-5xl text-foreground opacity-0">
            Eleve o padrão dos seus ambientes com soluções em inox que unem sofisticação, funcionalidade e presença profissional.
          </h2>
          <p className="text-lg text-muted-foreground font-body opacity-0">
            Mais de 3 anos atendendo os empreendimentos mais exigentes do Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base px-10 py-6 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 transition-all duration-300 group"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
