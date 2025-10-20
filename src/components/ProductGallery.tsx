import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Trash2, Recycle, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
// Updated product gallery - Cache refresh

// Import real product images
import coletaSeletivaImg from "@/assets/coleta-seletiva-conjunto.png";
import lixeiraPedalImg from "@/assets/lixeira-pedal-banheiro.png";
import placaSinalizacaoImg from "@/assets/placa-sinalizacao-hotel.png";
import portaGuardaChuvaImg from "@/assets/porta-guarda-chuva-hotel.png";
import bituqueiraImg from "@/assets/bituqueira-hotel-externa.png";
import lixeiraRedondaLobbyImg from "@/assets/lixeira-redonda-lobby.png";
import lixeiraQuadradaRestauranteImg from "@/assets/lixeira-quadrada-restaurante.png";
import lixeiraBasculanteLobbyImg from "@/assets/lixeira-basculante-lobby.png";
import bituqueiraParedeImg from "@/assets/bituqueira-parede-externa.png";
import bituqueiraTorreImg from "@/assets/bituqueira-torre-entrada.png";
import lixeiraPedalCozinhaImg from "@/assets/lixeira-pedal-cozinha.png";
import lixeiraPedalSpaImg from "@/assets/lixeira-pedal-spa.png";
import ensacadorGuardaChuvasImg from "@/assets/ensacador-guarda-chuvas.png";

const categories = [
  "Todos",
  "Coleta Seletiva",
  "Lixeiras com Pedal",
  "Lixeiras Inox",
  "Utilitários",
];

// Real products with real images
const products = [
  {
    id: 1,
    name: "Conjunto Coleta Seletiva Premium",
    category: "Coleta Seletiva",
    description: "Conjunto completo em aço inox AISI 430 e 304 com identificação colorida. Perfeito para áreas comuns de hotéis, condomínios e resorts.",
    image: coletaSeletivaImg,
    features: ["AISI 430 e 304", "Capacidade 60L cada", "Aros coloridos", "Identificação clara"],
  },
  {
    id: 2,
    name: "Lixeira Inox com Pedal - Banheiro",
    category: "Lixeiras com Pedal",
    description: "Design sofisticado e compacto com acionamento por pedal silencioso. Ideal para banheiros de quartos e suítes premium.",
    image: lixeiraPedalImg,
    features: ["Pedal silencioso", "Tampa hermética", "Acabamento polido", "Compacta"],
  },
  {
    id: 3,
    name: "Porta Guarda-Chuvas Inox Hotel",
    category: "Utilitários",
    description: "Elegância e funcionalidade para lobby e recepções. Design minimalista que valoriza a entrada do seu empreendimento.",
    image: portaGuardaChuvaImg,
    features: ["2 tamanhos", "Base antiderrapante", "Fácil limpeza", "Design premium"],
  },
  {
    id: 4,
    name: "Bituqueira Premium Área Externa",
    category: "Utilitários",
    description: "Solução elegante e resistente para áreas externas de hotéis e resorts. Design que valoriza a estética do empreendimento.",
    image: bituqueiraImg,
    features: ["Resistente UV", "Fácil manutenção", "Design exclusivo", "Alta durabilidade"],
  },
  {
    id: 5,
    name: "Placa Sinalização Hotel",
    category: "Utilitários",
    description: "Sinalização profissional em inox para lobby e áreas comuns. Durabilidade e elegância em cada detalhe.",
    image: placaSinalizacaoImg,
    features: ["Dobrável", "Personalização", "Design corporativo", "Resistente"],
  },
  {
    id: 6,
    name: "Lixeira Redonda Basculante",
    category: "Lixeiras Inox",
    description: "Lixeira elegante com abertura basculante para lobbies e recepções. Design atemporal que se adapta a qualquer decoração.",
    image: lixeiraRedondaLobbyImg,
    features: ["Tampa basculante", "Acabamento premium", "Fácil higienização", "Design elegante"],
  },
  {
    id: 7,
    name: "Lixeira Inox com Tampa - Banheiro",
    category: "Lixeiras Inox",
    description: "Solução higiênica e elegante em aço inox, ideal para banheiros de hotéis, spas e ambientes corporativos premium.",
    image: lixeiraQuadradaRestauranteImg,
    features: ["Design higiênico", "Tampa basculante", "Resistente à umidade", "Fácil limpeza"],
  },
  {
    id: 8,
    name: "Lixeira Basculante Clássica Hotel",
    category: "Lixeiras Inox",
    description: "Modelo premium com acabamento espelhado, ideal para lobbies de hotéis cinco estrelas e áreas VIP.",
    image: lixeiraBasculanteLobbyImg,
    features: ["Acabamento espelhado", "Tampa suave", "Grande capacidade", "Design sofisticado"],
  },
  {
    id: 9,
    name: "Bituqueira de Parede Space",
    category: "Utilitários",
    description: "Solução prática e elegante para fixação em parede. Ideal para áreas externas com espaço limitado.",
    image: bituqueiraParedeImg,
    features: ["Fixação em parede", "Design discreto", "Resistente às intempéries", "Fácil instalação"],
  },
  {
    id: 10,
    name: "Bituqueira Torre com Base",
    category: "Utilitários",
    description: "Torre elegante para entrada principal. Resistência e sofisticação para áreas de alto fluxo.",
    image: bituqueiraTorreImg,
    features: ["Design vertical", "Alta capacidade", "Acabamento premium", "Resistente"],
  },
  {
    id: 11,
    name: "Lixeira Pedal Grande com Alça",
    category: "Lixeiras com Pedal",
    description: "Grande capacidade com pedal e alça lateral. Perfeita para cozinhas profissionais, copas e áreas de serviço.",
    image: lixeiraPedalCozinhaImg,
    features: ["Grande capacidade", "Alça lateral", "Pedal robusto", "Design profissional"],
  },
  {
    id: 12,
    name: "Lixeira Pedal Spa & Wellness",
    category: "Lixeiras com Pedal",
    description: "Design elegante e higiênico para spas, saunas e wellness centers. Acabamento premium para ambientes sofisticados.",
    image: lixeiraPedalSpaImg,
    features: ["Pedal higiênico", "Acabamento espelhado", "Tampa hermética", "Design minimalista"],
  },
  {
    id: 13,
    name: "Ensacador de Guarda-Chuvas",
    category: "Utilitários",
    description: "Ensacamento para entrada de hotéis. Tecnologia e praticidade que impressionam hóspedes.",
    image: ensacadorGuardaChuvasImg,
    features: ["Grande capacidade", "Design premium", "Fácil reposição", "Tecnologia moderna"],
  },
  {
    id: 14,
    name: "Lixeira Aro Inox 50L",
    category: "Lixeiras Inox",
    description: "Versatilidade e durabilidade para qualquer ambiente. Escolha dos arquitetos para projetos corporativos.",
    image: null,
    features: ["Aro removível", "Diversos tamanhos", "Personalização", "AISI 430 e 304"],
  },
];

export const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const whatsappLink = "https://wa.me/5511959105205?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20produtos%20Winnet.";

  const filteredProducts = selectedCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => (
    <Card 
      className="group overflow-hidden hover-lift cursor-pointer border-2 hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setSelectedProduct(product)}
    >
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
        {product.image ? (
          <>
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="text-center z-10">
              <Trash2 className="w-20 h-20 text-primary/40 mx-auto mb-4" />
              <p className="text-sm text-muted-foreground font-medium px-4">
                Mais produtos disponíveis<br />sob consulta
              </p>
            </div>
          </>
        )}
        <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">
          Premium
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Recycle className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold text-primary">{product.category}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.map((feature, i) => (
            <span key={i} className="text-xs bg-muted px-3 py-1 rounded-full font-medium">
              {feature}
            </span>
          ))}
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-medium transition-all"
          onClick={(e) => {
            e.stopPropagation();
            window.open(whatsappLink, "_blank");
          }}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Solicitar Orçamento
        </Button>
      </div>
    </Card>
  );

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Nossos Produtos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Premium em
            <span className="text-gradient"> Aço Inox</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Produtos desenvolvidos especialmente para atender as necessidades do mercado corporativo
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full font-semibold transition-all ${
                selectedCategory === category 
                  ? "bg-primary hover:bg-primary/90 shadow-medium" 
                  : "hover:border-primary hover:text-primary"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-12 bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-strong text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Desenvolvemos soluções personalizadas para seu projeto
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-strong hover-lift"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Fale com Especialista
          </Button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Image */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center overflow-hidden">
                {selectedProduct.image ? (
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <Trash2 className="w-32 h-32 text-primary/40 mx-auto mb-4" />
                    <p className="text-muted-foreground">Consulte disponibilidade</p>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Recycle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{selectedProduct.category}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{selectedProduct.name}</h3>
                <p className="text-muted-foreground text-lg mb-6">{selectedProduct.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">Características:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <Button 
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 text-foreground font-semibold"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
