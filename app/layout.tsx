import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Йога і Шаманське Колесо",
  description: "Річна онлайн-програма йоги, медитацій і практик Шаманського Колеса.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
