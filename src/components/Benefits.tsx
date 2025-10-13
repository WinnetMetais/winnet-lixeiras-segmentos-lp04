import { Building2, Hotel, Shield, Award, Users, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Hotel,
    title: "Perfeito para Hotéis",
    description: "Eleve a experiência dos seus hóspedes com soluções premium que refletem a qualidade do seu estabelecimento.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Building2,
    title: "Ideal para Condomínios",
    description: "Durabilidade e design que valorizam áreas comuns e satisfazem os moradores mais exigentes.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Sparkles,
    title: "Exclusivo para Resorts",
    description: "Produtos que resistem ao clima litorâneo e mantêm a estética impecável em ambientes externos.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Aço inox AISI 304 com tratamento anticorrosivo. Garantimos a durabilidade em qualquer ambiente.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Award,
    title: "Design Atemporal",
    description: "Acabamento premium que combina com qualquer arquitetura, do clássico ao contemporâneo.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "Atendimento B2B",
    description: "Equipe especializada em projetos corporativos com suporte completo do orçamento à instalação.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-semibold">Por que escolher a Winnet?</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Pensadas para o
            <span className="text-gradient"> Mercado Corporativo</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Mais de 15 anos fornecendo equipamentos premium para os empreendimentos mais exigentes do Brasil
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift border-2 hover:border-primary/50 transition-all duration-300 group cursor-pointer bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${benefit.bgColor} ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 p-12 bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-strong">
          <div className="text-center text-white">
            <p className="text-5xl font-bold mb-2">15+</p>
            <p className="text-white/90 font-medium">Anos de Mercado</p>
          </div>
          <div className="text-center text-white">
            <p className="text-5xl font-bold mb-2">5000+</p>
            <p className="text-white/90 font-medium">Projetos Entregues</p>
          </div>
          <div className="text-center text-white">
            <p className="text-5xl font-bold mb-2">98%</p>
            <p className="text-white/90 font-medium">Satisfação</p>
          </div>
          <div className="text-center text-white">
            <p className="text-5xl font-bold mb-2">100%</p>
            <p className="text-white/90 font-medium">Aço Inox Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};
