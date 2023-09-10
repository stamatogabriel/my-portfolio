import Image from "next/image";
import Link from "next/link";
import LocaleLink from "next-intl/link";
import { useLocale, useTranslations } from "next-intl";

import styles from "./styles.module.css";

export default function Header() {
  const t = useTranslations("header");
  const locale = useLocale();

  return (
    <header className={styles.header}>
      <section className={styles.headerMain}>
        <div className={styles.avatarWrapper}>
          <Image
            className={styles.avatar}
            src="https://media.licdn.com/dms/image/C4E03AQHQdKzbzt5mzA/profile-displayphoto-shrink_200_200/0/1628078390094?e=1700092800&v=beta&t=DMkoyz4d5IXRtDGyEQRZm0jQbW1uQg_yp2NYAPbQBvM"
            alt="Gabriel Stamato"
            width={50}
            height={50}
          />
          <h1 className={styles.authorName}>Gabriel Stamato</h1>
        </div>
        <div>
          <Link className={styles.headerLink} href="#">{t("home")}</Link>
          <Link className={styles.headerLink} href="#">{t("about")}</Link>
          <Link className={styles.headerLink} href="#">{t("projects")}</Link>
          <Link className={styles.headerLink} href="#">{t("contact")}</Link>
          {locale === "pt" && (
            <LocaleLink href="/" locale="en" className={styles.localeLink}>
              English
            </LocaleLink>
          )}
          {locale === "en" && (
            <LocaleLink href="/" locale="pt" className={styles.localeLink}>
              Português
            </LocaleLink>
          )}
        </div>
      </section>
    </header>
  );
}