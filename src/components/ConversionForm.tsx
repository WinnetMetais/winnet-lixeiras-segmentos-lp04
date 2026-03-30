import { useEffect, useRef, useState } from "react";
import { gsap } from "@/hooks/useGsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";

const segmentOptions = [
  "Hotel / Pousada",
  "Condomínio",
  "Resort / Clube",
  "Hospital / Clínica",
  "Empresa / Escritório",
  "Instituição / Outro",
];

export const ConversionForm = () => {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ nome: "", empresa: "", segmento: "", cidade: "", whatsapp: "", necessidade: "", volume: "" });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".form-header", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: ref.current, start: "top 85%" } });
      gsap.fromTo(".form-card", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".form-card", start: "top 85%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Gostaria de solicitar um orçamento corporativo.\n\nNome: ${form.nome}\nEmpresa: ${form.empresa}\nSegmento: ${form.segmento}\nCidade: ${form.cidade}\nWhatsApp: ${form.whatsapp}\nNecessidade: ${form.necessidade}\nVolume estimado: ${form.volume}`
    );
    window.open(`https://wa.me/5511959105205?text=${text}`, "_blank");
  };

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section ref={ref} id="orcamento" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="form-header text-sm font-body font-semibold text-accent uppercase tracking-wider mb-4 opacity-0">
            Orçamento Corporativo
          </p>
          <h2 className="form-header text-3xl lg:text-5xl mb-6 opacity-0">
            Solicite seu orçamento consultivo
          </h2>
          <p className="form-header text-lg text-muted-foreground font-body opacity-0">
            Receba atendimento consultivo e um orçamento alinhado à necessidade do seu ambiente.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-card max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-sm space-y-6 opacity-0">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Nome *</label>
              <Input required placeholder="Seu nome" value={form.nome} onChange={(e) => update("nome", e.target.value)} className="font-body focus:ring-2 focus:ring-accent/50 transition-shadow" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Empresa *</label>
              <Input required placeholder="Nome da empresa" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} className="font-body focus:ring-2 focus:ring-accent/50 transition-shadow" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Segmento *</label>
              <select
                required
                value={form.segmento}
                onChange={(e) => update("segmento", e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-body ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 transition-shadow"
              >
                <option value="">Selecione</option>
                {segmentOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Cidade / Estado *</label>
              <Input required placeholder="Ex: São Paulo - SP" value={form.cidade} onChange={(e) => update("cidade", e.target.value)} className="font-body focus:ring-2 focus:ring-accent/50 transition-shadow" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">WhatsApp *</label>
              <Input required type="tel" placeholder="(11) 99999-9999" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className="font-body focus:ring-2 focus:ring-accent/50 transition-shadow" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-body font-medium text-foreground">Volume estimado</label>
              <Input placeholder="Ex: 50 unidades" value={form.volume} onChange={(e) => update("volume", e.target.value)} className="font-body focus:ring-2 focus:ring-accent/50 transition-shadow" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-body font-medium text-foreground">O que você precisa? *</label>
            <Textarea required placeholder="Descreva os itens, ambientes ou necessidades do seu projeto" value={form.necessidade} onChange={(e) => update("necessidade", e.target.value)} className="font-body min-h-[100px] focus:ring-2 focus:ring-accent/50 transition-shadow" />
          </div>

          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-base py-6 rounded-lg">
            <Send className="w-5 h-5 mr-2" />
            Solicitar Orçamento Corporativo
          </Button>

          <p className="text-xs text-center text-muted-foreground font-body">
            Ao enviar, você será redirecionado ao WhatsApp para finalizar o contato com nossa equipe.
          </p>
        </form>
      </div>
    </section>
  );
};
