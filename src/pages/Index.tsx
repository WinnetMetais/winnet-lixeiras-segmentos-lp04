import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ProductGallery } from "@/components/ProductGallery";
import { ImageGallery } from "@/components/ImageGallery";
import { UseCases } from "@/components/UseCases";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <ProductGallery />
      <ImageGallery />
      <UseCases />
      <ContactCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
