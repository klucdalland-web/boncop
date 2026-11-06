"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/search", label: "Explorer" },
  { href: "/admin", label: "Admin" },
  { href: "/about", label: "À propos" },
] as const;

type SessionUserWithRole = {
  role?: string;
};

/**
 * Client Component volontairement : lire la session côté serveur (auth())
 * dans le layout rendrait TOUTES les pages dynamiques et casserait
 * l'ISR de / et le SSG de /about. La session est donc lue côté client.
 */
export function Header() {
  const { data: session, status } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const role = (session?.user as SessionUserWithRole | undefined)?.role;
  const isAdmin = status === "authenticated" && role === "ADMIN";
  const visibleNavLinks = NAV_LINKS.filter(
    (link) => link.href !== "/admin" || isAdmin,
  );

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  async function handleSignOut() {
    closeMobileMenu();
    await signOut({ callbackUrl: "/" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="BonCop, accueil"
          className="group flex min-h-11 items-center gap-2.5"
          onClick={closeMobileMenu}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-brand-500 to-violet text-sm font-extrabold text-white shadow-glow transition group-hover:scale-105">
            B
          </span>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            BonCop
          </span>
        </Link>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 text-sm font-medium md:flex"
        >
          {visibleNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link inline-flex min-h-11 items-center text-slate-600 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 sm:flex">
            {status === "authenticated" ? (
              <>
                <Link
                  href="/profile/edit"
                  className="inline-flex min-h-11 items-center rounded-full bg-linear-to-r from-brand-600 to-violet px-4 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Mon profil
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-slate-700 transition hover:text-brand-600"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-linear-to-r from-brand-600 to-violet px-4 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  Rejoindre
                  <span aria-hidden="true" className="text-[10px]">
                    →
                  </span>
                </Link>
              </>
            )}
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            data-open={mobileOpen ? "true" : "false"}
            onClick={() => setMobileOpen((open) => !open)}
            className="menu-toggle flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg transition hover:bg-slate-100 md:hidden"
          >
            <span aria-hidden="true" className="hamburger-line" />
            <span aria-hidden="true" className="hamburger-line" />
            <span aria-hidden="true" className="hamburger-line" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!mobileOpen}
        className={cn(
          "mobile-menu border-t border-slate-200/60 bg-white md:hidden",
          mobileOpen && "open",
        )}
      >
        <nav aria-label="Navigation mobile" className="flex flex-col gap-1 px-4 py-3">
          {visibleNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3">
            {status === "authenticated" ? (
              <>
                <Link
                  href="/profile/edit"
                  onClick={closeMobileMenu}
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-linear-to-r from-brand-600 to-violet px-4 text-sm font-semibold text-white transition"
                >
                  Mon profil
                </Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-linear-to-r from-brand-600 to-violet px-4 text-sm font-semibold text-white transition"
                >
                  Rejoindre
                  <span aria-hidden="true" className="text-[10px]">
                    →
                  </span>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
