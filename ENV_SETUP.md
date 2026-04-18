# Environment Setup Guide

## Quick Start (2 minutes)

### 1. Copy the example file
```bash
cp .env.example .env.local
```

### 2. Choose your AI Provider

#### Option A: OpenRouter (Recommended - Free)
1. Go to https://openrouter.ai/
2. Sign up (no credit card needed for free tier)
3. Copy your API key
4. Paste into `.env.local`:
```env
AI_PROVIDER=openrouter
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxx
```

#### Option B: Google Gemini (Also Free)
1. Go to https://aistudio.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key
4. Paste into `.env.local`:
```env
AI_PROVIDER=google
GOOGLE_API_KEY=AIzaSyAxxxxxxxxxxxxx
```

### 3. Start development
```bash
npm run dev
```

Open http://localhost:3000 ✅

---

## Variables Explained

### AI_PROVIDER
- **Type:** String
- **Options:** `"google"` | `"openrouter"`
- **Required:** Yes
- **Default:** None
- **Purpose:** Selects which AI service to use for the skin analysis quiz

### OPENROUTER_API_KEY
- **Type:** String
- **Format:** `sk-or-v1-xxxxxxx...`
- **Required:** Only if `AI_PROVIDER=openrouter`
- **Get from:** https://openrouter.ai/
- **Free tier:** Yes, generous limits
- **Purpose:** Authenticate with OpenRouter API for AI responses

### GOOGLE_API_KEY
- **Type:** String
- **Format:** `AIzaSyAxxxx...`
- **Required:** Only if `AI_PROVIDER=google`
- **Get from:** https://aistudio.google.com/app/apikey
- **Free tier:** Yes, with daily limits
- **Purpose:** Authenticate with Google Gemini API

### GOOGLE_CSE_ID (Optional)
- **Type:** String
- **Required:** No
- **Get from:** https://programmablesearchengine.google.com/
- **Purpose:** For implementing search features (not currently used)

---

## Development Environment

For development, you can also create `.env.development.local`:
```bash
cp .env.development.example .env.development.local
```

This file is for development-specific settings and is separate from `.env.local`.

---

## Security Notes

⚠️ **IMPORTANT:**

1. **Never commit `.env.local`** - It's in `.gitignore` for safety
2. **Never share your API keys** - They should be kept private
3. **Rotate keys regularly** - Regenerate keys if compromised
4. **Use `.env.example`** - This file shows what keys are needed (safe to commit)

---

## Deployment

### Vercel
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard:
   - Settings → Environment Variables
   - Add `AI_PROVIDER`, `OPENROUTER_API_KEY` or `GOOGLE_API_KEY`
4. Redeploy

### Other Platforms
Set environment variables in your hosting platform's dashboard with the same names.

---

## Troubleshooting

### "GOOGLE_API_KEY not configured"
- Check `.env.local` exists
- Verify key is correctly pasted
- Restart development server: `npm run dev`

### "Error fetching from API"
- Verify API key is valid
- Check if free tier quota is exceeded
- Try the alternative provider (switch `AI_PROVIDER`)

### WebSocket HMR errors
- Use: `npm run dev:host` for network access
- Check firewall allows port 3000
- If persistent: `NEXT_EXPERIMENTAL_DISABLE_HMR=true` in `.env.development.local`

---

## Free Tier Limits

### OpenRouter
- Free tier available
- No credit card required
- Generous request limits
- Supports multiple models

### Google Gemini
- Free tier available
- ~60 requests per minute
- ~1000 requests per day
- Resets daily at midnight UTC

---

## Need Help?

- OpenRouter Docs: https://openrouter.ai/docs
- Google Gemini Docs: https://ai.google.dev/
- LuxeGlow README: See README.md or README-pt.md

---
