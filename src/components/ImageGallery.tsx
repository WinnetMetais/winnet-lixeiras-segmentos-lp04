import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ZoomIn, Download, Share2 } from "lucide-react";

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

const galleryImages = [
  {
    id: 1,
    src: coletaSeletivaImg,
    title: "Conjunto Coleta Seletiva Premium",
    category: "Áreas Comuns",
    description: "Sistema completo de coleta seletiva em aço inox AISI 430 e 304 com aros coloridos para fácil identificação",
    location: "Ambiente Corporativo",
  },
  {
    id: 2,
    src: lixeiraPedalImg,
    title: "Lixeira com Pedal - Banheiro",
    category: "Banheiros",
    description: "Design compacto e sofisticado ideal para banheiros de hotéis e suítes premium",
    location: "Banheiro Hotel 5 Estrelas",
  },
  {
    id: 3,
    src: portaGuardaChuvaImg,
    title: "Porta Guarda-Chuvas Duplo",
    category: "Recepção e Lobby",
    description: "Elegância para recepções e lobbies com dois tamanhos diferentes para versatilidade",
    location: "Lobby Hotel Premium",
  },
  {
    id: 4,
    src: bituqueiraImg,
    title: "Bituqueira Premium Área Externa",
    category: "Áreas Externas",
    description: "Solução resistente e elegante para áreas externas de hotéis e resorts",
    location: "Área Externa Resort",
  },
  {
    id: 5,
    src: placaSinalizacaoImg,
    title: "Placa de Sinalização Profissional",
    category: "Corredores e Circulação",
    description: "Sinalização premium em inox para áreas de alto fluxo em hotéis e condomínios",
    location: "Corredor Hotel",
  },
  {
    id: 6,
    src: lixeiraRedondaLobbyImg,
    title: "Lixeira Redonda Basculante",
    category: "Recepção e Lobby",
    description: "Lixeira elegante com abertura basculante, perfeita para lobbies e recepções de alto padrão",
    location: "Lobby Hotel Executivo",
  },
  {
    id: 7,
    src: lixeiraQuadradaRestauranteImg,
    title: "Lixeira Inox com Tampa - Banheiro",
    category: "Banheiros",
    description: "Solução higiênica e elegante em aço inox para banheiros de hotéis e ambientes corporativos premium",
    location: "Banheiro Hotel Premium",
  },
  {
    id: 8,
    src: lixeiraBasculanteLobbyImg,
    title: "Lixeira Basculante Clássica",
    category: "Recepção e Lobby",
    description: "Modelo premium com tampa basculante e acabamento espelhado para lobbies de hotéis cinco estrelas",
    location: "Lobby Hotel 5 Estrelas",
  },
  {
    id: 9,
    src: bituqueiraParedeImg,
    title: "Bituqueira de Parede Space",
    category: "Áreas Externas",
    description: "Solução de parede para áreas externas, design discreto e funcional em aço inox",
    location: "Entrada Hotel",
  },
  {
    id: 10,
    src: bituqueiraTorreImg,
    title: "Bituqueira Torre com Base",
    category: "Áreas Externas",
    description: "Torre elegante para áreas externas, resistente e de fácil manutenção",
    location: "Entrada Principal Hotel",
  },
  {
    id: 11,
    src: lixeiraPedalCozinhaImg,
    title: "Lixeira Pedal com Alça - Cozinha",
    category: "Cozinhas e Copa",
    description: "Grande capacidade com pedal e alça lateral, perfeita para cozinhas profissionais e copas",
    location: "Cozinha Residencial Premium",
  },
  {
    id: 12,
    src: lixeiraPedalSpaImg,
    title: "Lixeira Pedal Spa & Wellness",
    category: "SPA e Wellness",
    description: "Design elegante e higiênico para áreas de spa, sauna e wellness centers",
    location: "SPA Hotel Resort",
  },
  {
    id: 13,
    src: ensacadorGuardaChuvasImg,
    title: "Ensacador de Guarda-Chuvas",
    category: "Recepção e Lobby",
    description: "Ensacamento de guarda-chuvas para entrada de hotéis premium",
    location: "Entrada Hotel Premium",
  },
];

const categories = ["Todos", "Banheiros", "Recepção e Lobby", "Áreas Comuns", "Áreas Externas", "Corredores e Circulação", "Restaurantes e Bares", "Cozinhas e Copa", "SPA e Wellness"];

export const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredImages = selectedCategory === "Todos"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setIsZoomed(false);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1
      );
      setIsZoomed(false);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1
      );
      setIsZoomed(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") closeLightbox();
  };

  // Add keyboard navigation
  useState(() => {
    window.addEventListener("keydown", handleKeyPress as any);
    return () => window.removeEventListener("keydown", handleKeyPress as any);
  });

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <ZoomIn className="w-4 h-4" />
            <span className="text-sm font-semibold">Galeria de Produtos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Veja Nossos Produtos em
            <span className="text-gradient"> Ambientes Reais</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Produtos Winnet em hotéis, condomínios e resorts de alto padrão
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group overflow-hidden cursor-pointer border-2 hover:border-primary/50 transition-all duration-300 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs font-semibold text-accent mb-2">{image.category}</p>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-5 h-5 text-primary" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                  {image.location}
                </div>
              </div>

              {/* Info Section */}
              <div className="p-5">
                <p className="text-xs font-semibold text-primary mb-2">{image.category}</p>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {image.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 overflow-hidden bg-foreground/95 border-none">
            {selectedImageIndex !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full"
                  onClick={closeLightbox}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full h-14 w-14"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full h-14 w-14"
                  onClick={goToNext}
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>

                {/* Image */}
                <div className={`relative w-full h-full flex items-center justify-center p-20 transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`}
                     onClick={() => setIsZoomed(!isZoomed)}>
                  <img
                    src={filteredImages[selectedImageIndex].src}
                    alt={filteredImages[selectedImageIndex].title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground to-transparent p-8 text-white">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold">
                        {filteredImages[selectedImageIndex].category}
                      </span>
                      <span className="text-sm text-white/70">
                        {filteredImages[selectedImageIndex].location}
                      </span>
                      <span className="text-sm text-white/50 ml-auto">
                        {selectedImageIndex + 1} / {filteredImages.length}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">
                      {filteredImages[selectedImageIndex].title}
                    </h3>
                    <p className="text-lg text-white/90">
                      {filteredImages[selectedImageIndex].description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 left-4 z-50 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full"
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <ZoomIn className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
