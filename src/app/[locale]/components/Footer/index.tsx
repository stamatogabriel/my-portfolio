import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footerMain}>
      <section className={styles.about}>
        <div className={styles.aboutInfo}>
          <span className={styles.infoTitle}>Gabriel Stamato</span>
          <p className={styles.infoContent}>{t("content")}</p>
        </div>
        <div className={styles.socialMediaWrapper}>
          <span className={styles.socialMediaTitle}>{t("social")}</span>
          <Link
            href="https://github.com/stamatogabriel"
            target="__blank"
            aria-label="Github"
          >
            <AiFillGithub
              size={24}
              color="#fff"
              className={styles.socialIcon}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gabriel-henrique-stamato-a5497780"
            target="__blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin
              size={24}
              color="#fff"
              className={styles.socialIcon}
            />
          </Link>
          <Link
            href="mailto:stamato7@gmail.com"
            target="__blank"
            aria-label="E-mail"
          >
            <MdEmail size={24} color="#fff" className={styles.socialIcon} />
          </Link>
        </div>
      </section>
      <hr className={styles.divider} />
      <section className={styles.copyright}>
        <span className={styles.copyrightText}>
          © Copyright {new Date().getFullYear()}. Made by Gabriel Stamato
        </span>
      </section>
    </footer>
  );
}
