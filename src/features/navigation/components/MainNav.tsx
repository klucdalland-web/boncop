"use client";

import type { MouseEventHandler } from "react";
import { cn } from "@/lib/cn";
import { MAIN_NAV_LINKS } from "../links";
import { NavLink, type NavLinkVariant } from "./NavLink";

export type MainNavProps = {
  /** Variante visuelle des liens (`desktop` | `mobile`). */
  variant?: Extract<NavLinkVariant, "desktop" | "mobile">;
  /** Label accessible du `<nav>`. */
  "aria-label"?: string;
  className?: string;
  /** Appelé au clic d'un lien (ex. fermer le menu mobile). */
  onNavigate?: MouseEventHandler<HTMLAnchorElement>;
};

/**
 * Navigation principale réutilisable (header desktop et menu mobile).
 * Les liens viennent de `MAIN_NAV_LINKS`.
 */
export function MainNav({
  variant = "desktop",
  "aria-label": ariaLabel = "Navigation principale",
  className,
  onNavigate,
}: MainNavProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className={cn(
        variant === "desktop"
          ? "hidden items-center gap-8 text-sm font-medium md:flex"
          : "flex flex-col gap-1",
        className,
      )}
    >
      {MAIN_NAV_LINKS.map((link) => (
        <NavLink
          key={link.href}
          link={link}
          variant={variant}
          onClick={onNavigate}
        />
      ))}
    </nav>
  );
}
