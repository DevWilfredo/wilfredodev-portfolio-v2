export type ExperienceItem = {
  year: string;
  title: string;
  org: string;
  copy: string;
};

type ExperienceCardProps = {
  item: ExperienceItem;
  align: "left" | "right";
};

export default function ExperienceCard({
  item,
  align,
}: ExperienceCardProps) {
  return (
    <div
      className={`theme-surface-card rounded-2xl p-5 ${
        align === "right" ? "md:ml-auto" : ""
      }`}
    >
      <div className="text-lg font-semibold text-white">
        {item.title} <span className="theme-text-accent-strong">@ {item.org}</span>
      </div>
      <p className="mt-2 text-base text-white/85">{item.copy}</p>
    </div>
  );
}
