/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import "material-symbols";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Stamato",
  description:
    "Tech Lead and Fullstack Developer, specialized in JavaScript, with expertise in PHP, Golang, and Java. I possess deep knowledge in microservices architecture and master the AWS ecosystem to drive your project forward.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const locale = useLocale();

  if (params.locale !== locale) notFound();

  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
