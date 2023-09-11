import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";

export default function Presentation() {
  const t = useTranslations("presentation");

  return (
    <section className={styles.presentationMain} id="home">
      <h2 className={styles.presentationTitle}>{t("title")}</h2>
      <p className={styles.presentationContent}>{t("content")}</p>
      <Link href="#" className={styles.presentationLink} aria-label="Project">
        {t("project")}
      </Link>
      <div className={styles.mouseScroll}>
        <div className={styles.mouse} />
      </div>
    </section>
  );
}
