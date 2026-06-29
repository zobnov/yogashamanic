import { NextResponse } from "next/server";

const plans = {
  summer: {
    label: "Літній сектор",
    duration: "3 місяці",
    priceId: "price_1TnNssHx9XIt6Bgb97p02HE7",
  },
  "summer-autumn": {
    label: "Літо + Осінь",
    duration: "6 місяців",
    priceId: "price_1TnNssHx9XIt6Bgb428PqQJd",
  },
  "full-circle": {
    label: "Повне Коло Року",
    duration: "12 місяців",
    priceId: "price_1TnNssHx9XIt6Bgbgf8fHWBe",
  },
} as const;

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!stripeSecretKey || !siteUrl) {
    return NextResponse.redirect(new URL("/checkout-error?reason=config", request.url), 303);
  }

  const formData = await request.formData();
  const planId = formData.get("plan");

  if (typeof planId !== "string" || !(planId in plans)) {
    return NextResponse.redirect(new URL("/checkout-error?reason=plan", request.url), 303);
  }

  const plan = plans[planId as keyof typeof plans];
  const body = new URLSearchParams({
    mode: "payment",
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/#prices`,
    "line_items[0][price]": plan.priceId,
    "line_items[0][quantity]": "1",
    "metadata[program]": "Йога і Шаманське Колесо",
    "metadata[plan]": planId,
    "metadata[plan_label]": plan.label,
    "metadata[duration]": plan.duration,
    "payment_intent_data[metadata][program]": "Йога і Шаманське Колесо",
    "payment_intent_data[metadata][plan]": planId,
  });

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${stripeSecretKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!response.ok) {
    return NextResponse.redirect(new URL("/checkout-error?reason=stripe", request.url), 303);
  }

  const session = (await response.json()) as { url?: string };

  if (!session.url) {
    return NextResponse.redirect(new URL("/checkout-error?reason=session", request.url), 303);
  }

  return NextResponse.redirect(session.url, 303);
}
