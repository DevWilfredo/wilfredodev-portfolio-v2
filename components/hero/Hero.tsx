import Image from "next/image";
import Container from "@/components/layout/Container";
import SmoothHashLink from "@/components/layout/SmoothHashLink";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/ScrollMotion";

const MARK_SRC = "/profile.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-20 text-white sm:pt-24"
    >
      <Container className="relative z-10 flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center gap-12 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
          <Stagger
            className="max-w-xl text-center lg:text-left"
            stagger={0.11}
            delayChildren={0.1}
            amount={0.35}
          >
            <StaggerItem preset="fade-right">
              <h1 className="text-4xl font-medium text-white sm:text-5xl">
                Hola, soy
              </h1>
            </StaggerItem>
            <StaggerItem preset="blur-up">
              <h1 className="theme-hero-title mt-3 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Wilfredo
              </h1>
            </StaggerItem>
            <StaggerItem preset="fade-up">
              <p className="theme-text-accent mt-5 text-xl font-medium">
                FullStack Developer certificado en AWS
              </p>
            </StaggerItem>
            <StaggerItem preset="fade-up">
              <p className="mt-4 text-lg text-white/70 sm:text-xl">
                Creo experiencias digitales modernas y funcionales con enfoque
                en diseño, performance y claridad visual.
              </p>
            </StaggerItem>
            <StaggerItem preset="pop">
              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <SmoothHashLink
                  href="#proyectos"
                  className="theme-btn-primary-hero relative rounded-full px-6 py-3 text-sm font-semibold"
                >
                  <span className="theme-gloss-radial pointer-events-none absolute inset-0 rounded-full" />
                  <span className="relative">Ver proyectos</span>
                </SmoothHashLink>
                <SmoothHashLink
                  href="#contacto"
                  className="theme-btn-secondary rounded-full px-6 py-3 text-sm font-semibold"
                >
                  Contacto
                </SmoothHashLink>
              </div>
            </StaggerItem>
          </Stagger>

          <Reveal
            preset="zoom-in"
            duration={0.8}
            delay={0.08}
            amount={0.35}
            className="relative flex w-full max-w-md items-center justify-center lg:max-w-lg"
          >
            <div className="theme-blob-accent absolute inset-0 rounded-full blur-[120px]" />
            <Image
              src={MARK_SRC}
              alt="Monograma W"
              width={480}
              height={320}
              className="theme-drop-shadow-accent relative z-10 w-full"
              priority
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
