"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { LinkButton } from "@/components/ui/LinkButton";

/**
 * Client Component volontairement : lire la session côté serveur (auth())
 * dans le layout rendrait TOUTES les pages dynamiques et casserait
 * l'ISR de / et le SSG de /about. La session est donc lue côté client.
 */
export function Header() {
  const { status } = useSession();

  return (
    <header className="border-b border-line-200 bg-surface-0">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3"
      >
        <Link
          href="/"
          className="inline-flex min-h-11 items-center text-xl font-bold text-brand-600"
        >
          BonCop
        </Link>

        <ul className="flex items-center gap-2">
          <li>
            <Link
              href="/search"
              className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-ink-700 hover:text-brand-600"
            >
              Recherche
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link
              href="/about"
              className="inline-flex min-h-11 items-center px-3 text-sm font-semibold text-ink-700 hover:text-brand-600"
            >
              À propos
            </Link>
          </li>
          <li>
            {status === "authenticated" ? (
              <LinkButton href="/profile/edit">Mon profil</LinkButton>
            ) : (
              // Pendant "loading", on affiche "Connexion" : largeur stable, pas de CLS
              <LinkButton href="/login" variant="secondary">
                Connexion
              </LinkButton>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
