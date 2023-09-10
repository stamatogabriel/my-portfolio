'use client'
import styles from "./styles.module.css";

import LocaleLink from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";

interface MobileMenuProps {
  open: boolean
  setOpen(open: boolean): void
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <div className={open ? styles.mobileWrapper : styles.mobileClose}>
      <button className={open ? styles.mobileMenuButton : styles.mobileNone} onClick={() => setOpen(false)}>
        <span className="material-symbols-outlined">close</span>
      </button>
      <button className={open ? styles.mobileLink : styles.mobileNone} onClick={() => ({})}>
        {t("home")}
      </button>
      <button className={open ? styles.mobileLink : styles.mobileNone} onClick={() => ({})}>
        {t("about")}
      </button>
      <button className={open ? styles.mobileLink : styles.mobileNone} onClick={() => ({})}>
        {t("projects")}
      </button>
      <button className={open ? styles.mobileLink : styles.mobileNone} onClick={() => ({})}>
        {t("contact")}
      </button>
      {locale === "pt" && (
        <LocaleLink href="/" locale="en" className={open ? styles.localeLink : styles.mobileNone}>
          English
        </LocaleLink>
      )}
      {locale === "en" && (
        <LocaleLink href="/" locale="pt" className={open ? styles.localeLink : styles.mobileNone}>
          Português
        </LocaleLink>
      )}
    </div>
  );
}
