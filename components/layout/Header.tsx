"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "@/components/layout/Container";
import { NAV_ITEMS } from "@/data";
import SmoothHashLink from "./SmoothHashLink";

const LOGO_SRC = "/logo4.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionHrefs = useMemo(
    () => NAV_ITEMS.map((item) => item.href).filter((href) => href.startsWith("#")),
    []
  );

  useEffect(() => {
    const updateNavState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 16);

      const offset = 140;
      const targets = sectionHrefs
        .map((href) => {
          const element = document.querySelector<HTMLElement>(href);
          return element ? { href, top: element.offsetTop } : null;
        })
        .filter((item): item is { href: string; top: number } => item !== null)
        .sort((a, b) => a.top - b.top);

      let nextActive = targets[0]?.href ?? "#inicio";

      for (const target of targets) {
        if (scrollY + offset >= target.top) {
          nextActive = target.href;
        }
      }

      setActiveHref((prev) => (prev === nextActive ? prev : nextActive));
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
    };
  }, [sectionHrefs]);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMenuOnResize);
    return () => window.removeEventListener("resize", closeMenuOnResize);
  }, []);

  const shellClassName = isScrolled || isMenuOpen
    ? "border-white/10 bg-[linear-gradient(180deg,_rgba(8,11,22,0.9),_rgba(8,11,22,0.74))] shadow-[0_20px_55px_rgba(5,10,30,0.45)] backdrop-blur-xl"
    : "border-white/0 bg-transparent";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4 sm:pt-5">
        <div
          className={`rounded-2xl border transition-all duration-300 ${shellClassName}`}
        >
          <div className="flex h-16 items-center justify-between gap-3 px-3 sm:px-5">
            <SmoothHashLink
              href="#inicio"
              className="flex min-w-0 items-center gap-3"
              onNavigate={() => setIsMenuOpen(false)}
            >
              <Image
                src={LOGO_SRC}
                alt="Wilfredo Dev"
                width={140}
                height={40}
                priority
                className="h-9 w-auto object-contain sm:h-10"
                sizes="140px"
              />
              <div className="hidden text-xs font-semibold tracking-[0.28em] text-white/80 sm:block">
                WILFREDO <span className="text-white/50">DEV</span>
              </div>
            </SmoothHashLink>

            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_ITEMS.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <SmoothHashLink
                    key={item.label}
                    href={item.href}
                    onNavigate={() => setIsMenuOpen(false)}
                    className={`relative rounded-full px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`theme-accent-underline absolute bottom-1 left-3 h-0.5 transition-all duration-300 ${
                        isActive ? "w-[calc(100%-1.5rem)] opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </SmoothHashLink>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="theme-chip-soft grid h-10 w-10 place-items-center rounded-full text-white/80 transition hover:bg-white/10 lg:hidden"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>

          <div
            className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 lg:hidden ${
              isMenuOpen ? "max-h-80 opacity-100 pb-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mx-3 border-t border-white/10 pt-3 sm:mx-5">
              <div className="grid gap-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeHref === item.href;

                  return (
                    <SmoothHashLink
                      key={item.label}
                      href={item.href}
                      onNavigate={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-white/10 text-white ring-1 ring-blue-300/20"
                          : "text-white/75 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`h-2 w-2 rounded-full transition ${
                          isActive
                            ? "theme-dot-accent-soft opacity-100"
                            : "bg-white/20 opacity-60"
                        }`}
                      />
                    </SmoothHashLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
