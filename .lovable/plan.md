

## Plano: Adicionar CTAs estrategicos em secoes sem chamada para acao

### Problema identificado
Varias secoes importantes da landing page nao possuem nenhum botao de contato ou CTA, fazendo o usuario perder o momento de interesse. As secoes sem CTA sao: **PainSolution, Segments, Differentials, ProofVisual, Testimonials e ProcessSteps**.

### Mudancas planejadas

**1. PainSolution.tsx** -- Adicionar CTA ao final da secao
- Botao WhatsApp "Fale com um Especialista" centralizado abaixo dos cards de dor/solucao
- Texto de apoio tipo "Transforme seus ambientes agora"

**2. Segments.tsx** -- Adicionar CTA dentro de cada tab de segmento
- Botao "Solicitar Orcamento" contextual dentro do conteudo de cada segmento ativo
- Link WhatsApp com mensagem pre-preenchida mencionando o segmento

**3. Differentials.tsx** -- Adicionar mini CTA ao final
- Botao secundario centralizado "Converse com nossa equipe" apos os cards de diferenciais

**4. ProofVisual.tsx** -- Adicionar CTA apos as imagens
- Botao "Quero conhecer as solucoes" linkando ao WhatsApp

**5. Testimonials.tsx** -- Adicionar CTA apos os depoimentos
- Faixa com "Junte-se aos nossos clientes satisfeitos" + botao WhatsApp

**6. ProcessSteps.tsx** -- Adicionar CTA final no ultimo passo
- Botao grande "Iniciar meu orcamento" ao final dos 4 passos, ja que o proximo passo logico e entrar em contato

### Detalhes tecnicos
- Todos os CTAs usarao o mesmo link WhatsApp padrao com mensagens contextuais
- Botoes seguirao o design system existente (Button component, variantes default/accent)
- Animacoes GSAP consistentes com as ja existentes em cada secao
- Icones MessageCircle e ArrowRight do lucide-react

