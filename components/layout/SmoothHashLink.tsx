"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

type SmoothHashLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export default function SmoothHashLink({
  href,
  className,
  children,
  onNavigate,
}: SmoothHashLinkProps) {
  const isHashLink = href.startsWith("#");

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isHashLink) return;

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (href === "#") {
      window.scrollTo({ top: 0, behavior });
      if (window.location.hash) {
        window.history.pushState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`
        );
      }
      onNavigate?.();
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    target.scrollIntoView({ behavior, block: "start" });
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
    onNavigate?.();
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
