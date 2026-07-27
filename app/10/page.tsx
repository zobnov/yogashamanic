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
  "Світ починає здаватися нам темним. Ми не можемо бути сміливими та креативними, залишаємося у режимі виживання, бачимо тільки загрози навколо нас і тривожимося про проблеми, не намагаючись знайти рішення.",
];

const chakraIntentions = [
  "очистити чакри від історій, які подібно архаїчним нашаруванням гальмують рух твого транспортного засобу;",
  "звільнити свою силу;",
  "пробудити потенціал;",
  "оживити тіло та відкрити розум.",
];

const telegramItems = [
  "Додаткові практики",
  "Матеріали про кожен центр сили",
  "Інформація про камені, кольори, архетипи та шаманську символіку кожної чакри",
  "Мантри для гармонізації",
  "Відповіді на запитання",
  "Підтримка групи",
];

const formatItems = [
  "Початок — 12 серпня 2026 року, на Молодик.",
  "Тривалість — 10 тижнів.",
  "Живі онлайн-зустрічі — 1 раз на тиждень.",
  "Закрита Telegram-спільнота.",
  "Записи всіх зустрічей.",
];

const faqs = [
  {
    question: "Чому подорожей 10, якщо чакр 7?",
    answer: [
      "Система семи чакр походить з індуїстської традиції. У шаманській традиції, з якою ми будемо працювати, розглядають дев'ять центрів сили.",
      "Кожна з перших дев'яти зустрічей присвячена окремому центру, а десята зустріч — це інтеграція всього пройденого досвіду, гармонізація всіх центрів сили та завершення подорожі.",
    ],
  },
  {
    question: "Чи потрібен досвід у йозі або шаманських практиках?",
    answer: [
      "Ні.",
      "Програма створена так, щоб у ній було комфортно і тим, хто лише починає знайомство з практиками, і тим, хто вже давно займається йогою чи медитацією.",
      "Усі практики пояснюються крок за кроком.",
    ],
  },
  {
    question: "Що, якщо я пропущу зустріч?",
    answer: [
      "Усі зустрічі записуються.",
      "Ти зможеш пройти практику у зручний для себе час і поставити запитання у Telegram-спільноті.",
    ],
  },
  {
    question: "Чи це релігійна програма?",
    answer: [
      "Ні.",
      "Програма не належить до жодної релігії.",
      "Ми працюємо з тілом, увагою, символами, архетипами, шаманськими подорожами та практиками, які допомагають глибше пізнати себе.",
      "Кожна учасниця може проживати цей досвід відповідно до власних переконань.",
    ],
  },
  {
    question: "Що таке шаманська подорож?",
    answer: [
      "Це практика глибокої внутрішньої роботи у стані трансу під ритм шаманського бубна.",
      "Під час неї людина не втрачає свідомість і не перебуває під чиїмось контролем. Навпаки — вона залишається уважною до своїх внутрішніх образів, відчуттів і символів, які можуть стати джерелом нових усвідомлень.",
    ],
  },
  {
    question: "Що я отримаю одразу після оплати?",
    answer: ["Одразу після оплати ти отримаєш:"],
    list: [
      "доступ до Telegram-спільноти;",
      "індивідуальний розклад «Твоя Тотемна Тварина» із семи карт та його тлумачення;",
      "рекомендації щодо підготовки до першої подорожі.",
    ],
  },
  {
    question: "Якщо я зрозумію, що хочу продовжити навчання?",
    answer: [
      "У будь-який момент — до початку, під час або після завершення цієї програми — ти зможеш перейти до моєї річної програми «Йога і Шаманське Коло».",
      "Усі $81, сплачені за цю подорож, будуть повністю зараховані у вартість річної участі.",
    ],
  },
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
              <form action="/api/checkout" method="post">
                <input name="plan" type="hidden" value="ten-journeys" />
                <button
                  className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#eadfcb] px-6 text-sm font-bold text-[#312d22] transition hover:bg-white sm:w-auto"
                  type="submit"
                >
                  Приєднатися до подорожі
                </button>
              </form>
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
            <p className="section-kicker">Про центри сили</p>
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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="section-kicker">Коли колеса сповільнюються</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Що впливає на роботу чакр
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#59564b]">
            {chakraShadow.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
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
          <div>
            <p className="text-base leading-8 text-[#59564b]">
              У програмі ми будемо рухатися до того, щоб:
            </p>
            <ul className="mt-6 grid gap-3">
              {chakraIntentions.map((item) => (
                <li
                  className="list-none rounded-[8px] border border-[#dfd2be] bg-white/70 p-5 text-[#424237]"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-8 text-[#59564b]">
              У цей прекрасний збалансований стан, який може здаватися
              недосяжним, можна прийти у моїй програмі.
            </p>
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

      <section className="bg-[#fbf8f0] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f3128] sm:text-4xl">
            Питання та відповіді
          </h2>
          <div className="mt-8 divide-y divide-[#dfd2be] border-y border-[#dfd2be]">
            {faqs.map((faq) => (
              <details className="group py-5" key={faq.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#2f3128]">
                  {faq.question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#b46d5b] text-[#b46d5b] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="max-w-2xl space-y-4 pt-4 leading-8 text-[#59564b]">
                  {faq.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {faq.list ? (
                    <ul className="grid gap-2 pt-1">
                      {faq.list.map((item) => (
                        <li className="ml-5 list-disc" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
