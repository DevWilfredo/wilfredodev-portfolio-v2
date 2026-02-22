import Image from "next/image";
import Container from "@/components/layout/Container";
import SmoothHashLink from "./SmoothHashLink";
import { FOOTER_LINKS, LOGO_SRC } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[linear-gradient(180deg,_rgba(8,11,22,0.78),_rgba(8,11,22,0.95))] text-white">
      <Container className="relative z-10 py-8">
        <div className="flex flex-col gap-6 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
            <Image
              src={LOGO_SRC}
              alt="Wilfredo Dev"
              width={96}
              height={28}
              className="h-7 w-auto object-contain"
            />
            <div className="text-sm font-semibold tracking-[0.22em] text-white/85">
              WILFREDO <span className="text-white/55">DEV</span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FOOTER_LINKS.map((item) => (
              <SmoothHashLink
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </SmoothHashLink>
            ))}
          </nav>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-white/55 sm:text-left">
          © {year} Wilfredo Dev. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
