import { Reveal } from "@/components/motion/ScrollMotion";
import ExperienceCard, { type ExperienceItem } from "./ExperienceCard";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative mt-14">
      <div className="theme-timeline-line pointer-events-none absolute left-1/2 top-0 h-full w-1 -translate-x-1/2" />
      <div className="space-y-10">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={`${item.year}-${item.title}`}
              className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]"
            >
              <div className={isLeft ? "md:pr-10 md:text-right" : "md:pr-0"}>
                {isLeft && (
                  <Reveal
                    preset="fade-right"
                    delay={0.03}
                    amount={0.3}
                    className="will-change-transform"
                  >
                    <ExperienceCard item={item} align="right" />
                  </Reveal>
                )}
              </div>

              <Reveal preset="zoom-in" amount={0.35}>
                <div className="relative flex flex-col items-center">
                  <span className="theme-year-badge rounded-full px-4 py-1 text-sm font-semibold">
                    {item.year}
                  </span>
                  <span className="theme-dot-accent mt-3 h-3 w-3 rounded-full" />
                </div>
              </Reveal>

              <div className={isLeft ? "md:pl-0" : "md:pl-10"}>
                {!isLeft && (
                  <Reveal
                    preset="fade-left"
                    delay={0.03}
                    amount={0.3}
                    className="will-change-transform"
                  >
                    <ExperienceCard item={item} align="left" />
                  </Reveal>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
