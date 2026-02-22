import Image from "next/image";
import { Download } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/ScrollMotion";
import { ABOUT_ME_INFO, CV_DOWNLOAD, HIGHLIGHTS, PROFILE_SRC } from "@/data";
import AboutCard from "./AboutCard";

export default function About() {
  return (
    <section id="sobre-mi" className="relative overflow-hidden py-20 text-white">
      <Container className="relative z-10">
        <Reveal preset="blur-up" amount={0.3} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
            SOBRE MÍ
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white">Sobre mí</h2>
          <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
            Soy <span className="font-semibold text-white">Wilfredo</span>, un
            Desarrollador FullStack con{" "}
            <span className="font-semibold text-white">
              2 años de experiencia
            </span>{" "}
            en tecnologías como Next.js, NestJS, Tailwind CSS, Node.js,
            TypeScript, JavaScript y certificado en AWS.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-16">
          <Reveal
            preset="fade-right"
            amount={0.28}
            className="theme-surface-glass rounded-2xl p-6 backdrop-blur"
          >
            <div className="theme-accent-radial-soft relative aspect-4/5 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={PROFILE_SRC}
                alt="Wilfredo"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 360px, 80vw"
              />
            </div>
            <ul className="mt-6 space-y-3 text-[15px] text-white/85">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="theme-dot-accent-soft mt-2 h-1.5 w-1.5 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            preset="fade-left"
            amount={0.28}
            className="theme-surface-panel rounded-3xl p-7 backdrop-blur"
          >
            <div className="theme-text-accent flex items-center gap-3 text-sm">
              <span className="theme-dot-accent-soft h-2 w-2 rounded-full" />
              <span className="text-lg font-semibold">Mi enfoque de Trabajo</span>
            </div>

            <Stagger className="mt-5 space-y-4" stagger={0.08} amount={0.25}>
              {ABOUT_ME_INFO.map((card) => (
                <StaggerItem key={card.title} preset="pop">
                  <AboutCard
                    icon={card.icon}
                    copy={card.copy}
                    title={card.title}
                  />
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal preset="fade-up" delay={0.08}>
              <a
                href={CV_DOWNLOAD.href}
                download={CV_DOWNLOAD.fileName}
                className="theme-btn-primary mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold"
                aria-label="Descargar curriculum en PDF"
              >
                <span className="theme-icon-badge-solid grid h-8 w-8 place-items-center rounded-full">
                  <Download className="size-4" />
                </span>
                Descargar mi CV
              </a>
            </Reveal>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
