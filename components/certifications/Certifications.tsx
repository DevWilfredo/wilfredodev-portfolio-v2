import Container from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/ScrollMotion";
import { CERTS } from "@/data";
import CertificationCard from "./CertificationCard";

export default function Certifications() {
  return (
    <section
      id="certificaciones"
      className="relative overflow-hidden py-24 text-white"
    >
      <Container className="relative z-10">
        <Reveal preset="blur-up" amount={0.25} className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
            Certificaciones &amp; Estudios
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Certificaciones &amp; Estudios
          </h2>
          <p className="mt-4 text-base text-white/85 sm:text-lg">
            Una muestra de mis certificaciones y educación en el campo del
            desarrollo y diseño.
          </p>
        </Reveal>

        <Stagger
          className="mt-12 grid gap-6 md:grid-cols-2"
          stagger={0.1}
          delayChildren={0.05}
          amount={0.28}
        >
          {CERTS.map((cert) => (
            <StaggerItem key={`${cert.year}-${cert.title}`} preset="pop">
              <CertificationCard cert={cert} />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
