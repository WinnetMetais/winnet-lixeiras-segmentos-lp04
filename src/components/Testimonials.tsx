import React from 'react';
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "Ótimo atendimento, desde o início da compra até a entrega do produto, rápido e eficiente!",
    image: "https://lh3.googleusercontent.com/a/ACg8ocLTEUQL8t0hyKs4Xh0gsJrPz2FbAVTzfIFdIlurAvOjd2IwaNY=s120-c-rp-mo-br100",
    name: "Daniela Almeida",
    role: "⭐⭐⭐⭐⭐ no Google",
  },
  {
    text: "Ótima empresa. Produtos ótimos e com qualidades, e o pós venda então, um dos melhores que tive até hoje. Parabéns 👏🏻👏🏻",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJcCpp9dWT4iGFYZNKVGfQm-4PWEGsF3U1wqvpCCsJtbNTfrA=s120-c-rp-mo-br100",
    name: "Carlos Marcelino Neto",
    role: "⭐⭐⭐⭐⭐ no Google",
  },
  {
    text: "Produtos de ótima qualidade, durabilidade e ecológicos. Melhorou muito os problemas de mau cheiro proveniente das lixeiras e variados. Preço justo e empresa qualificada.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJd3VmPuXZIbxeCqfnfyhpOzi24Y9WT5NIJQIfsSnzgitKxkw=s120-c-rp-mo-br100",
    name: "Luiza Piotto",
    role: "⭐⭐⭐⭐⭐ no Google",
  },
  {
    text: "Produtos ótimos , atendimento excelente, preços muito bons, com certeza irei comprar novamente!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXjzzd30zQKPmVnGUKZMQYYrZS2Pcsd6wT0KqGzeDxb6oRywpE=s120-c-rp-mo-br100",
    name: "Natan Lopes",
    role: "⭐⭐⭐⭐⭐ no Google",
  },
  {
    text: "Uma das melhores empresas de lixeiras que já vi!! Super satisfeito!!!",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXW3J-_xROGP378Vxnc3mkgwDD00LOMvfb34uOSz8W4u7TluyLK=s120-c-rp-mo-br100",
    name: "Matheus Moreira",
    role: "⭐⭐⭐⭐⭐ no Google",
  },
  {
    text: "Ótimo preço e qualidade",
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXRsGuDmSVmi076AitTo5-qi1PIL_N0lGYyeBLlvztplfoxA3Q=s120-c-rp-mo-br100",
    name: "Rosiane Gomes",
    role: "⭐⭐⭐⭐⭐ no Google",
  },
  {
    text: "Amei, bem legal. Excelente trabalho.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocJAZK_fb6YlhPoDk89dAmLu1HQGqiKKDJTJWMSEErX3ruPmCuA=s120-c-rp-mo-br100",
    name: "Edu Bruzi",
    role: "⭐⭐⭐⭐⭐ no Google",
  },
  {
    text: "Excelente trabalho. Lixeiras incríveis e muito bonitas.",
    image: "https://lh3.googleusercontent.com/a/ACg8ocKISggy7qM6tbV8RX8O366amm-i2g2S2hG5o6twt0hbbQT8wQ=s120-c-rp-mo-br100",
    name: "Bruno Boroski Musto",
    role: "⭐⭐⭐⭐⭐ no Google",
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 8);

interface TestimonialsColumnProps {
  testimonials: typeof firstColumn;
  duration?: number;
  className?: string;
}

const TestimonialsColumn = ({ testimonials: items, duration = 10, className }: TestimonialsColumnProps) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {items.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                tabIndex={index === 1 ? -1 : 0}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="p-8 rounded-3xl border border-border shadow-lg shadow-foreground/5 max-w-xs w-full bg-card transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                <blockquote className="m-0 p-0">
                  <div className="flex justify-between items-start mb-4">
                    <svg className="w-6 h-6 opacity-80" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-normal m-0">
                    "{text}"
                  </p>
                  <footer className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      onError={(e) => { (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=" + name + "&background=random" }}
                      alt={`Avatar de ${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-border group-hover:ring-accent/30 transition-all duration-300 ease-in-out"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-foreground">
                        {name}
                      </cite>
                      <span className="text-xs leading-5 tracking-tight text-muted-foreground mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-muted py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -2 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 0.8 }
        }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-muted-foreground bg-background/50">
              Nossos Clientes Recomendam
            </div>
          </div>

          <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-foreground font-display">
            O que dizem sobre nós
          </h2>
          <p className="text-center mt-5 text-muted-foreground text-lg leading-relaxed max-w-sm font-body">
            Descubra porque a Winnet Metais tem avaliação 5 estrelas no Google e é a escolha número um em qualidade.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Avaliações em Rolagem"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={25} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-muted-foreground font-body mb-5">Junte-se aos nossos clientes satisfeitos</p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base px-8 py-6 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
            onClick={() => window.open("https://wa.me/5511978791851?text=Olá!%20Vi%20as%20avaliações%20e%20gostaria%20de%20solicitar%20um%20orçamento.", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
