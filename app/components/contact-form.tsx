"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });

    window.location.href = "/contact-success";
  }

  return (
    <form
      action="/__forms.html"
      className="rounded-[8px] border border-white/18 bg-white/10 p-5 sm:p-6"
      method="POST"
      name="contact"
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value="contact" />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-white/86">Ім'я</span>
          <input
            className="mt-2 h-12 w-full rounded-[8px] border border-white/24 bg-white px-4 text-[#2f3128] outline-none transition placeholder:text-[#8a867a] focus:border-[#eadfcb]"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-white/86">Email або телефон</span>
          <input
            className="mt-2 h-12 w-full rounded-[8px] border border-white/24 bg-white px-4 text-[#2f3128] outline-none transition placeholder:text-[#8a867a] focus:border-[#eadfcb]"
            name="contact"
            required
            type="text"
          />
        </label>
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-semibold text-white/86">Повідомлення</span>
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-[8px] border border-white/24 bg-white px-4 py-3 text-[#2f3128] outline-none transition placeholder:text-[#8a867a] focus:border-[#eadfcb]"
          name="message"
          required
        />
      </label>
      <button
        className="focus-ring mt-5 inline-flex h-12 w-full items-center justify-center rounded-[8px] bg-[#eadfcb] px-7 text-sm font-bold text-[#2f3128] transition hover:bg-white disabled:cursor-wait disabled:opacity-75 sm:w-auto"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Надсилаємо..." : "Надіслати"}
      </button>
    </form>
  );
}
