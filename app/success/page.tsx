import Link from "next/link";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

type StripeCheckoutSession = {
  id: string;
  payment_status?: string;
  metadata?: {
    plan?: string;
  };
};

const successContent = {
  default: {
    title: "Дякуємо за приєднання до Кола",
    body: "Далі, будь ласка, натисніть на посилання, щоб долучитися до закритого каналу:",
    linkEnv: "TELEGRAM_LINK_ANNUAL",
    backHref: "/",
  },
  "ten-journeys": {
    title: "Дякуємо за приєднання до подорожі",
    body: "Далі, будь ласка, натисніть на посилання, щоб долучитися до закритої спільноти:",
    linkEnv: "TELEGRAM_LINK_TEN_JOURNEYS",
    backHref: "/10",
  },
} as const;

async function getVerifiedCheckoutSession(sessionId: string) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return null;
  }

  const response = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`,
    {
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
      },
      cache: "no-store",
    },
  );

  if (!response.ok) {
    return null;
  }

  const session = (await response.json()) as StripeCheckoutSession;

  if (session.payment_status !== "paid") {
    return null;
  }

  return session;
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect("/checkout-error?reason=missing-session");
  }

  const session = await getVerifiedCheckoutSession(sessionId);

  if (!session) {
    redirect("/checkout-error?reason=unverified");
  }

  const plan = session.metadata?.plan;
  const content = plan === "ten-journeys" ? successContent["ten-journeys"] : successContent.default;
  const telegramLink = process.env[content.linkEnv];

  return (
    <main className="min-h-screen bg-[#fbf8f0] px-5 py-16 text-[#2f3128] sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center">
        <p className="section-kicker">Оплата прийнята</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          {content.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#59564b]">
          {content.body}{" "}
          {telegramLink ? (
            <a
              className="font-semibold text-[#5e7456] underline decoration-[#9cac89] underline-offset-4 transition hover:text-[#4f6549]"
              href={telegramLink}
              rel="noreferrer"
              target="_blank"
            >
              {telegramLink}
            </a>
          ) : (
            <span className="font-semibold text-[#5e7456]">
              Посилання буде додано найближчим часом.
            </span>
          )}
        </p>
        <Link
          className="focus-ring mt-9 inline-flex h-12 w-fit items-center justify-center rounded-[8px] bg-[#5e7456] px-6 text-sm font-bold text-white transition hover:bg-[#4f6549]"
          href={content.backHref}
        >
          Повернутися на сторінку
        </Link>
      </section>
    </main>
  );
}
