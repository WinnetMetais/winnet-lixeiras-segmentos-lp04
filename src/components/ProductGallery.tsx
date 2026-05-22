import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Recycle, Sparkles } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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

const categories = ["Todos", "Coleta Seletiva", "Lixeiras com Pedal", "Lixeiras Inox", "Utilitários"];

const products = [
  { id: 1, name: "Lixeira Aro Redonda 100L", category: "Lixeiras Inox", description: "Design premium em aço inox polido, ideal para lobbies e áreas nobres de hotéis e resorts.", image: lixeiraAroImg, features: ["Aro removível", "Capacidade 100L", "Acabamento polido", "AISI 304"] },
  { id: 2, name: "Coleta Seletiva com Pedal", category: "Coleta Seletiva", description: "Sistema completo em aço inox com identificação colorida e acionamento por pedal higiênico.", image: coletaSeletivaImg, features: ["Pedal higiênico", "Identificação por cores", "3 recipientes", "Grande capacidade"] },
  { id: 3, name: "Lixeira Pedal com Alça 60L", category: "Lixeiras com Pedal", description: "Grande capacidade com pedal robusto e alça lateral. Perfeita para cozinhas e copas profissionais.", image: lixeiraPedalAlcaImg, features: ["Capacidade 60L", "Alça lateral", "Pedal robusto", "Tampa hermética"] },
  { id: 4, name: "Lixeira Inox com Tampa", category: "Lixeiras Inox", description: "Solução higiênica e elegante para banheiros de hotéis, spas e ambientes corporativos premium.", image: lixeiraTampaImg, features: ["Design compacto", "Tampa com puxador", "Resistente à umidade", "Fácil limpeza"] },
  { id: 5, name: "Bituqueira Space Fixa", category: "Utilitários", description: "Torre elegante em aço inox para áreas externas. Resistente e de fácil manutenção.", image: bituqueiraImg, features: ["Design vertical", "Alta capacidade", "Resistente UV", "Fixação ao solo"] },
  { id: 6, name: "Ensacador de Guarda-Chuvas", category: "Utilitários", description: "Ensacamento automático para entrada de hotéis premium. Tecnologia e praticidade.", image: ensacadorImg, features: ["Automático", "Design premium", "Fácil reposição", "Inox escovado"] },
  { id: 7, name: "Placa Sinalização Piso Molhado", category: "Utilitários", description: "Sinalização profissional em inox. Durabilidade e elegância em cada detalhe.", image: placaImg, features: ["Dobrável", "Bilíngue", "Design corporativo", "Resistente"] },
  { id: 8, name: "Porta Guarda-Chuvas Duplo", category: "Utilitários", description: "Elegância e funcionalidade para lobby e recepções corporativas.", image: portaExtintorImg, features: ["2 tamanhos", "Base antiderrapante", "Fácil limpeza", "Design premium"] },
  { id: 9, name: "Porta Guarda-Chuvas em Uso", category: "Utilitários", description: "Design robusto com identificação visual para recepções e lobbies.", image: portaGuardaChuvaImg, features: ["Identificação visual", "Alta capacidade", "Inox escovado", "Resistente"] },
  { id: 10, name: "Lixeira Pedal Redonda 75L", category: "Lixeiras com Pedal", description: "Acionamento higiênico por pedal para cozinhas gourmet e áreas de serviço.", image: lixeiraPedalImg, features: ["Capacidade 75L", "Pedal silencioso", "Acabamento escovado", "Tampa hermética"] },
];

export const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const whatsappLink = "https://wa.me/5511978791851?text=Olá!%20Vi%20a%20galeria%20de%20produtos%20no%20site%20e%20quero%20mais%20informações%20sobre%20os%20modelos%20Winnet.%20-%20LP01";

  const filteredProducts = selectedCategory === "Todos" ? products : products.filter(p => p.category === selectedCategory);

  return (
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Nossos Produtos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Premium em <span className="text-gradient">Aço Inox</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Produtos desenvolvidos especialmente para atender as necessidades do mercado corporativo
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full font-semibold transition-all ${selectedCategory === category ? "bg-primary hover:bg-primary/90 shadow-medium" : "hover:border-primary hover:text-primary"}`}
              onClick={() => setSelectedCategory(category)}
            >{category}</Button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                <Card className="group overflow-hidden hover:shadow-2xl hover:shadow-accent/10 cursor-pointer border-2 hover:border-primary/50 transition-all duration-300" onClick={() => setSelectedProduct(product)}>
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                    <motion.img src={product.image} alt={product.name} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-accent text-foreground px-3 py-1 rounded-full text-xs font-bold">Premium</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Recycle className="w-4 h-4 text-primary" />
                      <span className="text-xs font-semibold text-primary">{product.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((f, i) => (<span key={i} className="text-xs bg-muted px-3 py-1 rounded-full font-medium">{f}</span>))}
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-medium transition-all" onClick={(e) => { e.stopPropagation(); window.open(whatsappLink, "_blank"); }}>
                      <MessageCircle className="w-4 h-4 mr-2" />Solicitar Orçamento
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 p-12 bg-gradient-to-r from-primary to-secondary rounded-3xl shadow-strong text-center text-white">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">Não encontrou o que procura?</h3>
          <p className="text-xl mb-8 text-white/90">Desenvolvemos soluções personalizadas para seu projeto</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg px-8 py-6 rounded-xl shadow-strong" onClick={() => window.open(whatsappLink, "_blank")}>
            <MessageCircle className="w-5 h-5 mr-2" />Fale com Especialista
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl overflow-hidden">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <Recycle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{selectedProduct.category}</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{selectedProduct.name}</h3>
                <p className="text-muted-foreground text-lg mb-6">{selectedProduct.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-lg">Características:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2"><div className="w-2 h-2 bg-primary rounded-full" /><span className="text-sm">{f}</span></div>
                    ))}
                  </div>
                </div>
                <div className="mt-auto space-y-3">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-foreground font-semibold" onClick={() => window.open(whatsappLink, "_blank")}>
                    <MessageCircle className="w-5 h-5 mr-2" />Solicitar Orçamento
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" onClick={() => setSelectedProduct(null)}>Fechar</Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
