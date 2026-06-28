const wheelSegments = [
  {
    direction: "Південь",
    symbol: "Змія",
    season: "Літо",
    dates: "29 червня 2026 - 21 вересня 2026",
    text: "Скинути стару шкіру, зустріти вогонь, активність і рух до цілі.",
  },
  {
    direction: "Захід",
    symbol: "Ягуар",
    season: "Осінь",
    dates: "22 вересня 2026 - 22 грудня 2026",
    text: "Тіні, зв'язки з домом і родом, прохід через темряву та вихід у майстерність.",
  },
  {
    direction: "Північ",
    symbol: "Колібрі",
    season: "Зима",
    dates: "23 грудня 2026 - 20 березня 2027",
    text: "Поклик Духа до великої подорожі, сакральна пауза і внутрішнє слухання.",
  },
  {
    direction: "Схід",
    symbol: "Орел",
    season: "Весна",
    dates: "21 березня 2027 - 21 червня 2027",
    text: "Нове бачення, нові перспективи, натхнення та народження нового життя.",
  },
];

const includeGroups = [
  {
    title: "Кожен тиждень",
    items: [
      "Шаманська Йога, 1-1,5 години",
      "Йога Денс 45 хв. - 1 година",
      "Зустріч про енергії часу",
      "Аудіо медитація",
      "Практики",
    ],
  },
  {
    title: "Кожен день",
    items: ["короткі «пазлики знання» без перенавантаження"],
  },
  {
    title: "На кожні Молодик та Повню",
    items: [
      "Зустрічі і група На рівних з Вогняною церемонією у фіналі",
      "Карта Оракулу чи Таро",
      "Три дні до повні, день повні, три дні після повні - медитуємо з мантрами",
    ],
  },
  {
    title: "На протязі річної подорожі Колесом року",
    items: [
      "8 метафоричних подорожей",
      "9 шаманських тріпів",
      "10 зустрічей для балансування чакр",
      "Містерії «Зустріч з Богинею»",
    ],
  },
  {
    title: "Спільнота",
    items: ["Спільнота однодумців у Telegram"],
  },
];

const pricing = [
  {
    id: "summer",
    label: "Літній сектор",
    period: "3 місяці",
    price: "$81",
    featured: true,
  },
  {
    id: "summer-autumn",
    label: "Літо + Осінь",
    period: "6 місяців",
    price: "$114",
  },
  {
    id: "full-circle",
    label: "Повне Коло Року",
    period: "12 місяців",
    price: "$144",
  },
];

const audience = [
  "Для тих, хто хоче відокремити найважливіше для себе і налаштувати внутрішній компас.",
  "Для тих, хто досліджує час і хоче рухатися до цілей відповідно до енергій року та власної природи.",
  "Для тих, хто прагне більше присутності у тілі та духовної практики, що не відриває від життя.",
  "Для практиків йоги, психологів, дослідників символів, архетипів і шаманських традицій.",
];

const faqs = [
  {
    question: "Коли починається програма?",
    answer: "Старт заплановано на 30 червня 2026 року, на першу Повню після літнього сонцестояння.",
  },
  {
    question: "Чи можна приєднатися без досвіду йоги?",
    answer: "Так. Практики можна адаптувати під свій стан і темп. Якщо у вас є медичні обмеження, додайте тут власну примітку або рекомендацію.",
  },
  {
    question: "Де проходять зустрічі?",
    answer: "Програма проходить онлайн. Додайте тут платформу, формат записів і деталі доступу.",
  },
  {
    question: "Що робити, якщо я пропущу зустріч?",
    answer: "Додайте тут ваші правила щодо записів, матеріалів і підтримки в Telegram.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section id="top" className="hero-image relative min-h-[92svh] text-white">
        <div className="mx-auto flex min-h-[92svh] w-full max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4 text-sm text-white/82">
            <a className="focus-ring font-semibold" href="#top" aria-label="Йога і Шаманське Колесо">
              Йога і Шаманське Колесо
            </a>
            <a
              className="focus-ring rounded-full border border-white/35 px-4 py-2 font-medium transition hover:bg-white/12"
              href="#prices"
            >
              Варіанти участі
            </a>
          </nav>

          <div className="max-w-3xl pb-10 pt-24 sm:pb-16 lg:pt-32">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#eadfcb]">
              Річна онлайн-програма
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Йога і Шаманське Колесо
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/86 sm:text-xl">
              Знання і практики для річної подорожі через тіло, цикли природи,
              архетипи, медитації та власний красивий ритм.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <form action="/api/checkout" method="post">
                <input name="plan" type="hidden" value="full-circle" />
                <button
                  className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#eadfcb] px-6 text-sm font-bold text-[#312d22] transition hover:bg-white sm:w-auto"
                  type="submit"
                >
                  Приєднатися до кола
                </button>
              </form>
              <a
                className="focus-ring inline-flex h-12 items-center justify-center rounded-[8px] border border-white/45 px-6 text-sm font-bold text-white transition hover:bg-white/12"
                href="#program"
              >
                Дивитися програму
              </a>
            </div>
          </div>

          <div className="grid gap-3 border-t border-white/20 pt-5 text-sm text-white/78 sm:grid-cols-3">
            <p>Початок: 30 червня 2026</p>
            <p>Повний цикл: літо 2026 - літо 2027</p>
            <p>Йога, медитації, шаманські практики</p>
          </div>
        </div>
      </section>

      <section id="program" className="bg-[#fbf8f0] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="section-kicker">Річне коло</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f3128] sm:text-4xl">
              Подорож через сезони, тіло і власний досвід
            </h2>
            <p className="mt-5 text-base leading-8 text-[#59564b]">
              На першу Повню після літнього сонцестояння ми починаємо річну
              подорож Шаманським Колесом. Будемо спиратися на колесо медицини
              Південної Америки, досліджувати нюанси інших традицій і
              встановлювати цілі на кожний сектор Колеса.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {wheelSegments.map((segment) => (
              <article
                className="rounded-[8px] border border-[#dfd2be] bg-white/62 p-5 shadow-[0_18px_55px_rgba(91,75,57,0.08)]"
                key={segment.direction}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b46d5b]">
                  {segment.direction}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[#2f3128]">
                  {segment.season}: {segment.symbol}
                </h3>
                <p className="mt-2 text-sm font-medium text-[#5e7456]">{segment.dates}</p>
                <p className="mt-4 leading-7 text-[#59564b]">{segment.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef1e7] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="section-kicker">Що входить</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f3128] sm:text-4xl">
              Практики, знання і жива підтримка протягом року
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-[1.12fr_0.88fr_1.12fr]">
            {includeGroups.map((group) => (
              <article
                className="rounded-[8px] border border-[#d4d9c8] bg-[#fbf8f0] p-5 text-[#424237]"
                key={group.title}
              >
                <span className="mb-5 block h-1.5 w-10 rounded-full bg-[#c9958e]" />
                <h3 className="text-lg font-semibold text-[#2f3128]">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li className="leading-7" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f0] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="section-kicker">Для кого</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f3128] sm:text-4xl">
              Для тих, кого кличе шлях Кола
            </h2>
            <p className="mt-5 text-base leading-8 text-[#59564b]">
              Це простір для людей, які хочуть проживати духовну і фізичну
              практику не окремо від життя, а глибше всередині нього.
            </p>
          </div>
          <div className="space-y-3">
            {audience.map((item) => (
              <p className="rounded-[8px] border-l-4 border-[#8f6a50] bg-[#f4ebdc] p-5 leading-7 text-[#424237]" key={item}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="bg-[#3d3f34] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#dfb8a7]">Варіанти участі</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Оберіть свій темп входу в річну подорож
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pricing.map((plan) => (
              <article
                className={`rounded-[8px] border p-6 ${
                  plan.featured
                    ? "border-[#dfb8a7] bg-[#fbf8f0] text-[#2f3128]"
                    : "border-white/16 bg-white/8 text-white"
                }`}
                key={plan.label}
              >
                <h3 className="text-lg font-semibold">{plan.label}</h3>
                <p className={`mt-2 text-sm font-medium ${plan.featured ? "text-[#5e7456]" : "text-white/72"}`}>
                  {plan.period}
                </p>
                <p className="mt-5 text-5xl font-semibold">{plan.price}</p>
                <form action="/api/checkout" method="post">
                  <input name="plan" type="hidden" value={plan.id} />
                  <button
                    className={`focus-ring mt-7 inline-flex h-11 w-full items-center justify-center rounded-[8px] text-sm font-bold transition ${
                      plan.featured
                        ? "bg-[#5e7456] text-white hover:bg-[#4f6549]"
                        : "bg-white text-[#2f3128] hover:bg-[#eadfcb]"
                    }`}
                    type="submit"
                  >
                    Обрати
                  </button>
                </form>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe3d5] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div className="aspect-square max-w-sm rounded-full border border-[#c9958e]/50 p-6">
            <div className="flex h-full items-center justify-center rounded-full border border-[#8f6a50]/45 bg-[#fbf8f0] text-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b46d5b]">Повня</p>
                <p className="mt-3 text-4xl font-semibold text-[#2f3128]">7 днів</p>
                <p className="mx-auto mt-2 max-w-40 text-sm leading-6 text-[#59564b]">
                  три дні до, день Повні, три дні після
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="section-kicker">Обітниця медитації</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f3128] sm:text-4xl">
              Повня як спільна точка присутності
            </h2>
            <p className="mt-5 text-base leading-8 text-[#59564b]">
              Три дні до Повні, у день Повні та три дні після ми медитуємо з
              мантрами, тримаючи спільну увагу, намір і м'яку дисципліну.
              Цей розділ можна доповнити вашим особистим текстом обітниці.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f0] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="section-kicker">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#2f3128] sm:text-4xl">
            Питання перед початком
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
                <p className="max-w-2xl pt-4 leading-8 text-[#59564b]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#5e7456] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#eadfcb]">Контакт</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
              Якщо ви відчуваєте поклик, напишіть мені для участі
            </h2>
            <p className="mt-5 text-base leading-8 text-white/82">
              Замініть цей блок на ваш Telegram, Instagram, email або форму заявки.
              Структура вже готова для підключення реального контакту.
            </p>
          </div>
          <a
            className="focus-ring inline-flex h-12 items-center justify-center rounded-[8px] bg-[#eadfcb] px-7 text-sm font-bold text-[#2f3128] transition hover:bg-white"
            href="mailto:ksanazobnova@gmail.com"
          >
            Написати
          </a>
        </div>
      </section>
    </main>
  );
}
