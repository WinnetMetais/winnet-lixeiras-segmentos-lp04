import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, FileText } from "lucide-react";

import heroCozinha from "@/assets/hero-cozinha.png";
import heroBancada from "@/assets/hero-bancada.png";
import heroExterior from "@/assets/hero-exterior.png";
import heroCorporativo from "@/assets/hero-corporativo.png";

const whatsappLink = "https://wa.me/5511978791851?text=Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações.";

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
  {
    id: 1,
    tag: "COZINHA & ÁREAS GOURMET",
    title: "PRATICIDADE",
    subtitle: "Design inteligente em cada detalhe. O modelo de pedal que une higiene e estética.",
    image: heroCozinha,
    objectPosition: "center center",
  },
  {
    id: 2,
    tag: "BANCADAS & BANHEIROS",
    title: "ELEGÂNCIA",
    subtitle: "O acabamento impecável em aço inox que transforma qualquer superfície.",
    image: heroBancada,
    objectPosition: "center center",
  },
  {
    id: 3,
    tag: "EXTERIOR & VARANDAS",
    title: "SOFISTICAÇÃO",
    subtitle: "Resistência para durar e beleza para impressionar, mesmo em áreas abertas.",
    image: heroExterior,
    objectPosition: "center center",
  },
  {
    id: 4,
    tag: "ESPAÇOS CORPORATIVOS",
    title: "ALTO PADRÃO",
    subtitle: "A escolha certa para shoppings, galerias e ambientes corporativos de luxo.",
    image: heroCorporativo,
    objectPosition: "center center",
  },
];

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray<HTMLElement>(".winnet-slide");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${slides.length * 100}%`,
          onUpdate: (self) => {
            const progress = self.progress;
            const current = Math.min(
              Math.floor(progress * slides.length),
              slides.length - 1
            );
            setActiveSlide(current);
          },
        },
      });

      // Ken Burns effect — zoom out
      slides.forEach((slide) => {
        const img = slide.querySelector(".winnet-img-container");
        if (img) {
          gsap.fromTo(img, 
            { scale: 1.15 },
            {
              scale: 1.0,
              duration: 20,
              ease: "none",
              repeat: -1,
              yoyo: true,
            }
          );
        }
      });

      // Curtain transition
      slides.forEach((slide, i) => {
        if (i === 0) return;

        const imageContainer = slide.querySelector(".winnet-img-container");
        const textContent = slide.querySelector(".winnet-text");

        if (textContent) gsap.set(textContent, { y: 50, opacity: 0 });

        tl.to(slide, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "none",
          duration: 1,
        })
          .to(
            imageContainer,
            { y: "0%", scale: 1.05, duration: 1, ease: "none" },
            "<"
          )
          .to(
            textContent,
            { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            "-=0.3"
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#050505]"
      style={{ height: "100vh", minHeight: "600px", fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className="winnet-slide absolute inset-0 overflow-hidden"
          style={{
            zIndex: index + 1,
            ...(index !== 0
              ? { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }
              : {}),
          }}
        >
          <div
            className="winnet-img-container absolute inset-0 max-w-full"
            style={{
              transform:
                index === 0 ? "scale(1.05)" : "scale(1.1) translateY(20%)",
            }}
          >
            <img
              src={slide.image}
              alt={`Winnet - ${slide.title}`}
              className={`w-full h-full object-cover max-w-full hero-slide-img hero-slide-img-${index}`}
              style={{ objectPosition: slide.objectPosition }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(5,5,5,0.9) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.15) 100%)",
              }}
            />
          </div>

          <div
            className="winnet-text absolute z-10 text-white max-w-[700px] px-4 sm:px-8"
            style={{
              bottom: "clamp(12%, 18vw, 22%)",
              left: "5%",
              right: "15%",
              ...(index === 0
                ? { opacity: 1, transform: "translateY(0)" }
                : { opacity: 0, transform: "translateY(50px)" }),
            }}
          >
            <div className="inline-block text-[0.6rem] sm:text-xs tracking-[0.3em] uppercase mb-2 sm:mb-3 px-3 sm:px-4 py-1 sm:py-1.5 border border-white/30 rounded-full backdrop-blur-sm">
              {slide.tag}
            </div>
            <h1
              className="font-display font-light leading-[1.05] tracking-[-0.02em] mb-2 sm:mb-3"
              style={{ fontSize: "clamp(1.8rem, 5vw, 5rem)" }}
            >
              {slide.title}
            </h1>
            <p
              className="font-body font-bold text-blue-400 max-w-[500px] leading-relaxed mb-3 sm:mb-6 text-xs sm:text-base lg:text-lg"
            >
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <a
                href="#orcamento"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#orcamento")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-body font-semibold text-xs sm:text-base px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                Solicitar Orçamento
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-body font-medium text-xs sm:text-base px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute right-[4%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4 z-20">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "bg-white scale-150 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white text-[0.6rem] sm:text-xs tracking-[0.2em] opacity-60 z-20">
        <div className="w-5 h-7 sm:w-6 sm:h-9 border border-white rounded-xl relative">
          <div
            className="w-1 h-1.5 bg-white rounded-full absolute left-1/2 -translate-x-1/2"
            style={{ animation: "scrollWheel 2s infinite", top: "5px" }}
          />
        </div>
        <span>ROLE PARA EXPLORAR</span>
      </div>

      <style>{`
        @keyframes scrollWheel {
          0% { top: 5px; opacity: 1; }
          100% { top: 18px; opacity: 0; }
        }
        @media (max-width: 640px) {
          .hero-slide-img-0 { object-position: center 30% !important; }
          .hero-slide-img-1 { object-position: center 30% !important; }
          .hero-slide-img-2 { object-position: center 30% !important; }
          .hero-slide-img-3 { object-position: center 30% !important; }
        }
      `}</style>
    </div>
  );
};
