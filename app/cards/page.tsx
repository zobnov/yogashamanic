import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Подорож з картами через темну частину року",
  description:
    "12 індивідуальних розкладів із 12 різних колод карт від Молодика після Осіннього Рівнодення до Повні після Весняного Рівнодення.",
};

const cardDraws = [
  {
    date: "10 жовтня",
    moon: "Молодик",
    image: "/images/cards/card-02-hq.jpg",
    paragraphs: [
      "Звертаємося до Оракулу «Міська Ворона» і приймаємо підказки з розкладу «Три Воронячі Пера».",
    ],
  },
  {
    date: "26 жовтня",
    moon: "Остання Повня перед Самайном",
    image: "/images/cards/card-03-hq.jpg",
    paragraphs: [
      "Ми безстрашно дивимося у свої тіні і звертаємося до Таро Сестер Відьом, яке наповнене кельтськими міфами та магією.",
      "Розклад «Три Кельтських Королівства».",
    ],
  },
  {
    date: "9 листопада",
    moon: "Молодик",
    image: "/images/cards/card-04-hq.jpg",
    paragraphs: [
      "Осінь — це західний напрямок Шаманського Колеса і час, коли жінки приймають свою силу цілительки, провідниці та наставниці.",
      "Наступний оракул — Medicine Woman.",
      "Розклад «Колесо Медицини», який покаже:",
    ],
    list: [
      "які цілющі знання доступні тобі зараз;",
      "який талант готовий розкритися в тобі;",
      "яка тотемна тварина чи дух підтримає тебе на твоєму шляху;",
      "яка практика допоможе тобі пробудити саме твою силу фемінного Колеса Медицини.",
    ],
  },
  {
    date: "24 листопада",
    moon: "Повня",
    image: "/images/cards/card-05-hq.jpg",
    paragraphs: [
      "Ми знову заглядаємо у світ тіней з оракулом «Шлях Тіней». Розклад «Чотири Стихії».",
    ],
  },
  {
    date: "8 грудня",
    moon: "Останній Молодик перед Зимовим Сонцестоянням",
    image: "/images/cards/card-06-hq.jpg",
    paragraphs: [
      "У темряві, яка неминуче насувається, народиться Нове Сонце — світла точка надії і знання, що світло неодмінно повернеться.",
      "Оракул «Божественний Цирк» і розклад «Летюча Трапеція». Як ваш дух та креативність допоможуть вам подолати важкі обставини і злетіти над ними у сяйві святкових вогнів.",
    ],
  },
  {
    date: "23 грудня",
    moon: "Повня",
    image: "/images/cards/card-07-hq.jpg",
    paragraphs: [
      "Початок Північного сегменту Шаманського Колеса.",
      "Вартовою енергією цього сектора у Південній Америці є Колібрі, маленька пташка, яка долає величезні відстані, щоб досягти нектару квітів і втамувати свою жагу єдиним і найкращим чином, не погоджуючись ні на що інше.",
      "Оракул «Мудрість Колібрі» і розклад «Розправ Свої Крила».",
    ],
  },
  {
    date: "7 січня 2027",
    moon: "Молодик",
    image: "/images/cards/card-08-hq.jpg",
    paragraphs: [
      "Взимку нам потрібно світло. І воно приходить з Оракулом Білого Світла і розкладом «Від голосу его до мудрості Душі».",
    ],
  },
  {
    date: "22 січня 2027",
    moon: "Повня",
    image: "/images/cards/card-09-hq.jpg",
    paragraphs: [
      "На північному напрямку ми відпочиваємо і дозволяємо життю відбуватися з нами, ми бачимо сни і готуємося втілити мрії у реальність.",
      "Оракул Сон Шамана і розклад «Еволюція бажаного результату».",
    ],
  },
  {
    date: "6 лютого 2027",
    moon: "Молодик",
    image: "/images/cards/card-10-hq.jpg",
    paragraphs: [
      "До нас приходить богиня, що пройшла через темряву і увійшла в нове життя, нове буття.",
      "Оракул «Ісіда» і розклад «Пробудження Богині».",
    ],
  },
  {
    date: "20 лютого 2027",
    moon: "Повня",
    image: "/images/cards/card-11-hq.jpg",
    paragraphs: [
      "Ми не залишаємося осторонь від свята закоханих.",
      "Відверте та чуттєве Таро Сексуальної Магії і розклад «Бажання та страхи».",
    ],
  },
  {
    date: "8 березня 2027",
    moon: "Молодик",
    image: "/images/cards/card-12-hq.jpg",
    paragraphs: [
      "Від пристрасної колоди італійського автора до поміркованості героїнь Джейн Остін.",
      "Таро Джейн Остін і розклад «Між розумом та почуттями».",
    ],
  },
  {
    date: "22 березня 2027",
    moon: "Перша Повня після Весняного Рівнодення",
    image: "/images/cards/card-13-hq.jpg",
    paragraphs: [
      "Розклад на весь рік, що розгортається перед нами, з Таро Провидця.",
    ],
  },
] as const;

const mobileImagePositions = [
  "50% 43%",
  "50% 48%",
  "50% 48%",
  "50% 44%",
  "50% 45%",
  "50% 48%",
  "50% 45%",
  "50% 45%",
  "50% 47%",
  "50% 48%",
  "50% 46%",
  "50% 43%",
] as const;

const faqs = [
  {
    question: "Який формат подорожі?",
    answer:
      "Кожний Молодик та кожну Повню ти будеш отримувати розклад з колоди, яка резонує з енергіями цього періоду року. Всі карти будуть в особистих текстових чи аудіоповідомленнях у Telegram. Одна карта на день, щоб у тебе було достатньо часу для інтеграції глибоких і красивих значень. Після кожного розкладу можна задати одне питання чи витягти додаткову карту.",
    placeholder: false,
  },
  {
    question: "Чи є зустрічі або записи зустрічей?",
    answer:
      "Ні, це індивідуальні розклади. Комунікація проходить у Telegram.",
    placeholder: false,
  },
  {
    question: "А якщо я хочу більше спілкування та групу однодумців?",
    answer:
      "Можна долучитися до іншої подорожі, де ми проводимо зустрічі та ви знайдете коло спілкування.",
    linkHref: "/",
    linkLabel: "Ось тут деталі",
    placeholder: false,
  },
] as const;

const testimonials = [
  {
    quote:
      "Дякую від землі до місяця. Мені звучить так красиво й так… як має бути це насправді. Собі зі своєї колоди сьогодні другий день поспіль дістаю карту зі схожим малюнком. Співпадіння? Ні. Співналаштування та гучність звучання.",
    author: "Ольга Ч.",
  },
  {
    quote:
      "Ти завжди знаходиш дуже філігранні слова, які описують суть, і при цьому залишають прості пустоти. Дякую.",
    author: "Валя Т.",
  },
  {
    quote: "Унікально, в точку.",
    author: "Оля К.",
  },
  {
    quote:
      "Унікальне попадання по картах. Я так розумію, не тільки у мене, але й у решти жінок. Ти дуже потужний провідник чистої Істинної енергії.",
    author: "Аліна Г.",
  },
  {
    quote: "Боже, які слова! Які напуття! Яка мудрість! Благодарую! Казково.",
    author: "Аліна П.",
  },
] as const;

const timelineSeasons = [
  {
    start: 0,
    lineClass: "bg-[#b46d5b]",
    accentClass: "text-[#a45f4f]",
    markerClass: "border-[#b46d5b]",
  },
  {
    start: 4,
    lineClass: "bg-[#66695f]",
    accentClass: "text-[#5d6157]",
    markerClass: "border-[#66695f]",
  },
  {
    start: 10,
    lineClass: "bg-[#6f8667]",
    accentClass: "text-[#5e7456]",
    markerClass: "border-[#6f8667]",
  },
] as const;

export default function CardsPage() {
  return (
    <main className="overflow-hidden bg-[#fbf8f0] text-[#2f3128]">
      <section id="top" className="relative min-h-[90svh] bg-[#111331] text-white">
        <Image
          alt="Оракульна карта із символом Місяця на фіолетово-синій тканині"
          className="object-cover object-center md:object-cover md:object-center"
          fill
          priority
          sizes="(min-width: 768px) 68vw, 100vw"
          src="/images/hero-cards-electric-blue.jpg"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,17,55,0.82)_0%,rgba(15,17,55,0.62)_48%,rgba(15,17,55,0.18)_100%)] md:bg-[linear-gradient(90deg,rgba(15,17,55,0.78)_0%,rgba(15,17,55,0.56)_38%,rgba(15,17,55,0.16)_72%,rgba(15,17,55,0.02)_100%)]" />

        <div className="relative mx-auto flex min-h-[90svh] w-full max-w-7xl flex-col justify-between px-5 py-6 sm:px-8 lg:px-10">
          <nav className="flex items-center justify-between gap-4 text-sm text-white/82">
            <a className="focus-ring font-semibold" href="/">
              Йога і Шаманське Колесо
            </a>
            <a
              className="focus-ring rounded-full border border-white/35 px-4 py-2 font-medium transition hover:bg-white/12"
              href="#schedule"
            >
              Розклад
            </a>
          </nav>

          <div className="max-w-4xl pb-10 pt-24 sm:pb-16 lg:pt-32">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#eadfcb]">
              12 розкладів · 12 різних колод
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Подорож з картами через темну частину року
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
              Від першого Молодика після Осіннього Рівнодення до першої Повні
              після Весняного Рівнодення.
            </p>
            <form action="/api/checkout" className="mt-9" method="post">
              <input name="plan" type="hidden" value="cards" />
              <button
                className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#eadfcb] px-6 text-sm font-bold text-[#312d22] transition hover:bg-white sm:w-auto"
                type="submit"
              >
                Приєднатися до подорожі
              </button>
            </form>
          </div>

          <div className="grid gap-3 border-t border-white/20 py-5 text-sm text-white/80 sm:grid-cols-3">
            <p>Початок: 10 жовтня</p>
            <p>Завершення: 22 березня</p>
            <p className="flex flex-wrap items-baseline gap-x-2">
              <span>Вартість:</span>
              <span className="text-white/55 line-through">$444</span>
              <span className="font-semibold text-white">$324</span>
              <span>для перших 15 місць</span>
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
          <div>
            <p className="section-kicker">Подорож з картами</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Ми всі любимо карти
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#59564b]">
            <p>
              Недарма ми називаємо одним словом і географічні карти, і карти з
              підказками від Таро та оракулів, за допомогою яких ми краще бачимо
              важливі процеси у своєму та колективному полі.
            </p>
            <p>
              Медіапростір зараз перевантажений духовними знаннями та описами
              ритуалів, які обіцяють вивести нас до кращого майбутнього. Серед
              цього приголомшливого різномаїття багато насправді цінної і
              корисної інформації.
            </p>
            <p>
              Але справжнім скарбом стає вміння розпізнати своє і відкинути
              зайве, не розкидатися своїм часом та увагою.
            </p>
            <p className="text-xl font-medium leading-9 text-[#2f3128]">
              Запрошую тебе у подорож, яка триватиме півроку та надасть тобі 12
              індивідуальних розкладів із 12 різних колод карт.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eef1e7] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 border-y border-[#cdd4c2] py-8 md:grid-cols-3">
            <div>
              <p className="section-kicker">Початок</p>
              <p className="mt-3 text-xl font-semibold leading-8">
                Перший Молодик після Осіннього Рівнодення — 10 жовтня
              </p>
            </div>
            <div>
              <p className="section-kicker">Завершення</p>
              <p className="mt-3 text-xl font-semibold leading-8">
                Перша Повня після Весняного Рівнодення — 22 березня
              </p>
            </div>
            <div>
              <p className="section-kicker">Вартість</p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-2xl text-[#8a897f] line-through">$444</span>
                <span className="text-5xl font-semibold leading-none">$324</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-[#5e7456]">
                для перших 15 місць
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            <p className="leading-8 text-[#59564b]">
              Кожний Молодик та кожну Повню ти будеш отримувати розклад з
              колоди, яка резонує з енергіями цього періоду року.
            </p>
            <p className="leading-8 text-[#59564b]">
              Всі карти будуть в особистих текстових чи аудіоповідомленнях у
              Telegram. Одна карта на день, щоб у тебе було достатньо часу для
              інтеграції глибоких і красивих значень.
            </p>
            <p className="leading-8 text-[#59564b]">
              Після кожного розкладу можна задати одне питання чи витягти
              додаткову карту.
            </p>
          </div>
        </div>
      </section>

      <section id="schedule" className="px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">12 колод протягом півроку</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            Календар розкладів карт
          </h2>

          <div className="mt-12">
            {cardDraws.map((draw, index) => {
              const season =
                index < timelineSeasons[1].start
                  ? timelineSeasons[0]
                  : index < timelineSeasons[2].start
                    ? timelineSeasons[1]
                    : timelineSeasons[2];
              const isNewMoon = draw.moon.includes("Молодик");
              const imageOnRight = index % 2 === 1;

              return (
                <div key={draw.date}>
                  <article className="relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-4 border-t border-[#dfd2be] py-9 md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] md:items-center md:gap-x-8">
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 left-[13px] top-0 w-px md:left-1/2 md:-translate-x-1/2 ${season.lineClass}`}
                    />
                    <span
                      aria-label={isNewMoon ? "Молодик" : "Повня"}
                      className={`relative z-10 col-start-1 row-span-2 mt-2 size-4 justify-self-center rounded-full border-2 md:col-start-2 md:row-span-1 md:row-start-1 ${season.markerClass} ${
                        isNewMoon ? "bg-[#35372f]" : "bg-[#fbf8f0]"
                      }`}
                      role="img"
                    />

                    <figure
                      className={`relative col-start-2 row-start-1 aspect-[3/2] w-full max-w-[420px] justify-self-center overflow-hidden rounded-[8px] bg-[#efe7da] shadow-[0_16px_36px_rgba(71,61,49,0.13)] md:row-start-1 md:aspect-[3/4] md:w-[180px] ${
                        imageOnRight
                          ? "md:col-start-3 md:justify-self-start md:rotate-[1.5deg]"
                          : "md:col-start-1 md:justify-self-end md:-rotate-[1.5deg]"
                      }`}
                    >
                      <Image
                        alt={`Карти для розкладу ${draw.date}`}
                        className="object-cover"
                        fill
                        sizes="(max-width: 767px) 80vw, 180px"
                        src={draw.image}
                        style={{ objectPosition: mobileImagePositions[index] }}
                      />
                    </figure>

                    <div
                      className={`col-start-2 row-start-2 mt-6 max-w-[440px] md:row-start-1 md:mt-0 ${
                        imageOnRight
                          ? "md:col-start-1 md:justify-self-end"
                          : "md:col-start-3 md:justify-self-start"
                      }`}
                    >
                      <p className={`text-sm font-bold uppercase tracking-[0.14em] ${season.accentClass}`}>
                        {draw.date}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold leading-tight sm:text-3xl">
                        {draw.moon}
                      </h3>
                      <div className="mt-5 space-y-4 leading-8 text-[#59564b]">
                        {draw.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {"list" in draw ? (
                          <ul className="grid gap-2 pl-5">
                            {draw.list.map((item) => (
                              <li className="list-disc" key={item}>
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="price" className="bg-[#3d3f34] px-5 py-16 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#dfb8a7]">
              Вартість подорожі
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
              Подорож з картами через темну частину року
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <div className="flex items-baseline gap-3 lg:justify-end">
              <span className="text-3xl text-white/55 line-through">$444</span>
              <span className="text-7xl font-semibold leading-none">$324</span>
            </div>
            <p className="mt-3 text-sm font-semibold text-[#dfb8a7] lg:text-right">
              для перших 15 місць
            </p>
            <form action="/api/checkout" className="mt-7" method="post">
              <input name="plan" type="hidden" value="cards" />
              <button
                className="focus-ring inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#eadfcb] px-6 text-sm font-bold text-[#312d22] transition hover:bg-white sm:w-auto"
                type="submit"
              >
                Приєднатися до подорожі
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#f4ebdc] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">Відгуки</h2>
          <div className="mt-10 grid gap-x-12 gap-y-0 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                className="border-t border-[#d8c8b3] py-7"
                key={testimonial.author}
              >
                <p className="text-lg leading-8 text-[#424237]">“{testimonial.quote}”</p>
                <footer className="mt-4 text-sm font-bold text-[#8f6a50]">
                  {testimonial.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f0] px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Часті питання
          </h2>
          <div className="mt-8 divide-y divide-[#dfd2be] border-y border-[#dfd2be]">
            {faqs.map((faq) => (
              <details className="group py-5" key={faq.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold">
                  {faq.question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#b46d5b] text-[#b46d5b] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p
                  className={`max-w-2xl pt-4 leading-8 ${
                    faq.placeholder ? "text-[#9a664f]" : "text-[#59564b]"
                  }`}
                >
                  {faq.answer}
                  {"linkHref" in faq ? (
                    <>
                      {" "}
                      <a
                        className="font-semibold text-[#5e7456] underline decoration-[#9cac89] underline-offset-4 transition hover:text-[#4f6549]"
                        href={faq.linkHref}
                      >
                        {faq.linkLabel}
                      </a>
                    </>
                  ) : null}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
