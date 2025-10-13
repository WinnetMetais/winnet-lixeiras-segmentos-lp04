import { Hotel, Building2, Palmtree, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    icon: Hotel,
    title: "Hotéis & Pousadas",
    description: "Proporcione uma experiência premium aos seus hóspedes",
    benefits: [
      "Durabilidade em áreas de alto tráfego",
      "Design que valoriza a decoração",
      "Fácil manutenção para equipe de limpeza",
      "Resistência a produtos químicos de higienização",
    ],
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Building2,
    title: "Condomínios",
    description: "Soluções que agregam valor ao seu empreendimento",
    benefits: [
      "Resistência às intempéries em áreas externas",
      "Design atemporal que não sai de moda",
      "Baixo custo de manutenção a longo prazo",
      "Satisfação dos moradores garantida",
    ],
    gradient: "from-secondary to-secondary/80",
  },
  {
    icon: Palmtree,
    title: "Resorts & Clubes",
    description: "Qualidade premium para ambientes sofisticados",
    benefits: [
      "Resistência ao clima litorâneo e umidade",
      "Acabamento premium que impressiona",
      "Grande capacidade para alto fluxo",
      "Personalização de acordo com o projeto",
    ],
    gradient: "from-accent to-accent/80",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Específicas para
            <span className="text-gradient"> Cada Segmento</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Entendemos as necessidades únicas de cada tipo de empreendimento
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover-lift border-2 hover:border-primary/50 transition-all duration-300 bg-card animate-fade-in-up overflow-hidden relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${useCase.gradient} text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-medium`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    {useCase.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Consultoria Especializada</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nossa equipe técnica está pronta para avaliar seu projeto e recomendar as melhores soluções. 
              Oferecemos suporte desde a especificação até a instalação.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary">
              <Check className="w-5 h-5" />
              <span>Atendimento personalizado B2B</span>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Projetos Customizados</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Desenvolvemos soluções sob medida para grandes projetos. Cores, tamanhos e acabamentos 
              personalizados de acordo com sua necessidade.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
              <Check className="w-5 h-5" />
              <span>Produção exclusiva para seu empreendimento</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
