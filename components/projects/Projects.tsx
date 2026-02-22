import Container from "@/components/layout/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/ScrollMotion";
import { PROJECTS} from "@/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden py-24 text-white">
      <Container className="relative z-10">
        <Reveal preset="blur-up" amount={0.25} className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Proyectos
          </h2>
          <p className="mt-4 text-base text-white/85 sm:text-lg">
            Conoce algunos de los proyectos en los que he trabajado y que
            demuestran mis habilidades y experiencia en desarrollo y diseño.
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid gap-6 md:grid-cols-3"
          stagger={0.12}
          delayChildren={0.04}
          amount={0.3}
        >
          {PROJECTS.map((project) => (
            <StaggerItem key={project.title} preset="pop" className="h-full">
              <ProjectCard
                title={project.title}
                copy={project.copy}
                tags={project.tags}
                featuredImage={project.featuredImage}
                projectIcon={project.projectIcon}
                preview={project.preview}
                github={project.github}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
