import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type LinkButtonVariant = "primary" | "secondary" | "ghost";
export type LinkButtonSize = "md" | "lg";

export type LinkButtonProps = {
  href: string;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  className?: string;
  children: ReactNode;
};

const variants: Record<LinkButtonVariant, string> = {
  primary: "bg-brand-600 text-surface-0 hover:bg-brand-700 active:bg-brand-800",
  secondary:
    "bg-surface-0 text-ink-700 border border-ink-400 hover:bg-surface-100",
  ghost: "text-brand-600 hover:bg-brand-100",
};

const sizes: Record<LinkButtonSize, string> = {
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-[52px] px-6 text-base",
};

/**
 * Lien stylé comme un bouton, à réserver à la navigation.
 * Pour une action (soumission, mutation, ouverture de modale), utiliser `Button`.
 *
 * Exemple :
 * <LinkButton href="/search" variant="primary" size="lg">
 *   Trouver un freelance
 * </LinkButton>
 */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-sm font-semibold transition-colors",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      {children}
    </Link>
  );
}
