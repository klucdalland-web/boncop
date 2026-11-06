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
  className="bg-white rounded-2xl border border-slate-200/80 shadow-soft p-6 lg:sticky lg:top-24"
>
  <div className="flex items-center justify-between mb-5">
    <h3 className="font-bold text-sm flex items-center gap-2">
      <i className="fas fa-sliders text-brand-600"></i> Filtres
    </h3>
    <a 
      href="/search" 
      className="text-xs text-slate-400 hover:text-pink-600 font-medium transition"
    >
      Reset
    </a>
  </div>

  <div className="mb-5">
    <label htmlFor="ville" className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
      Ville
    </label>
    <select 
      id="ville"
      name="ville"
      defaultValue={selectedCity}
      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm bg-slate-50 outline-none focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100 transition"
    >
      <option value="">Toutes les villes</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  </div>

  <div className="mb-5">
    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
      Métiers
    </label>
    
    {metiers.length > 0 ? (
      <div className="flex flex-col gap-1 max-h-56 overflow-y-auto pr-1">
        {metiers.map((metier) => (
          <label 
            key={metier.id} 
            className="flex items-center gap-2.5 text-sm cursor-pointer px-2 py-1.5 rounded-lg hover:bg-slate-50 transition"
          >
            <input 
              type="checkbox" 
              name="metierIds"
              value={metier.id}
              checked={selectedIds.includes(metier.id)}
              onChange={(event) => toggleMetier(metier.id, event.target.checked)}
              className="w-4 h-4 accent-brand-600 rounded" 
            />
            <span>{metier.libelle}</span>
          </label>
        ))}
      </div>
    ) : (
      <p className="rounded-xl bg-slate-50 p-3 text-xs text-slate-500">
        Aucun métier n'est encore disponible. Les filtres seront proposés dès que l'administrateur aura ajouté des métiers.
      </p>
    )}
  </div>

  <button 
    type="submit"
    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-brand-600 to-violet text-white text-sm shadow-soft hover:shadow-glow transition"
  >
    <i className="fas fa-magnifying-glass text-xs"></i> Appliquer
  </button>
</form>

  );
}