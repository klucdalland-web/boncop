import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 disabled:hover:bg-surface-100",
  secondary:
    "border border-ink-400 bg-surface-0 text-ink-700 hover:bg-surface-100 disabled:hover:bg-surface-100",
  ghost:
    "text-brand-600 hover:bg-brand-100 disabled:hover:bg-surface-100",
  danger: "bg-danger-fg text-white hover:bg-danger-fg/90",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-11 px-4 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-[52px] px-6 text-base",
};

/**
 * Bouton générique BonCop (tokens de `docs/brand.md`, section 6).
 *
 * Exemple :
 * <Button variant="primary" size="md" onClick={save}>Enregistrer</Button>
 * <Button variant="secondary" loading>Envoi en cours</Button>
 */
export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:border-transparent disabled:bg-surface-100 disabled:text-ink-500",
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
        className,
      )}
    >
      <span className={loading ? "invisible" : undefined}>{children}</span>
      {loading ? (
        <span className="absolute inset-0 grid place-items-center">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4 animate-spin"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
            />
            <path
              d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4z"
              fill="currentColor"
              className="opacity-75"
            />
          </svg>
        </span>
      ) : null}
    </button>
  );
}
