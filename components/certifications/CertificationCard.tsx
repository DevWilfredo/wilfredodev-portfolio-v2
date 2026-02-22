import type { CertificationItem } from "@/data";
import CertificationMediaMark from "./CertificationMediaMark";

type CertificationCardProps = {
  cert: CertificationItem;
};

export default function CertificationCard({ cert }: CertificationCardProps) {
  const { title, year, org, media, issuerLogo, credentialUrl } = cert;

  return (
    <div className="theme-surface-card-soft rounded-2xl p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-start gap-4">
          <CertificationMediaMark media={media} variant="cert" />
          <div className="min-w-0">
            <div className="text-base leading-snug font-semibold text-white">
              {title}
            </div>
            <div className="mt-1">
              {issuerLogo ? (
                <div className="theme-chip inline-flex items-center gap-2 rounded-full px-2 py-1">
                  <CertificationMediaMark media={issuerLogo} variant="issuer" />
                  <span className="truncate text-xs text-white/80">{org}</span>
                </div>
              ) : (
                <div className="text-sm text-white/65">{org}</div>
              )}
            </div>
            <div className="theme-text-accent mt-1 text-xs">{year}</div>
          </div>
        </div>
        <a href={credentialUrl} target="_blank" className="theme-btn-primary-soft shrink-0 self-start rounded-full px-4 py-2 text-xs font-semibold">
            Ver credencial
        </a>
      </div>
    </div>
  );
}
