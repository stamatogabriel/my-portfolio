import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {notFound} from 'next/navigation';
import {useLocale} from 'next-intl';

import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: any
}) {
  const locale = useLocale()

  if (params.locale !== locale) notFound()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}