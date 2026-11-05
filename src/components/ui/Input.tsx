"use client";

import { useId } from "react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & {
  id?: string;
  label: string;
  hint?: string;
  error?: string;
  containerClassName?: string;
};

/**
 * Champ texte avec label visible, aide et message d'erreur accessible.
 *
 * Exemple :
 * <Input label="Ville" name="ville" hint="Brazzaville, Pointe-Noire…" />
 * <Input label="E-mail" type="email" error="Adresse e-mail invalide." />
 */
export function Input({
  id,
  label,
  hint,
  error,
  className,
  containerClassName,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className={cn("flex flex-col gap-1", containerClassName)}>
      <label
        htmlFor={inputId}
        className="text-sm font-semibold text-ink-700"
      >
        {label}
      </label>
      <input
        {...props}
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={cn(
          "h-11 w-full rounded-sm border border-ink-400 bg-surface-0 px-3 text-base text-ink-900 placeholder:text-ink-500 focus:border-brand-600",
          error && "border-danger-fg",
          className,
        )}
      />
      {hint ? (
        <p id={hintId} className="text-sm text-ink-500">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={errorId}
          className="flex items-center gap-1 text-sm text-danger-fg"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 shrink-0"
          >
            <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm0 9.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
          </svg>
          {error}
        </p>
      ) : null}
    </div>
  );
}
