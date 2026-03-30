import { MessageCircle, ArrowRight } from "lucide-react";
import ElegantCarousel from "@/components/ui/elegant-carousel";

import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";
import lixeiraBasculanteImg from "@/assets/lixeira-basculante-lobby.png";
import bituqueiraImg from "@/assets/bituqueira-hotel-externa.png";
import ensacadorImg from "@/assets/ensacador-guarda-chuvas.png";
import lixeiraRedondaImg from "@/assets/lixeira-redonda-lobby.png";

const heroSlides = [
  {
    title: "Soluções Corporativas em Aço Inox",
    subtitle: "Hotéis · Condomínios · Resorts",
    description:
      "Lixeiras e utilitários com acabamento premium, padronização visual e atendimento consultivo para ambientes corporativos de alto padrão.",
    accent: "#3B7DD8",
    imageUrl: coletaSeletivaImg,
  },
  {
    title: "Design que Eleva Ambientes",
    subtitle: "Lobbies · Recepções · Áreas Comuns",
    description:
      "Soluções em inox que integram estética e funcionalidade, reforçando a imagem profissional dos seus espaços.",
    accent: "#7A9E7E",
    imageUrl: lixeiraBasculanteImg,
  },
  {
    title: "Resistência para Áreas Externas",
    subtitle: "Resorts · Clubes · Entradas",
    description:
      "Produtos fabricados em aço inox AISI 430 e 304, projetados para resistir às intempéries sem perder a elegância.",
    accent: "#C4956A",
    imageUrl: bituqueiraImg,
  },
  {
    title: "Utilitários Corporativos Premium",
    subtitle: "Ensacadores · Porta Guarda-Chuvas",
    description:
      "Complementos que valorizam a recepção e entrada dos seus ambientes com funcionalidade e sofisticação.",
    accent: "#8BA7B8",
    imageUrl: ensacadorImg,
  },
  {
    title: "Padronização & Identidade Visual",
    subtitle: "Empresas · Hospitais · Instituições",
    description:
      "Crie uma identidade visual consistente em todos os andares e espaços do seu empreendimento com nossas linhas de produtos.",
    accent: "#D4A955",
    imageUrl: lixeiraRedondaImg,
  },
];

export const Hero = () => {
  const whatsappLink =
    "https://wa.me/5511959105205?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20corporativo.";

  return (
    <section className="relative bg-primary pt-16 lg:pt-20">
      <ElegantCarousel
        slides={heroSlides}
        ctaLabel="Solicitar Orçamento Corporativo"
        onCtaClick={() => window.open(whatsappLink, "_blank")}
        secondaryCtaLabel="Falar com Especialista"
        onSecondaryCtaClick={() =>
          document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" })
        }
      />
    </section>
  );
};
