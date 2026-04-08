import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import lixeiraAroImg from "@/assets/lixeira-aro-redonda-grande-porte-100l.png";
import coletaSeletivaImg from "@/assets/lixeira-pedal-redonda-coleta-seletiva-grande-porte.png";
import lixeiraPedalAlcaImg from "@/assets/lixeira-pedal-e-alca-grande-porte-60l.png";
import lixeiraTampaImg from "@/assets/lixeira-com-tampa-pequena.jpeg";
import bituqueiraImg from "@/assets/bituqueira-space-fixa.jpeg";
import ensacadorImg from "@/assets/ensacador-guarda-chuvas-new.png";
import placaImg from "@/assets/placa-sinalizadora-piso-molhado.png";
import portaExtintorImg from "@/assets/porta-extintor-kit-01.png";
import portaGuardaChuvaImg from "@/assets/porta-guarda-chuvas-em-uso.png";
import lixeiraPedalImg from "@/assets/lixeira-pedal-redonda-75l.png";

const galleryImages = [
  { id: 1, src: lixeiraAroImg, title: "Lixeira Aro Redonda 100L", category: "Recepção e Lobby", description: "Design premium em aço inox polido para áreas nobres de hotéis e resorts", location: "Terraço Hotel Premium" },
  { id: 2, src: coletaSeletivaImg, title: "Coleta Seletiva com Pedal", category: "Áreas Comuns", description: "Sistema completo com identificação colorida e acionamento por pedal", location: "Instituição de Ensino" },
  { id: 3, src: lixeiraPedalAlcaImg, title: "Lixeira Pedal com Alça 60L", category: "Cozinhas e Copa", description: "Grande capacidade com pedal e alça para cozinhas profissionais", location: "Lobby Corporativo" },
  { id: 4, src: lixeiraTampaImg, title: "Lixeira Inox com Tampa", category: "Banheiros", description: "Solução higiênica e elegante para banheiros de alto padrão", location: "Banheiro Hotel 5 Estrelas" },
  { id: 5, src: bituqueiraImg, title: "Bituqueira Space Fixa", category: "Áreas Externas", description: "Torre elegante em aço inox para áreas externas de shoppings e hotéis", location: "Galeria Shopping" },
  { id: 6, src: ensacadorImg, title: "Ensacador de Guarda-Chuvas", category: "Recepção e Lobby", description: "Ensacamento automático para entradas de hotéis e edifícios premium", location: "Entrada Hotel Premium" },
  { id: 7, src: placaImg, title: "Placa Sinalização Piso Molhado", category: "Corredores e Circulação", description: "Sinalização profissional em inox para áreas de alto fluxo", location: "Corredor Hotel" },
  { id: 8, src: portaExtintorImg, title: "Porta Guarda-Chuvas Duplo", category: "Recepção e Lobby", description: "Elegância e funcionalidade para lobbies e recepções corporativas", location: "Lobby Corporativo" },
  { id: 9, src: portaGuardaChuvaImg, title: "Porta Guarda-Chuvas em Uso", category: "Recepção e Lobby", description: "Design robusto com identificação visual para áreas externas", location: "Entrada Edifício" },
  { id: 10, src: lixeiraPedalImg, title: "Lixeira Pedal Redonda 75L", category: "Cozinhas e Copa", description: "Acionamento higiênico por pedal para cozinhas e áreas de serviço", location: "Cozinha Gourmet" },
];

const categories = ["Todos", "Banheiros", "Recepção e Lobby", "Áreas Comuns", "Áreas Externas", "Corredores e Circulação", "Cozinhas e Copa"];

export const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredImages = selectedCategory === "Todos"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => { setSelectedImageIndex(index); setIsZoomed(false); };
  const closeLightbox = () => { setSelectedImageIndex(null); setIsZoomed(false); };

  const goToPrevious = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
      setIsZoomed(false);
    }
  }, [selectedImageIndex, filteredImages.length]);

  const goToNext = useCallback(() => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
      setIsZoomed(false);
    }
  }, [selectedImageIndex, filteredImages.length]);

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
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
        </motion.div>

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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card
                  className="group overflow-hidden cursor-pointer border-2 hover:border-primary/50 transition-all duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-xs font-semibold text-accent mb-2">{image.category}</p>
                        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-primary" />
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                      {image.location}
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold text-primary mb-2">{image.category}</p>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{image.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Dialog open={selectedImageIndex !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 overflow-hidden bg-foreground/95 border-none">
            {selectedImageIndex !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full" onClick={closeLightbox}>
                  <X className="w-6 h-6" />
                </Button>
                <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full h-14 w-14" onClick={goToPrevious}>
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full h-14 w-14" onClick={goToNext}>
                  <ChevronRight className="w-8 h-8" />
                </Button>
                <div className={`relative w-full h-full flex items-center justify-center p-20 transition-transform duration-300 ${isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
                  <img src={filteredImages[selectedImageIndex].src} alt={filteredImages[selectedImageIndex].title} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground to-transparent p-8 text-white">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold">{filteredImages[selectedImageIndex].category}</span>
                      <span className="text-sm text-white/70">{filteredImages[selectedImageIndex].location}</span>
                      <span className="text-sm text-white/50 ml-auto">{selectedImageIndex + 1} / {filteredImages.length}</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{filteredImages[selectedImageIndex].title}</h3>
                    <p className="text-lg text-white/90">{filteredImages[selectedImageIndex].description}</p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
