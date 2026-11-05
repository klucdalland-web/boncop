import Link from "next/link";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

const NAV_LINKS = [
  { href: "/search", label: "Trouver un freelance" },
  { href: "/#comment", label: "Comment ça marche" },
  { href: "/about", label: "À propos" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line-200 bg-surface-0">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-sm text-2xl font-bold tracking-tight text-ink-900"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-sm bg-brand-600 text-base text-white"
          >
            B
          </span>
          BonCop
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-2 text-sm font-semibold text-ink-700 hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden h-11 items-center rounded-sm px-4 text-sm font-semibold text-ink-700 hover:text-brand-600 md:inline-flex"
          >
            Se connecter
          </Link>
          <Link
            href="/register"
            className="hidden h-11 items-center rounded-sm border border-brand-600 px-4 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-600 hover:text-white sm:inline-flex"
          >
            Créer mon CV
          </Link>
          <HeaderMobileMenu />
        </div>
      </div>
    </header>
  );
}
