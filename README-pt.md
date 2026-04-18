# ✨ LuxeGlow - Landing Page Premium de Skincare com IA

<div align="center">

**[English](README.md) | [Português](README-pt.md)**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.26-00D4FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Licença](https://img.shields.io/badge/Licença-MIT-green?style=flat-square)](LICENSE)

**Uma landing page sofisticada e pronta para produção de skincare com IA**

📱 **100% Responsivo** | 🤖 **Alimentado por IA** | 🌍 **Multilíngue** | ✨ **Animações** | 🎯 **Pronto para Portfólio**

[Demo ao Vivo](https://luxe-glow-coral.vercel.app/) • [Funcionalidades](#-funcionalidades) • [Tecnologias](#-tecnologias) • [Guia de Setup](#-início-rápido)

</div>

---

## 📌 Visão Geral do Projeto

**LuxeGlow** é uma landing page premium de skincare que combina tecnologias web modernas com personalização alimentada por IA. Apresenta um quiz interativo que analisa perfis de pele de usuários e gera recomendações de produtos personalizadas em tempo real usando IA.

### 🎯 Construído para Portfólio para Demonstrar:
- ✅ Padrões avançados de React 19 & Next.js 16 (App Router, Server/Client Components)
- ✅ Integração real com IA (Google Gemini + OpenRouter API)
- ✅ i18n multi-idioma (Inglês & Português)
- ✅ Animações complexas (Framer Motion, cursor customizado)
- ✅ Design 100% responsivo (mobile-first)
- ✅ Segurança em TypeScript
- ✅ Implementação de rotas de API
- ✅ Arquitetura profissional de código

---

## ✨ Funcionalidades Principais

### 🧠 Quiz de Análise de Pele com IA
- **Questionário personalizado em 6 passos** cobrindo idade, tipo de pele, preocupações, clima, rotina e objetivos
- **Análise de IA em tempo real** usando Google Gemini ou OpenRouter
- **Recomendações personalizadas** com nome customizado, ingredientes e benefícios
- **Animações suaves** durante carregamento e exibição de resultados
- **Tratamento de erros** com retry automático

**Exemplo de Saída:**
```json
{
  "productName": "Sérum Clareador Luminoso",
  "tagline": "Ciência de precisão para pele equilibrada",
  "keyIngredientes": ["Ácido Salicílico", "Niacinamida", "Extrato de Chá Verde"],
  "beneficios": ["Reduz acne", "Minimiza poros", "Uniformiza tom da pele"],
  "skinMatch": "96%"
}
```

### 🎨 Elementos Premium de UX/UI
- ✅ **Cursor Dourado Customizado** - Muda cor com base no fundo (branco em claro, dourado em escuro)
- ✅ **Rolagem Suave** - Integração com Lenis para rolagem premium com momentum
- ✅ **Modal de Quiz** - Tela cheia com gerenciamento inteligente de scroll
- ✅ **Micro-interações** - Animações com Framer Motion em todo lugar
- ✅ **Notificações Toast** - Feedback em tempo real ao usuário
- ✅ **Estados de Carregamento** - Telas de carregamento animadas lindas
- ✅ **Tratamento de Erros** - Recuperação graciosa de erros

### 🌍 Suporte Multilíngue
- **Suporte completo a Inglês & Português**
- **Troca dinâmica de idioma** na navbar
- **Sistema de i18n baseado em Context**
- **Todo conteúdo traduzido** incluindo animações

### 📱 100% Responsivo
```
Mobile:   280px - 640px  ✅ Otimizado
Tablet:   640px - 1024px ✅ Testado  
Desktop:  1024px+        ✅ Perfeito
```

### 📄 Seções Completas de Página
| Seção | Funcionalidades |
|-------|-----------------|
| **Hero** | Intro atraente com CTAs |
| **Teaser de IA** | Preview do quiz |
| **Como Funciona** | Explicação em 4 passos |
| **Produtos** | Vitrine de 4 produtos |
| **Por que LuxeGlow** | Diferenciação de marca |
| **Resultados** | Galeria antes/depois |
| **Depoimentos** | Histórias de sucesso |
| **Blog/Journal** | Artigos educacionais |
| **FAQ** | 8 perguntas abrangentes |
| **CTA Final** | Oportunidade de conversão |

---

## 🛠 Stack Técnico

### Frontend
```
Framework:       Next.js 16 (App Router, React 19)
Linguagem:       TypeScript 5 (strict mode, 100% type-safe)
Estilização:     Tailwind CSS v4
Animações:       Framer Motion 12.26
Componentes UI:  Radix UI (primitivos acessíveis)
Formulários:     React Hook Form + Zod validation
Notificações:    Sonner (sistema de toast)
Rolagem Suave:   Lenis 1.3.17
Ícones:          Lucide React
```

### Desenvolvimento & Qualidade
```
Build:           Next.js Turbopack
Gerenciador:     npm/pnpm
Linting:         ESLint configurado
Type Checking:   TypeScript strict
Otimização IMG:  Componente Next.js Image
Code Splitting:  Automático com dynamic imports
```

---

## 🚀 Início Rápido

### Pré-requisitos
- **Node.js 18+** (LTS recomendado)
- **npm ou pnpm**
- **Git**

### Passo 1: Clone & Instale (2 minutos)

```bash
# Clonar repositório
git clone https://github.com/Userlovesplay/LuxeGlow.git
cd luxeglow

# Instalar dependências
npm install
```

### Passo 2: Obtenha Chaves de API (2 minutos)

**Opção A: Google Gemini (Simples)**
1. Vá para https://aistudio.google.com/app/apikey
2. Clique em "Create API Key"
3. Copie a chave

**Opção B: OpenRouter (Recomendado para free tier)**
1. Vá para https://openrouter.ai/
2. Faça signup e obtenha chave
3. Copie a chave

### Passo 3: Configure o Ambiente

Crie arquivo `.env.local` na raiz do projeto:

```env
# Usando OpenRouter (recomendado)
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxx
AI_PROVIDER=openrouter

# OU usando Google Gemini
GOOGLE_API_KEY=AIzaSyAxxxxxxxxx
AI_PROVIDER=google

# Opcional: Google Custom Search
GOOGLE_CSE_ID=xxxxxxxxxxxxxxx
```

### Passo 4: Execute o Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📁 Estrutura do Projeto

```
luxeglow/
├── app/
│   ├── api/
│   │   ├── quiz/route.ts              # Endpoint de análise com IA
│   │   └── newsletter/route.ts        # Inscrição de e-mail
│   ├── layout.tsx                     # Layout raiz com providers
│   ├── page.tsx                       # Landing page
│   ├── shop/page.tsx                  # Catálogo de produtos
│   ├── journal/page.tsx               # Artigos do blog
│   ├── about/page.tsx                 # História da empresa
│   └── contact/page.tsx               # Formulário de contato
│
├── components/
│   ├── luxe-*.tsx                     # Seções principais da página
│   ├── custom-cursor.tsx              # Cursor dourado inteligente
│   ├── language-*.tsx                 # Componentes de i18n
│   ├── lenis-provider.tsx             # Provider de scroll suave
│   ├── theme-provider.tsx             # Sistema de tema
│   └── ui/                            # Componentes Radix UI (40+ primitivos)
│
├── lib/
│   ├── i18n.ts                        # Traduções EN & PT
│   └── utils.ts                       # Utilitários
│
├── styles/
│   └── globals.css                    # Estilos globais + animações
│
├── public/
│   └── images/                        # Assets estáticos
│
├── arquivos de config
│   ├── tailwind.config.ts             # Configuração Tailwind
│   ├── tsconfig.json                  # Config TypeScript strict
│   └── next.config.ts                 # Otimizações Next.js
```

---

## 🎨 Sistema de Design

### Paleta de Cores (Tema Dourado Luxo)
```
Dourado Primário:    #D4AF77  → CTAs, acentos, destaques
Creme Secundário:    #F5E6D3  → Fundos, UI suave
Acento Rosa:         #E8B4B8  → Bordas, destaques sutis
```

### Tipografia
- **Títulos:** Fonte serif (estética luxo)
- **Corpo:** Sans-serif (legibilidade)
- **Escalas responsivas** para todos os tamanhos

### Breakpoints Responsivos
```
Mobile:   < 640px    (estilos base)
Tablet:   640px+     (prefixo sm:)
Desktop:  1024px+    (prefixo lg:)
```

---

## 🔌 Endpoints de API

### POST `/api/quiz` - Análise de Pele com IA
**Gera recomendações de produtos personalizadas**

Requisição:
```json
{
  "answers": {
    "age": "26-35",
    "skinType": "oleosa",
    "concerns": ["acne", "brilho"],
    "climate": "tropical",
    "currentRoutine": "basica",
    "goals": ["claridade", "controle"]
  }
}
```

Resposta (200 OK):
```json
{
  "productName": "Sérum de Controle de Claridade",
  "tagline": "Precisão matificante para pele oleosa",
  "description": "...",
  "keyIngredients": ["niacinamida", "zinco"],
  "benefits": ["controla sebo", "clarifica pele"],
  "price": "R$ 189,00",
  "usage": "Aplique manhã e noite",
  "skinMatch": "94%"
}
```

Respostas de Erro:
- `400` - Respostas do quiz faltando
- `429` - Quota excedida (aguarde reset)
- `500` - Erro do provedor IA

---

## 🌐 Suporte Multilíngue

### Idiomas Atualmente Suportados
- 🇺🇸 **Inglês (EN)**
- 🇧🇷 **Português (PT)**

### Adicionar Novo Idioma
1. Edite `lib/i18n.ts`
2. Adicione novo objeto de idioma a `translations`
3. Atualize tipo `Language`
4. Use hook `useLanguage()` nos componentes

---

## 📊 Características de Desempenho

✅ **Otimização de Imagem**
- Componente Image do Next.js com auto-otimização
- Suporte formato WebP
- Lazy loading built-in

✅ **Code Splitting**
- Splitting automático baseado em rota
- Dynamic imports para componentes pesados
- Tree-shaking habilitado

✅ **Desempenho em Runtime**
- Animações aceleradas por GPU (Framer Motion)
- Re-renders eficientes do React
- Rolagem acelerada por hardware
- Rendering de cursor otimizado

✅ **Tamanho do Bundle**
- Dependências mínimas (~50 pacotes)
- CSS pruning com Tailwind
- Zero código não utilizado

---

## 🚀 Deploy

### Deploy na Vercel (Recomendado - 2 minutos)

```bash
npm install -g vercel
vercel
```

**Configure no Dashboard Vercel:**
1. Vá para Settings → Environment Variables
2. Adicione suas chaves de API:
   ```
   OPENROUTER_API_KEY=sk-or-v1-xxxxx
   AI_PROVIDER=openrouter
   ```
3. Redeploy automático

### Deploy em Outras Plataformas

**Docker:**
```bash
docker build -t luxeglow .
docker run -p 3000:3000 luxeglow
```

**Railway, Render, Netlify:** Funciona com qualquer runtime Node.js

---

## 🔐 Segurança & Boas Práticas

✅ **Variáveis de Ambiente**
- Nunca commite `.env.local`
- Use `.env.local.example` como template
- Rotacione chaves de API regularmente

✅ **Validação de Input**
- Validação com schema Zod em todos formulários
- Verificação de formato de email
- Sanitização de inputs do usuário

✅ **Tratamento de Erros**
- Mensagens de erro graciosas
- Notificações amigáveis ao usuário
- Logging de erro no servidor

✅ **Acessibilidade**
- Componentes acessíveis Radix UI
- Estrutura HTML semântica
- Suporte navegação por teclado
- Labels ARIA em todo lugar

---

## 🐛 Resolução de Problemas

### Quiz retorna 404
**Problema:** Modelo não encontrado
**Solução:** 
- Verificar `.env.local` tem chave correta
- Verificar `AI_PROVIDER` está configurado
- Garantir chave tem acesso ao modelo

### Idioma não alterna
**Problema:** Seletor de idioma não funciona
**Solução:**
- Verificar LanguageProvider envolve app em `layout.tsx`
- Limpar local storage do navegador
- Verificar console para erros

### Animações travando
**Problema:** Desempenho ruim de scroll/animação
**Solução:**
- Verificar DevTools Performance
- Desabilitar extensões que afetam desempenho
- Testar em Chrome (melhor desempenho)

### Cursor não visível em fundos escuros
**Problema:** Cursor se misturando com fundo
**Solução:**
- Automático na última versão (cursor muda cor)
- Limpar cache se ainda visível
- Verificar CSS está carregado

---

## 📚 Decisões Técnicas & Justificativas

### Por que Next.js 16?
- ✅ Server & Client Components para desempenho ótimo
- ✅ Rotas de API built-in (sem backend separado)
- ✅ Code splitting automático
- ✅ Otimização de imagem out of box
- ✅ Integração com deploy Vercel

### Por que TypeScript?
- ✅ Detecta erros em tempo de compilação
- ✅ Melhor autocomplete do IDE
- ✅ Código auto-documentado
- ✅ Confiança em refatoração

### Por que Tailwind CSS v4?
- ✅ Utility-first = desenvolvimento mais rápido
- ✅ Bundle pequeno (~14kb)
- ✅ Suporte dark mode
- ✅ Sistema de design customizável

### Por que Múltiplos Provedores IA?
- ✅ Flexibilidade para trocar APIs
- ✅ Otimização de custo (free tiers)
- ✅ Melhor disponibilidade & confiabilidade
- ✅ Demonstra skills de integração com API

### Por que Framer Motion?
- ✅ API poderosa de animação
- ✅ Physics de spring para movimento natural
- ✅ Pequeno & performático
- ✅ Ótimo para showcase em portfólio

---

## 📈 SEO & Analytics

- ✅ Meta tags otimizadas
- ✅ Open Graph tags configuradas
- ✅ Mobile-friendly certificado
- ✅ Fast Core Web Vitals
- ✅ Dados estruturados prontos

---

## 📄 Licença

Licença MIT - Veja arquivo [LICENSE](LICENSE) para detalhes

---

## 🎓 Recursos de Aprendizagem

- [Docs Next.js 16](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Google Gemini API](https://ai.google.dev/)
- [OpenRouter API](https://openrouter.ai/docs)

---

<div align="center">

Este projeto demonstra skills de desenvolvimento web de nível profissional incluindo:
- Padrões modernos de React/Next.js
- Integração real com IA/LLM
- Expertise em TypeScript
- Animações CSS avançadas
- Design responsivo
- Implementação de API
- Suporte multilíngue

**[Ver Demo Ao Vivo](https://luxe-glow-coral.vercel.app/)** • **[Clonar Este Projeto](https://github.com/Userlovesplay/LuxeGlow)**

---

**Feito com ❤️ pela excelência na web**

[⬆ Voltar ao Topo](#-luxeglow---landing-page-premium-de-skincare-com-ia)

</div>
