"use client";
import styles from "./styles.module.css";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

export default function Contact() {
  const ContactSchema = z.object({
    name: z.string().min(1, { message: "Informe seu nome" }),
    email: z
      .string()
      .min(1, { message: "Informe seu email" })
      .email({ message: "Informe um email válido" }),
    message: z.string().min(1, { message: "Deixe sua mensagem" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });

  const submitEmail = (data: any) => {
    try {
      const apiEndpoint = "/api/email";

      fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((response) => {
          alert(response.message);
        })
        .catch((err) => {
          alert(err);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.contactContainer} id="contact">
      <div>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.description}>
          Se você gostaria de entrar em contato comigo, fique à vontade para
          fazê-lo através das opções abaixo. Estou sempre aberto para conversar,
          colaborar ou simplesmente trocar ideias.
        </p>
        <h3 className={styles.subtitle}>Minhas redes sociais</h3>
        <p className={styles.description}>
          Se preferir, você pode preencher o formulário ou entrar em contato
          pelas minhas redes sociais.
        </p>
        <div className={styles.socialMediaWrapper}>
          <Link
            href="https://github.com/stamatogabriel"
            target="__blank"
            aria-label="Github"
          >
            <AiFillGithub size={32} className={styles.socialIcon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gabriel-henrique-stamato-a5497780"
            target="__blank"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin size={32} className={styles.socialIcon} />
          </Link>
          <Link
            href="mailto:stamato7@gmail.com"
            target="__blank"
            aria-label="E-mail"
          >
            <MdEmail size={32} className={styles.socialIcon} />
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit(submitEmail)} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.inputLabel}>
            Nome
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={styles.input}
          />
          {!!errors?.name && (
            <span className={styles.inputError}>
              {(errors?.name?.message || "").toString()}
            </span>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.inputLabel}>
            E-mail
          </label>
          <input
            type="text"
            {...register("email")}
            id="email"
            className={styles.input}
          />
          {!!errors?.email && (
            <span className={styles.inputError}>
              {(errors?.email?.message || "").toString()}
            </span>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="message" className={styles.inputLabel}>
            Deixe sua mensagem
          </label>
          <textarea
            {...register("message")}
            id="message"
            className={styles.textarea}
          />
          {!!errors?.message && (
            <span className={styles.inputError}>
              {(errors?.message?.message || "").toString()}
            </span>
          )}
        </div>
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </section>
  );
}
