import Link from "next/link";

export default function CheckoutErrorPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f0] px-5 py-16 text-[#2f3128] sm:px-8 lg:px-10">
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center">
        <p className="section-kicker">Оплата не почалася</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Не вдалося відкрити оплату
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#59564b]">
          Будь ласка, поверніться до варіантів участі і спробуйте ще раз.
        </p>
        <Link
          className="focus-ring mt-9 inline-flex h-12 w-fit items-center justify-center rounded-[8px] bg-[#5e7456] px-6 text-sm font-bold text-white transition hover:bg-[#4f6549]"
          href="/#prices"
        >
          До варіантів участі
        </Link>
      </section>
    </main>
  );
}
