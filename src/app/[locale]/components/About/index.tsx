import Link from "next/link";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "NodeJs",
    "NestJs",
    "Express",
    "SQL",
    "NoSQL",
    "Docker",
    "AWS Services",
    "ReactJs",
    "ReactNative",
    "PHP",
    "GoLang",
    "Java",
    "Kafka",
    "RabbitMq",
    "VueJs",
  ];
  return (
    <section className={styles.aboutMain}>
      <h2 className={styles.title}>{t("title")}</h2>
      <p className={styles.subtitle}>{t("subtitle")}</p>
      <section className={styles.aboutGrid}>
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>{t('knowMe')}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("content") }} className={styles.content} />
          <Link href="#" className={styles.contact}>{t('contact')}</Link>
        </div>
        <div className={styles.contentWrapper}>
          <h3 className={styles.contentTitle}>{t('skills')}</h3>
          <div className={styles.bulletWrapper}>
            {skills.map((item) => (
              <span className={styles.bullet} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
