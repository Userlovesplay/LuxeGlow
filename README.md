# ✨ LuxeGlow - Premium AI-Powered Skincare Landing Page

<div align="center">

**[English](README.md) | [Português](README-pt.md)**

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.26-00D4FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

**A sophisticated, production-ready AI-powered skincare landing page**

📱 **Fully Responsive** | 🤖 **AI-Powered** | 🌍 **Multi-Language** | ✨ **Animations** | 🎯 **Portfolio Ready**

[Live Demo](https://luxe-glow-fbct.vercel.app/) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Setup Guide](#-quick-start)

</div>

---

## 📌 Project Overview

**LuxeGlow** is a premium skincare brand landing page that combines modern web technologies with AI-powered personalization. Features an interactive quiz that analyzes user skin profiles and generates personalized product recommendations in real-time using AI.

### 🎯 Built for Portfolio to Showcase:
- ✅ Advanced React 19 & Next.js 16 patterns (App Router, Server/Client Components)
- ✅ Real AI integration (Google Gemini + OpenRouter API)
- ✅ Multi-language i18n (English & Portuguese)
- ✅ Complex animations (Framer Motion, custom cursor)
- ✅ 100% responsive design (mobile-first)
- ✅ TypeScript type safety
- ✅ API route implementation
- ✅ Professional code architecture

---

## ✨ Key Features

### 🧠 AI-Powered Skin Analysis Quiz
- **6-step personalized questionnaire** covering age, skin type, concerns, climate, routine, and goals
- **Real-time AI analysis** using Google Gemini or OpenRouter
- **Personalized recommendations** with custom product name, ingredients, and benefits
- **Smooth animations** during loading and result display
- **Error handling** with automatic retry

**Example Output:**
```json
{
  "productName": "Luminous Clarity Serum",
  "tagline": "Precision science for balanced skin",
  "keyIngredients": ["Salicylic Acid", "Niacinamide", "Green Tea Extract"],
  "benefits": ["Reduces acne breakouts", "Minimizes pores", "Evens skin tone"],
  "skinMatch": "96%"
}
```

### 🎨 Premium UX/UI Elements
- ✅ **Custom Golden Cursor** - Changes color based on background (white on light, gold on dark)
- ✅ **Smooth Scrolling** - Lenis integration for premium momentum scroll
- ✅ **Modal Quiz** - Full-screen with smart scroll management
- ✅ **Micro-interactions** - Framer Motion animations throughout
- ✅ **Toast Notifications** - Real-time user feedback
- ✅ **Loading States** - Beautiful animated loading screens
- ✅ **Error Boundaries** - Graceful error handling with recovery

### 🌍 Multi-Language Support
- **Full English & Portuguese support**
- **Dynamic language switching** in navbar
- **Context-based i18n** system
- **All content translated** including animations

### 📱 Fully Responsive
```
Mobile:   280px - 640px  ✅ Optimized
Tablet:   640px - 1024px ✅ Tested  
Desktop:  1024px+        ✅ Perfected
```

### 📄 Full Page Sections
| Section | Features |
|---------|----------|
| **Hero** | Eye-catching intro with CTA buttons |
| **AI Teaser** | Quiz preview and value proposition |
| **How It Works** | 4-step process explanation |
| **Products** | 4 featured products showcase |
| **Why LuxeGlow** | Brand differentiation |
| **Results** | Before/After customer gallery |
| **Testimonials** | Customer success stories |
| **Journal/Blog** | Educational articles |
| **FAQ** | 8 comprehensive questions |
| **CTA** | Final conversion opportunity |

---

## 🛠 Tech Stack

### Frontend
```
Framework:       Next.js 16 (App Router, React 19)
Language:        TypeScript 5 (strict mode, 100% type-safe)
Styling:         Tailwind CSS v4
Animations:      Framer Motion 12.26
UI Components:   Radix UI (accessible primitives)
Forms:           React Hook Form + Zod validation
Notifications:   Sonner (toast system)
Smooth Scroll:   Lenis 1.3.17
Icons:           Lucide React
```

### Development & Quality
```
Build:           Next.js Turbopack
Package Manager: npm/pnpm
Linting:         ESLint configured
Type Checking:   TypeScript strict
Image Opt:       Next.js Image component
Code Splitting:  Automatic with dynamic imports
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** (LTS recommended)
- **npm or pnpm**
- **Git**

### Step 1: Clone & Install (2 minutes)

```bash
# Clone repository
git clone https://github.com/Userlovesplay/LuxeGlow.git
cd luxeglow

# Install dependencies
npm install
```

### Step 2: Get API Keys (2 minutes)

**Option A: Google Gemini (Simple)**
1. Go to https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key

**Option B: OpenRouter (Recommended for free tier)**
1. Go to https://openrouter.ai/
2. Sign up and get API key
3. Copy the key

### Step 3: Configure Environment

Create `.env.local` file in project root:

```env
# Using OpenRouter (recommended)
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxx
AI_PROVIDER=openrouter

# OR using Google Gemini
GOOGLE_API_KEY=AIzaSyAxxxxxxxxx
AI_PROVIDER=google

# Optional: Google Custom Search (for search features)
GOOGLE_CSE_ID=xxxxxxxxxxxxxxx
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
luxeglow/
├── app/
│   ├── api/
│   │   ├── quiz/route.ts              # AI analysis endpoint
│   │   └── newsletter/route.ts        # Email subscription
│   ├── layout.tsx                     # Root layout with providers
│   ├── page.tsx                       # Landing page
│   ├── shop/page.tsx                  # Product catalog
│   ├── journal/page.tsx               # Blog articles
│   ├── about/page.tsx                 # Company story
│   └── contact/page.tsx               # Contact form
│
├── components/
│   ├── luxe-*.tsx                     # Main page sections
│   ├── custom-cursor.tsx              # Smart golden cursor
│   ├── language-*.tsx                 # i18n components
│   ├── lenis-provider.tsx             # Smooth scroll provider
│   ├── theme-provider.tsx             # Theme system
│   └── ui/                            # Radix UI components (40+ primitives)
│
├── lib/
│   ├── i18n.ts                        # English & Portuguese translations
│   └── utils.ts                       # Helper utilities
│
├── styles/
│   └── globals.css                    # Global styles + animations
│
├── public/
│   └── images/                        # Static assets
│
├── config files
│   ├── tailwind.config.ts             # Tailwind configuration
│   ├── tsconfig.json                  # TypeScript strict config
│   └── next.config.ts                 # Next.js optimization
```

---

## 🎨 Design System

### Color Palette (Luxury Gold Theme)
```
Primary Gold:     #D4AF77  → CTAs, accents, highlights
Secondary Cream:  #F5E6D3  → Backgrounds, soft UI
Accent Rose:      #E8B4B8  → Borders, subtle highlights
```

### Typography
- **Headings:** Serif font (luxury aesthetic)
- **Body:** Sans-serif (readability)
- **Responsive scaling** for all screen sizes

### Responsive Breakpoints
```
Mobile:   < 640px    (base styles)
Tablet:   640px+     (sm: prefix)
Desktop:  1024px+    (lg: prefix)
```

---

## 🔌 API Endpoints

### POST `/api/quiz` - AI Skin Analysis
**Generates personalized product recommendations**

Request:
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

Response (200 OK):
```json
{
  "productName": "Clarity Control Serum",
  "tagline": "Matifying precision for oily skin",
  "description": "...",
  "keyIngredients": ["niacinamide", "zinc"],
  "benefits": ["controls sebum", "clarifies skin"],
  "price": "R$ 189,00",
  "usage": "Apply morning and night",
  "skinMatch": "94%"
}
```

Error Responses:
- `400` - Missing quiz answers
- `429` - Quota exceeded (wait for reset)
- `500` - AI provider error

---

## 🌐 Multi-Language Support

### Currently Supported
- 🇺🇸 **English (EN)**
- 🇧🇷 **Portuguese (PT)**

### Adding New Language
1. Edit `lib/i18n.ts`
2. Add new language object to `translations`
3. Update `Language` type
4. Use `useLanguage()` hook in components

---

## 📊 Performance Features

✅ **Image Optimization**
- Next.js Image component with auto-optimization
- WebP format support
- Lazy loading out of the box

✅ **Code Splitting**
- Route-based automatic splitting
- Dynamic imports for heavy components
- Tree-shaking enabled

✅ **Runtime Performance**
- GPU-accelerated animations (Framer Motion)
- Efficient React re-renders
- Hardware-accelerated scrolling
- Optimized cursor rendering

✅ **Bundle Size**
- Minimal dependencies (~50 packages)
- CSS pruning with Tailwind
- Zero unused code

---

## 🚀 Deployment

### Deploy to Vercel (Recommended - 2 minutes)

```bash
npm install -g vercel
vercel
```

**Configure in Vercel Dashboard:**
1. Go to Settings → Environment Variables
2. Add your API keys:
   ```
   OPENROUTER_API_KEY=sk-or-v1-xxxxx
   AI_PROVIDER=openrouter
   ```
3. Redeploy automatically

### Deploy to Other Platforms

**Docker:**
```bash
docker build -t luxeglow .
docker run -p 3000:3000 luxeglow
```

**Railway, Render, Netlify:** Works with any Node.js runtime

---

## 🔐 Security & Best Practices

✅ **Environment Variables**
- Never commit `.env.local`
- Use `.env.local.example` as template
- Rotate API keys regularly

✅ **Input Validation**
- Zod schema validation on all forms
- Email format checking
- Sanitized user inputs

✅ **Error Handling**
- Graceful error messages
- User-friendly notifications
- Server-side error logging

✅ **Accessibility**
- Radix UI accessible components
- Semantic HTML structure
- Keyboard navigation support
- ARIA labels throughout

---

## 🐛 Troubleshooting

### Quiz API returns 404
**Problem:** Model not found
**Solution:** 
- Check `.env.local` has correct API key
- Verify `AI_PROVIDER` is set correctly
- Ensure API key has model access

### Language not switching
**Problem:** Language selector not working
**Solution:**
- Verify LanguageProvider wraps app in `layout.tsx`
- Clear browser local storage
- Check console for errors

### Animations stuttering
**Problem:** Poor scroll/animation performance
**Solution:**
- Check DevTools Performance tab
- Disable extensions affecting performance
- Test in Chrome (best performance)

### Cursor not visible on dark backgrounds
**Problem:** Cursor blending with background
**Solution:**
- Automatic in latest version (cursor changes color)
- Clear cache if still visible
- Check CSS is properly loaded

---

## 📚 Technical Decisions & Justification

### Why Next.js 16?
- ✅ Server & Client Components for optimal performance
- ✅ Built-in API routes (no separate backend)
- ✅ Automatic code splitting
- ✅ Image optimization out of box
- ✅ Vercel deployment integration

### Why TypeScript?
- ✅ Catch errors at compile time
- ✅ Better IDE autocomplete
- ✅ Self-documenting code
- ✅ Refactoring confidence

### Why Tailwind CSS v4?
- ✅ Utility-first = faster development
- ✅ Small final bundle (~14kb)
- ✅ Dark mode support
- ✅ Customizable design system

### Why Multiple AI Providers?
- ✅ Flexibility to switch APIs
- ✅ Cost optimization (free tiers)
- ✅ Better availability & reliability
- ✅ Demonstrates API integration skills

### Why Framer Motion?
- ✅ Powerful animation API
- ✅ Spring physics for natural motion
- ✅ Small & performant
- ✅ Great for portfolio showcasing

---

## 📈 SEO & Analytics

- ✅ Meta tags optimized
- ✅ Open Graph tags configured
- ✅ Mobile-friendly certified
- ✅ Fast Core Web Vitals
- ✅ Structured data ready

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details

---

## 🎓 Learning Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction)
- [Google Gemini API](https://ai.google.dev/)
- [OpenRouter API](https://openrouter.ai/docs)

---

<div align="center">

### 🌟 Perfect for Your Portfolio!

This project demonstrates production-grade web development skills including:
- Modern React/Next.js patterns
- Real AI/LLM integration
- TypeScript expertise
- Advanced CSS animations
- Responsive design
- API implementation
- Multi-language support

**[View Live Demo](https://luxe-glow-fbct.vercel.app/)** • **[Clone This Project](https://github.com/Userlovesplay/LuxeGlow)**

---

**Made with ❤️ for web excellence**

[⬆ Back to Top](#-luxeglow---premium-ai-powered-skincare-landing-page)

</div>
