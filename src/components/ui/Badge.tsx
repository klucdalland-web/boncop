import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

export type BadgeProps = {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
};

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  success: "bg-success-bg text-success-fg",
  warning: "bg-warning-bg text-warning-fg",
  danger: "bg-danger-bg text-danger-fg",
  info: "bg-info-bg text-info-fg",
  neutral: "bg-surface-100 text-ink-700",
};

/**
 * Badge de statut. L'information ne doit jamais reposer sur la couleur seule :
 * le libellé porte le sens.
 *
 * Exemple :
 * <Badge variant="success">Validé</Badge>
 */
export function Badge({
  variant = "neutral",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
