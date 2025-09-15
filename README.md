# AutoGenix AI - AI-Powered Content Automation Platform

AI texnologiyalari yordamida kontentingizni avtomatlashtiring va biznesingizni rivojlantiring. Har kuni 15 ta blog posti va 5 ta Telegram xabari avtomatik yaratish.

## 🚀 Xususiyatlar

- **AI Blog Generatsiyasi**: Har kuni 07:00-21:00 oralig'ida avtomatik SEO-optimallashtirilgan blog postlari
- **Telegram Avtomatizatsiyasi**: Kunlik 5 ta marketing post (09:00, 12:00, 15:00, 18:00, 20:00)
- **Rasm Generatsiyasi**: Gemini 2.5 Flash yordamida har bir post uchun OG image yaratish
- **Kontent Moderatsiyasi**: AI-powered profanity filter va quality control
- **Admin Dashboard**: To'liq nazorat paneli post management va analytics bilan
- **Cost Control**: Kunlik image generation limitleri va xarajat monitoringi

## 🛠 Texnik Stack

### Frontend
- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React**
- **shadcn/ui** components
- **TanStack Query** for state management
- **Wouter** for routing

### Backend
- **Next.js API Routes**
- **Prisma ORM**
- **PostgreSQL** (Neon/Render)
- **Node-cron** for scheduling
- **Telegraf** for Telegram bot

### AI & External Services
- **Gemini 1.5 Flash** (text generation)
- **Gemini 2.5 Flash** (image generation)
- **Google AI SDK**

### Storage & Utils
- **Local/S3 Storage** adapter pattern
- **Image processing** utilities
- **Content moderation** libraries

## 📋 Talablar

- Node.js 18+
- PostgreSQL database
- Gemini API key
- Telegram Bot Token (optional)
- S3 credentials (production, optional)

## ⚙️ O'rnatish

### 1. Repository ni clone qiling

```bash
git clone https://github.com/your-username/autogenix-ai.git
cd autogenix-ai
