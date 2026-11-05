"use client";

import { useState } from "react";

type SearchFiltersProps = {
  cities: string[];
  metiers: Array<{
    id: number;
    libelle: string;
  }>;
  selectedCity: string;
  selectedMetierIds: number[];
};

export function SearchFilters({
  cities,
  metiers,
  selectedCity,
  selectedMetierIds,
}: SearchFiltersProps) {
  const [selectedIds, setSelectedIds] = useState(selectedMetierIds);

  function toggleMetier(id: number, checked: boolean) {
    setSelectedIds((currentIds) => {
      if (checked) {
        return currentIds.includes(id) ? currentIds : [...currentIds, id];
      }

      return currentIds.filter((currentId) => currentId !== id);
    });
  }

  return (
    <form
      action="/search"
      method="get"
      className="space-y-6 rounded-lg border border-line-200 bg-surface-0 p-5 shadow-card sm:p-6"
    >
      <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div className="space-y-2">
          <label
            htmlFor="ville"
            className="block text-sm font-semibold text-ink-900"
          >
            Ville
          </label>
          <select
            id="ville"
            name="ville"
            defaultValue={selectedCity}
            className="min-h-11 w-full rounded-md border border-ink-400 bg-white px-3 text-base text-ink-900"
          >
            <option value="">Toutes les villes</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <p className="text-sm text-ink-500">
            Les villes proposées correspondent aux profils publiés.
          </p>
        </div>

        <fieldset className="space-y-3">
          <legend className="text-sm font-semibold text-ink-900">
            Métiers
          </legend>
          {metiers.length > 0 ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {metiers.map((metier) => (
                <label
                  key={metier.id}
                  className="flex min-h-11 items-center gap-3 rounded-md border border-line-200 px-3 py-2 text-sm text-ink-700 transition hover:border-brand-600"
                >
                  <input
                    type="checkbox"
                    name="metierIds"
                    value={metier.id}
                    checked={selectedIds.includes(metier.id)}
                    onChange={(event) =>
                      toggleMetier(metier.id, event.target.checked)
                    }
                    className="size-4 accent-brand-600"
                  />
                  <span>{metier.libelle}</span>
                </label>
              ))}
            </div>
          ) : (
            <p className="rounded-md bg-surface-100 p-3 text-sm text-ink-500">
              Aucun métier n'est encore disponible. Les filtres seront proposés
              dès que l'administrateur aura ajouté des métiers.
            </p>
          )}
        </fieldset>
      </div>

      <div
        className="flex flex-col gap-3 border-t border-line-200 pt-5 sm:flex-row sm:items-center"
      >
        <p className="text-sm text-ink-500" aria-live="polite">
          {selectedIds.length} métier{selectedIds.length > 1 ? "s" : ""} sélectionné
          {selectedIds.length > 1 ? "s" : ""}
        </p>
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:justify-end">
          <a
            href="/search"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-line-200 px-4 text-sm font-semibold text-ink-700 hover:bg-surface-100"
          >
            Effacer les filtres
          </a>
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-600 px-5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Rechercher
          </button>
        </div>
      </div>
    </form>
  );
}
