# Costa Rican Doing — Adventure Tour Website

**costaricandoing.com** — Next.js 14 website for a Costa Rica adventure tourism company.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Supabase** (ready to connect — install done)
- **lucide-react** icons

## Getting Started

```bash
# 1. Install dependencies (already done)
npm install

# 2. Copy env file and fill in values
cp .env.example .env.local

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
  page.tsx                  # Homepage
  tours/
    page.tsx                # Tours listing
    [slug]/page.tsx         # Individual tour pages
  blog/
    page.tsx                # Blog listing
    [slug]/page.tsx         # Blog post pages
  about/page.tsx
  contact/page.tsx
  booking/confirmation/page.tsx
  terms/page.tsx
  sitemap.ts                # Auto-generated sitemap
  robots.ts                 # robots.txt

components/
  layout/
    Header.tsx              # Sticky header with nav + language toggle
    Footer.tsx
  tours/
    TourCard.tsx            # Reusable tour card component
  forms/
    ContactForm.tsx         # Reusable contact form
    BookingForm.tsx         # Tour booking form

data/
  tours.ts                  # All tour data (5 tours pre-loaded)
  blog.ts                   # Blog post data

types/
  index.ts                  # TypeScript types: Tour, BlogPost, BookingFormData...

lib/
  utils.ts                  # cn(), formatPrice(), formatDate()
```

## Environment Variables

See `.env.example` for required variables:
- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — your Supabase anon key
- `NEXT_PUBLIC_SITE_URL` — production URL

## Tours Included

1. ATV La Fortuna (`/tours/atv-la-fortuna`)
2. Zipline La Fortuna (`/tours/zipline-la-fortuna`)
3. White Water Rafting (`/tours/white-water-rafting`)
4. La Fortuna Waterfall (`/tours/la-fortuna-waterfall`)
5. ATV + Zipline Combo (`/tours/atv-zipline-combo`)

## Next Steps

- [ ] Add real tour photos to `public/images/tours/`
- [ ] Connect Supabase for booking form submissions
- [ ] Wire up language toggle (locale state to Header)
- [ ] Add Google Maps embed to contact page
- [ ] Connect to GitHub and deploy on Vercel
- [ ] Add Google Analytics / Search Console
- [ ] Add WhatsApp floating button

## Deploy

```bash
npm run build   # verify build passes
# then push to GitHub and connect to Vercel
```
