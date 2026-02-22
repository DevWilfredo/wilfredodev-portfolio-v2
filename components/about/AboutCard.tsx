type AboutCardProps = {
    icon: React.ReactNode;
    title: string;
    copy: string;
}


export default function AboutCard({ icon, title, copy }: AboutCardProps): React.ReactNode {
    return (
        <div
            className="theme-surface-card-soft rounded-2xl p-4"
        >
            <div className="flex items-center gap-3">
                <div className="theme-icon-badge grid h-10 w-10 place-items-center rounded-xl">
                    {icon}
                </div>
                <div className="text-lg font-semibold text-white">
                    {title}
                </div>
            </div>
            <p className="mt-2 text-[15px] leading-6 text-white/85">
                {copy}
            </p>
        </div>)
}