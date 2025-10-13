import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappLink = "https://wa.me/5511978791851?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.";

  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-strong hover-lift transition-all duration-500 group ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-foreground text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-medium">
        <span className="text-sm font-semibold">Fale conosco!</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="border-8 border-transparent border-l-foreground"></div>
        </div>
      </div>
    </a>
  );
};
