const chakraIntro = [
  "Так, у тобі є аж десять центрів сили.",
  "Десять доступів до різних аспектів твоєї сили.",
  "Знання про чакри є у кожній традиції шаманізму.",
  "Чакри з'єднують клітини та тканини нашого тіла з нашим персональним енергетичним полем та загальним квантовим полем.",
  "Їх можна порівняти з колесами транспорту, у якому ми рухаємося своїм життєвим шляхом.",
  "Кожна чакра зберігає свою історію — про довіру, творчість, внутрішню силу, любов, голос, інтуїцію та зв'язок із чимось більшим.",
];

const chakraShadow = [
  "Емоції та травматичний досвід, отримані нами у цьому житті, нашим родом та навіть у попередніх втіленнях, впливають на роботу чакр, затьмарюють їхнє сяйво і уповільнюють роботу цих енергетичних колес.",
  "Світ починає здаватися нам темним.",
  "Ми не можемо бути сміливими та креативними, ми залишаємося у режимі виживання і бачимо тільки загрози навколо нас, тривожимося про проблеми, не намагаючись знайти рішення.",
];

const chakraIntentions = [
  "Очистити чакри від історій, які подібно архаїчним нашаруванням гальмують рух твого транспортного засобу.",
  "Звільнити свою силу.",
  "Пробудити потенціал.",
  "Оживити тіло та відкрити розум.",
];

const telegramItems = [
  "додаткові практики;",
  "матеріали про кожен центр сили;",
  "інформація про камені, кольори, архетипи та шаманську символіку кожної чакри;",
  "мантри для гармонізації;",
  "відповіді на запитання;",
  "підтримка групи.",
];

const formatItems = [
  "Початок — 12 серпня 2026 року, на Молодик.",
  "Тривалість — 10 тижнів.",
  "Живі онлайн-зустрічі — 1 раз на тиждень.",
  "Закрита Telegram-спільнота.",
  "Записи всіх зустрічей.",
];

export default function TenJourneysPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f0] text-[#2f3128]">
      <section className="relative bg-[#2f3128] px-5 py-6 text-white sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,49,40,0.78)_0%,rgba(47,49,40,0.56)_44%,rgba(47,49,40,0.2)_100%),url('/images/hero-chakra-journeys.jpg')] bg-cover bg-center" />
        <div className="relative mx-auto flex min-h-[88svh] w-full max-w-7xl flex-col justify-between">
          <nav className="flex items-center justify-between gap-4 text-sm text-white/82">
            <a className="focus-ring font-semibold" href="/" aria-label="На головну сторінку">
              Йога і Шаманське Колесо
            </a>
            <a
              className="focus-ring rounded-full border border-white/35 px-4 py-2 font-medium transition hover:bg-white/12"
              href="#format"
            >
              Формат
            </a>
          </nav>

          <div className="max-w-4xl pb-10 pt-24 sm:pb-16 lg:pt-32">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#eadfcb]">
              Початок: 12 серпня 2026 року
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              10 подорожей до центрів сили
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
              У цей прекрасний збалансований стан, який може здаватися
              недосяжним, можна прийти у моїй програмі.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex h-12 items-center justify-center rounded-[8px] bg-[#eadfcb] px-6 text-sm font-bold text-[#312d22] transition hover:bg-white"
                href="#price"
              >
                Дізнатися вартість
              </a>
              <a
                className="focus-ring inline-flex h-12 items-center justify-center rounded-[8px] border border-white/45 px-6 text-sm font-bold text-white transition hover:bg-white/12"
                href="#program"
              >
                Що чекає на тебе
              </a>
            </div>
          </div>

          <div className="grid gap-3 border-t border-white/20 py-5 text-sm text-white/78 sm:grid-cols-3">
            <p>10 тижнів</p>
            <p>1 жива онлайн-зустріч на тиждень</p>
            <p>Закрита Telegram-спільнота</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="section-kicker">Центри сили</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Десять доступів до різних аспектів твоєї сили
            </h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-[#59564b]">
            {chakraIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebdc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {chakraShadow.map((paragraph) => (
            <article
              className="rounded-[8px] border border-[#dfd2be] bg-[#fbf8f0] p-5 leading-8 text-[#59564b] shadow-[0_18px_55px_rgba(91,75,57,0.08)]"
              key={paragraph}
            >
              {paragraph}
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="section-kicker">Намір подорожі</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Очистити, звільнити, пробудити
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {chakraIntentions.map((item) => (
              <div
                className="rounded-[8px] border border-[#dfd2be] bg-white/70 p-5 text-[#424237]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="bg-[#f8f1e7] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="section-kicker">Що чекає на тебе</p>
          <div className="mt-3 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Протягом десяти тижнів ми будемо зустрічатися один раз на тиждень
            </h2>
            <div className="space-y-5 text-base leading-8 text-[#59564b]">
              <p>
                Протягом десяти тижнів ми будемо зустрічатися один раз на
                тиждень і працювати з однією чакрою у шаманській подорожі.
              </p>
              <p>
                Між зустрічами ми спілкуємося та отримуємо багато корисної
                інформації у закритій Telegram-спільноті.
              </p>
              <p>
                Це буде простір, у якому можна рухатися у власному темпі,
                спостерігати за змінами й поступово повертатися до себе.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[8px] border border-[#dfd2be] bg-white/68 p-5 shadow-[0_18px_55px_rgba(91,75,57,0.08)] sm:p-7">
            <h3 className="text-2xl font-semibold">Там на тебе чекатимуть:</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {telegramItems.map((item) => (
                <div className="rounded-[8px] bg-[#fbf8f0] p-4 text-[#424237]" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker">Особливий подарунок для учасниць</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Твоя Тотемна Тварина
            </h2>
          </div>
          <p className="rounded-[8px] border border-[#dfd2be] bg-[#f4ebdc] p-6 text-base leading-8 text-[#59564b]">
            Якщо ти приєднаєшся до програми зараз, ще до її початку, ти одразу
            отримаєш свій повний індивідуальний розклад «Твоя Тотемна Тварина»
            із семи карт.
          </p>
        </div>
      </section>

      <section id="format" className="bg-[#2f3128] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-start">
          <div>
            <p className="section-kicker text-[#dfb8a7]">Формат</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              10 тижнів живих зустрічей і підтримки спільноти
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {formatItems.map((item) => (
                <div className="rounded-[8px] border border-white/14 bg-white/8 p-4 text-white/82" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <aside
            id="price"
            className="rounded-[8px] border border-[#eadfcb]/35 bg-[#fbf8f0] p-6 text-[#2f3128] shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
          >
            <p className="section-kicker">Вартість участі</p>
            <p className="mt-4 text-6xl font-semibold leading-none">$81</p>
            <p className="mt-6 text-base leading-8 text-[#59564b]">І ще один важливий момент.</p>
            <p className="mt-4 text-base leading-8 text-[#59564b]">
              Якщо до, під час або після завершення цієї подорожі ти відчуєш, що
              хочеш продовжити шлях у моїй річній програмі «Йога і Шаманське
              Коло», усі $81 будуть зараховані в оплату річної участі.
            </p>
            <form action="/api/checkout" className="mt-7" method="post">
              <input name="plan" type="hidden" value="ten-journeys" />
              <button
                className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#5e7456] px-6 text-sm font-bold text-white transition hover:bg-[#4f6549]"
                type="submit"
              >
                Приєднатися до подорожі
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}
