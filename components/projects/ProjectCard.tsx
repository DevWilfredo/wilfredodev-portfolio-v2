import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHub } from "@/components/icons/Github";
import type { ProjectIconImage } from "@/data";

type TagsType = {
    label: string;
    icon: React.ReactNode;
}

type ProjectCardProps = {
    title: string;
    tags: TagsType[];
    copy: string;
    featuredImage: string;
    projectIcon: ProjectIconImage;
    preview: string;
    github: string;
}


export default function ProjectCard({ title, tags, copy, featuredImage, projectIcon, preview, github }: ProjectCardProps) {
    return (
        <article
            className="theme-surface-card flex h-full flex-col rounded-2xl p-4"
        >
            <div className="theme-media-frame relative mb-4 aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                    src={featuredImage}
                    alt={title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="theme-drop-shadow-accent relative z-10 h-full w-full object-cover object-top"
                />
            </div>
            <div className="flex min-h-12 items-start gap-3">
                <div className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/35 bg-white/95 shadow-[0_8px_18px_rgba(0,0,0,0.28)] ring-1 ring-blue-200/20">
                    <Image
                        src={projectIcon.src}
                        alt={projectIcon.alt}
                        fill
                        sizes="40px"
                        className={projectIcon.imageClassName ?? "object-contain p-1"}
                    />
                </div>
                <h3 className="pt-1 text-lg font-semibold leading-tight text-white">
                    {title}
                </h3>
            </div>
            <p className="mt-2 min-h-12 text-sm text-white/80">{copy}</p>
            <div className="mt-4 flex min-h-20 flex-wrap content-start gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag.label}
                        className="theme-chip flex items-center gap-2 rounded-full px-3 py-1 text-[11px] text-white/70"
                    >
                        {tag.label}
                        {tag.icon}
                    </span>
                ))}
            </div>
            <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row">
                <a
                    href={preview}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn-primary theme-btn-primary-sm inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
                >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Ver preview
                </a>
                <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn-secondary inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-semibold"
                >
                    <GitHub className="h-3.5 w-3.5" />
                    Ver github
                </a>
            </div>
        </article>
    )
}
