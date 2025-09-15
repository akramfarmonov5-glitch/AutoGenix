# AutoGenix AI - AI-Powered Content Automation Platform

## Overview

AutoGenix AI is an AI-powered content automation platform that helps businesses scale their content creation using artificial intelligence. The platform automatically generates 15 blog posts daily (between 07:00-21:00) and 5 Telegram marketing posts at scheduled intervals (09:00, 12:00, 15:00, 18:00, 20:00). Built with modern web technologies, it combines AI text generation with automated image creation using Google's Gemini models, providing a complete content automation solution with built-in moderation, cost control, and admin management capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Wouter for client-side routing
- **Styling**: TailwindCSS with shadcn/ui component library for consistent design
- **State Management**: TanStack Query for server state management and caching
- **Build System**: Vite for fast development and optimized production builds
- **Structure**: Component-based architecture with separate pages for public content (home, services, blog, portfolio, contact) and admin functionality

### Backend Architecture
- **Runtime**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **API Design**: RESTful API endpoints with separate public and admin-protected routes
- **Authentication**: Bearer token-based authentication for admin access
- **Scheduling**: Node-cron for automated content generation jobs
- **Architecture Pattern**: Layered architecture with separate service layers for AI, storage, and external integrations

### Data Storage Solutions
- **Primary Database**: PostgreSQL (Neon for development, configurable for production)
- **ORM**: Drizzle with type-safe schema definitions
- **File Storage**: Adapter pattern supporting both local filesystem (development) and S3-compatible storage (production)
- **Schema Design**: Normalized structure with separate entities for users, posts, images, and job logs
- **Data Models**: Posts support multiple statuses (draft, published, queued, review) with metadata for SEO optimization

### Content Generation & AI Integration
- **AI Provider**: Google Gemini AI with separate models for text (Gemini 1.5 Flash) and image generation (Gemini 2.5 Flash)
- **Content Pipeline**: Automated workflow from topic generation to content creation, image generation, and publishing
- **Quality Control**: Built-in content moderation with profanity filtering and manual review flagging
- **Cost Management**: Daily limits on image generation with configurable thresholds to control AI usage costs

### Automation & Scheduling
- **Job Scheduler**: Node-cron based system with separate schedules for blog posts and Telegram messaging
- **Content Distribution**: Multi-channel publishing to website and Telegram with different content formats
- **Monitoring**: Comprehensive job logging system tracking generation success, failures, and performance metrics
- **Queue Management**: Status-based content queue with support for drafts, scheduling, and review workflows

## External Dependencies

### AI and Machine Learning Services
- **Google Gemini AI**: Primary AI service for both text and image generation
- **Google AI SDK**: Official client library for Gemini API integration
- **Content Moderation**: Custom filtering system with extensible blacklist/whitelist functionality

### Communication and Messaging
- **Telegram Bot API**: Automated posting to Telegram channels using Telegraf library
- **Email Services**: Contact form handling and notification system

### Infrastructure and Storage
- **Neon Database**: Serverless PostgreSQL hosting for development and production
- **S3-Compatible Storage**: File storage adapter supporting AWS S3, Google Cloud Storage, or compatible services
- **Image Processing**: Built-in utilities for image optimization and format conversion

### Development and Monitoring
- **Authentication Systems**: Token-based admin authentication with bcrypt password hashing
- **Build Tools**: Vite bundler with TypeScript compilation and optimization
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Form Management**: React Hook Form with Zod validation for type-safe form handling
- **Development Tools**: Hot module replacement, error overlay, and development banners for Replit integration