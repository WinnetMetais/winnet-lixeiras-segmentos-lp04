import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CredibilityBar } from "@/components/CredibilityBar";
import { SocialProof } from "@/components/SocialProof";
import { PainSolution } from "@/components/PainSolution";
import { Segments } from "@/components/Segments";
import { Solutions } from "@/components/Solutions";
import { Differentials } from "@/components/Differentials";
import { ProofVisual } from "@/components/ProofVisual";
import { Testimonials } from "@/components/Testimonials";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ConversionForm } from "@/components/ConversionForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <CredibilityBar />
      <SocialProof />
      <PainSolution />
      <Segments />
      <Solutions />
      <Differentials />
      <ProofVisual />
      <Testimonials />
      <ProcessSteps />
      <ConversionForm />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
