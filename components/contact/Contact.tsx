"use client";

import { useState, type FormEvent } from "react";
import Container from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/ScrollMotion";
import { SOCIAL_LINKS } from "@/data";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

type SubmitState = "idle" | "loading" | "success" | "error";

const INITIAL_FORM: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormValues>(INITIAL_FORM);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSubmitState("error");
      setFeedback("Completa nombre, correo y mensaje.");
      return;
    }

    setSubmitState("loading");
    setFeedback("Enviando mensaje...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(
          result.error
            ? `${result.message ?? "No se pudo enviar el mensaje."} (${result.error})`
            : result.message ?? "No se pudo enviar el mensaje."
        );
      }

      setSubmitState("success");
      setFeedback(result.message ?? "Mensaje enviado correctamente.");
      setForm(INITIAL_FORM);
    } catch (error) {
      setSubmitState("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el mensaje."
      );
    }
  }

  return (
    <section id="contacto" className="relative overflow-hidden py-24 text-white">
      <Container className="relative z-10">
        <Reveal
          preset="blur-up"
          amount={0.25}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            ¿Listo para trabajar juntos?
          </h2>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Si tienes un proyecto en mente o necesitas servicios de desarrollo y
            diseño, estaré encantado de conectar contigo.
          </p>
        </Reveal>

        <Reveal
          preset="zoom-in"
          amount={0.28}
          className="theme-surface-panel-strong mt-10 rounded-3xl p-6 backdrop-blur sm:p-8"
        >
          <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
            <Stagger className="grid gap-5" stagger={0.08} amount={0.25}>
              <StaggerItem preset="fade-up">
                <label className="block text-sm text-white/70">
                  Nombre
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    className="theme-input mt-2 w-full rounded-lg px-4 py-3 text-base"
                    placeholder="Tu nombre"
                    disabled={submitState === "loading"}
                    required
                  />
                </label>
              </StaggerItem>

              <StaggerItem preset="fade-up">
                <label className="block text-sm text-white/70">
                  Correo Electrónico
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, email: event.target.value }))
                    }
                    className="theme-input mt-2 w-full rounded-lg px-4 py-3 text-base"
                    placeholder="tu@email.com"
                    disabled={submitState === "loading"}
                    required
                  />
                </label>
              </StaggerItem>

              <StaggerItem preset="fade-up">
                <label className="block text-sm text-white/70">
                  Mensaje
                  <textarea
                    rows={5}
                    name="message"
                    value={form.message}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        message: event.target.value,
                      }))
                    }
                    className="theme-input mt-2 w-full rounded-lg px-4 py-3 text-base"
                    placeholder="Cuéntame sobre tu proyecto"
                    disabled={submitState === "loading"}
                    required
                  />
                </label>
              </StaggerItem>

              <StaggerItem preset="pop">
                <div className="flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="theme-btn-primary mx-auto mt-2 rounded-full px-8 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitState === "loading" ? "Enviando..." : "Enviar mensaje"}
                  </button>

                  <p
                    aria-live="polite"
                    className={`text-center text-sm ${
                      submitState === "error"
                        ? "text-red-200"
                        : submitState === "success"
                          ? "text-emerald-200"
                          : "text-white/60"
                    }`}
                  >
                    {feedback}
                  </p>
                </div>
              </StaggerItem>
            </Stagger>
          </form>

          <Stagger
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            stagger={0.08}
            delayChildren={0.05}
            amount={0.3}
          >
            {SOCIAL_LINKS.map((link) => (
              <StaggerItem key={link.label} preset="pop">
                <a
                  href={link.href}
                  className="theme-social-pill inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
                  aria-label={link.label}
                >
                  <span className="grid h-5 w-5 place-items-center">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </Container>
    </section>
  );
}
