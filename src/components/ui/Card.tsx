import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type CardProps = {
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Carte générique. `interactive` ajoute l'ombre de survol sans déplacement
 * (évite tout CLS), pour une carte cliquable ou un lien.
 *
 * Exemple :
 * <Card interactive><ProfileSummary /></Card>
 */
export function Card({
  interactive = false,
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-md border border-line-200 bg-surface-0 p-4 shadow-card",
        interactive && "transition-shadow hover:shadow-raised",
        className,
      )}
    >
      {children}
    </div>
  );
}
