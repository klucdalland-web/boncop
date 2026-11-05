import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/cn";

export type ErrorStateProps = {
  title: string;
  description: string;
  onRetry?: () => void;
  digest?: string;
  className?: string;
};

/**
 * État d'erreur : que s'est-il passé, est-ce grave, que faire.
 * Aucune excuse, aucun message technique.
 *
 * Exemple :
 * <ErrorState
 *   title="Impossible de charger les profils"
 *   description="La connexion a échoué. Vérifiez votre réseau, puis réessayez."
 *   onRetry={refetch}
 * />
 */
export function ErrorState({
  title,
  description,
  onRetry,
  digest,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        "rounded-md border border-danger-fg bg-danger-bg p-6",
        className,
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="h-6 w-6 text-danger-fg"
      >
        <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 17.5A1.8 1.8 0 0 0 4 20h16a1.8 1.8 0 0 0 1.6-2.5L13.7 3.9a1.8 1.8 0 0 0-3.4 0Z" />
      </svg>
      <h2 className="mt-3 text-xl font-semibold text-ink-900">{title}</h2>
      <p className="mt-2 text-base text-ink-700">{description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {onRetry ? <Button onClick={onRetry}>Réessayer</Button> : null}
        <Link
          href="/"
          className="inline-flex h-11 items-center rounded-sm px-4 text-sm font-semibold text-brand-600 hover:bg-brand-100"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
      {digest ? (
        <p className="mt-4 font-mono text-xs text-ink-500">
          Référence : {digest}
        </p>
      ) : null}
    </div>
  );
}
