import Container from "@/components/layout/Container";
import { Reveal } from "@/components/motion/ScrollMotion";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import { EXPERIENCE_INFO } from "@/data";

export default function Experience() {
  return (
    <section id="experiencia" className="relative overflow-hidden py-24 text-white">
      <Container className="relative z-10">
        <Reveal preset="blur-up" amount={0.25} className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
            Experiencia
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Experiencia
          </h2>
          <p className="mt-4 text-base text-white/85 sm:text-lg">
            Un resumen de mi trayectoria laboral y mi evolución profesional en
            el mundo del desarrollo y diseño.
          </p>
        </Reveal>
        <ExperienceTimeline items={EXPERIENCE_INFO} />
      </Container>
    </section>
  );
}
