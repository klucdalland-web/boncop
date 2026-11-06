import Link from "next/link";
import { SearchFilters } from "@/features/search/components/SearchFilters";
import {
  getSearchFreelances,
  getSearchOptions,
} from "@/features/search/queries";

type SearchParams = {
  ville?: string | string[];
  metierIds?: string | string[];
};

type SearchPageProps = {
  searchParams: Promise<SearchParams>;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Trouver un freelance | BonCop",
  description: "Recherchez des freelances au Congo par ville et par métier.",
};

function getFirstValue(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0]?.trim() ?? "";
  }

  return value?.trim() ?? "";
}

function getMetierIds(value: string | string[] | undefined): number[] {
  const values = Array.isArray(value) ? value : value ? [value] : [];

  return Array.from(
    new Set(
      values
        .map((item) => Number(item))
        .filter((id) => Number.isSafeInteger(id) && id > 0)
    )
  );
}

function getFreelanceName(prenom: string | null, nom: string | null): string {
  return [prenom, nom].filter(Boolean).join(" ") || "Freelance BonCop";
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const selectedCity = getFirstValue(params.ville);
  const selectedMetierIds = getMetierIds(params.metierIds);

  const [options, freelances] = await Promise.all([
    getSearchOptions(),
    getSearchFreelances({
      ville: selectedCity || undefined,
      metierIds: selectedMetierIds,
    }),
  ]);

  return (
  <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <header className="mb-8 space-y-3">
      <p className="text-sm font-semibold text-brand-700">BonCop / Recherche</p>
      <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        Trouvez le bon freelance
      </h1>
      <p className="max-w-2xl text-base leading-7 text-ink-500">
        Choisissez une ville et un ou plusieurs métiers pour découvrir les
        profils publiés au Congo.
      </p>
    </header>

    <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
      {/* Colonne gauche : filtres sticky */}
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <SearchFilters
          cities={options.cities}
          metiers={options.metiers}
          selectedCity={selectedCity}
          selectedMetierIds={selectedMetierIds}
        />
      </aside>

      {/* Colonne droite : résultats */}
      <section aria-labelledby="search-results-title" className="min-w-0">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="search-results-title" className="text-2xl font-bold text-ink-900">
              Profils disponibles
            </h2>
            <p className="mt-1 text-sm text-ink-500" aria-live="polite">
              {freelances.length} profil{freelances.length > 1 ? "s" : ""} affiché
              {freelances.length > 1 ? "s" : ""}
            </p>
          </div>
          <Link
            href="/register"
            className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline"
          >
            Vous êtes freelance ? Créez votre profil
          </Link>
        </div>

        {freelances.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-5">
            {freelances.map((freelance) => {
              const name = getFreelanceName(freelance.prenom, freelance.nom);
              const metierLabels = freelance.userMetiers.map(
                (relation) => relation.metier.libelle
              );
              const initials =
                `${(freelance.prenom || "").trim().charAt(0)}${(freelance.nom || "").trim().charAt(0)}`.toUpperCase() || "?";
              const location =
                [freelance.ville, freelance.quartier].filter(Boolean).join(" · ") ||
                "Localisation non renseignée";

              return (
                <Link
                  key={freelance.id}
                  href={`/profile/${freelance.id}`}
                  className="group block bg-white rounded-2xl p-6 border border-slate-200/80 shadow-soft hover:shadow-lift hover:border-brand-200 transition"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-sm">
                      {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-sm text-slate-900 truncate">
                        {name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 truncate">
                        <i className="fas fa-location-dot mr-1" aria-hidden="true" />
                        {location}
                      </p>
                    </div>
                    <i
                      className="fas fa-bookmark text-slate-300 hover:text-pink-500 cursor-pointer transition"
                      aria-hidden="true"
                    />
                  </div>

                  {metierLabels.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5">
                      {metierLabels.map((label) => (
                        <span
                          key={label}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-semibold"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500">Métier non renseigné</p>
                  )}

                  <div className="flex items-center justify-between mt-4 pt-3.5 border-t border-slate-100 text-xs text-slate-500">
                    <span>
                      <i className="fas fa-eye mr-1" aria-hidden="true" />
                      {freelance.profileViews} vue
                      {freelance.profileViews > 1 ? "s" : ""}
                    </span>
                    <span className="font-semibold text-brand-600 group-hover:translate-x-0.5 transition-transform">
                      Voir →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-line-200 bg-surface-100 px-5 py-12 text-center">
            <h3 className="text-lg font-semibold text-ink-900">
              Aucun profil ne correspond à votre recherche
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-ink-500">
              Essayez une autre ville ou retirez un métier de la sélection.
              Seuls les profils validés par l&apos;administration sont affichés.
            </p>
            <Link
              href="/search"
              className="mt-5 inline-flex min-h-11 items-center rounded-md border border-line-200 bg-white px-4 text-sm font-semibold text-ink-700 hover:bg-surface-100"
            >
              Réinitialiser la recherche
            </Link>
          </div>
        )}
      </section>
    </div>
  </main>
);
}