# GreenShield Pest Management

A comprehensive pest management platform built with Next.js, featuring booking systems, payment processing, CRM functionality, and customer loyalty programs.

## Features

- 🏠 Professional landing page with service showcase
- 📅 Advanced booking system with calendar integration
- 💳 Multiple payment options (Stripe, PayPal)
- 📱 SMS and WhatsApp notifications
- 🎯 Pest identification tool
- 📊 Customer relationship management (CRM)
- 🏆 Loyalty and referral programs
- 📄 Automated invoice generation
- 📱 Responsive design for all devices

## Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Payments**: Stripe, PayPal
- **Notifications**: SMS & WhatsApp APIs
- **PDF Generation**: React-PDF

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Irediaire051/greenshield-pest-management.git
cd greenshield-pest-management
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure your environment variables in `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

See `.env.local.example` for required environment variables.

## Deployment

This project is optimized for deployment on Vercel. See `vercel.json` for configuration.

## License

MIT License
