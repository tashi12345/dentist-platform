# Dentist Platform - Gieek Software Solutions

A fast, rebrandable dentist appointment booking platform built with Next.js, Firebase, and TypeScript.

## Features

- **Patient Portal:** Book appointments, view appointment history
- **Admin Dashboard:** Manage appointments, confirm/cancel bookings, view stats
- **Service Catalog:** Display 6 dental services with pricing
- **WhatsApp Integration:** Direct contact via WhatsApp
- **Real-time Updates:** Firestore real-time listeners
- **Responsive Design:** Mobile-first, works on all devices
- **Authentication:** Secure Firebase authentication

## Tech Stack

- Next.js 16.1.6 + React 19.2.3
- TypeScript 5
- Firebase 12.9.0 (Firestore + Auth)
- Framer Motion 12.34.3
- Lucide React 0.575.0

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Firebase Setup

1. Create a new Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable **Authentication** (Email/Password)
3. Create a **Firestore database** (production mode)
4. Copy your Firebase config
5. Create `.env.local` file (copy from `.env.local.example`)
6. Paste your Firebase credentials

### 3. Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
```

### 4. Create Admin User

Run this script to make a user an admin:

```javascript
// In Firebase Console > Firestore > users > [user-id]
// Set: role: "admin"
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Rebrand for New Client

### Quick Rebrand (15 minutes)

1. **Update Branding** (`src/data/config.ts`):
   - Clinic name, tagline, city
   - Phone, email, address, WhatsApp
   - Operating hours
   - SEO metadata

2. **Update Services** (`src/data/services.ts`):
   - Modify prices
   - Add/remove services

3. **Replace Assets**:
   - `public/logo.png` - Clinic logo
   - Update colors in `src/data/config.ts`

4. **New Firebase Project**:
   - Create new Firebase project
   - Update `.env.local`
   - Deploy Firestore rules

5. **Deploy**:
   - Push to new GitHub repo
   - Connect to Vercel
   - Add environment variables

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repo in Vercel
3. Add environment variables from `.env.local`
4. Deploy

Vercel auto-detects Next.js - no configuration needed!

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/           # Reusable React components
├── lib/                 # Firebase & Auth context
├── data/                # Config, services, time slots
└── types/               # TypeScript interfaces
```

## Key Files

- `src/data/config.ts` - **REBRANDABLE** config (clinic info, colors)
- `src/data/services.ts` - Dental services catalog
- `src/components/AppointmentModal.tsx` - Booking modal (date + time slot)
- `src/app/admin/dashboard/page.tsx` - Admin panel

## Cost

**Free tier covers:**
- Firebase: 50k reads/day, 20k writes/day
- Vercel: 100GB bandwidth, unlimited sites
- **Total: Rs. 0/month** for small clinics

## Support

Built by Gieek Software Solutions for Pakistani SMB dental clinics.

For customization: Contact Gieek Software Solutions
