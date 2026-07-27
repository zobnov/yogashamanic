# Йога і Шаманське Колесо

Clean responsive Next.js landing page for the Shamanic Yoga annual online program.

## Run locally

```bash
pnpm install
pnpm run dev
```

Then open `http://localhost:3000`.

Requires Node.js on your PATH.

## Edit content

Most page copy, pricing, FAQ, and program items live in `app/page.tsx`.
The generated hero image is saved at `public/images/hero-ritual-yoga.png`.

## Stripe Checkout

This app uses a server-side API route at `app/api/checkout/route.ts` to create
Stripe Checkout Sessions. Set these environment variables locally and in
production:

```bash
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_SITE_URL=https://yogashamanic.com
STRIPE_PRICE_SUMMER=price_...
STRIPE_PRICE_SUMMER_AUTUMN=price_...
STRIPE_PRICE_FULL_CIRCLE=price_...
STRIPE_PRICE_TEN_JOURNEYS=price_...
TELEGRAM_LINK_ANNUAL=https://t.me/...
TELEGRAM_LINK_TEN_JOURNEYS=https://t.me/...
```

The success page verifies `session_id` with Stripe before showing the paid
confirmation. If the session is missing, invalid, or not paid, the page
redirects to `/checkout-error`.
 
