'use client'
import styles from "./styles.module.css";

import LocaleLink from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";
import { MdClose } from "react-icons/md";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean
  setOpen(open: boolean): void
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <div className={open ? styles.mobileWrapper : styles.mobileClose}>
      <button className={open ? styles.mobileMenuButton : styles.mobileNone} onClick={() => setOpen(false)} aria-label="Close">
        <MdClose size={30} />
      </button>
      <Link className={open ? styles.mobileLink : styles.mobileNone} href="#home" aria-label="Home">
        {t("home")}
      </Link>
      <Link className={open ? styles.mobileLink : styles.mobileNone} href="#about" aria-label="About">
        {t("about")}
      </Link>
      <Link className={open ? styles.mobileLink : styles.mobileNone} href="#" aria-label="Projects">
        {t("projects")}
      </Link>
      <Link className={open ? styles.mobileLink : styles.mobileNone} href="#" aria-label="Contact">
        {t("contact")}
      </Link>
      {locale === "pt" && (
        <LocaleLink href="/" locale="en" className={open ? styles.localeLink : styles.mobileNone} aria-label="English">
          English
        </LocaleLink>
      )}
      {locale === "en" && (
        <LocaleLink href="/" locale="pt" className={open ? styles.localeLink : styles.mobileNone} aria-label="Portuguese">
          Português
        </LocaleLink>
      )}
    </div>
  );
}
